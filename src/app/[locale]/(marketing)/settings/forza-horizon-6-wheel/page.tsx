import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  Disc3Icon,
  GaugeIcon,
  RotateCcwIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const wheelProfiles = [
  {
    brand: 'Logitech',
    issue: 'Noisy, light, or not enough road texture',
    action: 'Start conservative, then tune force feedback and damper together.',
  },
  {
    brand: 'Thrustmaster',
    issue: 'Heavy center or vague corner entry',
    action: 'Balance steering feel before increasing force strength.',
  },
  {
    brand: 'Fanatec / Moza',
    issue: 'Oscillation, clipping, or too much self-aligning force',
    action:
      'Use device software plus in-game settings as one combined profile.',
  },
];

const wheelTestLinks = [
  {
    title: 'Wheel setup guide',
    href: '/games/forza-horizon-6/guides/wheel-settings-guide',
    note: 'Use this for the full testing order and when to stop changing settings.',
  },
  {
    title: 'Road tune baseline',
    href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
    note: 'Use a stable road tune before judging force feedback feel.',
  },
  {
    title: 'Controller comparison',
    href: '/settings/forza-horizon-6-controller',
    note: 'Compare controller feel if the wheel profile makes every car harder to catch.',
  },
];

const pathname = '/settings/forza-horizon-6-wheel';
const title = 'Best Forza Horizon 6 Wheel Settings - Apex Tune Hub';
const description =
  'Forza Horizon 6 wheel settings guide for Logitech, Thrustmaster, Fanatec, Moza, force feedback, deadzones, and steering feel.';
const wheelFaqs: FaqItem[] = [
  {
    question: 'What should I test first with a wheel in Forza Horizon 6?',
    answer:
      'Use one stable road car and one familiar route. Make force feedback readable before changing every car tune.',
  },
  {
    question: 'Why does my FH6 wheel setup feel too heavy?',
    answer:
      'Heavy force feedback can hide understeer and make oversteer harder to catch. Reduce force strength before making aggressive tune changes.',
  },
  {
    question: 'Should wheel users use different tunes than controller users?',
    answer:
      'Often yes. Wheel users may need gentler steering response and more predictable rear behavior, especially on drift and high-power RWD builds.',
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

export default function ForzaHorizon6WheelSettingsPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Settings', path: pathname },
            { name: 'Wheel Settings', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildFaqJsonLd(wheelFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Wheel setup</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Best Forza Horizon 6 wheel settings
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this as the starting page for wheel setup, force feedback,
                steering feel, deadzones, and brand-specific profiles. Start
                readable, test one route, then make the car tune sharper only
                after the wheel profile feels stable.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/tools/forza-horizon-6-tune-calculator">
                    Tune the car too
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-md"
                >
                  <LocaleLink href="/settings/forza-horizon-6-controller">
                    Controller Settings
                  </LocaleLink>
                </Button>
              </div>
            </div>

            <div className="forza-panel p-5">
              <Disc3Icon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">Important note</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Wheel feel depends on wheelbase, pedals, assists, car class, and
                tune. Treat this page as a starting profile, not a universal
                perfect setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          {wheelProfiles.map((profile) => (
            <article key={profile.brand} className="forza-card p-5">
              <GaugeIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">{profile.brand}</h2>
              <p className="mt-2 text-sm font-semibold text-amber-200">
                {profile.issue}
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                {profile.action}
              </p>
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <RotateCcwIcon className="size-5 text-amber-300" />
            <h2 className="text-lg font-semibold">Wheel test loop</h2>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-400">
            Use one road car, one dirt or rally car, and one drift candidate. If
            the same setting feels wrong across all three, change the wheel
            profile before changing every tune.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {wheelTestLinks.map((item) => (
            <LocaleLink
              className="forza-card p-5"
              href={item.href}
              key={item.href}
            >
              <SlidersHorizontalIcon className="size-5 text-cyan-300" />
              <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.note}
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {wheelFaqs.map((faq) => (
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
    </main>
  );
}
