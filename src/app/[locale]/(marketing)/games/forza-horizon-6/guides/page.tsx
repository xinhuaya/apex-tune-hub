import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6Guides,
  type ForzaHorizon6Guide,
} from '@/lib/guides/forza-horizon-6-guides';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRightIcon, BookOpenIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 Guides - Tuning, Settings, and Setup Help',
    description:
      'Forza Horizon 6 tuning guides for beginners, understeer, oversteer, gear ratios, wheel settings, and Steam Deck settings.',
    locale,
    pathname: '/games/forza-horizon-6/guides',
  });
}

function GuideCard({ guide }: { guide: ForzaHorizon6Guide }) {
  return (
    <LocaleLink
      className="forza-card group p-5"
      href={`/games/forza-horizon-6/guides/${guide.slug}`}
    >
      <BookOpenIcon className="size-5 text-cyan-300" />
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
        {guide.eyebrow}
      </p>
      <h2 className="mt-2 text-xl font-semibold text-zinc-50">{guide.h1}</h2>
      <p className="mt-3 text-sm leading-6 text-zinc-400">
        {guide.description}
      </p>
      <span className="mt-5 inline-flex items-center text-sm font-semibold text-amber-200">
        Read guide
        <ArrowRightIcon className="ml-2 size-4" />
      </span>
    </LocaleLink>
  );
}

export default function ForzaHorizon6GuidesPage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Evergreen guide cluster</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 guides
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Practical setup guides for the questions players keep searching
                after launch: how to tune, how to fix handling problems, and
                which settings to start with.
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
                  <LocaleLink href="/games/forza-horizon-6">FH6 Hub</LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <BookOpenIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Why this helps revenue
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Guides bring search traffic, tools convert repeat visitors, and
                saved presets become the later membership layer. This is the
                safer path than publishing thin news posts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2">
          {forzaHorizon6Guides.map((guide) => (
            <GuideCard guide={guide} key={guide.slug} />
          ))}
        </div>
      </section>
      <ApexNewsletterCta
        description="Get new FH6 tuning guides, handling fixes, settings notes, and weekly event setup links."
        title="Get the next FH6 guide drop"
      />
    </main>
  );
}
