import { LocaleLink } from '@/i18n/navigation';
import {
  CameraIcon,
  ClipboardCheckIcon,
  GaugeIcon,
  RouteIcon,
  TimerIcon,
} from 'lucide-react';

type BeginnerTestPlanMode = 'tune' | 'gear' | 'drift';

const modeCopy: Record<
  BeginnerTestPlanMode,
  {
    eyebrow: string;
    title: string;
    intro: string;
    toolHref: string;
    toolLabel: string;
    guideHref: string;
    guideLabel: string;
    accent: string;
  }
> = {
  tune: {
    eyebrow: 'Beginner test plan',
    title: 'Play one clean route before trusting the tune',
    intro:
      'If you are new to FH6 tuning, treat the calculator like a test script. Pick one car, one route, and one problem. Then capture the same proof every time so the site can turn your play session into better setup notes later.',
    toolHref: '/tools/forza-horizon-6-tune-presets',
    toolLabel: 'Open preset library',
    guideHref: '/games/forza-horizon-6/guides',
    guideLabel: 'Open FH6 guides',
    accent: 'text-cyan-200',
  },
  gear: {
    eyebrow: 'Beginner gearing test',
    title: 'Use one straight and one launch point',
    intro:
      'Gear ratio testing gets messy when every run starts somewhere different. Use one launch point, one shift section, and one longest straight before saving a gearing baseline.',
    toolHref: '/tools/forza-horizon-6-tune-calculator',
    toolLabel: 'Check handling first',
    guideHref: '/games/forza-horizon-6/guides/gear-ratio-guide',
    guideLabel: 'Read gearing guide',
    accent: 'text-amber-200',
  },
  drift: {
    eyebrow: 'Beginner drift test',
    title: 'Test one zone before chasing more power',
    intro:
      'For drift builds, record whether the car starts angle, holds angle, and recovers. More horsepower is not useful until the same zone feels repeatable twice.',
    toolHref: '/games/forza-horizon-6/best-drift-cars',
    toolLabel: 'Compare drift cars',
    guideHref: '/games/forza-horizon-6/guides/best-drift-tune-settings',
    guideLabel: 'Read drift settings',
    accent: 'text-pink-200',
  },
};

const sessionSteps = [
  {
    label: '0-10 min',
    title: 'Baseline run',
    body: 'Drive the car once before changing settings. Save the car, route, class, drivetrain, assists, and the main problem you felt.',
    icon: RouteIcon,
  },
  {
    label: '10-20 min',
    title: 'Calculator pass',
    body: 'Enter the same problem into the calculator, copy the notes, and change only the first recommended setting group.',
    icon: GaugeIcon,
  },
  {
    label: '20-35 min',
    title: 'Two proof runs',
    body: 'Run the same route twice. Keep the tune only when the second run is easier to repeat than the first.',
    icon: TimerIcon,
  },
  {
    label: '35-45 min',
    title: 'Capture evidence',
    body: 'Take screenshots of the car page, tune settings, final result, and one moment where the problem is visible.',
    icon: CameraIcon,
  },
];

const dataRows = [
  ['Car', 'Exact model, year, class, drivetrain'],
  ['Route', 'Event name, surface, weather, and start point'],
  [
    'Problem',
    'Understeer, oversteer, wheelspin, launch, limiter, or drift angle',
  ],
  ['Change', 'Only the first setting group you changed'],
  [
    'Proof',
    'Two run notes, screenshot names, and whether you kept the baseline',
  ],
];

export function ForzaBeginnerTestPlan({
  mode,
}: {
  mode: BeginnerTestPlanMode;
}) {
  const copy = modeCopy[mode];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="forza-panel overflow-hidden">
        <div className="grid gap-6 border-b border-white/10 bg-white/[0.03] p-5 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="forza-chip">{copy.eyebrow}</p>
            <h2 className="mt-4 text-2xl font-semibold text-zinc-50">
              {copy.title}
            </h2>
          </div>
          <div>
            <p className="text-sm leading-6 text-zinc-400">{copy.intro}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <LocaleLink
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/[0.08] px-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300/60 hover:bg-cyan-300/[0.12]"
                href={copy.toolHref}
              >
                {copy.toolLabel}
              </LocaleLink>
              <LocaleLink
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/10 bg-black/25 px-3 text-sm font-semibold text-zinc-200 transition hover:border-amber-300/40 hover:bg-amber-300/[0.08]"
                href={copy.guideHref}
              >
                {copy.guideLabel}
              </LocaleLink>
            </div>
          </div>
        </div>
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid border-b border-white/10 lg:border-r lg:border-b-0 md:grid-cols-2">
            {sessionSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  className="border-b border-white/10 p-5 last:border-b-0 md:border-r"
                  key={step.title}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`inline-flex size-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] ${copy.accent}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                        {step.label}
                      </p>
                      <h3 className="mt-2 text-base font-semibold text-zinc-50">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {step.body}
                  </p>
                </article>
              );
            })}
          </div>
          <div className="p-5">
            <div className="flex items-center gap-3">
              <ClipboardCheckIcon className="size-5 text-emerald-200" />
              <h3 className="text-base font-semibold text-zinc-50">
                What to record every session
              </h3>
            </div>
            <div className="mt-4 overflow-hidden rounded-md border border-white/10 bg-black/25">
              {dataRows.map(([label, value]) => (
                <div
                  className="grid gap-2 border-b border-white/10 px-3 py-3 text-sm last:border-b-0 sm:grid-cols-[0.45fr_1fr]"
                  key={label}
                >
                  <span className="font-semibold text-zinc-100">{label}</span>
                  <span className="leading-6 text-zinc-400">{value}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs leading-5 text-zinc-500">
              This is the future data layer: tested screenshots, route notes,
              saved presets, and weekly setup updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
