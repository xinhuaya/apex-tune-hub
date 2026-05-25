import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import { CalendarDaysIcon, RadioTowerIcon, RouteIcon } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/car-pass';
const title = 'Forza Horizon 6 Car Pass Tracker - Apex Tune Hub';
const description =
  'Track Forza Horizon 6 Car Pass weekly cars, release dates, tune links, source status, and setup recommendations.';

const trackerRows = [
  {
    week: 'Week 1',
    car: 'To verify',
    date: 'Add after source check',
    tune: 'Baseline calculator',
  },
  {
    week: 'Week 2',
    car: 'To verify',
    date: 'Add after source check',
    tune: 'Class-specific notes',
  },
  {
    week: 'Weekly cadence',
    car: '30 total cars',
    date: 'One each week',
    tune: 'Link each car to a tune path',
  },
];

const carPassFaqs = [
  {
    question: 'What is the Forza Horizon 6 Car Pass tracker?',
    answer:
      'It is a repeat-visit page for weekly Car Pass additions, release timing, source status, and tune links for each new car.',
  },
  {
    question: 'How often should this page be updated?',
    answer:
      'Update it every week when the Car Pass car is confirmed, then add class direction, calculator links, and a car detail page when available.',
  },
  {
    question: 'Why keep unverified cars labelled as To verify?',
    answer:
      'Transparent labels prevent fake certainty. Cars should move into tested notes only after official source checks and route or event testing.',
  },
];
const carPassWorkflow = [
  {
    title: 'Verify source first',
    text: 'Keep the car labelled To verify until the official source, timing, and release window are clear.',
    href: '/games/forza-horizon-6/faq',
  },
  {
    title: 'Create the car page',
    text: 'Add class, PI, acquisition, testing status, source URL, and first tune direction before promoting the car.',
    href: '/games/forza-horizon-6/cars',
  },
  {
    title: 'Pick a baseline preset',
    text: 'Match the car to a road, drift, rally, dirt, street, or drag preset instead of publishing a vague setup note.',
    href: '/tools/forza-horizon-6-tune-presets',
  },
  {
    title: 'Link the weekly tracker',
    text: 'Add the car to weekly playlist prep when it appears in challenges, rewards, or seasonal restrictions.',
    href: '/games/forza-horizon-6/weekly-playlist',
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

export default function CarPassTrackerPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Car Pass Tracker', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(carPassFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Weekly tracker</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 Car Pass tracker
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Track weekly Car Pass additions, availability dates, suggested
                tune directions, and source links. This page is designed for
                repeat visits and newsletter capture.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Tune this week&apos;s car
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <a
                    href="https://forza.net/news/forza-horizon-6-steam-deck"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Official source
                  </a>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <RadioTowerIcon className="size-7 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Newsletter capture page
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This page should eventually collect emails for weekly car,
                playlist, and tune notes. Keep it short and update it on the
                same day each week.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.7fr_1fr_1fr_1fr]">
            <span>Week</span>
            <span>Car</span>
            <span>Date</span>
            <span>Tune link</span>
          </div>
          {trackerRows.map((row) => (
            <div
              key={row.week}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[0.7fr_1fr_1fr_1fr]"
            >
              <span className="font-semibold text-zinc-50">{row.week}</span>
              <span className="text-amber-200">{row.car}</span>
              <span className="text-zinc-400">{row.date}</span>
              <span className="text-cyan-200">{row.tune}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="forza-card p-5">
            <CalendarDaysIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Update cadence</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Add the weekly car, source URL, suggested class, and first tune
              direction as soon as official details are confirmed.
            </p>
          </article>
          <article className="forza-card p-5">
            <RouteIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">Internal links</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Every weekly car should link to best cars, tune calculator, drift
              calculator if relevant, and the future car detail page.
            </p>
          </article>
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">Car Pass publishing workflow</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-4">
            {carPassWorkflow.map((item) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40"
                href={item.href}
                key={item.title}
              >
                <strong className="block text-zinc-100">{item.title}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {item.text}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">Car Pass FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {carPassFaqs.map((faq) => (
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
        description="Get weekly Car Pass tune notes, recommended calculator presets, and new car page updates."
        title="Follow FH6 Car Pass updates"
      />
    </main>
  );
}
