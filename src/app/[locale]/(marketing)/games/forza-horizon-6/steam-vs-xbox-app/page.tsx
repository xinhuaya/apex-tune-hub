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
  CloudIcon,
  ExternalLinkIcon,
  Gamepad2Icon,
  HardDriveIcon,
  MonitorIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  WalletCardsIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/steam-vs-xbox-app';
const title = 'Forza Horizon 6 Steam vs Xbox App vs PC Game Pass';
const description =
  'Forza Horizon 6 Steam vs Xbox app vs PC Game Pass guide for PC players choosing storefront, subscription access, Steam Deck, Xbox Play Anywhere, cross-save, and add-ons.';

const quickVerdicts = [
  {
    label: 'Choose Steam if',
    value: 'Steam Deck and library matter',
    detail:
      'Steam is the cleanest path when your PC library, controller profiles, remote play, and handheld workflow live in Steam.',
    icon: SmartphoneIcon,
  },
  {
    label: 'Choose Xbox app if',
    value: 'Game Pass or Play Anywhere matter',
    detail:
      'Xbox app is the natural PC path when you want PC Game Pass, Xbox ecosystem continuity, and Xbox Play Anywhere buying logic.',
    icon: Gamepad2Icon,
  },
  {
    label: 'Use Game Pass if',
    value: 'You want to test first',
    detail:
      'PC Game Pass lets you try the Standard Edition path before deciding whether Premium add-ons are worth it.',
    icon: WalletCardsIcon,
  },
  {
    label: 'Decide after',
    value: 'Cross-save and add-ons',
    detail:
      'Cross-save helps progress, but storefront ownership, DLC, and subscriptions still need a separate buying check.',
    icon: CloudIcon,
  },
];

const storefrontRows = [
  {
    option: 'Steam',
    bestFor: 'Steam Deck, Steam library, Steam friends, controller profiles',
    tradeoff:
      'You are outside PC Game Pass. Check add-on ownership before assuming every Xbox ecosystem purchase follows.',
    next: 'Use Steam Deck settings if handheld play is the reason.',
    href: '/settings/forza-horizon-6-steam-deck',
  },
  {
    option: 'Xbox app on PC',
    bestFor: 'PC Game Pass, Xbox Play Anywhere, Xbox ecosystem continuity',
    tradeoff:
      'Less natural if your main goal is Steam Deck library management or Steam-first community workflows.',
    next: 'Use PC settings and Game Pass editions before buying add-ons.',
    href: '/games/forza-horizon-6/game-pass-editions',
  },
  {
    option: 'PC Game Pass',
    bestFor:
      'Trying FH6 before buying, Standard Edition access, short-term testing',
    tradeoff:
      'Subscription access is not the same as owning the game forever or owning all DLC.',
    next: 'Use PC requirements, then decide whether Premium Upgrade makes sense.',
    href: '/games/forza-horizon-6/pc-requirements',
  },
  {
    option: 'Xbox Game Pass Ultimate',
    bestFor: 'Xbox console, PC, and cloud access from one subscription',
    tradeoff:
      'Good for access breadth, but still separate from Steam library preference and permanent ownership.',
    next: 'Use release status and cross-save guide before switching platforms.',
    href: '/games/forza-horizon-6/crossplay-cross-save',
  },
];

const decisionCards = [
  {
    title: 'Handheld-first player',
    icon: SmartphoneIcon,
    recommendation: 'Steam first',
    body: 'If Steam Deck is your main reason for PC play, choose the path that keeps install, controller profile, and library management simple.',
  },
  {
    title: 'Game Pass tester',
    icon: WalletCardsIcon,
    recommendation: 'PC Game Pass first',
    body: 'Use subscription access to decide whether FH6 becomes a long-term game before buying Premium or DLC.',
  },
  {
    title: 'Xbox console plus PC player',
    icon: Gamepad2Icon,
    recommendation: 'Xbox app first',
    body: 'Xbox app keeps the purchase and access decision closer to Xbox Play Anywhere and Game Pass logic.',
  },
  {
    title: 'Performance tuner',
    icon: MonitorIcon,
    recommendation: 'Either, then settings',
    body: 'The storefront does not fix stutter. Check requirements, SSD space, and PC settings before blaming car tunes.',
  },
];

const comparisonRules = [
  {
    title: 'Cross-save is not cross-buy',
    text: 'Progress sync can reduce restart pain, but it does not automatically settle game ownership, subscriptions, or DLC on every storefront.',
  },
  {
    title: 'Premium Upgrade needs game access',
    text: 'If you use Game Pass or Standard as your base, treat Premium Upgrade as add-on content, not as the full game by itself.',
  },
  {
    title: 'Steam Deck changes the equation',
    text: 'Steam may be worth choosing even when Game Pass is cheaper short-term if handheld convenience is the main use case.',
  },
  {
    title: 'Install path affects troubleshooting',
    text: 'When a PC issue appears, document storefront, drive, controller path, overlay, and settings before changing a car tune.',
  },
];

const troubleshootingRows = [
  {
    symptom: 'I want to try FH6 for one month',
    choose: 'PC Game Pass',
    then: 'Use Standard Edition access and wait before buying Premium add-ons.',
  },
  {
    symptom: 'I mainly play on Steam Deck',
    choose: 'Steam',
    then: 'Use the Steam Deck settings page before chasing ultra visuals.',
  },
  {
    symptom: 'I switch between Xbox console and PC',
    choose: 'Xbox app or Game Pass Ultimate',
    then: 'Check Xbox Play Anywhere and cross-save wording before buying twice.',
  },
  {
    symptom: 'I want permanent ownership on PC',
    choose: 'Steam or Microsoft Store purchase',
    then: 'Compare DLC and upgrade paths before deciding on Premium.',
  },
];

const relatedLinks = [
  {
    title: 'Game Pass & Editions',
    href: '/games/forza-horizon-6/game-pass-editions',
    text: 'Compare Standard, Deluxe, Premium, Premium Upgrade, Car Pass, VIP, and expansions.',
  },
  {
    title: 'Crossplay & Cross-Save',
    href: '/games/forza-horizon-6/crossplay-cross-save',
    text: 'Check save sync, storefront caution, PS5, Steam, and Xbox app platform paths.',
  },
  {
    title: 'Steam Deck Settings',
    href: '/settings/forza-horizon-6-steam-deck',
    text: 'Use this when the Steam decision is really about handheld play.',
  },
  {
    title: 'PC Requirements',
    href: '/games/forza-horizon-6/pc-requirements',
    text: 'Check CPU, GPU, RAM, SSD, and storage before picking a PC storefront.',
  },
];

const sourceLinks = [
  {
    title: 'Forza Horizon 6 now available',
    href: 'https://forza.net/news/forza-horizon-6-now-available',
    note: 'Xbox app, Steam, Game Pass Standard Edition, and launch availability wording.',
  },
  {
    title: 'Forza Horizon 6 Steam Deck',
    href: 'https://forza.net/news/forza-horizon-6-steam-deck',
    note: 'Steam preload, Steam Deck Verified, Premium Edition, and handheld positioning.',
  },
  {
    title: 'Forza Horizon 6 PC specs',
    href: 'https://support.forzamotorsport.net/hc/en-us/articles/50088215399827-Forza-Horizon-6-PC-Specs',
    note: 'PC Game Pass, Xbox app, Steam, system requirements, and handheld cross-save support wording.',
  },
  {
    title: 'Xbox Forza Horizon 6 page',
    href: 'https://www.xbox.com/en-US/games/forza-horizon-6',
    note: 'Game Pass, Xbox on PC, Steam, PlayStation, and platform icon positioning.',
  },
];

const steamVsXboxFaqs: FaqItem[] = [
  {
    question: 'Should I play Forza Horizon 6 on Steam or Xbox app on PC?',
    answer:
      'Choose Steam if Steam Deck, Steam library, and Steam controller workflows matter most. Choose Xbox app if PC Game Pass, Xbox Play Anywhere, or Xbox ecosystem continuity matters most.',
  },
  {
    question: 'Is Forza Horizon 6 on PC Game Pass?',
    answer:
      'Yes. Official Forza launch copy says the Standard Edition is included with PC Game Pass, while Game Pass Ultimate also covers broader Xbox and cloud access.',
  },
  {
    question: 'Does Steam Deck make Steam the better choice?',
    answer:
      'Often, yes, if handheld play is a major reason you are buying. The official Steam Deck post says FH6 is Steam Deck Verified, but you should still use handheld settings for FPS, heat, and readability.',
  },
  {
    question: 'Will my DLC follow between Steam and Xbox app?',
    answer:
      'Do not assume that automatically. Cross-save is about progress syncing. Storefront purchases, subscriptions, and add-ons should be checked before buying twice.',
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

export default function ForzaHorizon6SteamVsXboxAppPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Steam vs Xbox App', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 PC storefront decision paths',
            items: relatedLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(steamVsXboxFaqs),
        ]}
      />

      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">PC storefront decision</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.82fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 Steam vs Xbox app vs PC Game Pass
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                A practical PC buying guide for choosing Steam, Xbox app, PC
                Game Pass, or Game Pass Ultimate without mixing up access,
                ownership, Steam Deck convenience, and cross-save.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="forza-primary-button" size="lg">
                  <LocaleLink href="/games/forza-horizon-6/game-pass-editions">
                    Compare editions
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  className="rounded-md"
                  size="lg"
                  variant="outline"
                >
                  <LocaleLink href="/settings/forza-horizon-6-steam-deck">
                    Steam Deck path
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickVerdicts.map((card) => {
                const Icon = card.icon;

                return (
                  <div className="forza-panel p-5" key={card.label}>
                    <Icon className="size-6 text-cyan-300" />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {card.label}
                    </p>
                    <p className="mt-2 text-xl font-semibold text-zinc-50">
                      {card.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {card.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.6fr_1fr_1.1fr_1fr]">
            <span>Option</span>
            <span>Best for</span>
            <span>Tradeoff</span>
            <span>Next page</span>
          </div>
          {storefrontRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.6fr_1fr_1.1fr_1fr]"
              href={row.href}
              key={row.option}
            >
              <span className="font-semibold text-zinc-50">{row.option}</span>
              <span className="leading-6 text-cyan-100">{row.bestFor}</span>
              <span className="leading-6 text-zinc-400">{row.tradeoff}</span>
              <span className="leading-6 text-amber-100">{row.next}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {decisionCards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="forza-card p-5" key={card.title}>
                <Icon className="size-6 text-amber-300" />
                <h2 className="mt-4 text-lg font-semibold">{card.title}</h2>
                <p className="mt-2 text-sm font-semibold text-cyan-200">
                  {card.recommendation}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {card.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <ShieldCheckIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              The decision is not only price
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Game Pass can be the cheapest way to test FH6, Steam can be the
              cleanest handheld path, and Xbox app can be the simplest Xbox
              ecosystem path. Pick the workflow you will actually use.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {comparisonRules.map((rule) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={rule.title}
              >
                <HardDriveIcon className="size-5 text-fuchsia-300" />
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {rule.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {rule.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_0.7fr_1.2fr]">
            <span>If this is your situation</span>
            <span>Choose</span>
            <span>Then</span>
          </div>
          {troubleshootingRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_0.7fr_1.2fr]"
              key={row.symptom}
            >
              <span className="leading-6 text-zinc-300">{row.symptom}</span>
              <span className="font-semibold text-cyan-100">{row.choose}</span>
              <span className="leading-6 text-zinc-400">{row.then}</span>
            </div>
          ))}
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
              <p className="mt-4 inline-flex items-center text-amber-200 text-xs font-semibold uppercase tracking-[0.16em]">
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
                Use these before changing Xbox app, Steam, Game Pass, Steam
                Deck, or PC storefront wording.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
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
            <CloudIcon className="size-5 text-cyan-300" />
            <h2 className="text-lg font-semibold">FAQ</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {steamVsXboxFaqs.map((faq) => (
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
        description="Get FH6 PC storefront, Game Pass, Steam Deck, settings, and tuning updates as official pages change."
        title="Track FH6 PC platform updates"
      />
    </main>
  );
}
