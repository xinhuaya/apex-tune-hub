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
} from '@/lib/seo/forza-horizon-6';
import {
  calculateTune,
  formatResultForClipboard,
} from '@/lib/tuning/forza-horizon-6';
import {
  forzaTunePresets,
  getForzaTunePreset,
  getPresetCalculatorUrl,
} from '@/lib/tuning/forza-horizon-6-presets';
import { ArrowRightIcon, ClipboardListIcon, GaugeIcon } from 'lucide-react';
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
  const relatedPresets = forzaTunePresets
    .filter((item) => item.slug !== preset.slug)
    .slice(0, 2);
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
          <h2 className="text-xl font-semibold">Testing checklist</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {preset.checklist.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                key={item}
              >
                {item}
              </div>
            ))}
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
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
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
