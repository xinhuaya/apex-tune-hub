import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { ForzaHorizon6GuideMediaSources } from '@/components/games/forza-horizon-6-guide-media-sources';
import { JsonLd } from '@/components/seo/json-ld';
import { ForzaBeginnerTestPlan } from '@/components/tools/forza-beginner-test-plan';
import { ForzaGearRatioCalculator } from '@/components/tools/forza-tuning-calculators';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  FlagIcon,
  GaugeIcon,
  ListChecksIcon,
  SearchIcon,
  TimerIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-horizon-6-gear-ratio-calculator';
const title = 'Forza Gear Ratio Calculator for FH6 - Apex Tune Hub';
const description =
  'Use this FH6 gear ratio calculator to tune Forza final drive, launch, shift spacing, limiter behavior, and top speed around the route.';

const gearWorkflow = [
  {
    title: 'Start with the route',
    description:
      'A highway top-speed setup and a city sprint setup need different gearing. Pick the event type before changing final drive.',
    icon: FlagIcon,
  },
  {
    title: 'Choose the priority',
    description:
      'Acceleration, balanced gearing, and top speed all trade against each other. The calculator keeps that trade-off explicit.',
    icon: GaugeIcon,
  },
  {
    title: 'Fix one symptom',
    description:
      'Limiter, unused top gear, slow launch, bogging after shifts, and wheelspin each point to a different first move.',
    icon: ListChecksIcon,
  },
  {
    title: 'Test final drive first',
    description:
      'Change final drive before editing every gear. Only touch individual gears if one part of the route still feels wrong.',
    icon: TimerIcon,
  },
];

const gearRelatedLinks = [
  {
    title: 'Forza Drag Cars Hub',
    description:
      'Use the broad drag-car hub when the search starts with best drag car, drag tune code, launch, or top-speed intent.',
    href: '/games/forza/best-drag-cars',
  },
  {
    title: 'Forza Drift Cars Hub',
    description:
      'Use this when gearing questions are tied to drift angle, snapback, bogging mid-drift, or drift tune-code intent.',
    href: '/games/forza/best-drift-cars',
  },
  {
    title: 'Forza Tuning Calculator',
    description:
      'Use the broad Forza calculator hub when the search is not yet FH6-specific or when you need the main workflow first.',
    href: '/tools/forza-tuning-calculator',
  },
  {
    title: 'Gear Ratio Guide',
    description:
      'Read the deeper FH6 gearing guide for final drive, launch, limiter, and shift-gap testing.',
    href: '/games/forza-horizon-6/guides/gear-ratio-guide',
  },
  {
    title: 'Tune Calculator',
    description:
      'Use the main tune calculator first if the car still has braking, balance, or traction problems.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    title: 'Road Racing Cars',
    description:
      'Pair gearing changes with road candidates that can use longer straights and stable exits.',
    href: '/games/forza-horizon-6/best-road-racing-cars',
  },
];

const gearSearchSignals = [
  {
    query: 'forza gear ratio calculator',
    source: 'GSC page signal',
    signal: '43 clicks / 1,222 impressions on the gear URL',
    route: 'Keep this as the main gearing product page.',
  },
  {
    query: 'forza horizon 5 gear ratio calculator',
    source: 'SEMrush US',
    signal: '20 US / 30 global',
    route: 'Answer broad Forza intent, then label FH6 workflow clearly.',
  },
  {
    query: 'best drag car in forza horizon 5',
    source: 'SEMrush US',
    signal: '1,000 US',
    route: 'Send launch and trap-speed questions into gearing checks.',
  },
  {
    query: 'forza horizon 5 drift tune codes',
    source: 'SEMrush US',
    signal: '40 US',
    route: 'Send bogging and main drift gear questions into gearing checks.',
  },
];

const gearIntentClusters = [
  {
    title: 'Gear ratio calculator',
    query: 'forza gear ratio calculator',
    userProblem:
      'The car hits limiter, never reaches top gear, or bogs after shifts.',
    pageAnswer:
      'Use this page first. Pick route, gear count, priority, and symptom, then copy the final-drive test.',
    href: pathname,
  },
  {
    title: 'Drag launch gearing',
    query: 'best drag car in forza horizon 5',
    userProblem:
      'The search starts with car choice, but the real test is launch, first shift, and trap speed.',
    pageAnswer:
      'Choose a drag candidate, then open the gear tool when launch or limiter behavior is the blocker.',
    href: '/games/forza/best-drag-cars',
  },
  {
    title: 'Drift gear recovery',
    query: 'forza horizon 5 drift tune codes',
    userProblem:
      'The drift car drops out of power, snaps back, or cannot hold one useful gear.',
    pageAnswer:
      'Stabilize the drift setup first, then use gearing only when the main drift gear is the issue.',
    href: '/games/forza/best-drift-cars',
  },
  {
    title: 'Handling before gearing',
    query: 'fh6 oversteer / understeer',
    userProblem:
      'The car rotates badly, pushes wide, or feels unstable before the straight even starts.',
    pageAnswer:
      'Use the main tune calculator before gearing. Gear edits cannot fix a balance problem by themselves.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
];

const gearRouteTargets = [
  {
    route: 'City sprint',
    target: 'Shorter usable acceleration',
    note: 'Prioritize launch, 2nd-4th gear pull, and corner-exit recovery over a huge top-speed number.',
  },
  {
    route: 'Highway speed run',
    target: 'Longer final drive',
    note: 'Give the car room to keep pulling near top speed without bouncing the limiter too early.',
  },
  {
    route: 'Rally or dirt',
    target: 'Stable mid-range',
    note: 'Avoid long gaps that drop the car out of the power band after bumps, crests, and loose exits.',
  },
  {
    route: 'Drag launch',
    target: 'First-shift control',
    note: 'Balance launch grip with early shift recovery before chasing the final trap-speed number.',
  },
];

const gearDiagnosisRows = [
  {
    symptom: 'Hits limiter early',
    firstMove: 'Lengthen final drive',
    check:
      'Retest the longest straight and confirm the car still pulls after the final shift.',
  },
  {
    symptom: 'Never uses top gear',
    firstMove: 'Shorten final drive',
    check:
      'If the car wakes up but spins, solve traction before shortening more.',
  },
  {
    symptom: 'Bogging after shifts',
    firstMove: 'Close the affected gap',
    check:
      'Focus on the gear pair where RPM falls too far, not the entire gearbox.',
  },
  {
    symptom: 'Wheelspin on launch',
    firstMove: 'Lengthen first gear slightly',
    check:
      'If wheelspin remains, move to differential and tire pressure instead of gearing only.',
  },
];

const gearPublishingRules = [
  'Name the route type before recommending a final-drive direction.',
  'Separate top-speed builds from road-racing builds in internal links.',
  'Send handling problems back to the main tune calculator before deeper gear edits.',
  'Attach useful gearing notes to car pages once specific cars are tested.',
];

const gearMediaSources = [
  {
    type: 'video' as const,
    title:
      'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
    sourceName: 'HokiHoshi on YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
    embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
    note: 'Used as the video reference for testing final drive after the build direction is clear, instead of editing every gear immediately.',
  },
  {
    type: 'article' as const,
    title: 'Comprehensive tuning guide: road and rally tuning notes',
    sourceName: 'LuckyJumpx on r/ForzaHorizon6',
    sourceUrl:
      'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
    note: 'Community reference for road and rally trade-offs, especially why gearing should follow route, surface, and power-band needs.',
  },
];

const sourceBackedGearNotes = [
  {
    title: 'Final drive is the first broad move',
    text: 'Use final drive for the whole gearbox direction before touching individual gears. It is easier to reverse and easier to explain to a player.',
  },
  {
    title: 'Top speed is not always the win condition',
    text: 'A longer highway number can be slower in city, road, dirt, or rally events when the car loses exit speed or never reaches top gear.',
  },
  {
    title: 'Route notes make share links useful',
    text: 'A gearing setup should say whether it targets launch, 2nd-4th pull, mid-range stability, or limiter control.',
  },
];

const gearFaqs = [
  {
    question: 'Is this a Forza Horizon 6 gear ratio calculator?',
    answer:
      'Yes. It is built for Forza Horizon 6 tuning workflows, using route type, gear count, priority, and the current gearing symptom to suggest the first final-drive or shift-spacing test.',
  },
  {
    question: 'What does final drive do in Forza Horizon 6 tuning?',
    answer:
      'Final drive moves the whole gearbox shorter or longer. Shorter gearing improves response and acceleration but can hit the limiter early. Longer gearing gives more room for speed but can make the car feel lazy after shifts.',
  },
  {
    question: 'Should I tune final drive or individual gears first?',
    answer:
      'Tune final drive first because it changes the whole range cleanly. After that, adjust individual gears only if a specific shift, launch, or top-speed section still feels wrong.',
  },
  {
    question: 'Why does my car bog down after shifting?',
    answer:
      'Bogging usually means the gear gap is too wide or the final drive is too long for the route. Shorten the affected range gradually and test whether the car stays in the power band after the shift.',
  },
  {
    question: 'Is top speed always the best gearing target?',
    answer:
      'No. A car that has a bigger highway speed number can still lose a race if it exits corners slowly or never reaches top gear. Match gearing to the longest useful straight in the actual event.',
  },
  {
    question:
      'When should I use the gear ratio calculator instead of the tune calculator?',
    answer:
      'Use the gear ratio calculator when the problem is limiter, top gear, launch bog, shift drop, or first-gear wheelspin. Use the main tune calculator first when the car has understeer, oversteer, braking instability, or general traction balance issues.',
  },
];

const gearHowToSteps = gearWorkflow.map((step) => ({
  question: step.title,
  answer: step.description,
}));

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

export default function ForzaHorizon6GearRatioCalculatorPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: pathname },
            { name: 'FH6 Gear Ratio Calculator', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildSoftwareApplicationJsonLd({
            title,
            description,
            path: pathname,
            featureList: [
              'Final drive tuning direction',
              'Gear count and route priority matching',
              'FH6 gear ratio calculator baseline for final drive and shift spacing',
              'Shift symptom diagnosis',
              'Gear problem presets for launch and limiter issues',
              'First gearing test loop for route-based retesting',
              'Main tune calculator handoff for handling and traction problems',
              'Shareable gearing preset URLs',
            ],
          }),
          buildHowToJsonLd({
            title: 'How to use the Forza Horizon 6 gear ratio calculator',
            description:
              'Use Apex Tune Hub to pick a final-drive direction before editing every gear individually.',
            path: pathname,
            steps: gearHowToSteps,
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 gear ratio next steps',
            items: gearRelatedLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza gear ratio search intent clusters',
            items: gearIntentClusters.map((cluster) => ({
              name: cluster.title,
              path: cluster.href,
            })),
          }),
          buildFaqJsonLd(gearFaqs),
        ]}
      />
      <ForzaGearRatioCalculator />
      <ForzaBeginnerTestPlan mode="gear" />
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="forza-panel p-5">
            <SearchIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Gear searches need a route target
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
              The gear URL is already getting Search Console activity, so this
              page should act like the main Forza gearing workbench. Broad FH5
              demand is used as search evidence; the live calculator remains
              labeled around FH6 tuning decisions.
            </p>
          </div>

          <div className="forza-panel min-w-0 overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.9fr_0.62fr_0.9fr_1.1fr]">
              <span>Search signal</span>
              <span>Source</span>
              <span>Volume / activity</span>
              <span>Page job</span>
            </div>
            {gearSearchSignals.map((row) => (
              <div
                className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.9fr_0.62fr_0.9fr_1.1fr]"
                key={row.query}
              >
                <span className="min-w-0 font-semibold text-zinc-50 [overflow-wrap:anywhere]">
                  {row.query}
                </span>
                <span className="text-cyan-100">{row.source}</span>
                <span className="text-amber-200">{row.signal}</span>
                <span className="min-w-0 leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                  {row.route}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {gearIntentClusters.map((cluster) => (
            <LocaleLink
              className="forza-card group min-w-0 overflow-hidden p-4"
              href={cluster.href}
              key={cluster.title}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-cyan-200 [overflow-wrap:anywhere]">
                    {cluster.query}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-zinc-50">
                    {cluster.title}
                  </h3>
                </div>
                <ArrowRightIcon className="mt-0.5 size-4 shrink-0 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                {cluster.userProblem}
              </p>
              <p className="mt-3 rounded-md border border-white/10 bg-black/25 px-3 py-2 text-xs leading-5 text-zinc-300 [overflow-wrap:anywhere]">
                {cluster.pageAnswer}
              </p>
            </LocaleLink>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <FlagIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Pick the gearing target before moving the slider
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A gearing page becomes useful when it teaches players what to
              test. These route targets give search visitors a simple reason to
              choose shorter, longer, or more stable gearing.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {gearRouteTargets.map((target) => (
              <article className="forza-card p-4" key={target.route}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-zinc-50">
                    {target.route}
                  </h3>
                  <span className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-2 py-1 text-xs font-semibold text-cyan-100">
                    {target.target}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {target.note}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <p className="forza-chip">Gearing workflow</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Tune gearing around the route, not the speed number
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Gear ratio tuning is about keeping the engine useful where the
              race is won: launch, corner exits, shift recovery, and the longest
              useful straight. The calculator gives a first final-drive
              direction before you start editing every gear one by one.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {gearWorkflow.map((step) => {
              const Icon = step.icon;

              return (
                <article className="forza-card p-4" key={step.title}>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-50">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_0.8fr_1.4fr]">
            <span>Symptom</span>
            <span>First gearing move</span>
            <span>Retest before saving</span>
          </div>
          {gearDiagnosisRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_0.8fr_1.4fr]"
              key={row.symptom}
            >
              <span className="font-semibold text-zinc-50">{row.symptom}</span>
              <span className="text-amber-200">{row.firstMove}</span>
              <span className="leading-6 text-zinc-400">{row.check}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="forza-chip">Next gearing layer</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Turn a gearing baseline into lap-time testing
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Once the calculator gives a direction, run the same start, corner
              exit, or straight twice. Keep the setting only if it improves the
              part of the route you are actually trying to fix.
            </p>
          </div>
          <div className="grid gap-3">
            {gearRelatedLinks.map((link) => (
              <LocaleLink
                className="forza-card group block p-4"
                href={link.href}
                key={link.href}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-base font-semibold text-zinc-50">
                    {link.title}
                  </span>
                  <span className="text-cyan-200 transition group-hover:translate-x-1">
                    -&gt;
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-6 text-zinc-400">
                  {link.description}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
                Gear page publishing rules
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These rules keep the calculator, guide, car pages, and future
                tune-code pages connected without promising fake exact ratios.
              </p>
            </div>
            <div className="grid gap-2">
              {gearPublishingRules.map((rule) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-300"
                  key={rule}
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <p className="forza-chip">Gear ratio FAQ</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {gearFaqs.map((faq) => (
              <article className="forza-card p-4" key={faq.question}>
                <h2 className="text-base font-semibold text-zinc-50">
                  {faq.question}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <p className="forza-chip">Source-backed gear notes</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              The calculator should explain the test, not just the slider
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Players searching for a gear ratio calculator usually want an
              exact answer. The better answer is a repeatable test: pick the
              route, move final drive first, then verify whether the car gains
              launch, shift recovery, or top-end pull.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sourceBackedGearNotes.map((note) => (
              <article className="forza-card p-4" key={note.title}>
                <h3 className="text-base font-semibold text-zinc-50">
                  {note.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <ForzaHorizon6GuideMediaSources sources={gearMediaSources} />
      </section>
      <ApexNewsletterCta
        description="Get gearing presets, top-speed tests, and launch tuning notes as new FH6 cars are added."
        title="Get the next FH6 gearing update"
      />
    </main>
  );
}
