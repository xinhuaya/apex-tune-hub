export type ForzaHorizon6Car = {
  slug: string;
  make: string;
  model: string;
  year: string;
  type: string;
  stockClass: string;
  stockPi: number;
  country: string;
  collection: string;
  acquisition: string;
  bestUse: string;
  tuneDirection: string;
  testingStatus: 'candidate' | 'needs-testing' | 'tested';
  sourceUrl: string;
};

const officialCarListSource = 'https://forza.net/fh6cars?pubDate=20260123';

export const forzaHorizon6Cars: ForzaHorizon6Car[] = [
  {
    slug: '2025-toyota-gr-gt-prototype',
    make: 'Toyota',
    model: 'GR GT Prototype',
    year: '2025',
    type: 'Track Toys',
    stockClass: 'S1',
    stockPi: 771,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Road racing candidate',
    tuneDirection:
      'Start with a stable S1 road tune, then adjust aero, alignment, and gearing after testing.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '2020-toyota-gr-supra',
    make: 'Toyota',
    model: 'GR Supra',
    year: '2020',
    type: 'Modern Sports Cars',
    stockClass: 'A',
    stockPi: 616,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Street and drift candidate',
    tuneDirection:
      'Use the drift calculator for RWD builds or a balanced A-class road baseline.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '2022-toyota-gr86',
    make: 'Toyota',
    model: 'GR86',
    year: '2022',
    type: 'Modern Sports Cars',
    stockClass: 'B',
    stockPi: 556,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Beginner handling and drift candidate',
    tuneDirection:
      'Keep the car light and responsive. Test B or A class before adding too much power.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '1985-toyota-sprinter-trueno-gt-apex',
    make: 'Toyota',
    model: 'Sprinter Trueno GT Apex',
    year: '1985',
    type: 'Retro Sports Cars',
    stockClass: 'D',
    stockPi: 376,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Touge and lightweight drift candidate',
    tuneDirection:
      'Build gradually into C, B, or A class. Preserve rotation before chasing power.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '1998-toyota-supra-rz',
    make: 'Toyota',
    model: 'Supra RZ',
    year: '1998',
    type: 'Retro Sports Cars',
    stockClass: 'B',
    stockPi: 529,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Street, drag, and drift candidate',
    tuneDirection:
      'Decide on drag, drift, or street before upgrades. Gearing direction matters early.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '1992-honda-nsx-r',
    make: 'Honda',
    model: 'NSX-R',
    year: '1992',
    type: 'Retro Sports Cars',
    stockClass: 'B',
    stockPi: 529,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Handling and road racing candidate',
    tuneDirection:
      'Start with a balanced B or A class road tune and test mid-corner stability.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '2005-honda-nsx-r',
    make: 'Honda',
    model: 'NSX-R',
    year: '2005',
    type: 'Retro Sports Cars',
    stockClass: 'B',
    stockPi: 570,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'A class road candidate',
    tuneDirection:
      'Tune for clean rotation and braking confidence before pushing into higher classes.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '2003-honda-s2000',
    make: 'Honda',
    model: 'S2000',
    year: '2003',
    type: 'Retro Sports Cars',
    stockClass: 'B',
    stockPi: 503,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Touge, street, and drift candidate',
    tuneDirection:
      'Keep gearing responsive and avoid overpowering the chassis before testing.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '1992-mazda-rx-7',
    make: 'Mazda',
    model: 'RX-7',
    year: '1992',
    type: 'Retro Sports Cars',
    stockClass: 'B',
    stockPi: 511,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Drift and street candidate',
    tuneDirection:
      'Test a drift setup and a street setup separately. Do not mix both goals in one baseline.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
  {
    slug: '1997-mazda-rx-7',
    make: 'Mazda',
    model: 'RX-7',
    year: '1997',
    type: 'Retro Sports Cars',
    stockClass: 'B',
    stockPi: 545,
    country: 'Japan',
    collection: 'Autoshow',
    acquisition: 'Autoshow or Wheelspin',
    bestUse: 'Street and drift candidate',
    tuneDirection:
      'Use controlled power upgrades first, then refine differential and gearing.',
    testingStatus: 'candidate',
    sourceUrl: officialCarListSource,
  },
];

export function getForzaHorizon6Car(slug: string) {
  return forzaHorizon6Cars.find((car) => car.slug === slug);
}

export function getForzaHorizon6CarTitle(car: ForzaHorizon6Car) {
  return `${car.year} ${car.make} ${car.model}`;
}
