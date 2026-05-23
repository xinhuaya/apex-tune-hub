import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { ForzaDriftTuneCalculator } from '@/components/tools/forza-tuning-calculators';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 Drift Tune Calculator - Apex Tune Hub',
    description:
      'Create a baseline Forza Horizon 6 drift tune direction for RWD and AWD cars with clear adjustment notes.',
    locale,
    pathname: '/tools/forza-horizon-6-drift-tune-calculator',
  });
}

export default function ForzaHorizon6DriftTuneCalculatorPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <ForzaDriftTuneCalculator />
      <ApexNewsletterCta
        description="Get new drift presets, car candidates, and setup notes for RWD and AWD builds."
        title="Follow the FH6 drift tune updates"
      />
    </main>
  );
}
