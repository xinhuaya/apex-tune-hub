'use client';

import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { track } from '@vercel/analytics';
import {
  calculateTune,
  classOptions,
  drivetrainOptions,
  formatResultForClipboard,
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
  const result = useMemo(() => calculateTune(input), [input]);
  const calculatorHref = useMemo(() => buildCalculatorHref(input), [input]);
  const topRecommendations = result.recommendations.slice(0, 2);
  const activeGuide = issueGuideLinks[input.handlingIssue];

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
    await writeClipboard(formatResultForClipboard(result));
    trackHomeWorkbenchEvent('copy_home_baseline_notes', input, {
      confidence: result.confidence,
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

  return (
    <div className="forza-panel relative w-full max-w-[22rem] overflow-hidden p-4 sm:max-w-full sm:p-5">
      <div className="forza-hero-grid absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Core tune product
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-50">
              Build a baseline now
            </h2>
          </div>
          <div className="grid gap-2 justify-items-end">
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-amber-200">
              <SlidersHorizontalIcon className="size-5" />
            </span>
            <span className="rounded-md border border-cyan-300/25 bg-cyan-300/[0.08] px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-cyan-100">
              First screen
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2 rounded-md border border-white/10 bg-black/25 px-3 py-2 text-xs font-semibold text-zinc-400">
          <span className="text-cyan-200">Pick symptom</span>
          <span className="text-zinc-600">/</span>
          <span>Generate baseline</span>
          <span className="text-zinc-600">/</span>
          <span>Open full tool</span>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <LifeBuoyIcon className="size-4 text-amber-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                Start from the symptom
              </p>
            </div>
            <span className="text-xs text-zinc-500">6 quick presets</span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
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

        <div className="mt-4 rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] p-3">
          <div className="flex items-start gap-3">
            <GaugeIcon className="mt-1 size-5 shrink-0 text-cyan-200" />
            <div>
              <p className="text-sm font-semibold text-zinc-50">
                {result.summary}
              </p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                {activeGuide.hint} Open the full calculator to save and share
                the setup link.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 grid gap-2">
          {topRecommendations.map((item) => (
            <div
              className="rounded-md border border-white/10 bg-black/25 px-3 py-2"
              key={item.setting}
            >
              <div className="flex items-start gap-2">
                <ClipboardCheckIcon className="mt-0.5 size-4 shrink-0 text-amber-200" />
                <p className="text-xs leading-5 text-zinc-300">
                  <span className="font-semibold text-zinc-100">
                    {item.setting}:{' '}
                  </span>
                  {item.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <Button
            className="h-11 rounded-md border border-cyan-300/30 bg-cyan-300/[0.08] text-cyan-100 hover:bg-cyan-300/[0.14]"
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
          <Button asChild className="forza-primary-button h-11">
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
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-3">
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
          <button
            className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-2 text-center text-xs font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
            type="button"
            onClick={copyPresetLink}
          >
            {copiedLink ? (
              <CheckIcon className="size-4" />
            ) : (
              <LinkIcon className="size-4" />
            )}
            {copiedLink ? 'Preset link copied' : 'Copy preset link'}
          </button>
        </div>
      </div>
    </div>
  );
}
