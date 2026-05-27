import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  BadgeCheckIcon,
  CalendarDaysIcon,
  CarIcon,
  ExternalLinkIcon,
  GitBranchIcon,
  ListChecksIcon,
  RadioTowerIcon,
  RouteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  TimerIcon,
  WrenchIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/car-pass';
const title = 'Forza Horizon 6 Car Pass Tracker - Apex Tune Hub';
const description =
  'Track Forza Horizon 6 Car Pass weekly cars, release dates, tune links, source status, and setup recommendations.';

const trackerRows = [
  {
    week: 'Launch week',
    car: 'First Car Pass release',
    date: 'May 19, 2026',
    tune: 'Pick a baseline preset after the car is confirmed',
    status: 'Official cadence confirmed',
  },
  {
    week: 'Weekly drop',
    car: 'One new vehicle per week',
    date: 'Rolling schedule',
    tune: 'Add class, drivetrain, and route notes each week',
    status: 'Track weekly',
  },
  {
    week: 'Full pass',
    car: '30 total cars',
    date: '30 weekly additions',
    tune: 'Link each verified car to a calculator and car page',
    status: 'Official total confirmed',
  },
];

const officialSourceCards = [
  {
    title: 'Xbox Store listing',
    text: 'Confirms the Car Pass delivers 30 cars, with one vehicle made available each week from May 19.',
    href: 'https://www.xbox.com/games/store/forza-horizon-6-car-pass/9NTBFBZMB84T',
  },
  {
    title: 'Forza official resources',
    text: 'Confirms Car Pass inclusion in Deluxe, Premium, and Premium Upgrade editions.',
    href: 'https://forums.forza.net/t/fh6-pre-order-and-editions-info/809638',
  },
];

const carPassFacts = [
  {
    value: '30',
    label: 'Car Pass cars',
    detail: 'Officially described as 30 new cars delivered into the game.',
  },
  {
    value: '1/week',
    label: 'Release cadence',
    detail: 'One new vehicle is made available each week from May 19.',
  },
  {
    value: '3',
    label: 'Included bundles',
    detail: 'Deluxe, Premium, and Premium Upgrade include the Car Pass.',
  },
];

const carPassFaqs: FaqItem[] = [
  {
    question: 'What is the Forza Horizon 6 Car Pass tracker?',
    answer:
      'It is a repeat-visit page for weekly Car Pass additions, release timing, source status, and tune links for each new car.',
  },
  {
    question: 'How often should this page be updated?',
    answer:
      'Update it every week when the Car Pass car is confirmed, then add class direction, calculator links, and a car detail page when available.',
  },
  {
    question: 'Why keep unverified cars labelled as To verify?',
    answer:
      'Transparent labels prevent fake certainty. Cars should move into tested notes only after official source checks and route or event testing.',
  },
];

const carPassWorkflow: FaqItem[] = [
  {
    question: '1. Verify source first',
    answer:
      'Keep the car labelled To verify until the official source, timing, and release window are clear.',
  },
  {
    question: '2. Create the car page',
    answer:
      'Add class, PI, acquisition, testing status, source URL, and first tune direction before promoting the car.',
  },
  {
    question: '3. Pick a baseline preset',
    answer:
      'Match the car to a road, drift, rally, dirt, street, or drag preset instead of publishing a vague setup note.',
  },
  {
    question: '4. Link the weekly tracker',
    answer:
      'Add the car to weekly playlist prep when it appears in challenges, rewards, or seasonal restrictions.',
  },
];

const workflowLinks = [
  {
    title: 'Verify source first',
    href: '/games/forza-horizon-6/faq',
  },
  {
    title: 'Create the car page',
    href: '/games/forza-horizon-6/cars',
  },
  {
    title: 'Pick a baseline preset',
    href: '/tools/forza-horizon-6-tune-presets',
  },
  {
    title: 'Link the weekly tracker',
    href: '/games/forza-horizon-6/weekly-playlist',
  },
];

const weeklyTuneChecklist = [
  'Confirm the car name, model year, source URL, and availability date.',
  'Record class potential: road, rally, drift, drag, street, or seasonal use.',
  'Pick a baseline preset and calculator path before writing final notes.',
  'Add a car detail page only when the tune direction is specific enough.',
  'Update the weekly playlist page if the car becomes a challenge or reward.',
];

const carPassStatusLadder = [
  {
    status: 'Official fact',
    text: 'Only use this for facts visible on official Xbox, Forza, or in-game source material.',
  },
  {
    status: 'To verify',
    text: 'Use this for expected weekly rows, rumors, or incomplete source details.',
  },
  {
    status: 'Car page ready',
    text: 'Use this after car name, year, source URL, class direction, and acquisition note exist.',
  },
  {
    status: 'Tune path ready',
    text: 'Use this after the car has a preset, calculator path, or route-specific setup note.',
  },
];

const carPassFields = [
  'Week number',
  'Release date',
  'Car name',
  'Model year',
  'Source URL',
  'Stock class',
  'Likely first role',
  'Preset link',
  'Car page URL',
  'Testing status',
];

const tuneRoutingLinks = [
  {
    title: 'Road candidate',
    href: '/games/forza-horizon-6/best-road-racing-cars',
    text: 'Use when the weekly car looks like a road, street, or handling candidate.',
  },
  {
    title: 'Drift candidate',
    href: '/games/forza-horizon-6/best-drift-cars',
    text: 'Use when the car needs angle, transition, differential, and gearing notes.',
  },
  {
    title: 'Rally candidate',
    href: '/games/forza-horizon-6/best-rally-cars',
    text: 'Use when the car needs mixed-surface braking, suspension travel, or rough-route testing.',
  },
  {
    title: 'Tune codes',
    href: '/tools/forza-horizon-6-tune-codes',
    text: 'Only promote a Car Pass setup into a share-code row after in-game verification.',
  },
];

const sourceAuditCards = [
  {
    title: 'Official store facts',
    text: 'The page can safely use official Car Pass total, cadence, release start, and bundle inclusion facts.',
    icon: BadgeCheckIcon,
  },
  {
    title: 'No future-car guessing',
    text: 'Do not create rows for unreleased weekly cars unless the source is visible and linked.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Retest after release',
    text: 'A verified car still needs class, route, and setup notes before it becomes a recommendation.',
    icon: TimerIcon,
  },
];

const officialSourceSnapshot = [
  {
    label: 'Confirmed total',
    value: '30 Car Pass cars',
    source: 'Xbox Store listing',
    href: officialSourceCards[0].href,
  },
  {
    label: 'Cadence',
    value: 'One new vehicle each week from May 19',
    source: 'Xbox Store listing',
    href: officialSourceCards[0].href,
  },
  {
    label: 'Included with',
    value: 'Deluxe, Premium, and Premium Upgrade',
    source: 'Forza official resources',
    href: officialSourceCards[1].href,
  },
  {
    label: 'Tracker policy',
    value: 'Do not name future weekly cars until source-visible',
    source: 'Apex editorial rule',
    href: '/games/forza-horizon-6/faq',
  },
];

const weeklyCarRowTemplate = [
  {
    field: 'Source status',
    rule: 'Official, source-visible, community report, or to verify.',
  },
  {
    field: 'First tune role',
    rule: 'Road, drift, rally, drag, street, weekly, collection, or unknown.',
  },
  {
    field: 'Setup link',
    rule: 'Calculator state, preset URL, car page, or guide path.',
  },
  {
    field: 'Update action',
    rule: 'Create car page, retest route, add code row, or wait for source.',
  },
];

const carPassRetentionPaths = [
  {
    title: 'When the car is road-focused',
    link: '/games/forza-horizon-6/best-road-racing-cars',
    action:
      'Attach a safe road preset and compare it against the road candidate hub.',
  },
  {
    title: 'When the car is drift-focused',
    link: '/tools/forza-horizon-6-drift-tune-calculator',
    action:
      'Send readers to drift setup, then back to the car page once a role is clear.',
  },
  {
    title: 'When the car is a weekly reward',
    link: '/games/forza-horizon-6/weekly-playlist',
    action:
      'Add the event restriction, safe pick, setup row, and retest status.',
  },
  {
    title: 'When a real share code exists',
    link: '/tools/forza-horizon-6-tune-codes',
    action:
      'Promote only after car, source, creator, class, and route are recorded.',
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

export default function CarPassTrackerPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Car Pass Tracker', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildHowToJsonLd({
            title: 'How to update the Forza Horizon 6 Car Pass tracker',
            description:
              'A source-first workflow for turning weekly FH6 Car Pass drops into car pages and tune paths.',
            path: pathname,
            steps: carPassWorkflow,
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 Car Pass workflow links',
            items: workflowLinks.map((item) => ({
              name: item.title,
              path: item.href,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 Car Pass tune routing links',
            items: tuneRoutingLinks.map((item) => ({
              name: item.title,
              path: item.href,
            })),
          }),
          buildFaqJsonLd(carPassFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Weekly tracker</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 Car Pass tracker
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Track the 30 weekly Car Pass additions, availability dates,
                suggested tune directions, source links, and setup pages as each
                vehicle is verified.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Tune this week&apos;s car
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <a
                    href={officialSourceCards[0].href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Official source
                    <ExternalLinkIcon className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {carPassFacts.map((fact) => (
                  <div
                    className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                    key={fact.label}
                  >
                    <div className="text-2xl font-semibold text-zinc-50">
                      {fact.value}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-cyan-200">
                      {fact.label}
                    </div>
                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                      {fact.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="forza-panel p-5">
              <RadioTowerIcon className="size-7 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Weekly tune-drop page
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This page gives returning players one place to check the next
                Car Pass car, then jump into calculator presets, weekly playlist
                prep, and car-specific notes.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  'Official source before row promotion.',
                  'Car page before final recommendation.',
                  'Preset link before tune-code claim.',
                ].map((item) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={item}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 space-y-3">
                {officialSourceCards.map((source) => (
                  <a
                    className="flex items-start justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3 text-sm transition hover:border-cyan-300/40"
                    href={source.href}
                    key={source.title}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>
                      <strong className="block text-zinc-100">
                        {source.title}
                      </strong>
                      <span className="mt-1 block leading-5 text-zinc-400">
                        {source.text}
                      </span>
                    </span>
                    <ExternalLinkIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                  </a>
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
              Car Pass update workflow
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The tracker should move each weekly car through the same path:
              source check, car page, baseline preset, and weekly playlist
              routing.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {carPassWorkflow.map((step) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={step.question}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {step.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {step.answer}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.7fr_1fr_1fr_1.2fr_0.8fr]">
            <span>Week</span>
            <span>Car</span>
            <span>Date</span>
            <span>Tune link</span>
            <span>Status</span>
          </div>
          {trackerRows.map((row) => (
            <div
              key={row.week}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.7fr_1fr_1fr_1.2fr_0.8fr]"
            >
              <span className="font-semibold text-zinc-50">{row.week}</span>
              <span className="text-amber-200">{row.car}</span>
              <span className="text-zinc-400">{row.date}</span>
              <span className="text-cyan-200">{row.tune}</span>
              <span className="text-zinc-300">{row.status}</span>
            </div>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SlidersHorizontalIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Tracker fields for future weekly cars
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These fields make it possible to expand from a high-level
                tracker into a real weekly car database after official rows are
                visible.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {carPassFields.map((field) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200"
                  key={field}
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <article className="forza-card p-5">
            <BadgeCheckIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Official facts</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Keep confirmed facts separate from predicted cars, wishlist
              rumors, and community screenshots.
            </p>
          </article>
          <article className="forza-card p-5">
            <CalendarDaysIcon className="size-5 text-amber-300" />
            <h2 className="mt-4 text-lg font-semibold">Update cadence</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Add the weekly car, source URL, suggested class, and first tune
              direction as soon as official details are confirmed.
            </p>
          </article>
          <article className="forza-card p-5">
            <RouteIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">Internal links</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Every weekly car should link to best cars, tune calculator, drift
              calculator if relevant, and the future car detail page.
            </p>
          </article>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ListChecksIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Car Pass row status ladder
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use these labels to avoid fake certainty while still giving
                returning visitors a clear update status.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {carPassStatusLadder.map((item) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={item.status}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.status}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ShieldCheckIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Weekly car tune checklist
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use this checklist each week before publishing a new Car Pass
                setup path.
              </p>
            </div>
            <div className="grid gap-2">
              {weeklyTuneChecklist.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  <CarIcon className="mt-0.5 size-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <WrenchIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Tune routing after each weekly drop
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Once a car is verified, route it into the right content cluster
                instead of leaving it as one isolated tracker row.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {tuneRoutingLinks.map((item) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={item.href}
                  key={item.href}
                >
                  <strong className="block text-zinc-100">{item.title}</strong>
                  <span className="mt-2 block leading-6 text-zinc-400">
                    {item.text}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">Car Pass publishing links</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {workflowLinks.map((item, index) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40"
                href={item.href}
                key={item.title}
              >
                <strong className="block text-zinc-100">{item.title}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {carPassWorkflow[index]?.answer}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <BadgeCheckIcon className="size-5 text-cyan-300" />
            <h2 className="text-xl font-semibold">
              Source audit for this tracker
            </h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {sourceAuditCards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={item.title}
                >
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-sm font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <RadioTowerIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Official source snapshot
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These are the facts the tracker can safely repeat. Future weekly
                car names should stay out of the live page until they have the
                same source clarity.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Source check: May 27, 2026
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {officialSourceSnapshot.map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={item.label}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-base font-semibold text-zinc-100">
                    {item.value}
                  </h3>
                  <a
                    className="mt-3 inline-flex text-sm font-semibold text-amber-200 hover:text-amber-100"
                    href={item.href}
                    rel="noreferrer"
                    target={
                      item.href.startsWith('https://') ? '_blank' : undefined
                    }
                  >
                    {item.source}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <ListChecksIcon className="size-5 text-amber-300" />
              <h2 className="text-xl font-semibold">Weekly car row template</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              When the first real weekly rows are added, this template keeps the
              tracker useful without creating a thin list of car names.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {weeklyCarRowTemplate.map((item) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={item.field}
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {item.field}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {item.rule}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <GitBranchIcon className="size-5 text-fuchsia-300" />
              <h2 className="text-xl font-semibold">
                Car Pass retention paths
              </h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Every verified Car Pass row should send readers deeper into one of
              these paths, then back into the weekly tracker when the next drop
              arrives.
            </p>
            <div className="mt-4 grid gap-2">
              {carPassRetentionPaths.map((item) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 transition hover:border-cyan-300/40"
                  href={item.link}
                  key={item.title}
                >
                  <strong className="text-sm text-zinc-100">
                    {item.title}
                  </strong>
                  <span className="mt-1 block text-sm leading-6 text-zinc-400">
                    {item.action}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">Car Pass FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {carPassFaqs.map((faq) => (
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
      </section>
      <ApexNewsletterCta
        description="Get weekly Car Pass tune notes, recommended calculator presets, and new car page updates."
        title="Follow FH6 Car Pass updates"
      />
    </main>
  );
}
