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
  CalendarClockIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
  Gamepad2Icon,
  MonitorIcon,
  ShieldCheckIcon,
  TimerIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/release-status';
const title = 'Forza Horizon 6 Release Status - Platforms and Access';
const description =
  'Forza Horizon 6 release status page covering Xbox, PC, Game Pass, Steam, Steam Deck, PS5 timing, Premium Upgrade, and Apex Tune Hub next steps.';

const statusCards = [
  {
    label: 'Launch status',
    value: 'Available now',
    detail: 'Official Forza posts say FH6 launched May 19, 2026.',
    icon: CheckCircle2Icon,
  },
  {
    label: 'Main platforms',
    value: 'Xbox Series X|S and PC',
    detail: 'Playable through Xbox app and Steam according to Forza.net.',
    icon: Gamepad2Icon,
  },
  {
    label: 'Game Pass',
    value: 'Included',
    detail:
      'Standard Edition is included with Game Pass Ultimate and PC Game Pass.',
    icon: ShieldCheckIcon,
  },
  {
    label: 'PS5',
    value: 'Later in 2026',
    detail: 'Forza.net says PlayStation 5 release is planned later this year.',
    icon: TimerIcon,
  },
];

const platformRows = [
  {
    platform: 'Xbox Series X|S',
    status: 'Available',
    source: 'Forza.net now-available post',
    nextStep: 'Use the main FH6 hub, weekly tracker, and tune calculator.',
    href: '/games/forza-horizon-6',
  },
  {
    platform: 'PC Xbox app',
    status: 'Available',
    source: 'Forza.net now-available post',
    nextStep: 'Use the PC settings page before chasing ultra presets.',
    href: '/settings/forza-horizon-6-pc',
  },
  {
    platform: 'Steam',
    status: 'Available',
    source: 'Forza.net now-available post',
    nextStep:
      'Use Steam Deck and PC settings if you are tuning handheld or laptop play.',
    href: '/settings/forza-horizon-6-steam-deck',
  },
  {
    platform: 'Steam Deck',
    status: 'Verified',
    source: 'Forza.net Steam Deck post',
    nextStep: 'Start with battery, FPS, and input notes before changing tunes.',
    href: '/settings/forza-horizon-6-steam-deck',
  },
  {
    platform: 'PlayStation 5',
    status: 'Planned later in 2026',
    source: 'Forza.net FAQ and launch posts',
    nextStep:
      'Do not publish PS5 performance claims until official details arrive.',
    href: '/games/forza-horizon-6/official-sources',
  },
];

const accessPaths = [
  {
    title: 'Game Pass player',
    body: 'Start with Standard Edition access, then use the tune calculator and weekly tracker for the fastest useful path.',
    href: '/games/forza-horizon-6/game-pass-editions',
  },
  {
    title: 'Premium Upgrade player',
    body: 'Use Car Pass and weekly pages to track added cars, then route each verified car into a setup page.',
    href: '/games/forza-horizon-6/car-pass',
  },
  {
    title: 'PC or handheld player',
    body: 'Tune performance first, then tune the car. Stable frame time matters before suspension and gearing tests.',
    href: '/settings/forza-horizon-6-pc',
  },
  {
    title: 'Cross-save player',
    body: 'Check crossplay, save sync, storefront, and DLC ownership details before switching between Xbox, Steam, handheld, or PS5.',
    href: '/games/forza-horizon-6/crossplay-cross-save',
  },
  {
    title: 'PS5 watcher',
    body: 'Keep release claims source-backed and avoid publishing settings, FPS, or input advice before official availability.',
    href: '/games/forza-horizon-6/official-sources',
  },
];

const sourceLinks = [
  {
    title: 'Forza Horizon 6 FAQ',
    href: 'https://forza.net/news/forza-horizon-6-faq',
    note: 'Release date, Game Pass, Premium Upgrade, and PS5 timing.',
  },
  {
    title: 'Forza Horizon 6 now available',
    href: 'https://forza.net/news/forza-horizon-6-now-available',
    note: 'Launch availability, platforms, Game Pass inclusion, cars, and editions.',
  },
  {
    title: 'Forza Horizon 6 release announcement',
    href: 'https://forza.net/news/forza-horizon-6-coming-may-2026',
    note: 'May 19 date, May 15 early access, Xbox/PC launch, and PS5 wording.',
  },
  {
    title: 'Steam Deck Verified post',
    href: 'https://forza.net/news/forza-horizon-6-steam-deck',
    note: 'Handheld status and Steam Deck positioning.',
  },
];

const releaseFaqs: FaqItem[] = [
  {
    question: 'Is Forza Horizon 6 released?',
    answer:
      'Yes. Official Forza posts say Forza Horizon 6 launched on May 19, 2026 for Xbox Series X|S and PC.',
  },
  {
    question: 'Can Game Pass players play Forza Horizon 6?',
    answer:
      'Yes. Official Forza launch copy says the Standard Edition is included with Game Pass Ultimate and PC Game Pass.',
  },
  {
    question: 'Is Forza Horizon 6 on Steam Deck?',
    answer:
      'Forza.net says Forza Horizon 6 is Steam Deck Verified. Use Apex Tune Hub settings as baseline performance notes, not official support documents.',
  },
  {
    question: 'Is Forza Horizon 6 on PS5?',
    answer:
      'Forza.net says PlayStation 5 release is planned later in 2026. Apex Tune Hub should not publish PS5 performance or settings claims before official availability details.',
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

export default function ForzaHorizon6ReleaseStatusPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Release Status', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 release status routes',
            items: platformRows.map((row) => ({
              name: row.platform,
              path: row.href,
            })),
          }),
          buildFaqJsonLd(releaseFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Release status</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 release status
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                A source-backed status page for launch date, Xbox, PC, Steam,
                Game Pass, Steam Deck, PS5 timing, Premium Upgrade access, and
                the next Apex Tune Hub page to open.
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
                  <LocaleLink href="/games/forza-horizon-6/official-sources">
                    Check Official Sources
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <CalendarClockIcon className="size-7 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Current answer rule
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Treat this page as the release-status router. Official platform
                facts come from Forza.net; tuning and settings paths are Apex
                Tune Hub baselines that still need player testing.
              </p>
              <div className="mt-5 grid gap-2">
                {['Launch', 'Game Pass', 'Steam Deck', 'PS5'].map((item) => (
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
        <div className="mb-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        <div className="forza-panel overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.7fr_0.7fr_0.9fr_1.2fr]">
            <span>Platform</span>
            <span>Status</span>
            <span>Source</span>
            <span>Next Apex path</span>
          </div>
          {platformRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.7fr_0.7fr_0.9fr_1.2fr]"
              key={row.platform}
            >
              <span className="font-semibold text-zinc-50">{row.platform}</span>
              <span className="leading-6 text-amber-100">{row.status}</span>
              <span className="leading-6 text-zinc-400">{row.source}</span>
              <LocaleLink
                className="leading-6 text-cyan-200 transition hover:text-cyan-100"
                href={row.href}
              >
                {row.nextStep}
              </LocaleLink>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="forza-panel p-5">
            <MonitorIcon className="size-6 text-fuchsia-300" />
            <h2 className="mt-4 text-xl font-semibold">
              Pick the right access path
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Release-status searches should not dead-end. Send every visitor to
              the next useful page: a tune, a settings guide, Car Pass, or the
              official source tracker.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {accessPaths.map((path) => (
              <LocaleLink
                className="forza-card p-4"
                href={path.href}
                key={path.title}
              >
                <h3 className="text-base font-semibold text-zinc-100">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {path.body}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-amber-200">
                  Open path
                  <ArrowRightIcon className="ml-2 size-4" />
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {releaseFaqs.map((faq) => (
            <article className="forza-card p-5" key={faq.question}>
              <ShieldCheckIcon className="size-5 text-amber-300" />
              <h2 className="mt-3 text-lg font-semibold text-zinc-50">
                {faq.question}
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <ShieldCheckIcon className="size-5 text-cyan-300" />
            <h2 className="text-xl font-semibold">Official source links</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {sourceLinks.map((source) => (
              <a
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40"
                href={source.href}
                key={source.href}
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center justify-between gap-3 font-semibold text-cyan-200">
                  {source.title}
                  <ExternalLinkIcon className="size-4 shrink-0" />
                </span>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {source.note}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <ApexNewsletterCta
        description="Get source-backed release, platform, settings, weekly, and tuning updates for Forza Horizon 6."
        title="Follow FH6 status and tuning updates"
      />
    </main>
  );
}
