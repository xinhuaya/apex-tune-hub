import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { ForzaHorizon6CarGuideVisual } from '@/components/games/forza-horizon-6-car-guide-visual';
import { ForzaHorizon6GuideMediaSources } from '@/components/games/forza-horizon-6-guide-media-sources';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6ClassCarGuides,
  type ForzaHorizon6ClassCarGuide,
} from '@/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6CarGuideMediaSources } from '@/lib/guides/forza-horizon-6-car-guide-media-sources';
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
} from 'lucide-react';

export function ForzaHorizon6ClassCarGuidePage({
  guide,
}: {
  guide: ForzaHorizon6ClassCarGuide;
}) {
  const relatedClassGuides = Object.values(forzaHorizon6ClassCarGuides).filter(
    (item) => item.id !== guide.id
  );
  const bestForRoles = guide.bestFor
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
  const workflowSteps = [
    {
      title: 'Start near stock',
      body: 'Use the car close to its natural PI range first, then decide whether the next upgrade solves a real route problem.',
    },
    {
      title: 'Choose one role',
      body: `Keep ${guide.id.toUpperCase()} builds focused on one job before mixing road, street, rally, drift, and speed objectives.`,
    },
    {
      title: 'Attach a tune path',
      body: 'Every candidate should point to a preset, calculator state, or guide so the recommendation can be repeated.',
    },
    {
      title: 'Compare sideways',
      body: 'Check the neighboring class before pushing PI higher. A cleaner lower-class build often beats a messy power build.',
    },
  ];
  const classRouteLinks = [
    {
      title: 'Tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
      body: 'Build a repeatable setup from class, drivetrain, race type, and handling problem.',
    },
    {
      title: 'Tune presets',
      href: '/tools/forza-horizon-6-tune-presets',
      body: 'Open a baseline preset when the shortlist car already has a matching problem pattern.',
    },
    {
      title: 'Car database',
      href: '/games/forza-horizon-6/cars',
      body: 'Compare class, PI, role, acquisition, and tune direction before committing to a build.',
    },
    {
      title: 'Weekly playlist',
      href: '/games/forza-horizon-6/weekly-playlist',
      body: 'Use seasonal restrictions to decide which class candidates deserve the next content update.',
    },
  ];
  const evidenceChecks = [
    `${guide.picks.length} ${guide.id.toUpperCase()} class candidates have matching tune paths.`,
    `${guide.routeTests.length} route tests define how the shortlist should be validated.`,
    `Class goal: ${guide.classGoal}`,
  ];
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
          buildItemListJsonLd({
            title: `${guide.h1} candidate cars`,
            items: guide.picks.map((pick) => ({
              name: pick.car,
              path: pick.tuneLink,
            })),
          }),
          buildItemListJsonLd({
            title: `${guide.h1} next build pages`,
            items: classRouteLinks.map((link) => ({
              name: link.title,
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
          <div className="mb-6">
            <ForzaHorizon6CarGuideVisual
              candidates={guide.picks.map((pick) => ({
                name: pick.car,
                tag: pick.role,
                note: pick.why,
              }))}
              eyebrow={guide.eyebrow}
              primaryMetric={guide.id.toUpperCase()}
              roles={[guide.classGoal, ...bestForRoles]}
              title={guide.h1}
            />
          </div>

          <ForzaHorizon6GuideMediaSources
            sources={forzaHorizon6CarGuideMediaSources}
          />

          <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="forza-panel p-5">
              <GitBranchIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Class build workflow
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Class pages should help players decide whether a car belongs in
                this PI range before they spend upgrades. Use this workflow to
                move from candidate list to repeatable tune path.
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
                  {guide.id.toUpperCase()} class role map
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  These roles explain why this class exists on the site. They
                  also help decide which candidate should become a car page,
                  preset page, or weekly-event note next.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {bestForRoles.map((role) => (
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
                  <CarFrontIcon className="mr-2 size-4" />
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
              <RouteIcon className="size-5 text-cyan-300" />
              <h2 className="text-lg font-semibold">
                Next pages after choosing a class candidate
              </h2>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {classRouteLinks.map((link) => (
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
            <div className="flex items-center gap-3">
              <ShieldCheckIcon className="size-5 text-cyan-300" />
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
