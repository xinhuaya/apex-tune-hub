import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { BatteryChargingIcon, MonitorCogIcon, ZapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const presets = [
  {
    goal: 'Stable run',
    fps: '40 FPS target',
    direction: 'Balanced visuals with predictable frame pacing.',
    status: 'Needs local test',
  },
  {
    goal: 'Battery run',
    fps: '30 FPS target',
    direction: 'Lower power draw, lower heat, longer handheld session.',
    status: 'Needs local test',
  },
  {
    goal: 'Docked / plugged',
    fps: '45-60 FPS target',
    direction: 'Higher visual budget while watching thermals and stutter.',
    status: 'Needs local test',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Best Forza Horizon 6 Steam Deck Settings - Apex Tune Hub',
    description:
      'Forza Horizon 6 Steam Deck settings guide with Verified status, FPS targets, battery notes, and preset planning.',
    locale,
    pathname: '/settings/forza-horizon-6-steam-deck',
  });
}

export default function SteamDeckSettingsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Handheld settings</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best Forza Horizon 6 Steam Deck settings
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Forza.net says Forza Horizon 6 is Steam Deck Verified and
                optimized for PC handhelds. This page gives the first preset
                structure, then should be updated with tested FPS, battery, and
                temperature notes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Pair settings with a tune
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <a
                    href="https://forza.net/news/forza-horizon-6-steam-deck"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Official source
                  </a>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <BatteryChargingIcon className="size-7 text-lime-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Affiliate-friendly page
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This is one of the best long-term pages for handheld accessory,
                controller, dock, and storage affiliate links after the content
                has real test data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {presets.map((preset) => (
            <article key={preset.goal} className="forza-card p-5">
              <MonitorCogIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">{preset.goal}</h2>
              <p className="mt-2 text-sm font-semibold text-amber-200">
                {preset.fps}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {preset.direction}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-fuchsia-300">
                {preset.status}
              </p>
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <ZapIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">Testing checklist</h2>
          </div>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-zinc-400 md:grid-cols-2">
            <li>Record FPS target and actual frame stability.</li>
            <li>Record battery estimate and plugged-in behavior.</li>
            <li>Separate Steam Deck LCD and OLED results.</li>
            <li>Retest after major graphics or performance patches.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
