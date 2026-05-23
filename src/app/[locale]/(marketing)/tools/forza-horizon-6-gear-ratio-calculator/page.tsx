import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { ForzaGearRatioCalculator } from '@/components/tools/forza-tuning-calculators';
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
    title: 'Forza Horizon 6 Gear Ratio Calculator - Apex Tune Hub',
    description:
      'Tune Forza Horizon 6 final drive and gear spacing around acceleration, top speed, drift, rally, and balanced builds.',
    locale,
    pathname: '/tools/forza-horizon-6-gear-ratio-calculator',
  });
}

export default function ForzaHorizon6GearRatioCalculatorPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <ForzaGearRatioCalculator />
      <ApexNewsletterCta
        description="Get gearing presets, top-speed tests, and launch tuning notes as new FH6 cars are added."
        title="Get the next FH6 gearing update"
      />
    </main>
  );
}
