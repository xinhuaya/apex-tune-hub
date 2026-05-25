import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BatteryChargingIcon,
  Gamepad2Icon,
  GaugeIcon,
  MonitorCogIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/settings/forza-horizon-6';
const title = 'Best Forza Horizon 6 Settings Hub - Apex Tune Hub';
const description =
  'Forza Horizon 6 settings hub for PC, Steam Deck, wheel, controller, FPS, force feedback, input feel, and setup testing workflows.';

const settingsCards = [
  {
    title: 'Best PC settings',
    text: 'Use this for balanced visuals, frame pacing, low-end PC notes, high-end checks, and repeatable benchmark routes.',
    href: '/settings/forza-horizon-6-pc',
    icon: MonitorCogIcon,
  },
  {
    title: 'Steam Deck settings',
    text: 'Use this for handheld FPS targets, battery-first profiles, plugged-in testing, and weekly event stability.',
    href: '/settings/forza-horizon-6-steam-deck',
    icon: BatteryChargingIcon,
  },
  {
    title: 'Wheel settings',
    text: 'Use this for force feedback, deadzones, steering feel, and brand-specific test loops before changing every tune.',
    href: '/settings/forza-horizon-6-wheel',
    icon: GaugeIcon,
  },
  {
    title: 'Controller settings',
    text: 'Use this for steering, throttle, braking, vibration, drift recovery, and consistency across weekly events.',
    href: '/settings/forza-horizon-6-controller',
    icon: Gamepad2Icon,
  },
];

const workflowRows = [
  ['Every car feels twitchy', 'Input settings first', 'Controller or wheel'],
  ['One car pushes wide', 'Tune first', 'Understeer guide'],
  ['Stutter appears in traffic', 'Performance first', 'PC or Steam Deck'],
  ['Drift recovery feels delayed', 'Input plus tune', 'Controller, wheel, drift'],
];

const settingsFaqs: FaqItem[] = [
  {
    question: 'What Forza Horizon 6 settings should I change first?',
    answer:
      'Change platform or input settings when every car feels wrong. Change the car tune when only one car has the problem.',
  },
  {
    question: 'Should settings be tested before tuning a car?',
    answer:
      'Yes. Stable FPS, readable force feedback, and predictable input response make car tuning easier because you can tell whether the issue comes from the setup or from the device.',
  },
  {
    question: 'Which page should Steam Deck and handheld players use?',
    answer:
      'Start with the Steam Deck settings page, then use controller settings and weekly playlist notes for stable handheld event runs.',
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

export default function ForzaHorizon6SettingsHubPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Settings', path: pathname },
          ]),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(settingsFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Settings command center</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.74fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best Forza Horizon 6 settings hub
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Start here when the game feels wrong before the car tune does.
                This hub separates PC performance, Steam Deck targets, wheel
                force feedback, and controller feel so each fix has the right
                starting point.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/settings/forza-horizon-6-pc">
                    Open PC Settings
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Pair With Tune Calculator
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <SlidersHorizontalIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Settings before sliders
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                If every car feels delayed, unstable, or hard to read, fix
                platform and input settings first. If only one car behaves badly,
                move to tune settings and car-specific presets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-4">
          {settingsCards.map((card) => {
            const Icon = card.icon;

            return (
              <LocaleLink className="forza-card p-5" href={card.href} key={card.href}>
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {card.text}
                </p>
              </LocaleLink>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1fr_1fr]">
            <span>Symptom</span>
            <span>Fix order</span>
            <span>Open next</span>
          </div>
          {workflowRows.map(([symptom, order, next]) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1fr_1fr]"
              key={symptom}
            >
              <span className="font-semibold text-zinc-50">{symptom}</span>
              <span className="text-amber-200">{order}</span>
              <span className="text-zinc-400">{next}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Settings FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {settingsFaqs.map((faq) => (
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
        description="Get FH6 settings updates for PC, Steam Deck, wheel, controller, and tuning workflows as testing expands."
        title="Follow FH6 settings updates"
      />
    </main>
  );
}
