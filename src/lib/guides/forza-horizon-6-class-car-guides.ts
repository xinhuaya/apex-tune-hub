export type ForzaHorizon6ClassCarGuide = {
  id: 'b' | 'a' | 's1' | 's2';
  pathname: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  classGoal: string;
  bestFor: string;
  picks: {
    car: string;
    role: string;
    status: 'candidate' | 'needs-testing';
    why: string;
    tuneLink: string;
  }[];
  checklist: string[];
};

export const forzaHorizon6ClassCarGuides: Record<
  ForzaHorizon6ClassCarGuide['id'],
  ForzaHorizon6ClassCarGuide
> = {
  b: {
    id: 'b',
    pathname: '/games/forza-horizon-6/best-b-class-cars',
    title: 'Best B Class Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best B class cars candidate list for starter builds, touge routes, lower-power road racing, and weekly events.',
    eyebrow: 'B class candidates',
    h1: 'Best B class cars in Forza Horizon 6',
    intro:
      'B class is the best place to learn car behavior before power hides the problem. These candidates should help with starter routes, touge-style roads, and weekly restrictions.',
    classGoal: 'Readable handling before power',
    bestFor: 'starter routes, lower-speed road, touge, early weekly events',
    picks: [
      {
        car: '2022 Toyota GR86',
        role: 'Starter road and drift learning',
        status: 'candidate',
        why: 'Readable modern handling makes it useful for learning braking, throttle, and rotation without overpowering the chassis.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/a-awd-road-understeer-stable',
      },
      {
        car: '2003 Honda S2000',
        role: 'Technical road and touge',
        status: 'candidate',
        why: 'Responsive chassis and lower-class pace should fit tighter Japan road sections and momentum-style testing.',
        tuneLink:
          '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
      },
      {
        car: '1985 Toyota Sprinter Trueno GT Apex',
        role: 'Lightweight learning build',
        status: 'needs-testing',
        why: 'Low stock PI leaves room to build gradually while preserving the rotation players expect from a lightweight retro car.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/b-rwd-rally-slow-launch-balanced',
      },
    ],
    checklist: [
      'Keep power modest until braking and exit behavior are repeatable.',
      'Use short routes to expose understeer and slow launch quickly.',
      'Save one safe weekly version before experimenting with swaps.',
    ],
  },
  a: {
    id: 'a',
    pathname: '/games/forza-horizon-6/best-a-class-cars',
    title: 'Best A Class Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best A class cars candidate list for road racing, street routes, rally, drift practice, and weekly events.',
    eyebrow: 'A class candidates',
    h1: 'Best A class cars in Forza Horizon 6',
    intro:
      'A class is the safest evergreen class for early FH6 content because it is fast enough to reveal tuning problems but not so extreme that every exit becomes a traction fight.',
    classGoal: 'Fast but still repeatable',
    bestFor: 'road racing, street, rally, starter meta, weekly championships',
    picks: [
      {
        car: '2020 Toyota GR Supra',
        role: 'Street and drift candidate',
        status: 'candidate',
        why: 'High search demand and multiple build paths make it a priority car for A class road, street, and drift pages.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
      },
      {
        car: '2005 Honda NSX-R',
        role: 'Road racing balance',
        status: 'candidate',
        why: 'A handling-first candidate that should help create reliable road racing tune notes and class comparisons.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/a-awd-road-understeer-stable',
      },
      {
        car: '1997 Mazda RX-7',
        role: 'Street and drift split',
        status: 'candidate',
        why: 'Useful for street, drift, and Japan-themed content clusters when road and drift baselines stay separate.',
        tuneLink:
          '/games/forza-horizon-6/guides/japan-drift-setup',
      },
    ],
    checklist: [
      'Test one road route and one street route before naming a car best.',
      'Keep road, street, rally, and drift builds separate.',
      'Use A class before pushing a car into S1 if the route is technical.',
    ],
  },
  s1: {
    id: 's1',
    pathname: '/games/forza-horizon-6/best-s1-class-cars',
    title: 'Best S1 Class Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best S1 class cars candidate list for fast road racing, AWD builds, high-speed routes, and event prep.',
    eyebrow: 'S1 class candidates',
    h1: 'Best S1 class cars in Forza Horizon 6',
    intro:
      'S1 should feel like a faster version of a clean A class build. If the car becomes nervous, fix exits, braking, and gear spacing before chasing S2 power.',
    classGoal: 'High pace without losing control',
    bestFor: 'fast road routes, mixed city roads, speed zones, weekly events',
    picks: [
      {
        car: '2025 Toyota GR GT Prototype',
        role: 'Fast road candidate',
        status: 'candidate',
        why: 'High-end Japan-focused road candidate with room for aero, gearing, and S1 stability testing.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/s1-awd-road-understeer-balanced',
      },
      {
        car: '2005 Honda NSX-R',
        role: 'Balanced S1 road',
        status: 'candidate',
        why: 'Should be useful for comparing A and S1 setup direction on technical Japan road routes.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/s1-rwd-road-oversteer-balanced',
      },
      {
        car: '1998 Toyota Supra RZ',
        role: 'Street and top-speed testing',
        status: 'needs-testing',
        why: 'Likely high-demand car where separate road, street, drag, and drift paths can all interlink.',
        tuneLink:
          '/games/forza-horizon-6/guides/fix-poor-top-speed',
      },
    ],
    checklist: [
      'Confirm the car still brakes predictably at higher speed.',
      'Compare lap consistency over three runs, not one fastest pass.',
      'Use S1 for pace before assuming S2 will be faster.',
    ],
  },
  s2: {
    id: 's2',
    pathname: '/games/forza-horizon-6/best-s2-class-cars',
    title: 'Best S2 Class Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best S2 class cars candidate list for high-speed road routes, top-speed builds, and advanced tuning.',
    eyebrow: 'S2 class candidates',
    h1: 'Best S2 class cars in Forza Horizon 6',
    intro:
      'S2 is where bad tuning gets expensive. Use S2 only when the route rewards top speed or high aero grip, then keep a stable S1 comparison build nearby.',
    classGoal: 'Top-end payoff with control',
    bestFor: 'high-speed road, speed traps, advanced builds, top-speed testing',
    picks: [
      {
        car: '2025 Toyota GR GT Prototype',
        role: 'S2 road and top-speed candidate',
        status: 'candidate',
        why: 'A natural high-class candidate for testing whether S2 power creates real lap time or only harder handling.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/s2-awd-road-poor-top-speed-aggressive',
      },
      {
        car: '1998 Toyota Supra RZ',
        role: 'Drag and speed candidate',
        status: 'needs-testing',
        why: 'A likely search-heavy car for drag, speed trap, and street tuning once real route notes are added.',
        tuneLink:
          '/tools/forza-horizon-6-tune-presets/s2-awd-drag-wheelspin-aggressive',
      },
      {
        car: '2020 Toyota GR Supra',
        role: 'High-power street experiment',
        status: 'needs-testing',
        why: 'Useful as a comparison point only if A and S1 versions are already stable.',
        tuneLink:
          '/games/forza-horizon-6/guides/fix-wheelspin',
      },
    ],
    checklist: [
      'Retest launch, braking, and top speed after every major power change.',
      'Keep aero changes tied to route sections, not just speed numbers.',
      'Compare against a stable S1 build before calling the S2 version better.',
    ],
  },
};

export function getForzaHorizon6ClassCarGuide(
  id: ForzaHorizon6ClassCarGuide['id']
) {
  return forzaHorizon6ClassCarGuides[id];
}
