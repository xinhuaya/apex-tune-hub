import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  CarFrontIcon,
  ClipboardCheckIcon,
  CloudRainIcon,
  GaugeIcon,
  GitBranchIcon,
  ListChecksIcon,
  MapIcon,
  MountainIcon,
  RouteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  TimerIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/japan-map';
const title = 'Forza Horizon 6 Japan Map and Route Planner - Apex Tune Hub';
const description =
  'Forza Horizon 6 Japan map planning hub for route types, city roads, mountain passes, wet roads, dirt sections, drift zones, speed testing, and tune links.';

const routeTypes = [
  {
    title: 'City streets',
    intent:
      'Prioritize braking confidence, second-gear exits, traffic recovery, and clean throttle inputs.',
    tune: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
    guide: '/games/forza-horizon-6/guides/fix-wheelspin',
    icon: RouteIcon,
  },
  {
    title: 'Mountain roads',
    intent:
      'Prioritize rotation, predictable rear grip, and gearing that does not bog after hairpins.',
    tune: '/tools/forza-horizon-6-tune-presets/a-rwd-rally-oversteer-aggressive',
    guide: '/games/forza-horizon-6/guides/fix-oversteer',
    icon: MountainIcon,
  },
  {
    title: 'Wet routes',
    intent:
      'Prioritize stability, softer inputs, longer braking zones, and setups that recover from mid-corner slip.',
    tune: '/tools/forza-horizon-6-tune-presets/s1-awd-dirt-unstable-braking-stable',
    guide: '/games/forza-horizon-6/guides/fix-unstable-braking',
    icon: CloudRainIcon,
  },
  {
    title: 'Dirt and rally',
    intent:
      'Prioritize bump control, launch response, and enough suspension travel to survive rough exits.',
    tune: '/tools/forza-horizon-6-tune-presets/s1-awd-rally-wheelspin-balanced',
    guide: '/games/forza-horizon-6/guides/beginner-tuning-guide',
    icon: GaugeIcon,
  },
  {
    title: 'Drift sections',
    intent:
      'Prioritize initiation, angle recovery, throttle control, and linked transitions instead of raw power.',
    tune: '/tools/forza-horizon-6-drift-tune-calculator',
    guide: '/games/forza-horizon-6/guides/japan-drift-setup',
    icon: TimerIcon,
  },
  {
    title: 'Speed routes',
    intent:
      'Prioritize final drive, aero tradeoffs, top-end pull, and whether the route actually rewards speed.',
    tune: '/tools/forza-horizon-6-tune-presets/s2-awd-road-poor-top-speed-aggressive',
    guide: '/games/forza-horizon-6/guides/fix-poor-top-speed',
    icon: CarFrontIcon,
  },
];

const routeWorkflow: FaqItem[] = [
  {
    question: '1. Learn the route',
    answer: 'Use A or B class before pushing S1 and S2 builds.',
  },
  {
    question: '2. Name the problem',
    answer: 'Understeer, oversteer, wheelspin, slow launch, braking, or speed.',
  },
  {
    question: '3. Open a preset',
    answer:
      'Start with the closest tune link, then adjust one group at a time.',
  },
  {
    question: '4. Save the note',
    answer:
      'Record car, class, route type, weather, assists, and last-tested date.',
  },
];

const routeRegions = [
  {
    title: 'Urban route notes',
    focus: 'Street circuits, traffic recovery, braking markers',
    firstClass: 'B / A',
    href: '/games/forza-horizon-6/best-a-class-cars',
    text: 'Start lower so braking and throttle mistakes are visible before speed hides them.',
  },
  {
    title: 'Mountain route notes',
    focus: 'Hairpins, elevation changes, touge-style exits',
    firstClass: 'B / A / S1',
    href: '/games/forza-horizon-6/best-rally-cars',
    text: 'Use gearing and rotation notes first, then decide whether the route rewards more power.',
  },
  {
    title: 'Wet-road route notes',
    focus: 'Long braking zones, mid-corner recovery, AWD stability',
    firstClass: 'A / S1',
    href: '/games/forza-horizon-6/guides/fix-unstable-braking',
    text: 'Treat wet roads as a braking and recovery test, not only a tire-grip test.',
  },
  {
    title: 'Dirt route notes',
    focus: 'Suspension travel, launch response, rough exits',
    firstClass: 'A / S1',
    href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
    text: 'Record bumps and crests separately so the fix does not become a generic rally setup.',
  },
  {
    title: 'Drift zone notes',
    focus: 'Initiation, linked transitions, angle recovery',
    firstClass: 'B / A / S1',
    href: '/games/forza-horizon-6/best-drift-cars',
    text: 'Build a drift note around recovery and repeatability before chasing high power.',
  },
  {
    title: 'Speed route notes',
    focus: 'Final drive, aero, top-end pull, long straight evidence',
    firstClass: 'S1 / S2',
    href: '/games/forza-horizon-6/best-s2-class-cars',
    text: 'Use S2 only when the route actually gives the car time to use top speed.',
  },
];

const classLearningLadder = [
  {
    title: 'B class scouting',
    href: '/games/forza-horizon-6/best-b-class-cars',
    text: 'Use this for first reads on unfamiliar city, mountain, and technical roads.',
  },
  {
    title: 'A class baseline',
    href: '/games/forza-horizon-6/best-a-class-cars',
    text: 'Use this for the main evergreen route-testing layer before moving to faster classes.',
  },
  {
    title: 'S1 route pressure',
    href: '/games/forza-horizon-6/best-s1-class-cars',
    text: 'Use this after braking and exit behavior are repeatable in lower classes.',
  },
  {
    title: 'S2 speed proof',
    href: '/games/forza-horizon-6/best-s2-class-cars',
    text: 'Use this only when top speed or high aero grip clearly beats a cleaner S1 setup.',
  },
];

const plannerFields = [
  'Route type',
  'Weather or surface',
  'Class and PI',
  'Car and drivetrain',
  'Main handling issue',
  'Preset or calculator URL',
  'Route test result',
  'Last tested date',
];

const nextPlannerLinks = [
  {
    title: 'Japan route checklist',
    href: '/games/forza-horizon-6/guides/japan-route-tuning-checklist',
    text: 'Use the route checklist when a city, mountain, wet, dirt, drift, or speed note needs a repeatable test order.',
  },
  {
    title: 'Car database',
    href: '/games/forza-horizon-6/cars',
    text: 'Attach route notes to exact cars, stock class, role, and candidate status.',
  },
  {
    title: 'Tune presets',
    href: '/tools/forza-horizon-6-tune-presets',
    text: 'Start from a shareable baseline before saving route-specific adjustments.',
  },
  {
    title: 'Weekly playlist',
    href: '/games/forza-horizon-6/weekly-playlist',
    text: 'Use route restrictions and rewards to decide which notes deserve updates.',
  },
  {
    title: 'Tune codes',
    href: '/tools/forza-horizon-6-tune-codes',
    text: 'Only promote route notes into real share-code rows after in-game verification.',
  },
];

const japanSpecialistGuides = [
  {
    title: 'Japan route checklist',
    href: '/games/forza-horizon-6/guides/japan-route-tuning-checklist',
    text: 'Use when a city, mountain, wet, dirt, drift, or speed route needs a repeatable testing order.',
  },
  {
    title: 'Japan launch tuning plan',
    href: '/games/forza-horizon-6/guides/japan-launch-tuning-plan',
    text: 'Use when the route note is part of a broader launch-week content plan.',
  },
  {
    title: 'Street and night tuning',
    href: '/games/forza-horizon-6/guides/street-race-night-tuning',
    text: 'Use when traffic, low visibility, wet roads, and short braking zones shape the setup.',
  },
  {
    title: 'S1 rally tune settings',
    href: '/games/forza-horizon-6/guides/best-s1-rally-tune-settings',
    text: 'Use when the route moves from paved sections into rough exits, crests, or mixed-surface rally work.',
  },
];

const routeStatusCards = [
  {
    title: 'Scouting',
    text: 'The route type is known, but car, class, and surface notes still need a slower baseline run.',
    next: 'Use B or A class before creating a faster preset path.',
  },
  {
    title: 'Baseline saved',
    text: 'The same route has a car, class, handling symptom, and matching calculator or preset URL.',
    next: 'Add a second run with the same settings before promoting the note.',
  },
  {
    title: 'Tune-linked',
    text: 'The route note links to a specific guide, preset, calculator result, or car page.',
    next: 'Send weekly playlist and Car Pass readers here when the event matches the surface.',
  },
  {
    title: 'Verified later',
    text: 'The note has in-game evidence, last-tested date, and a real share-code path when available.',
    next: 'Only then move it into a public tune-code or route database row.',
  },
];

const routeCaptureExamples = [
  [
    'Mountain hairpin',
    'A class RWD',
    'Rear snaps on lift',
    '/games/forza-horizon-6/guides/fix-oversteer',
  ],
  [
    'Wet city sprint',
    'S1 AWD',
    'Unstable braking',
    '/games/forza-horizon-6/guides/fix-unstable-braking',
  ],
  [
    'Long speed route',
    'S2 AWD',
    'Runs out of gearing',
    '/tools/forza-horizon-6-gear-ratio-calculator',
  ],
];

const faqs: FaqItem[] = [
  {
    question: 'Does this page show an official Forza Horizon 6 map?',
    answer:
      'No. This is a route-planning hub for tuning workflows. It does not claim to reproduce the official in-game map.',
  },
  {
    question: 'How should I choose a tune for a new Japan route?',
    answer:
      'Start with the route type: city, mountain, wet road, dirt, drift, or speed. Then open the matching preset or guide and test the same section twice.',
  },
  {
    question: 'Which class is best for learning routes?',
    answer:
      'B and A class make handling problems easier to read. Move into S1 or S2 after braking, exits, and gearing feel repeatable.',
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

export default function ForzaHorizon6JapanMapPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Japan Map Planner', path: pathname },
          ]),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildHowToJsonLd({
            title: 'How to plan a Forza Horizon 6 Japan route tune',
            description:
              'A route-first workflow for choosing class, preset, car, and testing notes for Forza Horizon 6 Japan routes.',
            path: pathname,
            steps: routeWorkflow,
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 Japan route types',
            items: routeTypes.map((route) => ({
              name: route.title,
              path: route.guide,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 Japan route planning links',
            items: nextPlannerLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 Japan route specialist guides',
            items: japanSpecialistGuides.map((guide) => ({
              name: guide.title,
              path: guide.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 Japan route testing statuses',
            items: routeStatusCards.map((status) => ({
              name: status.title,
              path: pathname,
            })),
          }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">
            <MapIcon className="size-4" />
            Route planning hub
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.74fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 Japan map and route planner
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this page to pick the right tune path before testing a new
                Japan route. Treat city streets, mountain roads, wet routes,
                dirt sections, drift zones, and speed routes as different
                problems instead of forcing one universal setup.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/games/forza-horizon-6/guides/japan-launch-tuning-plan">
                    Open Launch Plan
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
                    Tune Calculator
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <RouteIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">Planner rule</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Route type decides the first tune direction. Use a lower class
                to learn the road, then promote the same car only when the route
                feels repeatable.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  `${routeTypes.length} route types mapped to tune paths.`,
                  `${routeRegions.length} route-note groups for future expansion.`,
                  'This page does not claim to reproduce the official map.',
                ].map((item) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={item}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <GitBranchIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Japan route-note framework
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Route pages should not become generic scenery pages. Each route
              note needs a surface, class target, handling problem, tune link,
              and a place to send the reader next.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {routeRegions.map((region) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                href={region.href}
                key={region.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {region.firstClass}
                </p>
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {region.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {region.focus}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {region.text}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {routeTypes.map((route) => {
            const Icon = route.icon;

            return (
              <article className="forza-card p-5" key={route.title}>
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-xl font-semibold">{route.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {route.intent}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <LocaleLink
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                    href={route.tune}
                  >
                    Tune path
                  </LocaleLink>
                  <LocaleLink
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                    href={route.guide}
                  >
                    Guide
                  </LocaleLink>
                </div>
              </article>
            );
          })}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <ListChecksIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Specialist route guides
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                After the route type is clear, send the reader into a narrower
                setup path: route checklist, launch plan, street/night tuning,
                or S1 rally setup.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {japanSpecialistGuides.map((guide) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-300/40 hover:bg-amber-300/[0.04]"
                  href={guide.href}
                  key={guide.href}
                >
                  <RouteIcon className="size-5 text-amber-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {guide.text}
                  </p>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel mb-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SlidersHorizontalIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Class ladder for learning routes
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use the class ladder to decide when a car should stay easy to
                read and when the route is ready for higher-speed testing.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {classLearningLadder.map((item) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-fuchsia-300/40"
                  href={item.href}
                  key={item.href}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_1.4fr]">
            <span>Step</span>
            <span>What to record</span>
          </div>
          {routeWorkflow.map((step) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_1.4fr]"
              key={step.question}
            >
              <span className="font-semibold text-zinc-50">
                {step.question}
              </span>
              <span className="text-zinc-400">{step.answer}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Route note fields to collect later
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              These fields make the page ready for a future route database or
              member notes feature without requiring fake map data today.
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {plannerFields.map((field) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200"
                key={field}
              >
                {field}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="forza-panel p-5">
            <ClipboardCheckIcon className="size-6 text-cyan-300" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Route test status board
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Do not publish a route claim before the note has a status
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This keeps the Japan map page useful before launch without
              pretending every road, route, and share code has already been
              tested in-game.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {routeStatusCards.map((status) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={status.title}
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {status.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {status.text}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                  {status.next}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-5 overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_0.7fr_0.9fr_1.1fr]">
            <span>Route note</span>
            <span>Class</span>
            <span>Problem</span>
            <span>Next link</span>
          </div>
          {routeCaptureExamples.map(([route, carClass, problem, href]) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_0.7fr_0.9fr_1.1fr]"
              key={`${route}-${carClass}`}
            >
              <span className="font-semibold text-zinc-50">{route}</span>
              <span className="text-zinc-400">{carClass}</span>
              <span className="text-zinc-400">{problem}</span>
              <LocaleLink
                className="text-cyan-200 hover:text-cyan-100"
                href={href}
              >
                Open matching path
              </LocaleLink>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Internal route network
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Where to go after picking a Japan route type
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              These links keep the route planner connected to the useful parts
              of Apex Tune Hub: checklists, cars, presets, weekly restrictions,
              and future verified share-code rows.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {nextPlannerLinks.map((link) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40 hover:text-cyan-100"
                href={link.href}
                key={link.href}
              >
                <strong className="block text-zinc-100">{link.title}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {link.text}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Japan map planner FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={faq.question}
              >
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get FH6 route planning notes, tune links, and Japan setup updates as the testing library expands."
        title="Follow FH6 Japan route updates"
      />
    </main>
  );
}
