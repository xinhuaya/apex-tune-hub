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
  ClipboardCheckIcon,
  GaugeIcon,
  GitBranchIcon,
  Gamepad2Icon,
  ListChecksIcon,
  RouteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  WrenchIcon,
  ZapIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const controllerRows = [
  [
    'Steering',
    'Linear and predictable',
    'Keep steering calm enough for road racing before testing drift angle.',
  ],
  ['Throttle', 'Smooth exits', 'Helps AWD launches and high-power S1 builds.'],
  [
    'Braking',
    'Stable trail braking',
    'Use car setup changes if only one car locks or pushes wide.',
  ],
  [
    'Vibration',
    'Readable grip loss',
    'Keep enough feedback to notice tire slip without distracting rumble.',
  ],
];

const controllerTestLinks = [
  {
    title: 'Road racing test',
    href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
    note: 'Use this route style to test steering, braking, and corner exits.',
  },
  {
    title: 'Drift test',
    href: '/games/forza-horizon-6/guides/japan-drift-setup',
    note: 'Use this when throttle and countersteer feel too sharp or too slow.',
  },
  {
    title: 'Handling fixes',
    href: '/games/forza-horizon-6/guides',
    note: 'Open the guide stack when a problem follows one car instead of every car.',
  },
];

const controllerFeelProfiles = [
  {
    title: 'Road consistency',
    body: 'Use smooth steering, predictable throttle, and stable braking before comparing A and S1 road tunes.',
    icon: RouteIcon,
  },
  {
    title: 'Drift recovery',
    body: 'Use readable countersteer, throttle modulation, and vibration cues before changing every drift slider.',
    icon: ZapIcon,
  },
  {
    title: 'Weekly reliability',
    body: 'Use conservative input feel when event restrictions, traffic, and weather make retries expensive.',
    icon: ListChecksIcon,
  },
];

const controllerDeviceRoutes = [
  {
    title: 'Standard Xbox controller',
    priority: 'Smooth steering, throttle, and braking',
    body: 'Use this as the default path for road racing, weekly events, and general car testing before tuning one vehicle.',
    icon: Gamepad2Icon,
  },
  {
    title: 'Elite / pro controller',
    priority: 'Trigger control and consistent inputs',
    body: 'Track paddle layout, trigger stops, and sensitivity choices so hardware changes do not get mistaken for tune changes.',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Handheld controller layout',
    priority: 'Stable inputs after frame pacing',
    body: 'Use this when Steam Deck or handheld performance is already stable but steering, braking, or drift recovery still feels late.',
    icon: GaugeIcon,
  },
  {
    title: 'Drift-focused setup',
    priority: 'Countersteer and throttle recovery',
    body: 'Use this when transitions, snapback, or wheelspin are the remaining problem after basic road control feels predictable.',
    icon: ZapIcon,
  },
];

const controllerPriorityRows = [
  {
    group: 'Steering response',
    firstMove:
      'Calm steering before changing alignment or anti-roll bars on every car.',
    why: 'Twitchy global steering makes stable road tunes feel worse than they are.',
  },
  {
    group: 'Throttle modulation',
    firstMove:
      'Smooth trigger response before chasing wheelspin with differential or tire-pressure changes.',
    why: 'High-power AWD and RWD builds can feel broken when throttle input is too abrupt.',
  },
  {
    group: 'Brake feel',
    firstMove:
      'Check braking input and frame pacing before changing brake balance on one car.',
    why: 'Delayed braking can be a device or performance issue, not a setup issue.',
  },
  {
    group: 'Vibration and feedback',
    firstMove:
      'Keep enough vibration to read tire slip, but reduce distracting rumble.',
    why: 'Readable grip loss helps with both road exits and drift recovery.',
  },
  {
    group: 'Assist and camera consistency',
    firstMove:
      'Lock assists, camera, route, and class before comparing controller changes.',
    why: 'Changing multiple variables makes it impossible to tell whether controls or tune fixed the car.',
  },
];

const controllerSymptomRows = [
  {
    symptom: 'Every car feels twitchy',
    likelyCause: 'Steering response or deadzone',
    firstMove:
      'Calm steering response first, then retest before changing ARBs or alignment.',
    href: '/settings/forza-horizon-6',
  },
  {
    symptom: 'Throttle exits feel abrupt',
    likelyCause: 'Trigger modulation or tune grip',
    firstMove:
      'Smooth throttle input, then move to wheelspin tuning if only one car still spins.',
    href: '/games/forza-horizon-6/guides/fix-wheelspin',
  },
  {
    symptom: 'Braking feels inconsistent',
    likelyCause: 'Brake input, FPS, or car balance',
    firstMove:
      'Check frame pacing and braking input before changing brake balance on a single car.',
    href: '/settings/forza-horizon-6-pc',
  },
  {
    symptom: 'Drift snapback is hard to catch',
    likelyCause: 'Steering speed or drift setup',
    firstMove:
      'Test countersteer feel, then use the drift calculator for car-specific recovery.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
  },
];

const controllerTestLoop = [
  'Use the same car, class, assist settings, camera, and route for each test.',
  'Change one input group at a time: steering, throttle, braking, or vibration.',
  'If every car improves, keep the controller change; if only one car improves, tune the car.',
  'Save the final path as controller settings plus tune preset notes.',
];

const controllerValidationSteps = [
  {
    question: '1. Lock the test setup',
    answer:
      'Use the same car, class, assists, camera, route, and device before changing controller settings.',
  },
  {
    question: '2. Change one input group',
    answer:
      'Adjust steering, throttle, braking, or vibration one group at a time, then repeat the same route.',
  },
  {
    question: '3. Separate every-car issues from one-car issues',
    answer:
      'Keep the controller change if every car improves. Move to tuning if only one car still understeers, oversteers, or spins.',
  },
  {
    question: '4. Save the fix path',
    answer:
      'Record controller setting, car, tune preset, and route so weekly events and future builds can reuse the setup.',
  },
];

const controllerScorecardRows = [
  [
    'Steering precision',
    'Can the car hold a line without constant correction?',
  ],
  ['Throttle exits', 'Can high-power cars launch and exit corners smoothly?'],
  ['Brake confidence', 'Can you trail brake without sudden lock or delay?'],
  ['Drift recovery', 'Can you catch snapback and hold angle repeatedly?'],
  [
    'Weekly reliability',
    'Does the setup stay calm in traffic, weather, and retries?',
  ],
];

const controllerNextLinks = [
  {
    title: 'Settings Hub',
    href: '/settings/forza-horizon-6',
    note: 'Return here when the problem may be PC, Steam Deck, wheel, or platform related.',
  },
  {
    title: 'Tune Calculator',
    href: '/tools/forza-horizon-6-tune-calculator',
    note: 'Use this when controller feel is stable and one car still has a handling symptom.',
  },
  {
    title: 'Drift Calculator',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
    note: 'Use this when angle, countersteer, or recovery is the remaining issue.',
  },
  {
    title: 'Wheel Settings',
    href: '/settings/forza-horizon-6-wheel',
    note: 'Use this if a wheel rig needs force feedback and steering-lock tuning instead.',
  },
];

const controllerIssueGuideLinks = [
  {
    title: 'Controller not working',
    href: '/games/forza-horizon-6/guides/controller-not-working-checklist',
    note: 'Use when detection, double input, wireless delay, Steam Input, or bindings are the real blocker.',
  },
  {
    title: 'Controller drift settings',
    href: '/games/forza-horizon-6/guides/controller-drift-settings',
    note: 'Use when throttle control, countersteer, vibration, and drift recovery need a focused setup path.',
  },
  {
    title: 'Keyboard settings',
    href: '/games/forza-horizon-6/guides/best-keyboard-settings',
    note: 'Use when the player is on digital inputs and needs keybind, throttle-tap, or manual-shift guidance.',
  },
  {
    title: 'Input lag settings',
    href: '/games/forza-horizon-6/guides/input-lag-settings',
    note: 'Use when the controller works but response feels late because of display, FPS, wireless, or overlays.',
  },
];

const pathname = '/settings/forza-horizon-6-controller';
const title = 'Best Forza Horizon 6 Controller Settings - Apex Tune Hub';
const description =
  'Forza Horizon 6 controller settings guide for steering, throttle, braking, vibration, and stable driving feel.';
const controllerFaqs: FaqItem[] = [
  {
    question:
      'What controller setting should I change first in Forza Horizon 6?',
    answer:
      'Start with steering and throttle response. If every car feels twitchy or hard to catch, adjust controls before changing individual tunes.',
  },
  {
    question: 'Should I fix understeer with controller settings or tuning?',
    answer:
      'If only one car pushes wide, fix the tune. If every car feels delayed or too sharp, adjust controller steering feel first.',
  },
  {
    question: 'Are controller settings better than wheel settings for FH6?',
    answer:
      'Controller settings are easier for most players and work well for road, drift, and weekly events. Wheel settings can feel better after a dedicated force feedback profile.',
  },
  {
    question: 'Should I change controller deadzones before tuning a car?',
    answer:
      'Yes, if every car feels twitchy, delayed, or inconsistent. Tune the car only after the controller feels predictable across multiple vehicles.',
  },
  {
    question: 'What is the best controller test route for FH6?',
    answer:
      'Use one road section with braking zones, one high-speed section, and one drift or low-grip section while keeping the same car and assists.',
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

export default function ForzaHorizon6ControllerSettingsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Settings', path: pathname },
            { name: 'Controller Settings', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 controller settings next steps',
            items: controllerNextLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 controller issue guides',
            items: controllerIssueGuideLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildHowToJsonLd({
            title: 'How to test Forza Horizon 6 controller settings',
            description:
              'A repeatable controller testing workflow for FH6 steering, throttle, braking, vibration, and tuning decisions.',
            path: pathname,
            steps: controllerValidationSteps,
          }),
          buildFaqJsonLd(controllerFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Controller setup</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best Forza Horizon 6 controller settings
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Controller settings are the most accessible setup page for most
                players. Start with predictable inputs, then use tune changes to
                fix car behavior rather than masking every problem in controls.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-drift-tune-calculator">
                    Drift Tune Tool
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/settings/forza-horizon-6-wheel">
                    Wheel Settings
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <Gamepad2Icon className="size-7 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">Simple rule</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Change controls when every car feels wrong. Change the tune when
                one car feels wrong.
              </p>
              <div className="mt-5 grid gap-2">
                {controllerTestLoop.map((step) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={step}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-fuchsia-300" />
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
            <GitBranchIcon className="size-6 text-fuchsia-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Pick the controller path first
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Controller advice gets messy when hardware, assists, and tuning
              are mixed together. Start with the device path, then move into a
              single input group.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {controllerDeviceRoutes.map((route) => {
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
                    {route.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mb-10 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <GaugeIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Choose controller feel by use case
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Controller settings should make inputs readable before the car
              tune gets blamed. Pick a use case, run the same route, then move
              to tuning only if one car remains the problem.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {controllerFeelProfiles.map((profile) => {
              const Icon = profile.icon;

              return (
                <article className="forza-card p-4" key={profile.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {profile.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {profile.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_1fr_1.4fr]">
            <span>Control</span>
            <span>Goal</span>
            <span>Note</span>
          </div>
          {controllerRows.map(([control, goal, note]) => (
            <div
              key={control}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_1fr_1.4fr]"
            >
              <span className="font-semibold text-zinc-50">{control}</span>
              <span className="text-amber-200">{goal}</span>
              <span className="text-zinc-400">{note}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="forza-card p-5">
            <SlidersHorizontalIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Tuning link</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Link controller issues to tune symptoms: wheelspin, unstable
              braking, oversteer, understeer, and poor top speed.
            </p>
          </article>
          <article className="forza-card p-5">
            <WrenchIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">Testing note</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Test with assists, input device, camera, and car class recorded so
              the page can become more useful over time.
            </p>
          </article>
        </div>

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.85fr_1.15fr_1.2fr]">
            <span>Input group</span>
            <span>First move</span>
            <span>Why it matters</span>
          </div>
          {controllerPriorityRows.map((row) => (
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
            <span>Controller symptom</span>
            <span>Likely cause</span>
            <span>First move</span>
          </div>
          {controllerSymptomRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.85fr_0.75fr_1.4fr]"
              href={row.href}
              key={row.symptom}
            >
              <span className="font-semibold text-zinc-50">{row.symptom}</span>
              <span className="text-amber-200">{row.likelyCause}</span>
              <span className="leading-6 text-zinc-400">{row.firstMove}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <ClipboardCheckIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Controller scorecard
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Judge the change by driving feel, not just by whether the car
                survives one lap. A good controller profile should make several
                car types easier to read.
              </p>
            </div>
            <div className="grid gap-2">
              {controllerScorecardRows.map(([metric, note]) => (
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
              Where to go after controller feel is stable
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Once every-car input problems are ruled out, route the remaining
              issue into the right tuning or device page.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {controllerNextLinks.map((item) => (
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
          {controllerTestLinks.map((item) => (
            <LocaleLink
              className="forza-card p-5"
              href={item.href}
              key={item.href}
            >
              <Gamepad2Icon className="size-5 text-amber-300" />
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Input troubleshooting
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Route input problems before blaming the tune
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Controller pages pull in broad traffic, so this block separates
              detection, drift feel, keyboard control, and input lag into
              focused guides with clearer next steps.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {controllerIssueGuideLinks.map((item) => (
              <LocaleLink
                className="forza-card p-4"
                href={item.href}
                key={item.href}
              >
                <WrenchIcon className="size-5 text-cyan-300" />
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

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {controllerFaqs.map((faq) => (
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
        description="Get FH6 controller settings updates, drift input notes, and tuning workflow links."
        title="Follow FH6 controller settings updates"
      />
    </main>
  );
}
