import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6ClassCarGuides,
  type ForzaHorizon6ClassCarGuide,
} from '@/lib/guides/forza-horizon-6-class-car-guides';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  GaugeIcon,
  ListChecksIcon,
} from 'lucide-react';

export function ForzaHorizon6ClassCarGuidePage({
  guide,
}: {
  guide: ForzaHorizon6ClassCarGuide;
}) {
  const relatedClassGuides = Object.values(forzaHorizon6ClassCarGuides).filter(
    (item) => item.id !== guide.id
  );
  const faqs: FaqItem[] = [
    {
      question: `What are the best picks for ${guide.h1}?`,
      answer: guide.intro,
    },
    {
      question: `What is ${guide.h1} best for?`,
      answer: `${guide.h1} is best for ${guide.bestFor}. The goal is ${guide.classGoal.toLowerCase()}.`,
    },
    {
      question: 'Are these class picks final?',
      answer:
        'No. These are transparent candidate picks until route times, tune notes, and weekly event evidence are added.',
    },
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Best Cars', path: '/games/forza-horizon-6/best-cars' },
            { name: guide.h1, path: guide.pathname },
          ]),
          buildArticleJsonLd({
            title: guide.h1,
            description: guide.description,
            path: guide.pathname,
          }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <main className="forza-page text-zinc-50">
        <section className="border-b border-zinc-800">
          <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="forza-chip">{guide.eyebrow}</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.76fr]">
              <div>
                <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                  {guide.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                  {guide.intro}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="forza-primary-button">
                    <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                      Tune a class build
                      <ArrowRightIcon className="ml-2 size-4" />
                    </LocaleLink>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-md"
                  >
                    <LocaleLink href="/games/forza-horizon-6/best-cars">
                      Best Cars Hub
                    </LocaleLink>
                  </Button>
                </div>
              </div>

              <div className="forza-panel p-5">
                <BadgeCheckIcon className="size-7 text-cyan-300" />
                <h2 className="mt-4 text-xl font-semibold">Class goal</h2>
                <div className="mt-5 grid gap-3 text-sm">
                  <div className="forza-stat">
                    <span className="text-zinc-500">Goal</span>
                    <strong className="text-lg text-zinc-50">
                      {guide.classGoal}
                    </strong>
                  </div>
                  <div className="forza-stat">
                    <span className="text-zinc-500">Best for</span>
                    <strong className="text-sm text-zinc-50">
                      {guide.bestFor}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {guide.picks.map((pick) => (
              <article className="forza-card p-5" key={pick.car}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {pick.status}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">{pick.car}</h2>
                  </div>
                  <GaugeIcon className="size-5 text-fuchsia-300" />
                </div>
                <p className="mt-3 text-sm font-semibold text-amber-200">
                  {pick.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {pick.why}
                </p>
                <LocaleLink
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                  href={pick.tuneLink}
                >
                  Open matching tune path
                  <ArrowRightIcon className="ml-2 size-4" />
                </LocaleLink>
              </article>
            ))}
          </div>

          <div className="forza-panel mt-6 p-5">
            <h2 className="text-xl font-semibold">
              How to choose a {guide.id.toUpperCase()} class car
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
              Treat this page as a shortlist, then use the same tests for every
              car. The best class pick is the one that repeats clean exits,
              brakes predictably, and still has room for a focused tune path.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {guide.tunePriorities.map((item) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                  key={item.title}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-6 p-5">
            <h2 className="text-xl font-semibold">Route test plan</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
              Before a car moves from candidate to tested, run it through a
              small repeatable set of routes. This keeps the page honest and
              makes future tune updates easier to compare.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {guide.routeTests.map((item) => (
                <div
                  className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-3 text-sm leading-6 text-zinc-300"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-6 p-5">
            <div className="flex items-center gap-3">
              <ListChecksIcon className="size-5 text-amber-300" />
              <h2 className="text-lg font-semibold">Testing checklist</h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {guide.checklist.map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-6 p-5">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {faqs.map((faq) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                  key={faq.question}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-6 p-5">
            <h2 className="text-xl font-semibold">Related class hubs</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {relatedClassGuides.map((item) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={item.pathname}
                  key={item.id}
                >
                  {item.h1}
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>
        <ApexNewsletterCta
          description="Get class-specific FH6 candidate updates, tune links, and weekly event notes as testing expands."
          title={`Track ${guide.h1.toLowerCase()} updates`}
        />
      </main>
    </>
  );
}
