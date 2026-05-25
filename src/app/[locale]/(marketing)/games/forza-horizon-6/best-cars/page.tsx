import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { forzaHorizon6ClassCarGuides } from '@/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6BestCarGuides } from '@/lib/guides/forza-horizon-6-best-car-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
} from '@/lib/seo/forza-horizon-6';
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CarFrontIcon,
  GaugeIcon,
  ListChecksIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/games/forza-horizon-6/best-cars';
const title = 'Best Cars in Forza Horizon 6 - Apex Tune Hub';
const description =
  'Best Forza Horizon 6 car planning hub for road racing, drift, rally, class picks, JDM cars, and weekly event recommendations.';

const bestCarGuides = [
  forzaHorizon6BestCarGuides.road,
  forzaHorizon6BestCarGuides.drift,
  forzaHorizon6BestCarGuides.rally,
  forzaHorizon6BestCarGuides.jdm,
];
const classCarGuides = [
  forzaHorizon6ClassCarGuides.b,
  forzaHorizon6ClassCarGuides.a,
  forzaHorizon6ClassCarGuides.s1,
  forzaHorizon6ClassCarGuides.s2,
];

const carRows = bestCarGuides.map((guide) => ({
  category: guide.h1.replace('Best ', '').replace(' in Forza Horizon 6', ''),
  pick: guide.picks[0]?.car ?? 'Candidate list pending',
  classBand: guide.classFocus,
  note: guide.picks[0]?.tuneDirection ?? guide.updateCadence,
  href: guide.pathname,
}));

const frameworkCards = [
  {
    title: 'Candidate first',
    description:
      'Cars stay labelled candidate or needs-testing until route notes and tune evidence are added.',
  },
  {
    title: 'Class matters',
    description:
      'A, B, S1, and S2 versions should be evaluated separately instead of forcing one universal ranking.',
  },
  {
    title: 'Tune links',
    description:
      'Every recommended car should point to a calculator, preset, or guide that explains the setup direction.',
  },
];

const bestCarsFaqs = [
  {
    question: 'What are the best cars in Forza Horizon 6?',
    answer:
      'Apex Tune Hub starts with transparent candidate lists for road racing, drift, rally, and JDM builds, then promotes cars after route or event testing is added.',
  },
  {
    question: 'Why not publish a fake final meta list?',
    answer:
      'A final ranking before testing would be low-trust content. The site keeps candidate status visible and links each car to tune direction, class focus, and testing notes.',
  },
  {
    question: 'Which class should I build first?',
    answer:
      'Most players should start around B, A, or S1 depending on the car role. Move higher only when the car stays repeatable on target routes.',
  },
];

const guideLinks = [
  {
    title: 'Best Drift Cars',
    description:
      'Angle control, recovery, RWD/AWD direction, and drift setup notes.',
    href: '/games/forza-horizon-6/best-drift-cars',
  },
  {
    title: 'Best Rally Cars',
    description:
      'Mixed-surface and touge candidates with suspension test notes.',
    href: '/games/forza-horizon-6/best-rally-cars',
  },
  {
    title: 'Best Road Racing Cars',
    description: 'A, S1, and S2 candidates for grip-focused route testing.',
    href: '/games/forza-horizon-6/best-road-racing-cars',
  },
  {
    title: 'Best JDM Cars',
    description:
      'Toyota, Honda, Mazda, street, drift, and Japan-focused clusters.',
    href: '/games/forza-horizon-6/best-jdm-cars',
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

export default function BestCarsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Best Cars', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(bestCarsFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Car database seed</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.78fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best cars in Forza Horizon 6
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                This page starts as a transparent recommendation framework. It
                should become a tested car database as we add class pages, tune
                links, event results, and weekly playlist notes. The current
                picks are candidates, not fake final rankings.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Tune a candidate
                    <ArrowRightIcon className="ml-2 size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/games/forza-horizon-6/cars">
                    Browse car database
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
                  <BadgeCheckIcon className="size-5" />
                </span>
                <div>
                  <h2 className="text-lg font-semibold">Quality rule</h2>
                  <p className="text-sm text-zinc-500">
                    No fake meta lists before testing.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-zinc-400">
                Cars that are not tested should be labeled as candidates. Once
                testing starts, add class, surface, tune direction, source, and
                last-tested date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1fr_0.7fr_1.5fr]">
            <span>Category</span>
            <span>Current pick</span>
            <span>Class</span>
            <span>Testing note</span>
          </div>
          {carRows.map((row) => (
            <LocaleLink
              key={row.category}
              href={row.href}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1fr_0.7fr_1.5fr]"
            >
              <span className="font-semibold text-zinc-50">{row.category}</span>
              <span className="text-amber-200">{row.pick}</span>
              <span className="text-zinc-300">{row.classBand}</span>
              <span className="text-zinc-400">{row.note}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {guideLinks.map((guide) => (
            <LocaleLink
              key={guide.href}
              href={guide.href}
              className="forza-card p-5"
            >
              <GaugeIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold">{guide.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {guide.description}
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {frameworkCards.map(({ title, description }) => (
            <article key={title} className="forza-card p-5">
              <GaugeIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {classCarGuides.map((guide) => (
            <LocaleLink
              className="forza-card p-5"
              href={guide.pathname}
              key={guide.id}
            >
              <CarFrontIcon className="size-5 text-amber-300" />
              <h2 className="mt-4 text-lg font-semibold">{guide.h1}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {guide.classGoal}. Best for {guide.bestFor}.
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <ListChecksIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">Best cars FAQ</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {bestCarsFaqs.map((faq) => (
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

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <LocaleLink
            className="forza-card p-5"
            href="/games/forza-horizon-6/cars"
          >
            <CarFrontIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Open car database</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Browse individual car pages with class, PI, acquisition, tune
              direction, matched presets, and candidate status.
            </p>
          </LocaleLink>
          <LocaleLink
            className="forza-card p-5"
            href="/tools/forza-horizon-6-tune-presets"
          >
            <GaugeIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Open tune presets</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Match car candidates to shareable baseline presets for road,
              drift, rally, dirt, street, and drag testing.
            </p>
          </LocaleLink>
        </div>
      </section>
    </main>
  );
}
