import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { forzaHorizon6BestCarGuides } from '@/lib/guides/forza-horizon-6-best-car-guides';
import { forzaHorizon6ClassCarGuides } from '@/lib/guides/forza-horizon-6-class-car-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CarFrontIcon,
  GaugeIcon,
  ListChecksIcon,
  SearchIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza/best-cars';
const title = 'Forza Best Cars Hub - Apex Tune Hub';
const description =
  'Use the Forza best cars hub to route FH5 and FH6 best-car searches into role-based car lists, tune presets, calculators, and transparent testing notes.';

const searchSignals = [
  {
    query: 'forza horizon 5 best cars',
    signal: '390 US / 1.1K global',
    route: 'Best car hub',
    href: '/games/forza-horizon-6/best-cars',
  },
  {
    query: 'best car in forza horizon 5',
    signal: '1.3K US',
    route: 'Role decision table',
    href: '/games/forza-horizon-6/best-cars',
  },
  {
    query: 'best drag car in forza horizon 5',
    signal: '1.0K US',
    route: 'Drag tune path',
    href: '/games/forza/best-drag-cars',
  },
  {
    query: 'best drift car in forza horizon 5',
    signal: '880 US',
    route: 'Drift car candidates',
    href: '/games/forza/best-drift-cars',
  },
  {
    query: 'best cars in forza horizon 5',
    signal: '590 US',
    route: 'Car list hub',
    href: '/games/forza/car-list',
  },
];

const roleRoutes = [
  {
    title: 'I need the best car overall',
    body: 'Start with role and class. A universal top car list is less useful than road, drift, rally, drag, and weekly paths.',
    href: '/games/forza-horizon-6/best-cars',
    icon: BadgeCheckIcon,
  },
  {
    title: 'I need a drift car',
    body: 'Use angle control, recovery, power delivery, and gearing before chasing a dramatic build.',
    href: '/games/forza/best-drift-cars',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'I need a drag or speed car',
    body: 'Match the car to launch grip, first shift, final drive, and top speed instead of only horsepower.',
    href: '/games/forza/best-drag-cars',
    icon: GaugeIcon,
  },
  {
    title: 'I need a tune after picking a car',
    body: 'Open the calculator or preset library so the car choice becomes a testable setup.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: ListChecksIcon,
  },
];

const routeMatrix = [
  {
    intent: 'Best car',
    useFirst: 'Choose road, drift, rally, drag, weekly, or class role.',
    nextPage: 'FH6 best cars',
    href: '/games/forza-horizon-6/best-cars',
  },
  {
    intent: 'Best drift car',
    useFirst: 'Prioritize controllable angle and recovery over power.',
    nextPage: 'Forza drift hub',
    href: '/games/forza/best-drift-cars',
  },
  {
    intent: 'Best drag car',
    useFirst:
      'Use launch grip, first shift, final drive, and speed-trap proof.',
    nextPage: 'Forza drag hub',
    href: '/games/forza/best-drag-cars',
  },
  {
    intent: 'Best A / S1 / S2 car',
    useFirst:
      'Keep each class separate so the recommendation does not blur PI limits.',
    nextPage: 'Class hubs',
    href: '/games/forza-horizon-6/best-a-class-cars',
  },
  {
    intent: 'Car list',
    useFirst:
      'Compare stock class, PI, acquisition, tune direction, and testing status.',
    nextPage: 'Forza car list',
    href: '/games/forza/car-list',
  },
];

const qualityRules = [
  'Do not publish a fake final meta list before testing evidence exists.',
  'Keep FH5 search demand separate from FH6-specific car claims.',
  'Route every best-car click into a calculator, preset, guide, or car page.',
  'Promote cars only after class, route, tune direction, and last-tested notes are visible.',
];

const classLinks = [
  forzaHorizon6ClassCarGuides.b,
  forzaHorizon6ClassCarGuides.a,
  forzaHorizon6ClassCarGuides.s1,
  forzaHorizon6ClassCarGuides.s2,
];

const faqItems = [
  {
    question: 'Is this a Forza Horizon 5 best cars list?',
    answer:
      'No. This is a broader Forza best-car search hub. It uses FH5 search demand to understand stable player intent, then routes users into transparent FH6 car pages, tune tools, and testing workflows.',
  },
  {
    question: 'Why not list the best car immediately?',
    answer:
      'Best-car content is useful only when it says what job the car solves. Road, drift, drag, rally, class, and weekly restrictions need different cars and different tunes.',
  },
  {
    question: 'What should I open first?',
    answer:
      'Open the FH6 best cars page if you are choosing a car. Open the tune calculator if you already have a car and need a baseline setup.',
  },
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

export default function ForzaBestCarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza best cars', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza best car search routes',
            items: [...roleRoutes, ...routeMatrix].map((item) => ({
              name: 'title' in item ? item.title : item.intent,
              path: item.href,
            })),
          }),
          buildFaqJsonLd(faqItems),
        ]}
      />

      <section className="overflow-hidden border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-[30rem] opacity-35" />
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div className="min-w-0 max-w-full">
            <p className="forza-chip">Forza best cars</p>
            <h1 className="forza-neon-title mt-4 max-w-[22rem] text-3xl font-semibold tracking-normal [overflow-wrap:anywhere] sm:max-w-3xl sm:text-5xl">
              Pick the job first, then pick the car.
            </h1>
            <p className="mt-4 max-w-[22rem] text-base leading-7 text-zinc-400 [overflow-wrap:anywhere] sm:max-w-2xl">
              Search demand around FH5 best cars is still strong, but Apex Tune
              Hub keeps the current product honest: use broad Forza intent to
              route players into FH6 car candidates, class hubs, tune presets,
              and calculators without pretending old data is final FH6 meta.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="forza-primary-button">
                <LocaleLink href="/games/forza-horizon-6/best-cars">
                  Open FH6 Best Cars
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md"
              >
                <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                  Tune a candidate
                </LocaleLink>
              </Button>
            </div>
          </div>

          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1.15fr_0.75fr_0.9fr]">
              <span>Search signal</span>
              <span>Volume</span>
              <span>Handoff</span>
            </div>
            {searchSignals.map((row) => (
              <LocaleLink
                className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[1.15fr_0.75fr_0.9fr]"
                href={row.href}
                key={row.query}
              >
                <span className="min-w-0 font-semibold text-zinc-50 [overflow-wrap:anywhere]">
                  {row.query}
                </span>
                <span className="text-amber-200">{row.signal}</span>
                <span className="text-cyan-100">{row.route}</span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {roleRoutes.map((route) => {
            const Icon = route.icon;

            return (
              <LocaleLink
                className="forza-card p-5"
                href={route.href}
                key={route.title}
              >
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                  {route.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {route.body}
                </p>
              </LocaleLink>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <SearchIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Turn broad searches into useful pages
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The goal is not to catch every Forza keyword with thin pages. The
              goal is to match each high-volume intent to a page that helps the
              player choose a car, then immediately gives them a tune path.
            </p>
          </div>

          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.9fr_1.35fr_0.9fr]">
              <span>Intent</span>
              <span>Use first</span>
              <span>Next page</span>
            </div>
            {routeMatrix.map((row) => (
              <LocaleLink
                className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.9fr_1.35fr_0.9fr]"
                href={row.href}
                key={row.intent}
              >
                <span className="min-w-0 font-semibold text-zinc-50">
                  {row.intent}
                </span>
                <span className="min-w-0 leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                  {row.useFirst}
                </span>
                <span className="text-cyan-100">{row.nextPage}</span>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-5 text-amber-300" />
              <h2 className="text-xl font-semibold">Quality rules</h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {qualityRules.map((rule) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-300"
                  key={rule}
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <CarFrontIcon className="size-5 text-cyan-300" />
              <h2 className="text-xl font-semibold">Class shortcuts</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {classLinks.map((guide) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/40"
                  href={guide.pathname}
                  key={guide.id}
                >
                  <strong className="block text-sm text-zinc-100">
                    {guide.h1}
                  </strong>
                  <span className="mt-2 block text-sm leading-6 text-zinc-400">
                    {guide.bestFor}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqItems.map((faq) => (
            <article className="forza-card p-5" key={faq.question}>
              <h2 className="text-base font-semibold text-zinc-50">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ApexNewsletterCta
        description="Get Forza best-car routing updates, FH6 car database changes, preset links, and testing notes as the garage grows."
        title="Follow the Forza best-car database"
      />
    </main>
  );
}
