import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6Cars,
  getForzaHorizon6CarTitle,
} from '@/lib/cars/forza-horizon-6-cars';
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
  DatabaseIcon,
  GaugeIcon,
  ListChecksIcon,
  SearchIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza/car-list';
const title = 'Forza Car List Database - Apex Tune Hub';
const description =
  'Use the Forza car list database hub to route FH5 and FH6 car-list searches into FH6 car pages, best-car hubs, tune calculators, and transparent source notes.';

const semrushSignals = [
  {
    query: 'forza horizon 5 car list',
    volume: '3,600 US',
    kd: '36 KD',
    intent: 'Informational',
    handoff: 'Broad car-list intent',
  },
  {
    query: 'forza horizon 6 car list',
    volume: '260 US',
    kd: '16 KD',
    intent: 'Informational',
    handoff: 'Current FH6 database',
  },
];

const databaseRoutes = [
  {
    title: 'Open the FH6 car database',
    body: 'Use class, PI, acquisition, tune direction, and testing status before trusting a car pick.',
    href: '/games/forza-horizon-6/cars',
    icon: DatabaseIcon,
  },
  {
    title: 'Choose a role first',
    body: 'Road, drift, rally, drag, weekly, and class pages prevent one vague best-car list.',
    href: '/games/forza/best-cars',
    icon: BadgeCheckIcon,
  },
  {
    title: 'Tune the candidate',
    body: 'After choosing a car, open the calculator or preset library so the decision becomes testable.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: SlidersHorizontalIcon,
  },
];

const handoffRows = [
  {
    intent: 'Car list',
    firstPage: 'Forza car list database',
    nextStep: 'Open FH6 car pages with source and tuning context.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    intent: 'Best car',
    firstPage: 'Forza best cars hub',
    nextStep: 'Pick road, drift, rally, drag, class, or weekly role.',
    href: '/games/forza/best-cars',
  },
  {
    intent: 'Specific model',
    firstPage: 'FH6 car detail page',
    nextStep: 'Check class, PI, acquisition, role, and tune direction.',
    href: '/games/forza-horizon-6/cars/2020-toyota-gr-supra',
  },
  {
    intent: 'Setup after car',
    firstPage: 'FH6 tune calculator',
    nextStep: 'Generate a baseline and copy test notes.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    intent: 'Tune sharing',
    firstPage: 'Tune presets',
    nextStep: 'Save a baseline URL before in-game share codes are verified.',
    href: '/tools/forza-horizon-6-tune-presets',
  },
];

const databasePreview = forzaHorizon6Cars.slice(0, 8).map((car) => ({
  title: getForzaHorizon6CarTitle(car),
  href: `/games/forza-horizon-6/cars/${car.slug}`,
  classPi: `${car.stockClass} ${car.stockPi}`,
  role: car.bestUse,
  status: car.testingStatus,
}));

const qualityRules = [
  {
    title: 'Separate FH5 demand from FH6 facts',
    body: 'FH5 search volume tells us what players want. FH6 pages must still use current sources and transparent testing labels.',
  },
  {
    title: 'Keep every row useful',
    body: 'A car row should show class, PI, role, acquisition, source status, and where to tune next.',
  },
  {
    title: 'Promote after evidence',
    body: 'Candidate cars stay marked as candidates until route notes, screenshots, or repeatable tests are added.',
  },
  {
    title: 'Link to tools quickly',
    body: 'Car-list visitors should reach the calculator, gear tool, preset library, or best-car hub without hunting.',
  },
];

const sourceCards = [
  {
    title: 'Official FH6 source tracker',
    body: 'Use this page before changing release, platform, map, or vehicle wording.',
    href: '/games/forza-horizon-6/official-sources',
  },
  {
    title: 'FH6 best cars',
    body: 'Role-based car picks for road, drift, rally, class, and weekly paths.',
    href: '/games/forza-horizon-6/best-cars',
  },
  {
    title: 'Gear ratio tool',
    body: 'Fix launch, gear spacing, and top-speed problems after selecting a car.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
];

const faqItems = [
  {
    question: 'Is this a Forza Horizon 5 car list?',
    answer:
      'No. This is a broad Forza car-list hub. FH5 search volume is used to understand stable demand, while the active database routes users into FH6 pages and tools.',
  },
  {
    question: 'Does this include Forza Horizon 6 cars?',
    answer:
      'Yes. The page previews the current FH6 starter database and links to individual car pages with class, PI, acquisition, tune direction, and testing status.',
  },
  {
    question: 'Why not merge FH5 and FH6 cars into one final table?',
    answer:
      'Mixing old FH5 demand with FH6 claims would reduce trust. Apex Tune Hub keeps search intent broad, then keeps vehicle facts and recommendations tied to source and testing notes.',
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

export default function ForzaCarListPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza car list', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza car-list handoff routes',
            items: [...databaseRoutes, ...handoffRows].map((item) => ({
              name: 'title' in item ? item.title : item.intent,
              path: item.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 car database preview',
            items: databasePreview.map((car) => ({
              name: `${car.title} - ${car.classPi}`,
              path: car.href,
            })),
          }),
          buildFaqJsonLd(faqItems),
        ]}
      />

      <section className="overflow-hidden border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-[32rem] opacity-35" />
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:px-8">
          <div className="min-w-0">
            <p className="forza-chip">Forza car list database</p>
            <h1 className="forza-neon-title mt-4 max-w-[22rem] text-3xl font-semibold tracking-normal [overflow-wrap:anywhere] sm:max-w-3xl sm:text-5xl">
              Search the car list, then tune the useful cars.
            </h1>
            <p className="mt-4 max-w-[22rem] text-base leading-7 text-zinc-400 [overflow-wrap:anywhere] sm:max-w-2xl">
              Forza car-list searches are already stronger than most FH6
              long-tail terms. This page catches that broad intent, explains the
              data boundary, and sends players into the FH6 database, best car
              routes, and calculator stack.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="forza-primary-button">
                <LocaleLink href="/games/forza-horizon-6/cars">
                  Open FH6 Car Database
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
                  Tune a car
                </LocaleLink>
              </Button>
            </div>
          </div>

          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1.15fr_0.65fr_0.5fr_0.8fr]">
              <span>SEMrush query</span>
              <span>US volume</span>
              <span>KD</span>
              <span>Handoff</span>
            </div>
            {semrushSignals.map((row) => (
              <div
                className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1.15fr_0.65fr_0.5fr_0.8fr]"
                key={row.query}
              >
                <span className="min-w-0 font-semibold text-zinc-50 [overflow-wrap:anywhere]">
                  {row.query}
                </span>
                <span className="text-amber-200">{row.volume}</span>
                <span className="text-cyan-100">{row.kd}</span>
                <span className="text-zinc-400">{row.handoff}</span>
              </div>
            ))}
            <div className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-zinc-500 [overflow-wrap:anywhere]">
              Snapshot source: user-exported SEMrush US desktop bulk keyword
              file, 2026-06-04. The page uses this as search-direction data, not
              as vehicle-performance evidence.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {databaseRoutes.map((route) => {
            const Icon = route.icon;

            return (
              <LocaleLink
                className="forza-card min-w-0 overflow-hidden p-5"
                href={route.href}
                key={route.title}
              >
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                  {route.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                  {route.body}
                </p>
              </LocaleLink>
            );
          })}
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="forza-panel p-5">
            <SearchIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Why this page exists
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
              The SEMrush file shows car-list demand is bigger and more stable
              than most early FH6 tuning terms. We should use that demand to
              introduce the database, but keep the actual FH6 recommendations
              narrow, sourced, and connected to tools.
            </p>
          </div>

          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.75fr_0.9fr_1.1fr]">
              <span>Intent</span>
              <span>First page</span>
              <span>Next step</span>
            </div>
            {handoffRows.map((row) => (
              <LocaleLink
                className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.75fr_0.9fr_1.1fr]"
                href={row.href}
                key={row.intent}
              >
                <span className="font-semibold text-zinc-50">{row.intent}</span>
                <span className="text-cyan-100">{row.firstPage}</span>
                <span className="min-w-0 leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                  {row.nextStep}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1.1fr_0.45fr_0.95fr_0.65fr_0.35fr]">
              <span>FH6 car preview</span>
              <span>Class</span>
              <span>Role</span>
              <span>Status</span>
              <span>Open</span>
            </div>
            {databasePreview.map((car) => (
              <LocaleLink
                className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[1.1fr_0.45fr_0.95fr_0.65fr_0.35fr]"
                href={car.href}
                key={car.href}
              >
                <span className="min-w-0 font-semibold text-zinc-50 [overflow-wrap:anywhere]">
                  {car.title}
                </span>
                <span className="text-amber-200">{car.classPi}</span>
                <span className="min-w-0 text-zinc-400 [overflow-wrap:anywhere]">
                  {car.role}
                </span>
                <span className="text-cyan-100">{car.status}</span>
                <span className="text-zinc-300">
                  <ArrowRightIcon className="size-4" />
                </span>
              </LocaleLink>
            ))}
          </div>

          <div className="forza-panel p-5">
            <CarFrontIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Database rule of thumb
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
              A car-list page should help a player answer: what car is it, what
              class does it start in, what job can it do, how confident are we,
              and what tool should I open next?
            </p>
            <Button asChild className="forza-primary-button mt-5">
              <LocaleLink href="/games/forza-horizon-6/cars">
                Browse all car rows
              </LocaleLink>
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-5 text-amber-300" />
              <h2 className="text-xl font-semibold">Quality rules</h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {qualityRules.map((rule) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                  key={rule.title}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {rule.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                    {rule.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <GaugeIcon className="size-5 text-cyan-300" />
              <h2 className="text-xl font-semibold">Useful next pages</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {sourceCards.map((card) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/40"
                  href={card.href}
                  key={card.title}
                >
                  <strong className="block text-sm text-zinc-100">
                    {card.title}
                  </strong>
                  <span className="mt-2 block text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                    {card.body}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqItems.map((faq) => (
            <article
              className="forza-card min-w-0 overflow-hidden p-5"
              key={faq.question}
            >
              <ListChecksIcon className="size-5 text-amber-300" />
              <h2 className="mt-4 text-base font-semibold text-zinc-50">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ApexNewsletterCta
        description="Get FH6 car database updates, source changes, role-based picks, and tune-tool handoffs as the garage expands."
        title="Follow the Forza car-list database"
      />
    </main>
  );
}
