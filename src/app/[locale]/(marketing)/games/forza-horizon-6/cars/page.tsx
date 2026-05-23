import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import {
  forzaHorizon6Cars,
  getForzaHorizon6CarTitle,
} from '@/lib/cars/forza-horizon-6-cars';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { DatabaseIcon, GaugeIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 Car Database - Apex Tune Hub',
    description:
      'A starter Forza Horizon 6 car database with class, PI, acquisition, tune direction, and testing status.',
    locale,
    pathname: '/games/forza-horizon-6/cars',
  });
}

export default function ForzaHorizon6CarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Car database MVP</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 car database
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                This first database slice starts with 10 Japan-focused cars from
                the official Forza Horizon 6 car list. Each page has class, PI,
                acquisition, tune direction, and testing status.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Open Tune Calculator
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/games/forza-horizon-6/best-cars">
                    Best Cars
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <DatabaseIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Why only 10 cars first?
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Thin programmatic pages are risky. The site should publish small
                batches, add tune links, and expand only after the templates are
                useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {forzaHorizon6Cars.map((car) => (
            <LocaleLink
              key={car.slug}
              href={`/games/forza-horizon-6/cars/${car.slug}`}
              className="forza-card p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {car.type}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-50">
                    {getForzaHorizon6CarTitle(car)}
                  </h2>
                </div>
                <span className="rounded-md border border-fuchsia-300/30 bg-fuchsia-300/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
                  {car.stockClass} {car.stockPi}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-400">
                {car.bestUse}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                <span className="rounded-md border border-white/10 px-2 py-1">
                  {car.acquisition}
                </span>
                <span className="rounded-md border border-white/10 px-2 py-1">
                  {car.testingStatus}
                </span>
              </div>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <GaugeIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">Expansion rule</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Add the next 25 cars only after this template has screenshots, tune
            paths, internal links, and at least one real testing note format.
          </p>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get new FH6 car pages, recommended presets, testing notes, and weekly car updates."
        title="Follow the FH6 car database"
      />
    </main>
  );
}
