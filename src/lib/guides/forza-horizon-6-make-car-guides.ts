import {
  forzaHorizon6Cars,
  getForzaHorizon6CarTitle,
} from '@/lib/cars/forza-horizon-6-cars';

export type ForzaHorizon6MakeCarGuide = {
  id: 'toyota' | 'honda' | 'mazda';
  make: string;
  pathname: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  bestFor: string;
  testingAngle: string;
  tuneLinks: {
    label: string;
    href: string;
    note: string;
  }[];
};

export const forzaHorizon6MakeCarGuides: Record<
  ForzaHorizon6MakeCarGuide['id'],
  ForzaHorizon6MakeCarGuide
> = {
  toyota: {
    id: 'toyota',
    make: 'Toyota',
    pathname: '/games/forza-horizon-6/best-toyota-cars',
    title: 'Best Toyota Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best Toyota cars hub for GR Supra, GR86, Sprinter Trueno, Supra RZ, GR GT Prototype, road, drift, drag, and starter builds.',
    eyebrow: 'Toyota car hub',
    h1: 'Best Toyota cars in Forza Horizon 6',
    intro:
      'Toyota is the strongest first manufacturer cluster for Apex Tune Hub because it covers starter cars, JDM demand, drift routes, road racing, drag testing, and high-class prototype builds.',
    bestFor: 'starter builds, JDM searches, drift, street, road, drag',
    testingAngle:
      'Keep Supra, GR86, Trueno, and GR GT Prototype pages separated by role so road, drift, and drag advice does not blur together.',
    tuneLinks: [
      {
        label: 'A class Supra wheelspin preset',
        href: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
        note: 'Good first link for street and drift-adjacent Toyota builds.',
      },
      {
        label: 'B class starter and launch preset',
        href: '/tools/forza-horizon-6-tune-presets/b-rwd-rally-slow-launch-balanced',
        note: 'Useful for GR86 and Trueno learning builds.',
      },
      {
        label: 'S2 top speed preset',
        href: '/tools/forza-horizon-6-tune-presets/s2-awd-road-poor-top-speed-aggressive',
        note: 'Use for GR GT Prototype and high-class road testing.',
      },
    ],
  },
  honda: {
    id: 'honda',
    make: 'Honda',
    pathname: '/games/forza-horizon-6/best-honda-cars',
    title: 'Best Honda Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best Honda cars hub for NSX-R, S2000, road racing, touge, A class, S1 class, and handling-focused tune paths.',
    eyebrow: 'Honda car hub',
    h1: 'Best Honda cars in Forza Horizon 6',
    intro:
      'Honda pages should focus on clean handling and route learning. NSX-R and S2000 candidates are useful for A class, S1 road, touge-style routes, and braking stability notes.',
    bestFor: 'handling, A class road, S1 testing, touge, lower-power learning',
    testingAngle:
      'Prioritize braking confidence, mid-corner stability, and road-racing comparison notes before moving Honda builds into aggressive power upgrades.',
    tuneLinks: [
      {
        label: 'S1 RWD road oversteer preset',
        href: '/tools/forza-horizon-6-tune-presets/s1-rwd-road-oversteer-balanced',
        note: 'Good for high-class road Honda testing when the rear feels nervous.',
      },
      {
        label: 'A class road understeer preset',
        href: '/tools/forza-horizon-6-tune-presets/a-awd-road-understeer-stable',
        note: 'Use when a Honda build needs more front response and repeatable apexes.',
      },
      {
        label: 'Road racing tune guide',
        href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
        note: 'Good evergreen route for Honda road and touge internal links.',
      },
    ],
  },
  mazda: {
    id: 'mazda',
    make: 'Mazda',
    pathname: '/games/forza-horizon-6/best-mazda-cars',
    title: 'Best Mazda Cars in Forza Horizon 6 - Apex Tune Hub',
    description:
      'Forza Horizon 6 best Mazda cars hub for RX-7, drift, street, A class, S1 class, rotary builds, and setup direction.',
    eyebrow: 'Mazda car hub',
    h1: 'Best Mazda cars in Forza Horizon 6',
    intro:
      'Mazda content should become a drift and street cluster. RX-7 variants are easy to connect to drift setup, wheelspin fixes, street builds, and JDM search demand.',
    bestFor: 'drift, street, JDM, A class, S1 experiments',
    testingAngle:
      'Build drift and street versions separately so rotary power, gearing, and differential notes stay clear.',
    tuneLinks: [
      {
        label: 'Japan drift setup guide',
        href: '/games/forza-horizon-6/guides/japan-drift-setup',
        note: 'Primary evergreen guide for RX-7 drift build direction.',
      },
      {
        label: 'A class street wheelspin preset',
        href: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
        note: 'Use when RX-7 street builds waste grip on corner exit.',
      },
      {
        label: 'Fix wheelspin guide',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
        note: 'Good support page for high-power Mazda tuning notes.',
      },
    ],
  },
};

export function getForzaHorizon6MakeCarGuide(
  id: ForzaHorizon6MakeCarGuide['id']
) {
  return forzaHorizon6MakeCarGuides[id];
}

export function getCarsForMake(make: string) {
  return forzaHorizon6Cars
    .filter((car) => car.make === make)
    .map((car) => ({
      ...car,
      title: getForzaHorizon6CarTitle(car),
      href: `/games/forza-horizon-6/cars/${car.slug}`,
    }));
}
