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
} from '@/lib/seo/forza-horizon-6';
import {
  ClipboardCheckIcon,
  CpuIcon,
  GaugeIcon,
  HardDriveIcon,
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

const pcHardwareRoutes = [
  {
    title: 'Entry-level or older GPU',
    priority: 'Stability, readable roads, lower spikes',
    firstMoves:
      'Use a frame cap, reduce reflections and shadows first, then lower crowd or traffic-heavy settings if city routes still hitch.',
    icon: HardDriveIcon,
  },
  {
    title: 'Mid-range desktop',
    priority: 'Balanced visuals with consistent frame time',
    firstMoves:
      'Keep texture clarity if VRAM is stable, then tune shadows, reflections, particles, and density around the benchmark route.',
    icon: MonitorCogIcon,
  },
  {
    title: 'High-end / high-refresh PC',
    priority: 'Frame pacing before maxed settings',
    firstMoves:
      'Cap below unstable peaks, check heat and VRAM pressure, then raise draw distance, reflections, and cockpit detail gradually.',
    icon: CpuIcon,
  },
  {
    title: 'Gaming laptop',
    priority: 'Power mode, heat, and sustained pace',
    firstMoves:
      'Test plugged in, confirm the performance power plan, watch thermals after several races, and avoid judging only the first run.',
    icon: ThermometerIcon,
  },
];

const pcSettingPriorityRows = [
  {
    group: 'Frame cap and display mode',
    lowerFirst: 'Set a stable cap before reducing image quality.',
    why: 'A predictable frame target makes input feel easier to judge during braking and corner exits.',
  },
  {
    group: 'Shadows and reflections',
    lowerFirst:
      'Lower one step when rain, city streets, or night routes stutter.',
    why: 'These settings can create visible spikes without changing the car tune at all.',
  },
  {
    group: 'Crowd, traffic, and scenery density',
    lowerFirst: 'Reduce when packed events or urban sections hitch.',
    why: 'Dense routes are better stress tests than empty highway pulls.',
  },
  {
    group: 'Resolution scale and upscaling',
    lowerFirst: 'Use only after frame pacing is understood.',
    why: 'Upscaling can help performance, but too much softness can hide braking points and road texture.',
  },
  {
    group: 'Motion blur and camera effects',
    lowerFirst: 'Disable or reduce if speed reads poorly.',
    why: 'Clarity matters for racing lines, traffic gaps, and drift recovery.',
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

const pcValidationSteps = [
  {
    question: '1. Lock the test route',
    answer:
      'Choose one city section, one high-speed road, and one weather-heavy segment before changing settings.',
  },
  {
    question: '2. Record the starting profile',
    answer:
      'Write down preset, frame cap, display mode, upscaling state, controller or wheel device, and whether the PC is thermally stable.',
  },
  {
    question: '3. Change one setting group',
    answer:
      'Adjust one group such as shadows, reflections, density, upscaling, or frame cap, then repeat the exact same route.',
  },
  {
    question: '4. Keep only useful changes',
    answer:
      'Keep the change only if stutter, input feel, heat, or frame pacing improves without making braking points harder to read.',
  },
];

const pcScorecardRows = [
  ['Average FPS', 'Helpful, but not enough by itself'],
  ['1% lows / frame pacing', 'Most important for corner consistency'],
  ['Input feel', 'Brake, steering, and throttle response under load'],
  ['Heat after several events', 'Critical for laptops and compact PCs'],
  ['Visual readability', 'Road edges, traffic, reflections, and cockpit cues'],
];

const pcNextLinks = [
  {
    title: 'PC Requirements',
    description:
      'Check minimum, recommended, SSD, storage, and upgrade priority notes before settings work.',
    href: '/games/forza-horizon-6/pc-requirements',
  },
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

const pcIssueGuideLinks = [
  {
    title: 'Best PC graphics settings',
    href: '/games/forza-horizon-6/guides/best-pc-graphics-settings',
    note: 'Use when the player needs a visual-quality order instead of a general performance framework.',
  },
  {
    title: 'Cloud save not syncing',
    href: '/games/forza-horizon-6/guides/cloud-save-not-syncing',
    note: 'Use when the issue appears after moving between Steam, Xbox app, Game Pass, or another device.',
  },
  {
    title: 'Online not working',
    href: '/games/forza-horizon-6/guides/online-not-working-checklist',
    note: 'Use when matchmaking, convoy, account, NAT, or platform service checks matter more than FPS.',
  },
  {
    title: 'Input lag settings',
    href: '/games/forza-horizon-6/guides/input-lag-settings',
    note: 'Use when the car reacts late even after frame pacing, display mode, and controller path are checked.',
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
  {
    question: 'Which FH6 PC settings should I lower first for stutter?',
    answer:
      'Start with frame cap stability, then lower shadows, reflections, particles, and density settings around the same city or rain route.',
  },
  {
    question: 'What if FH6 only feels delayed in rain or traffic?',
    answer:
      'Treat it as a load spike first. Reduce expensive visual settings, retest the same route, then move to controller or wheel settings if performance is stable.',
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
          buildItemListJsonLd({
            title: 'Forza Horizon 6 PC issue guides',
            items: pcIssueGuideLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildHowToJsonLd({
            title: 'How to test Forza Horizon 6 PC settings',
            description:
              'A repeatable PC settings workflow for testing FH6 frame pacing, stutter, heat, and input feel.',
            path: pathname,
            steps: pcValidationSteps,
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
            <CpuIcon className="size-6 text-fuchsia-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Pick the PC hardware route first
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The best FH6 PC settings are not one universal preset. Start from
              the machine type, then test the same route so every change has a
              clear reason.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {pcHardwareRoutes.map((route) => {
              const Icon = route.icon;

              return (
                <article className="forza-card p-4" key={route.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {route.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-amber-200">
                    {route.priority}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {route.firstMoves}
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
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.85fr_1.15fr_1.2fr]">
            <span>Setting group</span>
            <span>First adjustment</span>
            <span>Why it matters</span>
          </div>
          {pcSettingPriorityRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.85fr_1.15fr_1.2fr]"
              key={row.group}
            >
              <span className="font-semibold text-zinc-50">{row.group}</span>
              <span className="leading-6 text-amber-200">{row.lowerFirst}</span>
              <span className="leading-6 text-zinc-400">{row.why}</span>
            </div>
          ))}
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
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Issue-specific guides
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Split PC problems before changing the car
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Some PC searches are not really graphics questions. Send players
              into the exact guide for visuals, save sync, online access, or
              input delay so this page stays useful without becoming bloated.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {pcIssueGuideLinks.map((link) => (
              <LocaleLink
                className="forza-card p-4"
                href={link.href}
                key={link.href}
              >
                <RouteIcon className="size-5 text-amber-300" />
                <h3 className="mt-4 text-base font-semibold text-zinc-100">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {link.note}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <ClipboardCheckIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                PC settings scorecard
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use this scorecard before declaring a setting better. A higher
                average FPS is not a win if braking points, heat, or input feel
                get worse.
              </p>
            </div>
            <div className="grid gap-2">
              {pcScorecardRows.map(([metric, note]) => (
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
