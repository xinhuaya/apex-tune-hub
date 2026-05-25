import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6MakeCarGuides,
  getCarsForMake,
  type ForzaHorizon6MakeCarGuide,
} from '@/lib/guides/forza-horizon-6-make-car-guides';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CarFrontIcon,
  GaugeIcon,
  WrenchIcon,
} from 'lucide-react';

export function ForzaHorizon6MakeCarGuidePage({
  guide,
}: {
  guide: ForzaHorizon6MakeCarGuide;
}) {
  const cars = getCarsForMake(guide.make);
  const relatedMakeGuides = Object.values(forzaHorizon6MakeCarGuides).filter(
    (item) => item.id !== guide.id
  );
  const faqs: FaqItem[] = [
    {
      question: `What are the best ${guide.make} cars in Forza Horizon 6?`,
      answer: guide.intro,
    },
    {
      question: `What are ${guide.make} cars best for in FH6?`,
      answer: `${guide.make} cars in this starter database are best for ${guide.bestFor}.`,
    },
    {
      question: `Are these ${guide.make} recommendations final?`,
      answer:
        'No. These are candidate recommendations until route testing, tune notes, and weekly event evidence are added.',
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
                    <LocaleLink href="/games/forza-horizon-6/cars">
                      Browse car database
                      <ArrowRightIcon className="ml-2 size-4" />
                    </LocaleLink>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-md"
                  >
                    <LocaleLink href="/games/forza-horizon-6/best-jdm-cars">
                      Best JDM Cars
                    </LocaleLink>
                  </Button>
                </div>
              </div>

              <div className="forza-panel p-5">
                <BadgeCheckIcon className="size-7 text-cyan-300" />
                <h2 className="mt-4 text-xl font-semibold">
                  Manufacturer angle
                </h2>
                <div className="mt-5 grid gap-3 text-sm">
                  <div className="forza-stat">
                    <span className="text-zinc-500">Best for</span>
                    <strong className="text-sm text-zinc-50">
                      {guide.bestFor}
                    </strong>
                  </div>
                  <div className="forza-stat">
                    <span className="text-zinc-500">Testing angle</span>
                    <strong className="text-sm text-zinc-50">
                      {guide.testingAngle}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              {guide.make} candidates
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              {cars.length} starter database cars
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {cars.map((car) => (
              <LocaleLink className="forza-card p-5" href={car.href} key={car.slug}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                      {car.type}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold">{car.title}</h2>
                  </div>
                  <span className="rounded-md border border-fuchsia-300/30 bg-fuchsia-300/10 px-3 py-1 text-sm font-semibold text-fuchsia-100">
                    {car.stockClass} {car.stockPi}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  {car.bestUse}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {car.tuneDirection}
                </p>
              </LocaleLink>
            ))}
          </div>

          <div className="forza-panel mt-6 p-5">
            <div className="flex items-center gap-3">
              <WrenchIcon className="size-5 text-amber-300" />
              <h2 className="text-lg font-semibold">Tune paths</h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {guide.tuneLinks.map((link) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={link.href}
                  key={link.href}
                >
                  <GaugeIcon className="mb-3 size-4 text-cyan-300" />
                  <strong className="block text-zinc-100">{link.label}</strong>
                  <span className="mt-2 block leading-6 text-zinc-400">
                    {link.note}
                  </span>
                </LocaleLink>
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
            <h2 className="text-xl font-semibold">Related manufacturer hubs</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {relatedMakeGuides.map((item) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={item.pathname}
                  key={item.id}
                >
                  <CarFrontIcon className="mb-2 size-4 text-cyan-300" />
                  {item.h1}
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>
        <ApexNewsletterCta
          description={`Get ${guide.make} candidate updates, tune paths, class notes, and weekly event links as testing expands.`}
          title={`Track ${guide.make} FH6 car updates`}
        />
      </main>
    </>
  );
}
