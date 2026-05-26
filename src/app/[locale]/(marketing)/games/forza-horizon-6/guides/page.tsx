import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6Guides,
  type ForzaHorizon6Guide,
} from '@/lib/guides/forza-horizon-6-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BookOpenIcon,
  CircleGaugeIcon,
  ListChecksIcon,
  MapIcon,
  RadioTowerIcon,
  ShieldCheckIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/guides';
const title = 'Forza Horizon 6 Guides - Tuning, Settings, and Setup Help';
const description =
  'Forza Horizon 6 tuning guides for starter cars, Japan drift setups, A and S1 road racing, handling fixes, gearing, wheel settings, and Steam Deck settings.';

const guideClusters = [
  {
    icon: MapIcon,
    title: 'Launch route planning',
    text: 'Start with Japan launch strategy, starter cars, and early route testing before chasing meta picks.',
    href: '#launch-guides',
  },
  {
    icon: WrenchIcon,
    title: 'Handling fixes',
    text: 'Use problem guides for understeer, oversteer, wheelspin, braking instability, slow launch, and top-speed issues.',
    href: '#handling-fixes',
  },
  {
    icon: CircleGaugeIcon,
    title: 'Settings and devices',
    text: 'Keep wheel, controller, PC, and Steam Deck guidance separated so every setup note stays testable.',
    href: '#settings-guides',
  },
];

const guideGroups = [
  {
    id: 'launch-guides',
    eyebrow: 'Start here',
    title: 'Launch and starter guides',
    description:
      'Pages for the first wave of search demand: beginners, starter cars, Japan routes, and baseline tuning.',
    slugs: [
      'japan-launch-tuning-plan',
      'japan-route-tuning-checklist',
      'beginner-tuning-guide',
      'best-starter-cars',
      'a-s1-road-racing-tune',
      'gear-ratio-guide',
    ],
  },
  {
    id: 'handling-fixes',
    eyebrow: 'Problem solver',
    title: 'Handling symptom fixes',
    description:
      'Direct answers for the words players search when a build feels wrong.',
    slugs: [
      'fix-understeer',
      'fix-oversteer',
      'fix-wheelspin',
      'fix-slow-launch',
      'fix-unstable-braking',
      'fix-poor-top-speed',
    ],
  },
  {
    id: 'settings-guides',
    eyebrow: 'Input and device setup',
    title: 'Wheel, controller, and device settings',
    description:
      'Hardware-specific pages for players trying to make FH6 feel consistent before changing the car tune.',
    slugs: [
      'wheel-settings-guide',
      'logitech-wheel-settings',
      'thrustmaster-wheel-settings',
      'fanatec-moza-wheel-settings',
      'controller-drift-settings',
      'steam-deck-settings-guide',
    ],
  },
  {
    id: 'event-guides',
    eyebrow: 'Event builds',
    title: 'Road, drift, rally, and drag setup guides',
    description:
      'Event-specific tuning pages that connect guide readers to calculator presets and car lists.',
    slugs: [
      'best-a-class-road-tune-settings',
      'best-s1-rally-tune-settings',
      'weekly-playlist-tuning-checklist',
      'japan-drift-setup',
      'best-drift-tune-settings',
      'best-rally-tune-settings',
      'best-drag-tune-settings',
    ],
  },
];

const guideFaqs = [
  {
    question: 'Which Forza Horizon 6 guide should I read first?',
    answer:
      'Start with the beginner tuning guide if you are new to setups, then move to the specific handling problem or event type you are trying to fix.',
  },
  {
    question: 'Are these guides based on fake leaderboard certainty?',
    answer:
      'No. Apex Tune Hub labels launch content as baseline guidance and candidate testing, then links to calculators and presets so the advice can be refined after route testing.',
  },
  {
    question: 'Why are handling problem guides useful for SEO?',
    answer:
      'Players usually search the symptom they feel, such as understeer, oversteer, wheelspin, slow launch, unstable braking, or poor top speed. Each guide can answer that intent directly.',
  },
];

const guideWorkflow = [
  'Start every new guide with the player problem: event type, handling symptom, device setup, or weekly restriction.',
  'Link each guide to one calculator, one preset or car hub, and one broader FH6 topic page.',
  'Keep launch assumptions labelled until car testing, route notes, or official source checks confirm them.',
  'Move repeated questions into the FAQ hub and link the FAQ back to the detailed guide.',
];

const guideDestinations = [
  {
    title: 'Tool destination',
    body: 'Send setup readers to the calculator, drift calculator, gear ratio tool, presets, or tune-code workflow.',
    href: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    title: 'Car destination',
    body: 'Send car-intent readers to best cars, car database, class hubs, or manufacturer hubs.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    title: 'Weekly destination',
    body: 'Send repeat visitors to weekly playlist notes, Car Pass tracking, and FH6 tune drops.',
    href: '/games/forza-horizon-6/weekly-playlist',
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

function getGuidesBySlug(slugs: string[]) {
  return slugs
    .map((slug) => forzaHorizon6Guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is ForzaHorizon6Guide => Boolean(guide));
}

export default function ForzaHorizon6GuidesPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Guides', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(guideFaqs),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Forza Horizon 6 guide index',
            itemListElement: forzaHorizon6Guides.map((guide, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: guide.h1,
              url: `https://apextunehub.com/games/forza-horizon-6/guides/${guide.slug}`,
            })),
          },
        ]}
      />
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
                after launch: which starter cars to build, how to tune Japan
                routes, how to fix handling problems, and which settings to
                start with.
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
                How to use this guide stack
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Start with the launch plan, use the beginner guide for a clean
                baseline, then pick starter car, drift, road racing, or handling
                fixes based on the event you are trying to finish.
              </p>
              <div className="mt-5 grid gap-2">
                {['Problem', 'Tool', 'Car path', 'Weekly update'].map((item) => (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-zinc-200"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {guideClusters.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <LocaleLink
                className="forza-card group p-5"
                href={cluster.href}
                key={cluster.title}
              >
                <Icon className="size-6 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold">
                  {cluster.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {cluster.text}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-200">
                  Jump to cluster
                  <ArrowRightIcon className="ml-2 size-4 transition group-hover:translate-x-1" />
                </span>
              </LocaleLink>
            );
          })}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Guide publishing queue
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use this queue when adding the next long-tail FH6 guide so new
                pages land inside the existing tool, car, and weekly ecosystem.
              </p>
            </div>
            <div className="grid gap-2">
              {guideWorkflow.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  <ShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {guideDestinations.map((item) => (
            <LocaleLink className="forza-card p-5" href={item.href} key={item.href}>
              <RadioTowerIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.body}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-200">
                Open destination
                <ArrowRightIcon className="ml-2 size-4" />
              </span>
            </LocaleLink>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Search intent map
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            Pick the FH6 guide cluster that matches the job
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            These clusters turn the full guide library into search paths:
            launch planning, handling fixes, device settings, and event builds.
          </p>
        </div>
        <div className="grid gap-5">
          {guideGroups.map((group) => {
            const guides = getGuidesBySlug(group.slugs);

            return (
              <article className="forza-panel p-5" id={group.id} key={group.id}>
                <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200">
                      {group.eyebrow}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">
                      {group.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
                      {group.description}
                    </p>
                  </div>
                  <span className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-cyan-100">
                    {guides.length} guides
                  </span>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {guides.map((guide) => (
                    <LocaleLink
                      className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
                      href={`/games/forza-horizon-6/guides/${guide.slug}`}
                      key={guide.slug}
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                        {guide.eyebrow}
                      </p>
                      <h4 className="mt-2 text-sm font-semibold text-zinc-100">
                        {guide.h1}
                      </h4>
                    </LocaleLink>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Guide index
          </p>
          <h2 className="mt-2 text-2xl font-semibold">
            {forzaHorizon6Guides.length} practical FH6 guides
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {forzaHorizon6Guides.map((guide) => (
            <GuideCard guide={guide} key={guide.slug} />
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Guide FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {guideFaqs.map((faq) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={faq.question}
              >
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get new FH6 tuning guides, handling fixes, settings notes, and weekly event setup links."
        title="Get the next FH6 guide drop"
      />
    </main>
  );
}
