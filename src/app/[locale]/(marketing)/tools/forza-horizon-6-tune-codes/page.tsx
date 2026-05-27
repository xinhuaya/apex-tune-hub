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
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import {
  ArrowRightIcon,
  CalendarClockIcon,
  ClipboardCheckIcon,
  FileCheck2Icon,
  GaugeIcon,
  LinkIcon,
  ListChecksIcon,
  SlidersHorizontalIcon,
  RouteIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  Table2Icon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-horizon-6-tune-codes';
const title = 'Forza Horizon 6 Tune Codes and Share Links - Apex Tune Hub';
const description =
  'Forza Horizon 6 tune codes hub for shareable preset links, tested setup workflow, car-specific tune notes, and safe baseline setup pages.';

const codeWorkflow = [
  {
    title: 'Start with a baseline',
    text: 'Open the tune calculator or a preset URL that already matches class, drivetrain, race type, and handling issue.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: GaugeIcon,
  },
  {
    title: 'Test the car-specific version',
    text: 'Run the same route twice, then adjust one setting group at a time before calling the setup finished.',
    href: '/games/forza-horizon-6/tuning-settings',
    icon: ClipboardCheckIcon,
  },
  {
    title: 'Link the car page',
    text: 'Attach every usable setup to a car page, class hub, or manufacturer hub so the tune code has context.',
    href: '/games/forza-horizon-6/cars',
    icon: LinkIcon,
  },
  {
    title: 'Keep fake codes out',
    text: 'Do not publish invented share codes. Use transparent placeholders until a real in-game code is verified.',
    href: '/games/forza-horizon-6/guides',
    icon: ShieldCheckIcon,
  },
];

const tuneCodeRows = [
  {
    label: 'A class RWD street wheelspin',
    preset: 'A RWD street wheelspin stable',
    status: 'Baseline URL ready',
    href: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
  },
  {
    label: 'S1 AWD road understeer',
    preset: 'S1 AWD road understeer balanced',
    status: 'Baseline URL ready',
    href: '/tools/forza-horizon-6-tune-presets/s1-awd-road-understeer-balanced',
  },
  {
    label: 'S2 AWD drag wheelspin',
    preset: 'S2 AWD drag wheelspin aggressive',
    status: 'Baseline URL ready',
    href: '/tools/forza-horizon-6-tune-presets/s2-awd-drag-wheelspin-aggressive',
  },
  {
    label: 'Car-specific share codes',
    preset: 'Add after in-game verification',
    status: 'Do not fake',
    href: '/games/forza-horizon-6/cars',
  },
];

const verifiedCodeLifecycle = [
  {
    question: '1. Keep the setup as a preset URL first',
    answer:
      'Document the class, drivetrain, race type, handling issue, target cars, and testing checklist before publishing an in-game share code.',
  },
  {
    question: '2. Test one car and one route family',
    answer:
      'Run the same car on a repeatable route or event type so the code has clear use context instead of a vague best tune label.',
  },
  {
    question: '3. Add source and freshness metadata',
    answer:
      'Only promote the row after the creator/source, last-tested date, car, class, and matching preset URL are recorded.',
  },
  {
    question: '4. Retire or label old codes',
    answer:
      'When the setup is no longer current, keep the row transparent with a stale, needs-retest, or replaced status instead of deleting context.',
  },
];

const verificationRules = [
  {
    title: 'Exact car and class',
    text: 'A share code needs the car, PI class, drivetrain, tire type, and upgrade direction it was tested with.',
    icon: FileCheck2Icon,
  },
  {
    title: 'Route and surface notes',
    text: 'A code that feels great on road sprint routes can be wrong for rally, street traffic, rivals, or short circuits.',
    icon: RouteIcon,
  },
  {
    title: 'Fresh test date',
    text: 'When a patch changes physics, PI balance, or car stats, old codes should be labelled instead of silently reused.',
    icon: CalendarClockIcon,
  },
];

const browseFilters = [
  {
    label: 'Class',
    value: 'B / A / S1 / S2',
    text: 'Class intent should match the route. A stable A class code is often more useful than a messy S1 build.',
  },
  {
    label: 'Drivetrain',
    value: 'RWD / AWD / FWD',
    text: 'A drivetrain mismatch changes launch, braking, and differential behavior enough to need a separate row.',
  },
  {
    label: 'Race type',
    value: 'Road / Street / Dirt / Rally / Drag',
    text: 'A tune code should say what surface and route family it was built around.',
  },
  {
    label: 'Problem solved',
    value: 'Understeer / Oversteer / Wheelspin',
    text: 'The best code directories explain the handling problem, not just the car name.',
  },
];

const qualityStatuses = [
  {
    status: 'Baseline URL ready',
    meaning:
      'A transparent Apex preset exists, but no verified in-game share code is being claimed yet.',
  },
  {
    status: 'Needs car test',
    meaning:
      'The setup direction is plausible, but it still needs one exact car and one route family.',
  },
  {
    status: 'Verified code ready',
    meaning:
      'Future state: the row has a real code, source, car, class, route, and last-tested date.',
  },
  {
    status: 'Needs retest',
    meaning:
      'Use this when a patch, car change, or route mismatch makes the older row questionable.',
  },
];

const futureCodeFields = [
  'Share code',
  'Creator or source',
  'Car and model year',
  'Class and drivetrain',
  'Race type and route',
  'Last tested date',
  'Matching preset URL',
  'Known weakness',
];

const internalReviewLinks = [
  {
    title: 'Tune presets library',
    href: '/tools/forza-horizon-6-tune-presets',
    text: 'Use preset rows as the safe public replacement for unverified share codes.',
  },
  {
    title: 'Car database',
    href: '/games/forza-horizon-6/cars',
    text: 'Attach future codes to exact cars so players can compare stock class, role, and tune direction.',
  },
  {
    title: 'Class hubs',
    href: '/games/forza-horizon-6/best-a-class-cars',
    text: 'Connect every tune code to the class where it is actually useful.',
  },
  {
    title: 'Tuning settings',
    href: '/games/forza-horizon-6/tuning-settings',
    text: 'Explain how a player should adjust the code when the car misses apexes, spins, or feels slow.',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'Does Apex Tune Hub publish Forza Horizon 6 tune codes?',
    answer:
      'This page is prepared for tune-code and share-code demand, but it does not publish invented in-game codes. Until a code is verified, it links to transparent calculator presets and car-specific setup notes.',
  },
  {
    question: 'What is the difference between a tune code and a preset URL?',
    answer:
      'A tune code is an in-game share code after a setup is saved and shared. A preset URL is an Apex Tune Hub calculator state that documents the baseline inputs and makes the setup easy to refine.',
  },
  {
    question: 'How should tune codes be added later?',
    answer:
      'Add the exact car, class, drivetrain, route type, share code, creator/source, last-tested date, and matching preset page. Keep old codes labelled if a patch changes the setup.',
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

export default function ForzaHorizon6TuneCodesPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools/forza-horizon-6-tune-calculator' },
            { name: 'FH6 Tune Codes', path: pathname },
          ]),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildHowToJsonLd({
            title: 'How to publish verified Forza Horizon 6 tune codes',
            description:
              'A safe workflow for moving from preset URLs to verified Forza Horizon 6 in-game share codes.',
            path: pathname,
            steps: verifiedCodeLifecycle,
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 tune code baseline links',
            items: tuneCodeRows.map((row) => ({
              name: row.label,
              path: row.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 tune code review links',
            items: internalReviewLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">
            <SearchIcon className="size-4" />
            Share-code workflow
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 tune codes and share links
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this hub for tune-code intent without publishing fake
                numbers. Apex Tune Hub starts with shareable calculator links,
                preset pages, and car notes, then can add real in-game share
                codes after verification.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-presets">
                    Browse Preset URLs
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Open Calculator
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <ShieldCheckIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Trust rule for tune codes
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                A tune code should have a car, class, route use, creator or
                source, and last-tested date. If any of those are missing, keep
                it as a baseline preset link instead.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  `${forzaTunePresets.length} preset URLs are available as safe baselines.`,
                  `${futureCodeFields.length} fields are required before a real code row is trusted.`,
                  'Invented in-game codes stay off the page.',
                ].map((item) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={item}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-4">
          {codeWorkflow.map((item) => {
            const Icon = item.icon;

            return (
              <LocaleLink
                className="forza-card p-5"
                href={item.href}
                key={item.title}
              >
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </LocaleLink>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <SparklesIcon className="size-6 text-fuchsia-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Verified tune code lifecycle
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This page can capture tune-code search demand today while keeping
              a clean path for real codes later. The lifecycle below prevents a
              thin fake-code list and turns every future row into useful setup
              evidence.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {verifiedCodeLifecycle.map((step) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={step.question}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {step.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {step.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              What makes a tune code publishable?
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The page can rank for tune-code searches now, but it should only
              publish real in-game codes after there is enough context for
              players to trust them.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {verificationRules.map((rule) => {
              const Icon = rule.icon;

              return (
                <article className="forza-card p-5" key={rule.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-4 text-base font-semibold">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {rule.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="flex items-center gap-3">
            <SlidersHorizontalIcon className="size-5 text-cyan-300" />
            <h2 className="text-xl font-semibold">
              Browse dimensions for future tune codes
            </h2>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            A useful tune-code directory should be filterable. These are the
            fields that should shape future tables, submissions, and member
            saved-code views.
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {browseFilters.map((filter) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={filter.label}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {filter.label}
                </p>
                <h3 className="mt-2 text-base font-semibold text-zinc-100">
                  {filter.value}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {filter.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1.2fr_0.8fr]">
            <span>Search intent</span>
            <span>Best current link</span>
            <span>Status</span>
          </div>
          {tuneCodeRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1.2fr_0.8fr]"
              href={row.href}
              key={row.label}
            >
              <span className="font-semibold text-zinc-50">{row.label}</span>
              <span className="text-zinc-400">{row.preset}</span>
              <span className="text-amber-200">{row.status}</span>
            </LocaleLink>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="flex items-center gap-3">
            <Table2Icon className="size-5 text-amber-300" />
            <h2 className="text-xl font-semibold">
              Tune code row quality statuses
            </h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {qualityStatuses.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={item.status}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {item.status}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.meaning}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Future verified-code format
              </p>
              <h2 className="mt-3 text-2xl font-semibold">
                Add real share codes without turning the page into a fake-code
                list.
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                When FH6 codes are available, every row should include enough
                context for a player to know whether the code matches their car,
                route, and update version.
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {futureCodeFields.map((field) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200"
                  key={field}
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Review loop
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Internal pages every future code should connect to
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              These links keep tune-code traffic inside the site instead of
              leaving players at a single copied number. They also define the
              first paid-feature path: save codes, compare versions, and track
              retest status.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {internalReviewLinks.map((link) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40 hover:text-cyan-100"
                href={link.href}
                key={link.href}
              >
                <strong className="block text-zinc-100">{link.title}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {link.text}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="flex items-center gap-3">
            <GaugeIcon className="size-5 text-amber-300" />
            <h2 className="text-xl font-semibold">
              Popular preset entry points
            </h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {forzaTunePresets.slice(0, 6).map((preset) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40"
                href={`/tools/forza-horizon-6-tune-presets/${preset.slug}`}
                key={preset.slug}
              >
                <strong className="block text-zinc-100">{preset.h1}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {preset.input.classBand} {preset.input.drivetrain}{' '}
                  {preset.input.raceType} for {preset.input.handlingIssue}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Tune code FAQ</h2>
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
        description="Get verified FH6 tune-code updates, preset URLs, and car-specific setup notes as testing expands."
        title="Follow FH6 tune code updates"
      />
    </main>
  );
}
