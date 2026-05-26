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
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  GaugeIcon,
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
