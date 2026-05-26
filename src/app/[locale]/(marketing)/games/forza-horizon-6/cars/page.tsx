import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import {
  forzaHorizon6Cars,
  getForzaHorizon6CarTitle,
} from '@/lib/cars/forza-horizon-6-cars';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { forzaHorizon6ClassCarGuides } from '@/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6MakeCarGuides } from '@/lib/guides/forza-horizon-6-make-car-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  BadgeCheckIcon,
  CarFrontIcon,
  DatabaseIcon,
  GaugeIcon,
  ListChecksIcon,
  RouteIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/cars';
const title = 'Forza Horizon 6 Car Database - Apex Tune Hub';
const description =
  'A starter Forza Horizon 6 car database with class, PI, acquisition, tune direction, and testing status.';
const carDatabaseFaqs: FaqItem[] = [
  {
    question: 'What is in the Apex Tune Hub FH6 car database?',
    answer:
      'The first database slice focuses on Japan-related cars with stock class, PI, acquisition, best use, tune direction, and transparent testing status.',
  },
  {
    question: 'Are these FH6 car recommendations final?',
    answer:
      'No. Pages marked candidate or needs-testing are starting points until route notes, tune screenshots, and weekly event results are added.',
  },
  {
    question: 'How should I use a car page?',
    answer:
      'Pick the car role first: starter build, road tune, drift setup, alternate preset, or weekly event use. Then open the matching calculator or guide.',
  },
];
const classLinks = [
  forzaHorizon6ClassCarGuides.b,
  forzaHorizon6ClassCarGuides.a,
  forzaHorizon6ClassCarGuides.s1,
  forzaHorizon6ClassCarGuides.s2,
];
const makeLinks = [
  forzaHorizon6MakeCarGuides.toyota,
  forzaHorizon6MakeCarGuides.honda,
  forzaHorizon6MakeCarGuides.mazda,
];

const useCaseGroups = [
  {
    title: 'Road and handling',
    note: 'Start here for clean apexes, braking stability, and A/S1 class road builds.',
    href: '/games/forza-horizon-6/best-road-racing-cars',
    cars: forzaHorizon6Cars.filter((car) =>
      /road|handling|track|sports/i.test(`${car.bestUse} ${car.type}`)
    ),
  },
  {
    title: 'Street and drift',
    note: 'Use these cars when rotation, throttle control, and transition recovery matter.',
    href: '/games/forza-horizon-6/best-drift-cars',
    cars: forzaHorizon6Cars.filter((car) =>
      /street|drift|touge/i.test(`${car.bestUse} ${car.tuneDirection}`)
    ),
  },
  {
    title: 'Weekly and starter',
    note: 'Keep a safe version ready for seasonal restrictions and quick playlist coverage.',
    href: '/games/forza-horizon-6/weekly-playlist',
    cars: forzaHorizon6Cars.filter((car) =>
      /starter|beginner|handling|road|street/i.test(car.bestUse)
    ),
  },
];

const databaseStats = [
  {
    value: forzaHorizon6Cars.length.toString(),
    label: 'car pages',
    detail: 'Japan-focused launch slice with individual detail pages.',
  },
  {
    value: new Set(forzaHorizon6Cars.map((car) => car.make)).size.toString(),
    label: 'manufacturers',
    detail: 'Toyota, Honda, and Mazda manufacturer paths are linked.',
  },
  {
    value: classLinks.length.toString(),
    label: 'class hubs',
    detail: 'B, A, S1, and S2 hubs connect cars back to tuning paths.',
  },
];

const updateQueue = [
  'Add verified source changes before changing car names, PI, or acquisition notes.',
  'Attach one best-car hub, one setup guide, and one preset or calculator path to each useful role.',
  'Move a car from candidate to tested only after repeatable route notes are available.',
  'When a car appears in Car Pass or Weekly Playlist content, link both pages back to the car detail page.',
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title,
    description,
    locale,
    pathname,
  });
}

export default function ForzaHorizon6CarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Car Database', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(carDatabaseFaqs),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Forza Horizon 6 car database entries',
            itemListElement: forzaHorizon6Cars.map((car, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: getForzaHorizon6CarTitle(car),
              url: `https://apextunehub.com/games/forza-horizon-6/cars/${car.slug}`,
            })),
          },
        ]}
      />
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
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {databaseStats.map((stat) => (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                    key={stat.label}
                  >
                    <div className="text-2xl font-semibold text-zinc-50">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-cyan-200">
                      {stat.label}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="forza-panel p-5">
              <DatabaseIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                How to read this database
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Start with the car role, then open the car page for starter,
                road, alternate, weekly, and FAQ notes. Candidate labels stay
                visible until real route testing is added.
              </p>
              <div className="mt-5 grid gap-2">
                {['Role first', 'Class next', 'Preset link', 'Testing status'].map(
                  (item) => (
                    <div
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-zinc-200"
                      key={item}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <RouteIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Browse by role, not just by name
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Most players arrive with a problem: road grip, drift control, or
              a weekly restriction. These role groups point them to the right
              hub before they choose a specific car.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {useCaseGroups.map((group) => (
              <LocaleLink className="forza-card p-4" href={group.href} key={group.title}>
                <WrenchIcon className="size-5 text-cyan-300" />
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {group.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {group.note}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                  {group.cars.length} matching cars
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <CarFrontIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-xl font-semibold">Browse by class</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {classLinks.map((guide) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={guide.pathname}
                  key={guide.id}
                >
                  {guide.h1}
                </LocaleLink>
              ))}
            </div>
          </div>

          <div className="forza-panel p-5">
            <GaugeIcon className="size-5 text-amber-300" />
            <h2 className="mt-4 text-xl font-semibold">
              Browse by manufacturer
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {makeLinks.map((guide) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={guide.pathname}
                  key={guide.id}
                >
                  {guide.h1}
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mb-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Database update queue
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This keeps the car database useful as new confirmed cars, weekly
                restrictions, and tested tune notes arrive.
              </p>
            </div>
            <div className="grid gap-2">
              {updateQueue.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  <BadgeCheckIcon className="mt-0.5 size-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

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
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {car.tuneDirection}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-400">
                <span className="rounded-md border border-white/10 px-2 py-1">
                  {car.acquisition}
                </span>
                <span className="rounded-md border border-white/10 px-2 py-1">
                  {car.testingStatus}
                </span>
                <span className="rounded-md border border-white/10 px-2 py-1">
                  {car.make}
                </span>
              </div>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Candidate labels stay visible',
              text: 'A car should only be marked tested when route notes, setup direction, and weekly usefulness are repeatable.',
            },
            {
              title: 'Every car needs a tune path',
              text: 'The detail page should lead to one guide, one calculator or preset, and one comparison hub.',
            },
            {
              title: 'Weekly links come back here',
              text: 'When a reward or Car Pass vehicle appears, link the weekly page back to the matching car detail page.',
            },
          ].map((rule) => (
            <article className="forza-card p-5" key={rule.title}>
              <ShieldCheckIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{rule.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {rule.text}
              </p>
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <GaugeIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">FAQ</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {carDatabaseFaqs.map((faq) => (
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
      </section>
      <ApexNewsletterCta
        description="Get new FH6 car pages, recommended presets, testing notes, and weekly car updates."
        title="Follow the FH6 car database"
      />
    </main>
  );
}
