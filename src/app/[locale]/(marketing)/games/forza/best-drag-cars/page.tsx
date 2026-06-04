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
  GaugeIcon,
  LinkIcon,
  ListChecksIcon,
  SearchIcon,
  ShieldCheckIcon,
  TimerIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza/best-drag-cars';
const title = 'Forza Best Drag Cars Hub - Apex Tune Hub';
const description =
  'Use the Forza best drag cars hub to route FH5 and FH6 drag-car searches into launch grip, gearing, tune-code, car database, and FH6 drag setup workflows.';

const semrushSignals = [
  {
    query: 'best drag car in forza horizon 5',
    volume: '1,000 US',
    kd: '24 KD',
    intent: 'Commercial',
    handoff: 'Drag car decision path',
  },
  {
    query: 'forza horizon 5 best drag cars',
    volume: '110 US',
    kd: '18 KD',
    intent: 'Commercial',
    handoff: 'Candidate list',
  },
  {
    query: 'forza horizon 5 drag tune codes',
    volume: '110 US',
    kd: '22 KD',
    intent: 'Informational',
    handoff: 'Tune-code workflow',
  },
  {
    query: 'forza horizon 5 koenigsegg jesko top speed tune code',
    volume: '40 US',
    kd: '21 KD',
    intent: 'Informational',
    handoff: 'Verified-code rules',
  },
];

const dragRoutes = [
  {
    title: 'Fix launch and gearing',
    body: 'Start with final drive, first shift, limiter behavior, and wheelspin before chasing more power.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
    icon: GaugeIcon,
  },
  {
    title: 'Open drag tune settings',
    body: 'Use the FH6 drag guide for launch grip, tire pressure, differential, and straight-line testing.',
    href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
    icon: TimerIcon,
  },
  {
    title: 'Check tune-code readiness',
    body: 'Drag code pages need car, class, route, source, and last-tested notes before they are trustworthy.',
    href: '/tools/forza-tune-codes',
    icon: LinkIcon,
  },
];

const dragHandoffs = [
  {
    intent: 'Best drag car',
    firstPage: 'Forza drag hub',
    nextStep: 'Choose launch, top speed, speed trap, or tune-code path.',
    href: '/games/forza/best-drag-cars',
  },
  {
    intent: 'FH6 drag setup',
    firstPage: 'Drag tune settings',
    nextStep: 'Tune launch grip, differential, tire pressure, and gearing.',
    href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
  },
  {
    intent: 'Gear ratio problem',
    firstPage: 'Gear ratio calculator',
    nextStep: 'Fix limiter, unused top gear, bogging, or first-gear spin.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
  {
    intent: 'Drag tune code',
    firstPage: 'Forza tune codes',
    nextStep: 'Use verified-code rules before publishing or copying a code.',
    href: '/tools/forza-tune-codes',
  },
  {
    intent: 'Car-specific pick',
    firstPage: 'Car database',
    nextStep: 'Open candidate rows and attach a baseline setup path.',
    href: '/games/forza-horizon-6/cars',
  },
];

const dragCandidateCars = forzaHorizon6Cars
  .filter((car) =>
    /drag|street|track|sports/i.test(`${car.bestUse} ${car.type}`)
  )
  .slice(0, 6)
  .map((car) => ({
    title: getForzaHorizon6CarTitle(car),
    href: `/games/forza-horizon-6/cars/${car.slug}`,
    classPi: `${car.stockClass} ${car.stockPi}`,
    role: car.bestUse,
    note: car.tuneDirection,
    status: car.testingStatus,
  }));

const dragTestingSteps = [
  {
    title: 'Launch first',
    body: 'If the car spins or bogs in the first seconds, the trap-speed number is not useful yet.',
  },
  {
    title: 'First shift second',
    body: 'A drag car should recover cleanly after the first shift. Fix that before changing every gear.',
  },
  {
    title: 'Final drive third',
    body: 'Use the gear calculator to place the limiter near the end of the actual test distance.',
  },
  {
    title: 'Code last',
    body: 'Only publish a drag tune code after car, class, route, setup source, and last-tested date are visible.',
  },
];

const qualityRules = [
  'Do not call one car the best drag car without route length, class, drivetrain, and tune context.',
  'Separate drag-strip launch builds from highway speed-trap and top-speed builds.',
  'Use FH5 keyword data as demand evidence, not as FH6 performance evidence.',
  'Route code searches to verified-code rules until real in-game share codes are tested.',
];

const faqItems = [
  {
    question: 'Is this a Forza Horizon 5 drag car list?',
    answer:
      'No. This is a broad Forza drag-car hub. FH5 keyword volume shows stable demand, while the live Apex Tune Hub workflow routes players into FH6 drag tuning, gearing, car database, and tune-code pages.',
  },
  {
    question: 'What makes a good drag car in Forza?',
    answer:
      'A good drag candidate launches repeatably, recovers after the first shift, uses gearing that fits the route distance, and has enough traction to turn power into speed.',
  },
  {
    question: 'Should I start with the car list or the gear calculator?',
    answer:
      'If you already have a car, start with the gear ratio calculator. If you are still choosing, use the candidate table and car database first, then open the drag tuning guide.',
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

export default function ForzaBestDragCarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza best drag cars', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza drag car routes',
            items: [...dragRoutes, ...dragHandoffs].map((item) => ({
              name: 'title' in item ? item.title : item.intent,
              path: item.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'FH6 drag candidate preview',
            items: dragCandidateCars.map((car) => ({
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
            <p className="forza-chip">Forza best drag cars</p>
            <h1 className="forza-neon-title mt-4 max-w-[22rem] text-3xl font-semibold tracking-normal [overflow-wrap:anywhere] sm:max-w-3xl sm:text-5xl">
              Pick the launch problem before picking the drag car.
            </h1>
            <p className="mt-4 max-w-[22rem] text-base leading-7 text-zinc-400 [overflow-wrap:anywhere] sm:max-w-2xl">
              Drag-car searches have real demand, but a useful answer needs more
              than a name. Start with launch grip, first shift, final drive, and
              verified-code rules, then promote cars only after the route and
              setup are clear.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="forza-primary-button">
                <LocaleLink href="/tools/forza-horizon-6-gear-ratio-calculator">
                  Open Gear Tool
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md"
              >
                <LocaleLink href="/games/forza-horizon-6/guides/best-drag-tune-settings">
                  Drag tune guide
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
              file, 2026-06-04. These numbers guide page priority; they do not
              prove FH6 drag meta.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {dragRoutes.map((route) => {
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
              Drag intent needs a tool path
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
              The highest drag keywords are not just asking for an article. They
              are asking which car to use, what code to copy, and how to fix
              launch or top speed. That makes this a strong bridge into
              calculator usage.
            </p>
          </div>

          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.75fr_0.9fr_1.1fr]">
              <span>Intent</span>
              <span>First page</span>
              <span>Next step</span>
            </div>
            {dragHandoffs.map((row) => (
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

        <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_0.45fr_0.9fr_0.6fr]">
              <span>FH6 candidate</span>
              <span>Class</span>
              <span>Why it matters</span>
              <span>Status</span>
            </div>
            {dragCandidateCars.map((car) => (
              <LocaleLink
                className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[1fr_0.45fr_0.9fr_0.6fr]"
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
              </LocaleLink>
            ))}
          </div>

          <div className="forza-panel p-5">
            <CarFrontIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Candidate, not final meta
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
              These rows are starting points from the current FH6 database. They
              should become stronger only after route notes, gearing
              screenshots, and verified presets are attached.
            </p>
            <Button asChild className="forza-primary-button mt-5">
              <LocaleLink href="/games/forza-horizon-6/cars">
                Browse car database
              </LocaleLink>
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <ListChecksIcon className="size-5 text-amber-300" />
              <h2 className="text-xl font-semibold">Drag testing order</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {dragTestingSteps.map((step) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                  key={step.title}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-5 text-cyan-300" />
              <h2 className="text-xl font-semibold">Publishing rules</h2>
            </div>
            <div className="mt-4 grid gap-3">
              {qualityRules.map((rule) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-300 [overflow-wrap:anywhere]"
                  key={rule}
                >
                  {rule}
                </div>
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
              <BadgeCheckIcon className="size-5 text-amber-300" />
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
        description="Get drag setup updates, gear-ratio notes, candidate car changes, and verified-code readiness checks as the FH6 garage grows."
        title="Follow Forza drag tune updates"
      />
    </main>
  );
}
