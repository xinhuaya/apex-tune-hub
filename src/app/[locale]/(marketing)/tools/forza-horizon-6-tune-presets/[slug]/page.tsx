import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6Cars,
  getForzaHorizon6CarTitle,
} from '@/lib/cars/forza-horizon-6-cars';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  calculateTune,
  formatResultForClipboard,
  type ClassBand,
  type HandlingIssue,
  type RaceType,
} from '@/lib/tuning/forza-horizon-6';
import {
  forzaTunePresets,
  getForzaTunePreset,
  getPresetCalculatorUrl,
  getRelatedForzaTunePresets,
  type ForzaTunePreset,
} from '@/lib/tuning/forza-horizon-6-presets';
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  GaugeIcon,
  GitBranchIcon,
  LinkIcon,
  RouteIcon,
  ShieldCheckIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

type PresetPageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return forzaTunePresets.map((preset) => ({
    slug: preset.slug,
  }));
}

const issueGuideMap: Record<HandlingIssue, { label: string; href: string }> = {
  understeer: {
    label: 'Fix understeer guide',
    href: '/games/forza-horizon-6/guides/fix-understeer',
  },
  oversteer: {
    label: 'Fix oversteer guide',
    href: '/games/forza-horizon-6/guides/fix-oversteer',
  },
  wheelspin: {
    label: 'Fix wheelspin guide',
    href: '/games/forza-horizon-6/guides/fix-wheelspin',
  },
  'slow-launch': {
    label: 'Fix slow launch guide',
    href: '/games/forza-horizon-6/guides/fix-slow-launch',
  },
  'unstable-braking': {
    label: 'Fix unstable braking guide',
    href: '/games/forza-horizon-6/guides/fix-unstable-braking',
  },
  'poor-top-speed': {
    label: 'Fix poor top speed guide',
    href: '/games/forza-horizon-6/guides/fix-poor-top-speed',
  },
};

const classGuideMap: Partial<
  Record<ClassBand, { label: string; href: string }>
> = {
  B: {
    label: 'Best B class cars',
    href: '/games/forza-horizon-6/best-b-class-cars',
  },
  A: {
    label: 'Best A class cars',
    href: '/games/forza-horizon-6/best-a-class-cars',
  },
  S1: {
    label: 'Best S1 class cars',
    href: '/games/forza-horizon-6/best-s1-class-cars',
  },
  S2: {
    label: 'Best S2 class cars',
    href: '/games/forza-horizon-6/best-s2-class-cars',
  },
};

function getRaceGuide(input: ForzaTunePreset['input']) {
  if (input.raceType === 'drag') {
    return {
      label: 'Best drag tune settings',
      href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
    };
  }

  if (input.raceType === 'drift') {
    return {
      label: 'Best drift tune settings',
      href: '/games/forza-horizon-6/guides/best-drift-tune-settings',
    };
  }

  if (input.raceType === 'rally' || input.raceType === 'dirt') {
    return input.classBand === 'S1'
      ? {
          label: 'Best S1 rally tune settings',
          href: '/games/forza-horizon-6/guides/best-s1-rally-tune-settings',
        }
      : {
          label: 'Best rally tune settings',
          href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
        };
  }

  if (input.raceType === 'road' && input.classBand === 'A') {
    return {
      label: 'Best A class road tune settings',
      href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
    };
  }

  return {
    label: 'A and S1 road racing guide',
    href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
  };
}

function getRouteChecklist(input: ForzaTunePreset['input']) {
  if (input.raceType === 'drag' || input.handlingIssue === 'poor-top-speed') {
    return {
      label: 'Gear ratio guide',
      href: '/games/forza-horizon-6/guides/gear-ratio-guide',
    };
  }

  if (input.raceType === 'rally' || input.raceType === 'dirt') {
    return {
      label: 'Japan route checklist',
      href: '/games/forza-horizon-6/guides/japan-route-tuning-checklist',
    };
  }

  return {
    label: 'Weekly playlist checklist',
    href: '/games/forza-horizon-6/guides/weekly-playlist-tuning-checklist',
  };
}

function getPresetGuideLinks(preset: ForzaTunePreset) {
  const links = [
    issueGuideMap[preset.input.handlingIssue],
    getRaceGuide(preset.input),
    classGuideMap[preset.input.classBand],
    getRouteChecklist(preset.input),
  ].filter((link): link is { label: string; href: string } => Boolean(link));

  return links.filter(
    (link, index) =>
      links.findIndex((item) => item.href === link.href) === index
  );
}

export async function generateMetadata({
  params,
}: PresetPageProps): Promise<Metadata | undefined> {
  const { locale, slug } = await params;
  const preset = getForzaTunePreset(slug);

  if (!preset) {
    notFound();
  }

  return constructMetadata({
    title: `${preset.title} - Apex Tune Hub`,
    description: preset.description,
    locale,
    pathname: `/tools/forza-horizon-6-tune-presets/${preset.slug}`,
  });
}

export default async function ForzaTunePresetPage({ params }: PresetPageProps) {
  const { slug } = await params;
  const preset = getForzaTunePreset(slug);

  if (!preset) {
    notFound();
  }

  const pathname = `/tools/forza-horizon-6-tune-presets/${preset.slug}`;
  const result = calculateTune(preset.input);
  const relatedPresets = getRelatedForzaTunePresets(preset, 3);
  const guideLinks = getPresetGuideLinks(preset);
  const targetCars = preset.targetCars.map((name) => {
    const car = forzaHorizon6Cars.find(
      (candidate) => getForzaHorizon6CarTitle(candidate) === name
    );

    return {
      name,
      href: car ? `/games/forza-horizon-6/cars/${car.slug}` : undefined,
    };
  });
  const presetFaqs = [
    {
      question: `When should I use the ${preset.h1}?`,
      answer: preset.routeUse,
    },
    {
      question: 'Is this preset a final tune code?',
      answer:
        'No. It is a baseline calculator state. Use the recommendations, test the car on the target route, and save a car-specific version once the behavior repeats.',
    },
    {
      question: 'Which cars fit this preset?',
      answer: `Start with cars similar to ${preset.targetCars.join(
        ', '
      )}, then adjust the live calculator if your build has a different drivetrain, class, or handling problem.`,
    },
  ];
  const presetValidationSteps = [
    {
      question: '1. Confirm the preset context',
      answer: `Use this preset only when the car matches ${preset.input.classBand} class, ${preset.input.drivetrain}, ${preset.input.raceType}, and the first problem is ${preset.input.handlingIssue}.`,
    },
    {
      question: '2. Open the live calculator state',
      answer:
        'Use the calculator link before testing so the baseline remains adjustable instead of becoming a static copy-paste tune.',
    },
    {
      question: '3. Test one route twice',
      answer:
        'Drive the same route, weather, assists, and input device twice before deciding whether the preset helped.',
    },
    {
      question: '4. Save only repeatable changes',
      answer:
        'Move from this baseline to a car-specific setup only after the same symptom improves across repeatable runs.',
    },
  ];
  const presetWorkflowCards = [
    {
      title: 'Start with the symptom',
      text: `This page is for ${preset.input.handlingIssue} first. Avoid changing gearing, alignment, and differential all at once.`,
      icon: RouteIcon,
    },
    {
      title: 'Open calculator state',
      text: 'The live preset keeps class, drivetrain, race type, issue, and style editable for your exact build.',
      icon: GaugeIcon,
    },
    {
      title: 'Record car fit',
      text: `Start with cars similar to ${preset.targetCars.slice(0, 2).join(' or ')} before promoting the preset as a stronger recommendation.`,
      icon: ClipboardCheckIcon,
    },
    {
      title: 'Handoff to guides',
      text: 'Use the guide path to understand why the preset changes that slider group before making deeper edits.',
      icon: LinkIcon,
    },
  ];
  const presetScorecardRows = [
    [
      'Preset context',
      `${preset.input.classBand} ${preset.input.drivetrain} ${preset.input.raceType}`,
    ],
    ['Primary issue', preset.input.handlingIssue],
    ['Driving style', preset.input.drivingStyle],
    ['Target cars', preset.targetCars.join(', ')],
    ['Related presets', `${relatedPresets.length} closest alternatives`],
  ];

  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools' },
            {
              name: 'Forza Horizon 6 Tune Presets',
              path: '/tools/forza-horizon-6-tune-presets',
            },
            { name: preset.h1, path: pathname },
          ]),
          buildArticleJsonLd({
            title: preset.title,
            description: preset.description,
            path: pathname,
          }),
          buildHowToJsonLd({
            title: `How to test ${preset.h1}`,
            description: preset.description,
            path: pathname,
            steps: presetValidationSteps,
          }),
          buildItemListJsonLd({
            title: `${preset.h1} guide path`,
            items: guideLinks.map((link) => ({
              name: link.label,
              path: link.href,
            })),
          }),
          buildItemListJsonLd({
            title: `${preset.h1} related presets`,
            items: relatedPresets.map((item) => ({
              name: item.h1,
              path: `/tools/forza-horizon-6-tune-presets/${item.slug}`,
            })),
          }),
          buildFaqJsonLd(presetFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">{preset.eyebrow}</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                {preset.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                {preset.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href={getPresetCalculatorUrl(preset)}>
                    Open live preset
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/tools/forza-horizon-6-tune-presets">
                    All Presets
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <GaugeIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">Preset values</h2>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  ['Race', preset.input.raceType],
                  ['Drive', preset.input.drivetrain],
                  ['Class', preset.input.classBand],
                  ['Issue', preset.input.handlingIssue],
                  ['Style', preset.input.drivingStyle],
                  ['Confidence', result.confidence],
                ].map(([label, value]) => (
                  <div key={label} className="forza-stat">
                    <span className="text-xs text-zinc-500">{label}</span>
                    <strong className="text-sm text-zinc-50">{value}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="space-y-4">
          <article className="forza-panel p-5">
            <GitBranchIcon className="size-6 text-fuchsia-300" />
            <h2 className="mt-4 text-xl font-semibold">Preset execution map</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Use this map to turn a shareable preset URL into a repeatable test
              path. The goal is a car-specific setup only after the baseline
              proves useful.
            </p>
            <div className="mt-5 grid gap-3">
              {presetWorkflowCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                    key={card.title}
                  >
                    <Icon className="size-5 text-cyan-300" />
                    <h3 className="mt-3 text-sm font-semibold text-zinc-100">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="forza-panel p-5">
            <ClipboardListIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-xl font-semibold">When to use it</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {preset.routeUse}
            </p>
          </article>

          <article className="forza-panel p-5">
            <h2 className="text-xl font-semibold">Tuning intent</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              {preset.tuningIntent}
            </p>
          </article>

          <article className="forza-panel p-5">
            <h2 className="text-xl font-semibold">Target car ideas</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {targetCars.map((car) =>
                car.href ? (
                  <LocaleLink
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                    href={car.href}
                    key={car.name}
                  >
                    {car.name}
                  </LocaleLink>
                ) : (
                  <span
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-zinc-300"
                    key={car.name}
                  >
                    {car.name}
                  </span>
                )
              )}
            </div>
          </article>

          <article className="forza-panel p-5">
            <ShieldCheckIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-xl font-semibold">Preset scorecard</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Check this before saving the preset as a car-specific tune. If the
              context does not match, open the live calculator and adjust first.
            </p>
            <div className="mt-4 grid gap-2">
              {presetScorecardRows.map(([metric, value]) => (
                <div
                  className="grid gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm md:grid-cols-[0.7fr_1.3fr]"
                  key={metric}
                >
                  <span className="font-semibold text-zinc-100">{metric}</span>
                  <span className="leading-6 text-zinc-400">{value}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="forza-panel p-5">
            <h2 className="text-xl font-semibold">
              Guide path for this preset
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Use these pages to move from a baseline preset into the exact
              handling fix, event setup, class list, and testing checklist.
            </p>
            <div className="mt-4 grid gap-2">
              {guideLinks.map((link) => (
                <LocaleLink
                  className="inline-flex items-center justify-between rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                  <ArrowRightIcon className="ml-3 size-4 text-amber-200" />
                </LocaleLink>
              ))}
            </div>
          </article>
        </div>

        <div className="forza-panel p-5">
          <div className="border-b border-zinc-800 pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Generated baseline
            </p>
            <h2 className="mt-2 text-2xl font-semibold">{result.title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {result.summary}
            </p>
          </div>
          <div className="mt-5 grid gap-3">
            {result.recommendations.map((item) => (
              <article className="forza-card p-4" key={item.setting}>
                <h3 className="text-base font-semibold">{item.setting}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-200">
                  {item.recommendation}
                </p>
                <p className="mt-3 text-xs leading-5 text-zinc-500">
                  <span className="font-semibold text-zinc-400">Test: </span>
                  {item.test}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <ClipboardCheckIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">Testing checklist</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Run this before copying the generated baseline into a car page,
                Discord note, or tune-code workflow.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                ...presetValidationSteps.map((step) => step.answer),
                ...preset.checklist,
              ].map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <pre className="mt-5 max-h-56 overflow-auto rounded-md border border-white/10 bg-black/40 p-4 text-xs leading-5 text-zinc-400">
            {formatResultForClipboard(result)}
          </pre>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-xl font-semibold">Preset FAQ</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {presetFaqs.map((faq) => (
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

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold">Related tune presets</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
          These presets share the closest race type, handling symptom, class,
          drivetrain, or target-car overlap with this baseline.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {relatedPresets.map((item) => (
            <ForzaPresetCard key={item.slug} preset={item} />
          ))}
        </div>
      </section>
      <ApexNewsletterCta
        description="Get notified when this preset gains tested car notes, route checks, and updated setup links."
        title="Track FH6 tune preset updates"
      />
    </main>
  );
}
