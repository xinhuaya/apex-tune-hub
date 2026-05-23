import { ForzaPresetCard } from '@/components/tools/forza-preset-card';
import { ForzaTuneCalculator } from '@/components/tools/forza-tuning-calculators';
import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 Tune Calculator - Apex Tune Hub',
    description:
      'Generate baseline Forza Horizon 6 tuning directions for road, street, dirt, rally, drift, and drag builds.',
    locale,
    pathname: '/tools/forza-horizon-6-tune-calculator',
  });
}

export default function ForzaHorizon6TuneCalculatorPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <ForzaTuneCalculator />
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
      <ApexNewsletterCta
        description="Get new shareable FH6 tune presets, calculator updates, and tested car notes as the garage grows."
        title="Save the next batch of FH6 tune presets"
      />
    </main>
  );
}
