import { ApexNewsletterCta } from '@/components/marketing/apex-newsletter-cta';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import {
  buildBreadcrumbJsonLd,
  buildFaqJsonLd,
  buildHowToJsonLd,
  buildItemListJsonLd,
  buildWebPageJsonLd,
  type FaqItem,
} from '@/lib/seo/forza-horizon-6';
import {
  CalendarDaysIcon,
  CarIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  GitBranchIcon,
  ListChecksIcon,
  MailIcon,
  RadioTowerIcon,
  RouteIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  TrophyIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const eventRows = [
  [
    'Featured challenge',
    'Check restrictions first',
    'Pick a safe A or S1 tune',
  ],
  [
    'Reward car',
    'Confirm source and timing',
    'Open the car page after verified',
  ],
  ['Seasonal event', 'Match class and surface', 'Link the closest tune preset'],
  ['Playlist note', 'Record weekly changes', 'Send a short setup summary'],
];

const weeklyResetBoard = [
  {
    label: 'Reward car',
    status: 'Verify before naming',
    action: 'Link to Car Pass or car database after the source is clear.',
  },
  {
    label: 'Championship restrictions',
    status: 'Class and drivetrain first',
    action: 'Pick upgrade order and a safe A or S1 baseline before chasing extreme builds.',
  },
  {
    label: 'PR stunts',
    status: 'Surface and run-up matter',
    action: 'Use gearing and launch notes for speed traps, jumps, and zones.',
  },
  {
    label: 'Photo or collection task',
    status: 'Fast guide format',
    action: 'Keep the note short, link the car page, and avoid filler text.',
  },
];

const weeklyActionQueue = [
  'Confirm reward cars, event restrictions, and source status.',
  'Set upgrade order, tire compound, and swap limits before spending PI on a weekly car.',
  'Choose one safe car pick for each race type before adding alternatives.',
  'Attach each event to a tune preset, calculator, or best-car hub.',
  'Flag any unverified reward or community rumor instead of presenting it as fact.',
  'Send a short tune-drop email when the weekly page changes.',
];

const weeklyPublishingSteps: FaqItem[] = [
  {
    question: '1. Verify the reset details',
    answer:
      'Check reward cars, event restrictions, surface type, class limits, and source status before naming a final recommendation.',
  },
  {
    question: '2. Pick safe first builds',
    answer:
      'Choose one conservative car and tune path for each event type before adding aggressive alternatives.',
  },
  {
    question: '3. Attach internal links',
    answer:
      'Connect every event note to a car page, preset URL, calculator, tune-code workflow, or best-car hub.',
  },
  {
    question: '4. Publish the short setup note',
    answer:
      'Keep the weekly update compact: restriction, safe car, tune link, route problem, and retest status.',
  },
];

const trustRules = [
  {
    title: 'Do not guess rewards',
    text: 'Keep reward cars and restrictions labelled until an official source or verified in-game view confirms them.',
  },
  {
    title: 'Prefer safe tunes',
    text: 'Weekly events usually reward repeatable handling more than leaderboard aggression, especially in traffic or weather.',
  },
  {
    title: 'Update links every reset',
    text: 'Each reset should point players to the best current car list, calculator state, preset URL, or Car Pass tracker row.',
  },
];

const weeklyFieldTemplate = [
  'Week or season label',
  'Event name',
  'Reward car or prize',
  'Class restriction',
  'Drivetrain restriction',
  'Surface and route type',
  'Safe car pick',
  'Tune or preset URL',
  'Last verified time',
  'Update status',
];

const retentionLoops = [
  {
    title: 'Search Console loop',
    href: '/games/forza-horizon-6/faq',
    text: 'Use rising weekly queries to decide which event note, car page, or guide needs expansion.',
  },
  {
    title: 'Newsletter loop',
    href: '/waitlist',
    text: 'Send one short weekly setup note instead of a long generic newsletter.',
  },
  {
    title: 'Tune-code loop',
    href: '/tools/forza-horizon-6-tune-codes',
    text: 'Promote verified weekly setups into code rows only after source, car, class, and route are clear.',
  },
  {
    title: 'Car-page loop',
    href: '/games/forza-horizon-6/cars',
    text: 'When a reward car is verified, connect the weekly note back to its car detail page.',
  },
];

const weeklyContentSlots = [
  {
    title: 'Confirmed this week',
    icon: ShieldCheckIcon,
    text: 'Use only after rewards, restrictions, and event types are verified.',
  },
  {
    title: 'Safe baseline picks',
    icon: CarIcon,
    text: 'One reliable car and preset per event type keeps the page useful fast.',
  },
  {
    title: 'Needs retest',
    icon: RadioTowerIcon,
    text: 'Use this slot when a patch, route, or reward change makes an older setup uncertain.',
  },
  {
    title: 'Next update',
    icon: CalendarDaysIcon,
    text: 'Queue pages to refresh: reward car, class hub, preset, guide, or tune-code row.',
  },
];

const baselineLinks = [
  {
    title: 'Safe road baseline',
    href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
    note: 'Use for road championships, speed zones, and mixed city routes.',
  },
  {
    title: 'Drift baseline',
    href: '/games/forza-horizon-6/guides/japan-drift-setup',
    note: 'Use for weekly drift zones before chasing high-angle builds.',
  },
  {
    title: 'Starter garage',
    href: '/games/forza-horizon-6/guides/best-starter-cars',
    note: 'Use when the playlist needs quick coverage across several event types.',
  },
  {
    title: 'Upgrade order',
    href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
    note: 'Use before spending PI on a restricted weekly build.',
  },
  {
    title: 'Forzathon workflow',
    href: '/games/forza-horizon-6/guides/forzathon-weekly-challenge-tuning',
    note: 'Use for required-car chapters, skill chains, PR stunts, and quick tune swaps.',
  },
];
const weeklyPrepLinks = [
  {
    title: 'Road championship prep',
    eventType: 'Road or street',
    carLink: '/games/forza-horizon-6/best-road-racing-cars',
    tuneLink:
      '/tools/forza-horizon-6-tune-presets/s1-awd-road-understeer-balanced',
    guideLink: '/games/forza-horizon-6/guides/seasonal-championship-tuning',
  },
  {
    title: 'Drift zone prep',
    eventType: 'Drift zone',
    carLink: '/games/forza-horizon-6/best-drift-cars',
    tuneLink: '/tools/forza-horizon-6-drift-tune-calculator',
    guideLink: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
  },
  {
    title: 'Dirt and rally prep',
    eventType: 'Dirt or rally',
    carLink: '/games/forza-horizon-6/best-rally-cars',
    tuneLink:
      '/tools/forza-horizon-6-tune-presets/s1-awd-rally-wheelspin-balanced',
    guideLink: '/games/forza-horizon-6/guides/cross-country-offroad-tuning',
  },
  {
    title: 'Speed and drag prep',
    eventType: 'Speed trap or drag',
    carLink: '/games/forza-horizon-6/best-cars',
    tuneLink:
      '/tools/forza-horizon-6-tune-presets/s2-awd-drag-wheelspin-aggressive',
    guideLink: '/games/forza-horizon-6/guides/speed-trap-speed-zone-tuning',
  },
  {
    title: 'Trial co-op prep',
    eventType: 'Team championship',
    carLink: '/games/forza-horizon-6/best-cars',
    tuneLink: '/tools/forza-horizon-6-tune-calculator',
    guideLink: '/games/forza-horizon-6/guides/the-trial-coop-race-tuning',
  },
  {
    title: 'Forzathon chapter prep',
    eventType: 'Required-car challenge',
    carLink: '/games/forza-horizon-6/cars',
    tuneLink: '/tools/forza-horizon-6-tune-codes',
    guideLink: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
  },
];

const weeklyEventTemplates = [
  {
    title: 'Championship race',
    restriction: 'Class, drivetrain, surface, and weather',
    safePick: 'Start with upgrade order, then stable A/S1 road or rally candidates.',
    tunePath: '/tools/forza-horizon-6-tune-calculator',
    guidePath: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
  },
  {
    title: 'Drift zone',
    restriction: 'Target score, zone shape, and car layout',
    safePick: 'Use a repeatable RWD baseline before chasing angle.',
    tunePath: '/tools/forza-horizon-6-drift-tune-calculator',
    guidePath: '/games/forza-horizon-6/guides/japan-drift-setup',
  },
  {
    title: 'Speed trap or speed zone',
    restriction: 'Run-up length, surface, traffic, and top-speed demand',
    safePick: 'Pick a car that reaches useful speed without unstable exits.',
    tunePath: '/tools/forza-horizon-6-gear-ratio-calculator',
    guidePath: '/games/forza-horizon-6/guides/speed-trap-speed-zone-tuning',
  },
  {
    title: 'The Trial co-op',
    restriction: 'Class, team traffic, AI contact, and clean starts',
    safePick: 'Use a stable tune that launches cleanly and recovers after contact.',
    tunePath: '/tools/forza-horizon-6-tune-calculator',
    guidePath: '/games/forza-horizon-6/guides/the-trial-coop-race-tuning',
  },
  {
    title: 'Forzathon weekly challenge',
    restriction: 'Required car, chapter task, skill chain, or PR stunt target',
    safePick: 'Keep a legal baseline and swap to task-specific tunes only when needed.',
    tunePath: '/tools/forza-horizon-6-tune-codes',
    guidePath: '/games/forza-horizon-6/guides/forzathon-weekly-challenge-tuning',
  },
  {
    title: 'Reward-car spotlight',
    restriction: 'Source status, unlock window, and car role',
    safePick: 'Link the car page only after reward details are verified.',
    tunePath: '/games/forza-horizon-6/cars',
    guidePath: '/games/forza-horizon-6/car-pass',
  },
];

const weeklyEmailBlocks = [
  {
    label: 'Subject line',
    example: 'FH6 weekly safe picks: road, drift, speed, and reward notes',
  },
  {
    label: 'Opening line',
    example:
      'This week, start with the verified restrictions first, then use these conservative tune paths.',
  },
  {
    label: 'Setup rows',
    example:
      'Event, restriction, safe car, tune link, one weakness, and retest status.',
  },
  {
    label: 'Return link',
    example:
      'Send readers back to the weekly tracker so Search Console, email, and tune pages reinforce each other.',
  },
];

const weeklyStatusLadder = [
  {
    status: 'Draft',
    meaning:
      'Use while rewards or restrictions are still unconfirmed. Do not name final cars yet.',
  },
  {
    status: 'Verified',
    meaning:
      'Use after event type, restriction, reward, and source timing are checked.',
  },
  {
    status: 'Tune linked',
    meaning:
      'Use after the row has a calculator state, preset URL, guide, or car-page path.',
  },
  {
    status: 'Retest needed',
    meaning:
      'Use when a patch, route condition, or new car option may change the recommendation.',
  },
];

const pathname = '/games/forza-horizon-6/weekly-playlist';
const title = 'Forza Horizon 6 Weekly Playlist Tracker - Apex Tune Hub';
const description =
  'Track Forza Horizon 6 weekly playlist rewards, event notes, recommended cars, and tune links.';
const weeklyFaqs: FaqItem[] = [
  {
    question: 'What should I check first in the FH6 weekly playlist?',
    answer:
      'Check event class, drivetrain limits, surface type, and reward car timing before choosing a tune.',
  },
  {
    question: 'Which tune is safest for weekly events?',
    answer:
      'A stable A or S1 baseline is usually safer than an extreme build because weekly events reward consistency across traffic, weather, and mixed routes.',
  },
  {
    question: 'How often should this playlist page be updated?',
    answer:
      'Update it on the weekly playlist cadence with reward cars, event restrictions, suggested cars, and the closest tune links.',
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

export default function WeeklyPlaylistPage() {
  return (
    <main className="forza-page text-zinc-50">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: 'Forza Horizon 6', path: '/games/forza-horizon-6' },
            { name: 'Weekly Playlist', path: pathname },
          ]),
          buildWebPageJsonLd({ title, description, path: pathname }),
          buildHowToJsonLd({
            title: 'How to update the Forza Horizon 6 weekly playlist page',
            description:
              'A repeatable workflow for publishing FH6 weekly playlist notes without guessing rewards or restrictions.',
            path: pathname,
            steps: weeklyPublishingSteps,
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 weekly playlist preparation links',
            items: weeklyPrepLinks.map((item) => ({
              name: item.title,
              path: item.carLink,
            })),
          }),
          buildItemListJsonLd({
            title: 'Forza Horizon 6 weekly playlist retention links',
            items: retentionLoops.map((item) => ({
              name: item.title,
              path: item.href,
            })),
          }),
          buildFaqJsonLd(weeklyFaqs),
        ]}
      />
      <section className="border-b border-zinc-800">
        <div className="forza-hero-grid pointer-events-none absolute inset-x-0 top-16 h-96 opacity-35" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="forza-chip">Weekly setup tracker</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <h1 className="forza-neon-title max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
                Forza Horizon 6 weekly playlist tracker
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">
                Use this page as the weekly prep desk: check reward cars, event
                requirements, suggested starter builds, tune links, and which
                pages need a quick refresh before the season changes.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="forza-primary-button">
                  <LocaleLink href="/games/forza-horizon-6/car-pass">
                    Car Pass Tracker
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
              <MailIcon className="size-7 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                What to check first
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Start with event class, drivetrain limits, surface type, and
                whether the challenge rewards clean consistency or one perfect
                run.
              </p>
              <div className="mt-5 grid gap-2">
                {['Restriction', 'Safe car', 'Tune link', 'One setup note'].map(
                  (item) => (
                    <div
                      className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-semibold text-zinc-200"
                      key={item}
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <GitBranchIcon className="size-6 text-cyan-300" />
            <h2 className="mt-4 text-2xl font-semibold">
              Weekly publishing workflow
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              This turns the page into a repeatable operating system: verify the
              reset, pick safe builds, attach internal links, then publish a
              compact update that can be reused in email and social posts.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {weeklyPublishingSteps.map((step) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={step.question}
              >
                <h3 className="text-sm font-semibold text-zinc-100">
                  {step.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {step.answer}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-6 grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="forza-panel p-5">
            <ListChecksIcon className="size-6 text-amber-300" />
            <h2 className="mt-4 text-2xl font-semibold">Weekly reset board</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Use this board as the repeatable page structure every playlist
              reset: verify, pick, link, and send the tune drop.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {weeklyResetBoard.map((item) => (
              <article className="forza-card p-4" key={item.label}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {item.status}
                </p>
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.action}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="forza-panel mb-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <SlidersHorizontalIcon className="size-6 text-fuchsia-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Weekly content slots
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Keep the live page structured even when official details are
                incomplete. Slots make it clear what is verified, what is safe,
                and what still needs retesting.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {weeklyContentSlots.map((slot) => {
                const Icon = slot.icon;

                return (
                  <article
                    className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                    key={slot.title}
                  >
                    <Icon className="size-5 text-cyan-300" />
                    <h3 className="mt-3 text-sm font-semibold text-zinc-100">
                      {slot.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {slot.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="forza-panel overflow-hidden">
          <div className="grid border-b border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 md:grid-cols-[1fr_1fr_1.2fr]">
            <span>Section</span>
            <span>Status</span>
            <span>Action</span>
          </div>
          {eventRows.map(([section, status, action]) => (
            <div
              key={section}
              className="grid gap-3 border-b border-white/10 px-5 py-4 text-sm last:border-b-0 md:grid-cols-[1fr_1fr_1.2fr]"
            >
              <span className="font-semibold text-zinc-50">{section}</span>
              <span className="text-amber-200">{status}</span>
              <span className="text-zinc-400">{action}</span>
            </div>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <RouteIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Weekly update fields to collect
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These fields prepare the page for future structured weekly
                entries without forcing fake current-week data into the site.
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {weeklyFieldTemplate.map((field) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-zinc-200"
                  key={field}
                >
                  {field}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="forza-card p-5">
            <CalendarDaysIcon className="size-5 text-cyan-300" />
            <h2 className="mt-4 text-lg font-semibold">Update routine</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Check the playlist on the same weekly cadence and keep the answer
              short: restriction, best safe car, best tune link, and one setup
              note.
            </p>
          </article>
          <article className="forza-card p-5">
            <TrophyIcon className="size-5 text-fuchsia-300" />
            <h2 className="mt-4 text-lg font-semibold">Reward car links</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              Every reward car should link to the car database, best cars, and
              the most relevant calculator.
            </p>
          </article>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <ClipboardCheckIcon className="size-6 text-cyan-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Weekly publishing queue
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                This keeps the page useful even before final reward details are
                available, and makes the update process repeatable.
              </p>
            </div>
            <div className="grid gap-2">
              {weeklyActionQueue.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
                  key={item}
                >
                  <GaugeIcon className="mt-0.5 size-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {baselineLinks.map((item) => (
            <LocaleLink
              className="forza-card p-5"
              href={item.href}
              key={item.href}
            >
              <CarIcon className="size-5 text-amber-300" />
              <h2 className="mt-4 text-lg font-semibold text-zinc-50">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {item.note}
              </p>
            </LocaleLink>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {trustRules.map((rule) => (
            <article className="forza-card p-5" key={rule.title}>
              <ShieldCheckIcon className="size-5 text-fuchsia-300" />
              <h2 className="mt-4 text-lg font-semibold">{rule.title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {rule.text}
              </p>
            </article>
          ))}
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="flex items-center gap-3">
            <GaugeIcon className="size-5 text-cyan-300" />
            <h2 className="text-xl font-semibold">Weekly tune path matrix</h2>
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-4">
            {weeklyPrepLinks.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                key={item.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {item.eventType}
                </p>
                <h3 className="mt-3 text-base font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    ['Cars', item.carLink],
                    ['Tune', item.tuneLink],
                    ['Guide', item.guideLink],
                  ].map(([label, href]) => (
                    <LocaleLink
                      className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-cyan-300/40 hover:text-cyan-100"
                      href={href}
                      key={href}
                    >
                      {label}
                    </LocaleLink>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <CalendarDaysIcon className="size-6 text-amber-300" />
              <h2 className="mt-4 text-xl font-semibold">
                Weekly event template cards
              </h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                These cards are the working template for future live playlist
                updates. Each row should stay small enough to refresh quickly:
                restriction, safe pick, tune path, and one guide route.
              </p>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {weeklyEventTemplates.map((item) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={item.title}
                >
                  <h3 className="text-base font-semibold text-zinc-100">
                    {item.title}
                  </h3>
                  <dl className="mt-3 grid gap-3 text-sm leading-6">
                    <div>
                      <dt className="font-semibold text-cyan-200">
                        Restriction to verify
                      </dt>
                      <dd className="text-zinc-400">{item.restriction}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-amber-200">
                        Safe first pick
                      </dt>
                      <dd className="text-zinc-400">{item.safePick}</dd>
                    </div>
                  </dl>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <LocaleLink
                      className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/50"
                      href={item.tunePath}
                    >
                      Tune path
                    </LocaleLink>
                    <LocaleLink
                      className="rounded-md border border-white/10 px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-amber-300/40 hover:text-amber-100"
                      href={item.guidePath}
                    >
                      Guide path
                    </LocaleLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_0.95fr]">
          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <MailIcon className="size-5 text-cyan-300" />
              <h2 className="text-xl font-semibold">
                Weekly email note format
              </h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The weekly tracker should feed a short email, not a long generic
              blast. This format turns each page update into a repeat visit and
              gives the newsletter a useful reason to exist.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {weeklyEmailBlocks.map((block) => (
                <article
                  className="rounded-md border border-white/10 bg-white/[0.03] p-4"
                  key={block.label}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {block.label}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {block.example}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="forza-panel p-5">
            <div className="flex items-center gap-3">
              <RadioTowerIcon className="size-5 text-fuchsia-300" />
              <h2 className="text-xl font-semibold">Playlist status ladder</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Use these labels so readers can tell whether a weekly row is still
              a planning note or already connected to a reliable setup.
            </p>
            <div className="mt-4 grid gap-2">
              {weeklyStatusLadder.map((item) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.03] px-4 py-3"
                  key={item.status}
                >
                  <strong className="text-sm text-zinc-100">
                    {item.status}
                  </strong>
                  <p className="mt-1 text-sm leading-6 text-zinc-400">
                    {item.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Retention loop
            </p>
            <h2 className="mt-3 text-2xl font-semibold">
              Turn weekly updates into repeat visits
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              The weekly page should create a reason to come back: short setup
              notes, clear verified status, and links to pages that can improve
              after every reset.
            </p>
          </div>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {retentionLoops.map((loop) => (
              <LocaleLink
                className="rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm transition hover:border-cyan-300/40 hover:text-cyan-100"
                href={loop.href}
                key={loop.href}
              >
                <strong className="block text-zinc-100">{loop.title}</strong>
                <span className="mt-2 block leading-6 text-zinc-400">
                  {loop.text}
                </span>
              </LocaleLink>
            ))}
          </div>
        </div>

        <div className="forza-panel mt-6 p-5">
          <h2 className="text-xl font-semibold">FAQ</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {weeklyFaqs.map((faq) => (
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
        description="Get weekly FH6 event restrictions, safe car picks, tune links, and car page updates in one short setup note."
        title="Follow FH6 weekly setup notes"
      />
    </main>
  );
}
