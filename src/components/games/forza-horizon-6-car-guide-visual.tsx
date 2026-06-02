import {
  CarFrontIcon,
  FlagIcon,
  GaugeIcon,
  RouteIcon,
  TrophyIcon,
} from 'lucide-react';

type CarGuideVisualProps = {
  title: string;
  eyebrow: string;
  primaryMetric: string;
  roles: string[];
  candidates: {
    name: string;
    tag: string;
    note: string;
  }[];
};

function visualAccent(title: string) {
  const key = title.toLowerCase();

  if (key.includes('drift')) {
    return {
      label: 'angle path',
      gradient: 'from-fuchsia-300 via-pink-300 to-amber-200',
      icon: RouteIcon,
    };
  }

  if (key.includes('rally')) {
    return {
      label: 'mixed surface',
      gradient: 'from-emerald-300 via-cyan-300 to-amber-200',
      icon: FlagIcon,
    };
  }

  if (key.includes('s2') || key.includes('speed')) {
    return {
      label: 'speed proof',
      gradient: 'from-amber-200 via-orange-300 to-cyan-300',
      icon: GaugeIcon,
    };
  }

  if (key.includes('jdm') || key.includes('toyota') || key.includes('honda')) {
    return {
      label: 'Japan garage',
      gradient: 'from-red-300 via-cyan-300 to-zinc-100',
      icon: TrophyIcon,
    };
  }

  return {
    label: 'candidate route',
    gradient: 'from-cyan-300 via-fuchsia-300 to-amber-200',
    icon: CarFrontIcon,
  };
}

export function ForzaHorizon6CarGuideVisual({
  title,
  eyebrow,
  primaryMetric,
  roles,
  candidates,
}: CarGuideVisualProps) {
  const accent = visualAccent(title);
  const Icon = accent.icon;
  const visibleRoles = roles.slice(0, 4);
  const visibleCandidates = candidates.slice(0, 4);

  return (
    <figure
      aria-label={`${title} candidate car visual map`}
      className="forza-panel relative overflow-hidden p-5"
    >
      <div className="forza-hero-grid absolute inset-0 opacity-25" />
      <div
        aria-hidden="true"
        className={`absolute -right-20 top-10 h-48 w-48 rounded-full bg-gradient-to-br ${accent.gradient} opacity-20 blur-3xl`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-x-6 top-8 h-px bg-gradient-to-r ${accent.gradient} opacity-70`}
      />

      <div className="relative grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="flex min-h-80 flex-col justify-between rounded-md border border-white/10 bg-black/35 p-5">
          <div>
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Original car-list visual
              </p>
              <span className="inline-flex size-11 items-center justify-center rounded-md border border-amber-300/30 bg-amber-300/10 text-amber-100">
                <Icon className="size-5" />
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-zinc-50">
              {accent.label}
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              A visual map for this shortlist: choose the role, pick the
              candidate, open the tune path, then promote the car only after a
              repeatable route test.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-2">
            {[
              ['Role', visibleRoles.length.toString()],
              ['Cars', candidates.length.toString()],
              ['Focus', primaryMetric],
            ].map(([label, value]) => (
              <div
                className="min-h-24 rounded-md border border-white/10 bg-white/[0.04] p-3"
                key={label}
              >
                <p className="text-lg font-semibold text-zinc-50">{value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-md border border-white/10 bg-[#05070a]/85 p-5">
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">
                  {eyebrow}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-zinc-50">
                  candidate flow
                </h3>
              </div>
              <span className="rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                {accent.label}
              </span>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {visibleCandidates.map((candidate, index) => (
                <div
                  className="relative overflow-hidden rounded-md border border-white/10 bg-white/[0.035] p-4"
                  key={`${candidate.name}-${candidate.tag}`}
                >
                  <div
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${accent.gradient}`}
                  />
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-cyan-100">
                      {index + 1}
                    </span>
                    <span className="rounded-md border border-white/10 bg-black/35 px-2 py-1 text-xs font-semibold text-zinc-400">
                      {candidate.tag}
                    </span>
                  </div>
                  <h4 className="mt-4 text-base font-semibold text-zinc-100">
                    {candidate.name}
                  </h4>
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-zinc-500">
                    {candidate.note}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2 sm:grid-cols-4">
            {visibleRoles.map((role) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-center text-xs font-semibold text-zinc-300"
                key={role}
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>

      <figcaption className="relative mt-4 text-xs leading-5 text-zinc-500">
        Original Apex Tune Hub visual for {title}. It is generated from page
        structure and avoids unlicensed game screenshots or official artwork.
      </figcaption>
    </figure>
  );
}
