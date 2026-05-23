import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRightIcon, BadgeCheckIcon, GaugeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const carRows = [
  {
    category: 'Road racing',
    pick: 'Candidate list pending',
    classBand: 'A / S1',
    note: 'Add tested road picks after launch telemetry and community data.',
  },
  {
    category: 'Drift',
    pick: 'Candidate list pending',
    classBand: 'A / S1',
    note: 'Prioritize controllable RWD and AWD builds, then link drift tunes.',
  },
  {
    category: 'Rally / touge',
    pick: 'Candidate list pending',
    classBand: 'B / A / S1',
    note: 'Japan roads make rotation, gearing, and suspension travel important.',
  },
  {
    category: 'Weekly playlist',
    pick: 'Update weekly',
    classBand: 'Event rules',
    note: 'This is the repeat-traffic page once weekly events are live.',
  },
];

const guideLinks = [
  {
    title: 'Best Drift Cars',
    description:
      'Angle control, recovery, RWD/AWD direction, and drift setup notes.',
    href: '/games/forza-horizon-6/best-drift-cars',
  },
  {
    title: 'Best Rally Cars',
    description:
      'Mixed-surface and touge candidates with suspension test notes.',
    href: '/games/forza-horizon-6/best-rally-cars',
  },
  {
    title: 'Best Road Racing Cars',
    description: 'A, S1, and S2 candidates for grip-focused route testing.',
    href: '/games/forza-horizon-6/best-road-racing-cars',
  },
  {
    title: 'Best JDM Cars',
    description:
      'Toyota, Honda, Mazda, street, drift, and Japan-focused clusters.',
    href: '/games/forza-horizon-6/best-jdm-cars',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Best Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Best Forza Horizon 6 car planning hub for road racing, drift, rally, class picks, and weekly event recommendations.',
    locale,
    pathname: '/games/forza-horizon-6/best-cars',
  });
}

export default function BestCarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Car database seed</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.78fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best cars in Forza Horizon 6
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                This page starts as a transparent recommendation framework. It
                should become a tested car database as we add class pages, tune
                links, event results, and weekly playlist notes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Tune a candidate
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
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <BadgeCheckIcon className="size-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Quality rule</h2>
                  <p className="text-sm text-zinc-500">
                    No fake meta lists before testing.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-400">
                Cars that are not tested should be labeled as candidates. Once
                testing starts, add class, surface, tune direction, source, and
                last-tested date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1fr_0.7fr_1.5fr]">
            <span>Category</span>
            <span>Current pick</span>
            <span>Class</span>
            <span>Testing note</span>
          </div>
          {carRows.map((row) => (
            <div
              key={row.category}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1fr_0.7fr_1.5fr]"
            >
              <span className="font-semibold text-zinc-50">{row.category}</span>
              <span className="text-amber-200">{row.pick}</span>
              <span className="text-zinc-300">{row.classBand}</span>
              <span className="text-zinc-400">{row.note}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideLinks.map((guide) => (
            <LocaleLink
              key={guide.href}
              href={guide.href}
              className="forza-card p-5"
            >
              <GaugeIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {guide.description}
              </p>
            </LocaleLink>
          ))}
          {[
            [
              'Class pages',
              'S1, A, B, S2, and X pages become the next SEO layer.',
            ],
            [
              'Use-case pages',
              'Drift, rally, road, dirt, street, and beginner picks.',
            ],
            [
              'Tune links',
              'Every recommended car should link to a calculator preset.',
            ],
          ].map(([title, description]) => (
            <article key={title} className="forza-card p-5">
              <GaugeIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
