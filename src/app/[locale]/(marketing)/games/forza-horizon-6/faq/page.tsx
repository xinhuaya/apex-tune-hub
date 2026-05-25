import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import { HelpCircleIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/faq';
const title = 'Forza Horizon 6 FAQ - Apex Tune Hub';
const description =
  'Quick Forza Horizon 6 FAQ covering release status, Game Pass, Steam Deck, car count, PS5 timing, and Apex Tune Hub tuning tools.';

const faqs: FaqItem[] = [
  {
    question: 'Is Forza Horizon 6 out?',
    answer:
      'Forza.net says Forza Horizon 6 launched on May 19, 2026 for Xbox Series X|S and PC.',
  },
  {
    question: 'Is Forza Horizon 6 on Game Pass?',
    answer:
      'Forza.net says the Standard Edition is included for active Game Pass Ultimate and PC Game Pass subscribers.',
  },
  {
    question: 'How many cars are in Forza Horizon 6?',
    answer:
      'Official launch materials describe Forza Horizon 6 as having over 550 cars.',
  },
  {
    question: 'Is Forza Horizon 6 Steam Deck Verified?',
    answer:
      'Forza.net says Forza Horizon 6 is Steam Deck Verified and optimized for PC handhelds at launch.',
  },
  {
    question: 'Is Forza Horizon 6 coming to PS5?',
    answer:
      'Forza.net says a PlayStation 5 release is planned for later in 2026.',
  },
  {
    question: 'Are Apex Tune Hub tunes official?',
    answer:
      'No. Apex Tune Hub is independent. Calculator outputs are baseline setup notes that should be tested in-game.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title,
    description,
    locale,
    pathname,
  });
}

export default function ForzaHorizon6FaqPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'FAQ', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(faqs),
        ]}
      />
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
          {faqs.map((faq) => (
            <article key={faq.question} className="forza-card p-5">
              <h2 className="text-lg font-semibold text-zinc-50">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
        <div className="forza-panel mt-6 p-5 text-sm leading-6 text-zinc-400">
          <p>
            Source note: release, platform, Game Pass, Steam Deck, car-count,
            and PS5 timing answers should be rechecked against official
            Forza.net pages when major updates ship.
          </p>
        </div>
      </section>
    </main>
  );
}
