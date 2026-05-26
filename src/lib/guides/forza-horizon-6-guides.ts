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
  deepDive?: {
    title: string;
    description: string;
    cards: {
      title: string;
      body: string;
      bullets: string[];
    }[];
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
    deepDive: [
      {
        title: 'Final drive decision chart',
        description:
          'Use final drive first because it moves the entire gearbox. Only edit individual gears after the full range is close.',
        cards: [
          {
            title: 'Car hits limiter before the useful straight ends',
            body: 'The gearing is too short for the route. Lengthen final drive slightly, then retest the same straight before touching top gear alone.',
            bullets: [
              'Use small final-drive moves instead of dramatic jumps.',
              'Retest launch after lengthening, because slow exits can appear.',
              'If only one gear is wrong, move that gear after final drive is close.',
            ],
          },
          {
            title: 'Car never reaches top gear',
            body: 'The gearing is too long for the route or the build lacks power for the target speed. Shorten final drive or reduce the top-speed target.',
            bullets: [
              'Do not tune for a top gear the route never uses.',
              'Shorten upper gears for technical road events.',
              'Compare lap time, not only the garage speed estimate.',
            ],
          },
          {
            title: 'Car bogs after every shift',
            body: 'The engine is falling out of its useful power range. Close the gear spacing around the part of the route where the bog appears.',
            bullets: [
              'Watch the RPM drop after second-to-third and third-to-fourth.',
              'Use tighter gears for hill climbs and short exits.',
              'Avoid over-shortening if wheelspin appears after shifts.',
            ],
          },
        ],
      },
      {
        title: 'Gearing targets by build type',
        description:
          'Road, rally, drift, and drag builds use gearing for different jobs. Start with the event type before chasing one universal ratio.',
        cards: [
          {
            title: 'Road and street',
            body: 'Target clean exits and the longest useful straight. A road gearbox should keep the car awake after medium-speed corners without forcing limiter hits.',
            bullets: [
              'Use balanced final drive before editing every gear.',
              'Keep one gear ready for repeated corner exits.',
              'Lengthen only when the route actually rewards top speed.',
            ],
          },
          {
            title: 'Drift',
            body: 'Target one or two usable drift gears. The car should stay in power during linked corners without exploding into wheelspin.',
            bullets: [
              'Shorten if the car bogs mid-corner.',
              'Lengthen if throttle instantly kills direction.',
              'Save a separate drift gearbox from the road build.',
            ],
          },
          {
            title: 'Drag and speed traps',
            body: 'Target launch repeatability first, then trap speed. A big top-speed number is not useful if first and second gear waste the run.',
            bullets: [
              'Fix launch spin or bog before upper gears.',
              'Retest elapsed time and trap speed together.',
              'Keep drag and speed-zone versions separate.',
            ],
          },
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
  {
    slug: 'fix-wheelspin',
    title: 'How to Fix Wheelspin in Forza Horizon 6 - Apex Tune Hub',
    h1: 'How to fix wheelspin in Forza Horizon 6',
    description:
      'Forza Horizon 6 wheelspin tuning guide for RWD, AWD, street, rally, and drag builds that waste grip on launch or corner exit.',
    eyebrow: 'Traction fix',
    intro:
      'Wheelspin is not always a power problem. It can come from gearing, differential behavior, tire choice, suspension movement, or asking too much throttle from the car too early.',
    primaryCta: {
      label: 'Open wheelspin preset',
      href: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
    },
    relatedLinks: [
      {
        label: 'Tune calculator',
        href: '/tools/forza-horizon-6-tune-calculator?race=street&drive=RWD&class=A&issue=wheelspin&style=stable',
      },
      {
        label: 'Drag wheelspin preset',
        href: '/tools/forza-horizon-6-tune-presets/s2-awd-drag-wheelspin-aggressive',
      },
      {
        label: 'Gear ratio calculator',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
    ],
    sections: [
      {
        title: 'Find when the tires break loose',
        body: 'Launch wheelspin, mid-corner wheelspin, and exit wheelspin need different fixes. Start by repeating the same section and naming the trigger.',
        bullets: [
          'If it spins instantly, look at first gear and launch behavior.',
          'If it spins after turning, look at throttle differential and rear grip.',
          'If it spins after bumps, look at suspension and damping before adding power.',
        ],
      },
      {
        title: 'Calm gearing before removing power',
        body: 'A strong car can feel useless if first and second gear are too short. Fix the delivery before deciding the build has too much horsepower.',
        bullets: [
          'Lengthen first gear if launch smoke dominates.',
          'Smooth the first-to-second shift if the car snaps after launch.',
          'Use the gear calculator when the car bogs after you lengthen too much.',
        ],
      },
      {
        title: 'Tune traction without making the car lazy',
        body: 'The goal is usable drive, not a car that refuses to rotate. Keep enough response for corner exits while reducing wasted spin.',
        bullets: [
          'Use half throttle and full throttle tests on the same exit.',
          'Reduce aggressive differential choices in small steps.',
          'Save separate street, rally, and drag versions if the car has multiple roles.',
        ],
      },
    ],
  },
  {
    slug: 'fix-slow-launch',
    title: 'How to Fix Slow Launch in Forza Horizon 6 - Apex Tune Hub',
    h1: 'How to fix slow launch in Forza Horizon 6',
    description:
      'Forza Horizon 6 slow launch tuning guide for cars that bog down, lose starts, or feel asleep out of tight corners.',
    eyebrow: 'Launch fix',
    intro:
      'A slow launch can be too little grip, too much grip, long gearing, weak low-end response, or a setup that falls out of its useful power band after the first shift.',
    primaryCta: {
      label: 'Open slow launch preset',
      href: '/tools/forza-horizon-6-tune-presets/b-rwd-rally-slow-launch-balanced',
    },
    relatedLinks: [
      {
        label: 'A AWD dirt launch preset',
        href: '/tools/forza-horizon-6-tune-presets/a-awd-dirt-slow-launch-balanced',
      },
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
      {
        label: 'Tune calculator',
        href: '/tools/forza-horizon-6-tune-calculator?race=rally&drive=RWD&class=B&issue=slow-launch&style=balanced',
      },
    ],
    sections: [
      {
        title: 'Test launch and corner exit separately',
        body: 'A car can leave the starting line well but bog after a hairpin. Use one standing launch and one slow-corner exit before changing the tune.',
        bullets: [
          'If the start is weak, check first gear and traction first.',
          'If hairpin exits are weak, check lower gear spacing and throttle response.',
          'If AWD bogs, avoid making every gear longer at once.',
        ],
      },
      {
        title: 'Shorten only what needs help',
        body: 'Many slow cars need shorter lower gears, not a whole gearbox rewrite. Keep top speed intact unless the route never uses it.',
        bullets: [
          'Start with final drive if every gear feels lazy.',
          'Adjust first and second if only exits feel slow.',
          'Stop if the fix creates wheelspin you cannot repeat.',
        ],
      },
      {
        title: 'Match launch style to surface',
        body: 'Dirt, rally, street, and drag launches reward different choices. A launch fix that works on asphalt can create spin on mixed surface.',
        bullets: [
          'Use softer delivery for dirt and rally surfaces.',
          'Use cleaner gear spacing for street routes with traffic.',
          'Use drag-specific testing for high-power straight-line builds.',
        ],
      },
    ],
  },
  {
    slug: 'fix-unstable-braking',
    title: 'How to Fix Unstable Braking in Forza Horizon 6 - Apex Tune Hub',
    h1: 'How to fix unstable braking in Forza Horizon 6',
    description:
      'Forza Horizon 6 braking stability tuning guide for cars that wander, snap, bounce, or rotate too hard under braking.',
    eyebrow: 'Braking fix',
    intro:
      'Unstable braking costs confidence before the corner even starts. Fix the braking platform first, then worry about mid-corner speed or power upgrades.',
    primaryCta: {
      label: 'Open braking preset',
      href: '/tools/forza-horizon-6-tune-presets/s1-awd-dirt-unstable-braking-stable',
    },
    relatedLinks: [
      {
        label: 'Road tune calculator',
        href: '/tools/forza-horizon-6-tune-calculator?race=dirt&drive=AWD&class=S1&issue=unstable-braking&style=stable',
      },
      {
        label: 'Best rally cars',
        href: '/games/forza-horizon-6/best-rally-cars',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
    ],
    sections: [
      {
        title: 'Separate lockup, wandering, and snap rotation',
        body: 'A car that refuses to stop, a car that wanders over bumps, and a car that spins on trail braking are different problems.',
        bullets: [
          'Brake in a straight line before testing trail braking.',
          'Use a bumpy braking zone to identify suspension movement.',
          'Use a smooth braking zone to isolate brake balance and differential behavior.',
        ],
      },
      {
        title: 'Stabilize the platform first',
        body: 'If the car bounces or dives too sharply, alignment and differential changes may not solve the real issue. Make the platform readable first.',
        bullets: [
          'Soften harsh behavior before chasing more rotation.',
          'Avoid over-stiffening the rear just to make turn-in sharp.',
          'Retest braking before changing corner-exit settings.',
        ],
      },
      {
        title: 'Keep trail braking predictable',
        body: 'Fast routes need a car that can brake and rotate together. The tune should let you add steering without sudden rear panic.',
        bullets: [
          'Use light trail braking on one repeatable corner.',
          'Back off if the car snaps when brake pressure drops.',
          'Save a stable version for weekly championships.',
        ],
      },
    ],
  },
  {
    slug: 'fix-poor-top-speed',
    title: 'How to Fix Poor Top Speed in Forza Horizon 6 - Apex Tune Hub',
    h1: 'How to fix poor top speed in Forza Horizon 6',
    description:
      'Forza Horizon 6 top speed tuning guide for cars that hit the limiter, run out of gear, or lose fast road and speed trap events.',
    eyebrow: 'Top speed fix',
    intro:
      'Poor top speed is not only about adding horsepower. Final drive, aero, tire drag, class limits, and whether the route actually rewards top end all matter.',
    primaryCta: {
      label: 'Open top speed preset',
      href: '/tools/forza-horizon-6-tune-presets/s2-awd-road-poor-top-speed-aggressive',
    },
    relatedLinks: [
      {
        label: 'Gear ratio calculator',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
      {
        label: 'Best road racing cars',
        href: '/games/forza-horizon-6/best-road-racing-cars',
      },
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
    ],
    sections: [
      {
        title: 'Check if the route needs top speed',
        body: 'A highway test can make a race tune worse. Tune top end for the longest useful straight in the target event, not an empty-road fantasy.',
        bullets: [
          'If the car hits limiter early, lengthen final drive first.',
          'If the route is technical, protect acceleration before top speed.',
          'Compare lap time and speed trap results separately.',
        ],
      },
      {
        title: 'Use gearing before power upgrades',
        body: 'If the car already has enough power but runs out of gear, more horsepower may only create traction problems.',
        bullets: [
          'Lengthen final drive in small steps.',
          'Open upper gears only if lower gears still feel strong.',
          'Retest launch after every top-speed change.',
        ],
      },
      {
        title: 'Balance aero against straight-line speed',
        body: 'More downforce can make corners easier but cap the car on long straights. Less aero can make fast corners worse even if the speed number improves.',
        bullets: [
          'Test one fast corner after aero changes.',
          'Watch for new understeer when reducing downforce.',
          'Keep a speed-trap tune separate from a road-race tune.',
        ],
      },
    ],
  },
  {
    slug: 'best-drift-tune-settings',
    title: 'Best Drift Tune Settings in Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best drift tune settings in Forza Horizon 6',
    description:
      'Forza Horizon 6 drift tune settings guide for tire pressure, gearing, differential, suspension, steering feel, and linked drift sections.',
    eyebrow: 'Drift settings',
    intro:
      'A good drift tune is not only more power and more angle. The best first drift setup is predictable enough to initiate, hold angle, and recover before the next transition.',
    primaryCta: {
      label: 'Open Drift Tune Calculator',
      href: '/tools/forza-horizon-6-drift-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Japan drift setup',
        href: '/games/forza-horizon-6/guides/japan-drift-setup',
      },
      {
        label: 'Best drift cars',
        href: '/games/forza-horizon-6/best-drift-cars',
      },
      {
        label: 'Best Mazda cars',
        href: '/games/forza-horizon-6/best-mazda-cars',
      },
    ],
    sections: [
      {
        title: 'Start with recoverable angle',
        body: 'Beginner drift setups should recover cleanly before chasing maximum angle. A car that catches the next transition consistently will score and teach better than one dramatic slide.',
        bullets: [
          'Use moderate power until throttle control feels repeatable.',
          'Tune for linked corners, not one isolated screenshot slide.',
          'Keep a safer version for weekly drift zones and a sharper version for practice.',
        ],
      },
      {
        title: 'Use gearing to hold the drift',
        body: 'The main drift gear should sit in the useful power band without instantly lighting up the tires or bogging mid-corner.',
        bullets: [
          'Lengthen gearing if tires smoke instantly and kill direction.',
          'Shorten gearing if the car falls out of power mid-drift.',
          'Use the same drift section when comparing gear changes.',
        ],
      },
      {
        title: 'Tune differential and suspension together',
        body: 'Differential changes affect throttle rotation, while suspension changes affect weight transfer. Move both carefully so the car keeps rhythm.',
        bullets: [
          'Reduce snap before adding more steering aggression.',
          'Soften harsh transitions if the car bounces or unloads suddenly.',
          'Record whether the problem appears on initiation, hold, or recovery.',
        ],
      },
    ],
  },
  {
    slug: 'logitech-wheel-settings',
    title: 'Best Logitech Wheel Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best Logitech wheel settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 Logitech wheel settings guide for G29, G920, G923, force feedback, steering feel, deadzones, and tuning workflow.',
    eyebrow: 'Logitech wheel',
    intro:
      'Logitech wheels can feel light, noisy, heavy on center, or vague depending on force feedback and car setup. Fix readability first, then judge whether the car tune needs changes.',
    primaryCta: {
      label: 'Open Wheel Settings',
      href: '/settings/forza-horizon-6-wheel',
    },
    relatedLinks: [
      {
        label: 'Wheel settings guide',
        href: '/games/forza-horizon-6/guides/wheel-settings-guide',
      },
      {
        label: 'Controller settings',
        href: '/settings/forza-horizon-6-controller',
      },
      {
        label: 'Road tune guide',
        href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
      },
    ],
    sections: [
      {
        title: 'Make force feedback readable first',
        body: 'If the wheel fights every input or hides tire slip, car tuning becomes guesswork. Start with a setting that lets you feel understeer, rear movement, and braking weight transfer.',
        bullets: [
          'Lower heavy force before changing every car tune.',
          'Use one stable road car to test steering feel.',
          'Avoid judging drift setups until the wheel profile feels predictable.',
        ],
      },
      {
        title: 'Test road, dirt, and drift separately',
        body: 'One wheel profile can feel fine on smooth roads but vague over bumps or too sharp during drift recovery.',
        bullets: [
          'Use a road route to test center feel and braking.',
          'Use a dirt route to test bumps and oscillation.',
          'Use a drift section to test countersteer and recovery speed.',
        ],
      },
      {
        title: 'Separate wheel problems from tune problems',
        body: 'If every car feels bad, adjust the wheel. If one car feels bad, adjust the tune. This keeps setup changes from spiraling.',
        bullets: [
          'Change wheel settings when every car feels delayed or too heavy.',
          'Change tune settings when only one build understeers, snaps, or spins.',
          'Keep notes for force, damping, steering lock, assists, and class.',
        ],
      },
    ],
  },
  {
    slug: 'controller-drift-settings',
    title: 'Best Controller Drift Settings in Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best controller drift settings in Forza Horizon 6',
    description:
      'Forza Horizon 6 controller drift settings guide for steering response, throttle control, vibration, deadzones, and drift tune links.',
    eyebrow: 'Controller drift',
    intro:
      'Controller drift setups need smooth throttle, readable steering, and a tune that does not punish every correction. Fix input feel and car setup together.',
    primaryCta: {
      label: 'Open Drift Tune Tool',
      href: '/tools/forza-horizon-6-drift-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Controller settings',
        href: '/settings/forza-horizon-6-controller',
      },
      {
        label: 'Japan drift setup',
        href: '/games/forza-horizon-6/guides/japan-drift-setup',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
    ],
    sections: [
      {
        title: 'Smooth throttle before adding power',
        body: 'Most controller drift mistakes come from asking too much throttle too quickly. A smoother setup will help more than a huge power build at the start.',
        bullets: [
          'Use a moderate-power car until countersteer feels natural.',
          'Test half throttle and full throttle on the same corner.',
          'Avoid shortening gears until wheelspin behavior is readable.',
        ],
      },
      {
        title: 'Keep steering predictable',
        body: 'Drift recovery depends on steering response that is quick enough to catch the car without making every correction twitchy.',
        bullets: [
          'If every car snaps, check controller settings first.',
          'If only one car snaps, open the oversteer guide and tune the car.',
          'Keep vibration readable enough to notice grip loss.',
        ],
      },
      {
        title: 'Use a repeatable drift section',
        body: 'A drift setup should be tested on linked transitions, not just one corner. The best controller setup is the one that lets you repeat the same rhythm.',
        bullets: [
          'Record the car, class, drivetrain, assists, and route section.',
          'Use one transition for initiation and another for recovery.',
          'Save a safe weekly version before building a more aggressive tune.',
        ],
      },
    ],
  },
  {
    slug: 'thrustmaster-wheel-settings',
    title: 'Best Thrustmaster Wheel Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best Thrustmaster wheel settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 Thrustmaster wheel settings guide for T150, TMX, T300, force feedback, steering feel, deadzones, and road testing.',
    eyebrow: 'Thrustmaster wheel',
    intro:
      'Thrustmaster wheels can feel heavy around center, vague at corner entry, or too sharp when the car starts to rotate. Tune the wheel profile until the tire information is readable, then adjust the car.',
    primaryCta: {
      label: 'Open Wheel Settings',
      href: '/settings/forza-horizon-6-wheel',
    },
    relatedLinks: [
      {
        label: 'Wheel settings guide',
        href: '/games/forza-horizon-6/guides/wheel-settings-guide',
      },
      {
        label: 'Logitech wheel settings',
        href: '/games/forza-horizon-6/guides/logitech-wheel-settings',
      },
      {
        label: 'Road tune calculator',
        href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=A&issue=understeer&style=balanced',
      },
    ],
    sections: [
      {
        title: 'Balance center feel before force',
        body: 'If the wheel feels heavy at center, adding more force can hide understeer and make the car harder to place on narrow roads.',
        bullets: [
          'Start with readable center feel before increasing force strength.',
          'Use one stable road car to judge corner entry.',
          'Avoid tuning every vehicle around a wheel profile that feels wrong everywhere.',
        ],
      },
      {
        title: 'Use braking zones as the test',
        body: 'Wheel settings show their problems when you brake and add steering. A good profile lets you feel whether the front tires are loaded or sliding.',
        bullets: [
          'Test one smooth braking zone and one bumpy braking zone.',
          'Reduce harsh behavior before changing brake balance.',
          'Keep assists and camera consistent during every test.',
        ],
      },
      {
        title: 'Separate drift feel from road feel',
        body: 'A profile that feels calm on road routes can feel slow during drift recovery. Keep notes for road, rally, and drift separately.',
        bullets: [
          'Use road testing for center feel and understeer.',
          'Use dirt testing for bumps and oscillation.',
          'Use drift testing for countersteer speed and recovery.',
        ],
      },
    ],
  },
  {
    slug: 'fanatec-moza-wheel-settings',
    title: 'Best Fanatec and Moza Wheel Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best Fanatec and Moza wheel settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 Fanatec and Moza wheel settings guide for direct-drive force feedback, oscillation, clipping, damping, and car tuning workflow.',
    eyebrow: 'Direct-drive wheel',
    intro:
      'Direct-drive wheels can make FH6 feel incredible when the profile is readable, but too much force can create oscillation, clipping, and overcorrection. Start with control before strength.',
    primaryCta: {
      label: 'Open Wheel Settings',
      href: '/settings/forza-horizon-6-wheel',
    },
    relatedLinks: [
      {
        label: 'Wheel settings guide',
        href: '/games/forza-horizon-6/guides/wheel-settings-guide',
      },
      {
        label: 'Controller comparison',
        href: '/settings/forza-horizon-6-controller',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
    ],
    sections: [
      {
        title: 'Avoid clipping before chasing strength',
        body: 'If the wheel is already saturated, stronger settings will not add more useful detail. They only make slides harder to catch.',
        bullets: [
          'Lower force if every corner feels like the same heavy wall.',
          'Use telemetry feel: tire load should change, not flatten.',
          'Retest after changing device software and in-game settings together.',
        ],
      },
      {
        title: 'Control oscillation early',
        body: 'Oscillation can make fast straights, dirt sections, and drift recovery feel unstable even when the car tune is fine.',
        bullets: [
          'Use a straight section to check hands-off wobble safely.',
          'Add damping only enough to calm noise without hiding grip loss.',
          'Do not fix oscillation by making every car tune softer.',
        ],
      },
      {
        title: 'Tune the car after the wheel profile',
        body: 'A powerful wheel makes bad tunes obvious, but it can also exaggerate small setup issues. Stabilize input feel first, then fix the car.',
        bullets: [
          'If every car is nervous, adjust the wheel profile.',
          'If one RWD car snaps, open the oversteer guide.',
          'Keep separate road, rally, and drift force notes.',
        ],
      },
    ],
  },
  {
    slug: 'best-drag-tune-settings',
    title: 'Best Drag Tune Settings in Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best drag tune settings in Forza Horizon 6',
    description:
      'Forza Horizon 6 drag tune settings guide for launch, wheelspin, final drive, gear spacing, differential, tire pressure, and speed testing.',
    eyebrow: 'Drag settings',
    intro:
      'A drag tune is won in the first seconds. Before chasing more power, make the launch repeatable, gear spacing useful, and traction consistent.',
    primaryCta: {
      label: 'Open Drag Wheelspin Preset',
      href: '/tools/forza-horizon-6-tune-presets/s2-awd-drag-wheelspin-aggressive',
    },
    relatedLinks: [
      {
        label: 'Gear ratio calculator',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
      {
        label: 'Fix wheelspin',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
      },
      {
        label: 'Fix slow launch',
        href: '/games/forza-horizon-6/guides/fix-slow-launch',
      },
    ],
    sections: [
      {
        title: 'Fix the launch first',
        body: 'A car that spins, bogs, or shifts badly off the line cannot show whether the rest of the tune is fast.',
        bullets: [
          'Launch from the same marker three times.',
          'Record whether spin happens instantly or after the first shift.',
          'Change first gear and launch behavior before touching top gear.',
        ],
      },
      {
        title: 'Use final drive with restraint',
        body: 'Final drive changes the whole car. Use it to move the gearbox into the useful range, then adjust individual gears only when needed.',
        bullets: [
          'Shorten final drive if the car feels asleep off the line.',
          'Lengthen final drive if the launch creates useless smoke.',
          'Retest elapsed time, not only trap speed.',
        ],
      },
      {
        title: 'Separate drag and speed trap tunes',
        body: 'A tune built for a launch may not be the fastest speed-trap setup. Keep separate versions when the event goal changes.',
        bullets: [
          'Drag tune: launch, shifts, and straight-line pull.',
          'Speed tune: top-end gearing and aero tradeoffs.',
          'Weekly tune: consistency under restrictions and traffic.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Drag launch troubleshooting',
        description:
          'Most drag problems show up before the car reaches full speed. Diagnose the first two seconds before adding power.',
        cards: [
          {
            title: 'Instant wheelspin',
            body: 'The launch is overpowering available grip. Lengthen first gear, soften aggressive differential behavior, and retest with the same throttle input.',
            bullets: [
              'Check whether spin happens before or after the first shift.',
              'Lengthen first gear before changing every upper gear.',
              'Reduce launch aggression before adding more tire pressure changes.',
            ],
          },
          {
            title: 'Bogging off the line',
            body: 'The car is falling below its useful power range. Shorten the launch range carefully and check whether the next shift still lands in power.',
            bullets: [
              'Shorten final drive in small steps.',
              'Avoid a fix that creates instant wheelspin.',
              'Retest elapsed time, not only engine sound.',
            ],
          },
          {
            title: 'Fast trap, slow run',
            body: 'The top end is good but the first half of the run is weak. Keep the upper gears and focus on launch grip, first shift, and differential.',
            bullets: [
              'Compare 0-60 feel against final trap speed.',
              'Save a separate speed-trap version if needed.',
              'Use one drag strip marker for every test.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-rally-tune-settings',
    title: 'Best Rally Tune Settings in Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best rally tune settings in Forza Horizon 6',
    description:
      'Forza Horizon 6 rally tune settings guide for dirt, mixed surface, suspension, damping, gearing, braking stability, and AWD traction.',
    eyebrow: 'Rally settings',
    intro:
      'A rally tune should survive bumps, recover after crests, and keep traction on mixed surfaces. Build stability first, then add speed.',
    primaryCta: {
      label: 'Open Rally Wheelspin Preset',
      href: '/tools/forza-horizon-6-tune-presets/s1-awd-rally-wheelspin-balanced',
    },
    relatedLinks: [
      {
        label: 'Best rally cars',
        href: '/games/forza-horizon-6/best-rally-cars',
      },
      {
        label: 'Fix unstable braking',
        href: '/games/forza-horizon-6/guides/fix-unstable-braking',
      },
      {
        label: 'Fix slow launch',
        href: '/games/forza-horizon-6/guides/fix-slow-launch',
      },
    ],
    sections: [
      {
        title: 'Build for bumps before speed',
        body: 'Rally routes punish cars that only feel good on smooth pavement. Suspension and damping need to keep the tires useful after rough landings.',
        bullets: [
          'Use one bumpy exit and one smooth exit for comparison.',
          'Soften harsh behavior before adding power.',
          'Retest braking after every suspension change.',
        ],
      },
      {
        title: 'Keep AWD traction useful',
        body: 'AWD can hide problems until the car lands, crests, or exits a slow corner. Tune for clean recovery, not only strong launch.',
        bullets: [
          'Check if wheelspin appears after bumps or on flat exits.',
          'Smooth differential behavior before changing every gear.',
          'Use shorter lower gearing only if it does not create spin.',
        ],
      },
      {
        title: 'Use mixed-surface testing',
        body: 'A rally build should feel predictable across dirt, road, wet patches, and uneven transitions.',
        bullets: [
          'Record surface type when a problem appears.',
          'Use one safe weekly tune and one aggressive test tune.',
          'Compare consistency across runs before chasing one fast split.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Rally setup decision points',
        description:
          'Rally tuning is about recovery. The car must stay useful after bumps, crests, braking zones, and mixed-grip exits.',
        cards: [
          {
            title: 'Car skips across bumps',
            body: 'The suspension is not keeping the tires connected. Soften harsh behavior before adding power or shortening gears.',
            bullets: [
              'Use the same rough exit for every suspension test.',
              'Change springs and damping before blaming the car choice.',
              'Retest braking after ride-height changes.',
            ],
          },
          {
            title: 'AWD pulls wide on throttle',
            body: 'The drivetrain is helping launch but hurting rotation. Tune differential behavior and lower gears so throttle does not drag the car off line.',
            bullets: [
              'Test half throttle before full throttle.',
              'Check whether the front axle is pulling the car straight.',
              'Use a safer diff baseline for weekly events.',
            ],
          },
          {
            title: 'Good dirt pace, bad road sections',
            body: 'Mixed-surface events need compromise. Keep enough compliance for dirt without making paved braking vague or delayed.',
            bullets: [
              'Run one dirt split and one paved braking zone.',
              'Keep notes by surface type.',
              'Use a route-specific version only after the safe tune works.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'japan-route-tuning-checklist',
    title: 'Forza Horizon 6 Japan Route Tuning Checklist - Apex Tune Hub',
    h1: 'Forza Horizon 6 Japan route tuning checklist',
    description:
      'A practical FH6 Japan route tuning checklist for road, drift, rally, speed zone, and weekly playlist testing.',
    eyebrow: 'Japan routes',
    intro:
      'Japan routes can punish tunes that only feel good on one surface. Use a small checklist for each route so you know whether the issue is gearing, braking, traction, or driver input.',
    primaryCta: {
      label: 'Open Japan Map Planner',
      href: '/games/forza-horizon-6/japan-map',
    },
    relatedLinks: [
      {
        label: 'Japan launch plan',
        href: '/games/forza-horizon-6/guides/japan-launch-tuning-plan',
      },
      {
        label: 'Tune calculator',
        href: '/tools/forza-horizon-6-tune-calculator',
      },
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
    ],
    sections: [
      {
        title: 'Start with route type',
        body: 'A road sprint, mountain drift route, dirt climb, and speed zone need different compromises even when the same car class is allowed.',
        bullets: [
          'Mark the route as road, street, drift, dirt, cross-country, or speed.',
          'Record whether the problem appears at entry, apex, exit, or top end.',
          'Use one baseline tune before creating route-specific versions.',
        ],
      },
      {
        title: 'Test one corner family at a time',
        body: 'Route testing gets messy when every change is judged across the whole map. Pick one corner family and tune around the repeated problem.',
        bullets: [
          'Use hairpins for brake balance, rotation, and first-gear exits.',
          'Use sweepers for aero, tire pressure, and mid-corner stability.',
          'Use straights for final drive, shift points, and top-speed limits.',
        ],
      },
      {
        title: 'Keep weekly and leaderboard notes separate',
        body: 'A weekly playlist setup should be reliable under restrictions. A leaderboard test setup can be sharper and riskier.',
        bullets: [
          'Keep a safe weekly tune for traffic and mixed weather.',
          'Keep an aggressive test tune for clean solo attempts.',
          'Write down the exact route problem before changing the tune again.',
        ],
      },
    ],
  },
  {
    slug: 'best-a-class-road-tune-settings',
    title: 'Best A Class Road Tune Settings in Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best A class road tune settings in Forza Horizon 6',
    description:
      'Forza Horizon 6 A class road tune settings guide for grip, braking, gearing, tire pressure, differential, and stable race builds.',
    eyebrow: 'A class road',
    intro:
      'A class road racing is usually about clean exits and predictable braking, not maximum horsepower. Build a car that repeats laps before chasing one fast split.',
    primaryCta: {
      label: 'Open A Class Road Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=A&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Best A class cars',
        href: '/games/forza-horizon-6/best-a-class-cars',
      },
      {
        label: 'A and S1 road guide',
        href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
      },
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
    ],
    sections: [
      {
        title: 'Build around exit speed',
        body: 'A road tune that launches hard but pushes wide out of corners will lose time on every technical route.',
        bullets: [
          'Check whether exit understeer appears before or after throttle.',
          'Use gearing that keeps the car awake without forcing wheelspin.',
          'Prefer repeatable exits over one aggressive launch setup.',
        ],
      },
      {
        title: 'Keep braking predictable',
        body: 'A class road cars should let the player brake late without sudden rear movement or dead front tires.',
        bullets: [
          'Test one heavy braking zone three times in a row.',
          'Fix unstable braking before adding more front grip.',
          'Use brake balance and differential changes in small steps.',
        ],
      },
      {
        title: 'Use balanced aero and tire pressure',
        body: 'Too much stability can make the car slow to rotate, while too little makes every correction expensive.',
        bullets: [
          'Use medium-speed corners to judge rotation.',
          'Retest tire pressure after changing suspension or aero.',
          'Keep one wet or bumpy route in the test loop.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'A class road tuning priorities',
        description:
          'A class road builds should feel fast because they repeat clean corners, not because they hide mistakes with power.',
        cards: [
          {
            title: 'Corner entry',
            body: 'Entry should feel calm enough to brake late and still point the car toward the apex. If the rear moves too much, fix braking stability before adding front bite.',
            bullets: [
              'Use one heavy braking zone as the entry test.',
              'Adjust brake balance and rear stability in small steps.',
              'Do not judge entry on a corner you cannot repeat.',
            ],
          },
          {
            title: 'Mid-corner rotation',
            body: 'The car should rotate without forcing huge steering input. If it washes wide, tune tire pressure, alignment, ARBs, and aero direction before power.',
            bullets: [
              'Use a medium-speed corner to test front response.',
              'Retest after every tire or ARB change.',
              'Keep enough rear stability for wet or bumpy routes.',
            ],
          },
          {
            title: 'Exit speed',
            body: 'A class races are often won by clean exits. If throttle makes the car push wide or spin, use differential and gearing before adding horsepower.',
            bullets: [
              'Compare half throttle and full throttle on the same exit.',
              'Shorten gearing only if it does not create wheelspin.',
              'Save a safe weekly version before aggressive tuning.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-s1-rally-tune-settings',
    title: 'Best S1 Rally Tune Settings in Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best S1 rally tune settings in Forza Horizon 6',
    description:
      'Forza Horizon 6 S1 rally tune settings guide for AWD grip, bumps, gearing, suspension, braking, and mixed-surface event testing.',
    eyebrow: 'S1 rally',
    intro:
      'S1 rally builds need enough speed to feel competitive and enough compliance to survive rough exits. Tune the car for recovery first, then sharpen the pace.',
    primaryCta: {
      label: 'Open S1 Rally Preset',
      href: '/tools/forza-horizon-6-tune-presets/s1-awd-rally-wheelspin-balanced',
    },
    relatedLinks: [
      {
        label: 'Best rally cars',
        href: '/games/forza-horizon-6/best-rally-cars',
      },
      {
        label: 'Rally tune settings',
        href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
      },
      {
        label: 'Fix wheelspin',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
      },
    ],
    sections: [
      {
        title: 'Protect traction after bumps',
        body: 'The fastest S1 rally tune is not helpful if the car lands, spins, and needs a full correction before accelerating.',
        bullets: [
          'Test a rough exit before judging power upgrades.',
          'Use suspension changes to keep tires connected after crests.',
          'Shorten gearing only when traction stays clean.',
        ],
      },
      {
        title: 'Use AWD as a tool, not a mask',
        body: 'AWD can hide bad balance until the car hits mixed surfaces. Make sure the front and rear axles are both doing useful work.',
        bullets: [
          'Check if the car pulls wide on throttle.',
          'Check if the rear steps out when lifting or braking.',
          'Tune differential behavior before blaming every tire setting.',
        ],
      },
      {
        title: 'Plan for playlist restrictions',
        body: 'Weekly rally events often force class, region, or car-type constraints. Keep a conservative S1 rally baseline ready.',
        bullets: [
          'Save one stable S1 AWD setup as the default.',
          'Create a sharper route-specific version only after testing.',
          'Link the build notes to the weekly playlist tracker.',
        ],
      },
    ],
  },
  {
    slug: 'weekly-playlist-tuning-checklist',
    title: 'Forza Horizon 6 Weekly Playlist Tuning Checklist - Apex Tune Hub',
    h1: 'Forza Horizon 6 weekly playlist tuning checklist',
    description:
      'Forza Horizon 6 weekly playlist tuning checklist for restricted events, car picks, setup testing, tune notes, and repeatable wins.',
    eyebrow: 'Weekly playlist',
    intro:
      'Weekly playlist tuning is different from building a perfect free-roam car. You need a fast-enough setup that works inside restrictions and can survive messy attempts.',
    primaryCta: {
      label: 'Open Weekly Tracker',
      href: '/games/forza-horizon-6/weekly-playlist',
    },
    relatedLinks: [
      {
        label: 'Tune presets',
        href: '/tools/forza-horizon-6-tune-presets',
      },
      {
        label: 'Car pass tracker',
        href: '/games/forza-horizon-6/car-pass',
      },
      {
        label: 'Best cars hub',
        href: '/games/forza-horizon-6/best-cars',
      },
    ],
    sections: [
      {
        title: 'Read the restriction first',
        body: 'A weekly tune starts with class, drivetrain, region, car type, and event surface. Do not tune a car before the restriction is clear.',
        bullets: [
          'Write the required class and car type at the top of the notes.',
          'Separate road, dirt, drift, stunt, and speed-trap builds.',
          'Keep backup cars for common restrictions.',
        ],
      },
      {
        title: 'Build for reliability',
        body: 'Weekly events reward consistency. A setup that wins twice out of three attempts is better than a sharper tune that only works once.',
        bullets: [
          'Prioritize braking stability and exit traction.',
          'Avoid extreme gearing unless the event demands it.',
          'Test with traffic, bumps, and imperfect inputs.',
        ],
      },
      {
        title: 'Save reusable notes',
        body: 'Every weekly event can feed the next one. Keep notes for restrictions, tune changes, and why a car worked.',
        bullets: [
          'Tag the setup by class, surface, drivetrain, and problem fixed.',
          'Link successful builds to tune presets or calculator settings.',
          'Update the guide after patch notes or event rotation changes.',
        ],
      },
    ],
  },
];

export function getForzaHorizon6Guide(slug: string) {
  return forzaHorizon6Guides.find((guide) => guide.slug === slug);
}
