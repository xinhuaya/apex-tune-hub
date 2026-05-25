import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  LinkIcon,
  SearchIcon,
  Share2Icon,
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
                  <LocaleLink href="/games/forza-horizon-6/cars">
                    Browse Car Database
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
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
                <h3 className="mt-4 text-lg font-semibold">
                  {cluster.title}
                </h3>
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
