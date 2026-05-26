import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
import { ForzaTuneCalculator } from '@/components/tools/forza-tuning-calculators';
import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import {
  CarFrontIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  RouteIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-horizon-6-tune-calculator';
const title = 'Forza Horizon 6 Tune Calculator - Apex Tune Hub';
const description =
  'Generate baseline Forza Horizon 6 tuning directions for road, street, dirt, rally, drift, and drag builds.';

const workflowSteps = [
  {
    title: 'Pick the event type',
    description:
      'Road, street, dirt, rally, drag, and drift builds need different first moves. Start with the route before touching every slider.',
    icon: RouteIcon,
  },
  {
    title: 'Set drivetrain and class',
    description:
      'AWD, RWD, FWD, A class, S1, and S2 all react differently. The calculator keeps the first pass tied to the car layout.',
    icon: CarFrontIcon,
  },
  {
    title: 'Fix one handling issue',
    description:
      'Choose understeer, oversteer, wheelspin, instability, or braking trouble. One clear symptom beats random slider changes.',
    icon: GaugeIcon,
  },
  {
    title: 'Save and test the baseline',
    description:
      'Copy notes, save the preset locally, then run a repeatable test route before making car-specific changes.',
    icon: ClipboardCheckIcon,
  },
];

const relatedLinks = [
  {
    title: 'Drift Tune Calculator',
    description: 'Use this when the build is about angle, transition, and recovery.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
  },
  {
    title: 'Gear Ratio Calculator',
    description: 'Tune final drive and gear spacing after the handling baseline feels stable.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
  {
    title: 'Tune Codes Hub',
    description:
      'Use shareable preset URLs and tune-code workflow notes without pretending untested codes are final.',
    href: '/tools/forza-horizon-6-tune-codes',
  },
  {
    title: 'FH6 Car Database',
    description: 'Pair calculator output with car pages, strengths, and launch notes.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    title: 'Tuning Settings Guide',
    description:
      'Check what each slider changes before turning a baseline into a car-specific tune.',
    href: '/games/forza-horizon-6/tuning-settings',
  },
];

const tuneCalculatorFaqs = [
  {
    question: 'Is this Forza Horizon 6 tune calculator car-specific?',
    answer:
      'It creates a baseline tuning direction based on event type, drivetrain, class, handling issue, and driving style. Use it as the first pass, then refine around the specific car, tire compound, route, and controller or wheel setup.',
  },
  {
    question: 'Should I use the tune calculator before or after upgrades?',
    answer:
      'Use it after you know the target class and drivetrain. Upgrade choices change weight, power, tires, and aero, so the most useful baseline comes after the build direction is set.',
  },
  {
    question: 'Can the calculator produce shareable FH6 tune presets?',
    answer:
      'Yes. The calculator keeps selected options in the URL, so you can copy a preset link or save it locally on the device for quick comparison.',
  },
  {
    question: 'What is the best first setting to change in FH6 tuning?',
    answer:
      'Start with the main symptom. For understeer, look at tire pressure, ARBs, differential, and aero direction. For wheelspin, focus on gearing, differential, and throttle-friendly suspension before chasing top speed.',
  },
];

const tuneHowToSteps = workflowSteps.map((step) => ({
  question: step.title,
  answer: step.description,
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

export default function ForzaHorizon6TuneCalculatorPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools/forza-horizon-6-tune-calculator' },
            { name: 'FH6 Tune Calculator', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildSoftwareApplicationJsonLd({
            title,
            description,
            path: pathname,
            featureList: [
              'FH6 baseline tune recommendations',
              'Shareable preset URLs',
              'Local saved preset history',
              'Road, street, dirt, rally, drag, and drift setup paths',
            ],
          }),
          buildHowToJsonLd({
            title: 'How to use the Forza Horizon 6 tune calculator',
            description:
              'Use Apex Tune Hub to generate a practical FH6 baseline tune before car-specific testing.',
            path: pathname,
            steps: tuneHowToSteps,
          }),
          buildFaqJsonLd(tuneCalculatorFaqs),
        ]}
      />
      <ForzaTuneCalculator />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <p className="forza-chip">How to use it</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              A faster first pass for FH6 setups
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The calculator is built for the early tuning loop: pick the race
              type, describe the car, fix the main symptom, then test one
              repeatable baseline. It is not a magic final tune code. It is the
              shortest route from a messy build to a setup that has a direction.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {workflowSteps.map((step) => {
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
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="forza-chip">Preset shortcuts</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Popular tune presets
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
              Open a preset page for searchable setup notes, or jump straight
              into the calculator with the right values already selected.
            </p>
          </div>
          <Button asChild variant="outline" className="rounded-md">
            <LocaleLink href="/tools/forza-horizon-6-tune-presets">
              View all presets
            </LocaleLink>
          </Button>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {forzaTunePresets.slice(0, 3).map((preset) => (
            <ForzaPresetCard key={preset.slug} preset={preset} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="forza-chip">Next tune layer</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Turn the baseline into a car-specific setup
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Once the first pass feels stable, move into a focused tool or a
              car page. This is where Apex Tune Hub becomes useful over time:
              calculator output, vehicle notes, weekly playlist targets, and
              saved preset links all point back to one tuning workflow.
            </p>
          </div>
          <div className="grid gap-3">
            {relatedLinks.map((link) => (
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
          <p className="forza-chip">Tune calculator FAQ</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {tuneCalculatorFaqs.map((faq) => (
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
        description="Get new shareable FH6 tune presets, calculator updates, and tested car notes as the garage grows."
        title="Save the next batch of FH6 tune presets"
      />
    </main>
  );
}
