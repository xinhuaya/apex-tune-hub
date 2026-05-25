import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildArticleJsonLd,
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  CarFrontIcon,
  CloudRainIcon,
  GaugeIcon,
  MapIcon,
  MountainIcon,
  RouteIcon,
  TimerIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/japan-map';
const title = 'Forza Horizon 6 Japan Map and Route Planner - Apex Tune Hub';
const description =
  'Forza Horizon 6 Japan map planning hub for route types, city roads, mountain passes, wet roads, dirt sections, drift zones, speed testing, and tune links.';

const routeTypes = [
  {
    title: 'City streets',
    intent:
      'Prioritize braking confidence, second-gear exits, traffic recovery, and clean throttle inputs.',
    tune: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
    guide: '/games/forza-horizon-6/guides/fix-wheelspin',
    icon: RouteIcon,
  },
  {
    title: 'Mountain roads',
    intent:
      'Prioritize rotation, predictable rear grip, and gearing that does not bog after hairpins.',
    tune: '/tools/forza-horizon-6-tune-presets/a-rwd-rally-oversteer-aggressive',
    guide: '/games/forza-horizon-6/guides/fix-oversteer',
    icon: MountainIcon,
  },
  {
    title: 'Wet routes',
    intent:
      'Prioritize stability, softer inputs, longer braking zones, and setups that recover from mid-corner slip.',
    tune: '/tools/forza-horizon-6-tune-presets/s1-awd-dirt-unstable-braking-stable',
    guide: '/games/forza-horizon-6/guides/fix-unstable-braking',
    icon: CloudRainIcon,
  },
  {
    title: 'Dirt and rally',
    intent:
      'Prioritize bump control, launch response, and enough suspension travel to survive rough exits.',
    tune: '/tools/forza-horizon-6-tune-presets/s1-awd-rally-wheelspin-balanced',
    guide: '/games/forza-horizon-6/guides/beginner-tuning',
    icon: GaugeIcon,
  },
  {
    title: 'Drift sections',
    intent:
      'Prioritize initiation, angle recovery, throttle control, and linked transitions instead of raw power.',
    tune: '/tools/forza-horizon-6-drift-tune-calculator',
    guide: '/games/forza-horizon-6/guides/japan-drift-setup',
    icon: TimerIcon,
  },
  {
    title: 'Speed routes',
    intent:
      'Prioritize final drive, aero tradeoffs, top-end pull, and whether the route actually rewards speed.',
    tune: '/tools/forza-horizon-6-tune-presets/s2-awd-road-poor-top-speed-aggressive',
    guide: '/games/forza-horizon-6/guides/fix-poor-top-speed',
    icon: CarFrontIcon,
  },
];

const routeWorkflow = [
  ['Learn the route', 'Use A or B class before pushing S1 and S2 builds.'],
  ['Name the problem', 'Understeer, oversteer, wheelspin, slow launch, braking, or speed.'],
  ['Open a preset', 'Start with the closest tune link, then adjust one group at a time.'],
  ['Save the note', 'Record car, class, route type, weather, assists, and last-tested date.'],
];

const faqs: FaqItem[] = [
  {
    question: 'Does this page show an official Forza Horizon 6 map?',
    answer:
      'No. This is a route-planning hub for tuning workflows. It does not claim to reproduce the official in-game map.',
  },
  {
    question: 'How should I choose a tune for a new Japan route?',
    answer:
      'Start with the route type: city, mountain, wet road, dirt, drift, or speed. Then open the matching preset or guide and test the same section twice.',
  },
  {
    question: 'Which class is best for learning routes?',
    answer:
      'B and A class make handling problems easier to read. Move into S1 or S2 after braking, exits, and gearing feel repeatable.',
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

export default function ForzaHorizon6JapanMapPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Japan Map Planner', path: pathname },
          ]),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">
            <MapIcon className="size-4" />
            Route planning hub
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.74fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 Japan map and route planner
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this page to pick the right tune path before testing a new
                Japan route. Treat city streets, mountain roads, wet routes,
                dirt sections, drift zones, and speed routes as different
                problems instead of forcing one universal setup.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/games/forza-horizon-6/guides/japan-launch-tuning-plan">
                    Open Launch Plan
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Tune Calculator
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <RouteIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">Planner rule</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Route type decides the first tune direction. Use a lower class
                to learn the road, then promote the same car only when the
                route feels repeatable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-3">
          {routeTypes.map((route) => {
            const Icon = route.icon;

            return (
              <article className="forza-card p-5" key={route.title}>
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-xl font-semibold">{route.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {route.intent}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <LocaleLink
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                    href={route.tune}
                  >
                    Tune path
                  </LocaleLink>
                  <LocaleLink
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                    href={route.guide}
                  >
                    Guide
                  </LocaleLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.8fr_1.4fr]">
            <span>Step</span>
            <span>What to record</span>
          </div>
          {routeWorkflow.map(([step, note]) => (
            <div
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.8fr_1.4fr]"
              key={step}
            >
              <span className="font-semibold text-zinc-50">{step}</span>
              <span className="text-zinc-400">{note}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Japan map planner FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {faqs.map((faq) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={faq.question}
              >
                <h3 className="text-base font-semibold">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ApexNewsletterCta
        description="Get FH6 route planning notes, tune links, and Japan setup updates as the testing library expands."
        title="Follow FH6 Japan route updates"
      />
    </main>
  );
}
