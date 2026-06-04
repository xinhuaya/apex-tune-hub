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
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CalendarClockIcon,
  CarFrontIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  LinkIcon,
  ListChecksIcon,
  SearchIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-tune-codes';
const title = 'Forza Tune Codes Hub - Apex Tune Hub';
const description =
  'Use this Forza tune codes hub to find the right tune-code workflow, FH6 preset links, FH5-style search handoffs, drag tune code intent, and safe verification rules.';

const searchSignals = [
  {
    query: 'forza horizon 5 tune codes',
    volume: '40 US / 160 global',
    pagePlan: 'Use a broad tune-code hub before game-specific code tables.',
    handoff: 'FH6 tune codes workflow',
  },
  {
    query: 'forza horizon 5 drag tune codes',
    volume: '110 US',
    pagePlan: 'Build drag intent around launch grip, gearing, and proof notes.',
    handoff: 'Drag tune settings',
  },
  {
    query: 'koenigsegg jesko forza horizon 5 tune code',
    volume: '90 US',
    pagePlan:
      'Treat car-name code searches as future car-page and verified-code rows.',
    handoff: 'Car database plus preset URLs',
  },
  {
    query: 'forza horizon 5 tune codes list',
    volume: '70 US',
    pagePlan:
      'Create list pages only when each row has car, class, source, and test date.',
    handoff: 'Verified-code readiness table',
  },
  {
    query: 'how to enter tune codes in forza horizon 5',
    volume: '20 US',
    pagePlan:
      'Answer how-to intent without inventing codes or blurring FH5 and FH6 data.',
    handoff: 'Code-use checklist',
  },
];

const codeHandoffs = [
  {
    title: 'Forza Drag Cars Hub',
    description:
      'Route drag-code searches into launch, gearing, candidate cars, and verified-code rules.',
    href: '/games/forza/best-drag-cars',
    icon: GaugeIcon,
  },
  {
    title: 'Forza Drift Cars Hub',
    description:
      'Route drift-code searches into RWD/AWD choice, angle control, candidate cars, and verified-code rules.',
    href: '/games/forza/best-drift-cars',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'FH6 Tune Codes Workflow',
    description:
      'The live code hub for Apex preset URLs, verified-code rules, and future share-code rows.',
    href: '/tools/forza-horizon-6-tune-codes',
    icon: LinkIcon,
  },
  {
    title: 'FH6 Tune Presets',
    description:
      'Use shareable baseline URLs while exact in-game codes are not verified yet.',
    href: '/tools/forza-horizon-6-tune-presets',
    icon: ClipboardCheckIcon,
  },
  {
    title: 'Drag Tune Settings',
    description:
      'Match drag-code searches to launch, wheelspin, final-drive, and first-shift tests.',
    href: '/games/forza-horizon-6/guides/best-drag-tune-settings',
    icon: GaugeIcon,
  },
  {
    title: 'Car Database',
    description:
      'Future code rows need exact car context before they become trustworthy.',
    href: '/games/forza-horizon-6/cars',
    icon: CarFrontIcon,
  },
];

const readinessSteps = [
  {
    title: 'Do not fake a code',
    text: 'If the in-game share code is not verified, publish a preset URL and label it as a baseline.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Attach the car',
    text: 'A useful code row needs car, model year, class, drivetrain, and race type.',
    icon: CarFrontIcon,
  },
  {
    title: 'Add route proof',
    text: 'Drag, drift, road, rally, and street codes should say where they were tested.',
    icon: BadgeCheckIcon,
  },
  {
    title: 'Date the test',
    text: 'Patch-sensitive codes should show a last-tested date and a retest status.',
    icon: CalendarClockIcon,
  },
];

const workflowRows = [
  {
    intent: 'Player wants any Forza tune code',
    safeAnswer: 'Explain code use and send them to the active game workflow.',
    link: '/tools/forza-horizon-6-tune-codes',
  },
  {
    intent: 'Player wants a drag tune code',
    safeAnswer:
      'Start with launch grip, gearing, and wheelspin notes before listing cars.',
    link: '/games/forza-horizon-6/guides/best-drag-tune-settings',
  },
  {
    intent: 'Player wants a car-name code',
    safeAnswer:
      'Create a car row only when the code, source, class, and route are known.',
    link: '/games/forza-horizon-6/cars',
  },
  {
    intent: 'Player wants a list',
    safeAnswer:
      'Use filters for class, drivetrain, race type, creator/source, and freshness.',
    link: '/tools/forza-horizon-6-tune-presets',
  },
];

const faqItems = [
  {
    question: 'Does Apex Tune Hub publish real Forza tune codes?',
    answer:
      'Apex Tune Hub publishes safe preset URLs and tune-code workflow pages now. Exact in-game share codes should only be promoted after the car, class, source, route, and last-tested date are verified.',
  },
  {
    question: 'Why does this page mention Forza Horizon 5 searches?',
    answer:
      'FH5 search demand shows stable Forza player behavior: drag codes, drift codes, best-car codes, and how-to code questions. The live product remains focused on the FH6 workflow until separate verified data exists.',
  },
  {
    question: 'What should I open if I need a working setup now?',
    answer:
      'Open the FH6 tune codes workflow if you need shareable baseline links. Use the tune calculator first when the car has a handling problem, and the drag guide when the problem is launch or straight-line speed.',
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

export default function ForzaTuneCodesPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: pathname },
            { name: 'Forza Tune Codes', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildItemListJsonLd({
            title: 'Forza tune code search handoffs',
            items: codeHandoffs.map((item) => ({
              name: item.title,
              path: item.href,
            })),
          }),
          buildFaqJsonLd(faqItems),
        ]}
      />

      <section className="border-white/10 border-b bg-[radial-gradient(circle_at_18%_12%,rgba(255,48,95,0.18),transparent_34%),radial-gradient(circle_at_78%_4%,rgba(28,213,255,0.18),transparent_32%),linear-gradient(135deg,#090a0f_0%,#05070a_58%,#071314_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div className="flex flex-col justify-center">
            <p className="forza-chip">Forza tune codes</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[0.95] tracking-normal text-white sm:text-5xl lg:text-6xl">
              Find the right code workflow before trusting a tune code.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
              This page catches broad Forza tune-code searches and routes them
              into the safest next step: FH6 preset URLs, verified-code rules,
              drag launch testing, or car-specific code rows when the evidence
              exists.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="forza-button">
                <LocaleLink href="/tools/forza-horizon-6-tune-codes">
                  Open FH6 Code Workflow
                  <ArrowRightIcon className="size-4" />
                </LocaleLink>
              </Button>
              <Button asChild className="forza-button-secondary">
                <LocaleLink href="/tools/forza-horizon-6-tune-presets">
                  Browse Preset URLs
                </LocaleLink>
              </Button>
            </div>
          </div>

          <div className="forza-panel h-fit p-5">
            <div className="flex items-center justify-between gap-4 border-white/10 border-b pb-4">
              <div>
                <p className="text-cyan-300 text-xs font-semibold uppercase tracking-[0.22em]">
                  Readiness check
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  A code needs proof before it becomes a recommendation
                </h2>
              </div>
              <SearchIcon className="size-7 text-amber-300" />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {readinessSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                    key={step.title}
                  >
                    <Icon className="size-5 text-cyan-300" />
                    <h3 className="mt-3 text-sm font-semibold text-zinc-100">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {step.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="forza-panel h-fit p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              SEMrush search signal to page plan
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              FH6-specific code demand is still early, but FH5 and generic Forza
              code searches already show the shape of the content moat: drag
              codes, car-name codes, list pages, and how-to code usage.
            </p>
          </div>

          <div className="forza-panel overflow-hidden">
            <div className="grid border-white/10 border-b bg-white/[0.03] px-5 py-3 text-cyan-200 text-xs font-semibold uppercase tracking-[0.18em] md:grid-cols-[1.1fr_0.65fr_1.3fr_1fr]">
              <span>Query</span>
              <span>Signal</span>
              <span>Page plan</span>
              <span>Handoff</span>
            </div>
            {searchSignals.map((row) => (
              <div
                className="grid gap-3 border-white/10 border-b px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1.1fr_0.65fr_1.3fr_1fr]"
                key={row.query}
              >
                <span className="font-semibold text-zinc-50">{row.query}</span>
                <span className="text-amber-200">{row.volume}</span>
                <span className="leading-6 text-zinc-400">{row.pagePlan}</span>
                <span className="leading-6 text-cyan-100">{row.handoff}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {codeHandoffs.map((item) => {
            const Icon = item.icon;

            return (
              <LocaleLink
                className="forza-card p-5"
                href={item.href}
                key={item.href}
              >
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </LocaleLink>
            );
          })}
        </div>

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid border-white/10 border-b bg-white/[0.03] px-5 py-3 text-amber-200 text-xs font-semibold uppercase tracking-[0.18em] md:grid-cols-[1fr_1.3fr_0.9fr]">
            <span>Intent</span>
            <span>Safe answer</span>
            <span>Open next</span>
          </div>
          {workflowRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-white/10 border-b px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[1fr_1.3fr_0.9fr]"
              href={row.link}
              key={row.intent}
            >
              <span className="font-semibold text-zinc-50">{row.intent}</span>
              <span className="leading-6 text-zinc-400">{row.safeAnswer}</span>
              <span className="text-cyan-100">Open page</span>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqItems.map((faq) => (
            <article className="forza-card p-5" key={faq.question}>
              <ShieldCheckIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                {faq.question}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

      <ApexNewsletterCta
        description="Get tune-code workflow updates, FH6 preset rows, verified-code readiness notes, and future car-code pages as the Apex Tune Hub database grows."
        title="Follow the Forza tune-code database buildout"
      />
    </main>
  );
}
