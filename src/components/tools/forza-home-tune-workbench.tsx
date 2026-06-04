'use client';

import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { track } from '@vercel/analytics';
import {
  calculateTune,
  classOptions,
  drivetrainOptions,
  formatResultForClipboard,
  forzaTuneCornerChecks,
  issueOptions,
  raceTypeOptions,
  styleOptions,
  type ClassBand,
  type Drivetrain,
  type DrivingStyle,
  type HandlingIssue,
  type RaceType,
  type TuneInput,
} from '@/lib/tuning/forza-horizon-6';
import {
  ArrowRightIcon,
  CheckIcon,
  ClipboardCheckIcon,
  CopyIcon,
  GaugeIcon,
  LifeBuoyIcon,
  LinkIcon,
  ListChecksIcon,
  RouteIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import { useMemo, useState } from 'react';

const defaultInput: TuneInput = {
  raceType: 'road',
  drivetrain: 'AWD',
  classBand: 'S1',
  handlingIssue: 'understeer',
  drivingStyle: 'balanced',
};

const homeWorkbenchStorageKey = 'apex-tune-hub:fh6-tool-events';

function buildCalculatorHref(input: TuneInput) {
  const params = new URLSearchParams({
    race: input.raceType,
    drive: input.drivetrain,
    class: input.classBand,
    issue: input.handlingIssue,
    style: input.drivingStyle,
  });

  return `/tools/forza-horizon-6-tune-calculator?${params.toString()}`;
}

function trackHomeWorkbenchEvent(
  action: string,
  input: TuneInput,
  payload: Record<string, string> = {}
) {
  const event = {
    action,
    path: typeof window === 'undefined' ? '/' : window.location.pathname,
    source: 'homepage_tune_workbench',
    race: input.raceType,
    drive: input.drivetrain,
    class: input.classBand,
    issue: input.handlingIssue,
    style: input.drivingStyle,
    ...payload,
  };

  try {
    track('FH6 Tool Action', event);
  } catch {
    // Tracking should never block tuning interactions.
  }

  try {
    const rawValue = window.localStorage.getItem(homeWorkbenchStorageKey);
    const currentEvents = rawValue ? JSON.parse(rawValue) : [];
    const nextEvents = [
      {
        ...event,
        at: new Date().toISOString(),
      },
      ...(Array.isArray(currentEvents) ? currentEvents : []),
    ].slice(0, 50);

    window.localStorage.setItem(
      homeWorkbenchStorageKey,
      JSON.stringify(nextEvents)
    );
  } catch {
    // Local diagnostics are best effort only.
  }
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

const symptomPresets: Array<{
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
    note: 'Rally RWD launch pass',
    input: {
      raceType: 'rally',
      drivetrain: 'RWD',
      classBand: 'B',
      handlingIssue: 'slow-launch',
      drivingStyle: 'balanced',
    },
  },
  {
    title: 'Bad braking',
    note: 'Dirt AWD stability pass',
    input: {
      raceType: 'dirt',
      drivetrain: 'AWD',
      classBand: 'S1',
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

const issueGuideLinks: Record<
  HandlingIssue,
  { label: string; href: string; hint: string }
> = {
  understeer: {
    label: 'Open understeer guide',
    href: '/games/forza-horizon-6/guides/fix-understeer',
    hint: 'Misses apexes, pushes wide, or refuses to rotate.',
  },
  oversteer: {
    label: 'Open oversteer guide',
    href: '/games/forza-horizon-6/guides/fix-oversteer',
    hint: 'Rear snaps, slides on exit, or feels nervous at speed.',
  },
  wheelspin: {
    label: 'Open wheelspin guide',
    href: '/games/forza-horizon-6/guides/fix-wheelspin',
    hint: 'Launch or corner exit wastes grip.',
  },
  'slow-launch': {
    label: 'Open launch guide',
    href: '/games/forza-horizon-6/guides/fix-slow-launch',
    hint: 'First gear bogs, spins, or loses the first seconds.',
  },
  'unstable-braking': {
    label: 'Open braking guide',
    href: '/games/forza-horizon-6/guides/fix-unstable-braking',
    hint: 'Car darts, locks, or rotates too much under braking.',
  },
  'poor-top-speed': {
    label: 'Open top speed guide',
    href: '/games/forza-horizon-6/guides/fix-poor-top-speed',
    hint: 'Long straights feel capped or the car cannot pull gear.',
  },
};

function formatHomeProofPlan(
  input: TuneInput,
  result: ReturnType<typeof calculateTune>
) {
  const calculatorPath = buildCalculatorHref(input);
  const settingList = result.recommendations
    .slice(0, 3)
    .map(
      (recommendation) =>
        `- ${recommendation.setting}: ${recommendation.recommendation}`
    )
    .join('\n');
  const checks = forzaTuneCornerChecks
    .map((check) => `- ${check.label} - ${check.metric}: ${check.target}`)
    .join('\n');

  return [
    'Apex Tune Hub FH6 proof run',
    '',
    `Calculator: ${calculatorPath}`,
    `Setup: ${input.classBand} ${input.drivetrain} ${input.raceType} / ${input.handlingIssue} / ${input.drivingStyle}`,
    `Baseline summary: ${result.summary}`,
    '',
    'Change first:',
    settingList || '- No setting recommendation generated yet.',
    '',
    'Run order:',
    '1. Record one baseline run on the same route.',
    '2. Apply only the top 1-3 Apex Tune Hub changes.',
    '3. Repeat the same route twice and compare the same symptom.',
    '',
    'Route checks:',
    checks,
  ].join('\n');
}

function CompactSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: Array<{ value: T; label: string }>;
  onChange: (value: T) => void;
}) {
  return (
    <label className="grid gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
      <span>{label}</span>
      <select
        className="forza-select h-10 text-sm normal-case tracking-normal"
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

export function ForzaHomeTuneWorkbench() {
  const [input, setInput] = useState<TuneInput>(defaultInput);
  const [copiedNotes, setCopiedNotes] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedPlan, setCopiedPlan] = useState(false);
  const result = useMemo(() => calculateTune(input), [input]);
  const calculatorHref = useMemo(() => buildCalculatorHref(input), [input]);
  const topRecommendation = result.recommendations[0];
  const activeGuide = issueGuideLinks[input.handlingIssue];
  const selectedRace =
    raceTypeOptions.find((option) => option.value === input.raceType)?.label ??
    input.raceType;
  const selectedIssue =
    issueOptions.find((option) => option.value === input.handlingIssue)
      ?.label ?? input.handlingIssue;

  function updateInput(
    field: keyof TuneInput,
    value: TuneInput[keyof TuneInput]
  ) {
    setInput((current) => {
      const nextInput = { ...current, [field]: value };

      trackHomeWorkbenchEvent('change_home_workbench_input', nextInput, {
        field,
        value,
      });

      return nextInput;
    });
  }

  function selectSymptomPreset(preset: (typeof symptomPresets)[number]) {
    setInput(preset.input);
    trackHomeWorkbenchEvent('select_home_symptom_preset', preset.input, {
      preset: preset.title,
    });
  }

  async function copyBaselineNotes() {
    const presetUrl = new URL(
      calculatorHref,
      window.location.origin
    ).toString();

    await writeClipboard(
      formatResultForClipboard(result, {
        presetUrl,
        testChecks: forzaTuneCornerChecks,
      })
    );
    trackHomeWorkbenchEvent('copy_home_baseline_notes', input, {
      confidence: result.confidence,
      href: calculatorHref,
    });
    setCopiedNotes(true);
    window.setTimeout(() => setCopiedNotes(false), 1800);
  }

  async function copyPresetLink() {
    const presetUrl = new URL(
      calculatorHref,
      window.location.origin
    ).toString();

    await writeClipboard(presetUrl);
    trackHomeWorkbenchEvent('copy_home_preset_link', input, {
      href: calculatorHref,
    });
    setCopiedLink(true);
    window.setTimeout(() => setCopiedLink(false), 1800);
  }

  async function copyProofPlan() {
    await writeClipboard(formatHomeProofPlan(input, result));
    trackHomeWorkbenchEvent('copy_home_proof_plan', input, {
      confidence: result.confidence,
      href: calculatorHref,
    });
    setCopiedPlan(true);
    window.setTimeout(() => setCopiedPlan(false), 1800);
  }

  return (
    <div className="forza-panel relative w-full max-w-[calc(100vw-2rem)] overflow-hidden p-4 sm:max-w-full sm:p-5">
      <div className="forza-hero-grid absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3 border-b border-zinc-800 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Live FH6 workbench
            </p>
            <h2 className="mt-2 text-xl font-semibold text-zinc-50 sm:text-2xl">
              Tune the first problem
            </h2>
          </div>
          <div className="grid justify-items-end gap-2">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-amber-200">
              <SlidersHorizontalIcon className="size-5" />
            </span>
            <span className="hidden rounded-md border border-cyan-300/25 bg-cyan-300/[0.08] px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cyan-100 sm:inline-flex">
              First screen
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold sm:text-xs">
          {[selectedRace, input.drivetrain, input.classBand, selectedIssue].map(
            (label) => (
              <span
                className="rounded-md border border-white/10 bg-black/25 px-2 py-1 text-zinc-300"
                key={label}
              >
                {label}
              </span>
            )
          )}
        </div>

        <div className="mt-3 rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] p-3">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <GaugeIcon className="size-4 shrink-0 text-cyan-200" />
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-cyan-200">
                  Live output
                </p>
              </div>
              <p className="mt-2 text-sm font-semibold leading-5 text-zinc-50">
                {result.summary}
              </p>
            </div>
            <span className="shrink-0 rounded-md border border-emerald-300/25 bg-emerald-300/[0.08] px-2 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-emerald-200">
              {result.confidence}
            </span>
          </div>
          {topRecommendation ? (
            <div className="mt-3 rounded-md border border-white/10 bg-black/25 px-3 py-2">
              <div className="flex items-start gap-2">
                <ClipboardCheckIcon className="mt-0.5 size-4 shrink-0 text-amber-200" />
                <p className="text-xs leading-5 text-zinc-300">
                  <span className="font-semibold text-zinc-100">
                    {topRecommendation.setting}:{' '}
                  </span>
                  {topRecommendation.recommendation}
                </p>
              </div>
            </div>
          ) : null}
          <div className="mt-3 grid gap-2 sm:grid-cols-[1fr_1fr_auto] sm:items-center">
            <Button asChild className="forza-primary-button h-10">
              <LocaleLink
                href={calculatorHref}
                onClick={() =>
                  trackHomeWorkbenchEvent('open_home_full_calculator', input, {
                    href: calculatorHref,
                  })
                }
              >
                Open full calculator
                <ArrowRightIcon className="ml-2 size-4" />
              </LocaleLink>
            </Button>
            <Button
              className="h-10 rounded-md border border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-100 hover:bg-cyan-300/[0.14]"
              type="button"
              variant="outline"
              onClick={copyBaselineNotes}
            >
              {copiedNotes ? (
                <CheckIcon className="mr-2 size-4" />
              ) : (
                <CopyIcon className="mr-2 size-4" />
              )}
              {copiedNotes ? 'Copied baseline' : 'Copy baseline'}
            </Button>
            <button
              aria-label="Copy homepage preset link"
              className="inline-flex h-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.03] px-3 text-xs font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
              type="button"
              onClick={copyPresetLink}
            >
              {copiedLink ? (
                <CheckIcon className="size-4" />
              ) : (
                <LinkIcon className="size-4" />
              )}
            </button>
          </div>
          <div className="mt-3 rounded-md border border-white/10 bg-black/20 p-3">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <ListChecksIcon className="size-4 text-emerald-200" />
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-emerald-200">
                    Proof run
                  </p>
                </div>
                <p className="mt-2 text-xs leading-5 text-zinc-400">
                  Baseline once, apply the top changes, then repeat the same
                  route twice.
                </p>
              </div>
              <button
                className="inline-flex min-h-8 shrink-0 items-center justify-center rounded-md border border-emerald-300/25 bg-emerald-300/[0.07] px-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/45 hover:bg-emerald-300/[0.11]"
                type="button"
                onClick={copyProofPlan}
              >
                {copiedPlan ? (
                  <CheckIcon className="mr-1.5 size-3.5" />
                ) : (
                  <CopyIcon className="mr-1.5 size-3.5" />
                )}
                {copiedPlan ? 'Copied' : 'Copy test'}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <LifeBuoyIcon className="size-4 text-amber-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                Start from the symptom
              </p>
            </div>
            <span className="text-xs text-zinc-500">6 presets</span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 xl:grid-cols-3">
            {symptomPresets.map((preset) => {
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
                      : 'border-white/10 bg-white/[0.03] hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]'
                  }`}
                  key={preset.title}
                  type="button"
                  onClick={() => selectSymptomPreset(preset)}
                >
                  <span className="block text-sm font-semibold leading-5 text-zinc-100">
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

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <CompactSelect
            label="Race"
            value={input.raceType}
            options={raceTypeOptions}
            onChange={(raceType: RaceType) => updateInput('raceType', raceType)}
          />
          <CompactSelect
            label="Drive"
            value={input.drivetrain}
            options={drivetrainOptions}
            onChange={(drivetrain: Drivetrain) =>
              updateInput('drivetrain', drivetrain)
            }
          />
          <CompactSelect
            label="Class"
            value={input.classBand}
            options={classOptions}
            onChange={(classBand: ClassBand) =>
              updateInput('classBand', classBand)
            }
          />
          <CompactSelect
            label="Problem"
            value={input.handlingIssue}
            options={issueOptions}
            onChange={(handlingIssue: HandlingIssue) =>
              updateInput('handlingIssue', handlingIssue)
            }
          />
          <div className="sm:col-span-2">
            <CompactSelect
              label="Style"
              value={input.drivingStyle}
              options={styleOptions}
              onChange={(drivingStyle: DrivingStyle) =>
                updateInput('drivingStyle', drivingStyle)
              }
            />
          </div>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <LocaleLink
            className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-amber-300/25 bg-amber-300/[0.07] px-2 text-center text-xs font-semibold text-amber-100 transition hover:border-amber-300/50 hover:bg-amber-300/[0.1]"
            href={activeGuide.href}
            onClick={() =>
              trackHomeWorkbenchEvent('open_home_matched_guide', input, {
                href: activeGuide.href,
                guide: activeGuide.label,
              })
            }
          >
            <RouteIcon className="size-4" />
            {activeGuide.label}
          </LocaleLink>
          <LocaleLink
            className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/[0.05] px-2 text-center text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.08]"
            href="/tools/forza-horizon-6-gear-ratio-calculator"
            onClick={() =>
              trackHomeWorkbenchEvent('open_home_gear_ratio_tool', input, {
                href: '/tools/forza-horizon-6-gear-ratio-calculator',
              })
            }
          >
            <GaugeIcon className="size-4" />
            Gear tool
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
