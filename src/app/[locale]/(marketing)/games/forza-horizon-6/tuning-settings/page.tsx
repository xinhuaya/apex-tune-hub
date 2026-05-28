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
  CarFrontIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  ListChecksIcon,
  RouteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/tuning-settings';
const title = 'Forza Horizon 6 Tuning Settings Guide - Apex Tune Hub';
const description =
  'Forza Horizon 6 tuning settings guide explaining upgrade order, tire pressure, gearing, alignment, anti-roll bars, springs, damping, aero, brakes, and differential settings.';

const settingsGroups = [
  {
    title: 'Tires',
    icon: GaugeIcon,
    intent:
      'Use pressure as a temperature and grip balance tool, not as the only fix for a bad build.',
    checks: [
      'Lower pressure can add grip but may dull response.',
      'Higher pressure can sharpen response but may reduce stability.',
      'Check front and rear balance before changing suspension.',
    ],
  },
  {
    title: 'Gearing',
    icon: RouteIcon,
    intent:
      'Use final drive for the whole speed range, then adjust individual gears only after testing launch and top speed.',
    checks: [
      'Shorter gearing helps launch and low-speed pull.',
      'Longer gearing helps top speed and reduces wheelspin.',
      'Drag, road, rally, and drift need different spacing.',
    ],
  },
  {
    title: 'Alignment',
    icon: SlidersHorizontalIcon,
    intent:
      'Use camber, toe, and caster to change how the car enters, holds, and exits a corner.',
    checks: [
      'Too much camber can hurt braking and straight-line grip.',
      'Toe changes response quickly, so move it in small steps.',
      'Caster can add steering feel without huge balance changes.',
    ],
  },
  {
    title: 'Anti-roll bars',
    icon: WrenchIcon,
    intent: 'Use ARBs as one of the fastest ways to tune mid-corner balance.',
    checks: [
      'Stiffer front usually adds understeer.',
      'Stiffer rear usually adds rotation.',
      'Fix one axle at a time so the result stays readable.',
    ],
  },
  {
    title: 'Springs and damping',
    icon: CarFrontIcon,
    intent:
      'Use ride height, spring rate, rebound, and bump to control weight transfer over bumps and transitions.',
    checks: [
      'Soft builds can grip but may feel lazy.',
      'Stiff builds can respond quickly but skip over rough roads.',
      'Damping should support the spring, not fight it.',
    ],
  },
  {
    title: 'Aero, brakes, and diff',
    icon: ListChecksIcon,
    intent:
      'Use these late in the tuning pass once the car has a clear role and stable baseline.',
    checks: [
      'Aero trades speed for corner confidence.',
      'Brake balance changes entry stability.',
      'Differential settings shape throttle rotation and exit grip.',
    ],
  },
];

const workflows = [
  {
    title: 'Upgrade planning',
    text: 'Start with class target, tire compound, drivetrain swap, and PI budget before fine-tuning sliders.',
    href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
  },
  {
    title: 'Road racing',
    text: 'Start with tires, alignment, ARBs, and aero. Leave gearing until the car can repeat clean laps.',
    href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
  },
  {
    title: 'Drift',
    text: 'Start with steering angle, differential, tire pressure, and gearing so initiation and recovery feel predictable.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
  },
  {
    title: 'Drag',
    text: 'Start with launch grip, first gear, final drive, and differential before chasing headline speed.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
  {
    title: 'Rally and dirt',
    text: 'Start with ride height, springs, damping, and gearing so the car survives bumps before adding power.',
    href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
  },
];

const followupLinks = [
  {
    title: 'Upgrade Order Guide',
    description:
      'Use this before slider tuning when the car still needs tires, weight, power, or drivetrain decisions.',
    href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
  },
  {
    title: 'Tune Calculator',
    description:
      'Generate a baseline before using this glossary to understand the slider direction.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    title: 'Tune Presets',
    description:
      'Use preset URLs when you need a shareable starting point for a class, drivetrain, and symptom.',
    href: '/tools/forza-horizon-6-tune-presets',
  },
  {
    title: 'Gear Ratio Calculator',
    description:
      'Move here when the car is stable but launch, shift recovery, or top speed still feels wrong.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
  {
    title: 'FH6 Car Database',
    description:
      'Attach tuned notes to specific cars once the baseline has been tested on a repeatable route.',
    href: '/games/forza-horizon-6/cars',
  },
];

const specializedSettingGuides = [
  {
    title: 'Tire pressure settings',
    description:
      'Use this when grip, temperature balance, response, or stability changes after tire compound choices.',
    href: '/games/forza-horizon-6/guides/tire-pressure-settings-guide',
  },
  {
    title: 'Alignment, camber, and toe',
    description:
      'Use this when turn-in, mid-corner hold, or straight-line stability needs smaller geometry changes.',
    href: '/games/forza-horizon-6/guides/alignment-camber-toe-settings',
  },
  {
    title: 'Anti-roll bar and suspension',
    description:
      'Use this when mid-corner balance, bumps, weight transfer, or ride height needs a focused checklist.',
    href: '/games/forza-horizon-6/guides/anti-roll-bar-suspension-settings',
  },
  {
    title: 'Aero and downforce',
    description:
      'Use this when S1 or S2 builds trade too much top speed for corner confidence, or vice versa.',
    href: '/games/forza-horizon-6/guides/aero-downforce-settings',
  },
  {
    title: 'Differential settings',
    description:
      'Use this when throttle rotation, exit grip, lift-off behavior, or AWD balance is the real problem.',
    href: '/games/forza-horizon-6/guides/differential-settings-guide',
  },
  {
    title: 'FWD tune settings',
    description:
      'Use this when front-drive cars need cleaner exits, less push, and better lift-off rotation.',
    href: '/games/forza-horizon-6/guides/best-fwd-tune-settings',
  },
  {
    title: 'RWD tune settings',
    description:
      'Use this when rear-drive cars need cleaner launches, smoother exits, and safer rotation under power.',
    href: '/games/forza-horizon-6/guides/best-rwd-tune-settings',
  },
  {
    title: 'Drift tune settings',
    description:
      'Use this when angle, snapback, throttle control, and transition rhythm matter more than lap time.',
    href: '/games/forza-horizon-6/guides/best-drift-tune-settings',
  },
  {
    title: 'S1 rally tune settings',
    description:
      'Use this when dirt and mixed-surface routes need bump control before more power.',
    href: '/games/forza-horizon-6/guides/best-s1-rally-tune-settings',
  },
  {
    title: 'Manual with clutch',
    description:
      'Use this when shift timing, missed shifts, or launch control matter more than slider changes.',
    href: '/games/forza-horizon-6/guides/manual-with-clutch-shifting',
  },
];

const sliderPriorityCards = [
  {
    title: 'Fast diagnosis sliders',
    body: 'Tire pressure, ARBs, final drive, brake balance, and diff can reveal whether the problem is grip, balance, or power delivery.',
    icon: GaugeIcon,
  },
  {
    title: 'Slow careful sliders',
    body: 'Camber, toe, damping, spring rate, and individual gears need smaller steps because they can hide the real problem.',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Late polish sliders',
    body: 'Aero, brake pressure, fine gear spacing, and route-specific diff changes should come after the car repeats clean tests.',
    icon: WrenchIcon,
  },
];

const tuningGuardrails = [
  'Choose the target class, tire compound, and swap direction before slider tuning.',
  'Write the route, class, drivetrain, and main symptom before tuning.',
  'Change one setting group, then retest the same corner, launch, or straight.',
  'Undo a change if it improves one section but breaks the car everywhere else.',
  'Move from general settings to car-specific pages only after repeatable testing.',
];

const tuningOrder = [
  {
    title: '1. Define the job',
    text: 'Write down race type, class, drivetrain, surface, upgrade direction, and the main problem before touching settings.',
  },
  {
    title: '2. Fix grip and balance',
    text: 'Use tire pressure, alignment, ARBs, springs, and damping until the car turns and brakes predictably.',
  },
  {
    title: '3. Tune power delivery',
    text: 'Use differential and gearing after the chassis has a direction. This keeps wheelspin and bogging easier to diagnose.',
  },
  {
    title: '4. Add route-specific polish',
    text: 'Use aero, brake balance, and individual gear changes only when a repeatable route section proves they are needed.',
  },
];

const symptomMap = [
  {
    symptom: 'Pushes wide before throttle',
    settings: 'Front tires, alignment, front/rear ARB balance, front aero',
    firstTest: 'Use one medium-speed entry corner and compare apex distance.',
  },
  {
    symptom: 'Pushes wide on exit',
    settings: 'Differential, lower gears, rear tire pressure, throttle style',
    firstTest:
      'Exit the same slow corner three times at half and full throttle.',
  },
  {
    symptom: 'Snaps oversteer on lift or braking',
    settings: 'Brake balance, rear damping, rear ARB, differential decel',
    firstTest: 'Brake in a straight line first, then add light trail braking.',
  },
  {
    symptom: 'Wheelspin on launch',
    settings: 'First gear, final drive, differential accel, tire pressure',
    firstTest:
      'Launch from the same marker and record spin before first shift.',
  },
  {
    symptom: 'Bounces or skips on rough roads',
    settings: 'Ride height, spring rate, bump, rebound, rally suspension',
    firstTest: 'Use one rough exit and watch whether the car lands settled.',
  },
  {
    symptom: 'Feels slow on straights',
    settings: 'Final drive, upper gears, aero, power-to-grip tradeoff',
    firstTest:
      'Check whether the car reaches top gear before the straight ends.',
  },
];

const sliderRiskMatrix = [
  {
    level: 'Low-risk first pass',
    settings: 'Final drive, tire pressure, brake balance',
    rule: 'Use these to diagnose a direction, then retest the same launch, corner, or braking zone.',
  },
  {
    level: 'Medium-risk balance pass',
    settings: 'ARBs, diff accel/decel, aero balance',
    rule: 'Move one axle or one differential value at a time so the car does not trade one problem for another.',
  },
  {
    level: 'High-risk fine pass',
    settings: 'Toe, damping, individual gears, spring rate',
    rule: 'Use smaller changes and keep a rollback note because these can mask the original issue.',
  },
];

const tuningTestLogRows = [
  ['Route section', 'Corner, straight, launch marker, or drift transition'],
  ['Before symptom', 'What the car did before the slider change'],
  ['Slider changed', 'One setting group and the direction moved'],
  ['After result', 'Keep, undo, or retest with a smaller change'],
  ['Next link', 'Calculator, preset, car page, or specialized guide'],
];

const faqs: FaqItem[] = [
  {
    question: 'What tuning setting should I change first in Forza Horizon 6?',
    answer:
      'Choose the class target and upgrade path first, then change the setting tied to the main symptom. Understeer usually starts with tires, alignment, ARBs, aero, or differential. Wheelspin usually starts with gearing, differential, tire pressure, and throttle-friendly suspension.',
  },
  {
    question: 'Should I copy every slider from a tune guide?',
    answer:
      'No. Use guides as a baseline, then test one change at a time on the same route. Car weight, drivetrain, tires, class, and controller or wheel setup can change what works.',
  },
  {
    question: 'Is tuning different for road, drift, rally, and drag builds?',
    answer:
      'Yes. Road builds need repeatable cornering, drift builds need angle and recovery, rally builds need bump control, and drag builds need launch grip and gear spacing.',
  },
];

const howToSteps: FaqItem[] = tuningOrder.map((step) => ({
  question: step.title,
  answer: step.text,
}));

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

export default function ForzaHorizon6TuningSettingsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Tuning Settings', path: pathname },
          ]),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildHowToJsonLd({
            title: 'How to tune Forza Horizon 6 settings in order',
            description:
              'A repeatable tuning workflow for matching FH6 car symptoms to the right setting group.',
            path: pathname,
            steps: howToSteps,
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 tuning settings follow-up pages',
            items: followupLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 specialized tuning setting guides',
            items: specializedSettingGuides.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 tuning slider risk matrix',
            items: sliderRiskMatrix.map((row) => ({
              name: row.level,
              path: pathname,
            })),
          }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Tuning glossary</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.76fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 tuning settings guide
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this page when a calculator gives you a baseline but you
                still need to understand what each FH6 tuning slider is trying
                to solve. Start with the car symptom, make one change, then
                retest the same route.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Open Tune Calculator
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/games/forza-horizon-6/guides">
                    Read FH6 Guides
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <SlidersHorizontalIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Baseline tuning rule
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Do not tune every slider at once. Pick the race type, identify
                the handling symptom, change the most relevant setting group,
                and keep a short note after each test run.
              </p>
              <div className="mt-5 grid gap-2">
                {tuningGuardrails.map((rule) => (
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
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Know which sliders deserve caution
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Some settings are useful for quick diagnosis. Others should wait
              until the car already has a clear baseline. This makes the guide
              safer for beginners and more useful as an internal link target.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sliderPriorityCards.map((card) => {
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

        <div className="mb-6">
          <p className="text-xs font-semibold uppercase text-cyan-300">
            Slider map
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            What each tuning setting is for
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {settingsGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="forza-card p-5" key={group.title}>
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-xl font-semibold">{group.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {group.intent}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-500">
                  {group.checks.map((check) => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Specialized guides
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Use a focused guide when one setting group is the real problem
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              These pages keep the tuning glossary from becoming a dead end.
              Move here when the broad setting group is known and the player
              needs a narrower checklist.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {specializedSettingGuides.map((link) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-amber-300/40 hover:bg-amber-300/10"
                href={link.href}
                key={link.href}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {link.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {link.description}
                </p>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Setup order
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              A repeatable FH6 tuning workflow
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The order matters because every slider changes how you interpret
              the next test. Start broad, then move toward route-specific
              changes after the car already has a clear baseline.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {tuningOrder.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={item.title}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Follow-up routes
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Where this settings guide should send players next
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The glossary works as the middle layer: calculator first, setting
              group second, then a preset, car page, or specialized tool once
              the problem is clearer.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {followupLinks.map((link) => (
              <LocaleLink
                className="forza-card p-4"
                href={link.href}
                key={link.href}
              >
                <ArrowRightIcon className="size-5 text-fuchsia-300" />
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
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Symptom map
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Match the problem to the setting group
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Use this table when a tune feels wrong but you are not sure which
              slider to touch. Pick the closest symptom, test the listed group,
              then keep or undo the change based on the same route section.
            </p>
          </div>
          <div className="mt-5 grid gap-3">
            {symptomMap.map((item) => (
              <article
                className="grid gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 md:grid-cols-[0.8fr_1fr_1fr]"
                key={item.symptom}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {item.symptom}
                </h3>
                <p className="text-sm leading-6 text-cyan-100">
                  {item.settings}
                </p>
                <p className="text-sm leading-6 text-zinc-400">
                  {item.firstTest}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <ClipboardCheckIcon className="size-6 text-cyan-300" />
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Tuning test log template
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Record enough detail to know whether a slider worked
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A tuning guide becomes more useful when the player can capture the
              exact route section, before symptom, slider change, result, and
              next link instead of relying on memory.
            </p>
          </div>
          <div className="forza-panel overflow-hidden">
            <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.7fr_1.3fr]">
              <span>Field</span>
              <span>What to write</span>
            </div>
            {tuningTestLogRows.map(([field, note]) => (
              <div
                className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.7fr_1.3fr]"
                key={field}
              >
                <span className="font-semibold text-zinc-50">{field}</span>
                <span className="text-zinc-400">{note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {sliderRiskMatrix.map((row) => (
            <article
              className="rounded-md border border-white/10 bg-white/[0.03] p-4"
              key={row.level}
            >
              <h3 className="text-base font-semibold text-zinc-100">
                {row.level}
              </h3>
              <p className="mt-2 text-sm leading-6 text-cyan-100">
                {row.settings}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{row.rule}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="flex items-center gap-3">
            <RouteIcon className="size-5 text-amber-300" />
            <h2 className="text-xl font-semibold">
              Tune by event type, not by habit
            </h2>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-4">
            {workflows.map((workflow) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40"
                href={workflow.href}
                key={workflow.title}
              >
                <strong className="block text-zinc-100">
                  {workflow.title}
                </strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {workflow.text}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Tuning settings FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
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
        description="Get practical FH6 tuning notes, calculator updates, and new problem guides as the setup library expands."
        title="Follow the FH6 tuning workflow"
      />
    </main>
  );
}
