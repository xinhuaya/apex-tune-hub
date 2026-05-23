import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { DatabaseIcon, GaugeIcon, ShieldCheckIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const principles = [
  {
    icon: GaugeIcon,
    title: 'Calculators',
    description: 'Baseline tune, drift tune, and gear ratio tools come first.',
  },
  {
    icon: DatabaseIcon,
    title: 'Car data',
    description:
      'Vehicle pages grow from small tested batches, not thin mass output.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Transparent status',
    description:
      'Candidate, needs-testing, and tested labels keep trust intact.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const pt = await getTranslations({ locale, namespace: 'AboutPage' });

  return constructMetadata({
    title: pt('title') + ' | ' + t('title'),
    description: pt('description'),
    locale,
    pathname: '/about',
  });
}

export default async function AboutPage() {
  const t = await getTranslations('AboutPage');

  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">{t('authorBio')}</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                {t('authorName')}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                {t('introduction')}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Open Tune Calculator
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/contact">{t('talkWithMe')}</LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <ShieldCheckIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">Independent site</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Apex Tune Hub is not affiliated with Playground Games, Turn 10
                Studios, Xbox Game Studios, Microsoft, Steam, or the official
                Forza team. Game names, trademarks, car names, and assets belong
                to their respective owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {principles.map(({ icon: CardIcon, title, description }) => {
            return (
              <article key={title} className="forza-card p-5">
                <CardIcon className="size-5 text-fuchsia-300" />
                <h2 className="mt-4 text-lg font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
