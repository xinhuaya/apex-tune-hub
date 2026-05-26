import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  GaugeIcon,
  ListChecksIcon,
  MonitorCogIcon,
  RouteIcon,
  ShieldCheckIcon,
  ThermometerIcon,
  ZapIcon,
} from 'lucide-react';
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

const pcProfileCards = [
  {
    title: 'Frame-pacing first',
    body: 'Use this when the game looks fine in screenshots but feels uneven in corners, traffic, or dense city routes.',
    icon: GaugeIcon,
  },
  {
    title: 'Thermal control',
    body: 'Use this when performance starts strong, then fades after several events or long highway runs.',
    icon: ThermometerIcon,
  },
  {
    title: 'Visual clarity',
    body: 'Use this when FPS is already stable and you want cleaner reflections, road detail, draw distance, and cockpit readability.',
    icon: MonitorCogIcon,
  },
];

const pcBottleneckRows = [
  {
    symptom: 'Sharp stutter in city traffic',
    likelyCause: 'CPU, storage, or background load',
    firstMove:
      'Close overlays, reduce crowd or traffic density, and retest the same city route.',
  },
  {
    symptom: 'FPS drops after a few races',
    likelyCause: 'Heat or power limit',
    firstMove:
      'Check temperature, fan profile, laptop power mode, and plugged-in status before lowering visuals.',
  },
  {
    symptom: 'Blurred roads at speed',
    likelyCause: 'Upscaling or motion clarity',
    firstMove:
      'Adjust upscaling sharpness, motion blur, and resolution scale after frame pacing is stable.',
  },
  {
    symptom: 'Input delay during rain',
    likelyCause: 'GPU load spike',
    firstMove:
      'Lower reflections, shadows, particles, or weather-heavy settings, then repeat the rain section.',
  },
];

const benchmarkSteps = [
  'Pick one city route, one high-speed route, and one rain or night route.',
  'Use the same car, camera, traffic setting, and controller or wheel profile.',
  'Change only one setting group before each retest.',
  'Keep the setting only if frame pacing and input feel improve, not just average FPS.',
];

const pcNextLinks = [
  {
    title: 'Settings Hub',
    description:
      'Return to the main FH6 settings hub when the issue might be input, handheld, or wheel related.',
    href: '/settings/forza-horizon-6',
  },
  {
    title: 'Steam Deck Settings',
    description:
      'Use handheld-specific profiles when battery, thermals, or portable readability are the real constraint.',
    href: '/settings/forza-horizon-6-steam-deck',
  },
  {
    title: 'Controller Settings',
    description:
      'Move here if FPS is stable but steering, throttle, braking, or vibration still feels wrong.',
    href: '/settings/forza-horizon-6-controller',
  },
  {
    title: 'Tune Calculator',
    description:
      'Move here when platform performance is stable and only one car still behaves badly.',
    href: '/tools/forza-horizon-6-tune-calculator',
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
          buildItemListJsonLd({
            title: 'Forza Horizon 6 PC settings next steps',
            items: pcNextLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
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
              <div className="mt-5 grid gap-2">
                {benchmarkSteps.map((step) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={step}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Choose the PC tuning goal before changing visuals
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The best PC settings path depends on the problem: uneven frame
              pacing, heat, or visual clarity. This keeps the page from becoming
              a generic max-FPS checklist.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {pcProfileCards.map((card) => {
              const Icon = card.icon;

              return (
                <article className="forza-card p-4" key={card.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

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

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.85fr_0.75fr_1.4fr]">
            <span>PC symptom</span>
            <span>Likely bottleneck</span>
            <span>First move</span>
          </div>
          {pcBottleneckRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.85fr_0.75fr_1.4fr]"
              key={row.symptom}
            >
              <span className="font-semibold text-zinc-50">{row.symptom}</span>
              <span className="text-amber-200">{row.likelyCause}</span>
              <span className="leading-6 text-zinc-400">{row.firstMove}</span>
            </div>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Follow-up routes
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Where to go after PC performance is stable
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Once the platform feels consistent, route the player into the
              setting or tuning page that matches the remaining problem.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {pcNextLinks.map((link) => (
              <LocaleLink
                className="forza-card p-4"
                href={link.href}
                key={link.href}
              >
                <ZapIcon className="size-5 text-fuchsia-300" />
                <h3 className="mt-4 text-base font-semibold text-zinc-100">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {link.description}
                </p>
              </LocaleLink>
            ))}
          </div>
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
      <ApexNewsletterCta
        description="Get FH6 PC settings updates, benchmark workflow notes, and tuning links as performance testing expands."
        title="Follow FH6 PC settings updates"
      />
    </main>
  );
}
