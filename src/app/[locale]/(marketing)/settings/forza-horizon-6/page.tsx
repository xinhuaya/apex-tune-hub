import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BatteryChargingIcon,
  ClipboardCheckIcon,
  CpuIcon,
  Gamepad2Icon,
  GaugeIcon,
  GitBranchIcon,
  ListChecksIcon,
  MonitorCogIcon,
  RouteIcon,
  ShieldCheckIcon,
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
    text: 'Use this for hardware routes, frame pacing, stutter fixes, scorecards, low-end PC notes, and repeatable benchmark routes.',
    href: '/settings/forza-horizon-6-pc',
    icon: MonitorCogIcon,
  },
  {
    title: 'Steam Deck settings',
    text: 'Use this for LCD/OLED scenarios, handheld FPS targets, battery-first profiles, plugged-in testing, and weekly event stability.',
    href: '/settings/forza-horizon-6-steam-deck',
    icon: BatteryChargingIcon,
  },
  {
    title: 'Wheel settings',
    text: 'Use this for wheelbase paths, force feedback, clipping, oscillation, deadzones, steering feel, and brand-specific test loops.',
    href: '/settings/forza-horizon-6-wheel',
    icon: GaugeIcon,
  },
  {
    title: 'Controller settings',
    text: 'Use this for controller paths, steering, throttle, braking, vibration, drift recovery, and consistency across weekly events.',
    href: '/settings/forza-horizon-6-controller',
    icon: Gamepad2Icon,
  },
];

const settingsGuideShortcuts = [
  {
    title: 'Best assist settings',
    text: 'Use this when braking line, traction control, stability control, ABS, or shifting assists change driving feel.',
    href: '/games/forza-horizon-6/guides/best-assist-settings',
  },
  {
    title: 'Difficulty settings',
    text: 'Use this when Drivatar pace, rewind, racing line, shifting, or reward tradeoffs need a clean progression path.',
    href: '/games/forza-horizon-6/guides/difficulty-settings-guide',
  },
  {
    title: 'Best camera settings',
    text: 'Use this when cockpit, chase, FOV, motion, or route visibility changes how the car feels at speed.',
    href: '/games/forza-horizon-6/guides/best-camera-settings',
  },
  {
    title: 'Steam Deck setup guide',
    text: 'Use this evergreen guide when handheld FPS, heat, battery, or readability still need a route-tested checklist.',
    href: '/games/forza-horizon-6/guides/steam-deck-settings-guide',
  },
  {
    title: 'Controller drift settings',
    text: 'Use this when steering, throttle, or braking deadzones make every car feel inconsistent.',
    href: '/games/forza-horizon-6/guides/controller-drift-settings',
  },
  {
    title: 'Wheel setup guide',
    text: 'Use this when force feedback, center feel, oscillation, or wheelbase software needs a testing order.',
    href: '/games/forza-horizon-6/guides/wheel-settings-guide',
  },
  {
    title: 'Input lag settings',
    text: 'Use this when settings feel correct but steering, braking, or shifting still responds late.',
    href: '/games/forza-horizon-6/guides/input-lag-settings',
  },
  {
    title: 'HUD and accessibility',
    text: 'Use this when racing line, UI scale, color, vibration, or distraction settings affect route learning.',
    href: '/games/forza-horizon-6/guides/hud-accessibility-settings',
  },
  {
    title: 'Online not working',
    text: 'Use this when convoys, matchmaking, crossplay, NAT, or account services block weekly events.',
    href: '/games/forza-horizon-6/guides/online-not-working-checklist',
  },
];

const workflowRows = [
  ['Every car feels twitchy', 'Input settings first', 'Controller or wheel'],
  ['One car pushes wide', 'Tune first', 'Understeer guide'],
  ['Stutter appears in traffic', 'Performance first', 'PC or Steam Deck'],
  [
    'Drift recovery feels delayed',
    'Input plus tune',
    'Controller, wheel, drift',
  ],
];

const settingsAuditSteps = [
  {
    title: '1. Stabilize the platform',
    text: 'Check FPS target, frame pacing, resolution, battery mode, and graphics load before blaming the tune.',
    href: '/settings/forza-horizon-6-pc',
  },
  {
    title: '2. Normalize the input',
    text: 'Set controller or wheel deadzones so steering, braking, throttle, and force feedback are readable.',
    href: '/settings/forza-horizon-6-controller',
  },
  {
    title: '3. Retest the same car',
    text: 'Drive one route again. If every car improves, settings were the issue; if one car remains bad, tune it.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    title: '4. Save the setup path',
    text: 'Link the result to a preset, car page, or weekly event note so the fix is repeatable later.',
    href: '/tools/forza-horizon-6-tune-presets',
  },
];

const deviceDecisionCards = [
  {
    title: 'Desktop or laptop',
    body: 'Start with PC settings when the problem is FPS, graphics quality, stutter, or input latency under load.',
    href: '/settings/forza-horizon-6-pc',
    icon: MonitorCogIcon,
  },
  {
    title: 'Handheld play',
    body: 'Start with Steam Deck when battery, thermal limits, handheld readability, or weekly event stability matters.',
    href: '/settings/forza-horizon-6-steam-deck',
    icon: BatteryChargingIcon,
  },
  {
    title: 'Wheel rig',
    body: 'Start with wheel settings when force feedback, steering lock, center feel, or deadzones make every car hard to read.',
    href: '/settings/forza-horizon-6-wheel',
    icon: GaugeIcon,
  },
  {
    title: 'Controller',
    body: 'Start with controller settings when throttle, brake, steering, vibration, or drift recovery feels inconsistent.',
    href: '/settings/forza-horizon-6-controller',
    icon: Gamepad2Icon,
  },
];

const settingsDecisionMatrix = [
  {
    symptom: 'Stutter, frame-time spikes, or heat',
    start: 'PC or Steam Deck settings',
    then: 'Retest the same route before changing tune sliders.',
    href: '/settings/forza-horizon-6-pc',
  },
  {
    symptom: 'Every car feels twitchy or delayed',
    start: 'Controller or wheel settings',
    then: 'Normalize input feel before changing alignment or differential.',
    href: '/settings/forza-horizon-6-controller',
  },
  {
    symptom: 'Only one car understeers, spins, or snaps',
    start: 'Tune calculator or tuning settings',
    then: 'Keep platform and input settings fixed while tuning the car.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    symptom: 'Weekly events fail after several retries',
    start: 'Stable platform plus conservative input',
    then: 'Use weekly playlist restrictions after the baseline is stable.',
    href: '/games/forza-horizon-6/weekly-playlist',
  },
];

const clusterReadinessCards = [
  {
    title: 'Performance layer',
    icon: CpuIcon,
    text: 'PC and Steam Deck pages now separate hardware route, FPS target, heat, readability, and scorecard checks.',
  },
  {
    title: 'Input layer',
    icon: Gamepad2Icon,
    text: 'Controller and wheel pages now separate device path, input group, scorecard checks, and car-tuning handoff.',
  },
  {
    title: 'Tuning handoff',
    icon: SlidersHorizontalIcon,
    text: 'Every-car problems stay in settings; one-car problems route to tune calculator, drift calculator, and tuning settings.',
  },
  {
    title: 'Repeatable testing',
    icon: ClipboardCheckIcon,
    text: 'Each setting path pushes users toward same car, same route, one-change-at-a-time testing.',
  },
];

const settingsTrustRules = [
  'Fix global settings before changing car-specific tuning sliders.',
  'Use the same route, car, weather, and camera when comparing settings changes.',
  'Separate performance problems from handling problems in internal links.',
  'Route car-only issues back to tune presets, car pages, and FH6 tuning settings.',
];

const settingsHowToSteps: FaqItem[] = [
  {
    question: '1. Identify whether the problem affects every car',
    answer:
      'If every car feels unstable, delayed, or hard to read, start with platform or input settings before tuning one vehicle.',
  },
  {
    question: '2. Choose the matching settings page',
    answer:
      'Use PC or Steam Deck for performance and readability issues; use controller or wheel for steering, braking, throttle, and force-feedback issues.',
  },
  {
    question: '3. Retest with one controlled route',
    answer:
      'Keep the same car, class, assists, camera, weather, and route while changing one setting group at a time.',
  },
  {
    question: '4. Route one-car problems to tuning',
    answer:
      'When platform and input are stable but one car remains wrong, move to tune calculator, drift calculator, presets, or car setup pages.',
  },
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
  {
    question: 'Should I use the settings hub or a tuning calculator first?',
    answer:
      'Use the settings hub first when every car has the same issue. Use the tuning calculator first when one car has a specific handling problem.',
  },
  {
    question: 'How should I compare FH6 settings changes?',
    answer:
      'Use the same route, car, assists, camera, weather, and input device while changing one platform or input group at a time.',
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
          buildItemListJsonLd({
            title: 'Forza Horizon 6 settings hub pages',
            items: settingsCards.map((card) => ({
              name: card.title,
              path: card.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 device troubleshooting guides',
            items: settingsGuideShortcuts.map((card) => ({
              name: card.title,
              path: card.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 settings decision paths',
            items: settingsDecisionMatrix.map((row) => ({
              name: row.symptom,
              path: row.href,
            })),
          }),
          buildHowToJsonLd({
            title: 'How to choose the right Forza Horizon 6 settings page',
            description:
              'A decision workflow for choosing PC, Steam Deck, controller, wheel, or tuning pages before changing FH6 setup sliders.',
            path: pathname,
            steps: settingsHowToSteps,
          }),
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
                platform and input settings first. If only one car behaves
                badly, move to tune settings and car-specific presets.
              </p>
              <div className="mt-5 grid gap-2">
                {settingsTrustRules.map((rule) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={rule}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-amber-300" />
                    <span>{rule}</span>
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
            <RouteIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Pick the settings path by device first
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A settings hub is strongest when it prevents the wrong fix order.
              Start with the platform or input device, then move to the car tune
              only after every-car problems are ruled out.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {deviceDecisionCards.map((card) => {
              const Icon = card.icon;

              return (
                <LocaleLink
                  className="forza-card p-4"
                  href={card.href}
                  key={card.href}
                >
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {card.body}
                  </p>
                </LocaleLink>
              );
            })}
          </div>
        </div>

        <div className="forza-panel mb-10 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <GitBranchIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Settings cluster map
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                The settings cluster now has two layers: performance first, then
                input feel. Use the tuning tools only after the global issue is
                ruled out.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {clusterReadinessCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article className="forza-card p-4" key={card.title}>
                    <Icon className="size-5 text-cyan-300" />
                    <h3 className="mt-3 text-base font-semibold text-zinc-100">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {settingsCards.map((card) => {
            const Icon = card.icon;

            return (
              <LocaleLink
                className="forza-card p-5"
                href={card.href}
                key={card.href}
              >
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {card.text}
                </p>
              </LocaleLink>
            );
          })}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <ClipboardCheckIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Device troubleshooting guides
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                Use these after picking the broad settings page. They keep
                handheld, controller, wheel, and input-lag problems connected to
                focused FH6 guide pages.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-md">
              <LocaleLink href="/games/forza-horizon-6/guides">
                Open guide library
              </LocaleLink>
            </Button>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {settingsGuideShortcuts.map((card) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                href={card.href}
                key={card.href}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {card.text}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel mb-6 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.9fr_0.8fr_1.3fr]">
            <span>Symptom</span>
            <span>Start here</span>
            <span>Then</span>
          </div>
          {settingsDecisionMatrix.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.9fr_0.8fr_1.3fr]"
              href={row.href}
              key={row.symptom}
            >
              <span className="font-semibold text-zinc-50">{row.symptom}</span>
              <span className="text-amber-200">{row.start}</span>
              <span className="leading-6 text-zinc-400">{row.then}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Four-step settings audit
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This audit makes the hub useful for repeat visitors: it tells
                them when to stay in settings and when to move into tuning.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {settingsAuditSteps.map((step) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40"
                  href={step.href}
                  key={step.title}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {step.text}
                  </p>
                </LocaleLink>
              ))}
            </div>
          </div>
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
