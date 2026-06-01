import {
  CarFrontIcon,
  GaugeIcon,
  MapPinnedIcon,
  RouteIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';

type GuideVisualProps = {
  title: string;
  cluster: string;
  primaryAction: string;
  sections: {
    title: string;
    body: string;
    bullets: string[];
  }[];
};

function visualMode(cluster: string) {
  const key = cluster.toLowerCase();

  if (key.includes('handling')) {
    return {
      label: 'Handling diagnosis',
      icon: SlidersHorizontalIcon,
      accent: 'from-cyan-300 via-fuchsia-300 to-amber-200',
      track: 'apex correction',
    };
  }

  if (key.includes('event')) {
    return {
      label: 'Event setup route',
      icon: RouteIcon,
      accent: 'from-amber-200 via-orange-400 to-cyan-300',
      track: 'route test',
    };
  }

  if (key.includes('upgrade')) {
    return {
      label: 'PI build stack',
      icon: GaugeIcon,
      accent: 'from-fuchsia-300 via-cyan-300 to-emerald-300',
      track: 'upgrade order',
    };
  }

  if (key.includes('settings')) {
    return {
      label: 'Device settings pass',
      icon: CarFrontIcon,
      accent: 'from-cyan-200 via-sky-400 to-amber-200',
      track: 'input feel',
    };
  }

  return {
    label: 'Launch baseline',
    icon: MapPinnedIcon,
    accent: 'from-amber-200 via-fuchsia-300 to-cyan-300',
    track: 'baseline plan',
  };
}

export function ForzaHorizon6GuideVisual({
  title,
  cluster,
  primaryAction,
  sections,
}: GuideVisualProps) {
  const mode = visualMode(cluster);
  const Icon = mode.icon;
  const visualSteps = sections.slice(0, 3);

  return (
    <figure
      aria-label={`${title} visual guide diagram`}
      className="forza-panel relative overflow-hidden p-5"
    >
      <div className="forza-hero-grid absolute inset-0 opacity-25" />
      <div
        aria-hidden="true"
        className={`absolute inset-x-8 top-10 h-1 rounded-full bg-gradient-to-r ${mode.accent} opacity-80 blur-[1px]`}
      />
      <div className="relative grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch">
        <div className="flex min-h-72 flex-col justify-between rounded-md border border-white/10 bg-black/30 p-5">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Original guide visual
              </p>
              <span className="inline-flex size-10 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-amber-200">
                <Icon className="size-5" />
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-zinc-50">
              {mode.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A quick visual map for this article: identify the problem, run the
              first setup pass, then validate the change before opening the next
              tool.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {['Input', 'Tune', 'Test'].map((item, index) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.04] p-3"
                key={item}
              >
                <p className="text-lg font-semibold text-zinc-50">
                  0{index + 1}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-white/10 bg-[#05070a]/80 p-5">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                {cluster}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-zinc-50">
                {mode.track}
              </h3>
            </div>
            <span className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
              {primaryAction}
            </span>
          </div>

          <div className="relative mt-5">
            <div
              aria-hidden="true"
              className="absolute left-5 top-5 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-cyan-300 via-fuchsia-300 to-amber-200 opacity-50"
            />
            <div className="grid gap-3">
              {visualSteps.map((section, index) => (
                <div
                  className="relative grid grid-cols-[2.5rem_1fr] gap-3"
                  key={section.title}
                >
                  <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-md border border-cyan-300/25 bg-[#071018] text-sm font-semibold text-cyan-100">
                    {index + 1}
                  </span>
                  <div className="rounded-md border border-white/10 bg-white/[0.035] p-3">
                    <h4 className="text-sm font-semibold text-zinc-100">
                      {section.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-zinc-500">
                      {section.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="relative mt-4 text-xs leading-5 text-zinc-500">
        Original Apex Tune Hub diagram for {title}. It summarizes the same
        article workflow and avoids unlicensed game screenshots.
      </figcaption>
    </figure>
  );
}
