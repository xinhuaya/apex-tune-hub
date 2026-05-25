import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import {
  forzaHorizon6Cars,
  type ForzaHorizon6Car,
  getForzaHorizon6Car,
  getForzaHorizon6CarTitle,
} from '@/lib/cars/forza-horizon-6-cars';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import {
  ArrowLeftIcon,
  CarIcon,
  FlagIcon,
  GaugeIcon,
  RotateCcwIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

function getClassPlan(car: ForzaHorizon6Car) {
  if (car.stockClass === 'D') {
    return 'Build gradually through C or B first, then test A class only if the chassis stays predictable.';
  }

  if (car.stockClass === 'S1') {
    return 'Start with a stable S1 tune before deciding whether S2 power is actually useful on Japan road routes.';
  }

  if (car.stockClass === 'A') {
    return 'Keep the first build in A class, then move into S1 after braking and exits feel repeatable.';
  }

  return 'Start near stock or A class, then upgrade only after the baseline shows a clear handling problem.';
}

function getBuildCards(car: ForzaHorizon6Car, title: string) {
  const isDriftCandidate = /drift|street|touge/i.test(
    `${car.bestUse} ${car.tuneDirection}`
  );
  const isRoadCandidate = /road|handling|track|street|sports/i.test(
    `${car.bestUse} ${car.type}`
  );

  return [
    {
      title: 'Starter build',
      icon: CarIcon,
      href: '/games/forza-horizon-6/guides/best-starter-cars',
      body: `${getClassPlan(car)} Use the first tune to learn braking, corner entry, and throttle exits before adding power.`,
    },
    {
      title: 'Road tune',
      icon: GaugeIcon,
      href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
      body: isRoadCandidate
        ? `${title} should be tested for braking stability, mid-corner balance, and gearing on tighter Japan roads.`
        : `If you use ${title} on road routes, prioritize predictable braking and clean exits over top speed.`,
    },
    {
      title: isDriftCandidate ? 'Drift setup' : 'Alternate setup',
      icon: RotateCcwIcon,
      href: isDriftCandidate
        ? '/games/forza-horizon-6/guides/japan-drift-setup'
        : '/tools/forza-horizon-6-gear-ratio-calculator',
      body: isDriftCandidate
        ? 'Keep power delivery controllable first, then tune differential and gearing for linked transitions.'
        : 'Use gearing and suspension changes to create a second preset for weekly routes, speed traps, or mixed surfaces.',
    },
    {
      title: 'Weekly use',
      icon: FlagIcon,
      href: '/games/forza-horizon-6/weekly-playlist',
      body: `Keep a safe ${car.stockClass} or A/S1 version ready so ${title} can cover seasonal restrictions without a full rebuild.`,
    },
  ];
}

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
  const pathname = `/games/forza-horizon-6/cars/${slug}`;
  const buildCards = getBuildCards(car, title);
  const faqs: FaqItem[] = [
    {
      question: `Is the ${title} good in Forza Horizon 6?`,
      answer: `${car.bestUse}. Start from its stock ${car.stockClass} ${car.stockPi} baseline and test one role before building multiple presets.`,
    },
    {
      question: `What class should I build the ${title} for first?`,
      answer: getClassPlan(car),
    },
    {
      question: `What tune direction fits the ${title}?`,
      answer: car.tuneDirection,
    },
    {
      question: `Is this ${title} page fully tested?`,
      answer: `Current testing status: ${car.testingStatus}. Treat this as a transparent candidate page until route notes, tune screenshots, and weekly event results are added.`,
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Car Database', path: '/games/forza-horizon-6/cars' },
            { name: title, path: pathname },
          ]),
          buildArticleJsonLd({
            title: `${title} Forza Horizon 6 tune notes`,
            description: `${title} tune notes for starter builds, road setup, alternate presets, weekly use, and testing status.`,
            path: pathname,
          }),
          buildFaqJsonLd(faqs),
        ]}
      />
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
                  {car.bestUse}. This page is a candidate setup page until the
                  car has route testing, tune screenshots, and patch-specific
                  notes.
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
          <div className="grid gap-4 lg:grid-cols-4">
            {buildCards.map((card) => {
              const Icon = card.icon;

              return (
                <LocaleLink
                  className="forza-card p-5"
                  href={card.href}
                  key={card.title}
                >
                  <Icon className="size-5 text-cyan-300" />
                  <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                    {card.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {card.body}
                  </p>
                </LocaleLink>
              );
            })}
          </div>

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

          <div className="forza-panel mt-6 p-5">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {faqs.map((faq) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                  key={faq.question}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-6 p-5 text-sm leading-6 text-zinc-400">
            <p>
              Source: official Forza Horizon 6 car list. This page does not use
              official car imagery and is not affiliated with Playground Games,
              Turn 10 Studios, Xbox Game Studios, Microsoft, or the official
              Forza team.
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
    </>
  );
}
