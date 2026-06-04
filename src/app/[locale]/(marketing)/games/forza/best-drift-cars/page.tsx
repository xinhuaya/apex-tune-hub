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
  ListChecksIcon,
  RotateCcwIcon,
  SearchIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  TimerResetIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza/best-drift-cars';
const title = 'Forza Best Drift Cars Hub - Apex Tune Hub';
const description =
  'Use the Forza best drift cars hub to route FH5 and FH6 drift-car searches into drift calculator, FH6 drift candidates, drift zone scoring, gearing, and transparent testing notes.';

const semrushSignals = [
  {
    query: 'best drift car in forza horizon 5',
    volume: '880 US',
    kd: '24 KD',
    intent: 'Commercial',
    handoff: 'Drift car decision path',
  },
  {
    query: 'forza horizon 5 best drift cars',
    volume: '20 US',
    kd: '22 KD',
    intent: 'Commercial',
    handoff: 'Candidate list',
  },
  {
    query: 'forza horizon 5 drift tune codes',
    volume: '40 US',
    kd: '21 KD',
    intent: 'Informational',
    handoff: 'Tune-code workflow',
  },
  {
    query: 'how to drift in forza horizon 5',
    volume: 'reference intent',
    kd: 'varies',
    intent: 'Informational',
    handoff: 'Drift symptom workflow',
  },
];

const driftRoutes = [
  {
    title: 'Open drift calculator',
    body: 'Choose RWD or AWD, power level, tire grip, and the first drift symptom before changing every setting.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Choose FH6 candidates',
    body: 'Use the FH6 best drift cars page for angle, recovery, speed-zone, and route-testing candidates.',
    href: '/games/forza-horizon-6/best-drift-cars',
    icon: CarFrontIcon,
  },
  {
    title: 'Fix drift-zone scoring',
    body: 'When the question is score consistency, route the player into transition, speed, angle, and retry notes.',
    href: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
    icon: TimerResetIcon,
  },
];

const driftHandoffs = [
  {
    intent: 'Best drift car',
    firstPage: 'Forza drift hub',
    nextStep:
      'Choose RWD learner, AWD speed zone, style build, or candidate list.',
    href: '/games/forza/best-drift-cars',
  },
  {
    intent: 'FH6 drift setup',
    firstPage: 'Drift tune calculator',
    nextStep: 'Fix spin-out, low angle, bogging, snapback, or slippery exits.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
  },
  {
    intent: 'Drift zone score',
    firstPage: 'Drift zone guide',
    nextStep: 'Tune for speed, angle, transitions, and repeatable scoring.',
    href: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
  },
  {
    intent: 'Bogs mid-drift',
    firstPage: 'Gear ratio calculator',
    nextStep: 'Fix gear spacing after the car can already hold angle.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
  {
    intent: 'Drift tune code',
    firstPage: 'Forza tune codes',
    nextStep:
      'Require car, drivetrain, class, route, source, and last-tested notes.',
    href: '/tools/forza-tune-codes',
  },
];

const driftCandidateCars = forzaHorizon6Cars
  .filter((car) =>
    /drift|street|touge|sports/i.test(`${car.bestUse} ${car.tuneDirection}`)
  )
  .slice(0, 7)
  .map((car) => ({
    title: getForzaHorizon6CarTitle(car),
    href: `/games/forza-horizon-6/cars/${car.slug}`,
    classPi: `${car.stockClass} ${car.stockPi}`,
    role: car.bestUse,
    note: car.tuneDirection,
    status: car.testingStatus,
  }));

const driftTestingSteps = [
  {
    title: 'One corner first',
    body: 'Use the same corner or short zone twice before saving any drift baseline.',
  },
  {
    title: 'Angle before smoke',
    body: 'A useful drift car should hold a controllable line before chasing huge power or visual style.',
  },
  {
    title: 'Gearing after rotation',
    body: 'Move to gear spacing only after the car rotates cleanly and does not snap back.',
  },
  {
    title: 'Code after proof',
    body: 'Drift tune codes should show car, class, drivetrain, route, source, and last-tested date.',
  },
];

const qualityRules = [
  'Separate RWD learner builds from AWD drift-zone speed builds.',
  'Use FH5 drift keyword volume as demand evidence, not as FH6 performance proof.',
  'Do not call a car best for drifting until angle, recovery, gearing, and route notes exist.',
  'Send setup problems into the calculator before publishing car-name code rows.',
];

const faqItems = [
  {
    question: 'Is this a Forza Horizon 5 drift car list?',
    answer:
      'No. This is a broad Forza drift-car hub. FH5 keyword demand helps prioritize the page, while the live workflow points to FH6 drift tools, candidate pages, and testing notes.',
  },
  {
    question: 'What makes a good drift car in Forza?',
    answer:
      'A good drift candidate holds angle predictably, recovers after transitions, stays in a useful gear, and matches the driver goal: RWD learning, AWD speed zones, or style builds.',
  },
  {
    question: 'Should I start with a drift car list or the drift calculator?',
    answer:
      'If you already have a car, start with the drift calculator. If you are still choosing, open the FH6 best drift cars page and car database first.',
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

export default function ForzaBestDriftCarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza best drift cars', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza drift car routes',
            items: [...driftRoutes, ...driftHandoffs].map((item) => ({
              name: 'title' in item ? item.title : item.intent,
              path: item.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'FH6 drift candidate preview',
            items: driftCandidateCars.map((car) => ({
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
            <p className="forza-chip">Forza best drift cars</p>
            <h1 className="forza-neon-title mt-4 max-w-[22rem] text-3xl font-semibold tracking-normal [overflow-wrap:anywhere] sm:max-w-3xl sm:text-5xl">
              Choose the drift job before choosing the drift car.
            </h1>
            <p className="mt-4 max-w-[22rem] text-base leading-7 text-zinc-400 [overflow-wrap:anywhere] sm:max-w-2xl">
              Drift-car searches are strong, but the useful answer depends on
              RWD versus AWD, angle versus speed, gear choice, and repeatable
              scoring. Use this hub to move from broad demand into a testable
              FH6 drift workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="forza-primary-button">
                <LocaleLink href="/tools/forza-horizon-6-drift-tune-calculator">
                  Open Drift Calculator
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md"
              >
                <LocaleLink href="/games/forza-horizon-6/best-drift-cars">
                  FH6 drift candidates
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
              prove FH6 drift meta.
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {driftRoutes.map((route) => {
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
              Drift intent needs a symptom path
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
              Players searching for drift cars often need a practical answer:
              which car to use, how to stop spinning out, what gear to drift in,
              and how to improve score consistency. That makes this page a
              strong bridge into the drift calculator.
            </p>
          </div>

          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.75fr_0.9fr_1.1fr]">
              <span>Intent</span>
              <span>First page</span>
              <span>Next step</span>
            </div>
            {driftHandoffs.map((row) => (
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
            {driftCandidateCars.map((car) => (
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
            <RotateCcwIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Candidate, not final meta
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
              These rows are starting points from the current FH6 database. A
              drift candidate should become stronger only after angle,
              transition, gear, and drift-zone notes are attached.
            </p>
            <Button asChild className="forza-primary-button mt-5">
              <LocaleLink href="/games/forza-horizon-6/best-drift-cars">
                Open FH6 drift cars
              </LocaleLink>
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <ListChecksIcon className="size-5 text-amber-300" />
              <h2 className="text-xl font-semibold">Drift testing order</h2>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {driftTestingSteps.map((step) => (
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
        description="Get drift setup updates, candidate car changes, drift-zone notes, and verified-code readiness checks as the FH6 garage grows."
        title="Follow Forza drift tune updates"
      />
    </main>
  );
}
