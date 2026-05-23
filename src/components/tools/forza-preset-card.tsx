import { LocaleLink } from '@/i18n/navigation';
import {
  getPresetCalculatorUrl,
  type ForzaTunePreset,
} from '@/lib/tuning/forza-horizon-6-presets';
import { ArrowRightIcon, GaugeIcon } from 'lucide-react';

export function ForzaPresetCard({ preset }: { preset: ForzaTunePreset }) {
  return (
    <article className="forza-card p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {preset.eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-zinc-50">
            {preset.h1}
          </h2>
        </div>
        <span className="rounded-md border border-fuchsia-300/30 bg-fuchsia-300/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
          {preset.input.classBand}
        </span>
      </div>
      <p className="mt-4 text-sm leading-6 text-zinc-400">
        {preset.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-400">
        <span className="rounded-md border border-white/10 px-2 py-1">
          {preset.input.drivetrain}
        </span>
        <span className="rounded-md border border-white/10 px-2 py-1">
          {preset.input.raceType}
        </span>
        <span className="rounded-md border border-white/10 px-2 py-1">
          {preset.input.handlingIssue}
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <LocaleLink
          href={`/tools/forza-horizon-6-tune-presets/${preset.slug}`}
          className="inline-flex items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60"
        >
          Read preset
          <ArrowRightIcon className="ml-2 size-4" />
        </LocaleLink>
        <LocaleLink
          href={getPresetCalculatorUrl(preset)}
          className="inline-flex items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-300/60"
        >
          <GaugeIcon className="mr-2 size-4" />
          Open calculator
        </LocaleLink>
      </div>
    </article>
  );
}
