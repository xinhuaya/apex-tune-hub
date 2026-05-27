import { WaitlistFormCard } from '@/components/waitlist/waitlist-form-card';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Routes } from '@/routes';
import {
  ArrowRightIcon,
  BellIcon,
  CalendarClockIcon,
  GaugeIcon,
  ListChecksIcon,
  RouteIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const dropCadenceRows = [
  {
    cadence: 'Weekly reset',
    content: 'Safe picks, restrictions, reward-car notes, and tune paths.',
  },
  {
    cadence: 'Car Pass drop',
    content: 'Source check, car-page link, first role, and preset direction.',
  },
  {
    cadence: 'Guide update',
    content: 'New handling fixes, settings pages, and route-specific tests.',
  },
];

const waitlistValueCards = [
  {
    title: 'Short setup notes',
    text: 'One useful weekly tune note instead of a long generic newsletter.',
  },
  {
    title: 'Car-page updates',
    text: 'New candidate promotions, preset matches, and retest labels.',
  },
  {
    title: 'Tool changes',
    text: 'Calculator refinements when presets, routes, or car behavior change.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const pt = await getTranslations({ locale, namespace: 'WaitlistPage' });
  return constructMetadata({
    title: pt('title') + ' | ' + t('title'),
    description: pt('description'),
    locale,
    pathname: '/waitlist',
  });
}

export default async function WaitlistPage() {
  const t = await getTranslations('WaitlistPage');

  return (
    <main className="forza-page text-zinc-50">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="forza-chip">
              <BellIcon className="size-4" />
              Weekly tune drops
            </p>
            <h1 className="forza-neon-title mt-6 text-4xl font-semibold tracking-normal sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              {t('subtitle')}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="forza-card p-4">
                <GaugeIcon className="size-5 text-fuchsia-300" />
                <h2 className="mt-3 text-base font-semibold">Tune presets</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Road, drift, rally, and class notes tied back to calculator
                  settings.
                </p>
              </div>
              <div className="forza-card p-4">
                <ListChecksIcon className="size-5 text-cyan-300" />
                <h2 className="mt-3 text-base font-semibold">Weekly routes</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Playlist rewards, car pass additions, and quick setup picks
                  for each rotation.
                </p>
              </div>
            </div>
          </div>

          <WaitlistFormCard />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <BellIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              What the drop list sends
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The list should be practical: short setup changes, verified weekly
              links, and car updates that point back to a working tool.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {waitlistValueCards.map((card) => (
              <article className="forza-card p-4" key={card.title}>
                <h2 className="text-base font-semibold text-zinc-50">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="forza-panel mb-8 overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_1.4fr]">
            <span>Trigger</span>
            <span>Update content</span>
          </div>
          {dropCadenceRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_1.4fr]"
              key={row.cadence}
            >
              <span className="font-semibold text-zinc-50">{row.cadence}</span>
              <span className="leading-6 text-zinc-400">{row.content}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: 'Preset drops',
              description:
                'New road, drift, rally, drag, and class setups with the settings that matter first.',
              href: Routes.TunePresets,
              icon: <WrenchIcon className="size-5 text-fuchsia-300" />,
              label: 'Browse presets',
            },
            {
              title: 'Weekly reset notes',
              description:
                'Fast picks for playlist races, reward cars, seasonal restrictions, and first setup angles.',
              href: Routes.ForzaHorizon6WeeklyPlaylist,
              icon: <CalendarClockIcon className="size-5 text-cyan-300" />,
              label: 'Track weekly playlist',
            },
            {
              title: 'Calculator fixes',
              description:
                'Small tune calculator refinements based on car behavior, drivetrain, surface, and PI class.',
              href: Routes.TuneCalculator,
              icon: <RouteIcon className="size-5 text-yellow-300" />,
              label: 'Open calculator',
            },
          ].map((item) => (
            <div className="forza-card p-5" key={item.title}>
              {item.icon}
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.description}
              </p>
              <LocaleLink
                href={item.href}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
              >
                {item.label}
                <ArrowRightIcon className="size-4" />
              </LocaleLink>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
