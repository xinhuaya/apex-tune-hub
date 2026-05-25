import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import { MonitorCogIcon, RouteIcon, ZapIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/settings/forza-horizon-6-pc';
const title = 'Best Forza Horizon 6 PC Settings - Apex Tune Hub';
const description =
  'Forza Horizon 6 PC settings guide for balanced visuals, stable FPS, low-end PCs, high-end PCs, and performance troubleshooting.';

const presets = [
  {
    name: 'Balanced',
    target: 'Stable FPS with clean visuals',
    note: 'Start here for most PCs, then reduce shadows, reflections, and crowd density if stutter appears.',
  },
  {
    name: 'Low-end PC',
    target: 'Frame pacing first',
    note: 'Prioritize consistency over maximum visual quality. Test one setting group at a time.',
  },
  {
    name: 'High-end PC',
    target: 'Visual clarity',
    note: 'Raise visual settings gradually while checking heat, VRAM pressure, and frame-time spikes.',
  },
];

const pcFaqs = [
  {
    question: 'What is the best first PC settings preset for FH6?',
    answer:
      'Start with the balanced preset, then lower shadows, reflections, and density settings only if frame pacing or stutter appears.',
  },
  {
    question: 'Should I chase average FPS first?',
    answer:
      'No. Racing games feel bad when frame time spikes during corners, so frame pacing, input feel, heat, and VRAM pressure matter alongside average FPS.',
  },
  {
    question: 'How should I test PC settings?',
    answer:
      'Use one repeatable route with city driving, high-speed road, weather, and dense scenery while changing only one setting group at a time.',
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

export default function ForzaHorizon6PcSettingsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'PC Settings', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(pcFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Performance guide</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best Forza Horizon 6 PC settings
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this page as the PC settings hub for stable FPS, clean
                visuals, low-end setups, and high-end tuning. The first version
                is a testing framework; exact values should be filled after
                hardware checks.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Pair with a tune
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/settings/forza-horizon-6-steam-deck">
                    Steam Deck Settings
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <ZapIcon className="size-7 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                First test priority
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Do not chase the highest average FPS first. Record frame pacing,
                stutter, input feel, and heat, because racing games feel bad
                when frame time spikes during corners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {presets.map((preset) => (
            <article key={preset.name} className="forza-card p-5">
              <MonitorCogIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">{preset.name}</h2>
              <p className="mt-2 text-sm font-semibold text-amber-200">
                {preset.target}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {preset.note}
              </p>
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <RouteIcon className="size-5 text-fuchsia-300" />
            <h2 className="text-lg font-semibold">Testing route</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Test settings on one repeatable route with city driving, high-speed
            road, weather, and dense scenery. Keep the same car and route while
            changing only one setting group at a time.
          </p>
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">PC settings FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {pcFaqs.map((faq) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                key={faq.question}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
