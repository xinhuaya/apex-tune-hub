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
  MonitorIcon,
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
    title: 'Guides',
    description: 'Beginner tuning, handling fixes, gearing, and settings help.',
    href: '/games/forza-horizon-6/guides',
    icon: BookOpenIcon,
  },
  {
    title: 'Tune Calculator',
    description: 'Baseline setup direction for road, dirt, rally, and drag.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: SlidersHorizontalIcon,
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
    title: 'Car Database',
    description: '10 starter car pages with class, PI, and tune direction.',
    href: '/games/forza-horizon-6/cars',
    icon: Gamepad2Icon,
  },
  {
    title: 'Steam Deck Settings',
    description: 'Verified status, FPS targets, and handheld test plan.',
    href: '/settings/forza-horizon-6-steam-deck',
    icon: MonitorIcon,
  },
  {
    title: 'PC Settings',
    description: 'Balanced, low-end, and high-end settings framework.',
    href: '/settings/forza-horizon-6-pc',
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
            </div>

            <div className="forza-panel p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md border border-fuchsia-300/30 bg-fuchsia-300/10 text-fuchsia-200">
                  <Gamepad2Icon className="size-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Source status</h2>
                  <p className="text-sm text-zinc-500">
                    Launch status checked May 25, 2026.
                  </p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">
                <li>
                  Now positioned around Japan road, city, and mountain tuning.
                </li>
                <li>
                  Launch pages prioritize repeatable A, S1, drift, and rally
                  baselines.
                </li>
                <li>
                  Steam Deck and PC settings pages support handheld and desktop
                  players.
                </li>
                <li>PS5 version planned for later in 2026.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
