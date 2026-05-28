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
  BadgeCheckIcon,
  CalendarClockIcon,
  CarIcon,
  ExternalLinkIcon,
  Gamepad2Icon,
  GiftIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WalletCardsIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/game-pass-editions';
const title = 'Forza Horizon 6 Game Pass and Editions Guide';
const description =
  'Forza Horizon 6 Game Pass and editions guide for Standard, Deluxe, Premium, Premium Upgrade, Car Pass, VIP, expansions, and buying decisions.';

const editionCards = [
  {
    name: 'Standard Edition',
    includes: 'Full game',
    bestFor:
      'Players who want the base game first, including Game Pass players who do not need add-ons yet.',
    watch:
      'Car Pass, VIP, Welcome Pack, car packs, and expansions are separate add-ons.',
    icon: Gamepad2Icon,
  },
  {
    name: 'Deluxe Edition',
    includes: 'Full game plus Welcome Pack and Car Pass',
    bestFor:
      'Players who want weekly car drops and starter bonuses without paying for expansions up front.',
    watch:
      'VIP, Italian Passion Car Pack, Time Attack Car Pack, and expansions are not the core Deluxe reason.',
    icon: CarIcon,
  },
  {
    name: 'Premium Edition',
    includes:
      'Full game plus VIP, Welcome Pack, Car Pass, car packs, and two expansions',
    bestFor:
      'Players who already know FH6 will be a long-term game and want the broadest add-on stack.',
    watch:
      'Premium makes the most sense when expansions and add-on cars matter, not just early curiosity.',
    icon: SparklesIcon,
  },
  {
    name: 'Premium Upgrade',
    includes: 'Premium add-ons, not the full game',
    bestFor:
      'Game Pass, Standard, or Deluxe players who want to upgrade into Premium-style add-on content.',
    watch:
      'The official table marks Full Game as not included, so you still need game access.',
    icon: WalletCardsIcon,
  },
];

const gamePassRows = [
  {
    path: 'Game Pass Ultimate',
    access:
      'Xbox Series X|S, PC through the Xbox app, and Xbox Cloud Gaming as membership access.',
    bestNext: 'Start with Standard access, then decide whether add-ons matter.',
    href: '/games/forza-horizon-6/release-status',
  },
  {
    path: 'PC Game Pass',
    access: 'PC through the Xbox app as membership access.',
    bestNext:
      'Check PC requirements and performance settings before buying add-ons.',
    href: '/games/forza-horizon-6/pc-requirements',
  },
  {
    path: 'Steam purchase',
    access: 'Storefront purchase path for Steam and Steam Deck workflows.',
    bestNext:
      'Use Steam Deck settings if your main reason for Steam is handheld play.',
    href: '/settings/forza-horizon-6-steam-deck',
  },
  {
    path: 'PS5 watcher',
    access: 'Forza.net says PS5 availability is later in 2026.',
    bestNext:
      'Do not buy around PS5 assumptions until official availability and edition details are live.',
    href: '/games/forza-horizon-6/ps5-release',
  },
];

const addonRows = [
  {
    addOn: 'VIP Membership',
    detail:
      'Official table lists VIP Membership in Premium Edition and Premium Upgrade, with Standard and Deluxe as add-on paths.',
    reason:
      'Useful if reward multipliers, weekly Super Wheelspins, player-house perks, and cosmetic extras matter.',
  },
  {
    addOn: 'Welcome Pack',
    detail:
      'Official table lists five pre-tuned cars, one Autoshow car voucher, a free player house, and clothing tickets.',
    reason: 'Useful for a faster early garage and a smoother starter route.',
  },
  {
    addOn: 'Car Pass',
    detail:
      'Official table lists 30 extra cars and includes it with Deluxe, Premium, and Premium Upgrade.',
    reason:
      'Best for repeat visits because one new car can drive weekly tune content.',
  },
  {
    addOn: 'Expansion 1 and Expansion 2',
    detail:
      'Official table lists each expansion as a new location with extra cars and gameplay.',
    reason:
      'Best for long-term players who want new map and guide opportunities later.',
  },
];

const buyingRules = [
  {
    title: 'Start with access before add-ons',
    text: 'Game Pass can answer the biggest question first: will you actually play FH6 enough to care about Premium content?',
  },
  {
    title: 'Premium Upgrade is not the full game',
    text: 'Use it only when you already have game access through Game Pass, Standard, or Deluxe.',
  },
  {
    title: 'Car Pass creates weekly reasons to return',
    text: 'If this site grows traffic, Car Pass pages are strong repeat-visit content because each drop can become a tune page.',
  },
  {
    title: 'Expansions are a long-term bet',
    text: 'Expansion value depends on whether you want future locations, cars, and gameplay beyond launch.',
  },
];

const sourceLinks = [
  {
    title: 'Forza Horizon 6 DLC and editions list',
    href: 'https://forza.net/fh6dlclist',
    note: 'Official edition comparison table for Standard, Deluxe, Premium, Premium Upgrade, add-ons, and Game Pass wording.',
  },
  {
    title: 'Forza Horizon 6 FAQ',
    href: 'https://forza.net/news/forza-horizon-6-faq',
    note: 'Official FAQ for Game Pass, Premium Upgrade, platforms, and PS5 status.',
  },
  {
    title: 'Forza Horizon 6 now available',
    href: 'https://forza.net/news/forza-horizon-6-now-available',
    note: 'Launch page for availability, editions, Game Pass, and platform context.',
  },
];

const relatedLinks = [
  {
    title: 'Car Pass Tracker',
    href: '/games/forza-horizon-6/car-pass',
    text: 'Track weekly Car Pass drops, source status, and tune-page opportunities.',
  },
  {
    title: 'Crossplay and Cross-Save',
    href: '/games/forza-horizon-6/crossplay-cross-save',
    text: 'Check progress sync and storefront cautions before buying on another platform.',
  },
  {
    title: 'Steam vs Xbox App',
    href: '/games/forza-horizon-6/steam-vs-xbox-app',
    text: 'Decide between Steam, Xbox app, PC Game Pass, and Steam Deck workflows.',
  },
  {
    title: 'PC Requirements',
    href: '/games/forza-horizon-6/pc-requirements',
    text: 'Make sure your PC path is stable before spending on add-ons.',
  },
  {
    title: 'PS5 Release Tracker',
    href: '/games/forza-horizon-6/ps5-release',
    text: 'Track PlayStation 5 availability, wishlist status, and PS5-specific edition cautions.',
  },
  {
    title: 'Release Status',
    href: '/games/forza-horizon-6/release-status',
    text: 'Confirm platform status, Game Pass access, Steam Deck, and PS5 timing.',
  },
];

const editionFaqs: FaqItem[] = [
  {
    question: 'Is Forza Horizon 6 on Game Pass?',
    answer:
      'Yes. Forza.net says Game Pass Ultimate and PC Game Pass members can enjoy Forza Horizon 6 as part of membership access, with Ultimate covering Xbox Series X|S, PC through the Xbox app, and Xbox Cloud Gaming.',
  },
  {
    question: 'Does Premium Upgrade include the full game?',
    answer:
      'No. The official edition table marks Full Game as not included for Premium Upgrade. It is an add-on path for players who already have game access.',
  },
  {
    question: 'Which FH6 edition should a new player start with?',
    answer:
      'Start with Game Pass or Standard if you are unsure. Consider Deluxe for Car Pass and Welcome Pack. Consider Premium only if you want VIP, car packs, and both expansions.',
  },
  {
    question: 'Is Car Pass worth tracking separately?',
    answer:
      'Yes for a tuning site. The official table lists 30 extra cars, which can become weekly tune pages, car pages, and newsletter updates.',
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

export default function ForzaHorizon6GamePassEditionsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Game Pass and Editions', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 editions and add-on paths',
            items: relatedLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(editionFaqs),
        ]}
      />

      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Game Pass and editions</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 Game Pass and editions guide
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                A source-backed buying guide for Standard, Deluxe, Premium,
                Premium Upgrade, Game Pass, Car Pass, VIP, Welcome Pack, and
                expansion decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="forza-primary-button" size="lg">
                  <LocaleLink href="/games/forza-horizon-6/car-pass">
                    Open Car Pass Tracker
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  className="rounded-md"
                  size="lg"
                  variant="outline"
                >
                  <a
                    href="https://forza.net/fh6dlclist"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Official edition table
                    <ExternalLinkIcon className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <ShieldCheckIcon className="size-7 text-cyan-300" />
              <h2 className="mt-5 text-xl font-semibold">
                Fast recommendation
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Unsure players should start with Game Pass or Standard access.
                Premium Upgrade is for players who already have game access and
                want Premium add-ons. Premium Edition is the long-term route
                when expansions and extra cars matter.
              </p>
              <div className="mt-5 grid gap-2">
                {[
                  'Access first',
                  'Add-ons second',
                  'Expansion value later',
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
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {editionCards.map((edition) => {
            const Icon = edition.icon;

            return (
              <article className="forza-card p-5" key={edition.name}>
                <Icon className="size-6 text-amber-300" />
                <h2 className="mt-4 text-lg font-semibold">{edition.name}</h2>
                <p className="mt-2 text-sm font-semibold text-cyan-200">
                  {edition.includes}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {edition.bestFor}
                </p>
                <p className="mt-4 rounded-md border border-white/10 bg-black/30 px-3 py-2 text-xs leading-5 text-zinc-500">
                  Watch: {edition.watch}
                </p>
              </article>
            );
          })}
        </div>

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.75fr_1.25fr_1.2fr]">
            <span>Access path</span>
            <span>What it means</span>
            <span>Best next step</span>
          </div>
          {gamePassRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.75fr_1.25fr_1.2fr]"
              href={row.href}
              key={row.path}
            >
              <span className="font-semibold text-zinc-50">{row.path}</span>
              <span className="leading-6 text-cyan-100">{row.access}</span>
              <span className="leading-6 text-zinc-400">{row.bestNext}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="forza-panel p-5">
            <GiftIcon className="size-6 text-fuchsia-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Add-ons that change the decision
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The edition choice is less about the word Premium and more about
              which content loop you actually use: weekly cars, VIP perks,
              starter bonuses, or future expansions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {addonRows.map((row) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={row.addOn}
              >
                <BadgeCheckIcon className="size-5 text-amber-300" />
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {row.addOn}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {row.detail}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {row.reason}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {buyingRules.map((rule) => (
            <article className="forza-card p-5" key={rule.title}>
              <WalletCardsIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold">{rule.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {rule.text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {relatedLinks.map((link) => (
            <LocaleLink
              className="forza-card p-5"
              href={link.href}
              key={link.title}
            >
              <CalendarClockIcon className="size-5 text-amber-300" />
              <h2 className="mt-4 text-lg font-semibold">{link.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {link.text}
              </p>
              <p className="mt-4 inline-flex items-center text-cyan-200 text-xs font-semibold uppercase tracking-[0.16em]">
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
                Sources used for this guide
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use these before changing Game Pass, edition, Premium Upgrade,
                Car Pass, VIP, or expansion wording.
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
            <WalletCardsIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">FAQ</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {editionFaqs.map((faq) => (
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
        description="Get FH6 edition, Car Pass, platform, and tuning updates as official pages and weekly drops change."
        title="Track FH6 edition and add-on updates"
      />
    </main>
  );
}
