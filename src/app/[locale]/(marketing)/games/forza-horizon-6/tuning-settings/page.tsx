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
  CarFrontIcon,
  GaugeIcon,
  ListChecksIcon,
  RouteIcon,
  SlidersHorizontalIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/tuning-settings';
const title = 'Forza Horizon 6 Tuning Settings Guide - Apex Tune Hub';
const description =
  'Forza Horizon 6 tuning settings guide explaining tire pressure, gearing, alignment, anti-roll bars, springs, damping, aero, brakes, and differential settings.';

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
    intent:
      'Use ARBs as one of the fastest ways to tune mid-corner balance.',
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

const tuningOrder = [
  {
    title: '1. Define the job',
    text: 'Write down race type, class, drivetrain, surface, and the main problem before touching settings.',
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
    firstTest: 'Exit the same slow corner three times at half and full throttle.',
  },
  {
    symptom: 'Snaps oversteer on lift or braking',
    settings: 'Brake balance, rear damping, rear ARB, differential decel',
    firstTest: 'Brake in a straight line first, then add light trail braking.',
  },
  {
    symptom: 'Wheelspin on launch',
    settings: 'First gear, final drive, differential accel, tire pressure',
    firstTest: 'Launch from the same marker and record spin before first shift.',
  },
  {
    symptom: 'Bounces or skips on rough roads',
    settings: 'Ride height, spring rate, bump, rebound, rally suspension',
    firstTest: 'Use one rough exit and watch whether the car lands settled.',
  },
  {
    symptom: 'Feels slow on straights',
    settings: 'Final drive, upper gears, aero, power-to-grip tradeoff',
    firstTest: 'Check whether the car reaches top gear before the straight ends.',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'What tuning setting should I change first in Forza Horizon 6?',
    answer:
      'Change the setting tied to the main symptom. Understeer usually starts with tires, alignment, ARBs, aero, or differential. Wheelspin usually starts with gearing, differential, tire pressure, and throttle-friendly suspension.',
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
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
