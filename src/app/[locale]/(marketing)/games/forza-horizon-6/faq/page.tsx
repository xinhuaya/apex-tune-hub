import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  CarIcon,
  ExternalLinkIcon,
  Gamepad2Icon,
  GaugeIcon,
  GitBranchIcon,
  HelpCircleIcon,
  ListChecksIcon,
  MapIcon,
  MonitorIcon,
  RadioTowerIcon,
  SearchIcon,
  ShieldCheckIcon,
  TimerIcon,
  WrenchIcon,
} from 'lucide-react';
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
  {
    question: 'Where should I start if I only want a quick tune?',
    answer:
      'Start with the tune calculator if you know the class and handling problem, or open tune presets if you want a shareable baseline URL first.',
  },
  {
    question: 'Where should I find the best FH6 cars?',
    answer:
      'Use the best cars hub for broad routes, then narrow down by road racing, drift, rally, JDM, class, or manufacturer pages.',
  },
  {
    question: 'Does Apex Tune Hub publish FH6 tune codes?',
    answer:
      'The tune-code hub is prepared for verified codes, but it does not publish invented share codes. Until a code is verified, it links to transparent preset URLs and car setup notes.',
  },
  {
    question: 'How should I use the Japan map planner?',
    answer:
      'Use it as a route-type planner, not an official map reproduction. Pick city, mountain, wet, dirt, drift, or speed routes, then open the matching preset or guide.',
  },
  {
    question: 'How should I follow weekly playlist updates?',
    answer:
      'Use the weekly playlist page for restrictions, safe car picks, tune links, and update status. Reward cars should stay labelled until verified.',
  },
  {
    question: 'What should I check on the Car Pass page?',
    answer:
      'Check source status, release cadence, future weekly-car fields, and tune routing. Future cars should not be guessed before an official source confirms them.',
  },
];

const faqClusters = [
  {
    title: 'Tuning tools',
    description:
      'Calculator, preset, drift, gear-ratio, and tune-code answers for players building setups.',
    icon: GaugeIcon,
    links: [
      ['Tune Calculator', '/tools/forza-horizon-6-tune-calculator'],
      ['Tune Presets', '/tools/forza-horizon-6-tune-presets'],
      ['Tune Codes', '/tools/forza-horizon-6-tune-codes'],
    ],
  },
  {
    title: 'Cars and recommendations',
    description:
      'Best cars, car database, class hubs, and manufacturer comparison pages.',
    icon: CarIcon,
    links: [
      ['Car Database', '/games/forza-horizon-6/cars'],
      ['Best Cars', '/games/forza-horizon-6/best-cars'],
      ['Best Drift Cars', '/games/forza-horizon-6/best-drift-cars'],
    ],
  },
  {
    title: 'Weekly updates',
    description:
      'Repeat-visit pages for weekly playlist prep, Car Pass tracking, and tune drops.',
    icon: RadioTowerIcon,
    links: [
      ['Weekly Playlist', '/games/forza-horizon-6/weekly-playlist'],
      ['Car Pass Tracker', '/games/forza-horizon-6/car-pass'],
      ['FH6 Tune Drops', '/waitlist'],
    ],
  },
  {
    title: 'Platforms and settings',
    description:
      'PC, controller, wheel, Steam Deck, and platform status answers.',
    icon: MonitorIcon,
    links: [
      ['PC Settings', '/settings/forza-horizon-6-pc'],
      ['Controller Settings', '/settings/forza-horizon-6-controller'],
      ['Steam Deck Settings', '/settings/forza-horizon-6-steam-deck'],
    ],
  },
];

const sourceLinks = [
  {
    title: 'Official FH6 FAQ',
    href: 'https://forza.net/news/forza-horizon-6-faq',
  },
  {
    title: 'Now available announcement',
    href: 'https://forza.net/news/forza-horizon-6-now-available',
  },
  {
    title: 'Release date announcement',
    href: 'https://forza.net/news/forza-horizon-6-coming-may-2026',
  },
  {
    title: 'Steam Deck Verified announcement',
    href: 'https://forza.net/news/forza-horizon-6-steam-deck',
  },
];

const maintenanceRules = [
  'Keep release, platform, Game Pass, and PS5 answers tied to official Forza.net sources.',
  'When a weekly event or Car Pass fact changes, update the linked tracker page first.',
  'When a tuning answer becomes detailed, move it into a guide, preset, or calculator page and link back here.',
];

const answerWorkflow = [
  {
    title: 'Answer in one sentence',
    text: 'Put the direct answer first so the page can satisfy quick search intent.',
  },
  {
    title: 'Route to the right hub',
    text: 'Send players toward a tool, car page, weekly tracker, Car Pass page, or source-backed guide.',
  },
  {
    title: 'Mark source-sensitive facts',
    text: 'Release, platform, Game Pass, Steam Deck, car-count, and PS5 answers should stay tied to official source links.',
  },
  {
    title: 'Promote detailed answers',
    text: 'When a question grows too big, move it to a dedicated page and keep the FAQ as the short answer router.',
  },
];

const highIntentRoutes = [
  {
    title: 'Release and platform answers',
    href: '/games/forza-horizon-6/faq',
    text: 'Use official source links for release date, Game Pass, PS5, Steam Deck, PC, and car-count questions.',
  },
  {
    title: 'Best car answers',
    href: '/games/forza-horizon-6/best-cars',
    text: 'Route broad best-car searches into class, role, manufacturer, and car detail pages.',
  },
  {
    title: 'Tune-code answers',
    href: '/tools/forza-horizon-6-tune-codes',
    text: 'Explain the difference between verified in-game codes and transparent preset URLs.',
  },
  {
    title: 'Weekly update answers',
    href: '/games/forza-horizon-6/weekly-playlist',
    text: 'Send repeat visitors to restrictions, safe car picks, tune paths, and update status.',
  },
  {
    title: 'Car Pass answers',
    href: '/games/forza-horizon-6/car-pass',
    text: 'Keep new-car search traffic tied to official source checks and tune routing.',
  },
  {
    title: 'Japan map answers',
    href: '/games/forza-horizon-6/japan-map',
    text: 'Use route-type planning instead of claiming to reproduce the official in-game map.',
  },
];

const sourceBackedFacts = [
  {
    label: 'Launch',
    value: 'May 19, 2026',
    source: 'Forza.net FAQ and now-available post',
  },
  {
    label: 'Platforms',
    value: 'Xbox Series X|S and PC; PS5 later in 2026',
    source: 'Forza.net launch and availability posts',
  },
  {
    label: 'Cars',
    value: 'Over 550 cars',
    source: 'Forza.net now-available post',
  },
  {
    label: 'Handheld',
    value: 'Steam Deck Verified',
    source: 'Forza.net Steam Deck post',
  },
];

const questionBacklogFields = [
  'Search query',
  'Short answer',
  'Best internal link',
  'Official source URL',
  'Needs update?',
  'Dedicated page candidate',
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
          buildItemListJsonLd({
            title: 'Forza Horizon 6 FAQ topic hubs',
            items: faqClusters.map((cluster) => ({
              name: cluster.title,
              path: cluster.links[0][1],
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 high intent FAQ routes',
            items: highIntentRoutes.map((route) => ({
              name: route.title,
              path: route.href,
            })),
          }),
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
              <h2 className="mt-4 text-xl font-semibold">FAQ routing rule</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Short answers win snippets, but every answer should route users
                to a deeper tool, car hub, weekly tracker, or source page.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  `${faqs.length} FAQ answers`,
                  `${faqClusters.length} topic clusters`,
                  `${sourceLinks.length} official source links`,
                ].map((item) => (
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
        <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <GitBranchIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">FAQ answer workflow</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This page is the short-answer router for Apex Tune Hub. Keep each
              answer compact, source-aware, and connected to the next useful
              page.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {answerWorkflow.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={item.title}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Find the right FH6 answer path
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This FAQ is the routing layer for the site. Use it to jump into
              tuning tools, car recommendations, weekly updates, and platform
              setup pages.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {faqClusters.map((cluster) => {
              const Icon = cluster.icon;

              return (
                <article className="forza-card p-4" key={cluster.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {cluster.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {cluster.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cluster.links.map(([label, href]) => (
                      <LocaleLink
                        className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                        href={href}
                        key={href}
                      >
                        {label}
                      </LocaleLink>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="forza-panel mb-6 p-5">
          <div className="flex items-center gap-3">
            <SearchIcon className="size-5 text-cyan-300" />
            <h2 className="text-xl font-semibold">High-intent FAQ routes</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {highIntentRoutes.map((route) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40 hover:text-cyan-100"
                href={route.href}
                key={route.title}
              >
                <strong className="block text-zinc-100">{route.title}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {route.text}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="forza-card p-5">
              <WrenchIcon className="size-5 text-amber-300" />
              <h2 className="text-lg font-semibold text-zinc-50">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <MapIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Source-backed facts snapshot
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These are the high-risk answers that should be rechecked
                whenever Forza.net publishes a major update.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {sourceBackedFacts.map((fact) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={fact.label}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {fact.label}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {fact.value}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    {fact.source}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <TimerIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Future FAQ backlog fields
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use these fields when Search Console reveals new questions. The
                goal is to decide whether a query needs a short answer or a
                dedicated page.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {questionBacklogFields.map((field) => (
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

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="forza-panel p-5">
            <ShieldCheckIcon className="size-6 text-fuchsia-300" />
            <h2 className="mt-4 text-xl font-semibold">
              FAQ maintenance rules
            </h2>
            <div className="mt-4 grid gap-2">
              {maintenanceRules.map((rule) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-zinc-300"
                  key={rule}
                >
                  {rule}
                </div>
              ))}
            </div>
          </div>

          <div className="forza-panel p-5">
            <Gamepad2Icon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-xl font-semibold">Official sources</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Release, platform, Game Pass, Steam Deck, car-count, and PS5
              timing answers should be rechecked against official pages when
              major updates ship.
            </p>
            <div className="mt-4 grid gap-2">
              {sourceLinks.map((source) => (
                <a
                  className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={source.href}
                  key={source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{source.title}</span>
                  <ExternalLinkIcon className="size-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get FH6 FAQ changes, weekly setup notes, verified Car Pass updates, and new tuning-tool links."
        title="Follow FH6 answer updates"
      />
    </main>
  );
}
