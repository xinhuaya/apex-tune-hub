import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import {
  forzaHorizon6Guides,
  getForzaHorizon6Guide,
} from '@/lib/guides/forza-horizon-6-guides';
import { constructMetadata } from '@/lib/metadata';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CheckCircle2Icon,
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

  const relatedGuides = forzaHorizon6Guides
    .filter((item) => item.slug !== guide.slug)
    .slice(0, 3);

  return (
    <main className="forza-page text-zinc-50">
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <LocaleLink
            href="/games/forza-horizon-6/guides"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-cyan-200"
          >
            <ArrowLeftIcon className="size-4" />
            Back to guides
          </LocaleLink>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="forza-chip">{guide.eyebrow}</p>
              <h1 className="forza-neon-title mt-5 max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                {guide.h1}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                {guide.intro}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
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

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
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

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">Next reads</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
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
  );
}
