import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import {
  forzaHorizon6Cars,
  getForzaHorizon6Car,
  getForzaHorizon6CarTitle,
} from '@/lib/cars/forza-horizon-6-cars';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import { ArrowLeftIcon, GaugeIcon, WrenchIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return forzaHorizon6Cars.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata | undefined> {
  const { locale, slug } = await params;
  const car = getForzaHorizon6Car(slug);

  if (!car) {
    return undefined;
  }

  const title = getForzaHorizon6CarTitle(car);

  return constructMetadata({
    title: `${title} Forza Horizon 6 Tune Notes - Apex Tune Hub`,
    description: `${title} in Forza Horizon 6: class ${car.stockClass} ${car.stockPi}, acquisition, best-use candidate, and baseline tune direction.`,
    locale,
    pathname: `/games/forza-horizon-6/cars/${slug}`,
  });
}

export default async function ForzaHorizon6CarPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = getForzaHorizon6Car(slug);

  if (!car) {
    notFound();
  }

  const title = getForzaHorizon6CarTitle(car);
  const recommendedPresets = forzaTunePresets
    .filter((preset) => preset.targetCars.includes(title))
    .slice(0, 3);

  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <LocaleLink
            href="/games/forza-horizon-6/cars"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-200"
          >
            <ArrowLeftIcon className="size-4" />
            Back to car database
          </LocaleLink>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="forza-chip">{car.type}</p>
              <h1 className="forza-neon-title mt-5 max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                {title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                {car.bestUse}. This page is a candidate setup page until the car
                has route testing, tune screenshots, and patch-specific notes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Generate baseline tune
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/tools/forza-horizon-6-gear-ratio-calculator">
                    Gear ratio tool
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Stock class
                  </p>
                  <p className="mt-2 text-3xl font-semibold">
                    {car.stockClass} {car.stockPi}
                  </p>
                </div>
                <GaugeIcon className="size-7 text-fuchsia-300" />
              </div>
              <dl className="mt-5 grid gap-3 text-sm">
                {[
                  ['Make', car.make],
                  ['Country', car.country],
                  ['Collection', car.collection],
                  ['Acquisition', car.acquisition],
                  ['Testing status', car.testingStatus],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0"
                  >
                    <dt className="text-zinc-500">{label}</dt>
                    <dd className="text-right font-medium text-zinc-100">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="forza-card p-5">
            <WrenchIcon className="size-5 text-amber-300" />
            <h2 className="mt-4 text-xl font-semibold">Tune direction</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {car.tuneDirection}
            </p>
          </article>

          <article className="forza-card p-5">
            <h2 className="text-xl font-semibold">Testing checklist</h2>
            <ul className="mt-4 grid gap-2 text-sm leading-6 text-zinc-400 md:grid-cols-2">
              <li>Record route, class, drivetrain, and assists.</li>
              <li>Save tune screenshot or exported setup notes.</li>
              <li>Test one handling issue at a time.</li>
              <li>Update this page after major balance patches.</li>
            </ul>
          </article>
        </div>

        {recommendedPresets.length > 0 ? (
          <section className="mt-6">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="forza-chip">Matched presets</p>
                <h2 className="mt-4 text-xl font-semibold">
                  Recommended tune presets
                </h2>
              </div>
              <Button asChild variant="outline" className="rounded-md">
                <LocaleLink href="/tools/forza-horizon-6-tune-presets">
                  View all presets
                </LocaleLink>
              </Button>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {recommendedPresets.map((preset) => (
                <ForzaPresetCard key={preset.slug} preset={preset} />
              ))}
            </div>
          </section>
        ) : null}

        <div className="forza-panel mt-6 p-5 text-sm leading-6 text-zinc-400">
          <p>
            Source: official Forza Horizon 6 car list. This page does not use
            official car imagery and is not affiliated with Playground Games,
            Turn 10 Studios, Xbox Game Studios, Microsoft, or the official Forza
            team.
          </p>
          <a
            href={car.sourceUrl}
            rel="noreferrer"
            target="_blank"
            className="mt-3 inline-flex text-cyan-200 hover:text-cyan-100"
          >
            View official car list
          </a>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get notified when this car page gains tested tune notes, preset links, and weekly event recommendations."
        title="Track FH6 car tune updates"
      />
    </main>
  );
}
