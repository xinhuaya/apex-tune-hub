'use client';

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { ReactNode } from 'react';
import {
  calculateDriftTune,
  calculateGearRatio,
  calculateTune,
  classOptions,
  drivetrainOptions,
  formatResultForClipboard,
  forzaDriftZoneChecks,
  forzaGearRouteChecks,
  forzaTuneCornerChecks,
  issueOptions,
  raceTypeOptions,
  styleOptions,
  type CalculationResult,
  type ClassBand,
  type DriftInput,
  type Drivetrain,
  type GearInput,
  type HandlingIssue,
  type RaceType,
  type Recommendation,
  type RouteTestCheck,
  type TuneInput,
} from '@/lib/tuning/forza-horizon-6';
import { LocaleLink } from '@/i18n/navigation';
import { track } from '@vercel/analytics';
import {
  BookmarkPlusIcon,
  CheckIcon,
  CopyIcon,
  DatabaseIcon,
  FileTextIcon,
  GaugeIcon,
  LifeBuoyIcon,
  LinkIcon,
  RouteIcon,
  TableIcon,
  Trash2Icon,
} from 'lucide-react';

type StringRecord = Record<string, string>;
type SavedPreset = {
  id: string;
  title: string;
  summary: string;
  url: string;
  createdAt: string;
};
type TestLog = {
  route: string;
  baseline: string;
  runOne: string;
  runTwo: string;
  verdict: string;
};
type PresetConfig<T extends StringRecord> = {
  [K in keyof T]: {
    key: string;
    values: readonly T[K][];
  };
};
type ToolEventProperties = Record<
  string,
  string | number | boolean | null | undefined
>;

const toolEventStorageKey = 'apex-tune-hub:fh6-tool-events';
const testLogFieldLabels: Array<{
  key: keyof TestLog;
  label: string;
  shortLabel: string;
}> = [
  { key: 'route', label: 'Route or event name', shortLabel: 'Route' },
  {
    key: 'baseline',
    label: 'Baseline symptom or time',
    shortLabel: 'Baseline',
  },
  { key: 'runOne', label: 'Proof run 1 result', shortLabel: 'Run 1' },
  { key: 'runTwo', label: 'Proof run 2 result', shortLabel: 'Run 2' },
  {
    key: 'verdict',
    label: 'Keep, revert, or retest verdict',
    shortLabel: 'Verdict',
  },
];

function trackToolEvent(action: string, properties: ToolEventProperties = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const event = {
    action,
    path: window.location.pathname,
    ...properties,
  };

  try {
    track('FH6 Tool Action', event);
  } catch {
    // Analytics should never block the calculator UI.
  }

  try {
    const rawValue = window.localStorage.getItem(toolEventStorageKey);
    const currentEvents = rawValue ? JSON.parse(rawValue) : [];
    const nextEvents = [
      {
        ...event,
        at: new Date().toISOString(),
      },
      ...(Array.isArray(currentEvents) ? currentEvents : []),
    ].slice(0, 50);

    window.localStorage.setItem(
      toolEventStorageKey,
      JSON.stringify(nextEvents)
    );
  } catch {
    // Local diagnostics are best effort only.
  }
}

function trackToolInputChange(
  tool: string,
  field: string,
  value: string,
  input: StringRecord
) {
  trackToolEvent('change_tool_input', {
    tool,
    field,
    value,
    ...input,
  });
}

function parsePresetInput<T extends StringRecord>(
  defaults: T,
  config: PresetConfig<T>
): T {
  if (typeof window === 'undefined') {
    return defaults;
  }

  const params = new URLSearchParams(window.location.search);
  const nextInput = { ...defaults };

  for (const key of Object.keys(config) as Array<keyof T>) {
    const paramValue = params.get(config[key].key);
    if (paramValue && config[key].values.includes(paramValue as T[keyof T])) {
      nextInput[key] = paramValue as T[typeof key];
    }
  }

  return nextInput;
}

function buildPresetUrl<T extends StringRecord>(
  input: T,
  config: PresetConfig<T>
) {
  if (typeof window === 'undefined') {
    return '';
  }

  const url = new URL(window.location.href);

  for (const key of Object.keys(config) as Array<keyof T>) {
    url.searchParams.set(config[key].key, input[key]);
  }

  return url.toString();
}

function storageKeyFor(toolId: string) {
  return `apex-tune-hub:${toolId}:saved-presets`;
}

function testLogStorageKeyFor(toolId: string) {
  return `apex-tune-hub:${toolId}:test-log`;
}

const emptyTestLog: TestLog = {
  route: '',
  baseline: '',
  runOne: '',
  runTwo: '',
  verdict: '',
};

function countCompletedTestLogFields(log: TestLog) {
  return [log.route, log.baseline, log.runOne, log.runTwo, log.verdict].filter(
    (value) => value.trim().length > 0
  ).length;
}

function getMissingTestLogFields(log: TestLog) {
  return testLogFieldLabels.filter(
    (field) => log[field.key].trim().length === 0
  );
}

function getTestLogStatus(completedFields: number) {
  if (completedFields >= 5) {
    return {
      label: 'Article-ready',
      note: 'This log has enough fields for CSV analysis and a verified guide note.',
    };
  }

  if (completedFields >= 3) {
    return {
      label: 'Almost ready',
      note: 'Add the missing proof run or verdict before turning this into content.',
    };
  }

  return {
    label: 'Draft',
    note: 'Start with the route and baseline so the test can be repeated.',
  };
}

function readSavedPresets(toolId: string): SavedPreset[] {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const rawValue = window.localStorage.getItem(storageKeyFor(toolId));
    if (!rawValue) {
      return [];
    }

    const parsed = JSON.parse(rawValue);
    return Array.isArray(parsed) ? parsed.slice(0, 6) : [];
  } catch {
    return [];
  }
}

function writeSavedPresets(toolId: string, presets: SavedPreset[]) {
  window.localStorage.setItem(
    storageKeyFor(toolId),
    JSON.stringify(presets.slice(0, 6))
  );
}

function readTestLog(toolId: string): TestLog {
  if (typeof window === 'undefined') {
    return emptyTestLog;
  }

  try {
    const rawValue = window.localStorage.getItem(testLogStorageKeyFor(toolId));
    if (!rawValue) {
      return emptyTestLog;
    }

    const parsed = JSON.parse(rawValue);

    return {
      route: typeof parsed.route === 'string' ? parsed.route : '',
      baseline: typeof parsed.baseline === 'string' ? parsed.baseline : '',
      runOne: typeof parsed.runOne === 'string' ? parsed.runOne : '',
      runTwo: typeof parsed.runTwo === 'string' ? parsed.runTwo : '',
      verdict: typeof parsed.verdict === 'string' ? parsed.verdict : '',
    };
  } catch {
    return emptyTestLog;
  }
}

function writeTestLog(toolId: string, log: TestLog) {
  window.localStorage.setItem(
    testLogStorageKeyFor(toolId),
    JSON.stringify(log)
  );
}

function makeSavedPresetTitle(
  toolId: string,
  shareUrl: string,
  result: CalculationResult
) {
  try {
    const params = new URL(shareUrl).searchParams;

    if (toolId === 'tune') {
      return `${params.get('class') ?? 'FH6'} ${params.get('drive') ?? 'tune'} ${params.get('race') ?? 'baseline'}`;
    }

    if (toolId === 'drift') {
      return `${params.get('drive') ?? 'FH6'} drift ${params.get('issue') ?? 'baseline'}`;
    }

    if (toolId === 'gear') {
      return `${params.get('gears') ?? 'FH6'}-speed ${params.get('race') ?? 'gear'} ${params.get('priority') ?? 'baseline'}`;
    }
  } catch {
    // Fall back to the generated title if a saved link cannot be parsed.
  }

  return result.title;
}

function displaySavedPresetTitle(preset: SavedPreset) {
  if (preset.title && !preset.title.includes('Forza Horizon 6')) {
    return preset.title;
  }

  try {
    const url = new URL(preset.url);
    const params = url.searchParams;
    const path = url.pathname;

    if (path.includes('drift-tune-calculator')) {
      return `${params.get('drive') ?? 'FH6'} drift ${params.get('issue') ?? 'baseline'}`;
    }

    if (path.includes('gear-ratio-calculator')) {
      return `${params.get('gears') ?? 'FH6'}-speed ${params.get('race') ?? 'gear'} ${params.get('priority') ?? 'baseline'}`;
    }

    return `${params.get('class') ?? 'FH6'} ${params.get('drive') ?? 'tune'} ${params.get('race') ?? 'baseline'}`;
  } catch {
    return preset.title || 'Saved FH6 preset';
  }
}

function formatSavedPresetDate(value: string) {
  try {
    return new Date(value).toLocaleString([], {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return 'Saved';
  }
}

function formatSavedPresetGarage(toolId: string, presets: SavedPreset[]) {
  return [
    `Apex Tune Hub ${toolId} preset garage`,
    '',
    ...presets.flatMap((preset, index) => [
      `${index + 1}. ${displaySavedPresetTitle(preset)}`,
      preset.summary,
      `URL: ${preset.url}`,
      `Saved: ${formatSavedPresetDate(preset.createdAt)}`,
      '',
    ]),
    'Generated by Apex Tune Hub. Reopen each URL to continue tuning from the same settings.',
  ].join('\n');
}

function formatProofRunPlan({
  toolId,
  result,
  shareUrl,
  testChecks,
}: {
  toolId: string;
  result: CalculationResult;
  shareUrl: string;
  testChecks?: RouteTestCheck[];
}) {
  const settingList = result.recommendations
    .slice(0, 3)
    .map(
      (recommendation) =>
        `- ${recommendation.setting}: ${recommendation.recommendation}`
    )
    .join('\n');
  const checks =
    testChecks && testChecks.length > 0
      ? testChecks.map((check) => `- ${check}`).join('\n')
      : '- Repeat the same route, same car, same assists, and same input device.';

  return [
    `Apex Tune Hub ${toolId} proof run`,
    '',
    `Calculator: ${shareUrl || 'Open the current Apex Tune Hub tool URL.'}`,
    `Baseline summary: ${result.summary}`,
    `Confidence: ${result.confidence}`,
    '',
    'Change first:',
    settingList || '- No setting recommendation generated yet.',
    '',
    'Run order:',
    '1. Record one baseline run before changing settings.',
    '2. Apply only the top 1-3 Apex Tune Hub changes.',
    '3. Repeat the same route twice and compare the same symptom.',
    '4. Save the preset only if both proof runs feel more repeatable.',
    '',
    'Route checks:',
    checks,
  ].join('\n');
}

function formatTestLog({
  toolId,
  result,
  shareUrl,
  testLog,
}: {
  toolId: string;
  result: CalculationResult;
  shareUrl: string;
  testLog: TestLog;
}) {
  return [
    `Apex Tune Hub ${toolId} test log`,
    '',
    `Calculator: ${shareUrl || 'Open the current Apex Tune Hub tool URL.'}`,
    `Baseline summary: ${result.summary}`,
    '',
    `Route/event: ${testLog.route || 'Not recorded yet'}`,
    `Baseline run: ${testLog.baseline || 'Not recorded yet'}`,
    `Proof run 1: ${testLog.runOne || 'Not recorded yet'}`,
    `Proof run 2: ${testLog.runTwo || 'Not recorded yet'}`,
    `Verdict: ${testLog.verdict || 'Not decided yet'}`,
    '',
    'Keep this log with screenshots or clips so the tune can become a verified Apex Tune Hub note later.',
  ].join('\n');
}

function csvCell(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

function formatTestLogCsv({
  toolId,
  result,
  shareUrl,
  testLog,
}: {
  toolId: string;
  result: CalculationResult;
  shareUrl: string;
  testLog: TestLog;
}) {
  const columns = [
    'recorded_at',
    'tool',
    'confidence',
    'summary',
    'route_or_event',
    'baseline_run',
    'proof_run_1',
    'proof_run_2',
    'verdict',
    'calculator_url',
  ];
  const values = [
    new Date().toISOString(),
    toolId,
    result.confidence,
    result.summary,
    testLog.route,
    testLog.baseline,
    testLog.runOne,
    testLog.runTwo,
    testLog.verdict,
    shareUrl,
  ];

  return [columns.join(','), values.map(csvCell).join(',')].join('\n');
}

function markdownTableCell(value: string) {
  return (value || 'Not recorded yet')
    .replaceAll('|', '\\|')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatProofTableMarkdown(testLog: TestLog) {
  const rows = [
    ['Baseline', testLog.baseline],
    ['Proof run 1', testLog.runOne],
    ['Proof run 2', testLog.runTwo],
    ['Verdict', testLog.verdict],
  ];

  return [
    '| Step | Result |',
    '| --- | --- |',
    ...rows.map(
      ([step, value]) =>
        `| ${markdownTableCell(step)} | ${markdownTableCell(value)} |`
    ),
  ].join('\n');
}

function formatArticleBrief({
  toolId,
  result,
  shareUrl,
  testLog,
  testChecks,
  completedFields,
  statusLabel,
}: {
  toolId: string;
  result: CalculationResult;
  shareUrl: string;
  testLog: TestLog;
  testChecks?: RouteTestCheck[];
  completedFields: number;
  statusLabel: string;
}) {
  const recommendations = result.recommendations
    .slice(0, 5)
    .map(
      (recommendation) =>
        `- ${recommendation.setting}: ${recommendation.recommendation}`
    );
  const routeChecks =
    testChecks && testChecks.length > 0
      ? testChecks.map((check) => `- ${check}`)
      : [
          '- Repeat the same route, same car, same assists, and same input device.',
        ];

  return [
    `# FH6 tune test brief: ${result.summary}`,
    '',
    `Tool: ${toolId}`,
    `Readiness: ${statusLabel} (${completedFields}/5 fields)`,
    `Calculator URL: ${shareUrl || 'Open the current Apex Tune Hub tool URL.'}`,
    `Confidence: ${result.confidence}`,
    '',
    '## Search intent',
    '- Primary: solve the exact handling or speed problem shown in this calculator state.',
    '- Secondary: show a repeatable route test so the article feels verified, not generic.',
    '',
    '## Test evidence',
    `- Route/event: ${testLog.route || 'Needs route name or event name'}`,
    `- Baseline run: ${testLog.baseline || 'Needs original symptom, time, or feel'}`,
    `- Proof run 1: ${testLog.runOne || 'Needs first repeatable result after changes'}`,
    `- Proof run 2: ${testLog.runTwo || 'Needs second repeatable result after changes'}`,
    `- Verdict: ${testLog.verdict || 'Needs keep, revert, or test again decision'}`,
    '',
    '## Recommended settings to explain',
    ...(recommendations.length > 0
      ? recommendations
      : ['- No setting recommendation generated yet.']),
    '',
    '## Route checks to mention',
    ...routeChecks,
    '',
    '## Images or clips needed',
    '- Screenshot 1: car/setup screen before the change.',
    '- Screenshot 2: same route or event result after proof run 1.',
    '- Screenshot 3: same route or event result after proof run 2.',
    '- Optional clip: 10-20 seconds showing the original symptom and the improved section.',
    '',
    '## Article structure',
    '1. State the problem and the car/class context in the first paragraph.',
    '2. Show the baseline symptom before recommending settings.',
    '3. Explain the first 1-3 setting changes and why they address the symptom.',
    '4. Add the two proof runs in a small table.',
    '5. End with when to keep, revert, or retest the tune.',
  ].join('\n');
}

function usePresetUrl<T extends StringRecord>(
  defaults: T,
  config: PresetConfig<T>
) {
  const [input, setInput] = useState<T>(defaults);
  const [shareUrl, setShareUrl] = useState('');
  const hasReadUrl = useRef(false);

  useEffect(() => {
    const parsed = parsePresetInput(defaults, config);
    hasReadUrl.current = true;
    setInput(parsed);
    setShareUrl(buildPresetUrl(parsed, config));
  }, [defaults, config]);

  useEffect(() => {
    if (!hasReadUrl.current || typeof window === 'undefined') {
      return;
    }

    const presetUrl = buildPresetUrl(input, config);
    setShareUrl(presetUrl);
    window.history.replaceState(null, '', presetUrl);
  }, [input, config]);

  return [input, setInput, shareUrl] as const;
}

async function writeClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall through to textarea copy for browsers that block Clipboard API.
    }
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

const tuneDefaults: TuneInput = {
  raceType: 'road',
  drivetrain: 'AWD',
  classBand: 'S1',
  handlingIssue: 'understeer',
  drivingStyle: 'balanced',
};

const tunePresetConfig: PresetConfig<TuneInput> = {
  raceType: {
    key: 'race',
    values: raceTypeOptions.map((option) => option.value),
  },
  drivetrain: {
    key: 'drive',
    values: drivetrainOptions.map((option) => option.value),
  },
  classBand: {
    key: 'class',
    values: classOptions.map((option) => option.value),
  },
  handlingIssue: {
    key: 'issue',
    values: issueOptions.map((option) => option.value),
  },
  drivingStyle: {
    key: 'style',
    values: styleOptions.map((option) => option.value),
  },
};

const tuneSymptomPresets: Array<{
  title: string;
  note: string;
  input: TuneInput;
}> = [
  {
    title: 'Pushes wide',
    note: 'Road AWD understeer baseline',
    input: {
      raceType: 'road',
      drivetrain: 'AWD',
      classBand: 'S1',
      handlingIssue: 'understeer',
      drivingStyle: 'balanced',
    },
  },
  {
    title: 'Rear steps out',
    note: 'RWD stability pass',
    input: {
      raceType: 'road',
      drivetrain: 'RWD',
      classBand: 'S1',
      handlingIssue: 'oversteer',
      drivingStyle: 'stable',
    },
  },
  {
    title: 'Too much spin',
    note: 'Street launch grip pass',
    input: {
      raceType: 'street',
      drivetrain: 'RWD',
      classBand: 'A',
      handlingIssue: 'wheelspin',
      drivingStyle: 'stable',
    },
  },
  {
    title: 'Slow launch',
    note: 'Drag AWD launch pass',
    input: {
      raceType: 'drag',
      drivetrain: 'AWD',
      classBand: 'S1',
      handlingIssue: 'slow-launch',
      drivingStyle: 'balanced',
    },
  },
  {
    title: 'Unstable braking',
    note: 'Street safety pass',
    input: {
      raceType: 'street',
      drivetrain: 'AWD',
      classBand: 'A',
      handlingIssue: 'unstable-braking',
      drivingStyle: 'stable',
    },
  },
  {
    title: 'No top speed',
    note: 'S2 road speed pass',
    input: {
      raceType: 'road',
      drivetrain: 'AWD',
      classBand: 'S2',
      handlingIssue: 'poor-top-speed',
      drivingStyle: 'aggressive',
    },
  },
];

const tuneIssueGuideLinks: Record<
  HandlingIssue,
  { label: string; href: string; hint: string }
> = {
  understeer: {
    label: 'Open understeer guide',
    href: '/games/forza-horizon-6/guides/fix-understeer',
    hint: 'Use this when the car misses apexes or pushes wide.',
  },
  oversteer: {
    label: 'Open oversteer guide',
    href: '/games/forza-horizon-6/guides/fix-oversteer',
    hint: 'Use this when the rear snaps, rotates too fast, or exits feel unsafe.',
  },
  wheelspin: {
    label: 'Open wheelspin guide',
    href: '/games/forza-horizon-6/guides/fix-wheelspin',
    hint: 'Use this when launch or corner exit wastes grip.',
  },
  'slow-launch': {
    label: 'Open launch guide',
    href: '/games/forza-horizon-6/guides/fix-slow-launch',
    hint: 'Use this when first gear bogs, spins, or loses the first seconds.',
  },
  'unstable-braking': {
    label: 'Open braking guide',
    href: '/games/forza-horizon-6/guides/fix-unstable-braking',
    hint: 'Use this when braking makes the car dart, lock, or rotate too much.',
  },
  'poor-top-speed': {
    label: 'Open top speed guide',
    href: '/games/forza-horizon-6/guides/fix-poor-top-speed',
    hint: 'Use this when long straights feel capped or the car cannot pull gear.',
  },
};

const tuneActionPlans: Record<
  HandlingIssue,
  {
    focus: string;
    firstChange: string;
    routeTest: string;
    stopWhen: string;
  }
> = {
  understeer: {
    focus: 'Front bite before power',
    firstChange:
      'Start with front tire pressure, front anti-roll bar, and front differential changes before touching power upgrades.',
    routeTest:
      'Use one medium-speed corner and watch whether the car can hold the apex without extra steering lock.',
    stopWhen:
      'Stop when the car rotates with one clean steering input and does not snap on corner exit.',
  },
  oversteer: {
    focus: 'Rear stability before rotation',
    firstChange:
      'Calm rear alignment, rear anti-roll bar, and differential lock before reducing all rotation.',
    routeTest:
      'Use a corner exit where you normally apply throttle early and check whether the rear steps out.',
    stopWhen:
      'Stop when you can repeat three exits without lifting more than once.',
  },
  wheelspin: {
    focus: 'Traction before final drive',
    firstChange:
      'Stabilize rear tire pressure and differential behavior before changing every gear ratio.',
    routeTest:
      'Launch and exit a second-gear corner three times, then compare how quickly the car hooks up.',
    stopWhen:
      'Stop when throttle can be added progressively without the car wasting the first two seconds.',
  },
  'slow-launch': {
    focus: 'First gear and launch grip',
    firstChange:
      'Tune first gear, final drive, and launch traction as a group. Do not chase top speed first.',
    routeTest:
      'Run the same standing launch three times and watch first-to-second shift behavior.',
    stopWhen:
      'Stop when the car leaves cleanly without bogging or hitting the limiter before second gear.',
  },
  'unstable-braking': {
    focus: 'Brake phase control',
    firstChange:
      'Adjust brake balance, rear stability, and suspension compression before adding more front bite.',
    routeTest:
      'Use the same braking marker and check whether the car darts, locks, or rotates before turn-in.',
    stopWhen:
      'Stop when braking inputs are repeatable and the car enters the corner on the intended line.',
  },
  'poor-top-speed': {
    focus: 'Reachable top gear',
    firstChange:
      'Lengthen final drive or upper gears only after the car can still pull through the previous gear.',
    routeTest:
      'Use the longest straight in the target event, not a highway-only test that the race never uses.',
    stopWhen:
      'Stop when top gear is reachable near the end of the straight without killing acceleration.',
  },
};

const driftDefaults: DriftInput = {
  drivetrain: 'RWD',
  powerLevel: 'medium',
  tireGrip: 'drift',
  problem: 'no-angle',
  skillLevel: 'beginner',
};

const driftPresetConfig: PresetConfig<DriftInput> = {
  drivetrain: {
    key: 'drive',
    values: ['RWD', 'AWD'],
  },
  powerLevel: {
    key: 'power',
    values: ['low', 'medium', 'high'],
  },
  tireGrip: {
    key: 'tires',
    values: ['street', 'sport', 'race', 'drift'],
  },
  problem: {
    key: 'issue',
    values: [
      'spins-out',
      'no-angle',
      'bogs-down',
      'snaps-back',
      'too-slippery',
    ],
  },
  skillLevel: {
    key: 'skill',
    values: ['beginner', 'intermediate', 'advanced'],
  },
};

const driftSymptomPresets: Array<{
  title: string;
  note: string;
  input: DriftInput;
}> = [
  {
    title: 'Spins out',
    note: 'Calm RWD recovery',
    input: {
      drivetrain: 'RWD',
      powerLevel: 'medium',
      tireGrip: 'drift',
      problem: 'spins-out',
      skillLevel: 'beginner',
    },
  },
  {
    title: 'No angle',
    note: 'Beginner angle hold',
    input: {
      drivetrain: 'RWD',
      powerLevel: 'medium',
      tireGrip: 'drift',
      problem: 'no-angle',
      skillLevel: 'beginner',
    },
  },
  {
    title: 'Bogs down',
    note: 'Main gear power test',
    input: {
      drivetrain: 'RWD',
      powerLevel: 'low',
      tireGrip: 'sport',
      problem: 'bogs-down',
      skillLevel: 'intermediate',
    },
  },
  {
    title: 'Snaps back',
    note: 'Transition recovery',
    input: {
      drivetrain: 'RWD',
      powerLevel: 'medium',
      tireGrip: 'drift',
      problem: 'snaps-back',
      skillLevel: 'intermediate',
    },
  },
  {
    title: 'Too slippery',
    note: 'AWD grip control',
    input: {
      drivetrain: 'AWD',
      powerLevel: 'high',
      tireGrip: 'street',
      problem: 'too-slippery',
      skillLevel: 'advanced',
    },
  },
];

const driftDrivetrainOptions: Array<{
  value: DriftInput['drivetrain'];
  label: string;
}> = [
  { value: 'RWD', label: 'RWD' },
  { value: 'AWD', label: 'AWD' },
];

const driftPowerOptions: Array<{
  value: DriftInput['powerLevel'];
  label: string;
}> = [
  { value: 'low', label: 'Low' },
  { value: 'medium', label: 'Medium' },
  { value: 'high', label: 'High' },
];

const driftTireOptions: Array<{
  value: DriftInput['tireGrip'];
  label: string;
}> = [
  { value: 'street', label: 'Street' },
  { value: 'sport', label: 'Sport' },
  { value: 'race', label: 'Race' },
  { value: 'drift', label: 'Drift' },
];

const driftProblemOptions: Array<{
  value: DriftInput['problem'];
  label: string;
}> = [
  { value: 'spins-out', label: 'Spins out' },
  { value: 'no-angle', label: 'Cannot hold angle' },
  { value: 'bogs-down', label: 'Bogs down' },
  { value: 'snaps-back', label: 'Snaps back on transition' },
  { value: 'too-slippery', label: 'Feels too slippery' },
];

const driftSkillOptions: Array<{
  value: DriftInput['skillLevel'];
  label: string;
}> = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
];

const driftProblemGuideLinks: Record<
  DriftInput['problem'],
  { label: string; href: string; hint: string }
> = {
  'spins-out': {
    label: 'Open drift settings guide',
    href: '/games/forza-horizon-6/guides/best-drift-tune-settings',
    hint: 'Use this when the car rotates too quickly or cannot recover for the next transition.',
  },
  'no-angle': {
    label: 'Open Japan drift setup',
    href: '/games/forza-horizon-6/guides/japan-drift-setup',
    hint: 'Use this when the car refuses to initiate or cannot hold angle through linked corners.',
  },
  'bogs-down': {
    label: 'Open drift scoring guide',
    href: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
    hint: 'Use this when the car falls out of power mid-drift or needs a clearer main gear.',
  },
  'snaps-back': {
    label: 'Open drift settings guide',
    href: '/games/forza-horizon-6/guides/best-drift-tune-settings',
    hint: 'Use this when transitions are dramatic but not repeatable.',
  },
  'too-slippery': {
    label: 'Open drift scoring guide',
    href: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
    hint: 'Use this when the car slides too freely and cannot score through a full zone.',
  },
};

const driftActionPlans: Record<
  DriftInput['problem'],
  {
    focus: string;
    firstChange: string;
    routeTest: string;
    stopWhen: string;
  }
> = {
  'spins-out': {
    focus: 'Recoverable angle first',
    firstChange:
      'Reduce the most aggressive rear lock and alignment choices before cutting all power.',
    routeTest:
      'Use one linked corner and watch whether the car catches the second transition without panic countersteer.',
    stopWhen:
      'Stop when you can repeat three transitions without the rear rotating past your steering input.',
  },
  'no-angle': {
    focus: 'Initiation without panic',
    firstChange:
      'Add front response and usable differential lock before chasing more horsepower.',
    routeTest:
      'Enter the same medium-speed drift corner and check whether angle builds before the apex.',
    stopWhen:
      'Stop when the car initiates cleanly and holds one main gear through the section.',
  },
  'bogs-down': {
    focus: 'Keep the main drift gear alive',
    firstChange:
      'Shorten the active drift gear or reduce grip slightly so rpm stays in the useful band.',
    routeTest:
      'Hold the same drift section in one gear and listen for the car falling below power.',
    stopWhen:
      'Stop when throttle maintains angle without forcing an extra mid-corner downshift.',
  },
  'snaps-back': {
    focus: 'Smooth transition catch',
    firstChange:
      'Soften the setup around transition speed before making the car sharper.',
    routeTest:
      'Link two corners and judge whether countersteer catches the car progressively.',
    stopWhen:
      'Stop when the transition feels catchable at the same steering speed three times in a row.',
  },
  'too-slippery': {
    focus: 'Grip before drama',
    firstChange:
      'Add usable tire grip or reduce differential aggression before adding more steering angle.',
    routeTest:
      'Run a full drift zone and check whether the car can stay on the scoring line, not only slide wide.',
    stopWhen:
      'Stop when the car still slides but can hold the intended width through the zone.',
  },
};

const gearDefaults: GearInput = {
  raceType: 'road',
  gears: '6',
  priority: 'balanced',
  symptom: 'bogs-after-shift',
};

const gearPresetConfig: PresetConfig<GearInput> = {
  raceType: {
    key: 'race',
    values: raceTypeOptions.map((option) => option.value),
  },
  gears: {
    key: 'gears',
    values: ['4', '5', '6', '7', '8', '9', '10'],
  },
  priority: {
    key: 'priority',
    values: ['acceleration', 'balanced', 'top-speed'],
  },
  symptom: {
    key: 'issue',
    values: [
      'hits-limiter',
      'never-top-gear',
      'slow-launch',
      'bogs-after-shift',
      'wheelspin',
    ],
  },
};

const gearSymptomPresets: Array<{
  title: string;
  note: string;
  input: GearInput;
}> = [
  {
    title: 'Hits limiter',
    note: 'Road top-end check',
    input: {
      raceType: 'road',
      gears: '6',
      priority: 'top-speed',
      symptom: 'hits-limiter',
    },
  },
  {
    title: 'Never top gear',
    note: 'Shorten usable range',
    input: {
      raceType: 'road',
      gears: '7',
      priority: 'balanced',
      symptom: 'never-top-gear',
    },
  },
  {
    title: 'Slow launch',
    note: 'First gear test',
    input: {
      raceType: 'drag',
      gears: '6',
      priority: 'acceleration',
      symptom: 'slow-launch',
    },
  },
  {
    title: 'Bogs after shift',
    note: 'Spacing test',
    input: {
      raceType: 'street',
      gears: '6',
      priority: 'balanced',
      symptom: 'bogs-after-shift',
    },
  },
  {
    title: 'Launch spin',
    note: 'Lengthen first',
    input: {
      raceType: 'drag',
      gears: '6',
      priority: 'acceleration',
      symptom: 'wheelspin',
    },
  },
];

const gearCountOptions: Array<{ value: GearInput['gears']; label: string }> = [
  { value: '4', label: '4 gears' },
  { value: '5', label: '5 gears' },
  { value: '6', label: '6 gears' },
  { value: '7', label: '7 gears' },
  { value: '8', label: '8 gears' },
  { value: '9', label: '9 gears' },
  { value: '10', label: '10 gears' },
];

const gearPriorityOptions: Array<{
  value: GearInput['priority'];
  label: string;
}> = [
  { value: 'acceleration', label: 'Acceleration' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'top-speed', label: 'Top speed' },
];

const gearSymptomOptions: Array<{
  value: GearInput['symptom'];
  label: string;
}> = [
  { value: 'hits-limiter', label: 'Hits limiter too early' },
  { value: 'never-top-gear', label: 'Never reaches top gear' },
  { value: 'slow-launch', label: 'Slow launch' },
  { value: 'bogs-after-shift', label: 'Bogs after shift' },
  { value: 'wheelspin', label: 'Wheelspin on launch' },
];

const gearActionPlans: Record<
  GearInput['symptom'],
  {
    focus: string;
    firstChange: string;
    routeTest: string;
    stopWhen: string;
  }
> = {
  'hits-limiter': {
    focus: 'Lengthen the usable top end',
    firstChange:
      'Lengthen final drive first, then the last gear if the car still hits limiter too early.',
    routeTest:
      'Use the longest straight in the target event and note rpm in the final two seconds.',
    stopWhen:
      'Stop when the car reaches near redline only at the end of the straight.',
  },
  'never-top-gear': {
    focus: 'Make every gear reachable',
    firstChange:
      'Shorten final drive or upper gear spacing until the final gear is reachable in the actual route.',
    routeTest:
      'Run the target straight and check whether the car can pull the top gear without stalling acceleration.',
    stopWhen:
      'Stop when top gear is usable without making first and second feel frantic.',
  },
  'slow-launch': {
    focus: 'Clean first-to-second launch',
    firstChange:
      'Shorten first gear only if the car bogs. If it spins, lengthen first before touching the full stack.',
    routeTest:
      'Do three standing launches and compare the first-to-second shift each time.',
    stopWhen:
      'Stop when launch rpm stays alive and the first shift lands back in useful power.',
  },
  'bogs-after-shift': {
    focus: 'Close the shift drop',
    firstChange:
      'Tighten spacing around the gear that drops too far after the shift, not every gear at once.',
    routeTest:
      'Shift at the same rpm three times and watch whether the car falls below the power band.',
    stopWhen:
      'Stop when the post-shift pull feels immediate without bouncing the limiter early.',
  },
  wheelspin: {
    focus: 'Control first gear torque',
    firstChange:
      'Lengthen first gear or soften final drive before changing tire compound or power.',
    routeTest:
      'Launch on the same surface three times and watch whether wheelspin lasts past first gear.',
    stopWhen:
      'Stop when the launch hooks up while second gear still pulls strongly.',
  },
};

const gearProblemGuideLinks: Record<
  GearInput['symptom'],
  { label: string; href: string; hint: string }
> = {
  'hits-limiter': {
    label: 'Open top speed guide',
    href: '/games/forza-horizon-6/guides/fix-poor-top-speed',
    hint: 'Use this when the car reaches limiter too early or runs out of gear before the longest straight ends.',
  },
  'never-top-gear': {
    label: 'Open gear tuning guide',
    href: '/games/forza-horizon-6/guides/advanced-gear-ratio-tuning',
    hint: 'Use this when the top gear exists on paper but the car cannot pull it on the route.',
  },
  'slow-launch': {
    label: 'Open launch guide',
    href: '/games/forza-horizon-6/guides/fix-slow-launch',
    hint: 'Use this when first gear bogs, the launch feels lazy, or the first shift falls out of power.',
  },
  'bogs-after-shift': {
    label: 'Open gear tuning guide',
    href: '/games/forza-horizon-6/guides/advanced-gear-ratio-tuning',
    hint: 'Use this when the car drops below the useful power band after a shift.',
  },
  wheelspin: {
    label: 'Open wheelspin guide',
    href: '/games/forza-horizon-6/guides/fix-wheelspin',
    hint: 'Use this when first gear is too short, throttle turns into smoke, or the car wastes launch grip.',
  },
};

function SelectField<T extends string>({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: T;
  onChange: (value: T) => void;
  options: Array<{ value: T; label: string }>;
}) {
  const id = useId();

  return (
    <label
      className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500"
      htmlFor={id}
    >
      <span>{label}</span>
      <select
        id={id}
        className="forza-select h-10 text-sm font-medium normal-case tracking-normal text-zinc-100"
        value={value}
        onChange={(event) => onChange(event.target.value as T)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function optionLabel<T extends string>(
  options: Array<{ value: T; label: string }>,
  value: T
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

const calculatorLanes = [
  {
    id: 'tune',
    label: 'Tune',
    href: '/tools/forza-horizon-6-tune-calculator',
    note: 'handling',
  },
  {
    id: 'drift',
    label: 'Drift',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
    note: 'angle',
  },
  {
    id: 'gear',
    label: 'Gear',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
    note: 'speed',
  },
] as const;

function CalculatorLaneSwitcher({ activeTool }: { activeTool: string }) {
  return (
    <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-3">
      {calculatorLanes.map((lane) => {
        const isActive = lane.id === activeTool;

        return (
          <LocaleLink
            className={`min-w-0 rounded-md border px-2 py-2 text-center transition ${
              isActive
                ? 'border-cyan-300/50 bg-cyan-300/[0.08] text-cyan-100'
                : 'border-white/10 bg-black/20 text-zinc-400 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04] hover:text-zinc-100'
            }`}
            href={lane.href}
            key={lane.id}
            onClick={() =>
              trackToolEvent('switch_calculator_lane', {
                from: activeTool,
                to: lane.id,
                href: lane.href,
              })
            }
          >
            <span className="block truncate text-sm font-semibold">
              {lane.label}
            </span>
            <span className="mt-0.5 block truncate text-[0.68rem] font-semibold uppercase tracking-[0.12em] opacity-70">
              {lane.note}
            </span>
          </LocaleLink>
        );
      })}
    </div>
  );
}

function ToolShell({
  eyebrow,
  toolId,
  title,
  description,
  children,
  nextStep,
  resultAside,
  result,
  shareUrl,
  testChecks,
}: {
  eyebrow: string;
  toolId: string;
  title: string;
  description: string;
  children: ReactNode;
  nextStep?: ReactNode;
  resultAside?: ReactNode;
  result: CalculationResult;
  shareUrl: string;
  testChecks?: RouteTestCheck[];
}) {
  const [copiedNotes, setCopiedNotes] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copiedProofPlan, setCopiedProofPlan] = useState(false);
  const [copiedTestLog, setCopiedTestLog] = useState(false);
  const [copiedCsv, setCopiedCsv] = useState(false);
  const [copiedArticleBrief, setCopiedArticleBrief] = useState(false);
  const [copiedProofTable, setCopiedProofTable] = useState(false);
  const [copiedGarage, setCopiedGarage] = useState(false);
  const [copiedSavedPresetId, setCopiedSavedPresetId] = useState('');
  const [saved, setSaved] = useState(false);
  const [savedTestLog, setSavedTestLog] = useState(false);
  const [savedPresets, setSavedPresets] = useState<SavedPreset[]>([]);
  const [testLog, setTestLog] = useState<TestLog>(emptyTestLog);
  const completedTestLogFields = countCompletedTestLogFields(testLog);
  const missingTestLogFields = getMissingTestLogFields(testLog);
  const testLogStatus = getTestLogStatus(completedTestLogFields);

  useEffect(() => {
    setSavedPresets(readSavedPresets(toolId));
    setTestLog(readTestLog(toolId));
  }, [toolId]);

  async function copyResult() {
    await writeClipboard(
      formatResultForClipboard(result, { presetUrl: shareUrl, testChecks })
    );
    trackToolEvent('copy_setup_notes', {
      tool: toolId,
      confidence: result.confidence,
      hasPresetUrl: Boolean(shareUrl),
    });
    setCopiedNotes(true);
    window.setTimeout(() => setCopiedNotes(false), 1800);
  }

  async function copyPresetUrl() {
    if (!shareUrl) {
      return;
    }

    await writeClipboard(shareUrl);
    trackToolEvent('copy_preset_link', {
      tool: toolId,
      confidence: result.confidence,
    });
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  async function copyProofRunPlan() {
    await writeClipboard(
      formatProofRunPlan({ toolId, result, shareUrl, testChecks })
    );
    trackToolEvent('copy_proof_run_plan', {
      tool: toolId,
      confidence: result.confidence,
      hasPresetUrl: Boolean(shareUrl),
    });
    setCopiedProofPlan(true);
    window.setTimeout(() => setCopiedProofPlan(false), 1800);
  }

  async function copyTestLog() {
    await writeClipboard(formatTestLog({ toolId, result, shareUrl, testLog }));
    trackToolEvent('copy_test_log', {
      tool: toolId,
      confidence: result.confidence,
      hasRoute: Boolean(testLog.route),
      hasVerdict: Boolean(testLog.verdict),
    });
    setCopiedTestLog(true);
    window.setTimeout(() => setCopiedTestLog(false), 1800);
  }

  async function copyTestLogCsv() {
    await writeClipboard(
      formatTestLogCsv({ toolId, result, shareUrl, testLog })
    );
    trackToolEvent('copy_test_log_csv', {
      tool: toolId,
      confidence: result.confidence,
      hasRoute: Boolean(testLog.route),
      hasVerdict: Boolean(testLog.verdict),
    });
    setCopiedCsv(true);
    window.setTimeout(() => setCopiedCsv(false), 1800);
  }

  async function copyArticleBrief() {
    await writeClipboard(
      formatArticleBrief({
        toolId,
        result,
        shareUrl,
        testLog,
        testChecks,
        completedFields: completedTestLogFields,
        statusLabel: testLogStatus.label,
      })
    );
    trackToolEvent('copy_article_brief', {
      tool: toolId,
      confidence: result.confidence,
      completedFields: completedTestLogFields,
      readiness: testLogStatus.label,
      hasRoute: Boolean(testLog.route),
      hasVerdict: Boolean(testLog.verdict),
    });
    setCopiedArticleBrief(true);
    window.setTimeout(() => setCopiedArticleBrief(false), 1800);
  }

  async function copyProofTable() {
    await writeClipboard(formatProofTableMarkdown(testLog));
    trackToolEvent('copy_proof_table', {
      tool: toolId,
      completedFields: completedTestLogFields,
      readiness: testLogStatus.label,
      hasBaseline: Boolean(testLog.baseline),
      hasRunOne: Boolean(testLog.runOne),
      hasRunTwo: Boolean(testLog.runTwo),
      hasVerdict: Boolean(testLog.verdict),
    });
    setCopiedProofTable(true);
    window.setTimeout(() => setCopiedProofTable(false), 1800);
  }

  function updateTestLog(field: keyof TestLog, value: string) {
    setTestLog((current) => ({ ...current, [field]: value }));
    setSavedTestLog(false);
  }

  function saveTestLog() {
    writeTestLog(toolId, testLog);
    trackToolEvent('save_test_log', {
      tool: toolId,
      hasRoute: Boolean(testLog.route),
      hasBaseline: Boolean(testLog.baseline),
      hasRunOne: Boolean(testLog.runOne),
      hasRunTwo: Boolean(testLog.runTwo),
      hasVerdict: Boolean(testLog.verdict),
    });
    setSavedTestLog(true);
    window.setTimeout(() => setSavedTestLog(false), 1800);
  }

  async function copySavedPresetUrl(preset: SavedPreset) {
    await writeClipboard(preset.url);
    trackToolEvent('copy_saved_preset_link', {
      tool: toolId,
      presetId: preset.id,
      title: displaySavedPresetTitle(preset),
    });
    setCopiedSavedPresetId(preset.id);
    window.setTimeout(() => setCopiedSavedPresetId(''), 1800);
  }

  async function copySavedPresetGarage() {
    if (savedPresets.length === 0) {
      return;
    }

    await writeClipboard(formatSavedPresetGarage(toolId, savedPresets));
    trackToolEvent('copy_saved_preset_garage', {
      tool: toolId,
      savedCount: savedPresets.length,
    });
    setCopiedGarage(true);
    window.setTimeout(() => setCopiedGarage(false), 1800);
  }

  function savePreset() {
    if (!shareUrl) {
      return;
    }

    const preset: SavedPreset = {
      id: `${Date.now()}`,
      title: makeSavedPresetTitle(toolId, shareUrl, result),
      summary: result.summary,
      url: shareUrl,
      createdAt: new Date().toISOString(),
    };
    const nextPresets = [
      preset,
      ...savedPresets.filter((item) => item.url !== shareUrl),
    ].slice(0, 6);

    writeSavedPresets(toolId, nextPresets);
    trackToolEvent('save_preset', {
      tool: toolId,
      confidence: result.confidence,
      savedCount: nextPresets.length,
    });
    setSavedPresets(nextPresets);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 1800);
  }

  function deletePreset(id: string) {
    const nextPresets = savedPresets.filter((item) => item.id !== id);
    writeSavedPresets(toolId, nextPresets);
    trackToolEvent('delete_saved_preset', {
      tool: toolId,
      savedCount: nextPresets.length,
    });
    setSavedPresets(nextPresets);
  }

  return (
    <section className="forza-page mx-auto w-full max-w-full overflow-hidden px-3 py-8 text-zinc-50 sm:px-6 lg:px-8">
      <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-80 opacity-30" />
      <div className="grid min-w-0 gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="forza-panel relative min-w-0 w-full overflow-hidden p-4 sm:p-5">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-3">
            <div className="min-w-0">
              <p className="forza-chip">{eyebrow}</p>
              <h1 className="forza-neon-title mt-3 text-2xl font-semibold tracking-normal text-zinc-50 sm:text-3xl">
                {title}
              </h1>
            </div>
            <span className="rounded-md border border-emerald-300/25 bg-emerald-300/[0.08] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">
              Live
            </span>
          </div>
          <p className="mt-3 line-clamp-2 min-w-0 text-wrap text-sm leading-6 text-zinc-400">
            {description}
          </p>
          <CalculatorLaneSwitcher activeTool={toolId} />
          <ToolOutputPreview result={result} />
          <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_auto_auto_auto]">
            <button
              className="forza-primary-button h-11 w-full focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950"
              type="button"
              onClick={copyResult}
            >
              {copiedNotes ? 'Copied notes' : 'Copy notes'}
            </button>
            <button
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-emerald-300/30 bg-emerald-300/10 px-4 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/60 hover:bg-emerald-300/15 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2 focus:ring-offset-zinc-950 sm:w-auto"
              type="button"
              onClick={copyProofRunPlan}
            >
              <CopyIcon className="size-4" />
              {copiedProofPlan ? 'Copied test' : 'Copy test'}
            </button>
            <button
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-amber-300/30 bg-amber-300/10 px-4 text-sm font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/15 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-zinc-950 sm:w-auto"
              type="button"
              onClick={savePreset}
            >
              <BookmarkPlusIcon className="size-4" />
              {saved ? 'Saved' : 'Save'}
            </button>
            <button
              aria-label="Copy preset link"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/15 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-zinc-950 sm:w-11 sm:px-0"
              type="button"
              onClick={copyPresetUrl}
            >
              <LinkIcon className="size-4" />
              <span className="sm:hidden">
                {copied ? 'Link copied' : 'Copy preset link'}
              </span>
            </button>
          </div>
          <p className="mt-3 min-w-0 text-wrap text-xs leading-5 text-zinc-500">
            Links keep the selected options in the URL. Saved presets stay local
            in this browser.
          </p>
          <div className="mt-3 rounded-md border border-emerald-300/20 bg-emerald-300/[0.05] p-3">
            <div className="flex items-start gap-3">
              <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-emerald-300/25 bg-black/25 text-emerald-200">
                <DatabaseIcon className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                    Data loop
                  </p>
                  <span className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-[0.68rem] font-semibold text-zinc-400">
                    {savedPresets.length}/6 local presets
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  Copy notes, run the same route twice, then save only the
                  baseline that feels repeatable.
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {[
                    ['Recommendations', `${result.recommendations.length}`],
                    ['Route checks', `${testChecks?.length ?? 0}`],
                    ['Preset slots', `${Math.max(6 - savedPresets.length, 0)}`],
                  ].map(([label, value]) => (
                    <div
                      className="rounded-md border border-white/10 bg-black/25 px-3 py-2"
                      key={label}
                    >
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-500">
                        {label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-zinc-100">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-md border border-cyan-300/20 bg-cyan-300/[0.04] p-3">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">
                    Test log
                  </p>
                  <span className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-zinc-400">
                    {completedTestLogFields}/5 fields
                  </span>
                  <span className="rounded-md border border-emerald-300/25 bg-emerald-300/[0.07] px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-emerald-100">
                    {testLogStatus.label}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  {testLogStatus.note}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  className="inline-flex min-h-8 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/[0.06] px-3 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.1]"
                  type="button"
                  onClick={copyTestLog}
                >
                  {copiedTestLog ? 'Copied log' : 'Copy log'}
                </button>
                <button
                  className="inline-flex min-h-8 items-center justify-center rounded-md border border-amber-300/25 bg-amber-300/[0.06] px-3 text-xs font-semibold text-amber-100 transition hover:border-amber-300/50 hover:bg-amber-300/[0.1]"
                  type="button"
                  onClick={copyTestLogCsv}
                >
                  {copiedCsv ? 'Copied CSV' : 'Copy CSV'}
                </button>
                <button
                  className="inline-flex min-h-8 items-center justify-center gap-1.5 rounded-md border border-fuchsia-300/25 bg-fuchsia-300/[0.06] px-3 text-xs font-semibold text-fuchsia-100 transition hover:border-fuchsia-300/50 hover:bg-fuchsia-300/[0.1]"
                  type="button"
                  onClick={copyArticleBrief}
                >
                  <FileTextIcon className="size-3.5" />
                  {copiedArticleBrief ? 'Copied brief' : 'Copy brief'}
                </button>
                <button
                  className="inline-flex min-h-8 items-center justify-center rounded-md border border-emerald-300/25 bg-emerald-300/[0.06] px-3 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/50 hover:bg-emerald-300/[0.1]"
                  type="button"
                  onClick={saveTestLog}
                >
                  {savedTestLog ? 'Saved log' : 'Save log'}
                </button>
              </div>
            </div>
            <div className="mt-3 rounded-md border border-white/10 bg-black/20 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Evidence checklist
                </p>
                <span className="text-xs font-semibold text-zinc-400">
                  {5 - missingTestLogFields.length}/5 ready
                </span>
              </div>
              {missingTestLogFields.length > 0 ? (
                <div className="mt-2 flex flex-wrap gap-2">
                  {missingTestLogFields.map((field) => (
                    <span
                      className="rounded-md border border-amber-300/20 bg-amber-300/[0.06] px-2 py-1 text-[0.68rem] font-semibold text-amber-100"
                      key={field.key}
                      title={field.label}
                    >
                      Need {field.shortLabel}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-2 text-xs leading-5 text-emerald-200">
                  This log has enough route evidence to become a tested article
                  brief with screenshots or clips.
                </p>
              )}
            </div>
            <div className="mt-3 rounded-md border border-white/10 bg-black/20 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  Proof table preview
                </p>
                <button
                  className="inline-flex min-h-8 items-center justify-center gap-1.5 rounded-md border border-cyan-300/25 bg-cyan-300/[0.06] px-3 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.1]"
                  type="button"
                  onClick={copyProofTable}
                >
                  <TableIcon className="size-3.5" />
                  {copiedProofTable ? 'Copied table' : 'Copy table'}
                </button>
              </div>
              <div className="mt-2 overflow-hidden rounded-md border border-white/10">
                {[
                  ['Baseline', testLog.baseline],
                  ['Proof run 1', testLog.runOne],
                  ['Proof run 2', testLog.runTwo],
                  ['Verdict', testLog.verdict],
                ].map(([label, value]) => (
                  <div
                    className="grid grid-cols-[6.5rem_1fr] gap-2 border-b border-white/10 px-3 py-2 text-xs leading-5 last:border-b-0"
                    key={label}
                  >
                    <span className="font-semibold text-zinc-500">{label}</span>
                    <span className="min-w-0 text-wrap break-words text-zinc-300">
                      {value || 'Waiting for test data'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-3 grid gap-2">
              <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                <span>Route or event</span>
                <input
                  className="min-h-10 rounded-md border border-white/10 bg-black/25 px-3 text-sm font-medium normal-case tracking-normal text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/70"
                  placeholder="Example: road sprint, same S1 AWD route"
                  value={testLog.route}
                  onChange={(event) =>
                    updateTestLog('route', event.target.value)
                  }
                />
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  ['baseline', 'Baseline run', 'Original symptom or time'],
                  ['runOne', 'Proof run 1', 'First run after changes'],
                  ['runTwo', 'Proof run 2', 'Second run after changes'],
                  ['verdict', 'Verdict', 'Keep, revert, or test again'],
                ].map(([field, label, placeholder]) => (
                  <label
                    className="grid gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500"
                    key={field}
                  >
                    <span>{label}</span>
                    <textarea
                      className="min-h-20 resize-none rounded-md border border-white/10 bg-black/25 px-3 py-2 text-sm font-medium normal-case leading-5 tracking-normal text-zinc-100 outline-none transition placeholder:text-zinc-600 focus:border-cyan-300/70"
                      placeholder={placeholder}
                      value={testLog[field as keyof TestLog]}
                      onChange={(event) =>
                        updateTestLog(
                          field as keyof TestLog,
                          event.target.value
                        )
                      }
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-5 grid gap-3">{children}</div>
          {nextStep ? <div className="mt-4">{nextStep}</div> : null}
          <div className="mt-5 border-t border-white/10 pt-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-zinc-100">
                Preset garage
              </h2>
              <div className="flex items-center gap-2">
                {savedPresets.length > 0 ? (
                  <button
                    className="inline-flex min-h-8 items-center justify-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/[0.06] px-3 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/[0.1]"
                    type="button"
                    onClick={copySavedPresetGarage}
                  >
                    {copiedGarage ? (
                      <CheckIcon className="size-3.5" />
                    ) : (
                      <CopyIcon className="size-3.5" />
                    )}
                    {copiedGarage ? 'Copied garage' : 'Copy garage'}
                  </button>
                ) : null}
                <span className="text-xs text-zinc-500">
                  {savedPresets.length}/6
                </span>
              </div>
            </div>
            {savedPresets.length > 0 ? (
              <div className="mt-3 grid gap-2">
                {savedPresets.map((preset) => (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.03] p-3"
                    key={preset.id}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <a className="min-w-0 flex-1 text-left" href={preset.url}>
                        <span className="flex flex-wrap items-center gap-2">
                          <span className="min-w-0 truncate text-sm font-semibold uppercase tracking-[0.12em] text-cyan-100">
                            {displaySavedPresetTitle(preset)}
                          </span>
                          <span className="rounded-md border border-white/10 bg-black/25 px-2 py-0.5 text-[0.68rem] font-semibold text-zinc-500">
                            {formatSavedPresetDate(preset.createdAt)}
                          </span>
                        </span>
                        <span className="mt-2 block line-clamp-2 text-xs leading-5 text-zinc-500">
                          {preset.summary}
                        </span>
                      </a>
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          aria-label="Copy saved preset link"
                          className="inline-flex size-8 items-center justify-center rounded-md border border-white/10 text-zinc-500 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100"
                          type="button"
                          onClick={() => copySavedPresetUrl(preset)}
                        >
                          {copiedSavedPresetId === preset.id ? (
                            <CheckIcon className="size-4" />
                          ) : (
                            <CopyIcon className="size-4" />
                          )}
                        </button>
                        <button
                          aria-label="Delete saved preset"
                          className="inline-flex size-8 items-center justify-center rounded-md border border-white/10 text-zinc-500 transition hover:border-red-300/40 hover:bg-red-300/10 hover:text-red-200"
                          type="button"
                          onClick={() => deletePreset(preset.id)}
                        >
                          <Trash2Icon className="size-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-3 rounded-md border border-dashed border-white/15 bg-white/[0.02] p-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-amber-300/25 bg-amber-300/[0.07] text-amber-200">
                    <BookmarkPlusIcon className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">
                      No local slots yet
                    </p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      Save a baseline after choosing a symptom, then compare up
                      to six local tune links here.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <ResultPanel result={result}>{resultAside}</ResultPanel>
      </div>
    </section>
  );
}

function ToolOutputPreview({ result }: { result: CalculationResult }) {
  const firstRecommendation = result.recommendations[0];

  return (
    <div className="mt-4 rounded-md border border-cyan-300/20 bg-cyan-300/[0.05] p-3">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Live output
          </p>
          <p className="mt-2 min-w-0 text-wrap break-words text-sm font-semibold leading-5 text-zinc-100">
            {result.summary}
          </p>
        </div>
        <span className="rounded-md border border-cyan-300/25 bg-black/25 px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-cyan-100">
          {result.confidence}
        </span>
      </div>
      {firstRecommendation ? (
        <div className="mt-3 rounded-md border border-white/10 bg-black/25 px-3 py-2">
          <div className="flex items-start gap-2">
            <GaugeIcon className="mt-0.5 size-4 shrink-0 text-amber-200" />
            <p className="min-w-0 text-wrap break-words text-xs leading-5 text-zinc-300">
              <span className="font-semibold text-zinc-100">
                {firstRecommendation.setting}:{' '}
              </span>
              {firstRecommendation.recommendation}
            </p>
          </div>
        </div>
      ) : null}
      <p className="mt-2 text-xs leading-5 text-zinc-500">
        Copy notes for the route test log and preset URL.
      </p>
    </div>
  );
}

function TuneSymptomPresetGrid({
  input,
  onSelect,
}: {
  input: TuneInput;
  onSelect: (input: TuneInput) => void;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <LifeBuoyIcon className="size-4 text-amber-200" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            Symptom presets
          </p>
        </div>
        <span className="text-xs text-zinc-500">1 click</span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {tuneSymptomPresets.map((preset) => {
          const isActive =
            input.raceType === preset.input.raceType &&
            input.drivetrain === preset.input.drivetrain &&
            input.classBand === preset.input.classBand &&
            input.handlingIssue === preset.input.handlingIssue &&
            input.drivingStyle === preset.input.drivingStyle;

          return (
            <button
              className={`rounded-md border px-3 py-2 text-left transition ${
                isActive
                  ? 'border-cyan-300/60 bg-cyan-300/[0.08]'
                  : 'border-white/10 bg-black/25 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]'
              }`}
              key={preset.title}
              type="button"
              onClick={() => {
                trackToolEvent('select_symptom_preset', {
                  tool: 'tune',
                  preset: preset.title,
                  issue: preset.input.handlingIssue,
                  raceType: preset.input.raceType,
                  drivetrain: preset.input.drivetrain,
                  classBand: preset.input.classBand,
                });
                onSelect(preset.input);
              }}
            >
              <span className="block text-sm font-semibold text-zinc-100">
                {preset.title}
              </span>
              <span className="mt-1 block truncate text-xs leading-5 text-zinc-500">
                {preset.note}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function TuneNextStepCard({
  guide,
}: {
  guide: { label: string; href: string; hint: string };
}) {
  return (
    <div className="rounded-md border border-amber-300/25 bg-amber-300/[0.07] p-4">
      <div className="flex items-start gap-3">
        <RouteIcon className="mt-1 size-5 shrink-0 text-amber-200" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            Matched next step
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{guide.hint}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <LocaleLink
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-amber-300/30 bg-black/25 px-3 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/[0.1]"
              href={guide.href}
              onClick={() =>
                trackToolEvent('open_matched_guide', {
                  tool: 'tune',
                  href: guide.href,
                  label: guide.label,
                })
              }
            >
              {guide.label}
            </LocaleLink>
            <LocaleLink
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/10 bg-black/25 px-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
              href="/tools/forza-horizon-6-tune-presets"
              onClick={() =>
                trackToolEvent('open_preset_library', {
                  tool: 'tune',
                  href: '/tools/forza-horizon-6-tune-presets',
                })
              }
            >
              Browse preset links
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function TuneResultActionPlan({
  input,
  guide,
}: {
  input: TuneInput;
  guide: { label: string; href: string; hint: string };
}) {
  const plan = tuneActionPlans[input.handlingIssue];

  return (
    <div className="mt-5 rounded-md border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            First test loop
          </p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-50">
            {plan.focus}
          </h3>
        </div>
        <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-zinc-400">
          {input.classBand} {input.drivetrain}
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        {[
          ['Change first', plan.firstChange],
          ['Test route', plan.routeTest],
          ['Stop when', plan.stopWhen],
        ].map(([label, text]) => (
          <div
            className="rounded-md border border-white/10 bg-black/25 p-3"
            key={label}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {label}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-200">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-white/10 bg-black/25">
        <div className="grid grid-cols-[0.8fr_1fr_1.25fr] border-b border-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          <span>Corner</span>
          <span>Log</span>
          <span>Good result</span>
        </div>
        {forzaTuneCornerChecks.map((check) => (
          <div
            className="grid grid-cols-[0.8fr_1fr_1.25fr] gap-2 border-b border-white/10 px-3 py-2 text-xs leading-5 last:border-b-0"
            key={check.label}
          >
            <span className="font-semibold text-zinc-100">{check.label}</span>
            <span className="text-cyan-100">{check.metric}</span>
            <span className="text-zinc-400">{check.target}</span>
          </div>
        ))}
      </div>
      <LocaleLink
        className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/30 bg-black/25 px-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/[0.08]"
        href={guide.href}
        onClick={() =>
          trackToolEvent('open_result_guide', {
            tool: 'tune',
            href: guide.href,
            label: guide.label,
            issue: input.handlingIssue,
          })
        }
      >
        Read the matching guide
      </LocaleLink>
    </div>
  );
}

function TuneBaselineSummary({ input }: { input: TuneInput }) {
  const issue = optionLabel(issueOptions, input.handlingIssue);
  const raceType = optionLabel(raceTypeOptions, input.raceType);
  const drivingStyle = optionLabel(styleOptions, input.drivingStyle);
  const plan = tuneActionPlans[input.handlingIssue];

  return (
    <div className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Current FH6 baseline
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            {input.classBand} {input.drivetrain} {raceType} setup, tuned for a{' '}
            {drivingStyle.toLowerCase()} driver fixing {issue.toLowerCase()}.
          </p>
        </div>
        <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-zinc-400">
          Live result
        </span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-white/10 bg-black/25 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            First focus
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-100">
            {plan.focus}
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-black/25 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            Use this as
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-100">
            A testable Forza Horizon 6 tuning calculator starting point
          </p>
        </div>
      </div>
    </div>
  );
}

function DriftSymptomPresetGrid({
  input,
  onSelect,
}: {
  input: DriftInput;
  onSelect: (input: DriftInput) => void;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <RouteIcon className="size-4 text-pink-200" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
            Drift symptom presets
          </p>
        </div>
        <span className="text-xs text-zinc-500">angle test</span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {driftSymptomPresets.map((preset) => {
          const isActive =
            input.drivetrain === preset.input.drivetrain &&
            input.powerLevel === preset.input.powerLevel &&
            input.tireGrip === preset.input.tireGrip &&
            input.problem === preset.input.problem &&
            input.skillLevel === preset.input.skillLevel;

          return (
            <button
              className={`rounded-md border px-3 py-2 text-left transition ${
                isActive
                  ? 'border-pink-300/60 bg-pink-300/[0.08]'
                  : 'border-white/10 bg-black/25 hover:border-pink-300/30 hover:bg-pink-300/[0.04]'
              }`}
              key={preset.title}
              type="button"
              onClick={() => {
                trackToolEvent('select_symptom_preset', {
                  tool: 'drift',
                  preset: preset.title,
                  problem: preset.input.problem,
                  drivetrain: preset.input.drivetrain,
                  powerLevel: preset.input.powerLevel,
                  skillLevel: preset.input.skillLevel,
                });
                onSelect(preset.input);
              }}
            >
              <span className="block text-sm font-semibold text-zinc-100">
                {preset.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-zinc-500">
                {preset.note}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DriftNextStepCard({
  guide,
}: {
  guide: { label: string; href: string; hint: string };
}) {
  return (
    <div className="rounded-md border border-pink-300/25 bg-pink-300/[0.07] p-4">
      <div className="flex items-start gap-3">
        <RouteIcon className="mt-1 size-5 shrink-0 text-pink-200" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
            Matched drift layer
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{guide.hint}</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <LocaleLink
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-pink-300/30 bg-black/25 px-3 text-center text-sm font-semibold text-pink-100 transition hover:border-pink-300/60 hover:bg-pink-300/[0.1]"
              href={guide.href}
              onClick={() =>
                trackToolEvent('open_matched_guide', {
                  tool: 'drift',
                  href: guide.href,
                  label: guide.label,
                })
              }
            >
              {guide.label}
            </LocaleLink>
            <LocaleLink
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/10 bg-black/25 px-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
              href="/games/forza-horizon-6/best-drift-cars"
              onClick={() =>
                trackToolEvent('open_best_drift_cars', {
                  tool: 'drift',
                  href: '/games/forza-horizon-6/best-drift-cars',
                })
              }
            >
              Compare drift cars
            </LocaleLink>
          </div>
        </div>
      </div>
    </div>
  );
}

function DriftResultActionPlan({
  input,
  guide,
}: {
  input: DriftInput;
  guide: { label: string; href: string; hint: string };
}) {
  const plan = driftActionPlans[input.problem];

  return (
    <div className="mt-5 rounded-md border border-pink-300/20 bg-pink-300/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
            First drift test
          </p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-50">
            {plan.focus}
          </h3>
        </div>
        <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-zinc-400">
          {input.drivetrain} {input.skillLevel}
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        {[
          ['Change first', plan.firstChange],
          ['Section test', plan.routeTest],
          ['Stop when', plan.stopWhen],
        ].map(([label, text]) => (
          <div
            className="rounded-md border border-white/10 bg-black/25 p-3"
            key={label}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {label}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-200">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-white/10 bg-black/25">
        <div className="grid grid-cols-[0.8fr_1fr_1.25fr] border-b border-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          <span>Zone</span>
          <span>Log</span>
          <span>Good result</span>
        </div>
        {forzaDriftZoneChecks.map((check) => (
          <div
            className="grid grid-cols-[0.8fr_1fr_1.25fr] gap-2 border-b border-white/10 px-3 py-2 text-xs leading-5 last:border-b-0"
            key={check.label}
          >
            <span className="font-semibold text-zinc-100">{check.label}</span>
            <span className="text-pink-100">{check.metric}</span>
            <span className="text-zinc-400">{check.target}</span>
          </div>
        ))}
      </div>
      <LocaleLink
        className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-pink-300/30 bg-black/25 px-3 text-sm font-semibold text-pink-100 transition hover:border-pink-300/60 hover:bg-pink-300/[0.08]"
        href={guide.href}
        onClick={() =>
          trackToolEvent('open_result_guide', {
            tool: 'drift',
            href: guide.href,
            label: guide.label,
            problem: input.problem,
          })
        }
      >
        Read the drift guide
      </LocaleLink>
    </div>
  );
}

function DriftBaselineSummary({ input }: { input: DriftInput }) {
  const power = optionLabel(driftPowerOptions, input.powerLevel);
  const tires = optionLabel(driftTireOptions, input.tireGrip);
  const problem = optionLabel(driftProblemOptions, input.problem);
  const skill = optionLabel(driftSkillOptions, input.skillLevel);
  const plan = driftActionPlans[input.problem];

  return (
    <div className="rounded-md border border-pink-300/20 bg-pink-300/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pink-200">
            Current FH6 drift baseline
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            {input.drivetrain} {power.toLowerCase()} power drift setup on{' '}
            {tires.toLowerCase()} tires, tuned for a {skill.toLowerCase()}{' '}
            driver fixing {problem.toLowerCase()}.
          </p>
        </div>
        <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-zinc-400">
          Live drift test
        </span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-white/10 bg-black/25 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            First focus
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-100">
            {plan.focus}
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-black/25 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            Use this as
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-100">
            A Forza Horizon 6 drift tune calculator baseline for angle,
            recovery, and one repeatable zone test
          </p>
        </div>
      </div>
    </div>
  );
}

function GearSymptomPresetGrid({
  input,
  onSelect,
}: {
  input: GearInput;
  onSelect: (input: GearInput) => void;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.03] p-3">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <GaugeIcon className="size-4 text-cyan-200" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Gear problem presets
          </p>
        </div>
        <span className="text-xs text-zinc-500">route first</span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {gearSymptomPresets.map((preset) => {
          const isActive =
            input.raceType === preset.input.raceType &&
            input.gears === preset.input.gears &&
            input.priority === preset.input.priority &&
            input.symptom === preset.input.symptom;

          return (
            <button
              className={`rounded-md border px-3 py-2 text-left transition ${
                isActive
                  ? 'border-cyan-300/60 bg-cyan-300/[0.08]'
                  : 'border-white/10 bg-black/25 hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]'
              }`}
              key={preset.title}
              type="button"
              onClick={() => {
                trackToolEvent('select_symptom_preset', {
                  tool: 'gear',
                  preset: preset.title,
                  symptom: preset.input.symptom,
                  raceType: preset.input.raceType,
                  gears: preset.input.gears,
                  priority: preset.input.priority,
                });
                onSelect(preset.input);
              }}
            >
              <span className="block text-sm font-semibold text-zinc-100">
                {preset.title}
              </span>
              <span className="mt-1 block text-xs leading-5 text-zinc-500">
                {preset.note}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function GearResultActionPlan({ input }: { input: GearInput }) {
  const plan = gearActionPlans[input.symptom];

  return (
    <div className="mt-5 rounded-md border border-amber-300/20 bg-amber-300/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            First gearing test
          </p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-50">
            {plan.focus}
          </h3>
        </div>
        <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-zinc-400">
          {input.gears} gears
        </span>
      </div>
      <div className="mt-4 grid gap-3">
        {[
          ['Change first', plan.firstChange],
          ['Route test', plan.routeTest],
          ['Stop when', plan.stopWhen],
        ].map(([label, text]) => (
          <div
            className="rounded-md border border-white/10 bg-black/25 p-3"
            key={label}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
              {label}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-200">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 overflow-hidden rounded-md border border-white/10 bg-black/25">
        <div className="grid grid-cols-[0.8fr_1fr_1.25fr] border-b border-white/10 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
          <span>Check</span>
          <span>Log</span>
          <span>Good result</span>
        </div>
        {forzaGearRouteChecks.map((check) => (
          <div
            className="grid grid-cols-[0.8fr_1fr_1.25fr] gap-2 border-b border-white/10 px-3 py-2 text-xs leading-5 last:border-b-0"
            key={check.label}
          >
            <span className="font-semibold text-zinc-100">{check.label}</span>
            <span className="text-cyan-100">{check.metric}</span>
            <span className="text-zinc-400">{check.target}</span>
          </div>
        ))}
      </div>
      <LocaleLink
        className="mt-4 inline-flex min-h-10 items-center justify-center rounded-md border border-amber-300/30 bg-black/25 px-3 text-sm font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/[0.08]"
        href="/tools/forza-horizon-6-tune-presets"
        onClick={() =>
          trackToolEvent('open_preset_library', {
            tool: 'gear',
            href: '/tools/forza-horizon-6-tune-presets',
            symptom: input.symptom,
          })
        }
      >
        Compare with saved tune presets
      </LocaleLink>
    </div>
  );
}

function GearNextStepCard({
  guide,
  symptom,
}: {
  guide: { label: string; href: string; hint: string };
  symptom: GearInput['symptom'];
}) {
  return (
    <div className="rounded-md border border-amber-300/25 bg-amber-300/[0.07] p-4">
      <div className="flex items-start gap-3">
        <RouteIcon className="mt-1 size-5 shrink-0 text-amber-200" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
            Matched gearing guide
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">{guide.hint}</p>
          <LocaleLink
            className="mt-3 inline-flex min-h-10 items-center justify-center rounded-md border border-amber-300/30 bg-black/25 px-3 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/[0.1]"
            href={guide.href}
            onClick={() =>
              trackToolEvent('open_matched_gear_guide', {
                tool: 'gear',
                href: guide.href,
                label: guide.label,
                symptom,
              })
            }
          >
            {guide.label}
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}

function GearBaselineSummary({ input }: { input: GearInput }) {
  const raceType = optionLabel(raceTypeOptions, input.raceType);
  const gearCount = optionLabel(gearCountOptions, input.gears);
  const priority = optionLabel(gearPriorityOptions, input.priority);
  const symptom = optionLabel(gearSymptomOptions, input.symptom);
  const plan = gearActionPlans[input.symptom];

  return (
    <div className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.05] p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
            Current FH6 gearing baseline
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            {raceType} setup with {gearCount.toLowerCase()}, tuned for{' '}
            {priority.toLowerCase()} while checking {symptom.toLowerCase()}.
          </p>
        </div>
        <span className="rounded-md border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold text-zinc-400">
          Live gear test
        </span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        <div className="rounded-md border border-white/10 bg-black/25 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            First test
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-100">
            {plan.focus}
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-black/25 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
            Use this as
          </p>
          <p className="mt-2 text-sm font-semibold text-zinc-100">
            A Forza Horizon 6 gear ratio calculator baseline for final drive and
            shift spacing
          </p>
        </div>
      </div>
    </div>
  );
}

function ResultPanel({
  result,
  children,
}: {
  result: CalculationResult;
  children?: ReactNode;
}) {
  return (
    <div className="forza-panel relative w-full overflow-hidden p-4 sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-zinc-800 pb-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Generated tune
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-50 sm:text-2xl">
            {result.title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {result.summary}
          </p>
        </div>
        <span className="rounded-md border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
          {result.confidence}
        </span>
      </div>
      {children}
      <div className="mt-4 grid gap-3">
        {result.recommendations.map((item) => (
          <RecommendationCard item={item} key={item.setting} />
        ))}
      </div>
    </div>
  );
}

function RecommendationCard({ item }: { item: Recommendation }) {
  return (
    <article className="forza-card p-4">
      <h3 className="text-base font-semibold text-zinc-50">{item.setting}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-200">
        {item.recommendation}
      </p>
      <div className="mt-3 grid gap-2 text-xs leading-5 text-zinc-500 sm:grid-cols-2">
        <p>
          <span className="font-semibold text-zinc-400">Why: </span>
          {item.why}
        </p>
        <p>
          <span className="font-semibold text-zinc-400">Test: </span>
          {item.test}
        </p>
      </div>
    </article>
  );
}

export function ForzaTuneCalculator() {
  const [input, setInput, shareUrl] = usePresetUrl(
    tuneDefaults,
    tunePresetConfig
  );

  const result = useMemo(() => calculateTune(input), [input]);
  const activeGuide = tuneIssueGuideLinks[input.handlingIssue];
  const updateInput = useCallback(
    (patch: Partial<TuneInput>) => {
      const nextInput = { ...input, ...patch };

      setInput(nextInput);

      for (const [field, value] of Object.entries(patch)) {
        if (typeof value === 'string') {
          trackToolInputChange('tune', field, value, nextInput);
        }
      }
    },
    [input, setInput]
  );

  return (
    <ToolShell
      eyebrow="Forza Horizon 6 tool"
      toolId="tune"
      title="FH6 Tune Calculator"
      description="Use this Forza Horizon 6 tuning calculator to choose the race type, drivetrain, class, and main handling problem. It returns a baseline direction you can test before saving a car-specific setup."
      result={result}
      shareUrl={shareUrl}
      testChecks={forzaTuneCornerChecks}
      nextStep={<TuneNextStepCard guide={activeGuide} />}
      resultAside={<TuneResultActionPlan guide={activeGuide} input={input} />}
    >
      <TuneSymptomPresetGrid input={input} onSelect={setInput} />
      <SelectField
        label="Race type"
        value={input.raceType}
        onChange={(raceType: RaceType) => updateInput({ raceType })}
        options={raceTypeOptions}
      />
      <SelectField
        label="Drivetrain"
        value={input.drivetrain}
        onChange={(drivetrain: Drivetrain) => updateInput({ drivetrain })}
        options={drivetrainOptions}
      />
      <SelectField
        label="Class"
        value={input.classBand}
        onChange={(classBand: ClassBand) => updateInput({ classBand })}
        options={classOptions}
      />
      <SelectField
        label="Main problem"
        value={input.handlingIssue}
        onChange={(handlingIssue: HandlingIssue) =>
          updateInput({ handlingIssue })
        }
        options={issueOptions}
      />
      <SelectField
        label="Driving style"
        value={input.drivingStyle}
        onChange={(drivingStyle: TuneInput['drivingStyle']) =>
          updateInput({ drivingStyle })
        }
        options={styleOptions}
      />
      <TuneBaselineSummary input={input} />
    </ToolShell>
  );
}

export function ForzaDriftTuneCalculator() {
  const [input, setInput, shareUrl] = usePresetUrl(
    driftDefaults,
    driftPresetConfig
  );

  const result = useMemo(() => calculateDriftTune(input), [input]);
  const activeGuide = driftProblemGuideLinks[input.problem];
  const updateInput = useCallback(
    (patch: Partial<DriftInput>) => {
      const nextInput = { ...input, ...patch };

      setInput(nextInput);

      for (const [field, value] of Object.entries(patch)) {
        if (typeof value === 'string') {
          trackToolInputChange('drift', field, value, nextInput);
        }
      }
    },
    [input, setInput]
  );

  return (
    <ToolShell
      eyebrow="Forza Horizon 6 tool"
      toolId="drift"
      title="FH6 Drift Tune Calculator"
      description="Pick your drift build style and the problem you are trying to fix. Use the output as a repeatable first test, then refine around your car and controller or wheel."
      result={result}
      shareUrl={shareUrl}
      testChecks={forzaDriftZoneChecks}
      nextStep={<DriftNextStepCard guide={activeGuide} />}
      resultAside={<DriftResultActionPlan guide={activeGuide} input={input} />}
    >
      <DriftBaselineSummary input={input} />
      <DriftSymptomPresetGrid input={input} onSelect={setInput} />
      <SelectField
        label="Drivetrain"
        value={input.drivetrain}
        onChange={(drivetrain: DriftInput['drivetrain']) =>
          updateInput({ drivetrain })
        }
        options={driftDrivetrainOptions}
      />
      <SelectField
        label="Power level"
        value={input.powerLevel}
        onChange={(powerLevel: DriftInput['powerLevel']) =>
          updateInput({ powerLevel })
        }
        options={driftPowerOptions}
      />
      <SelectField
        label="Tire grip"
        value={input.tireGrip}
        onChange={(tireGrip: DriftInput['tireGrip']) =>
          updateInput({ tireGrip })
        }
        options={driftTireOptions}
      />
      <SelectField
        label="Main problem"
        value={input.problem}
        onChange={(problem: DriftInput['problem']) => updateInput({ problem })}
        options={driftProblemOptions}
      />
      <SelectField
        label="Skill level"
        value={input.skillLevel}
        onChange={(skillLevel: DriftInput['skillLevel']) =>
          updateInput({ skillLevel })
        }
        options={driftSkillOptions}
      />
    </ToolShell>
  );
}

export function ForzaGearRatioCalculator() {
  const [input, setInput, shareUrl] = usePresetUrl(
    gearDefaults,
    gearPresetConfig
  );

  const result = useMemo(() => calculateGearRatio(input), [input]);
  const activeGuide = gearProblemGuideLinks[input.symptom];
  const updateInput = useCallback(
    (patch: Partial<GearInput>) => {
      const nextInput = { ...input, ...patch };

      setInput(nextInput);

      for (const [field, value] of Object.entries(patch)) {
        if (typeof value === 'string') {
          trackToolInputChange('gear', field, value, nextInput);
        }
      }
    },
    [input, setInput]
  );

  return (
    <ToolShell
      eyebrow="Forza Horizon 6 tool"
      toolId="gear"
      title="Gear Ratio Calculator"
      description="Tune final drive and gear spacing around the route, not just the biggest speed number. The output tells you what to test first."
      result={result}
      shareUrl={shareUrl}
      testChecks={forzaGearRouteChecks}
      nextStep={
        <GearNextStepCard guide={activeGuide} symptom={input.symptom} />
      }
      resultAside={<GearResultActionPlan input={input} />}
    >
      <GearBaselineSummary input={input} />
      <GearSymptomPresetGrid input={input} onSelect={setInput} />
      <SelectField
        label="Race type"
        value={input.raceType}
        onChange={(raceType: RaceType) => updateInput({ raceType })}
        options={raceTypeOptions}
      />
      <SelectField
        label="Number of gears"
        value={input.gears}
        onChange={(gears: GearInput['gears']) => updateInput({ gears })}
        options={gearCountOptions}
      />
      <SelectField
        label="Priority"
        value={input.priority}
        onChange={(priority: GearInput['priority']) =>
          updateInput({ priority })
        }
        options={gearPriorityOptions}
      />
      <SelectField
        label="Current symptom"
        value={input.symptom}
        onChange={(symptom: GearInput['symptom']) => updateInput({ symptom })}
        options={gearSymptomOptions}
      />
    </ToolShell>
  );
}
