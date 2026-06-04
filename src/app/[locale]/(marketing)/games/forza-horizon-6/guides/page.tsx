import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6Guides,
  type ForzaHorizon6Guide,
} from '@/lib/guides/forza-horizon-6-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BookOpenIcon,
  CircleGaugeIcon,
  ClipboardCheckIcon,
  GitBranchIcon,
  ListChecksIcon,
  MapIcon,
  RadioTowerIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/guides';
const title =
  'Forza Horizon 6 Guides - Tuning, Settings, PR Stunts, and Setup Help';
const description =
  'Forza Horizon 6 tuning guides for starter cars, Japan routes, upgrade order, tire compounds, engine swaps, drivetrain swaps, handling fixes, gearing, aero, tire pressure, alignment, wheel settings, Rivals, offroad, drift zones, PR stunts, Forzathon, tune codes, street races, seasonal championships, and weekly playlist setup help.';

const guideClusters = [
  {
    icon: MapIcon,
    title: 'Launch route planning',
    text: 'Start with Japan launch strategy, starter cars, and early route testing before chasing meta picks.',
    href: '#launch-guides',
  },
  {
    icon: WrenchIcon,
    title: 'Upgrade planning',
    text: 'Pick upgrade order, tire compound, engine swaps, and drivetrain conversions before spending PI.',
    href: '#upgrade-guides',
  },
  {
    icon: GitBranchIcon,
    title: 'Handling parameters',
    text: 'Work through differential, brakes, suspension, tire pressure, alignment, gearing, aero, and launch notes.',
    href: '#handling-fixes',
  },
  {
    icon: CircleGaugeIcon,
    title: 'Settings and devices',
    text: 'Keep wheel, controller, PC, and Steam Deck guidance separated so every setup note stays testable.',
    href: '#settings-guides',
  },
];

const guideRouterRows = [
  {
    problem: 'I do not know what to tune first',
    start: 'Beginner tuning guide',
    next: 'Then choose an upgrade path before changing unrelated sliders.',
    href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
  },
  {
    problem: 'I do not understand tuning terms yet',
    start: 'Tuning glossary',
    next: 'Translate setup words like PI, camber, toe, ARBs, diff, aero, gearing, and brake balance before choosing a slider.',
    href: '/games/forza-horizon-6/guides/tuning-glossary-setup-terms',
  },
  {
    problem: 'I need to upgrade a car without ruining it',
    start: 'Upgrade planning guides',
    next: 'Use upgrade order, tire compound, engine swap, and drivetrain swap guides before spending credits.',
    href: '#upgrade-planning-path',
  },
  {
    problem: 'The car pushes wide or spins out',
    start: 'Handling and parameter fixes',
    next: 'Use understeer, oversteer, tire pressure, alignment, differential, braking, launch, or top-speed guides.',
    href: '#handling-fixes',
  },
  {
    problem: 'My device makes every car feel wrong',
    start: 'Settings and devices',
    next: 'Use PC, Steam Deck, wheel, controller, FPS, or device troubleshooting before changing the car.',
    href: '#settings-guides',
  },
  {
    problem: 'I need a build for an event type',
    start: 'Event build guides',
    next: 'Use road, drift, rally, drag, Rivals, offroad, PR stunt, Forzathon, street race, seasonal championship, Trial, or weekly playlist tuning checklists.',
    href: '#event-guides',
  },
];

const guideShortcutBays = [
  {
    icon: MapIcon,
    title: 'Japan launch and route setup',
    text: 'Route-first pages for mountain roads, city corners, wet surfaces, early car choices, and Japan map planning.',
    links: [
      {
        label: 'Japan launch plan',
        href: '/games/forza-horizon-6/guides/japan-launch-tuning-plan',
      },
      {
        label: 'Japan route checklist',
        href: '/games/forza-horizon-6/guides/japan-route-tuning-checklist',
      },
      {
        label: 'Best starter cars',
        href: '/games/forza-horizon-6/guides/best-starter-cars',
      },
      {
        label: 'Japan map planner',
        href: '/games/forza-horizon-6/japan-map',
      },
    ],
  },
  {
    icon: BookOpenIcon,
    title: 'Evergreen setup fundamentals',
    text: 'Stable reference pages for players who need terms, difficulty, controller deadzones, and wheel rotation before tuning one car.',
    links: [
      {
        label: 'Tuning glossary',
        href: '/games/forza-horizon-6/guides/tuning-glossary-setup-terms',
      },
      {
        label: 'Tune testing',
        href: '/games/forza-horizon-6/guides/tune-testing-checklist',
      },
      {
        label: 'Difficulty settings',
        href: '/games/forza-horizon-6/guides/difficulty-settings-guide',
      },
      {
        label: 'Controller deadzones',
        href: '/games/forza-horizon-6/guides/controller-deadzone-settings',
      },
      {
        label: 'Wheel rotation',
        href: '/games/forza-horizon-6/guides/wheel-rotation-deadzone-settings',
      },
    ],
  },
  {
    icon: CircleGaugeIcon,
    title: 'Device feel and input fixes',
    text: 'Use these before changing a car tune when FH6 feels delayed, cramped, too busy, or inconsistent on one device.',
    links: [
      {
        label: 'Steam Deck guide',
        href: '/games/forza-horizon-6/guides/steam-deck-settings-guide',
      },
      {
        label: 'Input lag settings',
        href: '/games/forza-horizon-6/guides/input-lag-settings',
      },
      {
        label: 'Camera settings',
        href: '/games/forza-horizon-6/guides/best-camera-settings',
      },
      {
        label: 'HUD accessibility',
        href: '/games/forza-horizon-6/guides/hud-accessibility-settings',
      },
    ],
  },
  {
    icon: WrenchIcon,
    title: 'Wheel brand settings',
    text: 'Separate baseline paths for common wheel ecosystems, plus a fallback when FH6 does not detect the device cleanly.',
    links: [
      {
        label: 'Logitech wheels',
        href: '/games/forza-horizon-6/guides/logitech-wheel-settings',
      },
      {
        label: 'Thrustmaster wheels',
        href: '/games/forza-horizon-6/guides/thrustmaster-wheel-settings',
      },
      {
        label: 'Fanatec and Moza',
        href: '/games/forza-horizon-6/guides/fanatec-moza-wheel-settings',
      },
      {
        label: 'Wheel not working',
        href: '/games/forza-horizon-6/guides/wheel-not-working-checklist',
      },
    ],
  },
  {
    icon: RadioTowerIcon,
    title: 'Weekly event preparation',
    text: 'Repeatable handoffs for playlist restrictions, co-op events, Forzathon tasks, and event-safe tune sharing.',
    links: [
      {
        label: 'Weekly checklist',
        href: '/games/forza-horizon-6/guides/weekly-playlist-tuning-checklist',
      },
      {
        label: 'Seasonal championship',
        href: '/games/forza-horizon-6/guides/seasonal-championship-tuning',
      },
      {
        label: 'The Trial co-op',
        href: '/games/forza-horizon-6/guides/the-trial-coop-race-tuning',
      },
      {
        label: 'Tune code sharing',
        href: '/games/forza-horizon-6/guides/auction-house-tune-code-sharing',
      },
    ],
  },
];

const upgradeDecisionPath = [
  {
    step: '1',
    title: 'Lock the PI class',
    text: 'Decide the class ceiling before buying parts so the build does not drift into the wrong event bracket.',
    href: '/games/forza-horizon-6/guides/pi-class-upgrade-planning-guide',
  },
  {
    step: '2',
    title: 'Choose the tire spend',
    text: 'Pick tire compound early when the car needs braking grip, exit traction, or stable wet-route handling.',
    href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
  },
  {
    step: '3',
    title: 'Spend on control first',
    text: 'Use the upgrade order guide to balance tires, weight, brakes, suspension, aero, and power.',
    href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
  },
  {
    step: '4',
    title: 'Split grip from power',
    text: 'Use the power-vs-grip guide when the car gains speed but starts missing braking zones or exits.',
    href: '/games/forza-horizon-6/guides/power-vs-grip-upgrade-guide',
  },
  {
    step: '5',
    title: 'Gate swaps last',
    text: 'Use engine and drivetrain swap checks only after the class, grip budget, and event restriction are clear.',
    href: '/games/forza-horizon-6/guides/engine-swap-drivetrain-swap-guide',
  },
];

const guideGroups = [
  {
    id: 'launch-guides',
    eyebrow: 'Start here',
    title: 'Launch and starter guides',
    description:
      'Pages for the first wave of search demand: beginners, starter cars, Japan routes, and baseline tuning.',
    slugs: [
      'japan-launch-tuning-plan',
      'japan-route-tuning-checklist',
      'beginner-tuning-guide',
      'tuning-glossary-setup-terms',
      'tune-testing-checklist',
      'best-starter-cars',
      'a-s1-road-racing-tune',
      'gear-ratio-guide',
    ],
  },
  {
    id: 'handling-fixes',
    eyebrow: 'Problem solver',
    title: 'Handling symptom and tuning parameter fixes',
    description:
      'Direct answers for the words players search when a build feels wrong, plus the core sliders they change next.',
    slugs: [
      'fix-understeer',
      'fix-oversteer',
      'fix-wheelspin',
      'fix-slow-launch',
      'fix-unstable-braking',
      'fix-poor-top-speed',
    ],
  },
  {
    id: 'upgrade-guides',
    eyebrow: 'Upgrade planning',
    title: 'Upgrade order, tire compounds, and swap decisions',
    description:
      'Guides for spending PI in the right order before a tune turns into a traction, class-limit, or weekly restriction problem.',
    slugs: [
      'upgrade-order-tuning-guide',
      'pi-class-upgrade-planning-guide',
      'power-vs-grip-upgrade-guide',
      'tire-compound-upgrade-guide',
      'engine-swap-drivetrain-swap-guide',
      'tire-pressure-settings-guide',
      'advanced-gear-ratio-tuning',
      'best-awd-tune-settings',
      'best-rwd-tune-settings',
    ],
  },
  {
    id: 'settings-guides',
    eyebrow: 'Input and device setup',
    title: 'Wheel, controller, and device settings',
    description:
      'Hardware-specific pages for players trying to make FH6 feel consistent before changing the car tune.',
    slugs: [
      'pc-crash-known-issues-checklist',
      'fix-low-fps-stutter',
      'best-pc-graphics-settings',
      'wheel-settings-guide',
      'wheel-rotation-deadzone-settings',
      'wheel-not-working-checklist',
      'logitech-wheel-settings',
      'thrustmaster-wheel-settings',
      'fanatec-moza-wheel-settings',
      'controller-not-working-checklist',
      'controller-drift-settings',
      'controller-deadzone-settings',
      'best-keyboard-settings',
      'cloud-save-not-syncing',
      'online-not-working-checklist',
      'input-lag-settings',
      'best-assist-settings',
      'difficulty-settings-guide',
      'manual-transmission-guide',
      'best-camera-settings',
      'hud-accessibility-settings',
      'steam-deck-settings-guide',
    ],
  },
  {
    id: 'event-guides',
    eyebrow: 'Event builds',
    title: 'Road, drift, rally, drag, PR stunt, and weekly setup guides',
    description:
      'Event-specific tuning pages that connect guide readers to calculator presets, car lists, tune-code workflows, weekly playlist notes, and repeatable seasonal builds.',
    slugs: [
      'best-a-class-road-tune-settings',
      'best-s1-rally-tune-settings',
      'weekly-playlist-tuning-checklist',
      'best-awd-tune-settings',
      'best-rwd-tune-settings',
      'best-fwd-tune-settings',
      'differential-settings-guide',
      'brake-balance-pressure-settings',
      'anti-roll-bar-suspension-settings',
      'tire-pressure-settings-guide',
      'alignment-camber-toe-settings',
      'advanced-gear-ratio-tuning',
      'aero-downforce-settings',
      'manual-with-clutch-shifting',
      'launch-control-tuning',
      'speed-trap-speed-zone-tuning',
      'danger-sign-trailblazer-tuning',
      'seasonal-championship-tuning',
      'the-trial-coop-race-tuning',
      'forzathon-weekly-challenge-tuning',
      'auction-house-tune-code-sharing',
      'street-race-night-tuning',
      'rivals-time-attack-tuning',
      'cross-country-offroad-tuning',
      'drift-zone-scoring-tuning',
      'japan-drift-setup',
      'best-drift-tune-settings',
      'best-rally-tune-settings',
      'best-drag-tune-settings',
    ],
  },
];

const guideFaqs = [
  {
    question: 'Which Forza Horizon 6 guide should I read first?',
    answer:
      'Start with the beginner tuning guide if you are new to setups, then move to the upgrade path, specific handling problem, tuning slider, device setup, event restriction, or tune-code workflow you are trying to fix.',
  },
  {
    question: 'What FH6 upgrade guide should I use first?',
    answer:
      'Start with PI class planning if the event has a class limit, then choose tire compound, upgrade order, power-vs-grip balance, and swap decisions in that order.',
  },
  {
    question: 'Are these guides based on fake leaderboard certainty?',
    answer:
      'No. Apex Tune Hub labels launch content as baseline guidance and candidate testing, then links to calculators and presets so the advice can be refined after route testing.',
  },
  {
    question: 'Why are handling problem guides useful for SEO?',
    answer:
      'Players usually search the symptom or setting they feel, such as understeer, oversteer, wheelspin, brake balance, tire pressure, alignment, slow launch, unstable braking, or poor top speed. Each guide can answer that intent directly.',
  },
];

const guideHowToSteps = [
  {
    question: '1. Choose the player problem',
    answer:
      'Start from the search intent: beginner help, handling symptom, tuning parameter, device setup, PR stunt, seasonal event, or event build.',
  },
  {
    question: '2. Open the matching guide cluster',
    answer:
      'Use launch guides for early routing, upgrade planning for PI spend decisions, handling fixes for car symptoms, tuning parameter pages for slider decisions, settings guides for every-car issues, and event guides for build targets.',
  },
  {
    question: '3. Follow one tool handoff',
    answer:
      'Each guide should send the player to one calculator, preset, car hub, settings page, or weekly tracker.',
  },
  {
    question: '4. Keep related reads contextual',
    answer:
      'Next reads should stay in the same problem family instead of sending every guide to the same generic pages.',
  },
];

const guideWorkflow = [
  'Start every new guide with the player problem: event type, handling symptom, device setup, or weekly restriction.',
  'For upgrade pages, make the PI spend decision clear before sending the reader into slider-level tuning.',
  'Link each guide to one calculator, one preset or car hub, and one broader FH6 topic page.',
  'Keep launch assumptions labelled until car testing, route notes, or official source checks confirm them.',
  'Move repeated questions into the FAQ hub and link the FAQ back to the detailed guide.',
];

const guideDestinations = [
  {
    title: 'Tool destination',
    body: 'Send setup readers to the calculator, drift calculator, gear ratio tool, presets, or tune-code workflow.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    title: 'Car destination',
    body: 'Send car-intent readers to best cars, car database, class hubs, or manufacturer hubs.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    title: 'Weekly destination',
    body: 'Send repeat visitors to weekly playlist notes, Car Pass tracking, and FH6 tune drops.',
    href: '/games/forza-horizon-6/weekly-playlist',
  },
];

const guideClusterStats = [
  {
    label: 'Guides',
    value: `${forzaHorizon6Guides.length}`,
  },
  {
    label: 'Clusters',
    value: `${guideGroups.length}`,
  },
  {
    label: 'Problem routes',
    value: `${guideRouterRows.length}`,
  },
  {
    label: 'SEO schema',
    value: 'FAQ + HowTo + ItemList',
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

function GuideCard({ guide }: { guide: ForzaHorizon6Guide }) {
  return (
    <LocaleLink
      className="forza-card group p-5"
      href={`/games/forza-horizon-6/guides/${guide.slug}`}
    >
      <BookOpenIcon className="size-5 text-cyan-300" />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
        {guide.eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-zinc-50">{guide.h1}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {guide.description}
      </p>
      <span className="mt-5 inline-flex items-center text-sm font-semibold text-amber-200">
        Read guide
        <ArrowRightIcon className="ml-2 size-4" />
      </span>
    </LocaleLink>
  );
}

function getGuidesBySlug(slugs: string[]) {
  return slugs
    .map((slug) => forzaHorizon6Guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is ForzaHorizon6Guide => Boolean(guide));
}

export default function ForzaHorizon6GuidesPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Guides', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 guide index',
            items: forzaHorizon6Guides.map((guide) => ({
              name: guide.h1,
              path: `/games/forza-horizon-6/guides/${guide.slug}`,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 guide router',
            items: guideRouterRows.map((row) => ({
              name: row.problem,
              path: row.href.startsWith('#') ? pathname : row.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 high-intent guide shortcuts',
            items: guideShortcutBays.flatMap((bay) =>
              bay.links.map((link) => ({
                name: `${bay.title}: ${link.label}`,
                path: link.href,
              }))
            ),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 upgrade planning path',
            items: upgradeDecisionPath.map((item) => ({
              name: item.title,
              path: item.href,
            })),
          }),
          buildHowToJsonLd({
            title: 'How to choose a Forza Horizon 6 guide',
            description:
              'A guide routing workflow for choosing FH6 launch, handling, settings, and event build pages.',
            path: pathname,
            steps: guideHowToSteps,
          }),
          buildFaqJsonLd(guideFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="forza-chip">Evergreen guide cluster</p>
          <div className="mt-5 grid items-start gap-6 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 guides
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Practical setup guides for the questions players keep searching
                after launch: which starter cars to build, how to tune Japan
                routes, how to fix handling problems, and which settings to
                start with.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Open Tune Calculator
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/games/forza-horizon-6">FH6 Hub</LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <BookOpenIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                How to use this guide stack
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Start with the launch plan, use the beginner guide for a clean
                baseline, then pick starter car, drift, road racing, or handling
                fixes based on the event you are trying to finish.
              </p>
              <div className="mt-5 grid gap-2">
                {guideClusterStats.map((item) => (
                  <div
                    className="flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm"
                    key={item.label}
                  >
                    <span className="font-semibold text-zinc-300">
                      {item.label}
                    </span>
                    <span className="font-semibold text-cyan-200">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-4">
          {guideClusters.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <LocaleLink
                className="forza-card group p-5"
                href={cluster.href}
                key={cluster.title}
              >
                <Icon className="size-6 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold">{cluster.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {cluster.text}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-200">
                  Jump to cluster
                  <ArrowRightIcon className="ml-2 size-4 transition group-hover:translate-x-1" />
                </span>
              </LocaleLink>
            );
          })}
        </div>

        <div className="mt-5 grid items-start gap-4 lg:grid-cols-4">
          {guideShortcutBays.map((bay) => {
            const Icon = bay.icon;

            return (
              <article className="forza-card p-5" key={bay.title}>
                <Icon className="size-6 text-amber-300" />
                <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                  {bay.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {bay.text}
                </p>
                <div className="mt-5 grid gap-2">
                  {bay.links.map((link) => (
                    <LocaleLink
                      className="inline-flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      href={link.href}
                      key={link.href}
                    >
                      {link.label}
                      <ArrowRightIcon className="size-4" />
                    </LocaleLink>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="forza-panel mt-5 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.9fr_0.75fr_1.35fr]">
            <span>Player problem</span>
            <span>Start here</span>
            <span>Next step</span>
          </div>
          {guideRouterRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.9fr_0.75fr_1.35fr]"
              href={row.href}
              key={row.problem}
            >
              <span className="font-semibold text-zinc-50">{row.problem}</span>
              <span className="text-amber-200">{row.start}</span>
              <span className="leading-6 text-zinc-400">{row.next}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-5 p-5" id="upgrade-planning-path">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <WrenchIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Upgrade planning path
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                Use this path before changing sliders. It keeps class limits,
                tire grip, power gains, and swap choices in a practical order
                for road, rally, drift, and weekly event builds.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-md">
              <LocaleLink href="#upgrade-guides">
                Open upgrade cluster
              </LocaleLink>
            </Button>
          </div>
          <div className="mt-5 grid items-start gap-3 md:grid-cols-5">
            {upgradeDecisionPath.map((item) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-300/40 hover:bg-amber-300/10"
                href={item.href}
                key={item.href}
              >
                <span className="inline-flex size-8 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-sm font-semibold text-amber-100">
                  {item.step}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-5 p-5">
          <div className="grid items-start gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Guide publishing queue
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use this queue when adding the next long-tail FH6 guide so new
                pages land inside the existing tool, car, and weekly ecosystem.
              </p>
            </div>
            <div className="grid gap-2">
              {guideWorkflow.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  <ShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid items-start gap-4 md:grid-cols-3">
          {guideDestinations.map((item) => (
            <LocaleLink
              className="forza-card p-5"
              href={item.href}
              key={item.href}
            >
              <RadioTowerIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.body}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-200">
                Open destination
                <ArrowRightIcon className="ml-2 size-4" />
              </span>
            </LocaleLink>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="forza-panel mb-6 p-5">
          <div className="grid items-start gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <GitBranchIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Guide cluster workflow
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Every new guide should enter this map with one problem, one
                matching cluster, one tool handoff, and one contextual next
                read.
              </p>
            </div>
            <div className="grid items-start gap-3 md:grid-cols-2 lg:grid-cols-4">
              {guideHowToSteps.map((step) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={step.question}
                >
                  <ClipboardCheckIcon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-sm font-semibold text-zinc-100">
                    {step.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {step.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Search intent map
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Pick the FH6 guide cluster that matches the job
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            These clusters turn the full guide library into search paths: launch
            planning, handling fixes, device settings, and event builds.
          </p>
        </div>
        <div className="grid items-start gap-5">
          {guideGroups.map((group) => {
            const guides = getGuidesBySlug(group.slugs);

            return (
              <article className="forza-panel p-5" id={group.id} key={group.id}>
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {group.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                  <span className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                    {guides.length} guides
                  </span>
                </div>
                <div className="mt-5 grid items-start gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {guides.map((guide) => (
                    <LocaleLink
                      className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      href={`/games/forza-horizon-6/guides/${guide.slug}`}
                      key={guide.slug}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {guide.eyebrow}
                      </p>
                      <h4 className="mt-2 text-sm font-semibold text-zinc-100">
                        {guide.h1}
                      </h4>
                    </LocaleLink>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Guide index
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            {forzaHorizon6Guides.length} practical FH6 guides
          </h2>
        </div>
        <div className="grid items-start gap-4 md:grid-cols-2">
          {forzaHorizon6Guides.map((guide) => (
            <GuideCard guide={guide} key={guide.slug} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Guide FAQ</h2>
          <div className="mt-5 grid items-start gap-4 md:grid-cols-3">
            {guideFaqs.map((faq) => (
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
        description="Get new FH6 tuning guides, handling fixes, settings notes, and weekly event setup links."
        title="Get the next FH6 guide drop"
      />
    </main>
  );
}
