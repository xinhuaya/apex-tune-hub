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
  ArrowRightIcon,
  BookOpenCheckIcon,
  CalendarClockIcon,
  CarFrontIcon,
  ExternalLinkIcon,
  FileSearchIcon,
  FlagIcon,
  MapIcon,
  RadioTowerIcon,
  ShieldCheckIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/official-sources';
const title = 'Forza Horizon 6 Official Sources - Apex Tune Hub';
const description =
  'A source tracker for Forza Horizon 6 official release, platform, Japan map, car list, and update pages used by Apex Tune Hub.';
const sourceCheckedDate = 'May 28, 2026';

const officialSources = [
  {
    title: 'Forza Horizon 6 FAQ',
    href: 'https://forza.net/news/forza-horizon-6-faq',
    label: 'Release and platform facts',
    icon: BookOpenCheckIcon,
    use: 'Use for release date, platform wording, Game Pass availability, Premium Upgrade timing, PlayStation 5 status, crossplay, and cross-save.',
  },
  {
    title: 'Forza Horizon 6 DLC and editions list',
    href: 'https://forza.net/fh6dlclist',
    label: 'Editions and add-ons',
    icon: BookOpenCheckIcon,
    use: 'Use before changing Standard, Deluxe, Premium, Premium Upgrade, Car Pass, VIP, Welcome Pack, expansion, or Game Pass wording.',
  },
  {
    title: 'Forza Horizon 6 features',
    href: 'https://forza.net/news/forza-horizon-6-features',
    label: 'Play Anywhere and crossplay',
    icon: RadioTowerIcon,
    use: 'Use for Xbox Play Anywhere, cross-platform play, and feature-level platform language.',
  },
  {
    title: 'Forza Horizon 6 Steam Deck',
    href: 'https://forza.net/news/forza-horizon-6-steam-deck',
    label: 'Handheld status',
    icon: RadioTowerIcon,
    use: 'Use for Steam Deck Verified status and cross-save language for SteamOS and PC handheld play.',
  },
  {
    title: 'Forza Horizon 6 PC specs support',
    href: 'https://support.forzamotorsport.net/hc/en-us/articles/50088215399827-Forza-Horizon-6-PC-Specs',
    label: 'PC storefront and requirements',
    icon: FileSearchIcon,
    use: 'Use for PC Game Pass, Xbox app, Steam, handheld, and minimum or recommended PC requirement wording.',
  },
  {
    title: 'Forza Horizon 6 release news',
    href: 'https://forza.net/news/forza-horizon-6-coming-may-2026',
    label: 'Launch positioning',
    icon: CalendarClockIcon,
    use: 'Use for launch framing, Japan setting, cover car context, and official feature language.',
  },
  {
    title: 'Forza Horizon 6 full map reveal',
    href: 'https://forza.net/news/forza-horizon-6-full-map-reveal',
    label: 'Japan map references',
    icon: MapIcon,
    use: 'Use for route planning pages, map-region notes, city and mountain route language, and map-specific guide updates.',
  },
  {
    title: 'Forza Horizon 6 car list',
    href: 'https://forza.net/fh6cars',
    label: 'Vehicle data',
    icon: CarFrontIcon,
    use: 'Use before changing car names, model years, acquisition notes, stock classes, PI assumptions, or car-page source links.',
  },
];

const sourceStatusRows = [
  {
    area: 'Release date and platforms',
    status: 'Official source required',
    action:
      'Use the official FAQ before changing Xbox, PC, Game Pass, Premium Upgrade, PS5, crossplay, or cross-save copy.',
  },
  {
    area: 'Editions and add-ons',
    status: 'Official source required',
    action:
      'Use the official DLC and editions list before changing Standard, Deluxe, Premium, Premium Upgrade, Car Pass, VIP, Welcome Pack, or expansion copy.',
  },
  {
    area: 'PC storefront choice',
    status: 'Official source required',
    action:
      'Use Forza launch, Steam Deck, Xbox, and PC specs sources before changing Steam, Xbox app, PC Game Pass, or handheld copy.',
  },
  {
    area: 'Map and route language',
    status: 'Official source required',
    action:
      'Use the full map reveal before naming regions, inspired routes, map scale, or route-specific pages.',
  },
  {
    area: 'Car list and vehicle pages',
    status: 'Official source required',
    action:
      'Use the official car list before adding vehicle pages or changing car facts in the database.',
  },
  {
    area: 'Tuning advice',
    status: 'Apex testing guidance',
    action:
      'Keep tune notes labelled as baseline guidance unless a page has route tests, screenshots, or verified share-code evidence.',
  },
];

const updateRules = [
  'Do not change release, platform, map, or vehicle facts from memory alone.',
  'Keep official facts separate from tuning guidance so guide pages stay transparent.',
  'When a source changes, update the relevant hub page, detail page, sitemap freshness date, and launch checklist.',
  'Use official source links on evidence-heavy pages instead of repeating long quotes.',
];

const sourceFaqs: FaqItem[] = [
  {
    question: 'Why does Apex Tune Hub need an official-source page?',
    answer:
      'Forza Horizon 6 pages mix official facts with tuning guidance. This page keeps release, platform, map, and car-list facts tied to official Forza pages.',
  },
  {
    question: 'Should tuning recommendations be treated as official?',
    answer:
      'No. Apex Tune Hub is independent. Official pages confirm game facts, while tuning pages provide baseline setup workflows that need route testing.',
  },
  {
    question: 'When should this source tracker be updated?',
    answer:
      'Update it when official Forza pages change release details, PS5 timing, map information, car-list entries, Car Pass information, or playlist structure.',
  },
];

const linkedWorkflows = [
  {
    title: 'Map and route guides',
    href: '/games/forza-horizon-6/japan-map',
    body: 'Use official map language before adding new route clusters, city notes, mountain notes, or route-test examples.',
  },
  {
    title: 'Car database',
    href: '/games/forza-horizon-6/cars',
    body: 'Use the official car list before adding a new vehicle page or moving candidate notes into tested recommendations.',
  },
  {
    title: 'Weekly tracker',
    href: '/games/forza-horizon-6/weekly-playlist',
    body: 'Use this tracker when official playlist or reward details need a visible update trail.',
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

export default function ForzaHorizon6OfficialSourcesPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Official Sources', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Forza Horizon 6 official source links',
            itemListElement: officialSources.map((source, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: source.title,
              url: source.href,
            })),
          },
          buildFaqJsonLd(sourceFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Source tracker</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 official sources
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                A compact source board for the official Forza pages Apex Tune
                Hub uses when updating release facts, platform copy, Japan map
                notes, car pages, and update trackers.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/games/forza-horizon-6">
                    Back to FH6 Hub
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <a
                    href="https://forza.net/news/forza-horizon-6-faq"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open Official FAQ
                    <ExternalLinkIcon className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <ShieldCheckIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Current source rule
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Last checked from official source pages: {sourceCheckedDate}.
                Keep official facts and Apex testing guidance separated on every
                FH6 page.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  'Release facts',
                  'Map facts',
                  'Vehicle facts',
                  'Tune tests',
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
        <div className="mb-6 grid gap-4 md:grid-cols-2">
          {officialSources.map((source) => {
            const Icon = source.icon;

            return (
              <a
                className="forza-card group p-5"
                href={source.href}
                key={source.href}
                rel="noreferrer"
                target="_blank"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="size-6 text-cyan-300" />
                  <ExternalLinkIcon className="size-4 text-zinc-500 transition group-hover:text-cyan-200" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                  {source.label}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-zinc-50">
                  {source.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {source.use}
                </p>
              </a>
            );
          })}
        </div>

        <div className="forza-panel overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_0.7fr_1.5fr]">
            <span>Area</span>
            <span>Status</span>
            <span>Update action</span>
          </div>
          {sourceStatusRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_0.7fr_1.5fr]"
              key={row.area}
            >
              <span className="font-semibold text-zinc-50">{row.area}</span>
              <span className="leading-6 text-amber-100">{row.status}</span>
              <span className="leading-6 text-zinc-400">{row.action}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <FileSearchIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-xl font-semibold">Source update rules</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              These rules prevent unsupported FH6 claims as the site grows into
              weekly updates, car guides, and member tools.
            </p>
          </div>
          <div className="grid gap-2">
            {updateRules.map((rule) => (
              <div
                className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                key={rule}
              >
                <ShieldCheckIcon className="mt-0.5 size-4 shrink-0 text-cyan-300" />
                <span>{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {linkedWorkflows.map((workflow) => (
            <LocaleLink
              className="forza-card p-5"
              href={workflow.href}
              key={workflow.href}
            >
              <RadioTowerIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{workflow.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {workflow.body}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-cyan-200">
                Open workflow
                <ArrowRightIcon className="ml-2 size-4" />
              </span>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <FlagIcon className="size-5 text-amber-300" />
            <h2 className="text-xl font-semibold">Official source FAQ</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {sourceFaqs.map((faq) => (
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
        description="Get notified when official FH6 source pages change and Apex Tune Hub updates matching tuning, car, and weekly pages."
        title="Track official FH6 source updates"
      />
    </main>
  );
}
