import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { forzaHorizon6ClassCarGuides } from '@/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6BestCarGuides } from '@/lib/guides/forza-horizon-6-best-car-guides';
import { forzaHorizon6MakeCarGuides } from '@/lib/guides/forza-horizon-6-make-car-guides';
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
  RouteIcon,
  ShieldCheckIcon,
  TrophyIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/best-cars';
const title = 'Best Cars in Forza Horizon 6 - Apex Tune Hub';
const description =
  'Best Forza Horizon 6 car planning hub for road racing, drift, rally, class picks, JDM cars, and weekly event recommendations.';

const bestCarGuides = [
  forzaHorizon6BestCarGuides.road,
  forzaHorizon6BestCarGuides.drift,
  forzaHorizon6BestCarGuides.rally,
  forzaHorizon6BestCarGuides.jdm,
];
const classCarGuides = [
  forzaHorizon6ClassCarGuides.b,
  forzaHorizon6ClassCarGuides.a,
  forzaHorizon6ClassCarGuides.s1,
  forzaHorizon6ClassCarGuides.s2,
];
const makeCarGuides = [
  forzaHorizon6MakeCarGuides.toyota,
  forzaHorizon6MakeCarGuides.honda,
  forzaHorizon6MakeCarGuides.mazda,
];

const carRows = bestCarGuides.map((guide) => ({
  category: guide.h1.replace('Best ', '').replace(' in Forza Horizon 6', ''),
  pick: guide.picks[0]?.car ?? 'Candidate list pending',
  classBand: guide.classFocus,
  note: guide.picks[0]?.tuneDirection ?? guide.updateCadence,
  href: guide.pathname,
}));

const frameworkCards = [
  {
    title: 'Candidate first',
    description:
      'Cars stay labelled candidate or needs-testing until route notes and tune evidence are added.',
  },
  {
    title: 'Class matters',
    description:
      'A, B, S1, and S2 versions should be evaluated separately instead of forcing one universal ranking.',
  },
  {
    title: 'Tune links',
    description:
      'Every recommended car should point to a calculator, preset, or guide that explains the setup direction.',
  },
];

const scoringCriteria = [
  {
    title: 'Route fit',
    body: 'Does the car suit city sprint, mountain road, rally, drift zone, drag, or weekly restrictions?',
    icon: RouteIcon,
  },
  {
    title: 'Tune ceiling',
    body: 'Can the car improve with a clear preset path, or does it need too many hidden compromises?',
    icon: GaugeIcon,
  },
  {
    title: 'Repeatability',
    body: 'Can a normal player repeat clean launches, braking, exits, and recovery without a perfect lap?',
    icon: TrophyIcon,
  },
];

const bestCarWorkflow = [
  {
    step: 'Pick the role',
    detail:
      'Choose road, drift, rally, JDM, class, or weekly event before comparing cars.',
    href: '/games/forza-horizon-6/guides',
  },
  {
    step: 'Open the candidate list',
    detail:
      'Use the category or class guide to find cars with the right surface and class direction.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    step: 'Attach a baseline tune',
    detail:
      'Pair the car with the tune calculator, preset library, drift tool, or gear ratio tool.',
    href: '/tools/forza-horizon-6-tune-presets',
  },
  {
    step: 'Promote only after testing',
    detail:
      'Move a car from candidate to recommended only after route notes and a tested setup are added.',
    href: '/games/forza-horizon-6/weekly-playlist',
  },
];

const bestCarNextLinks = [
  {
    title: 'Forza Best Cars Hub',
    description:
      'Use the broad Forza best-car page when the search intent is not clearly FH6 yet.',
    href: '/games/forza/best-cars',
  },
  {
    title: 'Forza Car List Database',
    description:
      'Use the broad car-list page for FH5/FH6 car-list searches before opening specific FH6 car rows.',
    href: '/games/forza/car-list',
  },
  {
    title: 'Car Database',
    description:
      'Browse individual car pages with class, PI, tune direction, presets, and candidate status.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    title: 'Tune Presets',
    description:
      'Attach baseline setup URLs to candidate cars before in-game share codes are verified.',
    href: '/tools/forza-horizon-6-tune-presets',
  },
  {
    title: 'Weekly Playlist',
    description:
      'Use event restrictions and reward cars to decide which candidates deserve testing next.',
    href: '/games/forza-horizon-6/weekly-playlist',
  },
  {
    title: 'Drag Tune Settings',
    description:
      'Use launch grip, final drive, first shift, and tire pressure notes before a drag car gets promoted.',
    href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
  },
  {
    title: 'Tuning Settings',
    description:
      'Explain which slider group supports the car role once a candidate needs refinement.',
    href: '/games/forza-horizon-6/tuning-settings',
  },
];

const bestCarsFaqs = [
  {
    question: 'What are the best cars in Forza Horizon 6?',
    answer:
      'Apex Tune Hub starts with transparent candidate lists for road racing, drift, rally, and JDM builds, then promotes cars after route or event testing is added.',
  },
  {
    question: 'Why not publish a fake final meta list?',
    answer:
      'A final ranking before testing would be low-trust content. The site keeps candidate status visible and links each car to tune direction, class focus, and testing notes.',
  },
  {
    question: 'Which class should I build first?',
    answer:
      'Most players should start around B, A, or S1 depending on the car role. Move higher only when the car stays repeatable on target routes.',
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
  {
    title: 'Best Drag Tune Settings',
    description:
      'Launch grip, first shift, final drive, and speed-trap testing path.',
    href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
  },
];

const roleDecisionMatrix = [
  {
    playerGoal: 'Win weekly events safely',
    firstPage: 'Weekly Playlist',
    href: '/games/forza-horizon-6/weekly-playlist',
    nextAction: 'Pick a legal car, then attach one stable preset.',
  },
  {
    playerGoal: 'Find a road racing car',
    firstPage: 'Best Road Racing Cars',
    href: '/games/forza-horizon-6/best-road-racing-cars',
    nextAction: 'Compare A, S1, and S2 candidates before adding power.',
  },
  {
    playerGoal: 'Build a drift car',
    firstPage: 'Best Drift Cars',
    href: '/games/forza-horizon-6/best-drift-cars',
    nextAction: 'Open the drift calculator and test angle recovery.',
  },
  {
    playerGoal: 'Build a drag or speed car',
    firstPage: 'Drag Tune Settings',
    href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
    nextAction:
      'Start from launch grip and gear spacing before claiming a best drag car.',
  },
  {
    playerGoal: 'Use a Japan/JDM favorite',
    firstPage: 'Best JDM Cars',
    href: '/games/forza-horizon-6/best-jdm-cars',
    nextAction: 'Choose road, drift, touge, rally, or weekly use first.',
  },
  {
    playerGoal: 'Tune by class',
    firstPage: 'Class hubs',
    href: '/games/forza-horizon-6/best-a-class-cars',
    nextAction: 'Start with B, A, or S1 before pushing into S2.',
  },
];

const recommendationStatusCards = [
  {
    title: 'Candidate',
    text: 'A plausible car with clear role, class, and setup direction, but no route evidence yet.',
  },
  {
    title: 'Needs testing',
    text: 'A useful search or garage target that still needs route, class, or weekly-event notes.',
  },
  {
    title: 'Preset linked',
    text: 'The car has a calculator state or preset URL that explains the first tune path.',
  },
  {
    title: 'Recommended',
    text: 'Future state: the car has repeatable route evidence and a reason to beat alternatives.',
  },
];

const garageExpansionRows = [
  {
    cluster: 'Role pages',
    current: `${bestCarGuides.length} hubs`,
    next: 'Add route evidence, preset links, and screenshots after testing.',
  },
  {
    cluster: 'Class pages',
    current: `${classCarGuides.length} hubs`,
    next: 'Split B, A, S1, and S2 recommendations by weekly and route use.',
  },
  {
    cluster: 'Manufacturer pages',
    current: `${makeCarGuides.length} hubs`,
    next: 'Use Toyota, Honda, and Mazda pages as Japan-focused car clusters.',
  },
  {
    cluster: 'Car database',
    current: '10 starter pages',
    next: 'Promote only the cars that earn specific tune and route notes.',
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

export default function BestCarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Best Cars', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 best car guide clusters',
            items: [...bestCarGuides, ...classCarGuides, ...makeCarGuides].map(
              (guide) => ({
                name: guide.h1,
                path: guide.pathname,
              })
            ),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 best cars next steps',
            items: bestCarNextLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(bestCarsFaqs),
        ]}
      />
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
                links, event results, and weekly playlist notes. The current
                picks are candidates, not fake final rankings.
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
              <div className="mt-5 grid gap-2">
                {[
                  'Keep candidate labels visible until testing is added.',
                  'Separate class lists from role lists so rankings stay useful.',
                  'Link every promoted car to a tune, preset, or route note.',
                ].map((rule) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={rule}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <TrophyIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Score the best car by job, not hype
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A best-car hub can rank before final meta data exists if it is
              honest about the selection framework. The score should start with
              route fit, tune ceiling, and repeatability.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {scoringCriteria.map((item) => {
              const Icon = item.icon;

              return (
                <article className="forza-card p-4" key={item.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="forza-panel mb-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Best-car testing workflow
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This is the editorial path for turning a speculative candidate
                into a useful recommendation as FH6 testing expands.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {bestCarWorkflow.map((item) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40"
                  href={item.href}
                  key={item.step}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.step}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.detail}
                  </p>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mb-6 overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1fr_1.3fr]">
            <span>Player goal</span>
            <span>Open first</span>
            <span>Next action</span>
          </div>
          {roleDecisionMatrix.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[1fr_1fr_1.3fr]"
              href={row.href}
              key={row.playerGoal}
            >
              <span className="font-semibold text-zinc-50">
                {row.playerGoal}
              </span>
              <span className="text-amber-200">{row.firstPage}</span>
              <span className="leading-6 text-zinc-400">{row.nextAction}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1fr_0.7fr_1.5fr]">
            <span>Category</span>
            <span>Current pick</span>
            <span>Class</span>
            <span>Testing note</span>
          </div>
          {carRows.map((row) => (
            <LocaleLink
              key={row.category}
              href={row.href}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1fr_0.7fr_1.5fr]"
            >
              <span className="font-semibold text-zinc-50">{row.category}</span>
              <span className="text-amber-200">{row.pick}</span>
              <span className="text-zinc-300">{row.classBand}</span>
              <span className="text-zinc-400">{row.note}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="forza-panel p-5">
            <ShieldCheckIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-xl font-semibold">
              Recommendation status ladder
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This keeps the page honest while still letting it rank for
              best-car intent. A car should not look final until its route,
              class, and tune evidence are visible.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {recommendationStatusCards.map((item) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={item.title}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200 md:grid-cols-[0.9fr_0.7fr_1.3fr]">
              <span>Cluster</span>
              <span>Current</span>
              <span>Next expansion</span>
            </div>
            {garageExpansionRows.map((row) => (
              <div
                className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.9fr_0.7fr_1.3fr]"
                key={row.cluster}
              >
                <span className="font-semibold text-zinc-50">
                  {row.cluster}
                </span>
                <span className="text-cyan-200">{row.current}</span>
                <span className="leading-6 text-zinc-400">{row.next}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Follow-up routes
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Where to go after picking a car candidate
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The best-car page should move players into concrete action:
              compare the car, attach a tune, check weekly use cases, then tune
              the setting group that matches the weakness.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {bestCarNextLinks.map((link) => (
              <LocaleLink
                className="forza-card p-4"
                href={link.href}
                key={link.href}
              >
                <CarFrontIcon className="size-5 text-fuchsia-300" />
                <h3 className="mt-4 text-base font-semibold text-zinc-100">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {link.description}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
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
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {frameworkCards.map(({ title, description }) => (
            <article key={title} className="forza-card p-5">
              <GaugeIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {classCarGuides.map((guide) => (
            <LocaleLink
              className="forza-card p-5"
              href={guide.pathname}
              key={guide.id}
            >
              <CarFrontIcon className="size-5 text-amber-300" />
              <h2 className="mt-4 text-lg font-semibold">{guide.h1}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {guide.classGoal}. Best for {guide.bestFor}.
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {makeCarGuides.map((guide) => (
            <LocaleLink
              className="forza-card p-5"
              href={guide.pathname}
              key={guide.id}
            >
              <CarFrontIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold">{guide.h1}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {guide.bestFor}. {guide.testingAngle}
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <ListChecksIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">Best cars FAQ</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {bestCarsFaqs.map((faq) => (
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

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <LocaleLink
            className="forza-card p-5"
            href="/games/forza-horizon-6/cars"
          >
            <CarFrontIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Open car database</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Browse individual car pages with class, PI, acquisition, tune
              direction, matched presets, and candidate status.
            </p>
          </LocaleLink>
          <LocaleLink
            className="forza-card p-5"
            href="/tools/forza-horizon-6-tune-presets"
          >
            <GaugeIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Open tune presets</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Match car candidates to shareable baseline presets for road,
              drift, rally, dirt, street, and drag testing.
            </p>
          </LocaleLink>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get FH6 best-car updates, candidate promotions, preset links, and weekly event testing notes as the garage grows."
        title="Follow the FH6 best-car list"
      />
    </main>
  );
}
