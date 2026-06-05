import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { ForzaHorizon6GuideMediaSources } from '@/components/games/forza-horizon-6-guide-media-sources';
import { ForzaHorizon6GuideVisual } from '@/components/games/forza-horizon-6-guide-visual';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6Guides,
  getForzaHorizon6Guide,
  getForzaHorizon6GuideMediaSources,
} from '@/lib/guides/forza-horizon-6-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircle2Icon,
  ClipboardCheckIcon,
  GaugeIcon,
  GitBranchIcon,
  RadioTowerIcon,
  RouteIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

type GuidePageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export function generateStaticParams() {
  return forzaHorizon6Guides.map((guide) => ({
    slug: guide.slug,
  }));
}

function getGuideCluster(guide: { slug: string; eyebrow: string }) {
  const key = `${guide.slug} ${guide.eyebrow}`.toLowerCase();

  if (
    key.includes('wheel') ||
    key.includes('controller') ||
    key.includes('steam-deck') ||
    key.includes('settings')
  ) {
    return 'Settings and devices';
  }

  if (
    key.includes('fix-') ||
    key.includes('understeer') ||
    key.includes('oversteer') ||
    key.includes('wheelspin') ||
    key.includes('braking') ||
    key.includes('top-speed') ||
    key.includes('launch')
  ) {
    return 'Handling fixes';
  }

  if (
    key.includes('upgrade') ||
    key.includes('compound') ||
    key.includes('engine swap') ||
    key.includes('drivetrain') ||
    key.includes('swap')
  ) {
    return 'Upgrade planning';
  }

  if (
    key.includes('drift') ||
    key.includes('rally') ||
    key.includes('drag') ||
    key.includes('road') ||
    key.includes('street') ||
    key.includes('trial') ||
    key.includes('seasonal') ||
    key.includes('forzathon') ||
    key.includes('auction') ||
    key.includes('tune code') ||
    key.includes('rivals') ||
    key.includes('time attack') ||
    key.includes('cross-country') ||
    key.includes('cross country') ||
    key.includes('offroad') ||
    key.includes('drift zone') ||
    key.includes('speed trap') ||
    key.includes('danger sign') ||
    key.includes('trailblazer')
  ) {
    return 'Event builds';
  }

  return 'Launch and starter guides';
}

function guideSlugFromHref(href: string) {
  const match = href.match(/\/games\/forza-horizon-6\/guides\/([^/?#]+)/);

  return match?.[1];
}

function uniqueGuides(guides: typeof forzaHorizon6Guides) {
  const seen = new Set<string>();

  return guides.filter((guide) => {
    if (seen.has(guide.slug)) {
      return false;
    }

    seen.add(guide.slug);
    return true;
  });
}

function getRelatedGuides(guide: (typeof forzaHorizon6Guides)[number]) {
  const explicitSlugs = guide.relatedLinks
    .map((link) => guideSlugFromHref(link.href))
    .filter((slug): slug is string => Boolean(slug));
  const explicitGuides = explicitSlugs
    .map((slug) => getForzaHorizon6Guide(slug))
    .filter((item): item is (typeof forzaHorizon6Guides)[number] =>
      Boolean(item)
    );
  const sameClusterGuides = forzaHorizon6Guides.filter(
    (item) =>
      item.slug !== guide.slug &&
      getGuideCluster(item) === getGuideCluster(guide)
  );

  return uniqueGuides([...explicitGuides, ...sameClusterGuides]).slice(0, 4);
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata | undefined> {
  const { locale, slug } = await params;
  const guide = getForzaHorizon6Guide(slug);

  if (!guide) {
    notFound();
  }

  return constructMetadata({
    title: guide.title,
    description: guide.description,
    locale,
    pathname: `/games/forza-horizon-6/guides/${guide.slug}`,
  });
}

export default async function ForzaHorizon6GuidePage({
  params,
}: GuidePageProps) {
  const { slug } = await params;
  const guide = getForzaHorizon6Guide(slug);

  if (!guide) {
    notFound();
  }

  const relatedGuides = getRelatedGuides(guide);
  const pathname = `/games/forza-horizon-6/guides/${guide.slug}`;
  const guideCluster = getGuideCluster(guide);
  const guideIntentClusters = guide.intentClusters ?? [];
  const guideQuickFixRows = guide.quickFixRows ?? [];
  const primaryActionLabel = guide.primaryCta.label.replace(/^Open\s+/i, '');
  const relatedGuideSummary = relatedGuides
    .map((item) => item.h1.replace(/^Forza Horizon 6\s+/i, ''))
    .join(', ');
  const guideActionCards = [
    {
      title: 'Problem',
      text: guide.intro,
      icon: RouteIcon,
    },
    {
      title: 'First action',
      text: `Start with ${guide.primaryCta.label.toLowerCase()} before changing unrelated setup groups.`,
      icon: GaugeIcon,
    },
    {
      title: 'Validation loop',
      text: 'Keep the same car, route, assists, device, and weather while testing one change at a time.',
      icon: ClipboardCheckIcon,
    },
    {
      title: 'Next handoff',
      text: `Route unresolved questions into the next-read set below: ${relatedGuideSummary}.`,
      icon: RadioTowerIcon,
    },
  ];
  const guideScorecardRows = [
    ['Search intent', guideCluster],
    ['Primary tool', guide.primaryCta.label],
    ['Main sections', `${guide.sections.length} setup steps`],
    ['Deep-dive blocks', `${guide.deepDive?.length ?? 0} groups`],
    ['Related guides', `${relatedGuides.length} contextual next reads`],
  ];
  const guideTestNoteRows = [
    [
      'Car and class',
      'Record the exact car, PI class, drivetrain, and upgrade direction.',
    ],
    [
      'Route or event',
      'Name the route section, drift zone, speed trap, or weekly restriction.',
    ],
    [
      'Setup change',
      'Write one changed setting group instead of listing every slider.',
    ],
    ['Result', 'Keep, undo, or retest the change with the same car and route.'],
    [
      'Next action',
      `Open the ${primaryActionLabel} or a related guide if the issue remains.`,
    ],
  ];
  const guideDecisionCards = [
    {
      title: 'Keep the change',
      text: 'The car improves in the target section without creating a new problem elsewhere.',
    },
    {
      title: 'Retest smaller',
      text: 'The direction is useful, but the car now feels nervous, dull, slow, or inconsistent.',
    },
    {
      title: 'Undo and reroute',
      text: 'The change hides the real issue. Move to the linked calculator, settings page, or related guide.',
    },
  ];
  const faqs: FaqItem[] = [
    {
      question: `What is the best first step for ${guide.h1}?`,
      answer: guide.intro,
    },
    ...guide.sections.slice(0, 3).map((section) => ({
      question: `${section.title}: what should I do?`,
      answer: section.body,
    })),
  ];
  const howToSteps: FaqItem[] = [
    ...guide.sections.map((section) => ({
      question: section.title,
      answer: `${section.body} ${section.bullets.join(' ')}`,
    })),
    ...(guide.deepDive ?? []).flatMap((group) =>
      group.cards.map((card) => ({
        question: card.title,
        answer: `${card.body} ${card.bullets.join(' ')}`,
      }))
    ),
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Guides', path: '/games/forza-horizon-6/guides' },
            { name: guide.h1, path: pathname },
          ]),
          buildArticleJsonLd({
            title: guide.h1,
            description: guide.description,
            path: pathname,
          }),
          buildHowToJsonLd({
            title: `How to use ${guide.h1}`,
            description: guide.description,
            path: pathname,
            steps: howToSteps,
          }),
          buildItemListJsonLd({
            title: `${guide.h1} related FH6 guides`,
            items: relatedGuides.map((item) => ({
              name: item.h1,
              path: `/games/forza-horizon-6/guides/${item.slug}`,
            })),
          }),
          buildItemListJsonLd({
            title: `${guide.h1} guide decision outcomes`,
            items: guideDecisionCards.map((item) => ({
              name: item.title,
              path: pathname,
            })),
          }),
          ...(guideIntentClusters.length
            ? [
                buildItemListJsonLd({
                  title: `${guide.h1} search intent clusters`,
                  items: guideIntentClusters.map((item) => ({
                    name: item.query,
                    path: item.href,
                  })),
                }),
              ]
            : []),
          ...(guideQuickFixRows.length
            ? [
                buildItemListJsonLd({
                  title: `${guide.h1} quick fix routing`,
                  items: guideQuickFixRows.map((item) => ({
                    name: item.trigger,
                    path: item.toolHref,
                  })),
                }),
              ]
            : []),
          buildFaqJsonLd(faqs),
        ]}
      />
      <main className="forza-page text-zinc-50">
        <section className="border-b border-zinc-800">
          <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <LocaleLink
              href="/games/forza-horizon-6/guides"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-200"
            >
              <ArrowLeftIcon className="size-4" />
              Back to guides
            </LocaleLink>

            <div className="mt-5 grid items-start gap-6 lg:grid-cols-[1fr_0.72fr]">
              <div>
                <p className="forza-chip">{guide.eyebrow}</p>
                <h1 className="forza-neon-title mt-5 max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                  {guide.h1}
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                  {guide.intro}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" className="forza-primary-button">
                    <LocaleLink href={guide.primaryCta.href}>
                      {guide.primaryCta.label}
                      <ArrowRightIcon className="ml-2 size-4" />
                    </LocaleLink>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-md"
                  >
                    <LocaleLink href="/tools/forza-horizon-6-tune-presets">
                      Tune Presets
                    </LocaleLink>
                  </Button>
                </div>
              </div>

              <div className="forza-panel p-5">
                <BookOpenIcon className="size-7 text-cyan-300" />
                <h2 className="mt-4 text-xl font-semibold">Related tools</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Cluster: {guideCluster}. Use these links to move from the
                  guide answer into a tool, settings page, car hub, or follow-up
                  guide.
                </p>
                <div className="mt-4 grid gap-3">
                  {guide.relatedLinks.map((link) => (
                    <LocaleLink
                      className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                      href={link.href}
                      key={link.href}
                    >
                      {link.label}
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-5">
            <ForzaHorizon6GuideVisual
              title={guide.h1}
              cluster={guideCluster}
              primaryAction={primaryActionLabel}
              sections={guide.sections}
            />
          </div>

          <div className="mb-5 grid items-start gap-4 lg:grid-cols-[0.76fr_1.24fr]">
            <div className="forza-panel p-5">
              <GitBranchIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-2xl font-semibold">
                Guide execution map
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This guide should answer the immediate problem, send the player
                into the right tool, then keep the next read context-specific
                instead of sending every page to the same generic list.
              </p>
            </div>
            <div className="grid items-start gap-3 md:grid-cols-2">
              {guideActionCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article className="forza-card p-4" key={card.title}>
                    <Icon className="size-5 text-cyan-300" />
                    <h2 className="mt-3 text-base font-semibold text-zinc-100">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {card.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          {guideIntentClusters.length ? (
            <div className="forza-panel mb-5 overflow-hidden">
              <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.75fr_0.78fr_1.35fr]">
                <span>Search query</span>
                <span>Signal</span>
                <span>Best answer</span>
              </div>
              {guideIntentClusters.map((item) => (
                <LocaleLink
                  className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.75fr_0.78fr_1.35fr]"
                  href={item.href}
                  key={item.query}
                >
                  <span className="min-w-0 font-semibold text-zinc-50 [overflow-wrap:anywhere]">
                    {item.query}
                  </span>
                  <span className="min-w-0 text-amber-200 [overflow-wrap:anywhere]">
                    {item.searchSignal}
                  </span>
                  <span className="min-w-0 leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                    {item.answer}
                  </span>
                </LocaleLink>
              ))}
            </div>
          ) : null}

          {guideQuickFixRows.length ? (
            <div className="forza-panel mb-5 overflow-hidden">
              <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.72fr_0.9fr_1.2fr_0.42fr]">
                <span>Trigger</span>
                <span>Likely cause</span>
                <span>First test</span>
                <span>Tool</span>
              </div>
              {guideQuickFixRows.map((row) => (
                <div
                  className="grid min-w-0 gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.72fr_0.9fr_1.2fr_0.42fr]"
                  key={row.trigger}
                >
                  <span className="min-w-0 font-semibold text-zinc-50 [overflow-wrap:anywhere]">
                    {row.trigger}
                  </span>
                  <span className="min-w-0 leading-6 text-zinc-400 [overflow-wrap:anywhere]">
                    {row.likelyCause}
                  </span>
                  <span className="min-w-0 leading-6 text-zinc-300 [overflow-wrap:anywhere]">
                    {row.firstTest}
                  </span>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="w-full rounded-md"
                  >
                    <LocaleLink href={row.toolHref}>Open</LocaleLink>
                  </Button>
                </div>
              ))}
            </div>
          ) : null}

          <div className="grid items-start gap-4 lg:grid-cols-3">
            {guide.sections.map((section) => (
              <article className="forza-card p-5" key={section.title}>
                <CheckCircle2Icon className="size-5 text-amber-300" />
                <h2 className="mt-4 text-xl font-semibold">{section.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {section.body}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
                  {section.bullets.map((bullet) => (
                    <li
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2"
                      key={bullet}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {guide.deepDive?.map((group) => (
            <div className="forza-panel mt-5 p-5" key={group.title}>
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Deep dive
                </p>
                <h2 className="mt-2 text-xl font-semibold">{group.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {group.description}
                </p>
              </div>
              <div className="mt-5 grid items-start gap-4 lg:grid-cols-3">
                {group.cards.map((card) => (
                  <article
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                    key={card.title}
                  >
                    <h3 className="text-base font-semibold text-zinc-100">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {card.body}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-300">
                      {card.bullets.map((bullet) => (
                        <li
                          className="rounded-md border border-cyan-300/15 bg-cyan-300/[0.04] px-3 py-2"
                          key={bullet}
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}

          <ForzaHorizon6GuideMediaSources
            sources={getForzaHorizon6GuideMediaSources(guide)}
          />

          <div className="forza-panel mt-5 p-5">
            <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
              <div>
                <ClipboardCheckIcon className="size-6 text-amber-300" />
                <h2 className="mt-4 text-xl font-semibold">
                  Guide routing scorecard
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  Use this to keep guide pages consistent: one search intent,
                  one primary action, and contextual next reads.
                </p>
              </div>
              <div className="grid gap-2">
                {guideScorecardRows.map(([metric, value]) => (
                  <div
                    className="grid gap-2 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm md:grid-cols-[0.7fr_1.3fr]"
                    key={metric}
                  >
                    <span className="font-semibold text-zinc-100">
                      {metric}
                    </span>
                    <span className="leading-6 text-zinc-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="forza-panel mt-5 p-5">
            <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <RadioTowerIcon className="size-6 text-cyan-300" />
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Guide test note template
                </p>
                <h2 className="mt-3 text-xl font-semibold">
                  Turn this guide into one repeatable setup note
                </h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  A guide page should leave the player with a short test note,
                  not a pile of disconnected slider ideas. These fields keep
                  each FH6 guide useful after the first read.
                </p>
              </div>
              <div className="overflow-hidden rounded-md border border-white/10">
                <div className="grid border-b border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.68fr_1.32fr]">
                  <span>Field</span>
                  <span>What to capture</span>
                </div>
                {guideTestNoteRows.map(([field, note]) => (
                  <div
                    className="grid gap-2 border-b border-white/10 px-4 py-3 text-sm last:border-b-0 md:grid-cols-[0.68fr_1.32fr]"
                    key={field}
                  >
                    <span className="font-semibold text-zinc-100">{field}</span>
                    <span className="leading-6 text-zinc-400">{note}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 grid items-start gap-3 md:grid-cols-3">
              {guideDecisionCards.map((card) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={card.title}
                >
                  <h3 className="text-base font-semibold text-zinc-100">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel mt-5 p-5">
            <h2 className="text-xl font-semibold">FAQ</h2>
            <div className="mt-4 grid items-start gap-3 md:grid-cols-2">
              {faqs.map((faq) => (
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

          <div className="forza-panel mt-5 p-5">
            <h2 className="text-xl font-semibold">Next reads</h2>
            <div className="mt-4 grid items-start gap-3 md:grid-cols-2 lg:grid-cols-4">
              {relatedGuides.map((item) => (
                <LocaleLink
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200 transition hover:border-cyan-300/40 hover:text-cyan-100"
                  href={`/games/forza-horizon-6/guides/${item.slug}`}
                  key={item.slug}
                >
                  {item.h1}
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>
        <ApexNewsletterCta
          description="Get notified when this guide is updated with tested cars, preset links, and patch notes."
          title="Keep this FH6 guide fresh"
        />
      </main>
    </>
  );
}
