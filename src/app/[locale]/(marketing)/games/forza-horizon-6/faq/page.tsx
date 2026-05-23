import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { HelpCircleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  [
    'Is Forza Horizon 6 out?',
    'Forza.net says Forza Horizon 6 is available on Xbox Series X|S and PC. Always check official store pages before publishing release-sensitive copy.',
  ],
  [
    'Is Forza Horizon 6 on Game Pass?',
    'Forza.net says the Standard Edition is included for active Game Pass Ultimate and PC Game Pass subscribers.',
  ],
  [
    'How many cars are in Forza Horizon 6?',
    'Official launch materials describe Forza Horizon 6 as having over 550 cars.',
  ],
  [
    'Is Forza Horizon 6 Steam Deck Verified?',
    'Forza.net says Forza Horizon 6 is Steam Deck Verified and optimized for PC handhelds at launch.',
  ],
  [
    'Are Apex Tune Hub tunes official?',
    'No. Apex Tune Hub is independent. Calculator outputs are baseline setup notes that should be tested in-game.',
  ],
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 FAQ - Apex Tune Hub',
    description:
      'Quick Forza Horizon 6 FAQ covering release status, Game Pass, Steam Deck, car count, PS5 timing, and Apex Tune Hub tuning tools.',
    locale,
    pathname: '/games/forza-horizon-6/faq',
  });
}

export default function ForzaHorizon6FaqPage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Quick answers</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 FAQ
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Short answers for release status, platforms, Game Pass, Steam
                Deck, car count, and Apex Tune Hub&apos;s independent tuning
                tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/games/forza-horizon-6">
                    FH6 Tuning Hub
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Tune Calculator
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <HelpCircleIcon className="size-7 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">Publishing note</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                FAQ pages are good for snippets, but keep release-sensitive
                answers tied to official sources and update dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4">
          {faqs.map(([question, answer]) => (
            <article key={question} className="forza-card p-5">
              <h2 className="text-lg font-semibold text-zinc-50">{question}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">{answer}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
