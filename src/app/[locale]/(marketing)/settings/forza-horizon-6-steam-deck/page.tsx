import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  BatteryChargingIcon,
  ClipboardCheckIcon,
  Gamepad2Icon,
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

const handheldLinks = [
  {
    title: 'Official source tracker',
    href: '/games/forza-horizon-6/official-sources',
    note: 'Check this before changing Verified, platform, or handheld support language.',
  },
  {
    title: 'Steam Deck guide',
    href: '/games/forza-horizon-6/guides/steam-deck-settings-guide',
    note: 'Use the evergreen guide for testing order and patch update notes.',
  },
  {
    title: 'Controller settings',
    href: '/settings/forza-horizon-6-controller',
    note: 'Pair handheld graphics changes with predictable input settings.',
  },
  {
    title: 'Weekly playlist',
    href: '/games/forza-horizon-6/weekly-playlist',
    note: 'Use stable handheld settings for weekly events with traffic and weather.',
  },
];

const handheldDecisionCards = [
  {
    title: 'Balanced handheld run',
    body: 'Use this when you want clean driving feel, readable visuals, and a stable session without draining the battery too fast.',
    icon: GaugeIcon,
  },
  {
    title: 'Battery-first session',
    body: 'Use this for travel, longer weekly playlists, or repeated event retries where heat and battery matter more than sharp visuals.',
    icon: BatteryChargingIcon,
  },
  {
    title: 'Plugged-in testing',
    body: 'Use this when you can spend more power budget on clarity, but still need to watch heat and frame-time spikes.',
    icon: ThermometerIcon,
  },
];

const deckScenarioCards = [
  {
    title: 'Steam Deck LCD',
    priority: 'Stable frame pacing and readable roads',
    body: 'Start with the balanced handheld run, then lower expensive visuals if packed city, rain, or weekly starts feel uneven.',
    icon: MonitorCogIcon,
  },
  {
    title: 'Steam Deck OLED',
    priority: 'Smoothness, battery, and display clarity',
    body: 'Keep the same route and FPS target while judging battery estimate, heat, and whether night or rain routes remain easy to read.',
    icon: BatteryChargingIcon,
  },
  {
    title: 'Docked or plugged in',
    priority: 'More visual budget without heat spikes',
    body: 'Spend extra power on clarity only after the same event loop stays stable for several runs.',
    icon: ZapIcon,
  },
  {
    title: 'Travel / battery-first',
    priority: 'Longer sessions and lower heat',
    body: 'Use a conservative FPS target and lower density-heavy settings before judging car handling.',
    icon: ThermometerIcon,
  },
];

const deckSettingPriorityRows = [
  {
    group: 'FPS target',
    firstMove:
      'Choose 40 FPS for balanced play or 30 FPS for battery-first sessions.',
    why: 'A stable lower target often feels better than a higher target that drops in traffic or rain.',
  },
  {
    group: 'Power and thermal budget',
    firstMove: 'Test plugged-in and battery behavior separately.',
    why: 'A setting can feel good for one short run and still fade after several weekly-event retries.',
  },
  {
    group: 'Reflections, shadows, and particles',
    firstMove: 'Lower these first when weather or city sections stutter.',
    why: 'They can affect frame pacing without meaning the car tune is bad.',
  },
  {
    group: 'Screen readability',
    firstMove:
      'Keep roads, braking points, and traffic gaps readable before chasing extra effects.',
    why: 'Handheld play needs clear visual information more than maxed quality.',
  },
  {
    group: 'Controller feel',
    firstMove:
      'Pair graphics changes with controller settings if inputs still feel late.',
    why: 'Frame pacing and input response are tied together on a handheld racing setup.',
  },
];

const handheldTroubleshootingRows = [
  {
    symptom: 'Corners feel delayed',
    likelyCause: 'Frame pacing or input latency',
    firstMove:
      'Lock the FPS target, retest the same corner, then pair with controller settings.',
  },
  {
    symptom: 'Battery drains too quickly',
    likelyCause: 'Power budget too high',
    firstMove:
      'Drop the target profile, lower expensive visuals, and compare a full event loop.',
  },
  {
    symptom: 'Heat builds after several races',
    likelyCause: 'Sustained load',
    firstMove:
      'Use the battery profile or lower GPU-heavy settings before changing car tunes.',
  },
  {
    symptom: 'Weekly events stutter',
    likelyCause: 'Traffic, weather, or dense scenery',
    firstMove:
      'Test the weekly route conditions instead of only checking free-roam roads.',
  },
];

const handheldTestLoop = [
  'Test one city route, one high-speed route, and one dense weekly event start.',
  'Record LCD or OLED model, FPS target, battery estimate, and plugged-in status.',
  'Change only one graphics or power group before each retest.',
  'Move to car tuning only after every-car input and frame pacing feel stable.',
];

const steamDeckValidationSteps = [
  {
    question: '1. Pick the handheld scenario',
    answer:
      'Choose LCD, OLED, plugged-in, or battery-first before changing graphics so the target is clear.',
  },
  {
    question: '2. Lock the FPS target',
    answer:
      'Start with a stable FPS target, then repeat one city route, one high-speed route, and one weekly-style event start.',
  },
  {
    question: '3. Change one budget group',
    answer:
      'Adjust one group such as reflections, shadows, density, power profile, or screen clarity before each retest.',
  },
  {
    question: '4. Move to input or tuning only after stability',
    answer:
      'If every car feels better, keep the device setting. If only one car still feels wrong, use controller settings or the tune calculator.',
  },
];

const deckScorecardRows = [
  ['Frame pacing', 'Main signal for corner and braking consistency'],
  ['Battery estimate', 'Important for travel and weekly retries'],
  ['Heat over time', 'Check after several races, not only the first event'],
  ['Input feel', 'Steering, braking, and drift recovery under load'],
  ['Readability', 'Road edges, traffic, UI text, and night/rain visibility'],
];

const steamDeckNextLinks = [
  {
    title: 'Official source tracker',
    href: '/games/forza-horizon-6/official-sources',
    note: 'Use this before changing Verified status, platform wording, or PC handheld support notes.',
  },
  {
    title: 'Settings Hub',
    href: '/settings/forza-horizon-6',
    note: 'Return here when the problem might be PC, wheel, controller, or car-specific tuning instead.',
  },
  {
    title: 'Steam Deck guide',
    href: '/games/forza-horizon-6/guides/steam-deck-settings-guide',
    note: 'Use this evergreen guide for route-tested handheld notes, update checks, and weekly stability.',
  },
  {
    title: 'Controller settings',
    href: '/settings/forza-horizon-6-controller',
    note: 'Use this when frame pacing is stable but steering, braking, or throttle still feels inconsistent.',
  },
  {
    title: 'Weekly playlist',
    href: '/games/forza-horizon-6/weekly-playlist',
    note: 'Use stable handheld settings for weekly events with traffic, weather, and repeated restarts.',
  },
  {
    title: 'Tune calculator',
    href: '/tools/forza-horizon-6-tune-calculator',
    note: 'Move here when the device feels stable and only one car still needs setup work.',
  },
];

const pathname = '/settings/forza-horizon-6-steam-deck';
const title = 'Best Forza Horizon 6 Steam Deck Settings - Apex Tune Hub';
const description =
  'Forza Horizon 6 Steam Deck settings guide with Verified status, FPS targets, battery notes, and preset planning.';
const steamDeckFaqs: FaqItem[] = [
  {
    question: 'Is Forza Horizon 6 Steam Deck Verified?',
    answer:
      'Forza.net lists Forza Horizon 6 as Steam Deck Verified and optimized for PC handhelds at launch.',
  },
  {
    question: 'Should I target 30 FPS or 40 FPS on Steam Deck?',
    answer:
      'Start with a stable 40 FPS target for balanced play. Drop to 30 FPS when battery life, heat, or crowded weekly events matter more.',
  },
  {
    question: 'Do Steam Deck settings affect car control?',
    answer:
      'Yes. Unstable frame pacing can make braking, steering, and drift recovery feel inconsistent, so tune graphics and input settings together.',
  },
  {
    question: 'Should Steam Deck LCD and OLED settings be tracked separately?',
    answer:
      'Yes. Record the model, FPS target, power state, and battery estimate so future updates can compare handheld results cleanly.',
  },
  {
    question: 'What should I lower first if FH6 stutters on Steam Deck?',
    answer:
      'Lock the FPS target first, then reduce reflections, shadows, particles, or density-heavy settings on the same test route.',
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

export default function SteamDeckSettingsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Settings', path: pathname },
            { name: 'Steam Deck Settings', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 Steam Deck settings next steps',
            items: steamDeckNextLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildHowToJsonLd({
            title: 'How to test Forza Horizon 6 Steam Deck settings',
            description:
              'A repeatable Steam Deck testing workflow for FH6 FPS targets, battery, heat, readability, and input feel.',
            path: pathname,
            steps: steamDeckValidationSteps,
          }),
          buildFaqJsonLd(steamDeckFaqs),
        ]}
      />
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
              <h2 className="mt-4 text-xl font-semibold">Best first target</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Start with stable frame pacing. A lower but consistent FPS
                target usually feels better than a higher target that drops in
                traffic, rain, or packed event starts.
              </p>
              <div className="mt-5 grid gap-2">
                {handheldTestLoop.map((step) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={step}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-lime-300" />
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
            <RouteIcon className="size-6 text-lime-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Pick the handheld scenario first
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Steam Deck tuning depends on the play mode. Choose the scenario,
              lock the FPS target, then test the same route before touching car
              settings.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {deckScenarioCards.map((card) => {
              const Icon = card.icon;

              return (
                <article className="forza-card p-4" key={card.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-amber-200">
                    {card.priority}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {card.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mb-10 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Choose the handheld goal before tuning visuals
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Steam Deck settings are a tradeoff between frame pacing, battery,
              heat, and readability. Pick the handheld goal first, then test the
              same event conditions before touching car-specific tuning.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {handheldDecisionCards.map((card) => {
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

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.85fr_1.15fr_1.2fr]">
            <span>Handheld setting</span>
            <span>First move</span>
            <span>Why it matters</span>
          </div>
          {deckSettingPriorityRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.85fr_1.15fr_1.2fr]"
              key={row.group}
            >
              <span className="font-semibold text-zinc-50">{row.group}</span>
              <span className="leading-6 text-amber-200">{row.firstMove}</span>
              <span className="leading-6 text-zinc-400">{row.why}</span>
            </div>
          ))}
        </div>

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.85fr_0.75fr_1.4fr]">
            <span>Handheld symptom</span>
            <span>Likely cause</span>
            <span>First move</span>
          </div>
          {handheldTroubleshootingRows.map((row) => (
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
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <ClipboardCheckIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Steam Deck scorecard
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Track more than FPS. The useful setting is the one that keeps
                the run readable, cool, and predictable across the whole event
                loop.
              </p>
            </div>
            <div className="grid gap-2">
              {deckScorecardRows.map(([metric, note]) => (
                <div
                  className="grid gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm md:grid-cols-[0.7fr_1.3fr]"
                  key={metric}
                >
                  <span className="font-semibold text-zinc-100">{metric}</span>
                  <span className="leading-6 text-zinc-400">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Follow-up routes
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Where to go after handheld performance is stable
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Once the Deck feels consistent, move into input settings, weekly
              prep, or car tuning based on what still feels wrong.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {steamDeckNextLinks.map((item) => (
              <LocaleLink
                className="forza-card p-4"
                href={item.href}
                key={item.href}
              >
                <Gamepad2Icon className="size-5 text-fuchsia-300" />
                <h3 className="mt-4 text-base font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.note}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {handheldLinks.map((item) => (
            <LocaleLink
              className="forza-card p-5"
              href={item.href}
              key={item.href}
            >
              <Gamepad2Icon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.note}
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {steamDeckFaqs.map((faq) => (
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
        description="Get FH6 Steam Deck settings updates, FPS target notes, battery checks, and weekly event setup links."
        title="Follow FH6 Steam Deck settings updates"
      />
    </main>
  );
}
