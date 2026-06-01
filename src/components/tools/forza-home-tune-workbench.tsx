'use client';

import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  calculateTune,
  classOptions,
  drivetrainOptions,
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
  ClipboardCheckIcon,
  GaugeIcon,
  LifeBuoyIcon,
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
  const result = useMemo(() => calculateTune(input), [input]);
  const calculatorHref = useMemo(() => buildCalculatorHref(input), [input]);
  const topRecommendations = result.recommendations.slice(0, 3);
  const activeGuide = issueGuideLinks[input.handlingIssue];

  function updateInput(patch: Partial<TuneInput>) {
    setInput((current) => ({ ...current, ...patch }));
  }

  return (
    <div className="forza-panel relative w-full max-w-[22rem] overflow-hidden p-4 sm:max-w-full sm:p-5">
      <div className="forza-hero-grid absolute inset-0 opacity-30" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Tune workbench
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-50">
              Build a baseline now
            </h2>
          </div>
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-amber-200">
            <SlidersHorizontalIcon className="size-5" />
          </span>
        </div>

        <div className="mt-5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <LifeBuoyIcon className="size-4 text-amber-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                Start from the symptom
              </p>
            </div>
            <span className="text-xs text-zinc-500">1 click preset</span>
          </div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
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
                  onClick={() => setInput(preset.input)}
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

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <CompactSelect
            label="Race"
            value={input.raceType}
            options={raceTypeOptions}
            onChange={(raceType: RaceType) => updateInput({ raceType })}
          />
          <CompactSelect
            label="Drive"
            value={input.drivetrain}
            options={drivetrainOptions}
            onChange={(drivetrain: Drivetrain) => updateInput({ drivetrain })}
          />
          <CompactSelect
            label="Class"
            value={input.classBand}
            options={classOptions}
            onChange={(classBand: ClassBand) => updateInput({ classBand })}
          />
          <CompactSelect
            label="Problem"
            value={input.handlingIssue}
            options={issueOptions}
            onChange={(handlingIssue: HandlingIssue) =>
              updateInput({ handlingIssue })
            }
          />
          <div className="sm:col-span-2">
            <CompactSelect
              label="Style"
              value={input.drivingStyle}
              options={styleOptions}
              onChange={(drivingStyle: DrivingStyle) =>
                updateInput({ drivingStyle })
              }
            />
          </div>
        </div>

        <div className="mt-5 rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] p-4">
          <div className="flex items-start gap-3">
            <GaugeIcon className="mt-1 size-5 shrink-0 text-cyan-200" />
            <div>
              <p className="text-sm font-semibold text-zinc-50">
                {result.summary}
              </p>
              <p className="mt-2 text-xs leading-5 text-zinc-400">
                {activeGuide.hint} Open the full calculator to copy, save, and
                share the setup link.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-2">
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

        <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
          <Button asChild className="forza-primary-button h-11">
            <LocaleLink href={calculatorHref}>
              Open full calculator
              <ArrowRightIcon className="ml-2 size-4" />
            </LocaleLink>
          </Button>
          <LocaleLink
            className="text-center text-sm font-semibold text-cyan-200 transition hover:text-cyan-100"
            href="/tools/forza-horizon-6-gear-ratio-calculator"
          >
            Gear ratio tool
          </LocaleLink>
        </div>

        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          <LocaleLink
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-amber-300/25 bg-amber-300/[0.07] px-3 text-center text-sm font-semibold text-amber-100 transition hover:border-amber-300/50 hover:bg-amber-300/[0.1]"
            href={activeGuide.href}
          >
            <RouteIcon className="size-4" />
            {activeGuide.label}
          </LocaleLink>
          <LocaleLink
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 text-center text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
            href="/tools/forza-horizon-6-tune-presets"
          >
            Browse preset links
          </LocaleLink>
        </div>
      </div>
    </div>
  );
}
