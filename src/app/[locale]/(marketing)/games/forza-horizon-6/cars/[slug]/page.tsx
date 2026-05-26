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
import { forzaHorizon6ClassCarGuides } from '@/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6MakeCarGuides } from '@/lib/guides/forza-horizon-6-make-car-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CalendarClockIcon,
  CarIcon,
  FlagIcon,
  GaugeIcon,
  LinkIcon,
  RadioTowerIcon,
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

function getClassGuide(car: ForzaHorizon6Car) {
  if (car.stockClass === 'S2') {
    return forzaHorizon6ClassCarGuides.s2;
  }

  if (car.stockClass === 'S1') {
    return forzaHorizon6ClassCarGuides.s1;
  }

  if (car.stockClass === 'A') {
    return forzaHorizon6ClassCarGuides.a;
  }

  return forzaHorizon6ClassCarGuides.b;
}

function getMakeGuide(car: ForzaHorizon6Car) {
  if (car.make === 'Toyota') {
    return forzaHorizon6MakeCarGuides.toyota;
  }

  if (car.make === 'Honda') {
    return forzaHorizon6MakeCarGuides.honda;
  }

  if (car.make === 'Mazda') {
    return forzaHorizon6MakeCarGuides.mazda;
  }

  return null;
}

function getPrimarySetupGuide(car: ForzaHorizon6Car) {
  const profile = `${car.bestUse} ${car.tuneDirection}`.toLowerCase();

  if (profile.includes('drag')) {
    return {
      title: 'Drag setup path',
      href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
      body: 'Start with launch grip, first-shift behavior, and final-drive testing before chasing top speed.',
    };
  }

  if (profile.includes('drift') || profile.includes('touge')) {
    return {
      title: 'Drift and touge path',
      href: '/games/forza-horizon-6/guides/best-drift-tune-settings',
      body: 'Keep power delivery readable first, then tune differential, gearing, and transition recovery.',
    };
  }

  if (profile.includes('rally') || profile.includes('dirt')) {
    return {
      title: 'Rally setup path',
      href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
      body: 'Build for bumps, traction after crests, and mixed-surface braking before adding pace.',
    };
  }

  if (car.stockClass === 'A') {
    return {
      title: 'A class road path',
      href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
      body: 'Use A class as the first clean road-racing baseline, then test braking and exit speed.',
    };
  }

  return {
    title: 'Road racing path',
    href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
    body: 'Start from a stable road setup and only add power after the car repeats corners cleanly.',
  };
}

function getCarTunePath(
  car: ForzaHorizon6Car,
  recommendedPresets: typeof forzaTunePresets
) {
  const primarySetupGuide = getPrimarySetupGuide(car);
  const classGuide = getClassGuide(car);
  const makeGuide = getMakeGuide(car);
  const firstPreset = recommendedPresets[0];
  const links = [
    {
      title: '1. Pick the setup path',
      href: primarySetupGuide.href,
      body: primarySetupGuide.body,
      cta: primarySetupGuide.title,
    },
    firstPreset
      ? {
          title: '2. Open the closest preset',
          href: `/tools/forza-horizon-6-tune-presets/${firstPreset.slug}`,
          body: `Use the ${firstPreset.h1} as the closest current baseline, then adjust after route testing.`,
          cta: 'Open matched preset',
        }
      : {
          title: '2. Generate a baseline',
          href: '/tools/forza-horizon-6-tune-calculator',
          body: 'Use the calculator to choose class, drivetrain, surface, and handling issue before saving a preset.',
          cta: 'Open calculator',
        },
    {
      title: '3. Compare the class',
      href: classGuide.pathname,
      body: `Compare ${car.stockClass} and nearby class builds before moving this car into a higher PI range.`,
      cta: classGuide.h1,
    },
    makeGuide
      ? {
          title: '4. Compare the manufacturer',
          href: makeGuide.pathname,
          body: `Check how this ${car.make} option fits against other launch candidates from the same manufacturer.`,
          cta: makeGuide.h1,
        }
      : {
          title: '4. Track weekly use',
          href: '/games/forza-horizon-6/guides/weekly-playlist-tuning-checklist',
          body: 'Save the restriction, route type, and handling problem so the build can be reused later.',
          cta: 'Weekly checklist',
        },
  ];

  return links.filter(
    (link, index) => links.findIndex((item) => item.href === link.href) === index
  );
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
  const carTunePath = getCarTunePath(car, recommendedPresets);
  const pathname = `/games/forza-horizon-6/cars/${slug}`;
  const buildCards = getBuildCards(car, title);
  const classGuide = getClassGuide(car);
  const makeGuide = getMakeGuide(car);
  const relatedHubs = [
    {
      title: classGuide.h1,
      body: `${title} starts at ${car.stockClass} ${car.stockPi}; use this class hub for first-build direction and comparison candidates.`,
      href: classGuide.pathname,
    },
    makeGuide
      ? {
          title: makeGuide.h1,
          body: `Compare ${title} against the rest of the ${car.make} starter database and matching tune paths.`,
          href: makeGuide.pathname,
        }
      : null,
    {
      title: 'Best cars hub',
      body: 'Move back to road, drift, rally, JDM, class, and manufacturer recommendation clusters.',
      href: '/games/forza-horizon-6/best-cars',
    },
  ].filter(Boolean) as { title: string; body: string; href: string }[];
  const relatedEcosystem = [
    {
      title: 'Weekly playlist fit',
      eyebrow: 'Seasonal use',
      href: '/games/forza-horizon-6/weekly-playlist',
      icon: CalendarClockIcon,
      body: `Keep one safe ${car.stockClass} or A/S1 version of ${title} ready for seasonal restrictions, reward tasks, and playlist refreshes.`,
    },
    {
      title: 'Car Pass tracker',
      eyebrow: 'New-car workflow',
      href: '/games/forza-horizon-6/car-pass',
      icon: RadioTowerIcon,
      body: `If ${title} appears in a weekly drop or reward rotation, link the tracker back to this car page after source verification.`,
    },
    {
      title: 'Tune codes hub',
      eyebrow: 'Share-code path',
      href: '/tools/forza-horizon-6-tune-codes',
      icon: LinkIcon,
      body: 'Use the tune-code workflow when a real in-game share code is verified. Until then, keep this as a transparent preset and calculator path.',
    },
  ];
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
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: `${title} related FH6 tuning links`,
            itemListElement: [...carTunePath, ...relatedEcosystem].map(
              (item, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: item.title,
                url: `https://apextunehub.com${item.href}`,
              })
            ),
          },
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

          <div className="forza-panel mt-6 p-5">
            <div className="flex items-center gap-3">
              <CarIcon className="size-5 text-amber-300" />
              <h2 className="text-xl font-semibold">Related car hubs</h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {relatedHubs.map((hub) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm transition hover:border-cyan-300/40"
                  href={hub.href}
                  key={hub.href}
                >
                  <strong className="block text-zinc-100">{hub.title}</strong>
                  <span className="mt-2 block leading-6 text-zinc-400">
                    {hub.body}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-6 p-5">
            <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Related ecosystem
                </p>
                <h2 className="mt-3 text-xl font-semibold">
                  Where this car page should connect next
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  A useful car page should feed weekly event prep, Car Pass
                  updates, verified tune codes, and preset testing instead of
                  ending as a dead-end note.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {relatedEcosystem.map((item) => {
                  const Icon = item.icon;

                  return (
                    <LocaleLink
                      className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      href={item.href}
                      key={item.href}
                    >
                      <Icon className="size-5 text-cyan-300" />
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-zinc-100">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {item.body}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-200">
                        Open path
                        <ArrowRightIcon className="ml-2 size-4" />
                      </span>
                    </LocaleLink>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="forza-panel mt-6 p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Car tune path
                </p>
                <h2 className="mt-2 text-xl font-semibold">
                  Turn this car page into a working build plan
                </h2>
              </div>
              <span className="rounded-md border border-amber-300/25 bg-amber-300/10 px-3 py-2 text-sm font-semibold text-amber-100">
                {carTunePath.length} steps
              </span>
            </div>
            <div className="mt-5 grid gap-3 lg:grid-cols-4">
              {carTunePath.map((step) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                  href={step.href}
                  key={step.href}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {step.body}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-200">
                    {step.cta}
                    <ArrowRightIcon className="ml-2 size-4" />
                  </span>
                </LocaleLink>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
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
