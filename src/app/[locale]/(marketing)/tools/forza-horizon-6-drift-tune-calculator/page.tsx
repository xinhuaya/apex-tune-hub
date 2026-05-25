import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ForzaDriftTuneCalculator } from '@/components/tools/forza-tuning-calculators';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  CircleGaugeIcon,
  RotateCcwIcon,
  SlidersHorizontalIcon,
  TimerResetIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-horizon-6-drift-tune-calculator';
const title = 'Forza Horizon 6 Drift Tune Calculator - Apex Tune Hub';
const description =
  'Create a baseline Forza Horizon 6 drift tune direction for RWD and AWD cars with clear adjustment notes.';

const driftWorkflow = [
  {
    title: 'Choose RWD or AWD',
    description:
      'RWD usually teaches angle and throttle control. AWD is easier for speed zones and recovery, but needs restraint so it does not pull straight.',
    icon: RotateCcwIcon,
  },
  {
    title: 'Match tire grip to power',
    description:
      'Low-power cars need enough grip to stay moving. High-power builds often need softer first changes before adding more steering angle.',
    icon: CircleGaugeIcon,
  },
  {
    title: 'Fix the drift symptom',
    description:
      'Spins out, no angle, bogs down, snapback, and slippery exits all point to different first settings. Pick one issue first.',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Run one repeatable test',
    description:
      'Use the same corner or zone twice, change one group of settings, then save the preset URL when it starts to feel predictable.',
    icon: TimerResetIcon,
  },
];

const driftRelatedLinks = [
  {
    title: 'Japan Drift Setup Guide',
    description:
      'Use the longer drift setup guide when you want a full launch-period tuning plan.',
    href: '/games/forza-horizon-6/guides/japan-drift-setup',
  },
  {
    title: 'Best Drift Cars',
    description:
      'Pair the calculator with candidate cars for angle, recovery, and speed zones.',
    href: '/games/forza-horizon-6/best-drift-cars',
  },
  {
    title: 'Gear Ratio Calculator',
    description:
      'After the car rotates cleanly, tune gear spacing so it does not bog down during transitions.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
];

const driftFaqs = [
  {
    question: 'Is RWD or AWD better for Forza Horizon 6 drifting?',
    answer:
      'RWD is usually better for learning angle, throttle control, and clean transitions. AWD can be easier for high-speed drift zones because it recovers quickly, but it can also pull the car straight if the differential and gearing are too aggressive.',
  },
  {
    question: 'What should I change first if my drift car spins out?',
    answer:
      'Start with stability before chasing more angle. Reduce snapback with smoother differential behavior, less aggressive rear response, and a test pass through the same corner. Big changes to several sliders at once make the problem harder to diagnose.',
  },
  {
    question: 'Why does my FH6 drift tune bog down mid-corner?',
    answer:
      'Bogs usually come from gearing, not enough usable torque, or too much grip for the power level. Shorten the relevant gear range gradually and test whether the car stays in the power band during transitions.',
  },
  {
    question: 'Can I save drift tune calculator presets?',
    answer:
      'Yes. The calculator stores selected options in the URL and can save recent presets locally on the device, so you can compare RWD, AWD, tire grip, power level, and symptom fixes.',
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

export default function ForzaHorizon6DriftTuneCalculatorPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: pathname },
            { name: 'FH6 Drift Tune Calculator', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(driftFaqs),
        ]}
      />
      <ForzaDriftTuneCalculator />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <p className="forza-chip">Drift setup workflow</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Build angle without losing control
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Drift tuning is easiest when you separate rotation, grip,
              gearing, and recovery. The calculator gives you a first direction
              for the exact problem you feel in the car, then you can test a
              short section and save the preset URL before refining.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {driftWorkflow.map((step) => {
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
            <p className="forza-chip">Next drift layer</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Move from calculator output to a tested drift build
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A drift setup is never only one slider. Use the calculator to
              diagnose the main issue, then move to a guide, candidate car list,
              or gearing pass when the car starts holding angle predictably.
            </p>
          </div>
          <div className="grid gap-3">
            {driftRelatedLinks.map((link) => (
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
          <p className="forza-chip">Drift tune FAQ</p>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {driftFaqs.map((faq) => (
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
        description="Get new drift presets, car candidates, and setup notes for RWD and AWD builds."
        title="Follow the FH6 drift tune updates"
      />
    </main>
  );
}
