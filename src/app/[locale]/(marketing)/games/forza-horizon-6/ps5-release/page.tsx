import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BellRingIcon,
  CalendarClockIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
  Gamepad2Icon,
  MonitorIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  TimerIcon,
  WalletCardsIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/ps5-release';
const title = 'Forza Horizon 6 PS5 Release Tracker';
const description =
  'Forza Horizon 6 PS5 release tracker with official PlayStation 5 status, wishlist link, what is confirmed, what is not confirmed, crossplay, cross-save, and buying guidance.';

const checkedDate = 'May 28, 2026';

const statusCards = [
  {
    label: 'PS5 status',
    value: 'Planned later in 2026',
    detail:
      'Forza.net says the PlayStation 5 version is releasing later this year, but no exact PS5 date is listed yet.',
    icon: TimerIcon,
  },
  {
    label: 'Wishlist',
    value: 'PlayStation Store page live',
    detail:
      'Forza.net directs PS5 players to wishlist the game on the PlayStation Store for availability notifications.',
    icon: BellRingIcon,
  },
  {
    label: 'Available now',
    value: 'Xbox Series X|S and PC',
    detail:
      'The current live game paths are Xbox consoles, Xbox app on PC, Steam, and PC Game Pass.',
    icon: CheckCircle2Icon,
  },
  {
    label: 'Do not assume',
    value: 'Price, editions, FPS, or date',
    detail:
      'Keep PS5 buying and performance claims on hold until official PlayStation details are published.',
    icon: ShieldAlertIcon,
  },
];

const confirmedRows = [
  {
    topic: 'PS5 version',
    status: 'Confirmed as planned',
    evidence:
      'Official Forza FAQ and launch posts say PlayStation 5 availability is later in 2026.',
  },
  {
    topic: 'Exact PS5 release date',
    status: 'Not announced',
    evidence:
      'Use "later in 2026" until Forza or PlayStation publishes a specific date.',
  },
  {
    topic: 'Wishlist path',
    status: 'Live',
    evidence:
      'Forza.net says PS5 players can add the game to their PlayStation Store wishlist.',
  },
  {
    topic: 'Crossplay',
    status: 'Officially supported',
    evidence:
      'The official FAQ wording includes Xbox consoles, Xbox on PC, PlayStation 5, and Steam for cross-platform online play.',
  },
  {
    topic: 'Cross-save',
    status: 'Officially supported',
    evidence:
      'The official FAQ wording includes PlayStation 5 in cross-platform save syncing language.',
  },
  {
    topic: 'PS5 performance settings',
    status: 'Hold',
    evidence:
      'Do not publish FPS, graphics mode, wheel, controller, or input-lag advice before official PS5 details and testing.',
  },
];

const ps5PlayerPaths = [
  {
    title: 'I only own PS5',
    icon: Gamepad2Icon,
    recommendation: 'Wishlist and wait',
    body: 'Use this page for status checks. Avoid buying DLC or planning around exact dates until PS5 editions are confirmed.',
    href: 'https://www.playstation.com/en-us/games/forza-horizon-6/',
    external: true,
  },
  {
    title: 'I want to play today',
    icon: MonitorIcon,
    recommendation: 'Use Xbox or PC',
    body: 'The live routes are Xbox Series X|S, Xbox app on PC, Steam, and PC Game Pass. Start with release status or storefront guidance.',
    href: '/games/forza-horizon-6/release-status',
    external: false,
  },
  {
    title: 'I may switch platforms',
    icon: ShieldCheckIcon,
    recommendation: 'Read cross-save first',
    body: 'Cross-save helps progress, but it does not automatically answer ownership, subscription, DLC, and storefront questions.',
    href: '/games/forza-horizon-6/crossplay-cross-save',
    external: false,
  },
  {
    title: 'I am comparing editions',
    icon: WalletCardsIcon,
    recommendation: 'Wait on PS5 pricing',
    body: 'Microsoft Store and Steam bundles are live, but PS5-specific price and edition assumptions should stay source-backed.',
    href: '/games/forza-horizon-6/game-pass-editions',
    external: false,
  },
];

const watchlist = [
  'Official PS5 release date or preorder date',
  'PlayStation Store edition names and pricing',
  'Whether every add-on mirrors Xbox and PC bundles',
  'PS5 graphics modes, FPS targets, and wheel support',
  'Launch-day cross-save behavior after real availability',
  'Any PS5-specific bonuses, preorder items, or restrictions',
];

const relatedLinks = [
  {
    title: 'Release Status',
    href: '/games/forza-horizon-6/release-status',
    text: 'Confirm Xbox, PC, Steam, Game Pass, Steam Deck, and PS5 timing in one page.',
  },
  {
    title: 'Crossplay & Cross-Save',
    href: '/games/forza-horizon-6/crossplay-cross-save',
    text: 'Check PS5 crossplay, save sync, storefront, and ownership cautions.',
  },
  {
    title: 'Game Pass & Editions',
    href: '/games/forza-horizon-6/game-pass-editions',
    text: 'Compare current Xbox and PC bundles before PS5 edition details are final.',
  },
  {
    title: 'Official Sources',
    href: '/games/forza-horizon-6/official-sources',
    text: 'Use this before changing PS5, platform, edition, or release wording.',
  },
];

const sourceLinks = [
  {
    title: 'Forza Horizon 6 FAQ',
    href: 'https://forza.net/news/forza-horizon-6-faq',
    note: 'Official PS5 timing, launch platforms, Game Pass, crossplay, and cross-save wording.',
  },
  {
    title: 'Forza Horizon 6 now available',
    href: 'https://forza.net/news/forza-horizon-6-now-available',
    note: 'Launch availability and PS5 "later this year" wording after Xbox and PC release.',
  },
  {
    title: 'PlayStation Store page',
    href: 'https://www.playstation.com/en-us/games/forza-horizon-6/',
    note: 'Public PS5 product page and wishlist path for PlayStation users.',
  },
];

const ps5Faqs: FaqItem[] = [
  {
    question: 'Is Forza Horizon 6 coming to PS5?',
    answer:
      'Yes. Official Forza pages say a PlayStation 5 version is planned later in 2026.',
  },
  {
    question: 'What is the Forza Horizon 6 PS5 release date?',
    answer:
      'No exact PS5 release date has been announced. Use "later in 2026" until Forza or PlayStation publishes a specific date.',
  },
  {
    question: 'Can PS5 players wishlist Forza Horizon 6?',
    answer:
      'Yes. Forza.net directs PlayStation 5 players to add the game to their PlayStation Store wishlist to be notified of availability.',
  },
  {
    question: 'Does FH6 support PS5 crossplay and cross-save?',
    answer:
      'Official FAQ wording includes PlayStation 5 in both cross-platform online play and cross-platform save syncing, but ownership and DLC still need separate checks.',
  },
  {
    question: 'Should Apex Tune Hub publish PS5 settings now?',
    answer:
      'No. PS5 FPS, graphics, controller, wheel, and performance advice should wait until the PS5 version is available and can be tested.',
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

export default function ForzaHorizon6Ps5ReleasePage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'PS5 Release', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 PS5 status checks',
            items: relatedLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(ps5Faqs),
        ]}
      />

      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">PS5 release tracker</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 PS5 release tracker
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                A source-backed PS5 status page for PlayStation players tracking
                release timing, wishlist availability, crossplay, cross-save,
                editions, and what still needs official confirmation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="forza-primary-button" size="lg">
                  <a
                    href="https://www.playstation.com/en-us/games/forza-horizon-6/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Open PS Store
                    <ExternalLinkIcon className="ml-2 size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  className="rounded-md"
                  size="lg"
                  variant="outline"
                >
                  <LocaleLink href="/games/forza-horizon-6/crossplay-cross-save">
                    Check cross-save
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <CalendarClockIcon className="size-7 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Current PS5 answer
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Last checked against official sources: {checkedDate}. The safe
                public wording is "later in 2026" until a specific PS5 date
                appears on Forza or PlayStation channels.
              </p>
              <div className="mt-5 grid gap-2">
                {['Release date pending', 'Wishlist live', 'Crossplay listed'].map(
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statusCards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="forza-card p-5" key={card.label}>
                <Icon className="size-5 text-cyan-300" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-amber-200">
                  {card.label}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-zinc-50">
                  {card.value}
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {card.detail}
                </p>
              </article>
            );
          })}
        </div>

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.75fr_0.72fr_1.45fr]">
            <span>Topic</span>
            <span>Status</span>
            <span>Evidence rule</span>
          </div>
          {confirmedRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.75fr_0.72fr_1.45fr]"
              key={row.topic}
            >
              <span className="font-semibold text-zinc-50">{row.topic}</span>
              <span className="leading-6 text-amber-100">{row.status}</span>
              <span className="leading-6 text-zinc-400">{row.evidence}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {ps5PlayerPaths.map((path) => {
            const Icon = path.icon;
            const content = (
              <>
                <Icon className="size-5 text-fuchsia-300" />
                <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                  {path.title}
                </h2>
                <p className="mt-2 text-sm font-semibold text-cyan-200">
                  {path.recommendation}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {path.body}
                </p>
                <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                  Open path
                  <ArrowRightIcon className="ml-2 size-3" />
                </span>
              </>
            );

            return path.external ? (
              <a
                className="forza-card p-5"
                href={path.href}
                key={path.title}
                rel="noreferrer"
                target="_blank"
              >
                {content}
              </a>
            ) : (
              <LocaleLink
                className="forza-card p-5"
                href={path.href}
                key={path.title}
              >
                {content}
              </LocaleLink>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <ShieldAlertIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-xl font-semibold">
              PS5 copy should stay conservative
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This page is built to rank for PS5 searches without inventing
              facts. When an official date lands, update the status cards,
              source tracker, sitemap, RSS feed, and IndexNow batch together.
            </p>
          </div>
          <div className="grid gap-2">
            {watchlist.map((item) => (
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

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {relatedLinks.map((link) => (
            <LocaleLink
              className="forza-card p-5"
              href={link.href}
              key={link.title}
            >
              <MonitorIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold">{link.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {link.text}
              </p>
              <p className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">
                Open page
                <ArrowRightIcon className="ml-2 size-3" />
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ExternalLinkIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Sources used for this tracker
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use these before changing PS5 release, wishlist, crossplay,
                cross-save, edition, or performance wording.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {sourceLinks.map((source) => (
                <a
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-300/40"
                  href={source.href}
                  key={source.title}
                  rel="noreferrer"
                  target="_blank"
                >
                  <h3 className="text-sm font-semibold text-zinc-100">
                    {source.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {source.note}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <Gamepad2Icon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">PS5 FAQ</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {ps5Faqs.map((faq) => (
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
        description="Get source-backed FH6 PS5, platform, edition, and tuning updates as official availability details change."
        title="Track FH6 PS5 availability"
      />
    </main>
  );
}
