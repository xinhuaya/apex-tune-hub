import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { Button } from '@/components/ui/button';
import { JsonLd } from '@/components/seo/json-ld';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6BestCarGuides,
  type ForzaHorizon6BestCarGuide,
} from '@/lib/guides/forza-horizon-6-best-car-guides';
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

export function ForzaHorizon6BestCarGuidePage({
  guide,
}: {
  guide: ForzaHorizon6BestCarGuide;
}) {
  const relatedCarGuides = Object.values(forzaHorizon6BestCarGuides).filter(
    (item) => item.id !== guide.id
  );
  const faqs: FaqItem[] = [
    {
      question: `What are the best picks for ${guide.h1}?`,
      answer: guide.intro,
    },
    {
      question: `Which class should I start with for ${guide.h1}?`,
      answer: `Start around ${guide.classFocus}, then move higher only when the car stays repeatable on the target route or event type.`,
    },
    {
      question: 'Are these cars fully tested?',
      answer:
        'Cars labelled candidate or needs-testing are transparent starting picks. They should move to tested only after route, event, or zone notes are added.',
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
                      Open tune calculator
                      <ArrowRightIcon className="ml-2 size-4" />
                    </LocaleLink>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-md"
                  >
                    <LocaleLink href="/games/forza-horizon-6/cars">
                      Browse car database
                    </LocaleLink>
                  </Button>
                </div>
              </div>

              <div className="forza-panel p-5">
                <BadgeCheckIcon className="size-7 text-cyan-300" />
                <h2 className="mt-4 text-xl font-semibold">Page status</h2>
                <div className="mt-5 grid gap-3 text-sm">
                  <div className="forza-stat">
                    <span className="text-zinc-500">Class focus</span>
                    <strong className="text-lg text-zinc-50">
                      {guide.classFocus}
                    </strong>
                  </div>
                  <div className="forza-stat">
                    <span className="text-zinc-500">Update plan</span>
                    <strong className="text-sm text-zinc-50">
                      {guide.updateCadence}
                    </strong>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-6 text-zinc-400">
                  These are transparent starter recommendations. Cars move from
                  candidate to tested only after route, event, or zone notes are
                  added.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
            {guide.picks.map((pick) => (
              <article key={pick.car} className="forza-card p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {pick.status}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">{pick.car}</h2>
                  </div>
                  <span className="rounded-md border border-fuchsia-300/30 bg-fuchsia-300/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
                    {pick.classBand}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {pick.why}
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-amber-200">
                    <GaugeIcon className="size-4" />
                    Tune direction
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {pick.tuneDirection}
                  </p>
                </div>
                {pick.href ? (
                  <LocaleLink
                    href={pick.href}
                    className="mt-5 inline-flex text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                  >
                    Open car page
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                ) : null}
              </article>
            ))}
          </div>

          <div className="forza-panel mt-6 p-5">
            <h2 className="text-xl font-semibold">
              How to judge this car list
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
              A best-car page should explain the decision, not only name cars.
              Use these rules to decide whether a candidate deserves a
              dedicated tune page, a car page update, or a lower-priority note.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {guide.selectionRules.map((item) => (
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
            <h2 className="text-xl font-semibold">Testing plan</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-400">
              These tests decide which cars stay as candidates and which ones
              deserve deeper tune presets. The same plan also creates useful
              update notes for repeat visitors.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {guide.testPlan.map((item) => (
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
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {guide.checkpoints.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
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
            <h2 className="text-xl font-semibold">Related best car hubs</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {relatedCarGuides.map((item) => (
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
          description="Get new FH6 candidate car notes, class updates, preset links, and weekly event testing changes."
          title={`Track ${guide.h1.toLowerCase()} updates`}
        />
      </main>
    </>
  );
}
