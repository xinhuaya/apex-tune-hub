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
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  Disc3Icon,
  GaugeIcon,
  ListChecksIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  WrenchIcon,
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

const wheelFeelProfiles = [
  {
    title: 'Road racing clarity',
    body: 'Prioritize readable center feel, clean corner entry, and enough road texture to sense front grip.',
    icon: GaugeIcon,
  },
  {
    title: 'Rally recovery',
    body: 'Use a calmer profile that handles bumps, crests, and loose exits without fighting the driver.',
    icon: RotateCcwIcon,
  },
  {
    title: 'Drift control',
    body: 'Keep self-aligning force fast enough to catch transitions but not so heavy that snapback hides the car balance.',
    icon: Disc3Icon,
  },
];

const wheelSymptomRows = [
  {
    symptom: 'Wheel feels too heavy',
    likelyCause: 'Force strength or damper too high',
    firstMove:
      'Lower force feedback strength before changing alignment, ARBs, or differential.',
    href: '/games/forza-horizon-6/guides/wheel-settings-guide',
  },
  {
    symptom: 'Center feels vague',
    likelyCause: 'Deadzone, linearity, or wheelbase profile',
    firstMove:
      'Fix steering feel with the wheel profile before tuning one car for sharper turn-in.',
    href: '/settings/forza-horizon-6-controller',
  },
  {
    symptom: 'Oscillation on straights',
    likelyCause: 'Self-aligning force or device software',
    firstMove:
      'Reduce aggressive feedback and check wheelbase software settings before car tuning.',
    href: '/settings/forza-horizon-6',
  },
  {
    symptom: 'Drift transitions snap too fast',
    likelyCause: 'Wheel speed plus drift setup',
    firstMove:
      'Calm wheel response, then use the drift calculator if one car still snaps back.',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
  },
];

const wheelTestLoop = [
  'Use one stable road car, one rough-surface car, and one drift candidate.',
  'Record wheelbase, pedals, assists, steering lock, and any device software profile.',
  'Change one group at a time: force strength, damper, deadzone, or steering response.',
  'If every car improves, keep the wheel setting; if one car remains wrong, tune that car.',
];

const wheelNextLinks = [
  {
    title: 'Settings Hub',
    href: '/settings/forza-horizon-6',
    note: 'Return here when the problem may be PC, Steam Deck, controller, or car tuning instead.',
  },
  {
    title: 'Tune Calculator',
    href: '/tools/forza-horizon-6-tune-calculator',
    note: 'Use this when the wheel feels stable and only one car has a tuning symptom.',
  },
  {
    title: 'Drift Calculator',
    href: '/tools/forza-horizon-6-drift-tune-calculator',
    note: 'Use this when angle, transition, and recovery remain the hard part.',
  },
  {
    title: 'Tuning Settings',
    href: '/games/forza-horizon-6/tuning-settings',
    note: 'Use this to understand which slider group should change after the wheel profile is readable.',
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
          buildItemListJsonLd({
            title: 'Forza Horizon 6 wheel settings next steps',
            items: wheelNextLinks.map((link) => ({
              name: link.title,
              path: link.href,
            })),
          }),
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
              <div className="mt-5 grid gap-2">
                {wheelTestLoop.map((step) => (
                  <div
                    className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm leading-6 text-zinc-300"
                    key={step}
                  >
                    <ShieldCheckIcon className="mt-1 size-4 shrink-0 text-cyan-300" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Choose wheel feel by driving job
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A wheel profile that feels great on a road sprint can be too heavy
              for drift or too sharp for rally. Pick the job first, then decide
              whether the wheel profile or the car tune needs work.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {wheelFeelProfiles.map((profile) => {
              const Icon = profile.icon;

              return (
                <article className="forza-card p-4" key={profile.title}>
                  <Icon className="size-5 text-cyan-300" />
                  <h3 className="mt-3 text-base font-semibold text-zinc-100">
                    {profile.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {profile.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

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

        <div className="forza-panel mt-6 overflow-hidden">
          <div className="grid gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[0.85fr_0.75fr_1.4fr]">
            <span>Wheel symptom</span>
            <span>Likely cause</span>
            <span>First move</span>
          </div>
          {wheelSymptomRows.map((row) => (
            <LocaleLink
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm transition last:border-b-0 hover:bg-white/[0.03] md:grid-cols-[0.85fr_0.75fr_1.4fr]"
              href={row.href}
              key={row.symptom}
            >
              <span className="font-semibold text-zinc-50">{row.symptom}</span>
              <span className="text-amber-200">{row.likelyCause}</span>
              <span className="leading-6 text-zinc-400">{row.firstMove}</span>
            </LocaleLink>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Follow-up routes
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Where to go after the wheel profile is readable
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Once force feedback and steering feel are consistent, route the
              remaining issue into car tuning, drift, or the broader settings
              hub.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {wheelNextLinks.map((item) => (
              <LocaleLink
                className="forza-card p-4"
                href={item.href}
                key={item.href}
              >
                <WrenchIcon className="size-5 text-fuchsia-300" />
                <h3 className="mt-4 text-base font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.note}
                </p>
              </LocaleLink>
            ))}
          </div>
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
      <ApexNewsletterCta
        description="Get FH6 wheel settings updates, force feedback notes, and car-tune links as testing expands."
        title="Follow FH6 wheel settings updates"
      />
    </main>
  );
}
