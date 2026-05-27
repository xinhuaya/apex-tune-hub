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
  buildItemListJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CarFrontIcon,
  FlagIcon,
  GaugeIcon,
  GitBranchIcon,
  ListChecksIcon,
  RouteIcon,
  ShieldCheckIcon,
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
  const roleWords = guide.bestFor
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const workflowSteps = [
    {
      title: 'Group by role',
      body: `Separate ${guide.make} road, drift, rally, starter, and event use before ranking cars.`,
    },
    {
      title: 'Pick a baseline',
      body: 'Start from the stock class, then choose one conservative setup direction before chasing power.',
    },
    {
      title: 'Attach evidence',
      body: 'Link each candidate to a car page, preset, calculator, route note, or guide before calling it recommended.',
    },
    {
      title: 'Refresh the cluster',
      body: 'Update the manufacturer hub when a weekly event, new reward car, or route test changes the priority list.',
    },
  ];
  const comparisonLinks = [
    {
      title: 'Best JDM cars',
      href: '/games/forza-horizon-6/best-jdm-cars',
      body: `${guide.make} candidates need context against the wider Japan car pool.`,
    },
    {
      title: 'Road racing cars',
      href: '/games/forza-horizon-6/best-road-racing-cars',
      body: 'Move clean handling builds into the road racing shortlist when braking and apex notes are strong.',
    },
    {
      title: 'Drift cars',
      href: '/games/forza-horizon-6/best-drift-cars',
      body: 'Use this route when the car needs angle, transition, differential, and gearing notes.',
    },
    {
      title: 'Tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
      body: 'Turn the candidate into a repeatable setup path before writing stronger recommendations.',
    },
  ];
  const evidenceChecks = [
    `${cars.length} ${guide.make} starter cars are linked to individual car pages.`,
    `${guide.tuneLinks.length} tune paths explain where a reader should go next.`,
    `Primary testing angle: ${guide.testingAngle}`,
  ];
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
          buildItemListJsonLd({
            title: `${guide.h1} starter cars`,
            items: cars.map((car) => ({
              name: car.title,
              path: car.href,
            })),
          }),
          buildItemListJsonLd({
            title: `${guide.h1} tune paths`,
            items: guide.tuneLinks.map((link) => ({
              name: link.label,
              path: link.href,
            })),
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
                <div className="mt-5 grid gap-2">
                  {evidenceChecks.map((item) => (
                    <div
                      className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                      key={item}
                    >
                      <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="forza-panel p-5">
              <GitBranchIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Manufacturer testing workflow
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                A manufacturer page should act like a routing hub. The page is
                useful when it explains where each {guide.make} car fits, which
                setup path to try first, and what evidence is still missing.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {workflowSteps.map((step) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={step.title}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {step.body}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel mb-6 p-5">
            <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
              <div>
                <FlagIcon className="size-6 text-fuchsia-300" />
                <h2 className="mt-4 text-xl font-semibold">
                  {guide.make} role map
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Use these roles to decide whether a car belongs on a road,
                  drift, class, weekly event, or standalone car page before
                  writing a stronger recommendation.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {roleWords.map((role) => (
                  <div
                    className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.04] px-4 py-3 text-sm font-semibold text-cyan-100"
                    key={role}
                  >
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

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
              <LocaleLink
                className="forza-card p-5"
                href={car.href}
                key={car.slug}
              >
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
            <div className="flex items-center gap-3">
              <RouteIcon className="size-5 text-cyan-300" />
              <h2 className="text-lg font-semibold">
                Compare this manufacturer against the next hub
              </h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {comparisonLinks.map((link) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300 transition hover:border-fuchsia-300/40 hover:text-fuchsia-100"
                  href={link.href}
                  key={link.href}
                >
                  <strong className="block text-zinc-100">{link.title}</strong>
                  <span className="mt-2 block leading-6 text-zinc-400">
                    {link.body}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-6 p-5">
            <div className="flex items-center gap-3">
              <ListChecksIcon className="size-5 text-amber-300" />
              <h2 className="text-lg font-semibold">
                Evidence checklist before stronger rankings
              </h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {evidenceChecks.map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-300"
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
