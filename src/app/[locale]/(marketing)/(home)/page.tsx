import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { ForzaHomeStartPaths } from '@/components/tools/forza-home-start-paths';
import { ForzaHomeTuneWorkbench } from '@/components/tools/forza-home-tune-workbench';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildItemListJsonLd,
  buildWebSiteJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CarFrontIcon,
  LinkIcon,
  ListChecksIcon,
  MapPinnedIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const tools = [
  {
    title: 'FH6 Tune Calculator',
    description: 'The main product: choose the problem and get a baseline.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Gear Ratio Calculator',
    description: 'The second product: fix launch, spacing, and top speed.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
    icon: ListChecksIcon,
  },
  {
    title: 'Tune Presets',
    description: 'Shareable setup URLs after the baseline makes sense.',
    href: '/tools/forza-horizon-6-tune-presets',
    icon: LinkIcon,
  },
  {
    title: 'Fix Oversteer',
    description: 'A high-intent guide that routes players back to the tool.',
    href: '/games/forza-horizon-6/guides/fix-oversteer',
    icon: CarFrontIcon,
  },
];

const homepageItemList = [
  { name: 'Forza Horizon 6 Hub', path: '/games/forza-horizon-6' },
  {
    name: 'Forza Horizon 6 Tune Calculator',
    path: '/tools/forza-horizon-6-tune-calculator',
  },
  {
    name: 'Forza Horizon 6 Drift Tune Calculator',
    path: '/tools/forza-horizon-6-drift-tune-calculator',
  },
  {
    name: 'Forza Horizon 6 Gear Ratio Calculator',
    path: '/tools/forza-horizon-6-gear-ratio-calculator',
  },
  {
    name: 'Forza Horizon 6 Car Database',
    path: '/games/forza-horizon-6/cars',
  },
  {
    name: 'Forza Horizon 6 Guides',
    path: '/games/forza-horizon-6/guides',
  },
  {
    name: 'Forza Horizon 6 Official Sources',
    path: '/games/forza-horizon-6/official-sources',
  },
];

const stats = [
  { label: 'Core product', value: 'Tune' },
  { label: 'Inputs', value: '5' },
  { label: 'Top tools', value: '3' },
  { label: 'Preset link', value: '1' },
];

const launchSignals = [
  {
    label: 'Japan prep',
    value: 'Road + drift baselines',
    icon: MapPinnedIcon,
  },
  {
    label: 'Garage data',
    value: 'Car pages built to scale',
    icon: CarFrontIcon,
  },
  {
    label: 'Playlist loop',
    value: 'Weekly picks and tune notes',
    icon: CalendarDaysIcon,
  },
];

const entryPaths = [
  {
    title: 'I need a setup now',
    href: '/tools/forza-horizon-6-tune-calculator',
    action: 'Open calculator, save the baseline, then test one route.',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'I need the right car',
    href: '/games/forza-horizon-6/best-cars',
    action: 'Pick role first: road, drift, rally, class, JDM, or weekly.',
    icon: CarFrontIcon,
  },
  {
    title: 'I need weekly prep',
    href: '/games/forza-horizon-6/weekly-playlist',
    action: 'Check restrictions, reward cars, safe picks, and tune links.',
    icon: CalendarDaysIcon,
  },
];

const productPathRows = [
  {
    layer: 'Free tool',
    value: 'Tune calculators, presets, car pages, settings, weekly trackers',
    reason:
      'Search visitors get an answer before being asked to join anything.',
  },
  {
    layer: 'Email layer',
    value: 'Weekly tune drops, Car Pass notes, candidate promotions',
    reason:
      'Repeat traffic grows around actual FH6 updates, not generic posts.',
  },
  {
    layer: 'Member layer',
    value: 'Saved tunes, favorite cars, exportable garage plans',
    reason: 'Paid features appear only after the free workflow proves useful.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Forza Horizon 6 Tune Calculator - Apex Tune Hub',
    description:
      'Use the Forza Horizon 6 tune calculator first: build road, street, dirt, rally, drag, and gear setup baselines, then save or share the full calculator preset.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildWebSiteJsonLd(),
          buildItemListJsonLd({
            title: 'Apex Tune Hub core FH6 tuning pages',
            items: homepageItemList,
          }),
        ]}
      />
      <section className="overflow-hidden border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-[34rem] opacity-35" />
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8 lg:py-20">
          <div className="min-w-0 max-w-full flex flex-col justify-center">
            <p className="forza-chip">Forza Horizon 6 tune calculator</p>
            <h1 className="forza-neon-title mt-6 max-w-[22rem] text-3xl font-semibold tracking-normal text-zinc-50 [overflow-wrap:anywhere] sm:max-w-3xl sm:text-5xl lg:text-6xl">
              Start with the tune calculator, then test the car.
            </h1>
            <p className="mt-5 max-w-[22rem] text-base leading-7 text-zinc-400 [overflow-wrap:anywhere] sm:max-w-2xl sm:text-lg">
              Apex Tune Hub is an FH6 setup workbench. Choose the race type,
              drivetrain, class, and handling problem on the first screen, then
              open the full calculator to copy notes, save presets, and refine
              the build.
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
                <LocaleLink href="/tools/forza-horizon-6-gear-ratio-calculator">
                  Open Gear Tool
                </LocaleLink>
              </Button>
            </div>

            <div className="mt-8 grid max-w-[22rem] gap-3 sm:max-w-2xl sm:grid-cols-3">
              {launchSignals.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="forza-signal">
                    <Icon className="size-4 text-cyan-200" />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-300">
                        {item.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-zinc-500">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <ForzaHomeTuneWorkbench />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="forza-stat">
              <p className="text-xl font-semibold text-zinc-50">{item.value}</p>
              <p className="mt-1 text-xs text-zinc-500">{item.label}</p>
            </div>
          ))}
        </div>

        <ForzaHomeStartPaths />

        <div className="mb-10 grid gap-3 md:grid-cols-4">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <LocaleLink
                key={tool.href}
                href={tool.href}
                className="forza-card p-4"
              >
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-base font-semibold text-zinc-50">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {tool.description}
                </p>
              </LocaleLink>
            );
          })}
        </div>

        <div className="mb-10 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <MapPinnedIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Keep every page pointed back to the product
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Players arrive with a car problem, not a website tour. The guide
              library, presets, car pages, and weekly notes should all route
              back into the calculator workflow.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {entryPaths.map((path) => {
              const Icon = path.icon;

              return (
                <LocaleLink
                  className="forza-card p-4"
                  href={path.href}
                  key={path.title}
                >
                  <Icon className="size-5 text-cyan-300" />
                  <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                    {path.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {path.action}
                  </p>
                </LocaleLink>
              );
            })}
          </div>
        </div>

        <div className="forza-panel mb-10 overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.7fr_1.2fr_1.3fr]">
            <span>Layer</span>
            <span>Value</span>
            <span>Why it matters</span>
          </div>
          {productPathRows.map((row) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.7fr_1.2fr_1.3fr]"
              key={row.layer}
            >
              <span className="font-semibold text-zinc-50">{row.layer}</span>
              <span className="leading-6 text-cyan-100">{row.value}</span>
              <span className="leading-6 text-zinc-400">{row.reason}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            [
              'Tools first',
              'The calculator is the product surface. Articles support the tools instead of replacing them.',
            ],
            [
              'Data next',
              'Car pages, class lists, and setup notes become a reusable database as testing improves.',
            ],
            [
              'Membership later',
              'Saved tunes, favorite cars, exports, and weekly picks become the paid layer after usage appears.',
            ],
          ].map(([title, description]) => (
            <article key={title} className="forza-card p-5">
              <h2 className="text-lg font-semibold text-zinc-50">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>
      <ApexNewsletterCta
        description="Get new FH6 presets, weekly setup picks, Car Pass source notes, and car-database updates as Apex Tune Hub grows."
        title="Follow the next FH6 tune drop"
      />
    </main>
  );
}
