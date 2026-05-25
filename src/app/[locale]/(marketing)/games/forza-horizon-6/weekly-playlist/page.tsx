import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { CalendarDaysIcon, CarIcon, MailIcon, TrophyIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const eventRows = [
  [
    'Featured challenge',
    'Check restrictions first',
    'Pick a safe A or S1 tune',
  ],
  [
    'Reward car',
    'Confirm source and timing',
    'Open the car page after verified',
  ],
  ['Seasonal event', 'Match class and surface', 'Link the closest tune preset'],
  ['Playlist note', 'Record weekly changes', 'Send a short setup summary'],
];

const baselineLinks = [
  {
    title: 'Safe road baseline',
    href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
    note: 'Use for road championships, speed zones, and mixed city routes.',
  },
  {
    title: 'Drift baseline',
    href: '/games/forza-horizon-6/guides/japan-drift-setup',
    note: 'Use for weekly drift zones before chasing high-angle builds.',
  },
  {
    title: 'Starter garage',
    href: '/games/forza-horizon-6/guides/best-starter-cars',
    note: 'Use when the playlist needs quick coverage across several event types.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 Weekly Playlist Tracker - Apex Tune Hub',
    description:
      'Track Forza Horizon 6 weekly playlist rewards, event notes, recommended cars, and tune links.',
    locale,
    pathname: '/games/forza-horizon-6/weekly-playlist',
  });
}

export default function WeeklyPlaylistPage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Weekly setup tracker</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 weekly playlist tracker
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this page as the weekly prep desk: check reward cars, event
                requirements, suggested starter builds, tune links, and which
                pages need a quick refresh before the season changes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/games/forza-horizon-6/car-pass">
                    Car Pass Tracker
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
              <MailIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                What to check first
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Start with event class, drivetrain limits, surface type, and
                whether the challenge rewards clean consistency or one perfect
                run.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1fr_1.2fr]">
            <span>Section</span>
            <span>Status</span>
            <span>Action</span>
          </div>
          {eventRows.map(([section, status, action]) => (
            <div
              key={section}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1fr_1.2fr]"
            >
              <span className="font-semibold text-zinc-50">{section}</span>
              <span className="text-amber-200">{status}</span>
              <span className="text-zinc-400">{action}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="forza-card p-5">
            <CalendarDaysIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Update routine</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Check the playlist on the same weekly cadence and keep the answer
              short: restriction, best safe car, best tune link, and one setup
              note.
            </p>
          </article>
          <article className="forza-card p-5">
            <TrophyIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">Reward car links</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Every reward car should link to the car database, best cars, and
              the most relevant calculator.
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {baselineLinks.map((item) => (
            <LocaleLink
              className="forza-card p-5"
              href={item.href}
              key={item.href}
            >
              <CarIcon className="size-5 text-amber-300" />
              <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.note}
              </p>
            </LocaleLink>
          ))}
        </div>
      </section>
    </main>
  );
}
