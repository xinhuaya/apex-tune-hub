import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  ArrowRightIcon,
  GaugeIcon,
  LinkIcon,
  ListChecksIcon,
  RadioTowerIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const tools = [
  {
    title: 'Tune Calculator',
    description: 'Road, street, dirt, rally, and drag baseline setup notes.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: SlidersHorizontalIcon,
  },
  {
    title: 'Drift Tune Calculator',
    description: 'RWD and AWD drift direction for angle, grip, and recovery.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
    icon: GaugeIcon,
  },
  {
    title: 'Tune Presets',
    description: 'Shareable FH6 setup URLs for road, rally, dirt, and street.',
    href: '/tools/forza-horizon-6-tune-presets',
    icon: LinkIcon,
  },
  {
    title: 'Gear Ratio Calculator',
    description: 'Final drive and gear spacing guidance for real routes.',
    href: '/tools/forza-horizon-6-gear-ratio-calculator',
    icon: ListChecksIcon,
  },
];

const stats = [
  { label: 'Launch hub', value: 'FH6' },
  { label: 'Cars to index', value: '550+' },
  { label: 'MVP tools', value: '4' },
  { label: 'Port', value: '3017' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Apex Tune Hub - Racing Tune Calculators and Setup Tools',
    description:
      'Racing tune calculators, gear ratio tools, car setup data, handheld settings, wheel settings, and weekly trackers starting with Forza Horizon 6.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-[34rem] opacity-35" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:px-8 lg:py-20">
          <div className="min-w-0 max-w-full flex flex-col justify-center">
            <p className="forza-chip">Forza Horizon 6 tuning tools</p>
            <h1 className="forza-neon-title mt-6 max-w-3xl text-4xl font-semibold tracking-normal text-zinc-50 sm:text-5xl lg:text-6xl">
              Build faster tunes without guessing every slider.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
              Apex Tune Hub starts with practical Forza Horizon 6 calculators,
              car data, settings pages, and weekly trackers. Use the free tools
              first, then save and compare setups as the garage grows.
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
                <LocaleLink href="/games/forza-horizon-6">
                  Browse FH6 Hub
                </LocaleLink>
              </Button>
            </div>
          </div>

          <div className="forza-panel relative overflow-hidden p-5">
            <div className="forza-hero-grid absolute inset-0 opacity-30" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    Live MVP stack
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">Setup console</h2>
                </div>
                <RadioTowerIcon className="size-5 text-amber-300" />
              </div>

              <div className="mt-5 grid gap-3">
                {tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <LocaleLink
                      key={tool.href}
                      href={tool.href}
                      className="forza-card group p-4"
                    >
                      <div className="flex min-w-0 items-start gap-3">
                        <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-base font-semibold text-zinc-50">
                            {tool.title}
                          </span>
                          <span className="mt-1 block text-sm leading-6 text-zinc-400">
                            {tool.description}
                          </span>
                        </span>
                      </div>
                    </LocaleLink>
                  );
                })}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((item) => (
                  <div key={item.label} className="forza-stat">
                    <p className="text-xl font-semibold text-zinc-50">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
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
    </main>
  );
}
