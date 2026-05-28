import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  CalendarClockIcon,
  BookOpenIcon,
  Gamepad2Icon,
  GaugeIcon,
  ListChecksIcon,
  MonitorIcon,
  RadioTowerIcon,
  RouteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6';
const title =
  'Forza Horizon 6 Tuning Hub - Calculators, Best Cars, and Settings';
const description =
  'Forza Horizon 6 tuning hub with calculators, best car planning, Steam Deck settings, wheel settings, Car Pass tracking, and weekly setup notes.';

const hubFaqs = [
  {
    question: 'What should I use first on Apex Tune Hub?',
    answer:
      'Start with the tune calculator for a baseline, then move into tune presets, car pages, or guide pages based on the problem you are trying to solve.',
  },
  {
    question: 'Does the FH6 hub cover more than tuning sliders?',
    answer:
      'Yes. The hub links tuning calculators, car candidates, weekly playlist notes, Car Pass tracking, Steam Deck settings, PC settings, wheel settings, and controller settings.',
  },
  {
    question: 'Are Apex Tune Hub recommendations official?',
    answer:
      'No. Apex Tune Hub is independent. Official release and platform facts should be checked against Forza.net, while tuning notes are baseline guidance for testing.',
  },
];

const hubLinks = [
  {
    title: 'Japan Launch Plan',
    description:
      'Early tuning priorities for city roads, mountain routes, dirt, rain, and JDM builds.',
    href: '/games/forza-horizon-6/guides/japan-launch-tuning-plan',
    icon: CalendarClockIcon,
  },
  {
    title: 'Japan Map Planner',
    description:
      'Route-type planning for city, mountain, rain, dirt, drift, and speed testing.',
    href: '/games/forza-horizon-6/japan-map',
    icon: CalendarClockIcon,
  },
  {
    title: 'Guides',
    description: 'Beginner tuning, handling fixes, gearing, and settings help.',
    href: '/games/forza-horizon-6/guides',
    icon: BookOpenIcon,
  },
  {
    title: 'Tuning Settings',
    description:
      'Plain-English tuning glossary for tires, gearing, alignment, aero, brakes, and diff.',
    href: '/games/forza-horizon-6/tuning-settings',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Tune Calculator',
    description: 'Baseline setup direction for road, dirt, rally, and drag.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Tune Codes',
    description:
      'Shareable preset URLs and verified-code workflow without fake codes.',
    href: '/tools/forza-horizon-6-tune-codes',
    icon: GaugeIcon,
  },
  {
    title: 'Drift Tune Calculator',
    description: 'RWD and AWD drift setup notes for angle and recovery.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
    icon: GaugeIcon,
  },
  {
    title: 'Gear Ratio Calculator',
    description: 'Final drive and gear spacing guidance by race type.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
    icon: CalendarClockIcon,
  },
  {
    title: 'Best Cars',
    description: 'Transparent car recommendation framework before testing.',
    href: '/games/forza-horizon-6/best-cars',
    icon: MonitorIcon,
  },
  {
    title: 'Car List',
    description:
      'Official-source notes plus 10 starter car pages with class, PI, and tune direction.',
    href: '/games/forza-horizon-6/cars',
    icon: Gamepad2Icon,
  },
  {
    title: 'PC Requirements',
    description:
      'Minimum, recommended, SSD, storage, and upgrade priority notes.',
    href: '/games/forza-horizon-6/pc-requirements',
    icon: MonitorIcon,
  },
  {
    title: 'Steam Deck Settings',
    description: 'Verified status, FPS targets, and handheld test plan.',
    href: '/settings/forza-horizon-6-steam-deck',
    icon: MonitorIcon,
  },
  {
    title: 'Settings Hub',
    description:
      'PC, Steam Deck, wheel, and controller setup paths in one settings index.',
    href: '/settings/forza-horizon-6',
    icon: MonitorIcon,
  },
  {
    title: 'Wheel Settings',
    description: 'Force feedback and wheel setup starting profiles.',
    href: '/settings/forza-horizon-6-wheel',
    icon: GaugeIcon,
  },
  {
    title: 'Controller Settings',
    description: 'Steering, throttle, braking, and vibration setup notes.',
    href: '/settings/forza-horizon-6-controller',
    icon: Gamepad2Icon,
  },
  {
    title: 'Car Pass Tracker',
    description: 'Weekly cars, source status, and tune link structure.',
    href: '/games/forza-horizon-6/car-pass',
    icon: CalendarClockIcon,
  },
  {
    title: 'Weekly Playlist',
    description: 'Reward cars, event notes, and recommended tune links.',
    href: '/games/forza-horizon-6/weekly-playlist',
    icon: CalendarClockIcon,
  },
  {
    title: 'FAQ',
    description: 'Quick answers for release, Game Pass, cars, and tools.',
    href: '/games/forza-horizon-6/faq',
    icon: Gamepad2Icon,
  },
  {
    title: 'Release Status',
    description:
      'Xbox, PC, Game Pass, Steam Deck, PS5 timing, and source-backed access paths.',
    href: '/games/forza-horizon-6/release-status',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Crossplay & Cross-Save',
    description:
      'Steam, Xbox app, Steam Deck, PS5, save sync, and ownership checks.',
    href: '/games/forza-horizon-6/crossplay-cross-save',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Game Pass & Editions',
    description:
      'Standard, Deluxe, Premium, Premium Upgrade, Car Pass, VIP, and expansions.',
    href: '/games/forza-horizon-6/game-pass-editions',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Steam vs Xbox App',
    description:
      'PC storefront choice for Steam, Xbox app, PC Game Pass, and Steam Deck.',
    href: '/games/forza-horizon-6/steam-vs-xbox-app',
    icon: MonitorIcon,
  },
  {
    title: 'PS5 Release Tracker',
    description:
      'PlayStation 5 timing, wishlist status, crossplay, cross-save, and safe assumptions.',
    href: '/games/forza-horizon-6/ps5-release',
    icon: Gamepad2Icon,
  },
  {
    title: 'Official Sources',
    description:
      'Source tracker for release, platform, Japan map, and car-list updates.',
    href: '/games/forza-horizon-6/official-sources',
    icon: ShieldCheckIcon,
  },
];

const hubStats = [
  {
    value: '18',
    label: 'FH6 hubs',
    detail:
      'Tools, guide clusters, car pages, settings pages, and weekly trackers.',
  },
  {
    value: '10',
    label: 'starter cars',
    detail: 'Japan-focused car database slice with individual tune paths.',
  },
  {
    value: 'weekly',
    label: 'return loop',
    detail: 'Weekly playlist, Car Pass, tune drops, and update notes.',
  },
];

const playerPaths = [
  {
    title: 'I need a tune now',
    body: 'Start with the calculator, pick a preset, then adjust the car page after testing.',
    icon: GaugeIcon,
    href: '/tools/forza-horizon-6-tune-calculator',
    cta: 'Open calculator',
  },
  {
    title: 'I need the best car',
    body: 'Compare class, role, manufacturer, and current candidate labels before building.',
    icon: Gamepad2Icon,
    href: '/games/forza-horizon-6/best-cars',
    cta: 'Compare cars',
  },
  {
    title: 'I need weekly prep',
    body: 'Check restrictions, reward cars, Car Pass updates, and safe baseline tune links.',
    icon: CalendarClockIcon,
    href: '/games/forza-horizon-6/weekly-playlist',
    cta: 'Open weekly tracker',
  },
];

const ecosystemRows = [
  ['Tools', 'Calculator, presets, drift, gear ratio, and tune-code workflow'],
  ['Cars', 'Car database, best cars, class hubs, and manufacturer pages'],
  ['Guides', 'Launch plans, handling fixes, settings, and event builds'],
  ['Updates', 'Weekly playlist, Car Pass tracker, FAQ, and tune drops'],
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

export default function ForzaHorizon6HubPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(hubFaqs),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Forza Horizon 6 Apex Tune Hub links',
            itemListElement: hubLinks.map((link, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: link.title,
              url: `https://apextunehub.com${link.href}`,
            })),
          },
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Game hub</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 tuning hub
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use launch-ready calculators, Japan route setup guides, best-car
                lists, handheld settings, wheel profiles, weekly playlist notes,
                and Car Pass tracking to build faster FH6 tunes without guessing
                every slider.
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
                  <LocaleLink href="/tools/forza-horizon-6-drift-tune-calculator">
                    Drift Tool
                  </LocaleLink>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {hubStats.map((stat) => (
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
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md border border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-200">
                  <Gamepad2Icon className="size-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Source status</h2>
                  <p className="text-sm text-zinc-500">
                    Official source tracker checked May 28, 2026.
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                <li>
                  Japan road, city, and mountain tuning copy routes through the
                  official source tracker.
                </li>
                <li>
                  Launch pages prioritize repeatable A, S1, drift, and rally
                  baselines.
                </li>
                <li>
                  Steam Deck and PC settings pages support handheld and desktop
                  players.
                </li>
                <li>
                  Platform and PS5 copy should be updated from the official FAQ
                  before changing hub claims.
                </li>
              </ul>
              <div className="mt-5 grid gap-2">
                {ecosystemRows.map(([label, text]) => (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
                    key={label}
                  >
                    <span className="text-sm font-semibold text-zinc-100">
                      {label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">
                      {text}
                    </span>
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
            <RouteIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Choose a path before choosing a page
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The hub should answer the first player decision quickly: tune,
              car, or weekly prep. Every path then routes into a deeper tool or
              guide stack.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {playerPaths.map((path) => {
              const Icon = path.icon;

              return (
                <LocaleLink
                  className="forza-card p-4"
                  href={path.href}
                  key={path.title}
                >
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {path.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {path.body}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-200">
                    {path.cta}
                  </span>
                </LocaleLink>
              );
            })}
          </div>
        </div>

        <div className="forza-panel mb-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Hub maintenance loop
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This keeps the top FH6 page aligned with the rest of the site as
                weekly content and car testing expands.
              </p>
            </div>
            <div className="grid gap-2">
              {[
                'Route every new high-value page back to this FH6 hub.',
                'Keep official release/platform facts separated from tuning guidance.',
                'Send repeat visitors to weekly playlist, Car Pass, and FH6 tune drops.',
                'Use guide, car, and tool hubs as the main internal-link clusters.',
              ].map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  <ShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-2">
          <LocaleLink
            className="forza-card p-5"
            href="/games/forza-horizon-6/guides"
          >
            <BookOpenIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Guide topic hub</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Launch plans, handling fixes, device settings, event builds, and
              long-tail guide publishing workflow.
            </p>
          </LocaleLink>
          <LocaleLink className="forza-card p-5" href="/waitlist">
            <RadioTowerIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">FH6 tune drops</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Email capture for new presets, weekly notes, car page changes, and
              verified update paths.
            </p>
          </LocaleLink>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {hubLinks.map((link) => {
            const Icon = link.icon;

            return (
              <LocaleLink
                key={link.href}
                href={link.href}
                className="forza-card p-5"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <Icon className="size-4" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                  {link.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {link.description}
                </p>
              </LocaleLink>
            );
          })}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">FH6 hub FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {hubFaqs.map((faq) => (
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
        description="Join the FH6 update list for new tune tools, car database additions, weekly playlist notes, and setup guides."
        title="Get the next Apex Tune Hub update"
      />
    </main>
  );
}
