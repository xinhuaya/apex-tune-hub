import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { CalendarDaysIcon, MailIcon, TrophyIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const eventRows = [
  ['Featured challenge', 'To verify weekly', 'Recommended car pending'],
  ['Reward car', 'Add from official source', 'Create car page after verified'],
  ['Seasonal event', 'To verify weekly', 'Link class-specific tune'],
  ['Playlist note', 'Update same day', 'Send newsletter summary'],
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
          <p className="forza-chip">Repeat traffic</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 weekly playlist tracker
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                This page is built for repeat visits. Each weekly update should
                list reward cars, event requirements, suggested cars, tune
                links, and pages that need a refresh.
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
              <h2 className="mt-4 text-xl font-semibold">Newsletter angle</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Turn this into a weekly email: reward car, best event car, tune
                link, and the one setting players should test this week.
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
              Update this page on the same weekly cadence. Consistency matters
              more than long commentary.
            </p>
          </article>
          <article className="forza-card p-5">
            <TrophyIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">Best internal link</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Every reward car should link to the car database, best cars, and
              the most relevant calculator.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
