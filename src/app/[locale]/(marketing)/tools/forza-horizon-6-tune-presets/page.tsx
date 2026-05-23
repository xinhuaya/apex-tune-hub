import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import { ArrowRightIcon, GaugeIcon, LinkIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 Tune Presets - Apex Tune Hub',
    description:
      'Shareable Forza Horizon 6 tune presets for road, rally, dirt, street, AWD, RWD, A class, S1, and S2 builds.',
    locale,
    pathname: '/tools/forza-horizon-6-tune-presets',
  });
}

export default function ForzaHorizon6TunePresetsPage() {
  return (
    <main className="forza-page text-zinc-50">
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
        <div className="grid gap-4 lg:grid-cols-2">
          {forzaTunePresets.map((preset) => (
            <ForzaPresetCard key={preset.slug} preset={preset} />
          ))}
        </div>
      </section>
      <ApexNewsletterCta
        description="Get new shareable preset URLs for road, rally, dirt, street, and drift builds as testing expands."
        title="Follow the FH6 preset library"
      />
    </main>
  );
}
