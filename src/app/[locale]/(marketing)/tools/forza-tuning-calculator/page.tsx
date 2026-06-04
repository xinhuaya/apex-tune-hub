import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ForzaHomeTuneWorkbench } from '@/components/tools/forza-home-tune-workbench';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  CarFrontIcon,
  GaugeIcon,
  LinkIcon,
  ListChecksIcon,
  RouteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-tuning-calculator';
const title = 'Forza Tuning Calculator - Apex Tune Hub';
const description =
  'Use a Forza tuning calculator workflow for FH6 setup baselines, FH5-style tuning problems, gear ratios, tune codes, drift builds, and best-car handoffs.';

const semrushSignals = [
  {
    query: 'forza tuning calculator',
    takeaway: 'Generic tool intent with low difficulty. Use this page.',
    handoff: 'Start with the FH6 workbench',
  },
  {
    query: 'forza horizon 5 tuning calculator',
    takeaway: 'Evergreen FH5 search behavior still describes tuning demand.',
    handoff: 'Explain compatibility, then route to current tools',
  },
  {
    query: 'forza horizon 5 best cars',
    takeaway: 'Higher-volume car intent should become role-based car pages.',
    handoff: 'Best cars hub and tune presets',
  },
  {
    query: 'forza horizon 5 tune codes',
    takeaway: 'Tune-code searches need code workflow pages, not fake codes.',
    handoff: 'Tune codes hub and shareable presets',
  },
];

const toolRoutes = [
  {
    title: 'FH6 Tune Calculator',
    href: '/tools/forza-horizon-6-tune-calculator',
    description:
      'Choose race type, drivetrain, class, problem, and style to generate a first setup pass.',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Gear Ratio Calculator',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
    description:
      'Use final drive and gear spacing notes for launch, bogging, and top speed.',
    icon: ListChecksIcon,
  },
  {
    title: 'Drift Tune Calculator',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
    description:
      'Use angle, recovery, transition, and power-delivery prompts for drift builds.',
    icon: GaugeIcon,
  },
  {
    title: 'Tune Codes Hub',
    href: '/tools/forza-horizon-6-tune-codes',
    description:
      'Track tune-code workflow, shareable presets, and code-readiness rules.',
    icon: LinkIcon,
  },
];

const calculatorWorkflow = [
  {
    step: '01',
    title: 'Pick the game and role',
    body: 'FH6 is the active calculator surface. FH5 search terms are useful because they show what players still want: best cars, drift setups, tune codes, and gear help.',
  },
  {
    step: '02',
    title: 'Choose the first symptom',
    body: 'Understeer, oversteer, wheelspin, slow launch, bad braking, or no top speed should decide the first setup pass.',
  },
  {
    step: '03',
    title: 'Open the focused tool',
    body: 'Use the main calculator for handling, the gear tool for launch and top speed, and the drift tool for angle and recovery.',
  },
  {
    step: '04',
    title: 'Save the test note',
    body: 'Copy the baseline, run one route twice, and only then move into car-specific presets or tune-code pages.',
  },
];

const faqItems = [
  {
    question: 'Is this a Forza Horizon 5 tuning calculator?',
    answer:
      'The live calculator is built for the FH6 workflow, but this page uses FH5 search demand to organize stable Forza tuning problems: gear ratios, drift setups, tune codes, best cars, oversteer, and understeer.',
  },
  {
    question: 'Why not make separate FH5 and FH6 tools immediately?',
    answer:
      'Apex Tune Hub is being built as a wider racing setup hub. The first product is the FH6 calculator; broader Forza pages should route players into the same tested workflow until separate data sets justify their own tools.',
  },
  {
    question: 'What should I open first?',
    answer:
      'Open the FH6 Tune Calculator first if you have a handling or upgrade problem. Use the Gear Ratio Calculator when launch, shift spacing, or top speed is the main issue.',
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

export default function ForzaTuningCalculatorPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: pathname },
            { name: 'Forza Tuning Calculator', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildSoftwareApplicationJsonLd({
            title,
            description,
            path: pathname,
            featureList: [
              'Forza tuning workflow router',
              'FH6 tune calculator handoff',
              'Gear ratio and drift calculator handoff',
              'Tune-code and best-car content planning',
            ],
          }),
          buildItemListJsonLd({
            title: 'Forza tuning calculator tool routes',
            items: toolRoutes.map((tool) => ({
              name: tool.title,
              path: tool.href,
            })),
          }),
          buildFaqJsonLd(faqItems),
        ]}
      />

      <section className="overflow-hidden border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-[32rem] opacity-35" />
        <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:px-8">
          <div className="min-w-0">
            <p className="forza-chip">Forza tuning calculator</p>
            <h1 className="forza-neon-title mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-zinc-50 sm:text-5xl">
              One Forza tuning workflow, then the right calculator.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-400">
              Use this page when you searched for a Forza tuning calculator, FH5
              tuning calculator, gear ratio calculator, tune codes, or best car
              setup path. Apex Tune Hub routes the problem into the active FH6
              calculator stack first, then keeps FH5/FH6 content separated as
              real data improves.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="forza-primary-button">
                <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                  Open FH6 Tune Calculator
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-md"
              >
                <LocaleLink href="/tools/forza-horizon-6-gear-ratio-calculator">
                  Open Gear Tool
                </LocaleLink>
              </Button>
            </div>

            <div className="mt-6 grid items-start gap-3 sm:grid-cols-3">
              {[
                ['Generic Forza', 'Calculator intent'],
                ['FH5 data', 'Evergreen demand'],
                ['FH6 product', 'Live workbench'],
              ].map(([label, value]) => (
                <div className="forza-stat" key={label}>
                  <p className="text-lg font-semibold text-zinc-50">{value}</p>
                  <p className="mt-1 text-xs text-zinc-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <ForzaHomeTuneWorkbench />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid items-start gap-4 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="forza-panel p-5">
            <ShieldCheckIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Why this broad page exists
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Semrush shows that stable Forza demand is still clustered around
              FH5 tuning calculators, tune codes, best cars, drift builds, and
              oversteer fixes. FH6 demand is earlier, but Google Search Console
              already shows calculator clicks. This page connects both signals
              without pretending old FH5 data is final FH6 data.
            </p>
          </div>

          <div className="forza-panel overflow-hidden">
            <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.85fr_1.05fr_1.1fr]">
              <span>Search signal</span>
              <span>What it means</span>
              <span>Page handoff</span>
            </div>
            {semrushSignals.map((row) => (
              <div
                className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.85fr_1.05fr_1.1fr]"
                key={row.query}
              >
                <span className="font-semibold text-zinc-50">{row.query}</span>
                <span className="leading-6 text-zinc-400">{row.takeaway}</span>
                <span className="leading-6 text-cyan-100">{row.handoff}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-4">
          {toolRoutes.map((tool) => {
            const Icon = tool.icon;

            return (
              <LocaleLink
                className="forza-card p-5"
                href={tool.href}
                key={tool.href}
              >
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {tool.description}
                </p>
              </LocaleLink>
            );
          })}
        </div>

        <div className="forza-panel mt-5 p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <RouteIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Calculator routing workflow
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
                Keep the workflow tight: one game context, one symptom, one
                calculator, one test note.
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-md">
              <LocaleLink href="/games/forza-horizon-6/guides">
                Open guide library
              </LocaleLink>
            </Button>
          </div>
          <div className="mt-5 grid items-start gap-3 md:grid-cols-4">
            {calculatorWorkflow.map((step) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={step.step}
              >
                <span className="inline-flex size-8 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                  {step.step}
                </span>
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-5 p-5">
          <div className="grid items-start gap-4 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <CarFrontIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Next content to build from this data
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                The next pages should follow the strongest search clusters: best
                cars, drift cars, tune codes, and general calculator terms. Each
                page should still route back to a working tool.
              </p>
            </div>
            <div className="grid items-start gap-3 md:grid-cols-2">
              {[
                [
                  'Best car pages',
                  'Use role-based tables before exact meta claims.',
                ],
                [
                  'Drift car pages',
                  'Match car picks to angle, recovery, and gearing.',
                ],
                [
                  'Tune-code pages',
                  'Explain how to use codes and mark readiness.',
                ],
                [
                  'Oversteer pages',
                  'Keep FH5 language mapped to FH6 symptoms.',
                ],
              ].map(([heading, body]) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={heading}
                >
                  <h3 className="text-base font-semibold text-zinc-100">
                    {heading}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 grid items-start gap-3 md:grid-cols-3">
          {faqItems.map((faq) => (
            <article className="forza-card p-5" key={faq.question}>
              <h2 className="text-base font-semibold text-zinc-50">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ApexNewsletterCta
        description="Get new Forza tuning routes, FH6 calculator updates, tune-code notes, and car-page expansions as the wider Apex Tune Hub database grows."
        title="Follow the broader Forza tuning roadmap"
      />
    </main>
  );
}
