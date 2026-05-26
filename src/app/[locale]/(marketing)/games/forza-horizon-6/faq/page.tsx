import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
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
import {
  CarIcon,
  Gamepad2Icon,
  GaugeIcon,
  HelpCircleIcon,
  ListChecksIcon,
  MonitorIcon,
  RadioTowerIcon,
  ShieldCheckIcon,
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
];

const maintenanceRules = [
  'Keep release, platform, Game Pass, and PS5 answers tied to official Forza.net sources.',
  'When a weekly event or Car Pass fact changes, update the linked tracker page first.',
  'When a tuning answer becomes detailed, move it into a guide, preset, or calculator page and link back here.',
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
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Forza Horizon 6 FAQ topic hubs',
            itemListElement: faqClusters.map((cluster, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: cluster.title,
              url: `https://apextunehub.com${cluster.links[0][1]}`,
            })),
          },
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
                {['Quick answer', 'Best next page', 'Official source'].map(
                  (item) => (
                    <div
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-zinc-200"
                      key={item}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={source.href}
                  key={source.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {source.title}
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
