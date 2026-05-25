import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ForzaGearRatioCalculator } from '@/components/tools/forza-tuning-calculators';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  FlagIcon,
  GaugeIcon,
  ListChecksIcon,
  TimerIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-horizon-6-gear-ratio-calculator';
const title = 'Forza Horizon 6 Gear Ratio Calculator - Apex Tune Hub';
const description =
  'Tune Forza Horizon 6 final drive and gear spacing around acceleration, top speed, drift, rally, and balanced builds.';

const gearWorkflow = [
  {
    title: 'Start with the route',
    description:
      'A highway top-speed setup and a city sprint setup need different gearing. Pick the event type before changing final drive.',
    icon: FlagIcon,
  },
  {
    title: 'Choose the priority',
    description:
      'Acceleration, balanced gearing, and top speed all trade against each other. The calculator keeps that trade-off explicit.',
    icon: GaugeIcon,
  },
  {
    title: 'Fix one symptom',
    description:
      'Limiter, unused top gear, slow launch, bogging after shifts, and wheelspin each point to a different first move.',
    icon: ListChecksIcon,
  },
  {
    title: 'Test final drive first',
    description:
      'Change final drive before editing every gear. Only touch individual gears if one part of the route still feels wrong.',
    icon: TimerIcon,
  },
];

const gearRelatedLinks = [
  {
    title: 'Gear Ratio Guide',
    description:
      'Read the deeper FH6 gearing guide for final drive, launch, limiter, and shift-gap testing.',
    href: '/games/forza-horizon-6/guides/gear-ratio-guide',
  },
  {
    title: 'Tune Calculator',
    description:
      'Use the main tune calculator first if the car still has braking, balance, or traction problems.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    title: 'Road Racing Cars',
    description:
      'Pair gearing changes with road candidates that can use longer straights and stable exits.',
    href: '/games/forza-horizon-6/best-road-racing-cars',
  },
];

const gearFaqs = [
  {
    question: 'What does final drive do in Forza Horizon 6 tuning?',
    answer:
      'Final drive moves the whole gearbox shorter or longer. Shorter gearing improves response and acceleration but can hit the limiter early. Longer gearing gives more room for speed but can make the car feel lazy after shifts.',
  },
  {
    question: 'Should I tune final drive or individual gears first?',
    answer:
      'Tune final drive first because it changes the whole range cleanly. After that, adjust individual gears only if a specific shift, launch, or top-speed section still feels wrong.',
  },
  {
    question: 'Why does my car bog down after shifting?',
    answer:
      'Bogging usually means the gear gap is too wide or the final drive is too long for the route. Shorten the affected range gradually and test whether the car stays in the power band after the shift.',
  },
  {
    question: 'Is top speed always the best gearing target?',
    answer:
      'No. A car that has a bigger highway speed number can still lose a race if it exits corners slowly or never reaches top gear. Match gearing to the longest useful straight in the actual event.',
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

export default function ForzaHorizon6GearRatioCalculatorPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: pathname },
            { name: 'FH6 Gear Ratio Calculator', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(gearFaqs),
        ]}
      />
      <ForzaGearRatioCalculator />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <p className="forza-chip">Gearing workflow</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Tune gearing around the route, not the speed number
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Gear ratio tuning is about keeping the engine useful where the
              race is won: launch, corner exits, shift recovery, and the longest
              useful straight. The calculator gives a first final-drive
              direction before you start editing every gear one by one.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {gearWorkflow.map((step) => {
              const Icon = step.icon;

              return (
                <article className="forza-card p-4" key={step.title}>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-zinc-50">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="forza-chip">Next gearing layer</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Turn a gearing baseline into lap-time testing
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Once the calculator gives a direction, run the same start, corner
              exit, or straight twice. Keep the setting only if it improves the
              part of the route you are actually trying to fix.
            </p>
          </div>
          <div className="grid gap-3">
            {gearRelatedLinks.map((link) => (
              <LocaleLink
                className="forza-card group block p-4"
                href={link.href}
                key={link.href}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-base font-semibold text-zinc-50">
                    {link.title}
                  </span>
                  <span className="text-cyan-200 transition group-hover:translate-x-1">
                    -&gt;
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-6 text-zinc-400">
                  {link.description}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <p className="forza-chip">Gear ratio FAQ</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {gearFaqs.map((faq) => (
              <article className="forza-card p-4" key={faq.question}>
                <h2 className="text-base font-semibold text-zinc-50">
                  {faq.question}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get gearing presets, top-speed tests, and launch tuning notes as new FH6 cars are added."
        title="Get the next FH6 gearing update"
      />
    </main>
  );
}
