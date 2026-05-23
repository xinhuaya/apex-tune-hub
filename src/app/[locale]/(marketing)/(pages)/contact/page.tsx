import { ContactFormCard } from '@/components/contact/contact-form-card';
import { constructMetadata } from '@/lib/metadata';
import { MailIcon, ShieldCheckIcon } from 'lucide-react';
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
  const pt = await getTranslations({ locale, namespace: 'ContactPage' });

  return constructMetadata({
    title: pt('title') + ' | ' + t('title'),
    description: pt('description'),
    locale,
    pathname: '/contact',
  });
}

/**
 * inspired by https://nsui.irung.me/contact
 */
export default async function ContactPage() {
  const t = await getTranslations('ContactPage');

  return (
    <main className="forza-page text-zinc-50">
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-0 h-full opacity-30" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="forza-chip">
              <MailIcon className="size-4" />
              Tested setup notes
            </p>
            <h1 className="forza-neon-title mt-6 text-4xl font-semibold tracking-normal sm:text-5xl">
              {t('title')}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
              {t('subtitle')}
            </p>

            <div className="forza-panel mt-8 p-5">
              <ShieldCheckIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold">What helps most</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Send car name, class target, route type, controller or wheel,
                and the tune behavior you are seeing. Clear testing notes make
                the calculator better.
              </p>
            </div>
          </div>

          <ContactFormCard />
        </div>
      </section>
    </main>
  );
}
