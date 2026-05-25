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
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import {
  ArrowRightIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  LinkIcon,
  SearchIcon,
  ShieldCheckIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const pathname = '/tools/forza-horizon-6-tune-codes';
const title = 'Forza Horizon 6 Tune Codes and Share Links - Apex Tune Hub';
const description =
  'Forza Horizon 6 tune codes hub for shareable preset links, tested setup workflow, car-specific tune notes, and safe baseline setup pages.';

const codeWorkflow = [
  {
    title: 'Start with a baseline',
    text: 'Open the tune calculator or a preset URL that already matches class, drivetrain, race type, and handling issue.',
    href: '/tools/forza-horizon-6-tune-calculator',
    icon: GaugeIcon,
  },
  {
    title: 'Test the car-specific version',
    text: 'Run the same route twice, then adjust one setting group at a time before calling the setup finished.',
    href: '/games/forza-horizon-6/tuning-settings',
    icon: ClipboardCheckIcon,
  },
  {
    title: 'Link the car page',
    text: 'Attach every usable setup to a car page, class hub, or manufacturer hub so the tune code has context.',
    href: '/games/forza-horizon-6/cars',
    icon: LinkIcon,
  },
  {
    title: 'Keep fake codes out',
    text: 'Do not publish invented share codes. Use transparent placeholders until a real in-game code is verified.',
    href: '/games/forza-horizon-6/guides',
    icon: ShieldCheckIcon,
  },
];

const tuneCodeRows = [
  {
    label: 'A class RWD street wheelspin',
    preset: 'A RWD street wheelspin stable',
    status: 'Baseline URL ready',
    href: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
  },
  {
    label: 'S1 AWD road understeer',
    preset: 'S1 AWD road understeer balanced',
    status: 'Baseline URL ready',
    href: '/tools/forza-horizon-6-tune-presets/s1-awd-road-understeer-balanced',
  },
  {
    label: 'S2 AWD drag wheelspin',
    preset: 'S2 AWD drag wheelspin aggressive',
    status: 'Baseline URL ready',
    href: '/tools/forza-horizon-6-tune-presets/s2-awd-drag-wheelspin-aggressive',
  },
  {
    label: 'Car-specific share codes',
    preset: 'Add after in-game verification',
    status: 'Do not fake',
    href: '/games/forza-horizon-6/cars',
  },
];

const faqs: FaqItem[] = [
  {
    question: 'Does Apex Tune Hub publish Forza Horizon 6 tune codes?',
    answer:
      'This page is prepared for tune-code and share-code demand, but it does not publish invented in-game codes. Until a code is verified, it links to transparent calculator presets and car-specific setup notes.',
  },
  {
    question: 'What is the difference between a tune code and a preset URL?',
    answer:
      'A tune code is an in-game share code after a setup is saved and shared. A preset URL is an Apex Tune Hub calculator state that documents the baseline inputs and makes the setup easy to refine.',
  },
  {
    question: 'How should tune codes be added later?',
    answer:
      'Add the exact car, class, drivetrain, route type, share code, creator/source, last-tested date, and matching preset page. Keep old codes labelled if a patch changes the setup.',
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

export default function ForzaHorizon6TuneCodesPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Tools', path: '/tools/forza-horizon-6-tune-calculator' },
            { name: 'FH6 Tune Codes', path: pathname },
          ]),
          buildArticleJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(faqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">
            <SearchIcon className="size-4" />
            Share-code workflow
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 tune codes and share links
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this hub for tune-code intent without publishing fake
                numbers. Apex Tune Hub starts with shareable calculator links,
                preset pages, and car notes, then can add real in-game share
                codes after verification.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-presets">
                    Browse Preset URLs
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
                    Open Calculator
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <ShieldCheckIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Trust rule for tune codes
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                A tune code should have a car, class, route use, creator or
                source, and last-tested date. If any of those are missing, keep
                it as a baseline preset link instead.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-4">
          {codeWorkflow.map((item) => {
            const Icon = item.icon;

            return (
              <LocaleLink className="forza-card p-5" href={item.href} key={item.title}>
                <Icon className="size-5 text-cyan-300" />
                <h2 className="mt-4 text-lg font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {item.text}
                </p>
              </LocaleLink>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1.2fr_0.8fr]">
            <span>Search intent</span>
            <span>Best current link</span>
            <span>Status</span>
          </div>
          {tuneCodeRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1.2fr_0.8fr]"
              href={row.href}
              key={row.label}
            >
              <span className="font-semibold text-zinc-50">{row.label}</span>
              <span className="text-zinc-400">{row.preset}</span>
              <span className="text-amber-200">{row.status}</span>
            </LocaleLink>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <div className="flex items-center gap-3">
            <GaugeIcon className="size-5 text-amber-300" />
            <h2 className="text-xl font-semibold">Popular preset entry points</h2>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {forzaTunePresets.slice(0, 6).map((preset) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40"
                href={`/tools/forza-horizon-6-tune-presets/${preset.slug}`}
                key={preset.slug}
              >
                <strong className="block text-zinc-100">{preset.h1}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {preset.input.classBand} {preset.input.drivetrain}{' '}
                  {preset.input.raceType} for {preset.input.handlingIssue}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="forza-panel p-5">
          <h2 className="text-2xl font-semibold">Tune code FAQ</h2>
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
        description="Get verified FH6 tune-code updates, preset URLs, and car-specific setup notes as testing expands."
        title="Follow FH6 tune code updates"
      />
    </main>
  );
}
