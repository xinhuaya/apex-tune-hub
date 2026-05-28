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
  CheckCircle2Icon,
  CpuIcon,
  ExternalLinkIcon,
  GaugeIcon,
  HardDriveIcon,
  MonitorCogIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  ZapIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/pc-requirements';
const title = 'Forza Horizon 6 PC Requirements - Minimum and Recommended';
const description =
  'Forza Horizon 6 PC requirements guide with minimum specs, recommended specs, SSD and storage notes, upgrade priorities, and Apex Tune Hub settings links.';

const minimumSpecs = [
  ['OS', 'Windows 10 22H2 (version 19045) or higher'],
  ['CPU', 'Intel i5-8400 or AMD Ryzen 5 1600'],
  ['Memory', '16 GB RAM'],
  ['Graphics', 'Nvidia GTX 1650, AMD RX 6500 XT, or Intel Arc A380'],
  ['DirectX', 'Version 12'],
  ['Network', 'Broadband internet connection'],
  ['Storage', '167 GB available space'],
  ['Additional note', 'SSD required'],
];

const recommendedSpecs = [
  ['OS', 'Windows 10 22H2 (version 19045) or higher'],
  ['CPU', 'Intel i5-12400F or AMD Ryzen 5 5600X'],
  ['Memory', '16 GB RAM'],
  ['Graphics', 'NVIDIA RTX 3060 Ti, AMD RX 6700 XT, or Intel Arc A580'],
  ['DirectX', 'Version 12'],
  ['Network', 'Broadband internet connection'],
  ['Storage', '167 GB available space'],
  ['Additional note', 'SSD required'],
];

const specGroups = [
  {
    label: 'Minimum',
    rows: minimumSpecs,
    helper: 'Use this as the entry gate.',
  },
  {
    label: 'Recommended',
    rows: recommendedSpecs,
    helper: 'Use this as the safer testing baseline.',
  },
];

const requirementHighlights = [
  {
    label: 'RAM floor',
    value: '16 GB',
    detail: 'Both listed tiers call for 16 GB RAM, so memory headroom matters.',
    icon: CpuIcon,
  },
  {
    label: 'Install size',
    value: '167 GB',
    detail:
      'Keep extra free space for patches, shader cache, clips, and Windows.',
    icon: HardDriveIcon,
  },
  {
    label: 'Storage type',
    value: 'SSD required',
    detail: 'Do not plan around a hard drive install for serious play testing.',
    icon: ZapIcon,
  },
  {
    label: 'Tuning first step',
    value: 'Stability',
    detail: 'Fix frame pacing before deciding a car tune is wrong.',
    icon: GaugeIcon,
  },
];

const hardwarePaths = [
  {
    title: 'Below minimum',
    verdict: 'Do not build content around this PC',
    body: 'If CPU, GPU, RAM, or SSD status falls under the minimum tier, focus on cloud, console, or upgrade planning before tune testing.',
  },
  {
    title: 'Near minimum',
    verdict: 'Use conservative settings',
    body: 'Start with low visual load, a stable frame cap, SSD space checks, and short benchmark routes before long events.',
  },
  {
    title: 'Recommended tier',
    verdict: 'Good baseline for guides',
    body: 'Use the recommended tier as the safer baseline for repeatable PC settings, tuning tests, and weekly playlist notes.',
  },
  {
    title: 'Above recommended',
    verdict: 'Chase frame pacing, not just ultra',
    body: 'Raise visuals gradually, but keep 1% lows, heat, and input feel ahead of screenshot quality.',
  },
];

const upgradePriorityRows = [
  {
    part: 'SSD and free space',
    reason: 'Steam lists SSD required and 167 GB available space.',
    firstAction:
      'Install on SSD and leave enough spare room for updates before changing graphics settings.',
  },
  {
    part: 'GPU tier',
    reason:
      'Minimum starts at GTX 1650 / RX 6500 XT / Arc A380; recommended jumps to RTX 3060 Ti / RX 6700 XT / Arc A580.',
    firstAction:
      'If FPS or input delay is unstable, lower reflections, shadows, and density before blaming the tune.',
  },
  {
    part: 'CPU and background load',
    reason:
      'Open-world traffic, city routes, and streaming can expose weak CPU headroom.',
    firstAction:
      'Close overlays, record the same city route, and only then adjust graphics or car setup.',
  },
  {
    part: 'RAM discipline',
    reason:
      'Both tiers list 16 GB RAM, so browser tabs and capture apps can matter.',
    firstAction:
      'Test with a clean session before making a final performance guide or tune recommendation.',
  },
];

const tuningRisks = [
  'Stutter can make understeer feel worse than it is.',
  'Input delay can make brake balance or differential changes look wrong.',
  'Low storage headroom can create patch, cache, and load-time problems.',
  'Thermal throttling can make the first race feel fine and the fifth race feel broken.',
];

const nextLinks = [
  {
    title: 'PC Settings',
    href: '/settings/forza-horizon-6-pc',
    text: 'Move from hardware requirements into practical FPS, stutter, thermal, and graphics setting choices.',
  },
  {
    title: 'Release Status',
    href: '/games/forza-horizon-6/release-status',
    text: 'Confirm platform access, Game Pass, Steam, Steam Deck, and PS5 timing before writing platform claims.',
  },
  {
    title: 'Steam Deck Settings',
    href: '/settings/forza-horizon-6-steam-deck',
    text: 'Use this if the PC question is really about handheld play, battery, thermals, and readability.',
  },
  {
    title: 'Tune Calculator',
    href: '/tools/forza-horizon-6-tune-calculator',
    text: 'Only tune the car after the PC baseline is stable enough for repeatable testing.',
  },
];

const sourceLinks = [
  {
    title: 'Steam store PC requirements',
    href: 'https://store.steampowered.com/app/2483190/Forza_Horizon_6/',
    note: 'Minimum and recommended Windows requirements, storage, SSD, DirectX, and network notes.',
  },
  {
    title: 'Forza Horizon 6 release status',
    href: '/games/forza-horizon-6/release-status',
    note: 'Apex Tune Hub platform access and source-backed launch tracker.',
  },
  {
    title: 'Forza Horizon 6 official sources',
    href: '/games/forza-horizon-6/official-sources',
    note: 'Apex Tune Hub source index for release, platform, map, car list, and update claims.',
  },
];

const pcRequirementFaqs: FaqItem[] = [
  {
    question: 'What are the minimum PC requirements for Forza Horizon 6?',
    answer:
      'The Steam store lists Windows 10 22H2 or higher, Intel i5-8400 or AMD Ryzen 5 1600, 16 GB RAM, Nvidia GTX 1650 or AMD RX 6500 XT or Intel Arc A380, DirectX 12, broadband internet, 167 GB storage, and an SSD.',
  },
  {
    question: 'What are the recommended PC requirements for Forza Horizon 6?',
    answer:
      'The Steam store lists Windows 10 22H2 or higher, Intel i5-12400F or AMD Ryzen 5 5600X, 16 GB RAM, NVIDIA RTX 3060 Ti or AMD RX 6700 XT or Intel Arc A580, DirectX 12, broadband internet, 167 GB storage, and an SSD.',
  },
  {
    question: 'Does Forza Horizon 6 require an SSD on PC?',
    answer:
      'Yes. The Steam requirements list SSD required in the additional notes for both minimum and recommended tiers.',
  },
  {
    question: 'Should I tune my car before fixing PC stutter?',
    answer:
      'No. Stabilize FPS, frame pacing, storage headroom, heat, and input feel first. Tune changes are easier to judge after the platform baseline is repeatable.',
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

export default function ForzaHorizon6PcRequirementsPage() {
  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'PC Requirements', path: pathname },
          ]),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 PC requirement actions',
            items: nextLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
          buildFaqJsonLd(pcRequirementFaqs),
        ]}
      />

      <main className="min-h-screen bg-[#050506] text-white">
        <section className="relative overflow-hidden border-white/10 border-b">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,56,44,0.24),transparent_28%),radial-gradient(circle_at_76%_18%,rgba(0,212,255,0.18),transparent_24%),linear-gradient(135deg,rgba(20,20,24,0.98),rgba(5,5,6,1)_58%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <p className="forza-chip">PC requirements</p>
              <h1 className="mt-6 max-w-4xl text-balance font-black text-4xl tracking-tight md:text-6xl">
                Check the PC baseline before blaming the tune.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/70">
                This page turns the listed FH6 Windows requirements into a
                practical upgrade and testing plan: minimum, recommended, SSD
                space, frame pacing, and when to move into PC settings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="forza-button">
                  <LocaleLink href="/settings/forza-horizon-6-pc">
                    Open PC Settings
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  className="border-white/15 bg-white/5 text-white hover:bg-white/10"
                  variant="outline"
                >
                  <a
                    href="https://store.steampowered.com/app/2483190/Forza_Horizon_6/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Steam source
                    <ExternalLinkIcon className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {requirementHighlights.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    className="border border-white/10 bg-black/45 p-5 shadow-2xl shadow-black/30"
                    key={card.label}
                  >
                    <Icon className="mb-5 size-5 text-[#00d4ff]" />
                    <p className="text-white/55 text-xs uppercase tracking-[0.28em]">
                      {card.label}
                    </p>
                    <p className="mt-2 font-black text-2xl">{card.value}</p>
                    <p className="mt-3 text-sm text-white/65">{card.detail}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            {specGroups.map((group) => (
              <div
                className="border border-white/10 bg-white/[0.03]"
                key={group.label}
              >
                <div className="border-white/10 border-b p-6">
                  <p className="text-[#ff4a2f] text-sm uppercase tracking-[0.28em]">
                    {group.label}
                  </p>
                  <h2 className="mt-2 font-black text-2xl">{group.helper}</h2>
                </div>
                <div className="divide-y divide-white/10">
                  {group.rows.map(([name, value]) => (
                    <div
                      className="grid gap-3 px-6 py-4 sm:grid-cols-[160px_1fr]"
                      key={`${group.label}-${name}`}
                    >
                      <p className="font-semibold text-white/70">{name}</p>
                      <p className="text-white/90">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 border border-[#00d4ff]/20 bg-[#00d4ff]/5 p-6">
            <div className="flex items-start gap-4">
              <ShieldCheckIcon className="mt-1 size-5 shrink-0 text-[#00d4ff]" />
              <div>
                <h2 className="font-black text-2xl">Source note</h2>
                <p className="mt-2 text-white/70">
                  The spec rows above mirror the Steam store listing checked for
                  FH6. Hardware advice below is Apex Tune Hub guidance for
                  repeatable testing, not an official performance guarantee.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/[0.025] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="forza-chip">Decision path</p>
              <h2 className="mt-5 font-black text-3xl md:text-4xl">
                What your PC tier means for FH6 tuning work
              </h2>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {hardwarePaths.map((path) => (
                <div
                  className="border border-white/10 bg-black/35 p-5"
                  key={path.title}
                >
                  <CheckCircle2Icon className="mb-5 size-5 text-[#ffb000]" />
                  <h3 className="font-black text-xl">{path.title}</h3>
                  <p className="mt-2 font-semibold text-[#00d4ff] text-sm">
                    {path.verdict}
                  </p>
                  <p className="mt-4 text-sm text-white/65">{path.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="forza-chip">Upgrade priority</p>
              <h2 className="mt-5 font-black text-3xl md:text-4xl">
                Fix the bottleneck that ruins testing first.
              </h2>
              <p className="mt-5 text-white/70">
                A car can feel loose, slow, or twitchy when the real problem is
                frame pacing, storage, heat, or input delay. Use this checklist
                before publishing tune notes.
              </p>
              <ul className="mt-6 space-y-3">
                {tuningRisks.map((risk) => (
                  <li className="flex gap-3 text-white/70" key={risk}>
                    <SlidersHorizontalIcon className="mt-0.5 size-4 shrink-0 text-[#ff4a2f]" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden border border-white/10">
              <div className="grid grid-cols-[0.8fr_1fr_1.1fr] border-white/10 border-b bg-white/[0.04] px-4 py-3 font-semibold text-sm text-white/70">
                <span>Part</span>
                <span>Why it matters</span>
                <span>First action</span>
              </div>
              {upgradePriorityRows.map((row) => (
                <div
                  className="grid gap-3 border-white/10 border-b px-4 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_1fr_1.1fr]"
                  key={row.part}
                >
                  <p className="font-bold text-white">{row.part}</p>
                  <p className="text-white/65">{row.reason}</p>
                  <p className="text-white/80">{row.firstAction}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white/[0.025] py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {nextLinks.map((link) => (
                <LocaleLink
                  className="group border border-white/10 bg-black/35 p-5 transition hover:border-[#00d4ff]/60 hover:bg-[#00d4ff]/10"
                  href={link.href}
                  key={link.title}
                >
                  <MonitorCogIcon className="mb-5 size-5 text-[#00d4ff]" />
                  <h2 className="font-black text-xl">{link.title}</h2>
                  <p className="mt-3 text-sm text-white/65">{link.text}</p>
                  <p className="mt-5 inline-flex items-center font-bold text-[#ffb000] text-sm">
                    Open path
                    <ArrowRightIcon className="ml-2 size-4 transition group-hover:translate-x-1" />
                  </p>
                </LocaleLink>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="forza-chip">FAQ</p>
              <h2 className="mt-5 font-black text-3xl">
                PC requirements questions
              </h2>
            </div>
            <div className="space-y-4">
              {pcRequirementFaqs.map((faq) => (
                <div
                  className="border border-white/10 bg-white/[0.03] p-5"
                  key={faq.question}
                >
                  <h3 className="font-black text-lg">{faq.question}</h3>
                  <p className="mt-3 text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
          <div className="border border-white/10 bg-black/35 p-6">
            <h2 className="font-black text-2xl">Sources and related pages</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {sourceLinks.map((source) => {
                const isExternal = source.href.startsWith('http');
                const content = (
                  <>
                    <h3 className="font-black">{source.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{source.note}</p>
                  </>
                );

                return isExternal ? (
                  <a
                    className="border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#ff4a2f]/60"
                    href={source.href}
                    key={source.title}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {content}
                  </a>
                ) : (
                  <LocaleLink
                    className="border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#ff4a2f]/60"
                    href={source.href}
                    key={source.title}
                  >
                    {content}
                  </LocaleLink>
                );
              })}
            </div>
          </div>
        </section>

        <ApexNewsletterCta
          description="Get FH6 PC requirement changes, settings updates, Steam Deck notes, and tuning test paths as the site expands."
          title="Track FH6 PC settings and tuning updates"
        />
      </main>
    </>
  );
}
