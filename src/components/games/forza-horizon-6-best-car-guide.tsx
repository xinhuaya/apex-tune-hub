import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import type { ForzaHorizon6BestCarGuide } from '@/lib/guides/forza-horizon-6-best-car-guides';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  GaugeIcon,
  ListChecksIcon,
} from 'lucide-react';

export function ForzaHorizon6BestCarGuidePage({
  guide,
}: {
  guide: ForzaHorizon6BestCarGuide;
}) {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">{guide.eyebrow}</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.76fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                {guide.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                {guide.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Open tune calculator
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/games/forza-horizon-6/cars">
                    Browse car database
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <BadgeCheckIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">Page status</h2>
              <div className="mt-5 grid gap-3 text-sm">
                <div className="forza-stat">
                  <span className="text-zinc-500">Class focus</span>
                  <strong className="text-lg text-zinc-50">
                    {guide.classFocus}
                  </strong>
                </div>
                <div className="forza-stat">
                  <span className="text-zinc-500">Update plan</span>
                  <strong className="text-sm text-zinc-50">
                    {guide.updateCadence}
                  </strong>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-400">
                These are transparent starter recommendations. Cars move from
                candidate to tested only after route, event, or zone notes are
                added.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {guide.picks.map((pick) => (
            <article key={pick.car} className="forza-card p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {pick.status}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold">{pick.car}</h2>
                </div>
                <span className="rounded-md border border-fuchsia-300/30 bg-fuchsia-300/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
                  {pick.classBand}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{pick.why}</p>
              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-amber-200">
                  <GaugeIcon className="size-4" />
                  Tune direction
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {pick.tuneDirection}
                </p>
              </div>
              {pick.href ? (
                <LocaleLink
                  href={pick.href}
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                >
                  Open car page
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              ) : null}
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <ListChecksIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">Testing checklist</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {guide.checkpoints.map((item) => (
              <div
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
