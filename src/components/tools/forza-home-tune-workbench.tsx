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

  function updateInput(patch: Partial<TuneInput>) {
    setInput((current) => ({ ...current, ...patch }));
  }

  return (
    <div className="forza-panel relative overflow-hidden p-4 sm:p-5">
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
                Use this as a first pass, then open the full calculator to copy,
                save, and share the setup link.
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
      </div>
    </div>
  );
}
