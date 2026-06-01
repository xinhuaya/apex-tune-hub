import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ForzaDriftTuneCalculator } from '@/components/tools/forza-tuning-calculators';
import { ForzaHorizon6GuideMediaSources } from '@/components/games/forza-horizon-6-guide-media-sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildSoftwareApplicationJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  CarFrontIcon,
  CircleGaugeIcon,
  ListChecksIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
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
    title: 'Drift Zone Scoring Guide',
    description:
      'Use this when the problem is score consistency, transitions, or a weekly drift-zone target.',
    href: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
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

const driftMediaSources = [
  {
    type: 'video' as const,
    title:
      'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
    sourceName: 'HokiHoshi on YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
    embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
    note: 'Used as a general FH6 build-and-tune reference. For drift, it supports the idea that setup decisions should begin with the build and the test route.',
  },
  {
    type: 'article' as const,
    title: 'FH6 Tune Help: Drifting',
    sourceName: 'r/ForzaHorizon discussion',
    sourceUrl:
      'https://www.reddit.com/r/ForzaHorizon/comments/1tmoauc/fh6_tune_help_drifting/',
    note: 'Used as a current player discussion about FH6 drift tuning, tire choice, gear use, and physics changes from earlier Horizon titles.',
  },
  {
    type: 'article' as const,
    title: 'Tips for Tuning a car for Drifting?',
    sourceName: 'r/ForzaHorizon6 discussion',
    sourceUrl:
      'https://www.reddit.com/r/ForzaHorizon6/comments/1tt763j/tips_for_tuning_a_car_for_drifting/',
    note: 'Used because players are explicitly asking for tuning principles instead of only downloading drift share codes.',
  },
];

const driftBuildTypes = [
  {
    title: 'RWD angle learner',
    setup:
      'Smooth throttle, predictable rear rotation, softer correction window.',
    test: 'Use one medium-speed corner and watch whether the car snaps back after transition.',
  },
  {
    title: 'AWD speed-zone build',
    setup:
      'Enough front pull for recovery without making the car straighten too early.',
    test: 'Run the same zone twice and check whether speed gains cost too much angle.',
  },
  {
    title: 'Low-power style build',
    setup:
      'Keep momentum and usable grip before adding aggressive angle changes.',
    test: 'If the car bogs mid-corner, fix gearing before reducing grip again.',
  },
  {
    title: 'High-power smoke build',
    setup:
      'Control wheelspin, heat, and snapback before chasing more steering lock.',
    test: 'Use throttle modulation first, then tune diff and gearing in smaller steps.',
  },
];

const driftSymptomRows = [
  {
    symptom: 'Spins out on entry',
    firstMove: 'Stabilize rotation',
    nextLink: '/games/forza-horizon-6/guides/japan-drift-setup',
  },
  {
    symptom: 'Cannot hold angle',
    firstMove: 'Increase rotation gradually',
    nextLink: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
  },
  {
    symptom: 'Bogs mid-drift',
    firstMove: 'Check gear spacing',
    nextLink: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
  {
    symptom: 'Snaps back after transition',
    firstMove: 'Smooth diff and rear response',
    nextLink: '/games/forza-horizon-6/tuning-settings',
  },
];

const driftTrustRules = [
  'Use one repeatable corner or drift zone before saving a preset URL.',
  'Separate RWD learning setups from AWD speed-zone setups in internal links.',
  'Fix gearing only after the car can hold angle predictably.',
  'Attach verified drift notes to car pages and best-drift-car hubs later.',
];

const driftSourceChecklist = [
  {
    title: 'Teach the player one drift gear',
    body: 'Recent drift discussions keep returning to usable gear choice. The page should help the player find the main drift gear before promising more angle.',
  },
  {
    title: 'Separate skill problem from tune problem',
    body: 'A beginner may need a calmer car and a repeatable zone before extreme settings. The calculator should explain what to test first.',
  },
  {
    title: 'Avoid pretending tune codes are universal',
    body: 'Share codes can be useful, but this page should sell the workflow: build, symptom, test route, then save the preset link.',
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

const driftHowToSteps = driftWorkflow.map((step) => ({
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
          buildSoftwareApplicationJsonLd({
            title,
            description,
            path: pathname,
            featureList: [
              'RWD and AWD drift tune directions',
              'Power and tire-grip symptom matching',
              'Drift symptom presets for angle and recovery problems',
              'First drift test loop with matched guide links',
              'Shareable drift preset URLs',
              'Local saved drift preset history',
            ],
          }),
          buildHowToJsonLd({
            title: 'How to use the Forza Horizon 6 drift tune calculator',
            description:
              'Use Apex Tune Hub to turn a drift symptom into a repeatable first setup test.',
            path: pathname,
            steps: driftHowToSteps,
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 drift tuning next steps',
            items: driftRelatedLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(driftFaqs),
        ]}
      />
      <ForzaDriftTuneCalculator />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <CarFrontIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Choose the drift build before chasing more angle
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Drift setup advice changes fast depending on drivetrain, power,
              grip, and the kind of zone you are trying to clear. These build
              types give players a better first decision before they touch
              differential, gearing, and alignment.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {driftBuildTypes.map((build) => (
              <article className="forza-card p-4" key={build.title}>
                <h3 className="text-base font-semibold text-zinc-50">
                  {build.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-cyan-100">
                  {build.setup}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {build.test}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <p className="forza-chip">Drift setup workflow</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              Build angle without losing control
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Drift tuning is easiest when you separate rotation, grip, gearing,
              and recovery. The calculator gives you a first direction for the
              exact problem you feel in the car, then you can test a short
              section and save the preset URL before refining.
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
        <div className="forza-panel overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.9fr_0.9fr_1fr]">
            <span>Drift symptom</span>
            <span>First tuning move</span>
            <span>Next page</span>
          </div>
          {driftSymptomRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.9fr_0.9fr_1fr]"
              href={row.nextLink}
              key={row.symptom}
            >
              <span className="font-semibold text-zinc-50">{row.symptom}</span>
              <span className="text-amber-200">{row.firstMove}</span>
              <span className="text-zinc-400">{row.nextLink}</span>
            </LocaleLink>
          ))}
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
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
              Source-backed drift notes
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-zinc-50">
              Make drift advice practical, not just dramatic
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Current FH6 drift questions are mostly about control: which gear
              to hold, why the car bogs, whether automatic can work, and how to
              tune without blindly copying a share code. The calculator keeps
              those questions tied to one repeatable first test.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {driftSourceChecklist.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={item.title}
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
        <ForzaHorizon6GuideMediaSources sources={driftMediaSources} />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
                Drift calculator publishing rules
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These guardrails make the drift page useful for long-tail search
                while keeping recommendations honest until car-specific FH6
                testing is available.
              </p>
            </div>
            <div className="grid gap-2">
              {driftTrustRules.map((rule) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-300"
                  key={rule}
                >
                  <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-amber-300" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
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
