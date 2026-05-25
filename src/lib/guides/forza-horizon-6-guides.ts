export type ForzaHorizon6Guide = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  intro: string;
  primaryCta: {
    label: string;
    href: string;
  };
  relatedLinks: {
    label: string;
    href: string;
  }[];
  sections: {
    title: string;
    body: string;
    bullets: string[];
  }[];
};

export const forzaHorizon6Guides: ForzaHorizon6Guide[] = [
  {
    slug: 'japan-launch-tuning-plan',
    title: 'Forza Horizon 6 Japan Launch Tuning Plan - Apex Tune Hub',
    h1: 'Forza Horizon 6 Japan launch tuning plan',
    description:
      'A practical Forza Horizon 6 launch tuning plan for Japan roads, mountain passes, city routes, rain, dirt, and early car choices.',
    eyebrow: 'Japan launch plan',
    intro:
      'Forza Horizon 6 is live in Japan, which means one setup will not feel good everywhere. Build separate road, mountain, dirt, and drift baselines before chasing leaderboard-style extremes.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=A&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Best JDM cars',
        href: '/games/forza-horizon-6/best-jdm-cars',
      },
      {
        label: 'Drift tune calculator',
        href: '/tools/forza-horizon-6-drift-tune-calculator',
      },
      {
        label: 'Weekly playlist',
        href: '/games/forza-horizon-6/weekly-playlist',
      },
    ],
    sections: [
      {
        title: 'Build four launch baselines',
        body: 'Japan rewards different car behavior across city streets, mountain passes, wet routes, and mixed-surface events. Keep one clean baseline per use case instead of forcing one universal tune.',
        bullets: [
          'Road baseline: stable braking, quick turn-in, and short gearing for traffic-heavy routes.',
          'Mountain baseline: predictable lift-off behavior and enough rotation for linked corners.',
          'Dirt baseline: softer suspension, calmer throttle, and gearing that recovers after bumps.',
        ],
      },
      {
        title: 'Start in A or S1 class',
        body: 'Early testing is easier when the car is fast enough to expose handling problems but not so powerful that every corner becomes a traction problem.',
        bullets: [
          'Use A class to learn a new route and spot understeer or braking instability.',
          'Move to S1 after the car repeats clean exits three runs in a row.',
          'Save S2 builds for routes with enough straight-line payoff.',
        ],
      },
      {
        title: 'Tune for weather and surface changes',
        body: 'A tune that feels sharp in dry city sections can become nervous in rain or on rougher roads. Keep the first setup forgiving enough for Festival Playlist events.',
        bullets: [
          'If rain makes exits messy, reduce aggressive differential and gearing choices first.',
          'If the car bounces on rough roads, soften the suspension before adding aero.',
          'If weekly events feel inconsistent, choose a safer launch tune over maximum pace.',
        ],
      },
    ],
  },
  {
    slug: 'best-starter-cars',
    title: 'Best Starter Cars in Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best starter cars in Forza Horizon 6',
    description:
      'How to choose the best starter cars in Forza Horizon 6 for road racing, drifting, rally, and early weekly events without wasting credits.',
    eyebrow: 'Starter cars',
    intro:
      'The best first car is the one that teaches the route, survives mistakes, and upgrades cleanly. Pick starter builds by role instead of buying the loudest S2 car on day one.',
    primaryCta: {
      label: 'Browse Best Cars',
      href: '/games/forza-horizon-6/best-cars',
    },
    relatedLinks: [
      {
        label: 'Car database',
        href: '/games/forza-horizon-6/cars',
      },
      {
        label: 'Best road racing cars',
        href: '/games/forza-horizon-6/best-road-racing-cars',
      },
      {
        label: 'Best rally cars',
        href: '/games/forza-horizon-6/best-rally-cars',
      },
    ],
    sections: [
      {
        title: 'Pick one car per job',
        body: 'Early credits go further when each car has a clear use. A road car, a dirt car, and a drift car will help more than three similar high-power street builds.',
        bullets: [
          'Road starter: predictable braking, stable turn-in, and enough grip for city routes.',
          'Dirt starter: forgiving suspension, AWD traction, and clean recovery after jumps.',
          'Drift starter: controllable power delivery before extreme angle tuning.',
        ],
      },
      {
        title: 'Avoid overbuilding too early',
        body: 'A starter car should help you learn the map. If an upgrade makes every exit messy, the car is not faster for real events yet.',
        bullets: [
          'Keep early road cars in A or S1 until the route feels repeatable.',
          'Add tires, weight, and handling before maxing horsepower.',
          'Save one stock-ish version so you can compare upgrades honestly.',
        ],
      },
      {
        title: 'Prioritize weekly usefulness',
        body: 'The best starter garage covers playlist restrictions. Build cars that can handle road, dirt, drift zones, and speed traps without needing a full rebuild every week.',
        bullets: [
          'Keep one flexible AWD tune for mixed events.',
          'Keep one RWD drift tune for angle and recovery practice.',
          'Keep one clean road tune for seasonal championships.',
        ],
      },
    ],
  },
  {
    slug: 'japan-drift-setup',
    title: 'Forza Horizon 6 Japan Drift Setup Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 Japan drift setup guide',
    description:
      'A Forza Horizon 6 drift setup guide for Japan mountain roads, city transitions, throttle control, gearing, and beginner-friendly drift baselines.',
    eyebrow: 'Drift setup',
    intro:
      'Japan drift routes reward rhythm more than raw power. Build a setup that initiates cleanly, holds angle without panic corrections, and recovers before the next transition.',
    primaryCta: {
      label: 'Open Drift Calculator',
      href: '/tools/forza-horizon-6-drift-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Best drift cars',
        href: '/games/forza-horizon-6/best-drift-cars',
      },
      {
        label: 'JDM cars',
        href: '/games/forza-horizon-6/best-jdm-cars',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
    ],
    sections: [
      {
        title: 'Choose control before angle',
        body: 'Huge angle looks good in clips but can make linked corners harder. The first drift tune should recover fast enough to catch the next corner.',
        bullets: [
          'Use moderate power until throttle control feels natural.',
          'Keep steering response quick without making the rear snap instantly.',
          'Test linked corners instead of one isolated slide.',
        ],
      },
      {
        title: 'Gear for the drift zone',
        body: 'A drift car that keeps falling out of power will feel inconsistent. Set the useful gear for the section, not for top speed.',
        bullets: [
          'Shorten gearing if the car bogs mid-corner.',
          'Lengthen gearing if the tires instantly light up and kill direction.',
          'Use one main drift gear for repeatable scoring runs.',
        ],
      },
      {
        title: 'Separate mountain and city tunes',
        body: 'Mountain roads need flow and recovery. City drift routes often need sharper transitions and lower-speed control.',
        bullets: [
          'Mountain setup: smoother transitions and calmer throttle response.',
          'City setup: quicker initiation and shorter gearing for tight sections.',
          'Save both presets so weekly drift zones are faster to prepare.',
        ],
      },
    ],
  },
  {
    slug: 'a-s1-road-racing-tune',
    title: 'Forza Horizon 6 A and S1 Road Racing Tune Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 A and S1 road racing tune guide',
    description:
      'A Forza Horizon 6 road racing tune guide for A-class and S1-class builds, covering grip, braking, gearing, understeer, and route testing.',
    eyebrow: 'Road racing',
    intro:
      'A and S1 are the workhorse classes for learning Japan routes. A clean tune in these classes is easier to repeat, easier to upgrade, and more useful for weekly racing than a nervous max-power build.',
    primaryCta: {
      label: 'Open Road Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Best road racing cars',
        href: '/games/forza-horizon-6/best-road-racing-cars',
      },
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
    ],
    sections: [
      {
        title: 'Build A class for learning',
        body: 'A-class road tunes make handling problems easier to see. Start here when learning a new route or testing a new car.',
        bullets: [
          'Prioritize tires, brakes, weight, and balance before big power.',
          'Use short technical routes to spot understeer and braking instability.',
          'Keep gearing tight enough for slow exits and traffic-heavy roads.',
        ],
      },
      {
        title: 'Move to S1 for pace',
        body: 'S1 builds should feel like stronger A-class cars, not different cars entirely. Add speed only after corner exits are repeatable.',
        bullets: [
          'If S1 creates wheelspin, calm differential and lower gears first.',
          'If S1 pushes wide, improve rotation before adding aero.',
          'If the car feels nervous, reduce aggressive alignment changes.',
        ],
      },
      {
        title: 'Test on mixed road sections',
        body: 'Japan road events can combine city corners, fast sweepers, elevation, and rain. A good road tune survives all four without becoming dramatic.',
        bullets: [
          'Run one dry route and one wet or rough route before saving a preset.',
          'Compare consistency over three runs, not only the fastest lap.',
          'Keep separate safe and aggressive versions for weekly events.',
        ],
      },
    ],
  },
  {
    slug: 'beginner-tuning-guide',
    title: 'Forza Horizon 6 Beginner Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 beginner tuning guide',
    description:
      'A practical beginner tuning guide for Forza Horizon 6 covering baseline setup order, testing, and common mistakes.',
    eyebrow: 'Beginner tuning',
    intro:
      'The safest first tune is not the most extreme tune. Start with one handling problem, make one category change, test it on the same route, and only then move to the next setting.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Tune presets',
        href: '/tools/forza-horizon-6-tune-presets',
      },
      {
        label: 'Car database',
        href: '/games/forza-horizon-6/cars',
      },
    ],
    sections: [
      {
        title: 'Start with the symptom',
        body: 'Do not tune every slider because the car feels bad. Name the problem first: understeer, oversteer, wheelspin, slow launch, unstable braking, or poor top speed.',
        bullets: [
          'Use the same route for every test.',
          'Write down class, drivetrain, race type, and assists.',
          'Change one setting category at a time.',
        ],
      },
      {
        title: 'Tune in a repeatable order',
        body: 'A simple order keeps the setup from becoming confusing: tires, alignment, anti-roll bars, suspension, differential, then gearing.',
        bullets: [
          'Fix grip and balance before chasing power.',
          'Use differential and gearing after the car already turns and brakes well.',
          'Save a preset before making aggressive changes.',
        ],
      },
      {
        title: 'Know when to stop',
        body: 'A good baseline is easy to repeat. If the third run is harder than the first, the tune is probably moving away from the driver, not toward the car.',
        bullets: [
          'Compare lap feel and lap time together.',
          'Keep stable tunes for weekly events.',
          'Use aggressive tunes only when the route rewards them.',
        ],
      },
    ],
  },
  {
    slug: 'fix-understeer',
    title: 'How to Fix Understeer in Forza Horizon 6 - Apex Tune Hub',
    h1: 'How to fix understeer in Forza Horizon 6',
    description:
      'Forza Horizon 6 understeer tuning guide for cars that push wide, miss apexes, or refuse to rotate.',
    eyebrow: 'Handling fix',
    intro:
      'Understeer means the car wants to go wider than your steering input. Fix front bite and rotation carefully before adding more power or aero.',
    primaryCta: {
      label: 'Open understeer preset',
      href: '/tools/forza-horizon-6-tune-presets/s1-awd-road-understeer-balanced',
    },
    relatedLinks: [
      {
        label: 'Road racing cars',
        href: '/games/forza-horizon-6/best-road-racing-cars',
      },
      {
        label: 'Tune calculator',
        href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
      },
    ],
    sections: [
      {
        title: 'Separate entry and exit understeer',
        body: 'Entry understeer happens before throttle. Exit understeer appears when power pulls the car wide. They can need different fixes.',
        bullets: [
          'For entry push, test alignment and front-end response first.',
          'For exit push, check AWD balance and differential behavior.',
          'Do not hide understeer by braking too early in every test.',
        ],
      },
      {
        title: 'Add front bite gradually',
        body: 'Small alignment and balance changes are easier to test than one dramatic setup shift. Make the car point toward the apex without making the rear nervous.',
        bullets: [
          'Use a medium-speed corner as the main test.',
          'Compare one clean lap before and after each change.',
          'Back off if the car starts snapping on lift-off.',
        ],
      },
      {
        title: 'Check gearing and power delivery',
        body: 'Sometimes the setup turns fine until throttle arrives. In that case, differential and gear spacing may be more important than more front grip.',
        bullets: [
          'Exit the same slow corner three times.',
          'Watch if AWD traction pulls the car straight.',
          'Tune for repeatable exits, not only sharper turn-in.',
        ],
      },
    ],
  },
  {
    slug: 'fix-oversteer',
    title: 'How to Fix Oversteer in Forza Horizon 6 - Apex Tune Hub',
    h1: 'How to fix oversteer in Forza Horizon 6',
    description:
      'Forza Horizon 6 oversteer tuning guide for twitchy RWD, rally, drift-adjacent, and street builds.',
    eyebrow: 'Handling fix',
    intro:
      'Oversteer can be useful, but only when it is predictable. The goal is not to remove rotation; it is to make the rear catchable.',
    primaryCta: {
      label: 'Open rally oversteer preset',
      href: '/tools/forza-horizon-6-tune-presets/a-rwd-rally-oversteer-aggressive',
    },
    relatedLinks: [
      {
        label: 'Best rally cars',
        href: '/games/forza-horizon-6/best-rally-cars',
      },
      {
        label: 'Drift tune calculator',
        href: '/tools/forza-horizon-6-drift-tune-calculator',
      },
    ],
    sections: [
      {
        title: 'Find the trigger',
        body: 'Oversteer can come from braking, lifting, throttle, bumps, or transitions. Tune the trigger rather than blaming the whole car.',
        bullets: [
          'Brake in a straight line, then test light trail braking.',
          'Try half throttle and full throttle on the same exit.',
          'Use one rough section to test suspension behavior.',
        ],
      },
      {
        title: 'Calm the rear without killing rotation',
        body: 'A car that never rotates is slow and boring. Reduce the sharpness just enough that the driver can repeat the corner.',
        bullets: [
          'Avoid making every setting more stable at once.',
          'Keep enough front response for tight roads.',
          'Use differential changes after basic balance feels sane.',
        ],
      },
      {
        title: 'Use class and power wisely',
        body: 'Many RWD cars become worse when pushed too high too early. A clean A-class setup can be more useful than a twitchy S1 build.',
        bullets: [
          'Test lower class first on technical routes.',
          'Add power only after exits are repeatable.',
          'Save separate drift, rally, and road versions.',
        ],
      },
    ],
  },
  {
    slug: 'gear-ratio-guide',
    title: 'Forza Horizon 6 Gear Ratio Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 gear ratio guide',
    description:
      'A Forza Horizon 6 gearing guide for final drive, launch, top speed, limiter, and bogging after shifts.',
    eyebrow: 'Gearing guide',
    intro:
      'Good gearing makes the engine useful on the target route. Bad gearing can make a strong car feel slow, nervous, or out of breath.',
    primaryCta: {
      label: 'Open Gear Ratio Calculator',
      href: '/tools/forza-horizon-6-gear-ratio-calculator',
    },
    relatedLinks: [
      {
        label: 'Top speed preset',
        href: '/tools/forza-horizon-6-tune-presets/s2-awd-road-poor-top-speed-aggressive',
      },
      {
        label: 'Best road racing cars',
        href: '/games/forza-horizon-6/best-road-racing-cars',
      },
    ],
    sections: [
      {
        title: 'Use the route, not the highway',
        body: 'A tune that wins a speed trap may still lose the race. Set top gear for the longest useful straight in the actual event.',
        bullets: [
          'If the car hits the limiter early, lengthen final drive.',
          'If it never reaches top gear, shorten upper gears.',
          'Compare lap time after speed changes.',
        ],
      },
      {
        title: 'Fix launch before top speed',
        body: 'If first gear spins or bogs, the rest of the gearbox cannot show its value. Start with launch and first-to-second behavior.',
        bullets: [
          'Launch three times from the same point.',
          'Lengthen first gear if wheelspin dominates.',
          'Shorten lower gears if the car feels asleep after hairpins.',
        ],
      },
      {
        title: 'Keep shifts in the power band',
        body: 'Bogging after a shift usually means the gear gap is too wide around the part of the route that matters most.',
        bullets: [
          'Watch RPM drop after each shift.',
          'Close spacing for technical roads.',
          'Leave taller gears for fast routes and high-power builds.',
        ],
      },
    ],
  },
  {
    slug: 'wheel-settings-guide',
    title: 'Forza Horizon 6 Wheel Settings Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 wheel settings guide',
    description:
      'Forza Horizon 6 wheel settings guide for force feedback, rotation, stability, and repeatable testing.',
    eyebrow: 'Wheel settings',
    intro:
      'Wheel settings should make the car readable, not heavier for the sake of feeling powerful. Start comfortable, then add detail.',
    primaryCta: {
      label: 'Open Wheel Settings',
      href: '/settings/forza-horizon-6-wheel',
    },
    relatedLinks: [
      {
        label: 'Controller settings',
        href: '/settings/forza-horizon-6-controller',
      },
      {
        label: 'Tune calculator',
        href: '/tools/forza-horizon-6-tune-calculator',
      },
    ],
    sections: [
      {
        title: 'Build one baseline profile',
        body: 'Keep one road baseline that you understand before making drift, rally, or high-force variants.',
        bullets: [
          'Use the same car and road route for testing.',
          'Change force feedback strength separately from rotation.',
          'Keep notes for wheel model and driver settings.',
        ],
      },
      {
        title: 'Avoid masking tune problems',
        body: 'Heavy force feedback can hide understeer and make oversteer harder to catch. If the wheel fights every input, reduce force before changing the car.',
        bullets: [
          'Test medium-speed corners first.',
          'Check whether corrections arrive too late.',
          'Tune the car after the wheel profile feels readable.',
        ],
      },
      {
        title: 'Separate wheel and controller pages',
        body: 'A tune that feels great on controller may need gentler steering response on wheel. Keep advice separated so returning users trust the page.',
        bullets: [
          'Label every test by input device.',
          'Use stable setups for wheel beginners.',
          'Only publish aggressive settings after repeat testing.',
        ],
      },
    ],
  },
  {
    slug: 'steam-deck-settings-guide',
    title: 'Forza Horizon 6 Steam Deck Settings Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 Steam Deck settings guide',
    description:
      'Forza Horizon 6 Steam Deck settings guide for performance targets, battery tradeoffs, and handheld testing.',
    eyebrow: 'Handheld settings',
    intro:
      'Handheld settings are about consistency. A stable target usually feels better than a flashy setting mix that drops frames in traffic or rain.',
    primaryCta: {
      label: 'Open Steam Deck Settings',
      href: '/settings/forza-horizon-6-steam-deck',
    },
    relatedLinks: [
      {
        label: 'PC settings',
        href: '/settings/forza-horizon-6-pc',
      },
      {
        label: 'Weekly playlist',
        href: '/games/forza-horizon-6/weekly-playlist',
      },
    ],
    sections: [
      {
        title: 'Pick a performance target first',
        body: 'Choose whether the session is about FPS, battery, or visual quality. Mixing all three goals makes every setting decision muddy.',
        bullets: [
          'Use one route with traffic for repeat testing.',
          'Check rain, night, and dense scenery separately.',
          'Record battery behavior after a real play session.',
        ],
      },
      {
        title: 'Tune for weekly events',
        body: 'The most useful handheld setup is the one that survives weekly playlists, not only an empty-road benchmark.',
        bullets: [
          'Test event starts and packed corners.',
          'Keep input latency predictable.',
          'Avoid settings that make car control harder.',
        ],
      },
      {
        title: 'Keep PC and handheld advice separate',
        body: 'PC guides can chase higher fidelity. Steam Deck pages should prioritize stable play and quick settings decisions.',
        bullets: [
          'Link to PC settings for desktop users.',
          'Keep handheld notes short and testable.',
          'Update the page after patches change performance.',
        ],
      },
    ],
  },
];

export function getForzaHorizon6Guide(slug: string) {
  return forzaHorizon6Guides.find((guide) => guide.slug === slug);
}
