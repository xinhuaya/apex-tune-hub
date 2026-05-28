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
  LinkIcon,
  MonitorIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  WalletCardsIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/crossplay-cross-save';
const title = 'Forza Horizon 6 Crossplay and Cross-Save Guide';
const description =
  'Forza Horizon 6 crossplay and cross-save guide for Xbox, Xbox on PC, Steam, Steam Deck, PS5 timing, DLC ownership, and platform switching decisions.';

const statusCards = [
  {
    label: 'Crossplay',
    value: 'Xbox, PC, Steam, PS5',
    detail:
      'Official FAQ wording says cross-platform online play covers Xbox consoles, Xbox on PC, PS5, and Steam.',
    icon: LinkIcon,
  },
  {
    label: 'Cross-save',
    value: 'Supported',
    detail:
      'Official FAQ wording says cross-platform save syncing covers the same major platforms.',
    icon: CloudIcon,
  },
  {
    label: 'Play Anywhere',
    value: 'Xbox + Xbox on PC',
    detail:
      'Forza.net lists Xbox Play Anywhere for console and Xbox PC access.',
    icon: Gamepad2Icon,
  },
  {
    label: 'Steam Deck',
    value: 'Verified path',
    detail:
      'Forza.net says FH6 is Steam Deck Verified and supports cross-save across SteamOS and PC handheld play.',
    icon: SmartphoneIcon,
  },
];

const platformRows = [
  {
    platform: 'Xbox Series X|S',
    crossplay: 'Yes',
    save: 'Yes',
    note: 'Best path if you want console play, Game Pass access, and Xbox ecosystem continuity.',
    href: '/games/forza-horizon-6/release-status',
  },
  {
    platform: 'Xbox app on PC',
    crossplay: 'Yes',
    save: 'Yes',
    note: 'Best path if you use Game Pass or Xbox Play Anywhere and want the cleanest Xbox-to-PC handoff.',
    href: '/settings/forza-horizon-6-pc',
  },
  {
    platform: 'Steam',
    crossplay: 'Yes',
    save: 'Yes',
    note: 'Best path if your PC library, Steam Deck, and handheld workflow live in Steam.',
    href: '/settings/forza-horizon-6-steam-deck',
  },
  {
    platform: 'Steam Deck',
    crossplay: 'Yes',
    save: 'Yes',
    note: 'Use handheld settings first, then tune cars after frame pacing and input feel are stable.',
    href: '/settings/forza-horizon-6-steam-deck',
  },
  {
    platform: 'PlayStation 5',
    crossplay: 'Planned with launch',
    save: 'Official FAQ says supported',
    note: 'Keep PS5 performance and settings claims on hold until the PS5 version is actually available.',
    href: '/games/forza-horizon-6/official-sources',
  },
];

const switchPaths = [
  {
    title: 'Xbox console to Xbox PC',
    icon: Gamepad2Icon,
    risk: 'Lowest friction',
    body: 'Use this path when Game Pass, Xbox Play Anywhere, achievements, and console-to-PC continuity matter most.',
  },
  {
    title: 'Steam PC to Steam Deck',
    icon: SmartphoneIcon,
    risk: 'Handheld settings matter',
    body: 'The save path is the simple part. The real work is handheld FPS, battery, readability, and input testing.',
  },
  {
    title: 'Xbox ecosystem to Steam',
    icon: MonitorIcon,
    risk: 'Check entitlement details',
    body: 'Cross-save can reduce restart pain, but game ownership, DLC, bundles, and storefront entitlements still need checking before buying twice.',
  },
  {
    title: 'Any platform to PS5',
    icon: WalletCardsIcon,
    risk: 'Wait for release details',
    body: 'Do not build PS5 settings pages or transfer guarantees beyond official FAQ language until PS5 launch details are live.',
  },
];

const ownershipRules = [
  {
    title: 'Cross-save is not the same as cross-buy',
    text: 'A synced save does not automatically mean every storefront purchase or DLC entitlement follows everywhere.',
  },
  {
    title: 'Game Pass is an access path, not permanent ownership',
    text: 'Game Pass can be the fastest start, but buying DLC or changing storefronts should be checked against official account rules.',
  },
  {
    title: 'Steam Deck is still a PC settings question',
    text: 'Cross-save can move progress, but portable performance still needs a separate frame pacing and readability baseline.',
  },
  {
    title: 'PS5 advice should stay source-backed',
    text: 'Until the PS5 version is live, avoid FPS, input, graphics, and transfer details beyond official wording.',
  },
];

const relatedLinks = [
  {
    title: 'Release Status',
    href: '/games/forza-horizon-6/release-status',
    text: 'Confirm launch, platform, Game Pass, Steam, Steam Deck, and PS5 timing claims.',
  },
  {
    title: 'PC Requirements',
    href: '/games/forza-horizon-6/pc-requirements',
    text: 'Check whether the PC you are switching to meets listed minimum and recommended specs.',
  },
  {
    title: 'Steam vs Xbox App',
    href: '/games/forza-horizon-6/steam-vs-xbox-app',
    text: 'Choose the cleaner PC path before buying on Steam, Xbox app, or Game Pass.',
  },
  {
    title: 'Steam Deck Settings',
    href: '/settings/forza-horizon-6-steam-deck',
    text: 'Move here when the switch path includes handheld play and portable tuning.',
  },
  {
    title: 'Official Sources',
    href: '/games/forza-horizon-6/official-sources',
    text: 'Use this source tracker before changing platform, save, ownership, or PS5 wording.',
  },
];

const sourceLinks = [
  {
    title: 'Forza Horizon 6 FAQ',
    href: 'https://forza.net/news/forza-horizon-6-faq',
    note: 'Cross-platform online play, cross-platform save syncing, platforms, Game Pass, and PS5 timing.',
  },
  {
    title: 'Forza Horizon 6 features',
    href: 'https://forza.net/news/forza-horizon-6-features',
    note: 'Xbox Play Anywhere and cross-platform play wording.',
  },
  {
    title: 'Steam Deck Verified post',
    href: 'https://forza.net/news/forza-horizon-6-steam-deck',
    note: 'Steam Deck Verified status and cross-save positioning across SteamOS and PC handheld play.',
  },
];

const crossplayFaqs: FaqItem[] = [
  {
    question: 'Does Forza Horizon 6 have crossplay?',
    answer:
      'Official Forza FAQ wording says cross-platform online play is supported across Xbox consoles, Xbox on PC, PlayStation 5, and Steam.',
  },
  {
    question: 'Does Forza Horizon 6 have cross-save?',
    answer:
      'Official Forza FAQ wording says cross-platform save syncing is supported across Xbox consoles, Xbox on PC, PlayStation 5, and Steam.',
  },
  {
    question: 'Does cross-save mean I own the game or DLC everywhere?',
    answer:
      'No. Cross-save is about progress syncing. Storefront ownership, Game Pass access, DLC, bundles, and add-ons still need to be checked before buying or switching platforms.',
  },
  {
    question: 'Should I choose Steam or Xbox app on PC?',
    answer:
      'Choose Xbox app if Game Pass and Xbox Play Anywhere are the priority. Choose Steam if your PC library, Steam Deck, and handheld workflow are centered on Steam.',
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

export default function ForzaHorizon6CrossplayCrossSavePage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Crossplay and Cross-Save', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 platform switch paths',
            items: relatedLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(crossplayFaqs),
        ]}
      />

      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Crossplay and cross-save</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.78fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 crossplay and cross-save guide
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                A source-backed platform switching page for Xbox, Xbox on PC,
                Steam, Steam Deck, PlayStation 5, Game Pass, ownership checks,
                and the next Apex Tune Hub setup page to open.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="forza-primary-button" size="lg">
                  <LocaleLink href="/settings/forza-horizon-6-steam-deck">
                    Steam Deck Settings
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  className="rounded-md"
                  size="lg"
                  variant="outline"
                >
                  <LocaleLink href="/games/forza-horizon-6/release-status">
                    Release Status
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {statusCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div className="forza-panel p-5" key={card.label}>
                    <Icon className="size-6 text-cyan-300" />
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {card.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-zinc-50">
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
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_0.55fr_0.65fr_1.4fr]">
            <span>Platform</span>
            <span>Crossplay</span>
            <span>Cross-save</span>
            <span>Best next step</span>
          </div>
          {platformRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.8fr_0.55fr_0.65fr_1.4fr]"
              href={row.href}
              key={row.platform}
            >
              <span className="font-semibold text-zinc-50">{row.platform}</span>
              <span className="text-cyan-100">{row.crossplay}</span>
              <span className="text-amber-100">{row.save}</span>
              <span className="leading-6 text-zinc-400">{row.note}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {switchPaths.map((path) => {
            const Icon = path.icon;

            return (
              <article className="forza-card p-5" key={path.title}>
                <Icon className="size-6 text-amber-300" />
                <h2 className="mt-4 text-lg font-semibold">{path.title}</h2>
                <p className="mt-2 text-sm font-semibold text-cyan-200">
                  {path.risk}
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {path.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel p-5">
            <ShieldCheckIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Do not confuse progress, access, and ownership
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This is where players make expensive mistakes. Crossplay lets
              people play together. Cross-save moves progress. It does not
              automatically answer every DLC, storefront, or subscription
              question.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {ownershipRules.map((rule) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={rule.title}
              >
                <WalletCardsIcon className="size-5 text-fuchsia-300" />
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
              <LinkIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Sources used for this page
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Use these before changing crossplay, cross-save, Play Anywhere,
                Steam Deck, or PS5 wording.
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
                  <p className="mt-4 inline-flex items-center text-amber-200 text-xs font-semibold uppercase tracking-[0.16em]">
                    Open source
                    <ExternalLinkIcon className="ml-2 size-3" />
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
            {crossplayFaqs.map((faq) => (
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
        description="Get FH6 platform, Steam Deck, PS5, settings, and tuning updates as source-backed pages change."
        title="Track FH6 platform and setup updates"
      />
    </main>
  );
}
