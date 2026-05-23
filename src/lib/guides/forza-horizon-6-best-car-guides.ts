export type ForzaHorizon6BestCarGuide = {
  id: 'drift' | 'rally' | 'road' | 'jdm';
  pathname: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  classFocus: string;
  updateCadence: string;
  picks: {
    car: string;
    classBand: string;
    status: 'candidate' | 'needs-testing';
    why: string;
    tuneDirection: string;
    href?: string;
  }[];
  checkpoints: string[];
};

export const forzaHorizon6BestCarGuides: Record<
  ForzaHorizon6BestCarGuide['id'],
  ForzaHorizon6BestCarGuide
> = {
  drift: {
    id: 'drift',
    pathname: '/games/forza-horizon-6/best-drift-cars',
    title: 'Best Drift Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best drift cars candidate list with class targets, tune direction, and testing checklist.',
    eyebrow: 'Drift candidate list',
    h1: 'Best drift cars in Forza Horizon 6',
    intro:
      'A drift page should not pretend to know the launch meta before testing. This starter list focuses on cars with likely angle control, predictable power delivery, and clear tune paths.',
    classFocus: 'A / S1',
    updateCadence: 'Update after drift zone and event testing',
    picks: [
      {
        car: '2020 Toyota GR Supra',
        classBand: 'A / S1',
        status: 'candidate',
        why: 'Modern FR layout and upgrade headroom make it a natural first drift test car.',
        tuneDirection:
          'Start RWD, add drift suspension, soften rear rebound, and tune differential lock for controllable transitions.',
        href: '/games/forza-horizon-6/cars/2020-toyota-gr-supra',
      },
      {
        car: '1992 Mazda RX-7',
        classBand: 'A / S1',
        status: 'candidate',
        why: 'A strong lightweight drift candidate that should work for both technical routes and open zones.',
        tuneDirection:
          'Build one clean drift setup and one street setup separately so the page can compare behavior.',
        href: '/games/forza-horizon-6/cars/1992-mazda-rx-7',
      },
      {
        car: '1985 Toyota Sprinter Trueno GT Apex',
        classBand: 'B / A',
        status: 'needs-testing',
        why: 'Lightweight touge style candidate for lower-speed angle control and beginner-friendly testing.',
        tuneDirection:
          'Avoid overpowering it early. Test C, B, then A class to find the useful ceiling.',
        href: '/games/forza-horizon-6/cars/1985-toyota-sprinter-trueno-gt-apex',
      },
    ],
    checkpoints: [
      'Can hold angle without constant correction.',
      'Recoverable after over-rotation.',
      'Gearing stays usable in common drift zones.',
      'Works on controller before tuning for wheel users.',
    ],
  },
  rally: {
    id: 'rally',
    pathname: '/games/forza-horizon-6/best-rally-cars',
    title: 'Best Rally Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best rally cars planning page for dirt, mixed surface, touge, and off-road tune testing.',
    eyebrow: 'Rally and touge candidates',
    h1: 'Best rally cars in Forza Horizon 6',
    intro:
      'Rally recommendations need more than raw speed. This page starts with cars to test for rotation, suspension travel, mixed-surface braking, and gear spacing.',
    classFocus: 'B / A / S1',
    updateCadence: 'Update after dirt, mixed, and mountain route testing',
    picks: [
      {
        car: '2022 Toyota GR86',
        classBand: 'B / A',
        status: 'candidate',
        why: 'A controlled modern sports car that can become a useful baseline for lower-class mixed routes.',
        tuneDirection:
          'Keep it light, avoid excessive power, and compare road suspension against rally suspension.',
        href: '/games/forza-horizon-6/cars/2022-toyota-gr86',
      },
      {
        car: '1992 Honda NSX-R',
        classBand: 'A',
        status: 'needs-testing',
        why: 'A handling-first candidate for paved mountain sections and mixed routes where stability matters.',
        tuneDirection:
          'Test braking confidence and mid-corner balance before pushing the car into higher classes.',
        href: '/games/forza-horizon-6/cars/1992-honda-nsx-r',
      },
      {
        car: '2003 Honda S2000',
        classBand: 'B / A',
        status: 'candidate',
        why: 'A responsive chassis candidate for technical routes where momentum beats top speed.',
        tuneDirection:
          'Use shorter gearing and measured tire upgrades, then compare controller stability.',
        href: '/games/forza-horizon-6/cars/2003-honda-s2000',
      },
    ],
    checkpoints: [
      'Brakes cleanly on mixed grip.',
      'Does not bottom out on rough route sections.',
      'Turns in without snapping on throttle.',
      'Gear spacing fits tighter Japan-style roads.',
    ],
  },
  road: {
    id: 'road',
    pathname: '/games/forza-horizon-6/best-road-racing-cars',
    title: 'Best Road Racing Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best road racing cars candidate list with A, S1, and S2 tune testing notes.',
    eyebrow: 'Road racing candidates',
    h1: 'Best road racing cars in Forza Horizon 6',
    intro:
      'Road racing pages should become the main evergreen traffic layer. The first version ranks candidates by tune direction and testing need, not fake leaderboard certainty.',
    classFocus: 'A / S1 / S2',
    updateCadence: 'Update after route timing and rivals-style testing',
    picks: [
      {
        car: '2025 Toyota GR GT Prototype',
        classBand: 'S1 / S2',
        status: 'candidate',
        why: 'A high-end Japan-focused road candidate with room for aero, gearing, and grip testing.',
        tuneDirection:
          'Start with S1 stability, then test whether S2 power creates useful lap time or just harder handling.',
        href: '/games/forza-horizon-6/cars/2025-toyota-gr-gt-prototype',
      },
      {
        car: '2005 Honda NSX-R',
        classBand: 'A / S1',
        status: 'candidate',
        why: 'A balanced handling candidate that should help build reliable A-class and S1 setup templates.',
        tuneDirection:
          'Prioritize braking, front-end response, and clean corner exits before power upgrades.',
        href: '/games/forza-horizon-6/cars/2005-honda-nsx-r',
      },
      {
        car: '1998 Toyota Supra RZ',
        classBand: 'A / S1',
        status: 'needs-testing',
        why: 'A likely high-demand car where separate street, road, drag, and drift pages can interlink.',
        tuneDirection:
          'Make a dedicated road build first, then compare against drag and drift builds later.',
        href: '/games/forza-horizon-6/cars/1998-toyota-supra-rz',
      },
    ],
    checkpoints: [
      'Stable under braking from high speed.',
      'Does not wash wide in medium-speed corners.',
      'Final drive fits both short and fast road routes.',
      'Tune can be explained clearly for repeat visitors.',
    ],
  },
  jdm: {
    id: 'jdm',
    pathname: '/games/forza-horizon-6/best-jdm-cars',
    title: 'Best JDM Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best JDM cars hub for Toyota, Honda, Mazda, road racing, drift, touge, and starter tune paths.',
    eyebrow: 'Japan car hub',
    h1: 'Best JDM cars in Forza Horizon 6',
    intro:
      'Because Forza Horizon 6 starts in Japan, JDM-focused pages can be a long-term content lane. This hub links car database pages to road, drift, touge, and weekly testing.',
    classFocus: 'B / A / S1',
    updateCadence: 'Update as the Japan car database expands',
    picks: [
      {
        car: '2020 Toyota GR Supra',
        classBand: 'A / S1',
        status: 'candidate',
        why: 'High search demand, familiar name, and multiple tune angles make it a priority page.',
        tuneDirection:
          'Create separate road, street, and drift baselines so internal links stay useful.',
        href: '/games/forza-horizon-6/cars/2020-toyota-gr-supra',
      },
      {
        car: '1997 Mazda RX-7',
        classBand: 'A / S1',
        status: 'candidate',
        why: 'Useful for drift, street, and Japan-themed content clusters.',
        tuneDirection:
          'Keep power controlled first, then tune differential and gearing around the route.',
        href: '/games/forza-horizon-6/cars/1997-mazda-rx-7',
      },
      {
        car: '2003 Honda S2000',
        classBand: 'B / A',
        status: 'candidate',
        why: 'A strong lower-class handling candidate for beginner and touge pages.',
        tuneDirection:
          'Build a responsive A-class setup before chasing high-power swaps.',
        href: '/games/forza-horizon-6/cars/2003-honda-s2000',
      },
    ],
    checkpoints: [
      'Each car links to a database page.',
      'Each high-demand car gets one focused tune page later.',
      'Recommendations are separated by use case.',
      'Testing status stays visible until real data is added.',
    ],
  },
};

export function getForzaHorizon6BestCarGuide(
  id: ForzaHorizon6BestCarGuide['id']
) {
  return forzaHorizon6BestCarGuides[id];
}
