import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
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
} from '@/lib/seo/forza-horizon-6';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  LinkIcon,
  ListChecksIcon,
  SearchIcon,
  Share2Icon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-horizon-6-tune-presets';
const title = 'Forza Horizon 6 Tune Presets - Apex Tune Hub';
const description =
  'Shareable Forza Horizon 6 tune presets for road, rally, dirt, street, drag, AWD, RWD, FWD, A class, S1, and S2 builds.';

const presetUseCases = [
  {
    icon: SearchIcon,
    title: 'Pick by problem',
    text: 'Start with the symptom you feel first: understeer, oversteer, wheelspin, slow launch, braking instability, or weak top speed.',
  },
  {
    icon: GaugeIcon,
    title: 'Match class and drive',
    text: 'Each preset keeps class band, drivetrain, surface, and driving style visible so you can avoid copying a setup meant for a different build.',
  },
  {
    icon: SlidersHorizontalIcon,
    title: 'Open a live calculator state',
    text: 'Preset pages link into the tune calculator with the same inputs already loaded, making the page useful beyond a static note.',
  },
  {
    icon: Share2Icon,
    title: 'Save route-specific links',
    text: 'Use these URLs in Discord, Reddit, YouTube descriptions, or your own testing notes while you refine car-specific settings.',
  },
];

const presetLibraryFaqs = [
  {
    question: 'What are FH6 tune presets?',
    answer:
      'They are shareable starting points for Forza Horizon 6 tuning situations, built around race type, drivetrain, class, handling problem, and driving style.',
  },
  {
    question: 'Are these final tune codes?',
    answer:
      'No. Apex Tune Hub treats presets as baseline setup links. You should test the car, track the symptom, and then save a car-specific version after repeatable laps.',
  },
  {
    question: 'How should I choose a preset?',
    answer:
      'Choose the preset that matches the issue you feel first, then confirm the race type, drivetrain, class band, and driving style before opening the live calculator.',
  },
  {
    question: 'Why do preset pages link back to the calculator?',
    answer:
      'The calculator keeps the baseline adjustable. If a preset is close but not perfect, you can change the issue, class, drivetrain, or style without starting over.',
  },
];
const problemClusters = [
  {
    title: 'Understeer presets',
    issue: 'understeer',
    guide: '/games/forza-horizon-6/guides/fix-understeer',
  },
  {
    title: 'Oversteer presets',
    issue: 'oversteer',
    guide: '/games/forza-horizon-6/guides/fix-oversteer',
  },
  {
    title: 'Wheelspin presets',
    issue: 'wheelspin',
    guide: '/games/forza-horizon-6/guides/fix-wheelspin',
  },
  {
    title: 'Slow launch presets',
    issue: 'slow-launch',
    guide: '/games/forza-horizon-6/guides/fix-slow-launch',
  },
  {
    title: 'Braking stability presets',
    issue: 'unstable-braking',
    guide: '/games/forza-horizon-6/guides/fix-unstable-braking',
  },
  {
    title: 'Top speed presets',
    issue: 'poor-top-speed',
    guide: '/games/forza-horizon-6/guides/fix-poor-top-speed',
  },
].map((cluster) => ({
  ...cluster,
  presets: forzaTunePresets.filter(
    (preset) => preset.input.handlingIssue === cluster.issue
  ),
}));

const routePresetPaths = [
  {
    title: 'A class road race starts',
    description:
      'Use these when the car is easy to drive but still misses apexes or loses exit speed on technical road routes.',
    guide: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
    guideLabel: 'A class road guide',
    presets: forzaTunePresets.filter(
      (preset) =>
        preset.input.classBand === 'A' && preset.input.raceType === 'road'
    ),
  },
  {
    title: 'S1 rally and mixed-surface starts',
    description:
      'Start here when bumps, crests, and loose exits make a fast build hard to repeat.',
    guide: '/games/forza-horizon-6/guides/best-s1-rally-tune-settings',
    guideLabel: 'S1 rally guide',
    presets: forzaTunePresets.filter(
      (preset) =>
        preset.input.classBand === 'S1' &&
        ['rally', 'dirt'].includes(preset.input.raceType)
    ),
  },
  {
    title: 'Drag and top-speed starts',
    description:
      'Use these for launch behavior, first-shift grip, final drive checks, and fast route speed testing.',
    guide: '/games/forza-horizon-6/guides/best-drag-tune-settings',
    guideLabel: 'Drag tune guide',
    presets: forzaTunePresets.filter(
      (preset) =>
        preset.input.raceType === 'drag' ||
        preset.input.handlingIssue === 'poor-top-speed'
    ),
  },
  {
    title: 'Weekly playlist baseline starts',
    description:
      'Pick a reliable baseline quickly, then save event notes for the restriction, surface, and route problem.',
    guide: '/games/forza-horizon-6/guides/weekly-playlist-tuning-checklist',
    guideLabel: 'Weekly checklist',
    presets: forzaTunePresets.filter((preset) =>
      ['A', 'S1'].includes(preset.input.classBand)
    ),
  },
];

const presetLibraryStats = [
  {
    value: forzaTunePresets.length.toString(),
    label: 'preset pages',
    detail: 'Every preset has its own crawlable page and calculator route.',
  },
  {
    value: problemClusters.length.toString(),
    label: 'problem clusters',
    detail: 'Understeer, oversteer, wheelspin, launch, braking, and top speed.',
  },
  {
    value: '4',
    label: 'route paths',
    detail: 'Road, rally, drag, and weekly playlist baseline groups.',
  },
];

const presetDecisionRules = [
  {
    title: 'Match the first symptom',
    text: 'Pick the preset for the issue you felt first. Do not solve understeer, gearing, and braking in the same pass.',
    icon: SearchIcon,
  },
  {
    title: 'Confirm the setup context',
    text: 'Class, drivetrain, race type, and driving style should match before you open the calculator state.',
    icon: ClipboardCheckIcon,
  },
  {
    title: 'Keep it testable',
    text: 'Save a preset URL, run one repeatable route, then record what changed before moving to a car-specific tune.',
    icon: ShieldCheckIcon,
  },
];

const presetNextLinks = [
  {
    title: 'Calculator workflow',
    description:
      'Open the live tool when a preset is close but needs a different symptom, drivetrain, or driving style.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    title: 'Tune-code workflow',
    description:
      'Move from transparent preset URLs into real share codes only after in-game verification.',
    href: '/tools/forza-horizon-6-tune-codes',
  },
  {
    title: 'Car database',
    description:
      'Attach useful presets to car pages so players can see role, class, and weakness context.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    title: 'Weekly playlist tracker',
    description:
      'Use fast baseline starts when a weekly event has class, surface, or restriction pressure.',
    href: '/games/forza-horizon-6/weekly-playlist',
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

export default function ForzaHorizon6TunePresetsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools' },
            { name: 'Forza Horizon 6 Tune Presets', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(presetLibraryFaqs),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 tune preset pages',
            items: forzaTunePresets.map((preset) => ({
              name: preset.h1,
              path: `/tools/forza-horizon-6-tune-presets/${preset.slug}`,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 preset next steps',
            items: presetNextLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">
            <LinkIcon className="size-4" />
            Shareable setup URLs
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 tune presets
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                These are curated baseline preset pages that link directly into
                the interactive tune calculator. Use them as starting points,
                save the preset, then refine per car after testing.
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
                  <LocaleLink href="/tools/forza-horizon-6-tune-codes">
                    Tune Codes Hub
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <GaugeIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">Why preset pages?</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Preset URLs are easier to share in Reddit, Discord, YouTube
                descriptions, and weekly event notes. Each page stays useful by
                linking to a live calculator state instead of being a static
                fake tune.
              </p>
              <div className="mt-5 grid gap-2">
                {presetLibraryStats.map((stat) => (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
                    key={stat.label}
                  >
                    <span className="text-xl font-semibold text-zinc-50">
                      {stat.value}
                    </span>
                    <span className="ml-2 text-sm font-semibold text-cyan-200">
                      {stat.label}
                    </span>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Preset selection checkpoints
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A good preset library should help players choose quickly without
              hiding the limits of a baseline setup. These rules keep each
              preset useful for search traffic and actual testing.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {presetDecisionRules.map((rule) => {
              const Icon = rule.icon;

              return (
                <article className="forza-card p-4" key={rule.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {rule.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {rule.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Problem clusters
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Start from the handling symptom
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
            {problemClusters.map((cluster) => (
              <article className="forza-card p-5" key={cluster.issue}>
                <GaugeIcon className="size-5 text-cyan-300" />
                <h3 className="mt-4 text-lg font-semibold">{cluster.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {cluster.presets.length} preset
                  {cluster.presets.length === 1 ? '' : 's'} matched to this
                  tuning problem.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cluster.presets.slice(0, 2).map((preset) => (
                    <LocaleLink
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                      href={`/tools/forza-horizon-6-tune-presets/${preset.slug}`}
                      key={preset.slug}
                    >
                      {preset.input.classBand} {preset.input.drivetrain}
                    </LocaleLink>
                  ))}
                </div>
                <LocaleLink
                  className="mt-4 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100"
                  href={cluster.guide}
                >
                  Read the fix guide
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
            Route and event paths
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Match presets to the route you are tuning for
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
            These paths connect the preset library to practical route guides, so
            players can move from a baseline setup into the right testing
            checklist instead of copying settings blindly.
          </p>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            {routePresetPaths.map((path) => (
              <article className="forza-panel p-5" key={path.title}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{path.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {path.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                    {path.presets.length} presets
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {path.presets.slice(0, 3).map((preset) => (
                    <LocaleLink
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                      href={`/tools/forza-horizon-6-tune-presets/${preset.slug}`}
                      key={preset.slug}
                    >
                      {preset.input.classBand} {preset.input.drivetrain}{' '}
                      {preset.input.raceType}
                    </LocaleLink>
                  ))}
                </div>
                <LocaleLink
                  className="mt-4 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100"
                  href={path.guide}
                >
                  Open {path.guideLabel}
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {presetUseCases.map((item) => {
            const Icon = item.icon;

            return (
              <article className="forza-card p-5" key={item.title}>
                <Icon className="size-6 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Internal routes
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Where to go after a preset URL
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {presetNextLinks.map((link) => (
              <LocaleLink
                className="forza-card p-5"
                href={link.href}
                key={link.href}
              >
                <LinkIcon className="size-5 text-fuchsia-300" />
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

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              Preset library
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Browse baseline setups by symptom, surface, and class.
            </h2>
          </div>
          <p className="text-sm leading-7 text-zinc-400">
            The goal is not to pretend every car has one universal magic tune.
            These preset pages create a repeatable testing path: identify the
            problem, open the calculator state, test a short route, then record
            the car-specific changes that actually helped.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Shareable tune starts
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {forzaTunePresets.length} FH6 preset pages
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-400">
            <ClipboardCheckIcon className="size-4 text-amber-300" />
            Test, refine, then save per car
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {forzaTunePresets.map((preset) => (
            <ForzaPresetCard key={preset.slug} preset={preset} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Tune preset FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {presetLibraryFaqs.map((faq) => (
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
        description="Get new shareable preset URLs for road, rally, dirt, street, and drift builds as testing expands."
        title="Follow the FH6 preset library"
      />
    </main>
  );
}
