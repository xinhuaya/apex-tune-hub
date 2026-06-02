'use client';

import { LocaleLink } from '@/i18n/navigation';
import { track } from '@vercel/analytics';
import {
  ArrowRightIcon,
  CarFrontIcon,
  GaugeIcon,
  MapPinnedIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';

const homeEventStorageKey = 'apex-tune-hub:fh6-tool-events';

const startHerePaths = [
  {
    problem: 'Car pushes wide or feels loose',
    tool: 'Tune Calculator',
    href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    next: 'Pick the symptom, copy the baseline, then test one road route.',
    icon: SlidersHorizontalIcon,
    accent: 'text-cyan-200',
  },
  {
    problem: 'Drift car spins, bogs, or snaps',
    tool: 'Drift Calculator',
    href: '/tools/forza-horizon-6-drift-tune-calculator?drive=RWD&power=medium&tires=drift&issue=no-angle&skill=beginner',
    next: 'Start from angle control before chasing more power or drama.',
    icon: MapPinnedIcon,
    accent: 'text-pink-200',
  },
  {
    problem: 'Launch, limiter, or top speed is wrong',
    tool: 'Gear Ratio Calculator',
    href: '/tools/forza-horizon-6-gear-ratio-calculator?race=road&gears=6&priority=balanced&issue=bogs-after-shift',
    next: 'Fix final drive and shift spacing around the route.',
    icon: GaugeIcon,
    accent: 'text-amber-200',
  },
  {
    problem: 'I do not know which car to build',
    tool: 'Best Cars Hub',
    href: '/games/forza-horizon-6/best-cars',
    next: 'Choose road, drift, rally, class, JDM, or weekly role first.',
    icon: CarFrontIcon,
    accent: 'text-lime-200',
  },
];

function trackHomeStartPath(path: (typeof startHerePaths)[number]) {
  const event = {
    action: 'open_home_start_path',
    path: typeof window === 'undefined' ? '/' : window.location.pathname,
    source: 'homepage_start_here',
    tool: path.tool,
    problem: path.problem,
    href: path.href,
  };

  try {
    track('FH6 Tool Action', event);
  } catch {
    // Tracking should never block navigation.
  }

  try {
    const rawValue = window.localStorage.getItem(homeEventStorageKey);
    const currentEvents = rawValue ? JSON.parse(rawValue) : [];
    const nextEvents = [
      {
        ...event,
        at: new Date().toISOString(),
      },
      ...(Array.isArray(currentEvents) ? currentEvents : []),
    ].slice(0, 50);

    window.localStorage.setItem(
      homeEventStorageKey,
      JSON.stringify(nextEvents)
    );
  } catch {
    // Local diagnostics are best effort only.
  }
}

export function ForzaHomeStartPaths() {
  return (
    <div className="mb-10 overflow-hidden rounded-md border border-cyan-300/20 bg-black/30">
      <div className="grid gap-4 border-b border-white/10 bg-white/[0.03] p-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="forza-chip">Start here</p>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
            Pick the problem, then open the right FH6 tool
          </h2>
        </div>
        <p className="text-sm leading-6 text-zinc-400">
          The fastest path is not reading every guide. Start with the failure
          you feel in the car, open the matching calculator state, and only move
          deeper after one repeatable test.
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4">
        {startHerePaths.map((path) => {
          const Icon = path.icon;

          return (
            <LocaleLink
              className="group min-h-48 border-b border-white/10 p-5 transition hover:bg-white/[0.04] md:border-r xl:border-b-0"
              href={path.href}
              key={path.problem}
              onClick={() => trackHomeStartPath(path)}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] ${path.accent}`}
                >
                  <Icon className="size-5" />
                </span>
                <ArrowRightIcon className="size-4 text-zinc-600 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-zinc-50">
                {path.problem}
              </h2>
              <p className="mt-2 text-sm font-semibold text-cyan-100">
                {path.tool}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {path.next}
              </p>
            </LocaleLink>
          );
        })}
      </div>
    </div>
  );
}
