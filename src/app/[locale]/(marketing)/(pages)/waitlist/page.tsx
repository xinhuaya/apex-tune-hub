import { WaitlistFormCard } from '@/components/waitlist/waitlist-form-card';
import { constructMetadata } from '@/lib/metadata';
import { BellIcon, GaugeIcon, ListChecksIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const pt = await getTranslations({ locale, namespace: 'WaitlistPage' });
  return constructMetadata({
    title: pt('title') + ' | ' + t('title'),
    description: pt('description'),
    locale,
    pathname: '/waitlist',
  });
}

export default async function WaitlistPage() {
  const t = await getTranslations('WaitlistPage');

  return (
    <main className="forza-page text-zinc-50">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="forza-chip">
              <BellIcon className="size-4" />
              Weekly tune drops
            </p>
            <h1 className="forza-neon-title mt-6 text-4xl font-semibold tracking-normal sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              {t('subtitle')}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="forza-card p-4">
                <GaugeIcon className="size-5 text-fuchsia-300" />
                <h2 className="mt-3 text-base font-semibold">Tool updates</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Calculator refinements, new presets, and tested setup notes.
                </p>
              </div>
              <div className="forza-card p-4">
                <ListChecksIcon className="size-5 text-cyan-300" />
                <h2 className="mt-3 text-base font-semibold">Weekly data</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Playlist rewards, car pass additions, and database changes.
                </p>
              </div>
            </div>
          </div>

          <WaitlistFormCard />
        </div>
      </section>
    </main>
  );
}
