export type ForzaHorizon6GuideMediaSource = {
  type: 'video' | 'article';
  title: string;
  sourceName: string;
  sourceUrl: string;
  embedUrl?: string;
  note: string;
};

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
  intentClusters?: {
    query: string;
    searchSignal: string;
    answer: string;
    href: string;
  }[];
  quickFixRows?: {
    trigger: string;
    likelyCause: string;
    firstTest: string;
    toolHref: string;
  }[];
  mediaSources?: ForzaHorizon6GuideMediaSource[];
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

const tuningWorkflowMediaSources: ForzaHorizon6GuideMediaSource[] = [
  {
    type: 'video',
    title:
      'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
    sourceName: 'HokiHoshi on YouTube',
    sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
    embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
    note: 'Used as the default tuning workflow reference for FH6 setup pages that still need page-specific route screenshots or test footage.',
  },
  {
    type: 'article',
    title: 'Forza Horizon 6 advanced tuning guide',
    sourceName: 'ForzaFire',
    sourceUrl:
      'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
    note: 'Used as supporting context for setup categories. Apex Tune Hub keeps the page guidance tied to repeatable test routes instead of universal slider values.',
  },
];

const officialSupportMediaSources: ForzaHorizon6GuideMediaSource[] = [
  {
    type: 'article',
    title: 'Forza Horizon 6 Known Issues',
    sourceName: 'Forza Support',
    sourceUrl:
      'https://support.forza.net/hc/en-us/articles/51701860097811-Forza-Horizon-6-Known-Issues',
    note: 'Used as an official support checkpoint before treating settings, platform, input, save, or stability symptoms as only local configuration problems.',
  },
  {
    type: 'article',
    title: 'FH6 Known Issues and Bug Reporting',
    sourceName: 'Forza Forums',
    sourceUrl:
      'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
    note: 'Used as a known-issues reference before changing guide recommendations around temporary game, device, network, or platform symptoms.',
  },
];

const weeklyWorkflowMediaSources: ForzaHorizon6GuideMediaSource[] = [
  {
    type: 'article',
    title: 'Forza Horizon 6 official source tracker',
    sourceName: 'Apex Tune Hub',
    sourceUrl: '/games/forza-horizon-6/official-sources',
    note: 'Used as the internal source policy for official FH6 facts, car availability, platform claims, update checks, and playlist-related copy.',
  },
  {
    type: 'article',
    title: 'Forza Horizon 6 weekly playlist tracker',
    sourceName: 'Apex Tune Hub',
    sourceUrl: '/games/forza-horizon-6/weekly-playlist',
    note: 'Used as the operational tracker for event restrictions, legal car picks, reusable tune notes, and weekly-safe setup routing.',
  },
];

const officialSupportGuideSlugs = new Set([
  'best-assist-settings',
  'best-pc-graphics-settings',
  'cloud-save-not-syncing',
  'hud-accessibility-settings',
  'online-not-working-checklist',
  'pc-crash-known-issues-checklist',
  'steam-deck-settings-guide',
  'wheel-not-working-checklist',
]);

const weeklyWorkflowGuideSlugs = new Set([
  'auction-house-tune-code-sharing',
  'forzathon-weekly-challenge-tuning',
  'seasonal-championship-tuning',
  'the-trial-coop-race-tuning',
  'weekly-playlist-tuning-checklist',
]);

export function getForzaHorizon6GuideMediaSources(
  guide: ForzaHorizon6Guide
): ForzaHorizon6GuideMediaSource[] {
  if (guide.mediaSources?.length) {
    return guide.mediaSources;
  }

  if (officialSupportGuideSlugs.has(guide.slug)) {
    return officialSupportMediaSources;
  }

  if (weeklyWorkflowGuideSlugs.has(guide.slug)) {
    return weeklyWorkflowMediaSources;
  }

  return tuningWorkflowMediaSources;
}

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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a launch tuning workflow reference. This page applies the process to Japan route splits, starter classes, and transparent baseline notes.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 complete tuning guide',
        sourceName: 'Forza Guide',
        sourceUrl: 'https://forza.guide/fh6/tuning/',
        note: 'Used as supporting context for tuning categories. Apex Tune Hub keeps Japan-specific route advice labelled as baseline guidance until real route notes are collected.',
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
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'Engine and drivetrain swaps',
        href: '/games/forza-horizon-6/guides/engine-swap-drivetrain-swap-guide',
      },
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general FH6 tuning workflow reference. For Japan drift setup, the page applies the workflow to route rhythm, drift gear choice, and recoverable angle.',
      },
      {
        type: 'article',
        title: 'FH6 Tune Help: Drifting',
        sourceName: 'r/ForzaHorizon discussion',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon/comments/1tmoauc/fh6_tune_help_drifting/',
        note: 'Used as community context for drift-specific setup questions, especially separating drift goals from road-race stability.',
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
    deepDive: [
      {
        title: 'Japan drift route split',
        description:
          'Build separate drift notes for mountain flow, city transitions, and weekly drift zones instead of forcing one dramatic tune everywhere.',
        cards: [
          {
            title: 'Mountain roads',
            body: 'Mountain sections reward rhythm and recovery. The tune should hold angle without making the next transition late.',
            bullets: [
              'Use a linked downhill section for testing.',
              'Keep the main drift gear usable for several corners.',
              'Reduce snap before chasing more power.',
            ],
          },
          {
            title: 'City transitions',
            body: 'City drift sections often need quicker initiation and lower-speed control. A mountain tune may feel too lazy here.',
            bullets: [
              'Test one tight transition repeatedly.',
              'Shorten gearing only if the car bogs.',
              'Avoid a setup that requires panic corrections.',
            ],
          },
          {
            title: 'Weekly drift zones',
            body: 'Weekly tasks need a setup that scores quickly under restrictions. Keep a safe version before creating a sharper practice build.',
            bullets: [
              'Record car, class, assists, and route section.',
              'Use the drift calculator when the zone needs a different gear.',
              'Save a legal repeatable version before experimenting.',
            ],
          },
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This road-racing page applies it to A/S1 class grip, braking, gearing, and repeatable route testing.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 complete tuning guide',
        sourceName: 'Forza Guide',
        sourceUrl: 'https://forza.guide/fh6/tuning/',
        note: 'Used as supporting context for tuning categories. Road-racing advice remains baseline guidance until route notes and timing evidence are added.',
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
        label: 'Tune testing checklist',
        href: '/games/forza-horizon-6/guides/tune-testing-checklist',
      },
      {
        label: 'Car database',
        href: '/games/forza-horizon-6/cars',
      },
      {
        label: 'Video build and tune refresher',
        href: '/games/forza-horizon-6/guides/video-build-tune-refresher',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as the credited video reference for the beginner build-first, tune-second workflow. Apex Tune Hub turns the source topic into a 45-minute testing plan and original route-note checklist.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 tune calculator',
        sourceName: 'Apex Tune Hub',
        sourceUrl: '/tools/forza-horizon-6-tune-calculator',
        note: 'Used as the companion tool for turning a beginner symptom into copyable setup notes, route checks, and a saved preset URL.',
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
        title: 'Use a 45-minute beginner session',
        body: 'A short session is enough if it is structured. Spend the first run observing, the second run applying the calculator, and the final runs proving whether the car became easier to repeat.',
        bullets: [
          '0-10 minutes: drive the car once and write the exact problem.',
          '10-20 minutes: open the calculator, copy the baseline notes, and change only the first setting group.',
          '20-35 minutes: run the same route twice and compare entry, apex, exit, launch, or drift recovery.',
          '35-45 minutes: screenshot the car, route result, tune settings, and the visible problem moment.',
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
    deepDive: [
      {
        title: 'Beginner capture checklist',
        description:
          'Use this when recording your own FH6 footage or turning a video into a written guide. The goal is not cinematic footage. The goal is proof that the tune changed one repeatable problem.',
        cards: [
          {
            title: 'Before the run',
            body: 'Capture enough context that another player can understand the baseline.',
            bullets: [
              'Screenshot the car model, PI class, drivetrain, and event type.',
              'Write one sentence for the problem: pushes wide, snaps, spins, bogs, or hits limiter.',
              'Save the calculator preset URL before changing the setup.',
            ],
          },
          {
            title: 'During the run',
            body: 'Record the same small section instead of a whole messy session.',
            bullets: [
              'For road tuning, capture one braking zone, one apex, and one exit.',
              'For gearing, capture launch, one shift, and the longest straight.',
              'For drift, capture entry, mid-zone angle, and recovery.',
            ],
          },
          {
            title: 'After the run',
            body: 'Turn the result into data that can support a future article or member feature.',
            bullets: [
              'Mark the setup as keep, soften, or revert.',
              'Keep two screenshots and one short clip for the final article.',
              'Add the result to a saved preset or car note only if the second run repeats.',
            ],
          },
        ],
      },
      {
        title: 'What a beginner should ignore at first',
        description:
          'Most new players lose time by changing details before the basic build direction is clear.',
        cards: [
          {
            title: 'Ignore perfect meta codes',
            body: 'A meta code can be fast and still teach you nothing about why the car works.',
            bullets: [
              'Use codes as references after you know the symptom.',
              'Do not judge your first tune against leaderboard cars.',
              'Prefer a stable baseline for weekly events and learning routes.',
            ],
          },
          {
            title: 'Ignore ten-slider experiments',
            body: 'If you change every slider, you cannot tell which change helped.',
            bullets: [
              'Change one setting family after each calculator pass.',
              'Undo changes that create a new bigger problem.',
              'Keep notes shorter than the setup screen.',
            ],
          },
          {
            title: 'Ignore one lucky lap',
            body: 'A tune is useful when it repeats, not when one lap happens to be fast.',
            bullets: [
              'Run the same section twice before saving.',
              'Compare mistakes as well as lap time.',
              'Save aggressive variants only after the safe one is reliable.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'video-build-tune-refresher',
    title: 'Forza Horizon 6 Video Build and Tune Refresher - Apex Tune Hub',
    h1: 'Forza Horizon 6 video build and tune refresher',
    description:
      'A video-backed Forza Horizon 6 tuning workflow that turns a build-and-tune refresher into practical FH6 calculator steps, testing checks, and setup decisions.',
    eyebrow: 'Video guide',
    intro:
      'Use the video as a visual refresher, then make the decisions inside a repeatable workflow: choose the event, build for the route, fix one symptom, and test the same section before saving the tune.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=A&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Beginner tuning guide',
        href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
      },
      {
        label: 'Tune testing checklist',
        href: '/games/forza-horizon-6/guides/tune-testing-checklist',
      },
      {
        label: 'Gear ratio calculator',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as the credited video reference for the build-first, tune-second workflow. The written steps below convert the video topic into Apex Tune Hub calculator actions and original testing notes.',
      },
    ],
    sections: [
      {
        title: 'Watch for the build decision first',
        body: 'A tune cannot rescue the wrong build. Before moving sliders, decide whether the car needs tires, weight, brakes, drivetrain, or power for the event you are actually running.',
        bullets: [
          'Road and street builds should start with braking, rotation, and exit traction.',
          'Rally and mixed routes need suspension compliance before peak horsepower.',
          'Drift builds need a controllable power band before extreme angle settings.',
        ],
      },
      {
        title: 'Turn the video into calculator inputs',
        body: 'After the video gives you the setup idea, enter the concrete problem into the calculator: race type, drivetrain, class, handling issue, and driving style.',
        bullets: [
          'If the car pushes wide, start with understeer and a balanced road preset.',
          'If the rear steps out, use oversteer and compare safe versus aggressive notes.',
          'If the car bogs or hits limiter, switch to the gear ratio calculator before changing suspension.',
        ],
      },
      {
        title: 'Retest one route before saving',
        body: 'The fastest way to avoid placebo tuning is to repeat the same section. Make one change, run the same corners, and save only when the car becomes easier to repeat.',
        bullets: [
          'Use one braking zone, one mid-speed corner, and one slow exit as the test loop.',
          'Keep a stock or first-baseline copy so you can compare honestly.',
          'Write down the symptom that improved before chasing the next setting.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Video-backed tuning checklist',
        description:
          'Use this checklist after watching the source video so the page becomes an action plan, not just a watch note.',
        cards: [
          {
            title: 'Build pass',
            body: 'Confirm the car has the right upgrade direction for the route before touching fine tuning.',
            bullets: [
              'Pick event type and class first.',
              'Choose grip, weight, brakes, or power based on the failure point.',
              'Avoid max-power upgrades until exits are repeatable.',
            ],
          },
          {
            title: 'Tune pass',
            body: 'Move from broad balance to specific settings so every change has a job.',
            bullets: [
              'Fix tires and alignment before aero or gearing.',
              'Use differential after the car already turns and brakes cleanly.',
              'Separate road, rally, and drift presets.',
            ],
          },
          {
            title: 'Proof pass',
            body: 'Treat a tune as finished only when it repeats under pressure.',
            bullets: [
              'Run three clean attempts on the same route.',
              'Compare feel, mistakes, and time together.',
              'Save a safer weekly-event version beside the fast version.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'pc-crash-known-issues-checklist',
    title:
      'Forza Horizon 6 PC Crash and Known Issues Checklist - Apex Tune Hub',
    h1: 'Forza Horizon 6 PC crash and known issues checklist',
    description:
      'A practical FH6 PC crash and known issues checklist for stutter, launch failures, Steam or Xbox app installs, drivers, SSD space, settings, and support-ready notes.',
    eyebrow: 'PC troubleshooting',
    intro:
      'When Forza Horizon 6 crashes, stutters, or fails to launch, do not change ten things at once. Confirm requirements, storefront, storage, drivers, overlays, settings, and support notes in a repeatable order.',
    primaryCta: {
      label: 'Open PC Requirements',
      href: '/games/forza-horizon-6/pc-requirements',
    },
    relatedLinks: [
      {
        label: 'PC settings',
        href: '/settings/forza-horizon-6-pc',
      },
      {
        label: 'Steam vs Xbox app',
        href: '/games/forza-horizon-6/steam-vs-xbox-app',
      },
      {
        label: 'Official sources',
        href: '/games/forza-horizon-6/official-sources',
      },
    ],
    sections: [
      {
        title: 'Verify the basics first',
        body: 'Most bad fixes start with guessing. Record your platform, storefront, PC specs, install drive, graphics preset, driver version, and whether the issue happens before menu, during loading, or in a route.',
        bullets: [
          'Check minimum and recommended specs before changing game files.',
          'Confirm FH6 is installed on an SSD with enough free space.',
          'Write down Steam or Xbox app, Windows version, GPU, CPU, RAM, and driver version.',
        ],
      },
      {
        title: 'Separate crash, stutter, and network symptoms',
        body: 'A crash to desktop, shader stutter, low FPS, disconnect, and controller issue need different fixes. Name the symptom before changing settings.',
        bullets: [
          'Crash before menu: focus on driver, install, overlay, and storefront checks.',
          'Stutter in routes: focus on storage, shaders, VRAM pressure, and settings.',
          'Online or sync issue: record platform, account path, and cross-save behavior.',
        ],
      },
      {
        title: 'Create a support-ready note',
        body: 'If the issue survives basic checks, make the next report useful. A short note with exact hardware, storefront, error timing, and steps tried is better than a vague complaint.',
        bullets: [
          'Keep one screenshot or short clip if the problem is visible.',
          'List the last two changes you made, then stop changing settings.',
          'Use official Forza Support or feedback channels for persistent crash issues.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'PC troubleshooting order',
        description:
          'Use this order so fixes stay reversible and each test has one clear result.',
        cards: [
          {
            title: 'Storefront and install',
            body: 'Confirm whether the game is installed through Steam, Xbox app, or PC Game Pass, then verify install location and available SSD space.',
            bullets: [
              'Use the same account and storefront every time you test.',
              'Avoid moving the install and changing settings in the same test.',
              'Check whether the issue appears before or after the title screen.',
            ],
          },
          {
            title: 'Driver and overlay pass',
            body: 'Driver updates, recording overlays, performance overlays, and controller software can all change stability. Test them one at a time.',
            bullets: [
              'Record GPU driver version before updating.',
              'Disable one overlay, test, then write the result.',
              'Do not keep a fix if it does not change the symptom.',
            ],
          },
          {
            title: 'Settings and preset pass',
            body: 'If the game launches but feels unstable, use a lower preset and stable frame target before tuning individual graphics settings.',
            bullets: [
              'Start with the PC settings page instead of random toggles.',
              'Reduce VRAM pressure before changing car or controller settings.',
              'Keep a baseline screenshot of settings that did not crash.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'tuning-glossary-setup-terms',
    title: 'Forza Horizon 6 Tuning Glossary and Setup Terms - Apex Tune Hub',
    h1: 'Forza Horizon 6 tuning glossary and setup terms',
    description:
      'Forza Horizon 6 tuning glossary for PI class, tire pressure, camber, toe, anti-roll bars, damping, differential, aero, gearing, brake balance, and setup testing terms.',
    eyebrow: 'Tuning glossary',
    intro:
      'A tuning glossary helps you stop guessing what each FH6 setup word means. Use it as a translation layer between player symptoms, calculator recommendations, and the specific slider guide you should open next.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Beginner tuning guide',
        href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
      },
      {
        label: 'Tuning settings hub',
        href: '/games/forza-horizon-6/tuning-settings',
      },
      {
        label: 'Upgrade order guide',
        href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a broad tuning vocabulary reference. This glossary maps the workflow terms to Apex Tune Hub calculators and symptom guides.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 tuning guide',
        sourceName: 'HokiHoshi',
        sourceUrl: 'https://hokihoshi.com/forza-horizon-6/tuning/',
        note: 'Used as supporting context for setup terminology. The glossary avoids turning any one slider definition into a universal FH6 value.',
      },
    ],
    sections: [
      {
        title: 'Translate symptoms before sliders',
        body: 'Most useful tuning starts with a plain-language symptom. Understeer, oversteer, wheelspin, unstable braking, slow launch, and poor top speed all point to different setup terms.',
        bullets: [
          'Understeer usually means front grip or rotation is missing.',
          'Oversteer usually means the rear is rotating faster than you can catch.',
          'Wheelspin usually means throttle, gearing, tire, or differential work is needed.',
        ],
      },
      {
        title: 'Learn the main setup families',
        body: 'Tire pressure, alignment, anti-roll bars, springs, damping, differential, aero, gearing, and brakes each solve a different kind of problem. Do not tune them all at once.',
        bullets: [
          'Use tires and alignment for grip shape and contact patch feel.',
          'Use ARBs, springs, and damping for weight transfer and body behavior.',
          'Use differential, gearing, and brakes for exit, launch, speed, and stopping balance.',
        ],
      },
      {
        title: 'Tie every term to a test route',
        body: 'A setup term is useful only when you can feel the change on a route. Match each glossary term to one repeatable test section before saving a preset.',
        bullets: [
          'Use hairpins for braking, rotation, and first-gear exits.',
          'Use sweepers for aero, stability, and mid-corner balance.',
          'Use rough or mixed routes for damping, springs, and rally behavior.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Common tuning terms by problem',
        description:
          'Use this map to decide which guide or calculator path should come next.',
        cards: [
          {
            title: 'Grip and rotation terms',
            body: 'Camber, toe, caster, tire pressure, ARBs, springs, and aero affect how the car points and holds grip.',
            bullets: [
              'Use alignment terms when corner entry or mid-corner grip feels wrong.',
              'Use ARB and spring terms when body roll or balance changes too much.',
              'Use aero terms when speed changes the car behavior.',
            ],
          },
          {
            title: 'Power delivery terms',
            body: 'Differential, final drive, gear spacing, tire compound, and drivetrain decide how power reaches the road.',
            bullets: [
              'Use differential terms for corner exit and throttle rotation.',
              'Use gearing terms for launch, acceleration, and top speed.',
              'Use drivetrain terms when AWD, RWD, or FWD changes the build identity.',
            ],
          },
          {
            title: 'Testing and class terms',
            body: 'PI class, restrictions, event type, surface, route, and preset naming keep setup decisions organized.',
            bullets: [
              'Use PI class before buying upgrades.',
              'Use event type before choosing tire and drivetrain spend.',
              'Use preset notes so one good fix can be reused later.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'tune-testing-checklist',
    title: 'Forza Horizon 6 Tune Testing Checklist - Apex Tune Hub',
    h1: 'Forza Horizon 6 tune testing checklist',
    description:
      'Forza Horizon 6 tune testing checklist for repeatable routes, one-change testing, baseline notes, handling symptoms, controller settings, wheel settings, and preset validation.',
    eyebrow: 'Tune testing',
    intro:
      'A tune is only useful if you can repeat the result. Use this FH6 tune testing checklist to lock the car, route, assists, input device, and weather before deciding whether a setup change actually helped.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Beginner tuning guide',
        href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
      },
      {
        label: 'Tuning glossary',
        href: '/games/forza-horizon-6/guides/tuning-glossary-setup-terms',
      },
      {
        label: 'Weekly playlist checklist',
        href: '/games/forza-horizon-6/guides/weekly-playlist-tuning-checklist',
      },
    ],
    sections: [
      {
        title: 'Lock the baseline before changing sliders',
        body: 'Choose one car, class, route, camera, assist profile, input device, and weather condition before touching setup values. If the baseline moves, the test result becomes noise.',
        bullets: [
          'Save the original preset before the first change.',
          'Write down class, drivetrain, tire compound, and event type.',
          'Use the same route section for every comparison.',
        ],
      },
      {
        title: 'Change one setup family at a time',
        body: 'Good tune testing separates tires, alignment, ARBs, damping, differential, gearing, aero, and brakes. A car can feel better for the wrong reason if three groups change together.',
        bullets: [
          'Use one handling symptom as the target for each pass.',
          'Retest after one setup family, then write the result.',
          'Undo the change if it creates a bigger problem somewhere else.',
        ],
      },
      {
        title: 'Validate with a second job',
        body: 'A setup that feels good on one corner can fail in traffic, rough surfaces, or weekly restrictions. Keep one second test job before calling the tune reusable.',
        bullets: [
          'Use a braking zone, a corner exit, and one fast section.',
          'Use a rough or wet route if the car will run weekly events.',
          'Save safe and aggressive versions when both have a purpose.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Tune testing decision paths',
        description:
          'Use these paths to decide whether the next test belongs to the car tune, player settings, or event plan.',
        cards: [
          {
            title: 'Every car feels worse',
            body: 'If every car feels delayed, twitchy, or hard to read, test settings before car setup.',
            bullets: [
              'Check controller, wheel, camera, assists, and FPS first.',
              'Use one stable car to retest global feel.',
              'Return to the tune only after input feel is stable.',
            ],
          },
          {
            title: 'One car has one symptom',
            body: 'If one car understeers, oversteers, spins, brakes badly, or runs out of gear, tune the specific symptom.',
            bullets: [
              'Pick the matching handling guide or calculator issue.',
              'Change one setup family and repeat the same section.',
              'Keep the result only if it helps twice.',
            ],
          },
          {
            title: 'The event changes the answer',
            body: 'A tune can pass free-roam testing but fail a restricted event. Add event constraints before saving the final note.',
            bullets: [
              'Record class, car type, surface, route, and objective.',
              'Retest with traffic or co-op risk if needed.',
              'Save a weekly-safe preset when consistency beats pace.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'fix-low-fps-stutter',
    title: 'How to Fix Low FPS and Stutter in Forza Horizon 6 - Apex Tune Hub',
    h1: 'How to fix low FPS and stutter in Forza Horizon 6',
    description:
      'Forza Horizon 6 low FPS and stutter checklist for PC players covering SSD install, VRAM pressure, graphics presets, frame pacing, drivers, overlays, and Steam Deck tradeoffs.',
    eyebrow: 'Performance fix',
    intro:
      'Low FPS and stutter need a different process than car tuning. Stabilize the game first: confirm SSD install, lower VRAM pressure, set a repeatable frame target, and test one graphics change at a time.',
    primaryCta: {
      label: 'Open PC Settings',
      href: '/settings/forza-horizon-6-pc',
    },
    relatedLinks: [
      {
        label: 'PC requirements',
        href: '/games/forza-horizon-6/pc-requirements',
      },
      {
        label: 'Steam Deck settings',
        href: '/settings/forza-horizon-6-steam-deck',
      },
      {
        label: 'PC crash checklist',
        href: '/games/forza-horizon-6/guides/pc-crash-known-issues-checklist',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 PC Specs',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/50088215399827-Forza-Horizon-6-PC-Specs',
        note: 'Used as the official PC baseline before diagnosing low FPS, VRAM pressure, storage, or graphics preset issues.',
      },
      {
        type: 'article',
        title: 'FH6 Known Issues and Bug Reporting',
        sourceName: 'Forza Forums',
        sourceUrl:
          'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
        note: 'Used as a known-issues checkpoint before treating stutter or frame pacing as only a local graphics setting problem.',
      },
    ],
    sections: [
      {
        title: 'Start with storage and frame target',
        body: 'FH6 needs a stable storage path and repeatable FPS target before fine tuning. If the game is fighting the drive or chasing an unstable cap, every car feels worse.',
        bullets: [
          'Confirm the game is installed on an SSD, not a slow external drive.',
          'Pick one FPS target and test the same route with the same weather.',
          'Avoid changing resolution, preset, and frame cap in the same pass.',
        ],
      },
      {
        title: 'Reduce VRAM and shader pressure',
        body: 'Stutter often appears when the graphics preset asks more from the GPU or memory than the system can deliver consistently.',
        bullets: [
          'Lower texture, shadow, reflection, and environment-heavy settings first.',
          'Watch whether stutter appears during fast driving, map transitions, or dense city scenes.',
          'Use the PC settings page as the baseline before editing advanced toggles.',
        ],
      },
      {
        title: 'Check overlays and drivers last',
        body: 'Recording overlays, performance counters, GPU software, and driver changes can affect frame pacing. Test these only after the base settings are stable.',
        bullets: [
          'Disable one overlay at a time and record the result.',
          'Write down GPU driver version before updating.',
          'Keep the change only if the same route feels smoother twice.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Stutter diagnosis paths',
        description:
          'Use the symptom timing to decide what to test next instead of changing random settings.',
        cards: [
          {
            title: 'Stutter during fast driving',
            body: 'Fast traversal can expose streaming, texture, and storage pressure. Start with SSD, texture, and environment settings.',
            bullets: [
              'Use one long fast route as the repeatable test.',
              'Lower texture and environment detail before changing car settings.',
              'Retest after a full restart if the first run was shader-heavy.',
            ],
          },
          {
            title: 'Stutter in dense areas',
            body: 'City and traffic-heavy scenes can expose CPU, crowd, shadow, reflection, and frame pacing limits.',
            bullets: [
              'Test the same city loop with a capped frame rate.',
              'Reduce reflections and shadows before changing resolution.',
              'Compare average FPS with frame-time feel.',
            ],
          },
          {
            title: 'Steam Deck or handheld dips',
            body: 'Handheld performance is a power and heat tradeoff. A stable lower FPS target usually feels better than an unstable high target.',
            bullets: [
              'Use handheld settings instead of desktop presets.',
              'Treat battery life, heat, and readability as part of the tune.',
              'Use one route to compare performance and input feel.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'wheel-not-working-checklist',
    title: 'Forza Horizon 6 Wheel Not Working Checklist - Apex Tune Hub',
    h1: 'Forza Horizon 6 wheel not working checklist',
    description:
      'A Forza Horizon 6 wheel not working checklist for Logitech, Thrustmaster, Fanatec, Moza, direct drive wheels, force feedback, rotation, deadzones, profiles, and storefront testing.',
    eyebrow: 'Wheel troubleshooting',
    intro:
      'When a wheel feels dead, reversed, too light, or unrecognized in FH6, separate hardware detection from force feedback feel. Confirm the wheel works outside the game before changing every in-game slider.',
    primaryCta: {
      label: 'Open Wheel Settings',
      href: '/settings/forza-horizon-6-wheel',
    },
    relatedLinks: [
      {
        label: 'Logitech wheel settings',
        href: '/games/forza-horizon-6/guides/logitech-wheel-settings',
      },
      {
        label: 'Thrustmaster wheel settings',
        href: '/games/forza-horizon-6/guides/thrustmaster-wheel-settings',
      },
      {
        label: 'Fanatec and Moza settings',
        href: '/games/forza-horizon-6/guides/fanatec-moza-wheel-settings',
      },
    ],
    sections: [
      {
        title: 'Confirm hardware detection',
        body: 'The first question is whether Windows and the wheel software see the device correctly. If the wheel is not detected outside FH6, game settings will not fix it.',
        bullets: [
          'Check wheel base, pedals, shifter, power, USB port, and firmware utility.',
          'Avoid hubs or extension cables during the first test.',
          'Confirm the wheel responds in its own control panel before launching FH6.',
        ],
      },
      {
        title: 'Reset the in-game profile calmly',
        body: 'If FH6 sees the wheel but inputs feel wrong, rebuild the profile in small steps: steering, pedals, buttons, force feedback, then advanced feel.',
        bullets: [
          'Map steering and pedals before tuning force feedback.',
          'Set rotation and deadzones before judging car handling.',
          'Save one baseline profile before changing brand-specific settings.',
        ],
      },
      {
        title: 'Separate FFB feel from car tune',
        body: 'Weak force feedback, oscillation, clipping, and steering delay are device setup problems first. Do not retune cars until the same baseline car feels consistent.',
        bullets: [
          'Use one car and one road loop for every wheel test.',
          'Reduce force feedback strength if clipping or oscillation dominates.',
          'Use brand-specific wheel guides after the generic wheel profile works.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Wheel issue decision paths',
        description:
          'Different wheel symptoms point to different fixes. Keep them separate so a setup problem does not become a fake car-tune problem.',
        cards: [
          {
            title: 'Wheel not detected',
            body: 'Treat this as hardware or driver detection first. FH6 settings matter only after Windows and the wheel utility see the device.',
            bullets: [
              'Try a direct USB port and restart the wheel base.',
              'Open the wheel utility before launching the game.',
              'Record wheel model and firmware if support is needed.',
            ],
          },
          {
            title: 'Pedals or steering reversed',
            body: 'This is usually a mapping or profile issue. Rebind inputs and test the raw axis before judging force feedback.',
            bullets: [
              'Check pedal axis direction in the wheel utility.',
              'Map one input at a time in FH6.',
              'Save the profile before changing advanced settings.',
            ],
          },
          {
            title: 'Force feedback feels wrong',
            body: 'FFB issues need a baseline car and loop. Tune strength, damping, rotation, and deadzones before adjusting the car.',
            bullets: [
              'Use the same road loop for every FFB change.',
              'Lower strength if the wheel clips or oscillates.',
              'Move to brand-specific guides after basic control is stable.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-pc-graphics-settings',
    title: 'Best PC Graphics Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best PC graphics settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 PC graphics settings guide for balanced FPS, VRAM pressure, texture quality, shadows, reflections, frame caps, upscaling, and route testing.',
    eyebrow: 'PC graphics',
    intro:
      'The best FH6 PC graphics settings are the ones that keep frame time stable on the route you actually drive. Start with a balanced preset, protect VRAM, cap FPS sensibly, then raise visual settings one group at a time.',
    primaryCta: {
      label: 'Open PC Settings',
      href: '/settings/forza-horizon-6-pc',
    },
    relatedLinks: [
      {
        label: 'PC requirements',
        href: '/games/forza-horizon-6/pc-requirements',
      },
      {
        label: 'Low FPS and stutter',
        href: '/games/forza-horizon-6/guides/fix-low-fps-stutter',
      },
      {
        label: 'Steam vs Xbox app',
        href: '/games/forza-horizon-6/steam-vs-xbox-app',
      },
    ],
    sections: [
      {
        title: 'Choose stability before ultra',
        body: 'A pretty preset is not useful if the car stutters through traffic, city corners, or fast route transitions. Use stable frame time as the first win condition.',
        bullets: [
          'Pick a target FPS your PC can hold on a busy route, not only in a quiet menu.',
          'Use a lower preset first, then raise one visual group after each clean test.',
          'Avoid mixing resolution, upscaling, texture, and frame-cap changes in one pass.',
        ],
      },
      {
        title: 'Protect VRAM and streaming',
        body: 'Textures, reflections, shadows, and environment detail are usually the first graphics groups to check when stutter appears during fast driving.',
        bullets: [
          'Lower texture quality if stutter appears after long driving or map transitions.',
          'Reduce reflections and shadows before blaming the car or controller.',
          'Keep the install on SSD and leave free space for updates and shader work.',
        ],
      },
      {
        title: 'Test graphics like a tune',
        body: 'Graphics settings need repeatable testing just like car settings. Use one route, one weather condition, and one camera view before deciding a setting is safe.',
        bullets: [
          'Use a dense city loop for CPU, shadow, and reflection checks.',
          'Use a fast road route for streaming and texture checks.',
          'Use the same frame cap while comparing visual settings.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Graphics setting priority order',
        description:
          'Use this order when a PC can run FH6 but does not feel smooth enough for clean driving.',
        cards: [
          {
            title: 'First pass: frame target',
            body: 'Set a frame target that feels stable before chasing a higher number. A locked lower target can feel better than an unstable high target.',
            bullets: [
              'Test in the same car and route every time.',
              'Do not judge settings from the menu or photo mode.',
              'Record whether the issue is low FPS, stutter, or input delay.',
            ],
          },
          {
            title: 'Second pass: heavy visuals',
            body: 'Adjust textures, shadows, reflections, and environment detail before changing every advanced setting.',
            bullets: [
              'Lower one visual group, drive the same route, then decide.',
              'Watch for improvements in frame pacing, not just average FPS.',
              'Keep a screenshot of the stable baseline.',
            ],
          },
          {
            title: 'Third pass: platform checks',
            body: 'Steam, Xbox app, Game Pass, overlays, and handheld mode can change the troubleshooting path.',
            bullets: [
              'Record storefront before comparing advice.',
              'Disable one overlay at a time.',
              'Use Steam Deck settings for handheld targets instead of desktop presets.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'controller-not-working-checklist',
    title: 'Forza Horizon 6 Controller Not Working Checklist - Apex Tune Hub',
    h1: 'Forza Horizon 6 controller not working checklist',
    description:
      'Forza Horizon 6 controller not working checklist for Xbox, PlayStation, Steam Input, Bluetooth, USB, deadzones, double input, vibration, and steering feel.',
    eyebrow: 'Controller troubleshooting',
    intro:
      'When a controller does not work in FH6, first decide whether the issue is detection, double input, wireless latency, deadzone drift, or steering feel. Fix the input path before changing car tunes.',
    primaryCta: {
      label: 'Open Controller Settings',
      href: '/settings/forza-horizon-6-controller',
    },
    relatedLinks: [
      {
        label: 'Controller drift settings',
        href: '/games/forza-horizon-6/guides/controller-drift-settings',
      },
      {
        label: 'Steam vs Xbox app',
        href: '/games/forza-horizon-6/steam-vs-xbox-app',
      },
      {
        label: 'Crossplay and cross-save',
        href: '/games/forza-horizon-6/crossplay-cross-save',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 Known Issues',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51701860097811-Forza-Horizon-6-Known-Issues',
        note: 'Used as an official support checkpoint before treating controller detection, wireless latency, or input routing as a local settings problem.',
      },
      {
        type: 'article',
        title: 'FH6 Known Issues and Bug Reporting',
        sourceName: 'Forza Forums',
        sourceUrl:
          'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
        note: 'Used as a known-issues reference so players can separate platform/controller problems from car tuning symptoms.',
      },
    ],
    sections: [
      {
        title: 'Confirm the controller path',
        body: 'A controller can be routed through USB, Bluetooth, Xbox app, Steam Input, or platform software. Write down the path before changing bindings.',
        bullets: [
          'Test wired USB first if Bluetooth feels delayed or drops input.',
          'Check whether Steam Input is creating a second layer of mappings.',
          'Use one controller at a time while debugging detection.',
        ],
      },
      {
        title: 'Fix double input and deadzones',
        body: 'Double input, menu jumping, or steering drift usually points to mapping layers or deadzone settings rather than a bad car setup.',
        bullets: [
          'Disable duplicate input layers before changing FH6 bindings.',
          'Increase inner deadzone only enough to stop drift.',
          'Retest steering and throttle on the same road section.',
        ],
      },
      {
        title: 'Tune feel after detection works',
        body: 'Once the controller is detected cleanly, tune steering response, vibration, and trigger feel before blaming every car for understeer or wheelspin.',
        bullets: [
          'Use a stable road car to judge steering feel.',
          'Use a low-power drift car to judge throttle control.',
          'Save a baseline controller profile before experimenting.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Controller issue decision paths',
        description:
          'Use the symptom to decide whether to fix the platform path, controller settings, or the car tune.',
        cards: [
          {
            title: 'Controller not detected',
            body: 'Treat this as a platform or connection issue first. Verify USB, Bluetooth, Steam Input, Xbox app, and controller firmware before changing FH6 settings.',
            bullets: [
              'Try wired USB before testing wireless again.',
              'Close duplicate controller software if inputs conflict.',
              'Record controller model and storefront for support notes.',
            ],
          },
          {
            title: 'Menu jumps or double input',
            body: 'Double input usually means two mapping layers are active. Simplify the input path before rebinding controls.',
            bullets: [
              'Check Steam Input and platform overlay settings.',
              'Use one controller only during testing.',
              'Retest the menu before driving a route.',
            ],
          },
          {
            title: 'Car feels twitchy or delayed',
            body: 'If detection works but driving feels wrong, tune controller response separately from the car tune.',
            bullets: [
              'Check steering deadzone and linearity first.',
              'Compare wired and wireless latency feel.',
              'Use controller drift settings only after basic control is stable.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-keyboard-settings',
    title: 'Best Keyboard Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best keyboard settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 keyboard settings guide for steering control, throttle tapping, braking, manual shifting, keybinds, input delay, and when to switch to controller or wheel.',
    eyebrow: 'Keyboard settings',
    intro:
      'Keyboard can work in FH6, but it needs a different mindset from controller or wheel. Treat steering, throttle, and braking as timed inputs, then build safer tunes that do not punish every tap.',
    primaryCta: {
      label: 'Open Controller Settings',
      href: '/settings/forza-horizon-6-controller',
    },
    relatedLinks: [
      {
        label: 'Controller not working',
        href: '/games/forza-horizon-6/guides/controller-not-working-checklist',
      },
      {
        label: 'Beginner tuning',
        href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
      },
      {
        label: 'Fix wheelspin',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 Known Issues',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51701860097811-Forza-Horizon-6-Known-Issues',
        note: 'Used as an official checkpoint before blaming keyboard response, frame pacing, or input delay on the car tune.',
      },
      {
        type: 'article',
        title: 'FH6 Known Issues and Bug Reporting',
        sourceName: 'Forza Forums',
        sourceUrl:
          'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
        note: 'Used as a known-issues reference for separating platform input behavior from keyboard driving technique.',
      },
    ],
    sections: [
      {
        title: 'Use smoother cars first',
        body: 'Keyboard turns digital inputs into abrupt steering and throttle changes. Start with stable A or S1 road cars before trying nervous high-power builds.',
        bullets: [
          'Avoid max-power RWD builds until throttle tapping feels controlled.',
          'Use AWD or balanced road tunes when learning a new route.',
          'Keep steering and braking tests on the same technical road section.',
        ],
      },
      {
        title: 'Build keybinds around repeatability',
        body: 'A good keyboard layout puts shifting, look-back, handbrake, rewind, and camera controls where they do not interrupt steering or throttle rhythm.',
        bullets: [
          'Keep handbrake and shifting reachable without leaving steering keys.',
          'Use manual shifting only after braking and throttle inputs feel repeatable.',
          'Do not change keybinds and car tune in the same test run.',
        ],
      },
      {
        title: 'Tune around digital throttle',
        body: 'Keyboard wheelspin and understeer often come from on/off inputs. Use differential, gearing, and tire choices to make throttle taps less dramatic.',
        bullets: [
          'Lengthen first gear if launch spin is hard to control.',
          'Use safer differential settings before adding more horsepower.',
          'Prefer consistent exits over one aggressive top-speed build.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Keyboard driving decision paths',
        description:
          'Use the problem you feel to decide whether to change keybinds, input rhythm, or the car tune.',
        cards: [
          {
            title: 'Car snaps on corner exit',
            body: 'The tune is not forgiving enough for digital throttle. Fix gearing, differential, and power delivery before blaming the keyboard.',
            bullets: [
              'Test half-second throttle taps on the same exit.',
              'Lengthen lower gears if the car instantly spins.',
              'Use a lower class until exits become repeatable.',
            ],
          },
          {
            title: 'Steering feels too sharp',
            body: 'Keyboard steering is binary, so the car needs stable front response and predictable rotation.',
            bullets: [
              'Use a calmer road tune before chasing leaderboard response.',
              'Avoid extreme alignment changes on keyboard starter builds.',
              'Practice short taps instead of holding full steering lock.',
            ],
          },
          {
            title: 'Manual shifting feels crowded',
            body: 'If shifting steals attention from braking and steering, simplify until core driving is clean.',
            bullets: [
              'Use automatic while learning a route.',
              'Move shift keys only after steering keys feel natural.',
              'Use gear ratio pages after manual input feels stable.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'controller-deadzone-settings',
    title:
      'Best Controller Deadzone Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best controller deadzone settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 controller deadzone settings guide for steering drift, throttle triggers, brake input, vibration feel, drift recovery, and repeatable road testing.',
    eyebrow: 'Controller deadzones',
    intro:
      'Deadzones should remove noise without making FH6 feel numb. Start with the smallest inner deadzone that stops drift, protect full trigger range, then test steering, throttle, and braking on the same route before tuning the car.',
    primaryCta: {
      label: 'Open Controller Settings',
      href: '/settings/forza-horizon-6-controller',
    },
    relatedLinks: [
      {
        label: 'Controller not working',
        href: '/games/forza-horizon-6/guides/controller-not-working-checklist',
      },
      {
        label: 'Input lag settings',
        href: '/games/forza-horizon-6/guides/input-lag-settings',
      },
      {
        label: 'Controller drift settings',
        href: '/games/forza-horizon-6/guides/controller-drift-settings',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 Known Issues',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51701860097811-Forza-Horizon-6-Known-Issues',
        note: 'Used as an official update reference before diagnosing stick drift, trigger behavior, or deadzone feel as a local-only issue.',
      },
      {
        type: 'article',
        title: 'FH6 Known Issues and Bug Reporting',
        sourceName: 'Forza Forums',
        sourceUrl:
          'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
        note: 'Used as a known-issues checkpoint before changing controller deadzones or car tuning around temporary input symptoms.',
      },
    ],
    sections: [
      {
        title: 'Fix stick drift before tuning cars',
        body: 'If the steering input moves while the stick is centered, every car will feel nervous. Raise the inner deadzone only until the drift stops, then retest a stable road car.',
        bullets: [
          'Use the smallest inner deadzone that keeps the steering centered.',
          'Do not hide a bad controller by making the steering too numb.',
          'Retest the same car before changing alignment or anti-roll bars.',
        ],
      },
      {
        title: 'Protect throttle and brake range',
        body: 'Trigger deadzones can make launches, trail braking, and corner exits feel inconsistent. Check that throttle and brake reach full input without activating too early.',
        bullets: [
          'If exits feel abrupt, adjust trigger feel before changing gearing.',
          'If braking feels late, compare trigger range and frame pacing.',
          'Keep deadzone and assist changes separate during testing.',
        ],
      },
      {
        title: 'Use one route for every pass',
        body: 'Deadzone settings need a repeatable route just like car tuning. Use one road loop, one drift section, and one braking zone to decide whether the controller or the tune is the real issue.',
        bullets: [
          'Use a road loop for steering and braking confidence.',
          'Use a drift section for countersteer recovery and throttle control.',
          'Move to tuning only when every car no longer feels wrong.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Deadzone symptom paths',
        description:
          'Use these checks to separate controller noise from tune problems before changing car setup.',
        cards: [
          {
            title: 'Car wanders on straights',
            body: 'This usually points to stick drift, steering deadzone, or controller hardware before it points to alignment.',
            bullets: [
              'Center the stick and watch for input movement.',
              'Raise inner deadzone in small steps.',
              'Retest before changing toe or camber.',
            ],
          },
          {
            title: 'Launch feels abrupt',
            body: 'Trigger response can create fake wheelspin problems when throttle input jumps too quickly.',
            bullets: [
              'Check throttle range before editing final drive.',
              'Compare wired and wireless controller feel.',
              'Use wheelspin tuning only if one car still spins.',
            ],
          },
          {
            title: 'Drift recovery feels delayed',
            body: 'Too much steering deadzone can make countersteer late, while too little can create unwanted twitch.',
            bullets: [
              'Test a known drift section after each small change.',
              'Keep camera and assists unchanged while comparing.',
              'Use controller drift settings after the deadzone is stable.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'cloud-save-not-syncing',
    title: 'Forza Horizon 6 Cloud Save Not Syncing Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 cloud save not syncing guide',
    description:
      'Forza Horizon 6 cloud save not syncing guide for Xbox, Xbox app on PC, Steam, Steam Deck, Game Pass, platform switching, DLC ownership, and support-ready notes.',
    eyebrow: 'Cloud save',
    intro:
      'Cloud-save problems are platform problems before they are tuning problems. Slow down, identify the storefront, wait for sync prompts, avoid overwriting progress, and record what changed before opening the game on another device.',
    primaryCta: {
      label: 'Open Cross-Save Guide',
      href: '/games/forza-horizon-6/crossplay-cross-save',
    },
    relatedLinks: [
      {
        label: 'Steam vs Xbox app',
        href: '/games/forza-horizon-6/steam-vs-xbox-app',
      },
      {
        label: 'Game Pass and editions',
        href: '/games/forza-horizon-6/game-pass-editions',
      },
      {
        label: 'PC crash checklist',
        href: '/games/forza-horizon-6/guides/pc-crash-known-issues-checklist',
      },
    ],
    sections: [
      {
        title: 'Do not rush past sync prompts',
        body: 'The riskiest moment is opening FH6 on a second device and clicking through a cloud-save prompt without reading it. Stop and confirm which save is newer.',
        bullets: [
          'Check the last played device and platform before launching somewhere else.',
          'Do not overwrite cloud data if the prompt does not match your expected progress.',
          'Avoid switching devices immediately after a crash or forced shutdown.',
        ],
      },
      {
        title: 'Separate save sync from ownership',
        body: 'Progress syncing does not automatically mean every DLC, add-on, subscription, or storefront purchase follows the same path.',
        bullets: [
          'Record whether you are using Steam, Xbox app, PC Game Pass, or console.',
          'Check edition and DLC ownership before assuming missing content is a save bug.',
          'Use the Game Pass and editions page if add-ons are the confusing part.',
        ],
      },
      {
        title: 'Create a clean support note',
        body: 'If progress does not appear, write down the devices, storefronts, account, last known progress, sync prompt wording, and what changed before the issue.',
        bullets: [
          'Include whether the issue followed a crash, reinstall, offline session, or platform switch.',
          'Record if the problem is missing progress, missing DLC, or missing settings.',
          'Keep testing narrow until official support or platform sync resolves it.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Cloud save decision paths',
        description:
          'Use the symptom to decide whether this is a sync delay, platform mismatch, ownership issue, or support case.',
        cards: [
          {
            title: 'Progress missing on a second device',
            body: 'Treat this as a sync-timing issue first. Check the last device, cloud prompt, and account before launching repeatedly.',
            bullets: [
              'Confirm the same account is signed in.',
              'Wait before forcing another launch on the second device.',
              'Avoid overwriting if the cloud prompt looks wrong.',
            ],
          },
          {
            title: 'DLC or cars missing',
            body: 'This may be ownership or edition access, not save loss. Compare storefront and add-on ownership before assuming the save failed.',
            bullets: [
              'Check whether the missing item is tied to an edition or add-on.',
              'Compare Steam and Xbox app purchase paths carefully.',
              'Use Game Pass wording separately from permanent ownership.',
            ],
          },
          {
            title: 'Settings changed but progress is intact',
            body: 'Settings sync and save progress can feel like the same problem but need different notes.',
            bullets: [
              'Record graphics, controller, wheel, and accessibility changes separately.',
              'Save screenshots of important settings before switching devices.',
              'Use device settings pages if only input or graphics changed.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'online-not-working-checklist',
    title: 'Forza Horizon 6 Online Not Working Checklist - Apex Tune Hub',
    h1: 'Forza Horizon 6 online not working checklist',
    description:
      'Forza Horizon 6 online not working checklist for matchmaking, convoys, crossplay, account sign-in, NAT, server status, platform services, and support notes.',
    eyebrow: 'Online checklist',
    intro:
      'Online issues are easiest to solve when you separate the game, account, network, and platform layers. Check each layer once, keep notes, then avoid changing ten settings at the same time.',
    primaryCta: {
      label: 'Open Crossplay Guide',
      href: '/games/forza-horizon-6/crossplay-cross-save',
    },
    relatedLinks: [
      {
        label: 'Cloud save guide',
        href: '/games/forza-horizon-6/guides/cloud-save-not-syncing',
      },
      {
        label: 'Steam vs Xbox app',
        href: '/games/forza-horizon-6/steam-vs-xbox-app',
      },
      {
        label: 'PC crash checklist',
        href: '/games/forza-horizon-6/guides/pc-crash-known-issues-checklist',
      },
    ],
    sections: [
      {
        title: 'Check account and platform first',
        body: 'If FH6 cannot reach online features, confirm the account and storefront path before changing router settings or reinstalling the game.',
        bullets: [
          'Confirm the same account is signed in on the game, platform app, and console or PC.',
          'Check whether the issue affects only FH6 or other online games too.',
          'Record any exact error text before restarting services.',
        ],
      },
      {
        title: 'Separate matchmaking from convoy problems',
        body: 'A public matchmaking failure and a convoy invite failure can point to different causes. Keep those symptoms separate when testing.',
        bullets: [
          'Test solo online features before testing a convoy invite.',
          'Ask one friend on a different platform to test crossplay separately.',
          'Do not mix crossplay testing with save-sync or DLC ownership issues.',
        ],
      },
      {
        title: 'Make network changes one at a time',
        body: 'Network troubleshooting becomes messy if NAT, DNS, VPN, firewall, router, and device restarts all change in one pass.',
        bullets: [
          'Disable VPN or proxy tools for one clean test.',
          'Try wired Ethernet or a stable Wi-Fi band before changing advanced router settings.',
          'Write down the exact step that changes the result.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Online issue decision paths',
        description:
          'Use the symptom to decide whether to focus on account access, platform service health, network routing, or crossplay behavior.',
        cards: [
          {
            title: 'Online menu unavailable',
            body: 'Treat this as account, entitlement, or service availability first. Verify sign-in and platform services before changing car settings or device inputs.',
            bullets: [
              'Check account sign-in on the storefront and platform app.',
              'Compare FH6 with another online game on the same device.',
              'Save error codes or screenshots for support.',
            ],
          },
          {
            title: 'Convoy invite fails',
            body: 'Convoy problems often involve friend list, privacy, crossplay, or session state. Test public online first, then private invites.',
            bullets: [
              'Confirm both players can reach online features separately.',
              'Test same-platform and cross-platform invites separately.',
              'Restart the game only after recording the first error.',
            ],
          },
          {
            title: 'Connection drops mid-event',
            body: 'Mid-event drops are more likely to involve connection stability, VPNs, Wi-Fi, or background network tools.',
            bullets: [
              'Use wired Ethernet for one baseline test if available.',
              'Close download clients and overlays during testing.',
              'Keep NAT and firewall changes narrow and reversible.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'input-lag-settings',
    title: 'Forza Horizon 6 Input Lag Settings Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 input lag settings guide',
    description:
      'Forza Horizon 6 input lag settings guide for controller, wheel, keyboard, display mode, FPS caps, VSync, wireless latency, overlays, and response testing.',
    eyebrow: 'Input lag',
    intro:
      'Input lag can feel like bad tuning, but the first fix is usually display, frame pacing, controller path, or wheel software. Build one repeatable test route before changing the car.',
    primaryCta: {
      label: 'Open PC Settings',
      href: '/settings/forza-horizon-6-pc',
    },
    relatedLinks: [
      {
        label: 'Low FPS and stutter',
        href: '/games/forza-horizon-6/guides/fix-low-fps-stutter',
      },
      {
        label: 'Controller not working',
        href: '/games/forza-horizon-6/guides/controller-not-working-checklist',
      },
      {
        label: 'Wheel not working',
        href: '/games/forza-horizon-6/guides/wheel-not-working-checklist',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 Known Issues',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51701860097811-Forza-Horizon-6-Known-Issues',
        note: 'Used as an official support reference for separating game update and performance issues from car tuning problems. Apply the page workflow only after confirming the local input path is stable.',
      },
      {
        type: 'article',
        title: 'FH6 Known Issues and Bug Reporting',
        sourceName: 'Forza Forums',
        sourceUrl:
          'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
        note: 'Used as a known-issues checkpoint before blaming controller, wheel, display, or tune settings for delayed response.',
      },
    ],
    sections: [
      {
        title: 'Rule out frame pacing first',
        body: 'A car that reacts late may be suffering from inconsistent frame delivery rather than a bad setup. Stabilize FPS before changing alignment or differential settings.',
        bullets: [
          'Use the low FPS guide if the lag appears with stutter or hitching.',
          'Test one display mode, FPS cap, and VSync setting at a time.',
          'Avoid judging input feel during shader compilation or background downloads.',
        ],
      },
      {
        title: 'Test wired input paths',
        body: 'Wireless controllers, wheels, Bluetooth keyboards, and dongles can add variables. Run one wired baseline before deciding the tune is wrong.',
        bullets: [
          'Compare wired and wireless controller feel on the same route.',
          'Plug wheel bases directly into the PC instead of a hub for testing.',
          'Keep keyboard repeat rate and controller deadzones unchanged during the test.',
        ],
      },
      {
        title: 'Use one short response route',
        body: 'Pick a short route with braking, steering, and throttle transitions. Repeat it after each change so the result is not just route memory or traffic noise.',
        bullets: [
          'Use the same car, camera, assist set, route, and weather.',
          'Change display/input settings before changing car tuning.',
          'Move to the tune calculator only after input response feels stable.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Input lag decision paths',
        description:
          'Use the feel of the delay to decide whether to tune display settings, controller path, wheel software, or car behavior.',
        cards: [
          {
            title: 'Steering reacts late',
            body: 'Late steering can come from display latency, FPS instability, controller path, or wheel software. Fix the input chain before changing alignment.',
            bullets: [
              'Check display mode and FPS cap first.',
              'Compare wired controller or wheel input.',
              'Disable overlays for one clean test.',
            ],
          },
          {
            title: 'Throttle feels delayed',
            body: 'Delayed throttle can feel like turbo lag or poor gearing. Test input response on a low-power car before changing the build.',
            bullets: [
              'Use a simple road car for one baseline test.',
              'Check trigger travel, keyboard tapping, or pedal calibration.',
              'Retest after closing background apps.',
            ],
          },
          {
            title: 'Lag appears only online',
            body: 'If single-player response is clean but online sessions feel delayed, separate network symptoms from local input settings.',
            bullets: [
              'Run the same route offline and online.',
              'Check online troubleshooting if convoy or event sessions drop.',
              'Do not retune the car around temporary network delay.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-assist-settings',
    title: 'Best Assist Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best assist settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 assist settings guide for braking, steering, traction control, stability control, shifting, ABS, rewind, racing line, and beginner-to-advanced progression.',
    eyebrow: 'Assist settings',
    intro:
      'Assist settings should make the car easier to learn without hiding every handling problem. Start with consistency, then remove one assist at a time when your route, braking points, and throttle inputs feel repeatable.',
    primaryCta: {
      label: 'Open Controller Settings',
      href: '/settings/forza-horizon-6-controller',
    },
    relatedLinks: [
      {
        label: 'Beginner tuning',
        href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
      },
      {
        label: 'Input lag settings',
        href: '/games/forza-horizon-6/guides/input-lag-settings',
      },
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
    ],
    sections: [
      {
        title: 'Start with learning assists',
        body: 'New players should use assists to learn routes and braking points first. Removing every assist early can make tuning feedback harder to read.',
        bullets: [
          'Keep rewind on while learning new routes or event restrictions.',
          'Use a racing line until braking points become predictable.',
          'Do not remove multiple assists and change the tune in the same run.',
        ],
      },
      {
        title: 'Remove traction aids carefully',
        body: 'Traction and stability assists can hide wheelspin, oversteer, and throttle mistakes. Remove them only when the car and route are familiar.',
        bullets: [
          'If the car instantly spins, fix gearing and differential before blaming assists.',
          'Use lower-power cars when learning throttle control without traction aids.',
          'Keep ABS decisions separate from traction and stability decisions.',
        ],
      },
      {
        title: 'Treat shifting as a separate skill',
        body: 'Manual shifting can help control power delivery, but it adds workload. Learn it after braking, steering, and throttle are stable.',
        bullets: [
          'Use automatic while learning a new car or route.',
          'Move to manual when you can repeat clean exits.',
          'Use the gear ratio guide after manual inputs feel natural.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Assist progression paths',
        description:
          'Use your current driving problem to decide which assist to keep, remove, or test later.',
        cards: [
          {
            title: 'Beginner route learning',
            body: 'Keep comfort assists while learning roads. The goal is clean repetition, not proving skill on the first run.',
            bullets: [
              'Use rewind to identify the mistake, then rerun the corner.',
              'Keep racing line until braking zones feel memorized.',
              'Use stable cars before chasing leaderboard assists.',
            ],
          },
          {
            title: 'Wheelspin on exits',
            body: 'If removing traction control makes exits chaotic, improve power delivery and throttle rhythm before pushing more performance.',
            bullets: [
              'Lengthen lower gears if launch spin is constant.',
              'Use safer differential settings first.',
              'Compare assist-on and assist-off runs on the same corner.',
            ],
          },
          {
            title: 'Manual shifting workload',
            body: 'Manual gears should make the car more controllable, not distract from every braking point.',
            bullets: [
              'Use automatic for new routes.',
              'Practice manual on a forgiving road car.',
              'Tune gear spacing after shift timing feels consistent.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'manual-transmission-guide',
    title: 'Forza Horizon 6 Manual Transmission Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 manual transmission guide',
    description:
      'Forza Horizon 6 manual transmission guide for manual shifting, manual with clutch, controller binds, wheel paddles, keyboard shifting, gear timing, and race consistency.',
    eyebrow: 'Manual shifting',
    intro:
      'Manual shifting is useful when it helps you control power, braking, and corner exits. Learn shift timing on a repeatable route before changing gear ratios or moving to manual with clutch.',
    primaryCta: {
      label: 'Open Gear Ratio Tool',
      href: '/tools/forza-horizon-6-gear-ratio-calculator',
    },
    relatedLinks: [
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
      {
        label: 'Keyboard settings',
        href: '/games/forza-horizon-6/guides/best-keyboard-settings',
      },
      {
        label: 'Wheel settings',
        href: '/games/forza-horizon-6/guides/wheel-settings-guide',
      },
    ],
    sections: [
      {
        title: 'Learn manual before manual with clutch',
        body: 'Manual with clutch adds timing pressure. Start with normal manual shifting so you can hear and feel power bands without also managing clutch input.',
        bullets: [
          'Practice upshifts and downshifts on one short route.',
          'Use a stable A or S1 road car while learning.',
          'Move to clutch only after missed shifts are rare.',
        ],
      },
      {
        title: 'Choose binds that do not break steering',
        body: 'Bad shift binds make manual feel harder than it is. Keep upshift, downshift, clutch, and handbrake reachable without ruining steering or throttle control.',
        bullets: [
          'Controller users should avoid binds that fight camera or rewind controls.',
          'Wheel users should test paddles before adding clutch workload.',
          'Keyboard users should keep shift keys reachable while steering.',
        ],
      },
      {
        title: 'Use shifting to solve specific problems',
        body: 'Manual is not only about speed. It can calm wheelspin, hold a gear through a corner, avoid awkward automatic shifts, and improve exit consistency.',
        bullets: [
          'Hold a higher gear if exits spin too easily.',
          'Downshift earlier only if the car remains stable under braking.',
          'Use the gear ratio tool when shifts happen in awkward parts of the route.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Manual shifting decision paths',
        description:
          'Use the shifting problem to decide whether to change binds, driver timing, or the gear ratio setup.',
        cards: [
          {
            title: 'Automatic shifts mid-corner',
            body: 'Manual can help hold the gear through the corner, but gear spacing may also need adjustment.',
            bullets: [
              'Test manual on the same corner before changing the tune.',
              'Use the gear ratio tool if shifts happen at the wrong speed.',
              'Avoid power upgrades until shift points are predictable.',
            ],
          },
          {
            title: 'Downshifts unsettle the car',
            body: 'Late or aggressive downshifts can make braking feel unstable. Fix timing before changing brake balance.',
            bullets: [
              'Downshift one step earlier on a straight section.',
              'Compare braking stability with automatic mode.',
              'Keep differential and brake settings unchanged during the test.',
            ],
          },
          {
            title: 'Clutch feels too busy',
            body: 'Manual with clutch should be a later step. If it distracts from the route, return to standard manual and build consistency.',
            bullets: [
              'Practice standard manual until mistakes are rare.',
              'Use a forgiving car class first.',
              'Move clutch input only after binds feel natural.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-camera-settings',
    title: 'Best Camera Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best camera settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 camera settings guide for cockpit, hood, chase, drift, wheel, controller, input lag checks, visibility, racing line, and route learning.',
    eyebrow: 'Camera settings',
    intro:
      'Camera choice changes how early you see corners, traffic, apexes, braking zones, and slide angle. Pick one view for learning routes, one view for precision, and avoid changing camera while tuning the car.',
    primaryCta: {
      label: 'Open Assist Settings',
      href: '/games/forza-horizon-6/guides/best-assist-settings',
    },
    relatedLinks: [
      {
        label: 'Input lag settings',
        href: '/games/forza-horizon-6/guides/input-lag-settings',
      },
      {
        label: 'Controller settings',
        href: '/settings/forza-horizon-6-controller',
      },
      {
        label: 'Wheel settings',
        href: '/settings/forza-horizon-6-wheel',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 Known Issues',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51701860097811-Forza-Horizon-6-Known-Issues',
        note: 'Used as an official update checkpoint before blaming camera feel, input response, or visibility issues on a tune.',
      },
      {
        type: 'article',
        title: 'FH6 Known Issues and Bug Reporting',
        sourceName: 'Forza Forums',
        sourceUrl:
          'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
        note: 'Used as a known-issues reference before changing camera settings around temporary input, performance, or UI symptoms.',
      },
    ],
    sections: [
      {
        title: 'Choose a learning camera',
        body: 'New routes are easier when the camera shows braking zones, traffic, and corner exits clearly. Keep one learning view until the route feels familiar.',
        bullets: [
          'Use a wider chase-style view when learning unfamiliar roads.',
          'Avoid switching camera every run while comparing car changes.',
          'Keep racing line and camera tests separate so feedback stays clear.',
        ],
      },
      {
        title: 'Use precision views for serious testing',
        body: 'Hood, bumper, cockpit, and close chase views can make speed and angle easier to read, but they also change how the car feels.',
        bullets: [
          'Use the same camera when judging understeer, oversteer, or braking stability.',
          'Wheel users should test cockpit and hood views before tuning steering feel.',
          'Drift players should choose a view that makes slide angle repeatable.',
        ],
      },
      {
        title: 'Do not tune around camera confusion',
        body: 'A camera that hides apexes or makes speed feel strange can lead to bad tune changes. Fix visibility and comfort first.',
        bullets: [
          'If corners feel late, test camera and field of view before changing alignment.',
          'If speed feels delayed, check input lag and PC settings separately.',
          'Use one short route to compare camera changes.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Camera choice decision paths',
        description:
          'Use the driving task to decide whether to prioritize visibility, precision, immersion, or drift angle.',
        cards: [
          {
            title: 'Learning a new route',
            body: 'Visibility matters more than immersion while learning braking zones and traffic patterns.',
            bullets: [
              'Use a wider view until the route is memorized.',
              'Keep assists steady while learning.',
              'Move to precision views after route mistakes drop.',
            ],
          },
          {
            title: 'Testing a tune change',
            body: 'Changing camera while testing suspension, differential, or gearing makes feedback unreliable.',
            bullets: [
              'Use the same view for every comparison run.',
              'Keep camera fixed when comparing presets.',
              'Retest after camera changes before editing the car.',
            ],
          },
          {
            title: 'Wheel or cockpit driving',
            body: 'Cockpit views can feel natural on a wheel, but they may reduce visibility on tight roads.',
            bullets: [
              'Compare cockpit and hood views on the same route.',
              'Check wheel rotation and input lag before blaming the camera.',
              'Use a view that keeps apexes visible.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'hud-accessibility-settings',
    title:
      'Forza Horizon 6 HUD and Accessibility Settings Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 HUD and accessibility settings guide',
    description:
      'Forza Horizon 6 HUD and accessibility settings guide for racing line, subtitles, UI scale, colorblind options, vibration, difficulty, route learning, and distraction reduction.',
    eyebrow: 'HUD and accessibility',
    intro:
      'HUD and accessibility settings are not just comfort options. They decide how quickly you read braking zones, navigation, events, subtitles, warnings, and car feedback while learning FH6 routes.',
    primaryCta: {
      label: 'Open Assist Settings',
      href: '/games/forza-horizon-6/guides/best-assist-settings',
    },
    relatedLinks: [
      {
        label: 'Camera settings',
        href: '/games/forza-horizon-6/guides/best-camera-settings',
      },
      {
        label: 'PC graphics settings',
        href: '/games/forza-horizon-6/guides/best-pc-graphics-settings',
      },
      {
        label: 'Beginner tuning',
        href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
      },
    ],
    sections: [
      {
        title: 'Keep learning signals visible',
        body: 'The best HUD setup for a new player keeps braking, navigation, event prompts, and route information visible until the roads feel familiar.',
        bullets: [
          'Keep racing line or braking line on while learning new routes.',
          'Use subtitles and readable UI scale if event instructions are easy to miss.',
          'Do not hide key information before memorizing the route.',
        ],
      },
      {
        title: 'Reduce clutter after the route is familiar',
        body: 'Once you know the route, extra prompts can become distraction. Remove one HUD element at a time and retest focus.',
        bullets: [
          'Turn off nonessential prompts only after the route feels repeatable.',
          'Keep mini-map or navigation visible if traffic and junctions still cause mistakes.',
          'Avoid changing HUD, camera, assists, and tune in one run.',
        ],
      },
      {
        title: 'Tune comfort before performance',
        body: 'Readable UI, color options, vibration, brightness, and camera comfort can affect consistency as much as suspension changes.',
        bullets: [
          'Adjust colorblind or contrast options before serious testing.',
          'Compare vibration on and off if feedback feels distracting.',
          'Use PC graphics settings if readability changes with performance.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'HUD and accessibility decision paths',
        description:
          'Use the problem you notice to decide whether to show more information, reduce clutter, or adjust comfort settings.',
        cards: [
          {
            title: 'Missing braking zones',
            body: 'Keep braking line or route guidance visible until you can repeat the corner without surprise.',
            bullets: [
              'Use braking line during route learning.',
              'Compare mistakes with and without the line later.',
              'Avoid retuning brakes around route unfamiliarity.',
            ],
          },
          {
            title: 'Screen feels too busy',
            body: 'Clutter can pull attention away from traffic, apexes, and rivals. Remove one HUD element per test.',
            bullets: [
              'Keep navigation until route memory is strong.',
              'Remove social or event prompts before core driving information.',
              'Retest focus on the same route.',
            ],
          },
          {
            title: 'UI or road details are hard to read',
            body: 'Readability problems can look like poor reaction time. Fix display, UI scale, contrast, and graphics clarity first.',
            bullets: [
              'Adjust UI scale or subtitles if text is missed.',
              'Use color and contrast options for clearer prompts.',
              'Check PC graphics settings if road detail feels unstable.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-awd-tune-settings',
    title: 'Best AWD Tune Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best AWD tune settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 AWD tune settings guide for launch grip, corner exit traction, differential balance, gearing, tire pressure, rally routes, road racing, and beginner builds.',
    eyebrow: 'AWD tuning',
    intro:
      'AWD is the safest first tuning path for many FH6 players because it gives strong launches and forgiving corner exits. The trick is making it rotate without turning every build into numb understeer.',
    primaryCta: {
      label: 'Open AWD Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Drivetrain swap guide',
        href: '/games/forza-horizon-6/guides/engine-swap-drivetrain-swap-guide',
      },
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
      {
        label: 'A and S1 road tune',
        href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
      },
      {
        label: 'Rally tune settings',
        href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general tuning workflow reference. This AWD page applies that workflow to launch grip, center balance, and understeer diagnosis rather than claiming a single universal setup.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 tuning guide',
        sourceName: 'HokiHoshi',
        sourceUrl: 'https://hokihoshi.com/forza-horizon-6/tuning/',
        note: 'Used as supporting tuning context for keeping setup changes narrow and testing symptoms one at a time.',
      },
    ],
    sections: [
      {
        title: 'Start with launch and exit grip',
        body: 'AWD builds are most useful when they put power down cleanly. Test launch, second-gear pull, and corner exit before chasing top speed.',
        bullets: [
          'Use A or S1 class when learning AWD balance.',
          'Test the same launch and exit corner after each differential change.',
          'Avoid adding more power until exits are repeatable.',
        ],
      },
      {
        title: 'Tune rotation before adding power',
        body: 'The common AWD mistake is making a fast car that refuses to turn. Fix front-end bite and differential balance before adding horsepower.',
        bullets: [
          'If the car pushes wide, use the understeer guide before changing every slider.',
          'Keep tire pressure and alignment changes small during comparisons.',
          'Use shorter gearing only if the car still exits cleanly.',
        ],
      },
      {
        title: 'Separate road and rally AWD',
        body: 'Road AWD and rally AWD need different suspension and gearing behavior. A paved route setup can feel harsh and nervous on dirt or mixed-surface events.',
        bullets: [
          'Use calmer suspension and more recovery-friendly gearing for rally routes.',
          'Keep road builds sharper only when surface grip is predictable.',
          'Save separate presets instead of forcing one AWD tune everywhere.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'AWD tuning decision paths',
        description:
          'Use the first problem you feel to decide whether to adjust differential, gearing, tire behavior, or event-specific setup.',
        cards: [
          {
            title: 'Car launches hard but pushes wide',
            body: 'The build has grip but not enough rotation. Fix corner behavior before adding power.',
            bullets: [
              'Test front-end response on one medium-speed corner.',
              'Use understeer fixes before power upgrades.',
              'Keep launch settings unchanged while testing rotation.',
            ],
          },
          {
            title: 'Car spins despite AWD',
            body: 'AWD can still spin if gearing, torque, or differential behavior is too aggressive.',
            bullets: [
              'Lengthen lower gears if launch spin is constant.',
              'Reduce aggressive power delivery before changing tires.',
              'Compare launch and exit separately.',
            ],
          },
          {
            title: 'Rally route feels nervous',
            body: 'A road-focused AWD tune can be too stiff for bumps and mixed surfaces.',
            bullets: [
              'Use the rally tune guide for softer recovery behavior.',
              'Test dirt and road sections separately.',
              'Keep a dedicated rally preset.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-rwd-tune-settings',
    title: 'Best RWD Tune Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best RWD tune settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 RWD tune settings guide for throttle control, wheelspin, drift, road racing, differential setup, gearing, tire pressure, and beginner-friendly builds.',
    eyebrow: 'RWD tuning',
    intro:
      'RWD can feel faster, sharper, and more expressive than AWD, but it punishes sloppy throttle and gearing. Build control first, then add power only when exits stay clean.',
    primaryCta: {
      label: 'Open RWD Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=RWD&class=S1&issue=wheelspin&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Drivetrain swap guide',
        href: '/games/forza-horizon-6/guides/engine-swap-drivetrain-swap-guide',
      },
      {
        label: 'Fix wheelspin',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
      },
      {
        label: 'Drift tune settings',
        href: '/games/forza-horizon-6/guides/best-drift-tune-settings',
      },
      {
        label: 'Manual transmission',
        href: '/games/forza-horizon-6/guides/manual-transmission-guide',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general tuning workflow reference. The RWD page applies it to throttle control, rear differential behavior, and controlled gear choices.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl: 'https://www.forzafire.com/guides/forza-horizon-6-tuning',
        note: 'Used as secondary tuning context for drivetrain behavior. Apex Tune Hub keeps RWD values as starting points until route testing confirms them.',
      },
    ],
    sections: [
      {
        title: 'Control throttle before chasing power',
        body: 'RWD tuning starts with repeatable exits. If the car spins every time you apply throttle, power upgrades are hiding the real problem.',
        bullets: [
          'Use lower-power road cars when learning RWD behavior.',
          'Lengthen first and second gear if exits are chaotic.',
          'Test throttle pickup on the same corner exit every run.',
        ],
      },
      {
        title: 'Tune differential for the event',
        body: 'Road racing, drifting, and drag launches need different rear differential behavior. One RWD setup should not be forced across every event type.',
        bullets: [
          'Use calmer road settings when exit grip matters most.',
          'Use drift-specific guidance when rotation and angle are the goal.',
          'Keep drag launch tests separate from corner exit tests.',
        ],
      },
      {
        title: 'Use manual shifting as a control tool',
        body: 'RWD cars often benefit from holding a higher gear through exits. Manual shifting can calm wheelspin if the driver workload stays manageable.',
        bullets: [
          'Hold a higher gear if the car lights up the tires on exit.',
          'Use the manual transmission guide before moving to clutch.',
          'Retest gearing after throttle control feels consistent.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'RWD tuning decision paths',
        description:
          'Use the symptom to decide whether to adjust gearing, differential, throttle technique, or event-specific setup.',
        cards: [
          {
            title: 'Exit wheelspin',
            body: 'Exit spin usually means gearing, differential, or throttle pickup is too aggressive for the available grip.',
            bullets: [
              'Lengthen lower gears before adding tire upgrades.',
              'Use safer differential behavior for road racing.',
              'Compare assist-on and assist-off runs if needed.',
            ],
          },
          {
            title: 'Car over-rotates on entry',
            body: 'RWD can rotate too eagerly if braking, downshifts, or differential settings unsettle the rear.',
            bullets: [
              'Use the oversteer guide if entry rotation is the problem.',
              'Check downshift timing before changing brake balance.',
              'Keep alignment changes small during tests.',
            ],
          },
          {
            title: 'Drift build lacks angle',
            body: 'A road RWD tune may not give enough rotation or steering response for drifting.',
            bullets: [
              'Use drift tune settings instead of road settings.',
              'Test one drift zone repeatedly.',
              'Change angle and throttle response separately.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'best-fwd-tune-settings',
    title: 'Best FWD Tune Settings for Forza Horizon 6 - Apex Tune Hub',
    h1: 'Best FWD tune settings for Forza Horizon 6',
    description:
      'Forza Horizon 6 FWD tune settings guide for front tire grip, understeer, lift-off rotation, differential setup, gearing, braking stability, and beginner-friendly road builds.',
    eyebrow: 'FWD tuning',
    intro:
      'FWD cars can be clean, efficient, and beginner-friendly in FH6, but they need help rotating without burning the front tires. Tune for front grip, controlled lift-off rotation, and stable corner exits.',
    primaryCta: {
      label: 'Open FWD Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=FWD&class=A&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
      {
        label: 'A class road tune',
        href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
      },
      {
        label: 'Best Honda cars',
        href: '/games/forza-horizon-6/best-honda-cars',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. The FWD page applies it to front-tire load, lift-off rotation, gearing, and symptom isolation.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl: 'https://www.forzafire.com/guides/forza-horizon-6-tuning',
        note: 'Used as secondary tuning context for drivetrain and front-end behavior. FWD values stay labelled as starting points until route testing confirms them.',
      },
    ],
    sections: [
      {
        title: 'Protect the front tires',
        body: 'FWD asks the front tires to steer, brake, and pull the car forward. If they overheat or overload, the car pushes wide and loses exit speed.',
        bullets: [
          'Use smoother throttle pickup before adding power.',
          'Test front tire pressure and alignment on the same medium-speed corner.',
          'Avoid masking front-tire overload with very early braking.',
        ],
      },
      {
        title: 'Use lift-off rotation carefully',
        body: 'FWD rotation often comes from easing off throttle or braking at the right time. Too much rotation turns a safe build into entry instability.',
        bullets: [
          'Compare turn-in while coasting and under light throttle.',
          'Use the unstable braking guide if the rear steps out too suddenly.',
          'Keep suspension changes small while learning the car.',
        ],
      },
      {
        title: 'Keep gearing realistic',
        body: 'Short gearing can make FWD cars lively, but it can also overload the front tires. Tune gearing for clean exits, not just launch snap.',
        bullets: [
          'Lengthen lower gears if the front tires spin on exit.',
          'Use manual shifting only after the car feels stable.',
          'Keep power upgrades modest until corner exit is repeatable.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'FWD tuning decision paths',
        description:
          'Use the symptom to decide whether to adjust front grip, gearing, braking, or rotation behavior.',
        cards: [
          {
            title: 'Car pushes wide under throttle',
            body: 'Throttle-on understeer is the classic FWD problem. Reduce front tire overload before adding more steering response.',
            bullets: [
              'Test a smoother throttle pickup.',
              'Use understeer fixes before adding power.',
              'Compare exits in a higher gear.',
            ],
          },
          {
            title: 'Rear rotates too quickly',
            body: 'Some FWD builds rotate well but become nervous on entry. Separate braking instability from useful lift-off rotation.',
            bullets: [
              'Retest with gentler trail braking.',
              'Use the unstable braking guide if the rear snaps.',
              'Avoid large suspension changes all at once.',
            ],
          },
          {
            title: 'Launch feels weak',
            body: 'FWD launch is grip-limited. More power can make the car slower if the front tires spin.',
            bullets: [
              'Tune gearing before adding horsepower.',
              'Compare launch and corner exit separately.',
              'Use A class before chasing high-power builds.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'differential-settings-guide',
    title: 'Forza Horizon 6 Differential Settings Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 differential settings guide',
    description:
      'Forza Horizon 6 differential settings guide for AWD, RWD, FWD, acceleration, deceleration, center balance, understeer, oversteer, wheelspin, launch, and corner exit tuning.',
    eyebrow: 'Differential tuning',
    intro:
      'Differential settings decide how power and rotation behave when you brake, coast, and accelerate. They are one of the quickest ways to fix corner exit, wheelspin, understeer, and rotation without rebuilding the whole car.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=wheelspin&style=balanced',
    },
    relatedLinks: [
      {
        label: 'AWD tune settings',
        href: '/games/forza-horizon-6/guides/best-awd-tune-settings',
      },
      {
        label: 'RWD tune settings',
        href: '/games/forza-horizon-6/guides/best-rwd-tune-settings',
      },
      {
        label: 'Fix wheelspin',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a broad tuning workflow reference. The differential page narrows it to acceleration, deceleration, center balance, and one-corner retesting.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl: 'https://www.forzafire.com/guides/forza-horizon-6-tuning',
        note: 'Used as a secondary reference for explaining how drivetrain and differential choices change car behavior. Apex Tune Hub still labels FH6 values as baseline guidance until route tests are logged.',
      },
    ],
    sections: [
      {
        title: 'Separate acceleration and deceleration',
        body: 'Acceleration diff affects power-on exits. Deceleration diff affects braking, lift-off, and entry rotation. Test those moments separately.',
        bullets: [
          'Use one corner exit to judge acceleration behavior.',
          'Use one braking zone to judge deceleration behavior.',
          'Do not change both sides unless the symptom clearly needs it.',
        ],
      },
      {
        title: 'Use drive layout as the starting point',
        body: 'AWD, RWD, and FWD respond differently to differential changes. Start with the drive layout guide, then tune the exact symptom.',
        bullets: [
          'AWD needs center balance and axle behavior tested separately.',
          'RWD differential changes strongly affect exit wheelspin and rotation.',
          'FWD differential changes can overload or calm the front tires.',
        ],
      },
      {
        title: 'Keep differential tests narrow',
        body: 'Differential tuning can feel powerful, but it becomes confusing if alignment, gearing, tire pressure, and assists change at the same time.',
        bullets: [
          'Use the same route, camera, assists, and weather.',
          'Make one differential change and rerun the same corner.',
          'Move to gearing only after exit behavior is consistent.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Differential decision paths',
        description:
          'Use the exact moment where the car misbehaves to decide which differential setting to test first.',
        cards: [
          {
            title: 'Wheelspin on corner exit',
            body: 'Exit wheelspin is usually an acceleration-side problem combined with gearing and tire grip.',
            bullets: [
              'Test acceleration diff before changing deceleration behavior.',
              'Compare lower-gear exits on the same corner.',
              'Use wheelspin guidance if the car lights up immediately.',
            ],
          },
          {
            title: 'Car will not rotate on power',
            body: 'Power-on understeer can come from diff behavior, especially on AWD and FWD builds.',
            bullets: [
              'Use the AWD or FWD guide first.',
              'Retest with one center or front/rear balance change.',
              'Avoid adding steering angle to hide differential push.',
            ],
          },
          {
            title: 'Rear feels unstable on entry',
            body: 'Entry instability can involve deceleration diff, braking, downshifts, or rear suspension behavior.',
            bullets: [
              'Check deceleration behavior on one braking zone.',
              'Compare automatic and manual downshifts.',
              'Use unstable braking fixes if the rear snaps before throttle.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'brake-balance-pressure-settings',
    title:
      'Forza Horizon 6 Brake Balance and Pressure Settings - Apex Tune Hub',
    h1: 'Forza Horizon 6 brake balance and pressure settings',
    description:
      'Forza Horizon 6 brake balance and pressure settings guide for unstable braking, lockups, trail braking, ABS, controller triggers, wheel pedals, road racing, and rally builds.',
    eyebrow: 'Brake tuning',
    intro:
      'Brake settings decide whether the car slows cleanly, rotates into corners, or snaps sideways before the apex. Tune brake pressure and balance with one braking zone before changing suspension or differential settings.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=braking&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Fix unstable braking',
        href: '/games/forza-horizon-6/guides/fix-unstable-braking',
      },
      {
        label: 'Input lag settings',
        href: '/games/forza-horizon-6/guides/input-lag-settings',
      },
      {
        label: 'Differential settings',
        href: '/games/forza-horizon-6/guides/differential-settings-guide',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This brake page applies it to one-zone brake pressure, balance, input control, and repeatable retesting.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as supporting context for brake and handling setup categories. Apex Tune Hub keeps brake guidance tied to test zones instead of fixed magic numbers.',
      },
    ],
    sections: [
      {
        title: 'Use one braking zone',
        body: 'Brake tuning only makes sense when the test is repeatable. Pick one straight braking zone and one trail-braking corner, then compare changes there.',
        bullets: [
          'Use the same car, route, assists, camera, and weather.',
          'Test full braking separately from light trail braking.',
          'Do not adjust suspension and brake balance in the same run.',
        ],
      },
      {
        title: 'Tune pressure for input control',
        body: 'Brake pressure affects how quickly the car reaches maximum braking force. Too much pressure can make triggers, pedals, or keyboard inputs feel jumpy.',
        bullets: [
          'Lower pressure if small inputs cause sudden lockups or instability.',
          'Check input lag and controller settings if braking feels delayed.',
          'Compare ABS on and off before assuming the tune is wrong.',
        ],
      },
      {
        title: 'Tune balance for rotation',
        body: 'Brake balance changes how much work the front or rear tires do while slowing down. It can help entry rotation, but too much rear bias can make the car nervous.',
        bullets: [
          'If the car refuses to turn under braking, test small balance changes.',
          'If the rear steps out, use the unstable braking guide before going further.',
          'Retest downshift timing if manual shifting changes entry behavior.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Brake tuning decision paths',
        description:
          'Use the exact braking symptom to decide whether to change pressure, balance, inputs, or a related setup area.',
        cards: [
          {
            title: 'Car locks or darts under braking',
            body: 'This usually points to pressure, ABS behavior, input control, or too much rear contribution.',
            bullets: [
              'Test lower pressure before changing suspension.',
              'Compare ABS and non-ABS behavior on the same braking zone.',
              'Record whether lockup happens immediately or near turn-in.',
            ],
          },
          {
            title: 'Car will not rotate on entry',
            body: 'Entry push can involve brake balance, front grip, differential deceleration, or simply braking too late.',
            bullets: [
              'Move balance in small steps only.',
              'Check deceleration differential if lift-off behavior feels wrong.',
              'Use understeer fixes if the push continues off the brakes.',
            ],
          },
          {
            title: 'Pedal or trigger feels inconsistent',
            body: 'Input hardware can make brake tuning feel worse than it is. Check device setup before chasing extreme values.',
            bullets: [
              'Compare controller, wheel pedal, or keyboard behavior separately.',
              'Use input lag settings if response feels delayed.',
              'Keep one brake zone for all comparisons.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'anti-roll-bar-suspension-settings',
    title:
      'Forza Horizon 6 Anti-Roll Bar and Suspension Settings - Apex Tune Hub',
    h1: 'Forza Horizon 6 anti-roll bar and suspension settings',
    description:
      'Forza Horizon 6 anti-roll bar and suspension settings guide for understeer, oversteer, body roll, bumps, road racing, rally routes, ride height, springs, damping, and testing workflow.',
    eyebrow: 'Suspension tuning',
    intro:
      'Anti-roll bars, springs, ride height, and damping decide how quickly the car takes a set, handles bumps, and rotates through corners. Tune them slowly, because big suspension changes can hide the real problem.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
      {
        label: 'Rally tune settings',
        href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This suspension page applies it to corner phase, ARB balance, damping, and road-versus-rally testing.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as supporting context for suspension and damping concepts. Values remain starting points until route-specific notes are collected.',
      },
    ],
    sections: [
      {
        title: 'Start with the corner phase',
        body: 'Suspension feedback changes across turn-in, mid-corner, exit, and bumps. Identify the phase before moving sliders.',
        bullets: [
          'Use understeer or oversteer guides if the symptom is clear.',
          'Test one smooth road corner and one bumpy corner separately.',
          'Keep tire pressure and differential unchanged during suspension tests.',
        ],
      },
      {
        title: 'Use anti-roll bars for balance',
        body: 'Anti-roll bars are a fast way to change front-to-rear balance. They can help rotation, but extreme values can make the car harsh or nervous.',
        bullets: [
          'Make small front or rear ARB changes and rerun the same corner.',
          'If the car pushes wide, test rotation changes before adding power.',
          'If the rear snaps, reduce aggression before changing everything else.',
        ],
      },
      {
        title: 'Separate road and rally suspension',
        body: 'Road racing rewards sharper response. Rally and mixed-surface routes need recovery over bumps, softer behavior, and stable landings.',
        bullets: [
          'Use road settings for smooth pavement and clear braking zones.',
          'Use rally guidance for bumps, jumps, dirt, and mixed surfaces.',
          'Save separate presets instead of forcing one suspension everywhere.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Suspension decision paths',
        description:
          'Use the handling phase to decide whether anti-roll bars, springs, damping, ride height, or event-specific setup should be tested first.',
        cards: [
          {
            title: 'Mid-corner understeer',
            body: 'If the car pushes wide after turn-in, balance and front grip need attention before power changes.',
            bullets: [
              'Test small ARB balance changes.',
              'Use the same mid-speed corner for comparison.',
              'Check tire pressure if front grip still feels weak.',
            ],
          },
          {
            title: 'Snap oversteer on turn-in',
            body: 'Entry snap can come from rear suspension aggression, brake behavior, downshifts, or deceleration differential.',
            bullets: [
              'Compare turn-in on and off the brakes.',
              'Use oversteer and braking guides together.',
              'Avoid large rear stiffness changes in one step.',
            ],
          },
          {
            title: 'Car skips over bumps',
            body: 'Bumpy routes need compliance. A sharp road tune can lose grip when the surface gets rough.',
            bullets: [
              'Test a bumpy section separately from smooth road.',
              'Use rally settings if the route mixes dirt and pavement.',
              'Keep ride height and damping changes gradual.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'tire-pressure-settings-guide',
    title: 'Forza Horizon 6 Tire Pressure Settings Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 tire pressure settings guide',
    description:
      'Forza Horizon 6 tire pressure settings guide for grip, heat, understeer, oversteer, road racing, drift, rally, wet routes, keyboard, controller, wheel, and repeatable testing.',
    eyebrow: 'Tire pressure tuning',
    intro:
      'Tire pressure is a small slider with a big effect. It changes grip, heat behavior, steering response, and how quickly a car becomes nervous over a longer route.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
      {
        label: 'Suspension settings',
        href: '/games/forza-horizon-6/guides/anti-roll-bar-suspension-settings',
      },
    ],
    sections: [
      {
        title: 'Test pressure after the tires are working',
        body: 'Cold tire feel can be misleading. Run the same route long enough to feel whether grip improves, fades, or becomes nervous.',
        bullets: [
          'Use the same car, route, assists, camera, and weather for comparisons.',
          'Judge pressure after multiple corners, not one launch.',
          'Keep alignment and suspension unchanged during the first tire pressure test.',
        ],
      },
      {
        title: 'Use pressure to shape response',
        body: 'Pressure can make a car sharper or calmer, but it should not be used to hide a broken alignment, differential, or suspension setup.',
        bullets: [
          'If the front pushes wide, compare small front pressure changes.',
          'If the rear feels nervous, compare small rear pressure changes.',
          'Use understeer or oversteer guides if pressure alone cannot fix the car.',
        ],
      },
      {
        title: 'Separate road, drift, and rally needs',
        body: 'Road builds want repeatable grip. Drift builds need controlled slip. Rally routes need compliance and recovery across changing surfaces.',
        bullets: [
          'Keep road pressure tests on a paved technical route.',
          'Use drift guidance when tire slip and angle are the goal.',
          'Use rally guidance when bumps and mixed surfaces change grip.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Tire pressure decision paths',
        description:
          'Use the grip problem to decide whether pressure is the first test or a supporting change after alignment and suspension.',
        cards: [
          {
            title: 'Front grip fades mid-run',
            body: 'If the car starts fine but pushes wide later, pressure and heat behavior may be part of the problem.',
            bullets: [
              'Repeat the same longer route.',
              'Compare front pressure changes in small steps.',
              'Check alignment if the front still fades quickly.',
            ],
          },
          {
            title: 'Rear becomes nervous',
            body: 'Rear tire pressure can change how confidently the car rotates and recovers.',
            bullets: [
              'Compare rear pressure on the same corner exit.',
              'Use oversteer guidance if the car snaps before throttle.',
              'Avoid changing differential in the same test.',
            ],
          },
          {
            title: 'Mixed-surface grip changes',
            body: 'Pressure choices that feel sharp on pavement can feel harsh or inconsistent on rally routes.',
            bullets: [
              'Test dirt and pavement sections separately.',
              'Use rally setup guidance for bumpy routes.',
              'Save a dedicated mixed-surface preset.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'alignment-camber-toe-settings',
    title: 'Forza Horizon 6 Alignment Camber and Toe Settings - Apex Tune Hub',
    h1: 'Forza Horizon 6 alignment, camber, and toe settings',
    description:
      'Forza Horizon 6 alignment guide for camber, toe, caster, turn-in, understeer, oversteer, tire wear, road racing, drift, wheel users, controller users, and tuning tests.',
    eyebrow: 'Alignment tuning',
    intro:
      'Alignment changes how the car turns in, holds mid-corner grip, and recovers on exit. It is powerful, but it needs small changes and repeatable tests because extreme camber or toe can make every other setting harder to read.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Tire pressure guide',
        href: '/games/forza-horizon-6/guides/tire-pressure-settings-guide',
      },
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
      {
        label: 'Fix oversteer',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
    ],
    sections: [
      {
        title: 'Use alignment for corner shape',
        body: 'Alignment should help the car enter, hold, and exit a corner cleanly. Identify which phase is wrong before touching camber, toe, or caster.',
        bullets: [
          'Use one turn-in corner and one mid-corner section for tests.',
          'Avoid changing tire pressure and alignment together at first.',
          'Retest after each small change instead of chasing perfect numbers.',
        ],
      },
      {
        title: 'Keep toe changes conservative',
        body: 'Toe can make the car feel eager, but too much can create instability, drag, and noisy feedback on controller or wheel.',
        bullets: [
          'Use small toe changes only when turn-in or stability needs them.',
          'If the car wanders on straights, undo aggressive toe before changing suspension.',
          'Wheel users should check input feel after every toe change.',
        ],
      },
      {
        title: 'Tune caster after basic balance',
        body: 'Caster affects steering feel and camber behavior while turning. It should support the build, not rescue a car with bad tire pressure or suspension balance.',
        bullets: [
          'Fix obvious understeer or oversteer first.',
          'Use caster changes after camber and toe feel reasonable.',
          'Keep device settings unchanged while testing steering feel.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Alignment decision paths',
        description:
          'Use the corner phase to decide whether camber, toe, caster, tire pressure, or suspension should be tested first.',
        cards: [
          {
            title: 'Lazy turn-in',
            body: 'Lazy turn-in can involve toe, front grip, controller response, or simply too much entry speed.',
            bullets: [
              'Test small front alignment changes first.',
              'Compare the same corner at the same braking point.',
              'Check input lag if steering feels late everywhere.',
            ],
          },
          {
            title: 'Mid-corner push',
            body: 'Mid-corner understeer can be alignment, tire pressure, suspension balance, or differential behavior.',
            bullets: [
              'Use one steady corner for comparison.',
              'Check tire pressure before large camber changes.',
              'Use understeer guidance if the push continues.',
            ],
          },
          {
            title: 'Straight-line nervousness',
            body: 'If the car wanders or feels twitchy, aggressive toe or steering settings may be making the build harder to drive.',
            bullets: [
              'Undo recent toe changes first.',
              'Compare controller or wheel settings if input feels unstable.',
              'Avoid adding suspension stiffness to mask wandering.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'advanced-gear-ratio-tuning',
    title: 'Forza Horizon 6 Advanced Gear Ratio Tuning - Apex Tune Hub',
    h1: 'Forza Horizon 6 advanced gear ratio tuning',
    description:
      'Forza Horizon 6 advanced gear ratio tuning guide for final drive, launch, acceleration, top speed, manual shifting, RWD, AWD, drag, road racing, and route-specific gearing.',
    eyebrow: 'Advanced gearing',
    intro:
      'Gear ratios decide whether a car launches cleanly, pulls through corners, or runs out of speed on long straights. Good gearing is route-specific, so tune final drive and individual gears around the speed range you actually use.',
    primaryCta: {
      label: 'Open Gear Ratio Tool',
      href: '/tools/forza-horizon-6-gear-ratio-calculator',
    },
    relatedLinks: [
      {
        label: 'Upgrade order guide',
        href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
      },
      {
        label: 'Gear ratio basics',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
      {
        label: 'Fix slow launch',
        href: '/games/forza-horizon-6/guides/fix-slow-launch',
      },
      {
        label: 'Fix poor top speed',
        href: '/games/forza-horizon-6/guides/fix-poor-top-speed',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This advanced gearing page narrows the process to final drive, route speed range, and repeatable shift tests.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as supporting context for treating gearing as a controlled test rather than a universal number.',
      },
    ],
    sections: [
      {
        title: 'Start with the route speed range',
        body: 'A short technical route and a long highway route need different gearing. Tune for the speeds you actually see instead of chasing one perfect graph.',
        bullets: [
          'Record the lowest exit speed and highest straight speed on the route.',
          'Use final drive to move the whole gear set before fine-tuning individual gears.',
          'Do not judge gearing from launch alone unless the event is drag-focused.',
        ],
      },
      {
        title: 'Fix launch and exit separately',
        body: 'Launch spin, corner-exit bogging, and top-speed limiter problems can all look like gearing issues, but they need different tests.',
        bullets: [
          'Lengthen low gears if launch or exit wheelspin is the main issue.',
          'Shorten mid gears if the car bogs after slow corners.',
          'Use the top-speed guide if the car hits limiter too early on long straights.',
        ],
      },
      {
        title: 'Use manual shifting for cleaner tests',
        body: 'Automatic shifting can hide whether the ratio is wrong or the shift timing is wrong. Manual testing makes repeatable gearing work much easier.',
        bullets: [
          'Hold one gear through a problem corner to test exit behavior.',
          'Use manual transmission guidance before moving to clutch.',
          'Keep assists and camera unchanged while comparing ratios.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Advanced gearing decision paths',
        description:
          'Use the exact speed problem to decide whether final drive, low gears, mid gears, top gears, or driver shifting should change first.',
        cards: [
          {
            title: 'Car spins in first and second',
            body: 'Low gears are too aggressive for the available grip or torque delivery. Fix launch and exit traction before adding power.',
            bullets: [
              'Lengthen low gears in small steps.',
              'Compare launch and corner exit separately.',
              'Use wheelspin guidance if the car still lights up instantly.',
            ],
          },
          {
            title: 'Car bogs after tight corners',
            body: 'The car may be falling below its useful power range. Mid-gear spacing is often more important than top speed here.',
            bullets: [
              'Record exit speed from the problem corner.',
              'Shorten the gear used after that corner.',
              'Retest before changing final drive again.',
            ],
          },
          {
            title: 'Car hits limiter too early',
            body: 'Top gear or final drive may be too short for the route. Fix this only if the event actually rewards more top speed.',
            bullets: [
              'Check whether the route has enough straight-line payoff.',
              'Lengthen top gear before ruining low-speed acceleration.',
              'Use poor top speed guidance for aero and power tradeoffs.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'aero-downforce-settings',
    title: 'Forza Horizon 6 Aero and Downforce Settings - Apex Tune Hub',
    h1: 'Forza Horizon 6 aero and downforce settings',
    description:
      'Forza Horizon 6 aero and downforce settings guide for front aero, rear aero, grip, top speed, understeer, oversteer, road racing, S1 builds, S2 builds, and route testing.',
    eyebrow: 'Aero tuning',
    intro:
      'Aero can make a fast car stable and precise, but it can also cost speed on routes that do not need it. Tune downforce around corner speed and straight length, not around a single maximum-speed number.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Fix understeer',
        href: '/games/forza-horizon-6/guides/fix-understeer',
      },
      {
        label: 'Fix poor top speed',
        href: '/games/forza-horizon-6/guides/fix-poor-top-speed',
      },
      {
        label: 'S1 road tune settings',
        href: '/games/forza-horizon-6/guides/a-s1-road-racing-tune',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This aero page applies it to downforce tradeoffs, high-speed grip, and route-specific speed checks.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as supporting context for aero, suspension, and gearing tradeoffs. Apex Tune Hub keeps aero advice tied to route shape.',
      },
    ],
    sections: [
      {
        title: 'Tune aero around route shape',
        body: 'A tight technical route can reward downforce. A fast route with long straights may punish it. Always test aero on the route type you are building for.',
        bullets: [
          'Use technical road routes for corner-grip aero testing.',
          'Use long straights to check speed loss from added downforce.',
          'Save separate presets when route shapes demand different tradeoffs.',
        ],
      },
      {
        title: 'Balance front and rear grip',
        body: 'Front aero can help turn-in and mid-corner grip. Rear aero can calm instability. The right balance depends on whether the car pushes or rotates too much.',
        bullets: [
          'Use front aero changes when understeer appears at speed.',
          'Use rear aero changes when high-speed rotation feels nervous.',
          'Avoid using aero to hide bad tire pressure or alignment.',
        ],
      },
      {
        title: 'Protect top speed only when it matters',
        body: 'Lower downforce can raise top speed, but it may make the car slower overall if corners become messy. Judge lap or route consistency, not just speed trap numbers.',
        bullets: [
          'Use poor top speed guidance if the car loses too much straight-line pace.',
          'Retest braking points after changing aero.',
          'Keep gearing unchanged during the first aero comparison.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Aero decision paths',
        description:
          'Use the route and speed problem to decide whether downforce, gearing, tire settings, or suspension should change first.',
        cards: [
          {
            title: 'High-speed understeer',
            body: 'If the car pushes wide only at speed, front aero may help more than low-speed suspension changes.',
            bullets: [
              'Test one fast corner repeatedly.',
              'Add front grip in small steps.',
              'Retest top speed after the corner improves.',
            ],
          },
          {
            title: 'Car feels nervous at speed',
            body: 'High-speed instability can involve rear aero, ride height, suspension, or abrupt steering inputs.',
            bullets: [
              'Add rear stability in small steps.',
              'Check alignment and suspension if nervousness remains.',
              'Keep input device settings unchanged during aero tests.',
            ],
          },
          {
            title: 'Straight-line speed is too low',
            body: 'Too much downforce can cost speed, but gearing and power also matter. Confirm the route actually needs more speed.',
            bullets: [
              'Compare speed loss on the longest straight.',
              'Use gearing guidance before removing all aero.',
              'Keep enough stability for the braking zone after the straight.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'manual-with-clutch-shifting',
    title: 'Forza Horizon 6 Manual With Clutch Shifting Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 manual with clutch shifting guide',
    description:
      'Forza Horizon 6 manual with clutch shifting guide for controller binds, wheel clutch pedals, keyboard shifting, missed shifts, launch control, downshifts, and race consistency.',
    eyebrow: 'Manual with clutch',
    intro:
      'Manual with clutch can make shifting feel sharper, but it also adds workload. Use it only when normal manual shifting is already clean, then build binds and timing around repeatable corner exits.',
    primaryCta: {
      label: 'Open Manual Guide',
      href: '/games/forza-horizon-6/guides/manual-transmission-guide',
    },
    relatedLinks: [
      {
        label: 'Advanced gearing',
        href: '/games/forza-horizon-6/guides/advanced-gear-ratio-tuning',
      },
      {
        label: 'Controller settings',
        href: '/settings/forza-horizon-6-controller',
      },
      {
        label: 'Wheel settings',
        href: '/settings/forza-horizon-6-wheel',
      },
    ],
    sections: [
      {
        title: 'Earn clutch after normal manual',
        body: 'Clutch input should add control, not panic. Start with normal manual and only move to clutch when missed shifts are rare.',
        bullets: [
          'Practice manual upshifts and downshifts on one short route first.',
          'Use a stable A or S1 car before trying high-power builds.',
          'Return to normal manual if clutch timing distracts from braking points.',
        ],
      },
      {
        title: 'Choose binds that survive corners',
        body: 'A clutch bind that is comfortable in a straight line may fail under braking or steering. Test it in corners, not only on the highway.',
        bullets: [
          'Controller users should avoid binds that fight steering, camera, or rewind.',
          'Wheel users should compare paddle shifting with clutch pedal timing.',
          'Keyboard users should keep clutch and shift keys reachable while steering.',
        ],
      },
      {
        title: 'Use clutch to support launch and exits',
        body: 'Clutch timing can help launch and shifting, but gearing and throttle still matter. Do not use clutch to hide a car with chaotic low gears.',
        bullets: [
          'Use launch tuning if the car spins before the first shift.',
          'Use advanced gearing if shifts land outside the power band.',
          'Retest with the same route, assists, and camera.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Manual with clutch decision paths',
        description:
          'Use the shifting problem to decide whether the issue is bind layout, clutch timing, gearing, or launch setup.',
        cards: [
          {
            title: 'Missed shifts under braking',
            body: 'If shifts fail when braking and turning, the bind or timing is too busy for that route.',
            bullets: [
              'Practice standard manual on the same route.',
              'Move clutch to a more natural bind if needed.',
              'Keep brake tuning unchanged while testing shifts.',
            ],
          },
          {
            title: 'Launch feels inconsistent',
            body: 'Launch problems can involve clutch timing, gearing, traction, and differential behavior.',
            bullets: [
              'Use one launch test section.',
              'Check launch tuning before changing every gear.',
              'Compare clutch and non-clutch launches separately.',
            ],
          },
          {
            title: 'Wheel clutch pedal feels awkward',
            body: 'Wheel users may need calibration or simpler binds before clutch becomes useful.',
            bullets: [
              'Check pedal calibration and wheel software.',
              'Use paddle shifting first if clutch timing is unstable.',
              'Keep wheel rotation and force feedback unchanged during tests.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'launch-control-tuning',
    title: 'Forza Horizon 6 Launch Control and Start Tuning - Apex Tune Hub',
    h1: 'Forza Horizon 6 launch control and start tuning',
    description:
      'Forza Horizon 6 launch control and start tuning guide for AWD, RWD, FWD, drag starts, road racing starts, wheelspin, gearing, differential, throttle control, and manual shifting.',
    eyebrow: 'Launch tuning',
    intro:
      'A good launch is not just maximum power. It is gearing, differential, tire grip, throttle control, drive layout, and shift timing working together for the first few seconds of an event.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=drag&drive=AWD&class=S1&issue=slow-launch&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Fix slow launch',
        href: '/games/forza-horizon-6/guides/fix-slow-launch',
      },
      {
        label: 'Fix wheelspin',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
      },
      {
        label: 'Advanced gearing',
        href: '/games/forza-horizon-6/guides/advanced-gear-ratio-tuning',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This launch page applies it to low gears, differential behavior, throttle control, and first-shift testing.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as background context for launch and gearing changes. Apex Tune Hub keeps launch advice tied to repeatable strip tests.',
      },
    ],
    sections: [
      {
        title: 'Separate launch type from race type',
        body: 'Drag launches and road-racing starts are not the same. Drag can favor aggressive first-gear behavior, while road events need clean exits after the first corner too.',
        bullets: [
          'Use drag testing only for drag-focused builds.',
          'Use road starts plus first-corner exit for road racing builds.',
          'Do not ruin mid-race gearing for one perfect launch.',
        ],
      },
      {
        title: 'Fix wheelspin before adding power',
        body: 'Launch spin is often gearing, differential, tire pressure, or throttle behavior. Adding power usually makes the first seconds worse.',
        bullets: [
          'Lengthen first gear if the tires light up instantly.',
          'Use AWD, RWD, or FWD guidance depending on the car layout.',
          'Compare assist-on and assist-off launches if traction behavior is unclear.',
        ],
      },
      {
        title: 'Shift timing matters early',
        body: 'The first shift can decide whether the car keeps pulling or falls out of its power band. Manual and clutch users should test shift points carefully.',
        bullets: [
          'Use the same launch strip for every comparison.',
          'Record whether the car bogs after first or second shift.',
          'Use gear ratio tuning when early shift points feel wrong.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Launch tuning decision paths',
        description:
          'Use the launch symptom to decide whether to adjust gearing, differential, throttle control, tire pressure, or shift timing first.',
        cards: [
          {
            title: 'Instant wheelspin',
            body: 'The car has more torque than the tires can use at launch. Start with low gears and traction behavior.',
            bullets: [
              'Lengthen first gear in small steps.',
              'Check tire pressure and differential behavior.',
              'Use wheelspin fixes before adding power.',
            ],
          },
          {
            title: 'Car bogs after launch',
            body: 'The gearing may be too long or the shift drops the car out of its useful power band.',
            bullets: [
              'Check the first and second shift separately.',
              'Use advanced gearing for early ratios.',
              'Compare automatic and manual shifting if needed.',
            ],
          },
          {
            title: 'Launch is good but first corner is bad',
            body: 'A launch-only setup may hurt braking, corner entry, or exit traction. Road racing needs the first corner too.',
            bullets: [
              'Test the first braking zone after the launch.',
              'Use brake and suspension guides if the car becomes unstable.',
              'Save a separate drag preset if launch is the only goal.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'speed-trap-speed-zone-tuning',
    title: 'Forza Horizon 6 Speed Trap and Speed Zone Tuning - Apex Tune Hub',
    h1: 'Forza Horizon 6 speed trap and speed zone tuning',
    description:
      'Forza Horizon 6 speed trap and speed zone tuning guide for top speed, grip, aero, gearing, braking zones, S1 builds, S2 builds, weekly playlist PR stunts, and route testing.',
    eyebrow: 'Speed PR stunts',
    intro:
      'Speed traps and speed zones look similar, but they reward different builds. Traps reward peak speed at one point; zones reward carrying speed through multiple corners without losing control.',
    primaryCta: {
      label: 'Open Gear Ratio Tool',
      href: '/tools/forza-horizon-6-gear-ratio-calculator',
    },
    relatedLinks: [
      {
        label: 'Fix poor top speed',
        href: '/games/forza-horizon-6/guides/fix-poor-top-speed',
      },
      {
        label: 'Aero settings',
        href: '/games/forza-horizon-6/guides/aero-downforce-settings',
      },
      {
        label: 'Weekly playlist',
        href: '/games/forza-horizon-6/weekly-playlist',
      },
    ],
    sections: [
      {
        title: 'Tune traps for peak speed',
        body: 'A speed trap checks one point, so route entry, launch distance, final drive, top gear, and aero tradeoffs matter more than lap balance.',
        bullets: [
          'Find the longest run-up before changing the tune.',
          'Use gearing to avoid limiter before the trap point.',
          'Reduce excess downforce only if the car still stays stable before the camera.',
        ],
      },
      {
        title: 'Tune zones for carried speed',
        body: 'Speed zones average performance through a section. A car that is fast on the straight can fail if it cannot brake, rotate, or recover through corners.',
        bullets: [
          'Keep enough aero and tire grip for the fastest corner in the zone.',
          'Test braking and exit traction, not only the start speed.',
          'Use road tune guidance if understeer or oversteer ruins the middle of the zone.',
        ],
      },
      {
        title: 'Build for the weekly restriction',
        body: 'Weekly playlist PR stunts may restrict class, manufacturer, country, car type, or drivetrain. Build around the restriction before optimizing speed.',
        bullets: [
          'Check class and car restrictions before choosing upgrades.',
          'Save separate trap and zone presets for repeat use.',
          'Use the weekly playlist page to route players toward current-season notes.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Speed PR stunt decision paths',
        description:
          'Use the PR stunt type to decide whether top speed, grip, aero, gearing, or route setup should change first.',
        cards: [
          {
            title: 'Speed trap misses by a few mph',
            body: 'Small trap misses often come from route entry, limiter, or too much downforce rather than raw power.',
            bullets: [
              'Try a longer run-up first.',
              'Check final drive and top gear for limiter hits.',
              'Remove aero only if stability remains acceptable.',
            ],
          },
          {
            title: 'Speed zone average is too low',
            body: 'The car may be losing too much speed in corners. Balance grip and acceleration before chasing top speed.',
            bullets: [
              'Identify the corner that costs the most speed.',
              'Use aero and tire settings for carried speed.',
              'Retest braking points after every major change.',
            ],
          },
          {
            title: 'Restriction blocks the usual car',
            body: 'Weekly restrictions often force a weaker car. Choose the easiest route and build for consistency first.',
            bullets: [
              'Check allowed class and car type.',
              'Use stable AWD if the restriction permits it.',
              'Save the working build for future playlist repeats.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'danger-sign-trailblazer-tuning',
    title: 'Forza Horizon 6 Danger Sign and Trailblazer Tuning - Apex Tune Hub',
    h1: 'Forza Horizon 6 danger sign and trailblazer tuning',
    description:
      'Forza Horizon 6 danger sign and trailblazer tuning guide for jump distance, offroad grip, suspension, ride height, rally tires, AWD builds, landing stability, and weekly playlist PR stunts.',
    eyebrow: 'Jump and offroad PR',
    intro:
      'Danger signs and trailblazers reward momentum, stability, and recovery more than perfect road-racing balance. Build a car that survives rough approaches, lands cleanly, and keeps pulling after bumps.',
    primaryCta: {
      label: 'Open Rally Guide',
      href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
    },
    relatedLinks: [
      {
        label: 'Suspension settings',
        href: '/games/forza-horizon-6/guides/anti-roll-bar-suspension-settings',
      },
      {
        label: 'AWD tune settings',
        href: '/games/forza-horizon-6/guides/best-awd-tune-settings',
      },
      {
        label: 'Weekly playlist',
        href: '/games/forza-horizon-6/weekly-playlist',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This PR stunt page applies it to approach speed, landing behavior, recovery gearing, and weekly-safe build notes.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as supporting context for suspension and drivetrain tradeoffs on rough routes.',
      },
    ],
    sections: [
      {
        title: 'Build for approach speed and recovery',
        body: 'A danger sign attempt starts before the ramp and ends after landing. The fastest approach means little if the car bounces, scrapes, or lands sideways.',
        bullets: [
          'Use a stable approach line before changing the tune.',
          'Keep enough ride height and suspension travel for rough run-ups.',
          'Use AWD when traction and recovery matter more than purity.',
        ],
      },
      {
        title: 'Use rally logic for trailblazers',
        body: 'Trailblazers often mix dirt, rocks, roads, jumps, and awkward gates. A road tune can feel fast for ten seconds and then lose everything on bumps.',
        bullets: [
          'Tune for bump recovery and offroad grip first.',
          'Use rally tires or offroad-focused upgrades when restrictions allow.',
          'Keep gearing short enough to recover after missed lines.',
        ],
      },
      {
        title: 'Respect weekly restrictions',
        body: 'Playlist PR stunts often force a class or car category. The best general car may not be legal, so the route and setup need to adapt.',
        bullets: [
          'Choose the most stable eligible car before tuning.',
          'Use the weekly playlist page for seasonal routing.',
          'Save working builds by restriction type for future repeats.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Jump and trailblazer decision paths',
        description:
          'Use the failure point to decide whether route, suspension, gearing, traction, or car choice needs work.',
        cards: [
          {
            title: 'Jump distance is short',
            body: 'Short jumps can be route, approach speed, gearing, aero drag, or poor traction before the ramp.',
            bullets: [
              'Try a cleaner approach before retuning.',
              'Check gearing if the car stops pulling before the ramp.',
              'Avoid excessive downforce if the approach is stable.',
            ],
          },
          {
            title: 'Car lands badly',
            body: 'Landing problems usually point to suspension, ride height, weight transfer, or approach angle.',
            bullets: [
              'Raise or soften rough-route behavior gradually.',
              'Use suspension guidance before changing power.',
              'Retest the same landing line.',
            ],
          },
          {
            title: 'Trailblazer loses speed on bumps',
            body: 'The setup may be too road-focused. Recovery and traction matter more than pure paved response.',
            bullets: [
              'Use rally settings for mixed surfaces.',
              'Keep AWD and gearing recovery in mind.',
              'Choose stable routes through rough terrain.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'seasonal-championship-tuning',
    title: 'Forza Horizon 6 Seasonal Championship Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 seasonal championship tuning guide',
    description:
      'Forza Horizon 6 seasonal championship tuning guide for weekly playlist restrictions, car class limits, AI difficulty, road, dirt, cross-country, street races, and reliable three-race setups.',
    eyebrow: 'Seasonal championships',
    intro:
      'Seasonal championships reward consistency more than one heroic lap. Build for the restriction, survive all three races, and choose a tune that stays predictable across traffic, weather, and surface changes.',
    primaryCta: {
      label: 'Open Weekly Playlist',
      href: '/games/forza-horizon-6/weekly-playlist',
    },
    relatedLinks: [
      {
        label: 'Best starter cars',
        href: '/games/forza-horizon-6/guides/best-starter-cars',
      },
      {
        label: 'A class road tune',
        href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
      },
      {
        label: 'Rally tune settings',
        href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
      },
    ],
    sections: [
      {
        title: 'Start with the restriction',
        body: 'Seasonal championships usually restrict class, car type, country, manufacturer, decade, or drivetrain. The best tune is useless if the car is not eligible.',
        bullets: [
          'Check class and car restrictions before opening the garage.',
          'Pick the most stable eligible car before chasing power.',
          'Save a legal baseline tune for repeat seasonal use.',
        ],
      },
      {
        title: 'Tune for three races, not one corner',
        body: 'A championship can mix routes and conditions. A slightly safer tune often beats an extreme build that only works on the first race.',
        bullets: [
          'Prioritize braking, traffic recovery, and clean exits.',
          'Avoid fragile top-speed builds unless every route rewards them.',
          'Use AWD or balanced road/rally presets when restrictions allow.',
        ],
      },
      {
        title: 'Handle AI traffic and weather',
        body: 'Seasonal AI races punish cars that only feel good in clean air. Build for passing, bumps, rain, and recovery after contact.',
        bullets: [
          'Use stable gearing so the car recovers after traffic slowdowns.',
          'Keep enough front grip for alternate lines.',
          'Use safer tire and suspension choices on mixed-surface events.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Seasonal championship decision paths',
        description:
          'Use the championship restriction and event type to decide whether car choice, drivetrain, tire choice, or safety tuning matters most.',
        cards: [
          {
            title: 'Legal cars feel slow',
            body: 'When restrictions force weaker cars, clean exits and traffic recovery matter more than raw speed.',
            bullets: [
              'Choose the most stable eligible car first.',
              'Use gearing for recovery after slow corners.',
              'Prioritize consistent podium pace over one fastest split.',
            ],
          },
          {
            title: 'AI passes on corner exit',
            body: 'Exit acceleration, drivetrain, and gearing may be too weak for traffic-heavy racing.',
            bullets: [
              'Check lower gear spacing.',
              'Use AWD if legal and traction is the issue.',
              'Avoid spinning tires while trying to pass.',
            ],
          },
          {
            title: 'Mixed routes punish the tune',
            body: 'If a championship mixes road, dirt, and weather, a dedicated extreme setup can be too narrow.',
            bullets: [
              'Use rally or balanced settings for mixed surfaces.',
              'Keep suspension recovery in mind.',
              'Save separate presets for route families.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'the-trial-coop-race-tuning',
    title: 'Forza Horizon 6 The Trial Co-op Race Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 The Trial co-op race tuning guide',
    description:
      'Forza Horizon 6 The Trial co-op race tuning guide for team racing, AI traffic, clean starts, AWD grip, class restrictions, safe passing, recovery gearing, and weekly playlist wins.',
    eyebrow: 'The Trial co-op',
    intro:
      'The Trial is not a solo time attack. A good co-op tune starts cleanly, passes safely, avoids wiping out teammates, and recovers quickly after AI contact or missed braking zones.',
    primaryCta: {
      label: 'Open Weekly Playlist',
      href: '/games/forza-horizon-6/weekly-playlist',
    },
    relatedLinks: [
      {
        label: 'Launch tuning',
        href: '/games/forza-horizon-6/guides/launch-control-tuning',
      },
      {
        label: 'Brake settings',
        href: '/games/forza-horizon-6/guides/brake-balance-pressure-settings',
      },
      {
        label: 'AWD tune settings',
        href: '/games/forza-horizon-6/guides/best-awd-tune-settings',
      },
    ],
    sections: [
      {
        title: 'Build for clean starts',
        body: 'The first thirty seconds of The Trial can decide the whole race. A tune that launches cleanly and avoids wheelspin is easier to place in traffic.',
        bullets: [
          'Use launch tuning to prevent first-gear chaos.',
          'Prefer stable AWD when restrictions allow it.',
          'Avoid builds that need perfect throttle control in traffic.',
        ],
      },
      {
        title: 'Tune for safe passing',
        body: 'Co-op racing rewards predictable braking and corner exits. A teammate-friendly tune should not snap sideways when you take alternate lines.',
        bullets: [
          'Keep braking stable enough for crowded corners.',
          'Use enough front grip to pass without dive-bombing.',
          'Avoid extreme oversteer setups unless the route clearly rewards them.',
        ],
      },
      {
        title: 'Recover after contact',
        body: 'AI bumps and teammate mistakes happen. Recovery gearing, traction, and suspension matter more than a perfect clean-lap tune.',
        bullets: [
          'Use gearing that pulls after slowdowns and wall taps.',
          'Keep suspension stable over curbs and bumps.',
          'Save aggressive leaderboard builds for solo events.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'The Trial decision paths',
        description:
          'Use the co-op failure point to decide whether launch, braking, passing stability, or recovery setup needs work.',
        cards: [
          {
            title: 'Losing positions at the start',
            body: 'The car may be spinning, bogging, or shifting poorly in traffic. Start with launch and low-gear behavior.',
            bullets: [
              'Retest launch on a crowded-style start.',
              'Use AWD if legal and traction is weak.',
              'Check first and second gear spacing.',
            ],
          },
          {
            title: 'Crashing while passing AI',
            body: 'The tune may be too nervous for alternate lines, late braking, or dirty air.',
            bullets: [
              'Use brake stability guidance.',
              'Keep front grip and recovery in balance.',
              'Avoid setups that only work on the racing line.',
            ],
          },
          {
            title: 'Cannot recover after contact',
            body: 'The car may need better low-speed gearing, traction, or suspension recovery.',
            bullets: [
              'Tune for slow-corner exit after wall taps.',
              'Use suspension settings for curbs and bumps.',
              'Prioritize team points over risky solo pace.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'forzathon-weekly-challenge-tuning',
    title:
      'Forza Horizon 6 Forzathon Weekly Challenge Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 Forzathon weekly challenge tuning guide',
    description:
      'Forza Horizon 6 Forzathon weekly challenge tuning guide for required cars, chapter tasks, road races, speed zones, skill chains, drift zones, and quick weekly setup swaps.',
    eyebrow: 'Forzathon weekly',
    intro:
      'Forzathon weekly challenges are small, but they can waste time when the required car is overbuilt for the wrong chapter. Keep one legal baseline, one skill-friendly setup, and one PR stunt variant before spending credits.',
    primaryCta: {
      label: 'Open Weekly Playlist',
      href: '/games/forza-horizon-6/weekly-playlist',
    },
    relatedLinks: [
      {
        label: 'Tune code sharing',
        href: '/games/forza-horizon-6/guides/auction-house-tune-code-sharing',
      },
      {
        label: 'Speed trap tuning',
        href: '/games/forza-horizon-6/guides/speed-trap-speed-zone-tuning',
      },
      {
        label: 'Best starter cars',
        href: '/games/forza-horizon-6/guides/best-starter-cars',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 official source tracker',
        sourceName: 'Apex Tune Hub',
        sourceUrl: '/games/forza-horizon-6/official-sources',
        note: 'Used as the internal source policy for weekly challenge claims. Official facts should be checked before changing event, reward, or car-eligibility copy.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 weekly playlist tracker',
        sourceName: 'Apex Tune Hub',
        sourceUrl: '/games/forza-horizon-6/weekly-playlist',
        note: 'Used as the operational tracker for weekly restrictions, car picks, and reusable tune notes.',
      },
    ],
    sections: [
      {
        title: 'Build around the required car',
        body: 'The weekly challenge usually starts with a specific car, type, country, brand, or era. Confirm eligibility before adding expensive upgrades.',
        bullets: [
          'Keep a stock or low-class save if the chapter requires simple driving.',
          'Upgrade only after the first chapter confirms the car counts.',
          'Use a flexible A or S1 baseline when the later chapters are unknown.',
        ],
      },
      {
        title: 'Match setup to chapter tasks',
        body: 'Road wins, skill chains, drift zones, danger signs, and speed zones need different setups. Swap tunes by task instead of forcing one build through every chapter.',
        bullets: [
          'Use short gearing and grip for race wins.',
          'Use predictable slide control for drift or skill-chain tasks.',
          'Use top speed, launch, and route practice for speed trap tasks.',
        ],
      },
      {
        title: 'Save weekly repeat presets',
        body: 'The best Forzathon workflow is a small preset library. You should be able to move from chapter to chapter without rebuilding the car from scratch.',
        bullets: [
          'Name presets by task: race, skill, drift, speed, or offroad.',
          'Keep one legal tune code ready for friends or club members.',
          'Use the weekly playlist page to record what worked.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Forzathon troubleshooting paths',
        description:
          'Use the failed chapter type to decide whether the car, tune, route, or saved preset needs work.',
        cards: [
          {
            title: 'Chapter does not count',
            body: 'The car may not match the exact restriction, or the game may need a fresh drive cycle after swapping cars.',
            bullets: [
              'Recheck car family, model, class, and ownership requirement.',
              'Drive the car in freeroam before starting the task again.',
              'Avoid changing tune mid-chapter unless the task needs it.',
            ],
          },
          {
            title: 'Skill chain keeps breaking',
            body: 'The setup may be too nervous for repeatable near-misses, drifts, or wreckage chains.',
            bullets: [
              'Use a controllable power level.',
              'Pick an open route with fewer hard stops.',
              'Keep suspension stable over curbs and grass.',
            ],
          },
          {
            title: 'PR stunt target feels high',
            body: 'A chapter may need a dedicated speed, jump, or zone tune rather than the race baseline.',
            bullets: [
              'Use the speed trap or danger sign guide.',
              'Retest with a longer approach.',
              'Use gearing and aero changes before adding random power.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'auction-house-tune-code-sharing',
    title:
      'Forza Horizon 6 Auction House and Tune Code Sharing Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 auction house and tune code sharing guide',
    description:
      'Forza Horizon 6 auction house and tune code sharing guide for buying event cars, saving legal builds, naming presets, avoiding bad tune codes, and preparing weekly playlist setups.',
    eyebrow: 'Tune code workflow',
    intro:
      'A fast weekly setup workflow depends on clean tune-code habits. Buy the right car, save a legal version, label the event purpose, and keep a rollback preset before copying a tune from someone else.',
    primaryCta: {
      label: 'Open Tune Codes',
      href: '/tools/forza-horizon-6-tune-codes',
    },
    relatedLinks: [
      {
        label: 'Car database',
        href: '/games/forza-horizon-6/cars',
      },
      {
        label: 'Weekly playlist',
        href: '/games/forza-horizon-6/weekly-playlist',
      },
      {
        label: 'Seasonal championship tuning',
        href: '/games/forza-horizon-6/guides/seasonal-championship-tuning',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Official Forza Horizon 6 car list',
        sourceName: 'Forza',
        sourceUrl: 'https://forza.net/fh6cars?pubDate=20260123',
        note: 'Used as the official car availability reference before buying, tagging, or sharing event builds.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 weekly playlist tracker',
        sourceName: 'Apex Tune Hub',
        sourceUrl: '/games/forza-horizon-6/weekly-playlist',
        note: 'Used as the internal workflow reference for linking tune codes, legal builds, and event restrictions.',
      },
    ],
    sections: [
      {
        title: 'Buy with the event in mind',
        body: 'Auction house value changes quickly around weekly restrictions. A cheap car is not useful if it cannot hit the class, tire, or drivetrain target cleanly.',
        bullets: [
          'Check event restrictions before buying duplicates.',
          'Avoid cars that need expensive swaps just to become legal.',
          'Keep a notes field for class, event type, and restriction.',
        ],
      },
      {
        title: 'Label tunes for search and rollback',
        body: 'Good tune names help future you and other players. Include event type, class, drivetrain, and issue solved instead of vague names.',
        bullets: [
          'Use labels like A800 Road AWD Safe or S1 Speed Zone Aero.',
          'Save a rollback tune before testing a shared code.',
          'Separate leaderboard, weekly, and beginner-friendly setups.',
        ],
      },
      {
        title: 'Test shared codes before trusting them',
        body: 'A popular tune code can still be wrong for your device, assists, route, or skill level. Validate it with one repeatable route before using it in a championship.',
        bullets: [
          'Run the same route three times with the same assists.',
          'Check braking and launch before judging lap pace.',
          'Keep tune notes so bad codes do not get reused.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Tune code quality checks',
        description:
          'Use these checks before sharing or saving a build as a weekly recommendation.',
        cards: [
          {
            title: 'Legal but unpleasant',
            body: 'The car may meet class restrictions but still be too unstable for the event.',
            bullets: [
              'Check tire compound and drivetrain choice.',
              'Reduce power if it ruins corner exits.',
              'Save a safer variant for co-op events.',
            ],
          },
          {
            title: 'Great in solo, bad in traffic',
            body: 'Some builds need perfect racing lines and cannot handle AI traffic or teammate contact.',
            bullets: [
              'Use brake stability and launch guides.',
              'Prioritize recovery over perfect clean-lap pace.',
              'Avoid sharing risky codes as beginner tunes.',
            ],
          },
          {
            title: 'Cannot remember why it exists',
            body: 'Poor labels turn a useful tune into garage clutter.',
            bullets: [
              'Add class, drivetrain, and event type to the name.',
              'Record the source or weekly event.',
              'Delete duplicate tests after the event ends.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'street-race-night-tuning',
    title:
      'Forza Horizon 6 Street Race and Night Race Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 street race and night race tuning guide',
    description:
      'Forza Horizon 6 street race and night race tuning guide for traffic, blind corners, rain, braking confidence, launch grip, AWD choices, and safe weekly event setups.',
    eyebrow: 'Street racing',
    intro:
      'Street races punish fragile builds. Traffic, low visibility, wet roads, and surprise braking zones make stability, recovery, and clean exits more valuable than a perfect dry road tune.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=A&issue=unstable-braking&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Brake balance guide',
        href: '/games/forza-horizon-6/guides/brake-balance-pressure-settings',
      },
      {
        label: 'Input lag settings',
        href: '/games/forza-horizon-6/guides/input-lag-settings',
      },
      {
        label: 'A class road tune',
        href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This street-race page applies it to traffic recovery, braking confidence, wet exits, and weekly-safe setups.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 complete tuning guide',
        sourceName: 'Forza Guide',
        sourceUrl: 'https://forza.guide/fh6/tuning/',
        note: 'Used as supporting context for road-race setup categories. Street advice stays framed as route-testing guidance.',
      },
    ],
    sections: [
      {
        title: 'Tune for visibility and traffic',
        body: 'Street races often give less time to react. A car that is too nervous under braking or throttle becomes harder to place around traffic.',
        bullets: [
          'Use stable brake pressure and predictable front grip.',
          'Keep gearing flexible for sudden slowdowns.',
          'Avoid extreme aero or differential settings that need perfect lines.',
        ],
      },
      {
        title: 'Handle wet or dirty exits',
        body: 'Night routes can mix rain, shadows, rough shoulders, and traffic avoidance. Exit grip matters because you cannot always take the clean racing line.',
        bullets: [
          'Use AWD if legal and traction is the main problem.',
          'Soften aggressive rear behavior before adding more power.',
          'Use tire and suspension guides for rougher city sections.',
        ],
      },
      {
        title: 'Build a weekly-safe variant',
        body: 'A weekly street race tune should be easier to drive than a solo leaderboard build. It needs to pass AI, survive contact, and recover from missed braking zones.',
        bullets: [
          'Prioritize clean starts and stable passing.',
          'Use a slightly shorter final drive if traffic slows the route.',
          'Save a safer tune code for Trial or co-op street events.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Street race decision paths',
        description:
          'Identify whether the failure is braking, visibility, traffic recovery, or wet-road exit grip.',
        cards: [
          {
            title: 'Missing blind braking zones',
            body: 'The tune may be too fast on entry or too unstable when braking late.',
            bullets: [
              'Use braking stability before changing power.',
              'Practice one marker at a time.',
              'Check camera and HUD settings if visibility is the issue.',
            ],
          },
          {
            title: 'Traffic ruins corner exits',
            body: 'A fragile tune may not recover when the ideal racing line disappears.',
            bullets: [
              'Use recovery gearing.',
              'Keep enough front grip for alternate lines.',
              'Choose safer passing points.',
            ],
          },
          {
            title: 'Rain makes the car nervous',
            body: 'Wet street routes can expose oversteer, wheelspin, and stiff suspension.',
            bullets: [
              'Reduce aggressive differential behavior.',
              'Use tire pressure and alignment checks.',
              'Retest on the same wet section.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'rivals-time-attack-tuning',
    title: 'Forza Horizon 6 Rivals Time Attack Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 Rivals time attack tuning guide',
    description:
      'Forza Horizon 6 Rivals time attack tuning guide for clean laps, route testing, ghost comparison, tire temperature, gearing, braking markers, and repeatable setup notes.',
    eyebrow: 'Rivals time attack',
    intro:
      'Rivals tuning is about repeatable comparison. Lock the route, class, assists, weather, and car, then change one setup group at a time so the ghost actually tells you what improved.',
    primaryCta: {
      label: 'Open Tune Presets',
      href: '/tools/forza-horizon-6-tune-presets',
    },
    relatedLinks: [
      {
        label: 'A class road tune',
        href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
      },
      {
        label: 'Advanced gearing',
        href: '/games/forza-horizon-6/guides/advanced-gear-ratio-tuning',
      },
      {
        label: 'Brake settings',
        href: '/games/forza-horizon-6/guides/brake-balance-pressure-settings',
      },
    ],
    sections: [
      {
        title: 'Lock the test conditions',
        body: 'A Rivals setup test only works when the comparison is clean. If the car, assist profile, route, or class changes, the result becomes noise.',
        bullets: [
          'Use one car, one route, one class, and one assist profile per test.',
          'Run at least three clean laps before judging a setup.',
          'Keep notes on sector gains, not only final lap time.',
        ],
      },
      {
        title: 'Tune the biggest loss first',
        body: 'Do not chase every slider at once. Identify whether the ghost gains under braking, mid-corner, exit traction, or top speed, then tune that symptom.',
        bullets: [
          'Use brake balance if the ghost closes during braking zones.',
          'Use alignment and tire pressure if mid-corner speed is weak.',
          'Use gearing and differential if exits or straights lose time.',
        ],
      },
      {
        title: 'Save leaderboard and safe variants',
        body: 'The fastest solo lap can be too nervous for weekly events. Keep a pure Rivals variant and a safer playlist variant so one success does not ruin the garage.',
        bullets: [
          'Label the pure time-attack tune with route and class.',
          'Save a safer version with better traffic and contact recovery.',
          'Use tune-code notes when a setup works across multiple tracks.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Rivals test loops',
        description:
          'Use ghost behavior to decide which setup family deserves the next test.',
        cards: [
          {
            title: 'Ghost gains in braking zones',
            body: 'The car may need more braking confidence, less instability, or a better entry marker.',
            bullets: [
              'Retest brake pressure and balance.',
              'Check unstable braking guidance.',
              'Do not mask entry problems with extra aero too early.',
            ],
          },
          {
            title: 'Ghost gains on corner exit',
            body: 'Exit losses often come from wheelspin, poor gear spacing, or differential behavior.',
            bullets: [
              'Compare second and third gear exits.',
              'Check wheelspin and differential pages.',
              'Use AWD only if the class and route justify it.',
            ],
          },
          {
            title: 'Ghost gains on straights',
            body: 'Top-speed loss can be gearing, aero drag, or a car that reaches redline too soon.',
            bullets: [
              'Check final drive first.',
              'Reduce unnecessary downforce carefully.',
              'Use speed trap testing before race testing.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'cross-country-offroad-tuning',
    title:
      'Forza Horizon 6 Cross-Country and Offroad Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 cross-country and offroad tuning guide',
    description:
      'Forza Horizon 6 cross-country and offroad tuning guide for jumps, bumps, water, dirt, rally tires, ride height, suspension travel, AWD grip, and weekly event consistency.',
    eyebrow: 'Cross-country offroad',
    intro:
      'Cross-country tuning is not just rally tuning with more power. The car has to land, absorb bumps, recover through grass or dirt, and keep enough speed after imperfect lines.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=rally&drive=AWD&class=A&issue=unstable-braking&style=safe',
    },
    relatedLinks: [
      {
        label: 'Rally tune settings',
        href: '/games/forza-horizon-6/guides/best-rally-tune-settings',
      },
      {
        label: 'Danger sign tuning',
        href: '/games/forza-horizon-6/guides/danger-sign-trailblazer-tuning',
      },
      {
        label: 'AWD tune settings',
        href: '/games/forza-horizon-6/guides/best-awd-tune-settings',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This offroad page applies it to landing behavior, recovery gearing, AWD stability, and mixed-surface checks.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as supporting context for suspension and drivetrain testing on rough routes.',
      },
    ],
    sections: [
      {
        title: 'Start with landing behavior',
        body: 'A cross-country car that lands badly loses more time than it gains from extra power. Suspension travel, ride height, and weight control come first.',
        bullets: [
          'Raise ride height enough to survive rough landings.',
          'Soften the car before chasing sharper turn-in.',
          'Retest the same jump and landing zone after each change.',
        ],
      },
      {
        title: 'Choose grip for mixed surfaces',
        body: 'Routes can move from road to dirt to grass quickly. The best setup keeps traction when the racing line disappears.',
        bullets: [
          'Use offroad or rally-focused tires when restrictions allow.',
          'Keep AWD stable and predictable.',
          'Avoid gearing that bogs after bumps or water crossings.',
        ],
      },
      {
        title: 'Tune for recovery, not perfection',
        body: 'Offroad routes punish tiny mistakes with lost momentum. A weekly-safe tune should recover after missed checkpoints, bumps, or bad landings.',
        bullets: [
          'Use shorter recovery gearing for slow sections.',
          'Keep enough front grip to correct alternate lines.',
          'Save a safer event tune separate from PR stunt builds.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Offroad failure checks',
        description:
          'Separate landing, traction, and recovery problems before changing the whole build.',
        cards: [
          {
            title: 'Car bounces after landing',
            body: 'The suspension is probably too stiff or too low for the jump profile.',
            bullets: [
              'Raise ride height gradually.',
              'Soften damping before changing power.',
              'Retest with the same approach speed.',
            ],
          },
          {
            title: 'Car spins on dirt exits',
            body: 'Traction and differential behavior may be too aggressive for mixed surfaces.',
            bullets: [
              'Use AWD stability guidance.',
              'Reduce sudden throttle response.',
              'Check tire choice before adding more aero.',
            ],
          },
          {
            title: 'Car loses speed through grass',
            body: 'The build may lack recovery gearing or suspension control for rough sections.',
            bullets: [
              'Shorten lower gears slightly.',
              'Avoid bottoming out.',
              'Choose lines that keep wheels settled.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'drift-zone-scoring-tuning',
    title:
      'Forza Horizon 6 Drift Zone Scoring and Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 drift zone scoring and tuning guide',
    description:
      'Forza Horizon 6 drift zone scoring and tuning guide for angle, speed, transitions, gearing, tire pressure, controller settings, wheel settings, and weekly playlist drift tasks.',
    eyebrow: 'Drift zone scoring',
    intro:
      'A good drift zone tune is not only about maximum angle. It needs controllable initiation, steady speed, clean transitions, and recovery before the next scoring section.',
    primaryCta: {
      label: 'Open Drift Calculator',
      href: '/tools/forza-horizon-6-drift-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Japan drift setup',
        href: '/games/forza-horizon-6/guides/japan-drift-setup',
      },
      {
        label: 'Controller drift settings',
        href: '/games/forza-horizon-6/guides/controller-drift-settings',
      },
      {
        label: 'Best drift cars',
        href: '/games/forza-horizon-6/best-drift-cars',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general tuning workflow reference. For drift zones, the page narrows that workflow to angle, speed, transition recovery, and route-specific testing.',
      },
      {
        type: 'article',
        title: 'Tips for Tuning a car for Drifting?',
        sourceName: 'r/ForzaHorizon6 discussion',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tt763j/tips_for_tuning_a_car_for_drifting/',
        note: 'Used as community drift context for practical setup checks around initiation, holding angle, and recovery.',
      },
    ],
    sections: [
      {
        title: 'Balance angle and speed',
        body: 'Too much angle can slow the car and break the chain. Too little angle can leave points on the table. Tune for the zone rhythm.',
        bullets: [
          'Use a gear that holds the main drift section without constant shifting.',
          'Keep enough speed for transitions.',
          'Avoid power levels that require panic corrections.',
        ],
      },
      {
        title: 'Make transitions predictable',
        body: 'Linked corners decide many drift zones. The car should change direction without snapping or bogging.',
        bullets: [
          'Use steering and tire-pressure changes gradually.',
          'Check controller or wheel settings before blaming the car.',
          'Retest the same transition after each change.',
        ],
      },
      {
        title: 'Prepare weekly drift tasks',
        body: 'Weekly drift zones reward a tune that scores quickly without needing perfect retries. Keep one safe score build and one sharper practice build.',
        bullets: [
          'Use a familiar drift car for seasonal requirements when allowed.',
          'Save a legal tune code for repeat tasks.',
          'Use the drift calculator when the zone needs a different gear or power level.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Drift zone setup checks',
        description:
          'Use the scoring failure to decide whether gear, power, angle, or input setup needs adjustment.',
        cards: [
          {
            title: 'Car cannot hold the zone',
            body: 'The gear may be wrong or power delivery may be too weak for the scoring section.',
            bullets: [
              'Use one main gear for the longest drift section.',
              'Check final drive and power level.',
              'Avoid shifting mid-transition unless needed.',
            ],
          },
          {
            title: 'Car spins during transitions',
            body: 'The setup may have too much rear snap or the input settings may be too sensitive.',
            bullets: [
              'Soften aggressive rear behavior.',
              'Check controller drift settings.',
              'Use a smoother initiation point.',
            ],
          },
          {
            title: 'Score is inconsistent',
            body: 'Inconsistency often comes from route approach, speed, or overcorrecting.',
            bullets: [
              'Start from the same marker each attempt.',
              'Keep throttle rhythm consistent.',
              'Use a safer tune before chasing maximum angle.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'upgrade-order-tuning-guide',
    title: 'Forza Horizon 6 Upgrade Order Tuning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 upgrade order tuning guide',
    description:
      'Forza Horizon 6 upgrade order guide for tires, weight reduction, brakes, suspension, aero, power, drivetrain swaps, class limits, and weekly event builds.',
    eyebrow: 'Upgrade order',
    intro:
      'A fast car can become worse when upgrades arrive in the wrong order. Pick the event, class, and handling problem first, then spend PI on the parts that make the car easier to test.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'Engine and drivetrain swaps',
        href: '/games/forza-horizon-6/guides/engine-swap-drivetrain-swap-guide',
      },
      {
        label: 'PI class planning',
        href: '/games/forza-horizon-6/guides/pi-class-upgrade-planning-guide',
      },
      {
        label: 'Power vs grip upgrades',
        href: '/games/forza-horizon-6/guides/power-vs-grip-upgrade-guide',
      },
      {
        label: 'Car database',
        href: '/games/forza-horizon-6/cars',
      },
      {
        label: 'A class road tune',
        href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
      },
      {
        label: 'Seasonal championship tuning',
        href: '/games/forza-horizon-6/guides/seasonal-championship-tuning',
      },
    ],
    sections: [
      {
        title: 'Set the class target first',
        body: 'Upgrade order only makes sense after the class target is clear. A B class learner, A class road car, S1 rally build, and S2 speed build spend PI differently.',
        bullets: [
          'Choose the event type before buying parts.',
          'Keep enough PI room for tires or handling if the route needs grip.',
          'Avoid adding power that pushes the car into the wrong class.',
        ],
      },
      {
        title: 'Spend PI on control before speed',
        body: 'Most player problems come from braking, rotation, or exit traction. Tires, weight, suspension, and brakes can make later power upgrades more useful.',
        bullets: [
          'Use tires when the car cannot hold line or launch cleanly.',
          'Use weight reduction when braking and direction changes feel heavy.',
          'Use power after the car repeats clean exits.',
        ],
      },
      {
        title: 'Keep a rollback version',
        body: 'A rollback save makes it easier to compare whether an upgrade actually improved the car. This matters for weekly restrictions and tune-code sharing.',
        bullets: [
          'Save a legal baseline before expensive swaps.',
          'Name builds by class, event, and main weakness.',
          'Retest the same route after each major upgrade group.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Upgrade order decision paths',
        description:
          'Use the current failure point to decide whether PI should go into grip, weight, braking, aero, power, or a swap.',
        cards: [
          {
            title: 'Car is fast but messy',
            body: 'The power upgrade may have arrived before the chassis was ready.',
            bullets: [
              'Back off power or shorten the test route.',
              'Add tire, suspension, or differential control.',
              'Use a safer class target for weekly events.',
            ],
          },
          {
            title: 'Car feels slow everywhere',
            body: 'If the car is stable but loses on every straight, power or gearing may finally be the right next spend.',
            bullets: [
              'Check top-speed and gearing guidance.',
              'Keep enough grip for exits.',
              'Compare lap time before judging horsepower alone.',
            ],
          },
          {
            title: 'Class limit is too tight',
            body: 'Some cars cannot fit every desired part inside a class. Pick the route requirement that matters most.',
            bullets: [
              'Prioritize tires for corner-heavy routes.',
              'Prioritize power for long speed sections.',
              'Use a different car if the compromise is too severe.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'tire-compound-upgrade-guide',
    title: 'Forza Horizon 6 Tire Compound Upgrade Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 tire compound upgrade guide',
    description:
      'Forza Horizon 6 tire compound upgrade guide for street, sport, semi-slick, slick, rally, offroad, drift, drag, PI cost, wet routes, and seasonal restrictions.',
    eyebrow: 'Tire upgrades',
    intro:
      'Tires can fix a car, waste PI, or push a build into the wrong class. Choose compound by surface, class target, and the mistake the car keeps making.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Upgrade order guide',
        href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
      },
      {
        label: 'Engine and drivetrain swaps',
        href: '/games/forza-horizon-6/guides/engine-swap-drivetrain-swap-guide',
      },
      {
        label: 'Tire pressure settings',
        href: '/games/forza-horizon-6/guides/tire-pressure-settings-guide',
      },
      {
        label: 'Cross-country tuning',
        href: '/games/forza-horizon-6/guides/cross-country-offroad-tuning',
      },
      {
        label: 'Drift zone scoring',
        href: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
      },
    ],
    sections: [
      {
        title: 'Match compound to the surface',
        body: 'A road tire can be wrong for dirt, and an offroad tire can waste grip on clean asphalt. Surface matters before horsepower.',
        bullets: [
          'Use road-focused tires for predictable braking and cornering.',
          'Use rally or offroad choices when bumps and dirt decide the route.',
          'Use drift or drag-focused choices only when the event demands it.',
        ],
      },
      {
        title: 'Watch the PI tradeoff',
        body: 'Better tires can consume enough PI to block power, aero, or weight reduction. The best compound is the one that solves the route without ruining the class target.',
        bullets: [
          'Avoid over-tiring low-power cars if they start to bog.',
          'Spend tire PI early when the car cannot put power down.',
          'Save a lower-grip version for class-restricted events.',
        ],
      },
      {
        title: 'Tune pressure after choosing compound',
        body: 'Tire pressure is the fine adjustment. Compound is the larger decision. Do not try to fix a wrong compound with tiny pressure changes.',
        bullets: [
          'Pick compound first, then pressure.',
          'Retest heat, grip, and exit behavior on the same route.',
          'Use pressure guidance when the tire choice is already close.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Tire compound decision paths',
        description:
          'Use surface, class, and handling symptoms to decide whether the tire choice needs to change.',
        cards: [
          {
            title: 'Road car slides everywhere',
            body: 'The compound may be too weak for the power, route, or weather.',
            bullets: [
              'Try a higher-grip road compound.',
              'Check tire pressure after the swap.',
              'Avoid adding power until exits are stable.',
            ],
          },
          {
            title: 'Car bogs after tire upgrade',
            body: 'The tire may have added more grip and PI cost than the engine can use.',
            bullets: [
              'Retest with a lower compound.',
              'Use gearing if the car falls out of power.',
              'Compare lap time rather than grip feel alone.',
            ],
          },
          {
            title: 'Mixed-surface event feels random',
            body: 'The wrong compound can make dirt, grass, or wet sections unpredictable.',
            bullets: [
              'Use rally or offroad guidance.',
              'Tune suspension for bumps.',
              'Keep a dedicated mixed-surface preset.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'engine-swap-drivetrain-swap-guide',
    title:
      'Forza Horizon 6 Engine Swap and Drivetrain Swap Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 engine swap and drivetrain swap guide',
    description:
      'Forza Horizon 6 engine swap and drivetrain swap guide for AWD conversions, RWD builds, power swaps, PI cost, class limits, traction, launch, and weekly tune planning.',
    eyebrow: 'Swap planning',
    intro:
      'Swaps can save a build or erase the reason a car was fun. Use engine and drivetrain swaps only when they solve a clear route, traction, class, or weekly restriction problem.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'Upgrade order guide',
        href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
      },
      {
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'AWD tune settings',
        href: '/games/forza-horizon-6/guides/best-awd-tune-settings',
      },
      {
        label: 'RWD tune settings',
        href: '/games/forza-horizon-6/guides/best-rwd-tune-settings',
      },
      {
        label: 'Launch control tuning',
        href: '/games/forza-horizon-6/guides/launch-control-tuning',
      },
    ],
    sections: [
      {
        title: 'Swap for a reason',
        body: 'A drivetrain or engine swap should solve a real problem: launch grip, class fit, top speed, route recovery, or event restriction. Swapping because it is available often makes testing harder.',
        bullets: [
          'Use AWD when launch and exit traction matter more than purity.',
          'Keep RWD when rotation, drift control, or lighter feel matters.',
          'Avoid engine swaps that consume PI but create traction problems.',
        ],
      },
      {
        title: 'Check PI cost and class fit',
        body: 'A swap can push the car into a class where it no longer has enough PI room for tires, brakes, or weight. Test the full build, not just the swap screen.',
        bullets: [
          'Confirm the final class before tuning.',
          'Leave room for tire and handling upgrades.',
          'Use a different car if the swap creates a bad compromise.',
        ],
      },
      {
        title: 'Retune after every swap',
        body: 'Swaps change weight, powerband, traction, gearing, and differential behavior. A setup that worked before the swap may no longer make sense.',
        bullets: [
          'Retest launch and low-speed exits first.',
          'Check gearing after engine swaps.',
          'Use differential guidance after drivetrain conversions.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Swap decision paths',
        description:
          'Use the build failure to decide whether a swap helps or just hides another setup problem.',
        cards: [
          {
            title: 'RWD car will not launch',
            body: 'AWD may help, but gearing, tires, and throttle control should be checked first.',
            bullets: [
              'Use launch tuning before swapping.',
              'Try tire and gearing changes.',
              'Use AWD if weekly consistency matters more than RWD feel.',
            ],
          },
          {
            title: 'AWD car refuses to rotate',
            body: 'The conversion may be pulling the car straight or adding too much stability.',
            bullets: [
              'Check center differential balance.',
              'Use alignment and ARB guidance.',
              'Consider a lighter RWD build for technical routes.',
            ],
          },
          {
            title: 'Engine swap makes the car worse',
            body: 'More power can expose weak tires, gearing, suspension, and braking.',
            bullets: [
              'Compare with the pre-swap baseline.',
              'Retune gearing and differential.',
              'Remove the swap if it ruins the class target.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'pi-class-upgrade-planning-guide',
    title: 'Forza Horizon 6 PI Class Upgrade Planning Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 PI class upgrade planning guide',
    description:
      'Forza Horizon 6 PI class upgrade planning guide for B, A, S1, S2 builds, class limits, tire cost, power budget, drivetrain choices, and weekly restrictions.',
    eyebrow: 'PI class planning',
    intro:
      'PI class planning keeps a build legal, useful, and testable. Pick the class target before buying parts, because every tire, weight, power, aero, and swap decision competes for the same PI budget.',
    primaryCta: {
      label: 'Open Car Database',
      href: '/games/forza-horizon-6/cars',
    },
    relatedLinks: [
      {
        label: 'Upgrade order guide',
        href: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
      },
      {
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'A class road tune',
        href: '/games/forza-horizon-6/guides/best-a-class-road-tune-settings',
      },
    ],
    sections: [
      {
        title: 'Choose the final class before parts',
        body: 'A build that accidentally crosses into the next class can become useless for a weekly event or comparison route. Start from the final class, not from the biggest upgrade list.',
        bullets: [
          'Use B and A for learning routes and low-risk weekly cars.',
          'Use S1 when the chassis can handle more speed.',
          'Use S2 only when the route rewards power and aero enough to justify it.',
        ],
      },
      {
        title: 'Reserve PI for the part that solves the route',
        body: 'PI should go where the route is failing. Tight road routes often need grip and braking. Long speed routes may justify power and aero. Dirt routes need recovery and surface control.',
        bullets: [
          'Reserve tire PI when exits or braking are unreliable.',
          'Reserve power PI when the car is already stable but slow.',
          'Reserve suspension or drivetrain PI when surface and launch matter.',
        ],
      },
      {
        title: 'Keep one legal weekly variant',
        body: 'Weekly restrictions can punish a build that only works at the edge of a class. Keep one conservative legal version so the car can be reused without a rebuild.',
        bullets: [
          'Name presets by class, drivetrain, and event type.',
          'Do not overwrite the last legal baseline.',
          'Use tune-code notes only after the class and restriction are confirmed.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'PI planning decision paths',
        description:
          'Use the route and restriction to decide where the PI budget should go first.',
        cards: [
          {
            title: 'Car is legal but slow',
            body: 'If the car is stable and still loses on every straight, the next PI spend can move toward power or gearing support.',
            bullets: [
              'Check whether the route has enough straight-line payoff.',
              'Avoid power that breaks exits.',
              'Retest the same straight after each upgrade group.',
            ],
          },
          {
            title: 'Car is fast but not repeatable',
            body: 'The build may be spending too much PI on power and too little on control.',
            bullets: [
              'Move budget back toward tires, weight, or brakes.',
              'Use a lower class target for weekly events.',
              'Compare lap consistency, not just best split.',
            ],
          },
          {
            title: 'Restriction leaves no room',
            body: 'Some cars simply do not fit a clean build inside a restriction. Switching cars can be smarter than forcing bad parts.',
            bullets: [
              'Compare class hubs and car pages.',
              'Keep the legal baseline for later.',
              'Use a different car if the compromise ruins the route.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'power-vs-grip-upgrade-guide',
    title: 'Forza Horizon 6 Power vs Grip Upgrade Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 power vs grip upgrade guide',
    description:
      'Forza Horizon 6 power vs grip upgrade guide for horsepower, tires, weight reduction, aero, launch traction, corner exits, class limits, and route testing.',
    eyebrow: 'Power vs grip',
    intro:
      'The fastest upgrade is not always more horsepower. Power only helps when the car can brake, rotate, launch, and exit cleanly on the route you are building for.',
    primaryCta: {
      label: 'Open Tune Calculator',
      href: '/tools/forza-horizon-6-tune-calculator',
    },
    relatedLinks: [
      {
        label: 'PI class planning',
        href: '/games/forza-horizon-6/guides/pi-class-upgrade-planning-guide',
      },
      {
        label: 'Tire compound upgrades',
        href: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
      },
      {
        label: 'Fix wheelspin',
        href: '/games/forza-horizon-6/guides/fix-wheelspin',
      },
    ],
    sections: [
      {
        title: 'Add power only after exits are clean',
        body: 'Extra power is wasted if the car spins, pushes wide, or needs early throttle lifts on every exit. Make the exit repeatable first.',
        bullets: [
          'Test one slow exit and one fast exit before buying power.',
          'Use gearing and tire choices if power cannot reach the road.',
          'Keep a lower-power version when weekly consistency matters.',
        ],
      },
      {
        title: 'Use grip when the route is technical',
        body: 'Technical city, mountain, wet, and mixed-surface routes can reward tire, weight, brake, suspension, and aero upgrades more than horsepower.',
        bullets: [
          'Spend on grip when braking zones and apexes decide the race.',
          'Spend on weight when the car feels heavy everywhere.',
          'Spend on aero only when corner speed pays back the drag cost.',
        ],
      },
      {
        title: 'Judge the full route, not one number',
        body: 'A higher speed trap number can still lose time if the car becomes slower through every braking zone and corner exit.',
        bullets: [
          'Compare full route time or repeated splits.',
          'Record whether mistakes increased after the upgrade.',
          'Use route-specific presets when one compromise cannot cover everything.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Power versus grip decision paths',
        description:
          'Use the current failure point to decide whether horsepower or control upgrades should come first.',
        cards: [
          {
            title: 'Loses on straights only',
            body: 'If the car is stable and exits cleanly, power or gearing may be the next useful spend.',
            bullets: [
              'Check top speed and shift recovery.',
              'Add power in a small group.',
              'Retest braking after the speed increase.',
            ],
          },
          {
            title: 'Loses in corners',
            body: 'Corner loss usually needs grip, weight, suspension, aero, or driver consistency before horsepower.',
            bullets: [
              'Use tire and alignment guidance first.',
              'Compare entry, mid-corner, and exit separately.',
              'Avoid hiding understeer with more power.',
            ],
          },
          {
            title: 'Launch is the whole problem',
            body: 'Launch problems can look like a power problem, but traction, gearing, differential, and drivetrain choice often matter more.',
            bullets: [
              'Use launch and wheelspin guides.',
              'Check tire compound and gearing.',
              'Consider AWD only if the event needs repeatable starts.',
            ],
          },
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
      label: 'Open understeer tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S1&issue=understeer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Understeer preset',
        href: '/tools/forza-horizon-6-tune-presets/s1-awd-road-understeer-balanced',
      },
      {
        label: 'Road racing cars',
        href: '/games/forza-horizon-6/best-road-racing-cars',
      },
      {
        label: 'Gear ratio calculator',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general FH6 build-and-tune reference. For understeer, the useful workflow is to diagnose entry, mid-corner, and exit behavior before changing unrelated sliders.',
      },
      {
        type: 'article',
        title: 'Comprehensive Tuning Guide: Road and Rally Tuning',
        sourceName: 'LuckyJumpx on r/ForzaHorizon6',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
        note: 'Used as a community reference for road and rally balance checks, including why route and drivetrain context matter before adding more front-end changes.',
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
    title: 'Fix FH6 Oversteer: Rear Steps Out Tuning Guide - Apex Tune Hub',
    h1: 'Fix FH6 oversteer when the rear steps out',
    description:
      'Fix Forza Horizon 6 oversteer with entry, exit, bump, RWD, rally, and street tuning checks before changing every slider.',
    eyebrow: 'Handling fix',
    intro:
      'If the rear steps out in FH6, tune the trigger first: braking, lift-off, throttle, bumps, or gearing. The goal is not to remove rotation; it is to make the car catchable.',
    primaryCta: {
      label: 'Open oversteer tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=rally&drive=RWD&class=A&issue=oversteer&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Rally oversteer preset',
        href: '/tools/forza-horizon-6-tune-presets/a-rwd-rally-oversteer-aggressive',
      },
      {
        label: 'Best rally cars',
        href: '/games/forza-horizon-6/best-rally-cars',
      },
      {
        label: 'Drift tune calculator',
        href: '/tools/forza-horizon-6-drift-tune-calculator',
      },
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
    ],
    intentClusters: [
      {
        query: 'fh6 oversteer',
        searchSignal: 'GSC: early clicks with high impressions',
        answer:
          'Land the user on a simple rear-step-out diagnosis, then route them to the oversteer preset in the tune calculator.',
        href: '/tools/forza-horizon-6-tune-calculator?race=rally&drive=RWD&class=A&issue=oversteer&style=balanced',
      },
      {
        query: 'forza horizon 5 oversteer',
        searchSignal: 'SEMrush: 20 US / 100 global',
        answer:
          'Use evergreen Forza handling language, but label the current workflow as FH6 and keep exact settings test-based.',
        href: '/games/forza-horizon-6/guides/fix-oversteer',
      },
      {
        query: 'rwd car spins on exit',
        searchSignal: 'Adjacent handling intent',
        answer:
          'Separate throttle oversteer from drift setup. If the goal is angle, send the user to the drift calculator.',
        href: '/tools/forza-horizon-6-drift-tune-calculator',
      },
      {
        query: 'car unstable after shifts',
        searchSignal: 'Gear-linked oversteer intent',
        answer:
          'If the rear only steps out after a shift, test gearing before changing every suspension slider.',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
    ],
    quickFixRows: [
      {
        trigger: 'Rear snaps on corner entry',
        likelyCause: 'Brake release, lift-off rotation, or too much front bite',
        firstTest:
          'Brake straighter, repeat the same entry, then soften the rear only if the snap repeats.',
        toolHref:
          '/tools/forza-horizon-6-tune-calculator?race=road&drive=RWD&class=S1&issue=oversteer&style=balanced',
      },
      {
        trigger: 'Rear steps out on throttle',
        likelyCause:
          'Power delivery, diff accel, short low gear, or rear tire load',
        firstTest:
          'Run the same exit at half throttle and full throttle before touching suspension.',
        toolHref:
          '/tools/forza-horizon-6-tune-calculator?race=street&drive=RWD&class=A&issue=oversteer&style=safe',
      },
      {
        trigger: 'Rally car rotates over bumps',
        likelyCause:
          'Stiff rear behavior, low compliance, or route-specific crest instability',
        firstTest:
          'Use one rough section as the proof route and keep a separate rally setup from road builds.',
        toolHref:
          '/tools/forza-horizon-6-tune-calculator?race=rally&drive=RWD&class=A&issue=oversteer&style=balanced',
      },
      {
        trigger: 'Slide appears after shifting',
        likelyCause:
          'Gear gap, torque spike, or first-to-second recovery issue',
        firstTest:
          'Open the gear tool and test final drive or the affected shift before adding grip everywhere.',
        toolHref:
          '/tools/forza-horizon-6-gear-ratio-calculator?race=road&gears=6&priority=balanced&issue=bogs-after-shift',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general FH6 build-and-tune reference. For this oversteer guide, the useful takeaway is to diagnose the build and route before making slider changes.',
      },
      {
        type: 'article',
        title: 'Comprehensive Tuning Guide: Road and Rally Tuning',
        sourceName: 'LuckyJumpx on r/ForzaHorizon6',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
        note: 'Used as a current community reference for road and rally tuning discussion, including drivetrain balance and setup order.',
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
    deepDive: [
      {
        title: 'Oversteer trigger diagnosis',
        description:
          'Use the moment the rear steps out to decide which setup group to touch first. The same slide can come from braking, throttle, bumps, or gearing.',
        cards: [
          {
            title: 'Entry oversteer',
            body: 'The rear rotates before throttle is applied. This usually points to braking balance, lift-off behavior, or front-to-rear grip balance.',
            bullets: [
              'Test a straight-brake entry before trail braking.',
              'Calm the setup only enough to keep rotation catchable.',
              'Avoid killing turn-in if the car only snaps on one corner type.',
            ],
          },
          {
            title: 'Exit oversteer',
            body: 'The car is stable until throttle arrives. Start with power delivery, differential, lower gears, and rear tire load before changing everything.',
            bullets: [
              'Repeat one slow exit at half throttle and full throttle.',
              'If first or second gear spikes the rear tires, check gearing.',
              'Use a safer tune calculator preset before adding more power.',
            ],
          },
          {
            title: 'Bump or rally oversteer',
            body: 'The rear steps out on rough surfaces, crests, or transitions. Suspension compliance and route-specific testing matter more than peak grip.',
            bullets: [
              'Retest on the same rough section after each change.',
              'Soften the nervous behavior without making the car float.',
              'Keep a separate rally version from the road build.',
            ],
          },
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
        label: 'Gear ratio calculator',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
      {
        label: 'Beginner tuning guide',
        href: '/games/forza-horizon-6/guides/beginner-tuning-guide',
      },
      {
        label: 'Best road racing cars',
        href: '/games/forza-horizon-6/best-road-racing-cars',
      },
      {
        label: 'Fix slow launch',
        href: '/games/forza-horizon-6/guides/fix-slow-launch',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general FH6 build-and-tune reference. For this gear guide, the video supports the build-first workflow before making final-drive or per-gear changes.',
      },
      {
        type: 'article',
        title: 'Comprehensive Tuning Guide: Road and Rally Tuning',
        sourceName: 'LuckyJumpx on r/ForzaHorizon6',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
        note: 'Used as a current community reference because it calls out the lack of individual-gearing discussion in early FH6 tuning content.',
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
      {
        title: 'Run a 45-minute gearing test',
        body: 'New players should test gearing like a small experiment. Use one launch point, one shift section, and one longest straight instead of changing ratios after every messy run.',
        bullets: [
          '0-10 minutes: drive the route with the current gearing and mark launch, shift, and top-speed symptoms.',
          '10-20 minutes: open the gear ratio calculator and move final drive only.',
          '20-35 minutes: run the same launch and straight twice before touching individual gears.',
          '35-45 minutes: screenshot the gear settings, route result, and the exact section where the car bogs, spins, or hits limiter.',
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
        title: 'Beginner gear testing checklist',
        description:
          'Use this checklist when you record your own FH6 footage or turn a YouTube gearing topic into a written guide. The point is to show what changed, not to chase a perfect universal ratio.',
        cards: [
          {
            title: 'Launch proof',
            body: 'Start every test from the same marker and compare the first two gears before judging top speed.',
            bullets: [
              'Record whether first gear bogs, spins, or hooks.',
              'Watch if second gear lands in useful power or falls flat.',
              'If launch is inconsistent, solve first gear before editing upper gears.',
            ],
          },
          {
            title: 'Shift proof',
            body: 'Use one section where the car shifts under load. The important note is where RPM lands after the shift.',
            bullets: [
              'If the car bogs after the shift, close the gap or shorten final drive.',
              'If the car spins after the shift, lengthen the affected range or calm the build.',
              'If only one gear pair is bad, avoid changing the whole gearbox again.',
            ],
          },
          {
            title: 'Top-speed proof',
            body: 'Use the longest useful straight in the real event, not an empty highway unless the build is for speed traps.',
            bullets: [
              'If limiter arrives early, lengthen final drive in small steps.',
              'If top gear never appears, shorten the gearing or lower the speed target.',
              'Keep lap time, route feel, and final speed in the same note.',
            ],
          },
        ],
      },
      {
        title: 'Gearing evidence to collect',
        description:
          'These are the screenshots and notes that make a future gear guide or member garage entry feel real.',
        cards: [
          {
            title: 'Screenshots',
            body: 'Capture the setup screen and the route result so the written guide has proof anchors.',
            bullets: [
              'Gear settings screen after the calculator pass.',
              'Car class, drivetrain, and tire type before the run.',
              'Finish screen or speed-zone result after the proof run.',
            ],
          },
          {
            title: 'Short clip',
            body: 'One short clip is more useful than a full unedited race when it shows the exact gearing symptom.',
            bullets: [
              'Launch and first-to-second shift for launch issues.',
              'One corner exit and post-shift RPM drop for bogging.',
              'The final straight for limiter or unused top gear issues.',
            ],
          },
          {
            title: 'Data note',
            body: 'Keep the note simple enough that it can become a saved preset or newsletter item later.',
            bullets: [
              'Car, route, gear count, priority, and symptom.',
              'Final-drive direction changed: shorter, longer, or unchanged.',
              'Decision: keep, soften, or revert after two proof runs.',
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
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 on Wheel: Advanced Wheel Tuning',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51642814113427-Forza-Horizon-6-on-Wheel-Advanced-Wheel-Tuning',
        note: 'Used as the official FH6 wheel reference for default-baseline testing, force feedback, steering sensitivity, deadzones, damper, center spring, and one-setting-at-a-time tuning.',
      },
      {
        type: 'article',
        title: 'FH6: Supported Wheels and Devices',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51674028831251-FH6-Supported-Wheels-and-Devices',
        note: 'Used as the official compatibility and driver/firmware reference before recommending hardware-specific wheel troubleshooting.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 on Wheel: Wheel Input on Steam',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51642975681427-Forza-Horizon-6-on-Wheel-Wheel-Input-on-Steam',
        note: 'Used for Steam-specific wheel input checks when axes, pedals, or force feedback direction appear mapped incorrectly.',
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
    deepDive: [
      {
        title: 'Wheel setup diagnosis',
        description:
          'Use this flow before changing the car tune. Most FH6 wheel problems are profile, firmware, axis, or force-feedback problems first.',
        cards: [
          {
            title: 'Wheel feels wrong in every car',
            body: 'Treat this as a wheel profile problem before blaming alignment or suspension. Start from default game and wheel software settings, then change one slider at a time.',
            bullets: [
              'Check driver and firmware updates first.',
              'Return to a readable default before chasing stronger force.',
              'Use one stable road car for every comparison pass.',
            ],
          },
          {
            title: 'Pedals or axes feel reversed',
            body: 'If throttle, brake, handbrake, or force feedback direction is flipped, solve input mapping before tuning the car. Steam users should check the official FH6 Steam input workflow.',
            bullets: [
              'Confirm the in-game input meter moves in the expected direction.',
              'Use invert controls only when the axis is truly reversed.',
              'Do not tune brakes or launch until pedal range is correct.',
            ],
          },
          {
            title: 'One car feels bad',
            body: 'If the wheel is readable in other cars, the problem probably belongs to the tune. Move from wheel setup into understeer, oversteer, braking, or gearing diagnosis.',
            bullets: [
              'Compare one known-stable car against the problem build.',
              'Keep wheel profile fixed while tuning the car.',
              'Save separate road, dirt, and drift wheel notes.',
            ],
          },
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
    slug: 'wheel-rotation-deadzone-settings',
    title:
      'Forza Horizon 6 Wheel Rotation and Deadzone Settings - Apex Tune Hub',
    h1: 'Forza Horizon 6 wheel rotation and deadzone settings',
    description:
      'Forza Horizon 6 wheel rotation and deadzone settings guide for steering lock, center feel, pedal deadzones, force feedback testing, drift recovery, and road racing precision.',
    eyebrow: 'Wheel rotation',
    intro:
      'Wheel rotation and deadzones decide whether FH6 feels precise or vague before the car tune even matters. Set a readable steering lock, remove center slack, protect pedal range, then test one road route and one drift section before changing alignment.',
    primaryCta: {
      label: 'Open Wheel Settings',
      href: '/settings/forza-horizon-6-wheel',
    },
    relatedLinks: [
      {
        label: 'Wheel setup guide',
        href: '/games/forza-horizon-6/guides/wheel-settings-guide',
      },
      {
        label: 'Wheel not working checklist',
        href: '/games/forza-horizon-6/guides/wheel-not-working-checklist',
      },
      {
        label: 'Logitech wheel settings',
        href: '/games/forza-horizon-6/guides/logitech-wheel-settings',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 on Wheel: Advanced Wheel Tuning',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51642814113427-Forza-Horizon-6-on-Wheel-Advanced-Wheel-Tuning',
        note: 'Used as the official FH6 source for steering sensitivity, steering deadzones, pedal deadzones, force feedback scale, damping, and rotation-related testing.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 on Wheel: Wheel Input on Steam',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51642975681427-Forza-Horizon-6-on-Wheel-Wheel-Input-on-Steam',
        note: 'Used for Steam wheel input cases where axis index, inversion, or force feedback direction may be mapped incorrectly.',
      },
    ],
    sections: [
      {
        title: 'Set steering lock before force strength',
        body: 'If steering lock is too wide, tight corners and drift recovery feel slow. If it is too narrow, road cars feel twitchy. Lock rotation before judging force feedback or car setup.',
        bullets: [
          'Use one road loop with slow corners and medium-speed sweepers.',
          'Do not change rotation and alignment in the same test.',
          'Keep a separate drift note if countersteer speed needs a different feel.',
        ],
      },
      {
        title: 'Remove center slack carefully',
        body: 'A small wheel deadzone can hide noisy input, but too much makes the front tires feel disconnected. Use the least deadzone that keeps the wheel stable around center.',
        bullets: [
          'Check whether the wheel reports input while held still.',
          'Raise inner deadzone only enough to remove unwanted movement.',
          'Retest understeer before changing toe or anti-roll bars.',
        ],
      },
      {
        title: 'Check pedals before tuning brakes',
        body: 'Throttle and brake deadzones change launches, trail braking, and exits. Confirm the pedals reach full range and return cleanly before tuning brake balance or gearing.',
        bullets: [
          'Check brake input before changing brake pressure.',
          'Check throttle range before blaming launch wheelspin.',
          'Record pedal hardware and profile notes with the tune.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Wheel rotation decision paths',
        description:
          'Use these checks to decide whether the next change belongs in the wheel profile, pedals, or car tune.',
        cards: [
          {
            title: 'Road car turns too slowly',
            body: 'Rotation may be too wide or center feel may be too soft. Fix steering profile before adding aggressive alignment.',
            bullets: [
              'Test the same corner with one rotation change.',
              'Keep force strength unchanged during this pass.',
              'Move to understeer tuning only if one car remains wide.',
            ],
          },
          {
            title: 'Drift recovery is late',
            body: 'Drift recovery needs readable countersteer. Too much rotation or deadzone can delay the catch.',
            bullets: [
              'Use one drift section for every steering-lock test.',
              'Keep camera and assists fixed while comparing.',
              'Use drift tuning only after wheel response is stable.',
            ],
          },
          {
            title: 'Pedals feel inconsistent',
            body: 'If braking or throttle changes by hardware position, tune the pedal range before the car.',
            bullets: [
              'Confirm pedals return to zero input.',
              'Confirm full brake and throttle range.',
              'Change brake balance only after input range is repeatable.',
            ],
          },
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
      label: 'Open wheelspin tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=street&drive=RWD&class=A&issue=wheelspin&style=stable',
    },
    relatedLinks: [
      {
        label: 'Wheelspin preset',
        href: '/tools/forza-horizon-6-tune-presets/a-rwd-street-wheelspin-stable',
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a build-first tuning reference. For wheelspin, the important takeaway is to separate build choice, gearing, and differential behavior before reducing power.',
      },
      {
        type: 'article',
        title: 'Comprehensive Tuning Guide: Road and Rally Tuning',
        sourceName: 'LuckyJumpx on r/ForzaHorizon6',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
        note: 'Used as a community reference for surface-specific tuning order and why traction fixes should stay tied to route and drivetrain.',
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
    deepDive: [
      {
        title: 'Wheelspin trigger map',
        description:
          'Use the moment the tires spin to decide whether the first change belongs in gearing, differential, suspension, or driving style.',
        cards: [
          {
            title: 'Launch wheelspin',
            body: 'The tires break loose before the car is pointed anywhere. First gear, launch grip, drivetrain, and throttle application matter more than corner balance.',
            bullets: [
              'Lengthen first gear only in small steps.',
              'Retest launch and first-to-second shift together.',
              'Use drag or street presets only when the surface matches.',
            ],
          },
          {
            title: 'Exit wheelspin',
            body: 'The car turns in, then wastes drive when throttle arrives. Start with power delivery, differential behavior, and rear tire load.',
            bullets: [
              'Repeat the same slow exit at half and full throttle.',
              'Avoid removing so much rotation that the car pushes wide.',
              'Use the main tune calculator if the problem includes understeer.',
            ],
          },
          {
            title: 'Bump wheelspin',
            body: 'The car loses traction after crests, rough surfaces, or rally transitions. Suspension compliance may be more important than horsepower.',
            bullets: [
              'Retest on the same rough section every time.',
              'Separate rally and road versions if the car has both roles.',
              'Do not chase one smooth-road setup for every surface.',
            ],
          },
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
      label: 'Open slow launch tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=rally&drive=RWD&class=B&issue=slow-launch&style=balanced',
    },
    relatedLinks: [
      {
        label: 'Slow launch preset',
        href: '/tools/forza-horizon-6-tune-presets/b-rwd-rally-slow-launch-balanced',
      },
      {
        label: 'A AWD dirt launch preset',
        href: '/tools/forza-horizon-6-tune-presets/a-awd-dirt-slow-launch-balanced',
      },
      {
        label: 'Gear ratio guide',
        href: '/games/forza-horizon-6/guides/gear-ratio-guide',
      },
      {
        label: 'Gear ratio calculator',
        href: '/tools/forza-horizon-6-gear-ratio-calculator',
      },
    ],
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general build-and-tune workflow source. For slow launch, the page applies that workflow to first gear, traction, and shift recovery tests.',
      },
      {
        type: 'article',
        title: 'Comprehensive Tuning Guide: Road and Rally Tuning',
        sourceName: 'LuckyJumpx on r/ForzaHorizon6',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
        note: 'Used as a community reference for road and rally setup order, especially why launch fixes should be tested on the target surface.',
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
    deepDive: [
      {
        title: 'Slow launch decision path',
        description:
          'A slow launch is not one problem. Separate bogging, wheelspin, first-shift loss, and surface mismatch before saving a setup.',
        cards: [
          {
            title: 'Bogging off the line',
            body: 'The car hooks but feels asleep. Shorter lower gearing or a different build direction may help before adding power.',
            bullets: [
              'Shorten final drive only if every gear feels lazy.',
              'Shorten first and second if only exits feel weak.',
              'Stop if the fix creates repeat wheelspin.',
            ],
          },
          {
            title: 'First shift loses the run',
            body: 'The launch is acceptable, but the car falls out of the power band after the first shift. Focus on the first-to-second gap.',
            bullets: [
              'Retest the same launch point three times.',
              'Close the affected gap instead of rewriting every gear.',
              'Use the gear ratio calculator when the symptom is repeatable.',
            ],
          },
          {
            title: 'Surface mismatch',
            body: 'A launch setup that works on asphalt may spin or bog on dirt. Surface and tire choice should be labelled before the preset is shared.',
            bullets: [
              'Keep dirt, rally, street, and drag launch notes separate.',
              'Test with the same assists and route start.',
              'Promote the setup only after the surface is clear.',
            ],
          },
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
      label: 'Open braking tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=dirt&drive=AWD&class=S1&issue=unstable-braking&style=stable',
    },
    relatedLinks: [
      {
        label: 'Braking preset',
        href: '/tools/forza-horizon-6-tune-presets/s1-awd-dirt-unstable-braking-stable',
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general FH6 tuning workflow reference. For braking instability, the page applies the build-first approach to brake platform, surface, and rotation tests.',
      },
      {
        type: 'article',
        title: 'Comprehensive Tuning Guide: Road and Rally Tuning',
        sourceName: 'LuckyJumpx on r/ForzaHorizon6',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
        note: 'Used as a community reference for road and rally tuning order, especially separating smooth-road balance from bump and surface behavior.',
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
    deepDive: [
      {
        title: 'Braking instability trigger map',
        description:
          'Use the first moment the car becomes unstable to decide whether the fix belongs in brakes, differential, suspension, or driver input.',
        cards: [
          {
            title: 'Straight-line wandering',
            body: 'The car moves around before steering input. Treat this as a platform or surface problem before changing corner-exit tuning.',
            bullets: [
              'Use one smooth braking zone and one bumpy braking zone.',
              'Keep steering input minimal during the first test.',
              'Retest suspension changes before touching differential.',
            ],
          },
          {
            title: 'Trail-brake snap',
            body: 'The car is stable straight, then rotates too fast as steering arrives. Brake balance, rear stability, and lift-off behavior are the first checks.',
            bullets: [
              'Repeat light trail braking on one medium-speed corner.',
              'Calm only the trigger that creates the snap.',
              'Use the oversteer guide if the rear steps out after brake release.',
            ],
          },
          {
            title: 'Lockup or long stopping',
            body: 'The car refuses to slow down cleanly. Confirm tire grip, brake pressure, and route surface before assuming more power is the issue.',
            bullets: [
              'Compare stopping distance before and after each change.',
              'Avoid adding power until braking is repeatable.',
              'Save a stable weekly-event setup separately from an aggressive rivals setup.',
            ],
          },
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
      label: 'Open top speed tune calculator',
      href: '/tools/forza-horizon-6-tune-calculator?race=road&drive=AWD&class=S2&issue=poor-top-speed&style=aggressive',
    },
    relatedLinks: [
      {
        label: 'Top speed preset',
        href: '/tools/forza-horizon-6-tune-presets/s2-awd-road-poor-top-speed-aggressive',
      },
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general build-and-tune reference. For top speed, the useful workflow is to confirm route value, gearing, and build direction before adding power.',
      },
      {
        type: 'article',
        title: 'Comprehensive Tuning Guide: Road and Rally Tuning',
        sourceName: 'LuckyJumpx on r/ForzaHorizon6',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tqg50m/comprehensive_tuning_guide_road_and_rally_tuning/',
        note: 'Used as a community reference for route-specific trade-offs, including why speed-trap and road-race builds should not be treated as the same setup.',
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
    deepDive: [
      {
        title: 'Top speed problem sorter',
        description:
          'Poor top speed can mean limiter, drag, power, aero, or a route that does not actually reward top end. Sort the problem before changing upgrades.',
        cards: [
          {
            title: 'Limiter before the straight ends',
            body: 'The gearing is too short for the route. Lengthen final drive first, then check whether launch and lower gears still feel alive.',
            bullets: [
              'Move final drive in small steps.',
              'Retest the longest useful straight, not an empty highway only.',
              'Use the gear ratio calculator before changing every gear.',
            ],
          },
          {
            title: 'Car will not pull higher speed',
            body: 'The car may lack power for the target, carry too much drag, or sit outside its useful power band. More gear length alone can make it slower.',
            bullets: [
              'Compare speed gain after each shift.',
              'Check aero and tire drag before adding horsepower.',
              'Protect acceleration if the route has many exits.',
            ],
          },
          {
            title: 'Fast number but slow race',
            body: 'The build has a strong top-speed number but loses because exits, braking, or fast corners are worse. Treat it as a race setup problem.',
            bullets: [
              'Compare lap time and speed trap separately.',
              'Keep a speed-trap version separate from road racing.',
              'Return to the main tune calculator if the car now understeers or spins.',
            ],
          },
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general tuning workflow reference. For drift settings, this page narrows the workflow to recoverable angle, usable drift gears, and repeatable transitions.',
      },
      {
        type: 'article',
        title: 'FH6 Tune Help: Drifting',
        sourceName: 'r/ForzaHorizon discussion',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon/comments/1tmoauc/fh6_tune_help_drifting/',
        note: 'Used as community context for drift-specific tuning questions, especially separating drift goals from road-race stability.',
      },
      {
        type: 'article',
        title: 'Tips for Tuning a car for Drifting?',
        sourceName: 'r/ForzaHorizon6 discussion',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon6/comments/1tt763j/tips_for_tuning_a_car_for_drifting/',
        note: 'Used as a second community drift reference for practical setup checks and why drift pages should focus on initiation, hold, and recovery.',
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
    deepDive: [
      {
        title: 'Drift setup diagnosis',
        description:
          'Name the part of the slide that fails before changing power, gearing, differential, or suspension.',
        cards: [
          {
            title: 'Fails on initiation',
            body: 'The car will not start the slide cleanly or snaps too hard. Focus on steering response, weight transfer, and entry speed before adding more power.',
            bullets: [
              'Use the same entry speed on each test.',
              'Reduce snap before chasing bigger angle.',
              'Check controller or wheel settings if every car feels delayed.',
            ],
          },
          {
            title: 'Fails while holding angle',
            body: 'The car either bogs mid-corner or lights the tires instantly. Gearing and throttle delivery are the first places to look.',
            bullets: [
              'Pick one main drift gear for the test section.',
              'Lengthen if tires smoke instantly and kill direction.',
              'Shorten if the car falls out of power mid-drift.',
            ],
          },
          {
            title: 'Fails on recovery',
            body: 'The car cannot catch the next transition or straightens too late. Tune for rhythm, not one dramatic isolated slide.',
            bullets: [
              'Use linked corners for recovery tests.',
              'Keep a safer version for weekly drift zones.',
              'Move to the drift tune calculator when the failure point is clear.',
            ],
          },
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
    mediaSources: [
      {
        type: 'article',
        title: 'FH6: Supported Wheels and Devices',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51674028831251-FH6-Supported-Wheels-and-Devices',
        note: 'Used as the official FH6 Logitech compatibility and G Hub driver reminder before suggesting in-game force feedback changes.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 on Wheel: Advanced Wheel Tuning',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51642814113427-Forza-Horizon-6-on-Wheel-Advanced-Wheel-Tuning',
        note: 'Used for official FH6 guidance around damper, center spring, force feedback scale, and how Logitech wheels can need lighter damping than stronger direct-drive bases.',
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
    deepDive: [
      {
        title: 'Logitech wheel symptom map',
        description:
          'Use this map for G29, G920, G923, and similar Logitech setups before changing the car tune.',
        cards: [
          {
            title: 'Wheel feels heavy but vague',
            body: 'High force, center spring, or damper can make a Logitech wheel feel busy without adding useful tire detail. Reduce profile weight before changing suspension.',
            bullets: [
              'Lower heavy force if every car feels like the same wall.',
              'Retest understeer with one stable road car.',
              'Change car alignment only after wheel detail returns.',
            ],
          },
          {
            title: 'Noisy center or weak tire feel',
            body: 'A gear-driven wheel can chatter around center. The goal is readable slip, not silence. Adjust damping carefully so it does not hide understeer or braking lockup.',
            bullets: [
              'Use small damper changes, then retest the same corner.',
              'Keep steering lock fixed during the test.',
              'Avoid masking tire slip with too much center force.',
            ],
          },
          {
            title: 'Wheel not detected correctly',
            body: 'Treat this as setup and compatibility first. Check G Hub, firmware, USB path, and supported-device notes before editing FH6 tune settings.',
            bullets: [
              'Update Logitech G Hub before testing FH6 again.',
              'Plug the wheelbase directly into the PC when possible.',
              'Confirm the steering input meter moves correctly in-game.',
            ],
          },
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general tuning workflow reference. For controller drift, the useful layer is separating input feel from car setup before changing power or gearing.',
      },
      {
        type: 'article',
        title: 'FH6 Tune Help: Drifting',
        sourceName: 'r/ForzaHorizon discussion',
        sourceUrl:
          'https://www.reddit.com/r/ForzaHorizon/comments/1tmoauc/fh6_tune_help_drifting/',
        note: 'Used as community context for drift-specific tuning questions and controller-friendly setup checks.',
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
    deepDive: [
      {
        title: 'Controller drift diagnosis',
        description:
          'Separate controller feel from car setup before changing power, gearing, or differential settings.',
        cards: [
          {
            title: 'Every car feels twitchy',
            body: 'This usually points to controller settings, deadzone, steering response, or assists before it points to one car tune.',
            bullets: [
              'Check deadzone and steering response first.',
              'Use a low-power drift car for comparison.',
              'Keep assists and camera fixed during the test.',
            ],
          },
          {
            title: 'Only one car snaps',
            body: 'If the input feels fine in other cars, tune the problem car around oversteer, gearing, and differential behavior.',
            bullets: [
              'Open the oversteer guide for rear snap.',
              'Use the drift calculator once the failure point is clear.',
              'Save a calmer weekly version before sharpening angle.',
            ],
          },
          {
            title: 'Throttle control fails',
            body: 'Controller drift needs smooth throttle before big power. If half throttle already spins, fix delivery before adding horsepower.',
            bullets: [
              'Test half throttle and full throttle on the same corner.',
              'Lengthen gearing if tires light instantly.',
              'Use moderate power until transitions are repeatable.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'thrustmaster-wheel-settings',
    title:
      'Best Thrustmaster Wheel Settings for Forza Horizon 6 - Apex Tune Hub',
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
    mediaSources: [
      {
        type: 'article',
        title: 'FH6: Supported Wheels and Devices',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51674028831251-FH6-Supported-Wheels-and-Devices',
        note: 'Used as the official FH6 Thrustmaster compatibility, driver, firmware, and model-selection reference before tuning in-game settings.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 on Wheel: Advanced Wheel Tuning',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51642814113427-Forza-Horizon-6-on-Wheel-Advanced-Wheel-Tuning',
        note: 'Used for official FH6 wheel tuning concepts: force feedback scale, center spring, damper, road feel, load sensitivity, and steering sensitivity.',
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
    deepDive: [
      {
        title: 'Thrustmaster wheel setup checks',
        description:
          'Use this checklist when a T150, TMX, T300, TX, TS-XW, or similar Thrustmaster wheel feels wrong in FH6.',
        cards: [
          {
            title: 'Model mapping looks wrong',
            body: 'Some Thrustmaster bases can share identifiers or need correct model selection. Fix recognition before tuning steering feel.',
            bullets: [
              'Install current Thrustmaster drivers and firmware.',
              'Confirm the selected model and button mapping in-game.',
              'Retest before changing force feedback or car tune settings.',
            ],
          },
          {
            title: 'Braking entry feels numb',
            body: 'Use braking zones to separate wheel feel from car setup. If front-load information is hidden in every car, tune the wheel profile first.',
            bullets: [
              'Test one smooth braking zone and one bumpy braking zone.',
              'Adjust damper or road feel in small steps.',
              'Move to brake balance only after input feel is readable.',
            ],
          },
          {
            title: 'Drift recovery is too slow',
            body: 'A calm road profile can feel delayed during drift. Use a separate drift pass before assuming the car needs more angle or power.',
            bullets: [
              'Keep steering lock and assists fixed during comparison.',
              'Lower resistance if countersteer cannot catch the slide.',
              'Retest with a known stable drift setup before editing gears.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'fanatec-moza-wheel-settings',
    title:
      'Best Fanatec and Moza Wheel Settings for Forza Horizon 6 - Apex Tune Hub',
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
    mediaSources: [
      {
        type: 'article',
        title: 'FH6: Supported Wheels and Devices',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51674028831251-FH6-Supported-Wheels-and-Devices',
        note: 'Used as the official FH6 Fanatec and MOZA compatibility reference, including driver, firmware, partial-support, multi-USB, and missing-force-feedback checks.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 on Wheel: Advanced Wheel Tuning',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51642814113427-Forza-Horizon-6-on-Wheel-Advanced-Wheel-Tuning',
        note: 'Used for official FH6 force feedback concepts around clipping, center spring, damper, road feel, load sensitivity, mechanical trail, and steering sensitivity.',
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
    deepDive: [
      {
        title: 'Direct-drive wheel setup checks',
        description:
          'Use this flow for Fanatec and MOZA bases before assuming a powerful wheel needs an aggressive car tune.',
        cards: [
          {
            title: 'Force feedback is missing',
            body: 'Treat missing FFB as device order, USB, driver, firmware, or support-status first. The tune cannot fix a wheelbase that is not receiving force output.',
            bullets: [
              'Check official support status for the exact base.',
              'Plug the wheelbase directly into the PC when possible.',
              'Disconnect extra USB devices if the wheel is not Device 1.',
            ],
          },
          {
            title: 'Every corner feels clipped',
            body: 'Direct-drive strength can saturate force output. Lower strength until tire load changes are readable again, then test car setup.',
            bullets: [
              'Use one high-load corner for force comparison.',
              'Lower force before changing every suspension setting.',
              'Keep damper and center spring notes with the profile.',
            ],
          },
          {
            title: 'Fast straights oscillate',
            body: 'Oscillation is usually a wheel-profile issue before it is a car-tune issue. Calm the wheel without hiding understeer or slide detail.',
            bullets: [
              'Add damping in small steps only when needed.',
              'Retest a straight, a bumpy road, and a drift recovery.',
              'Keep separate road and drift direct-drive profiles.',
            ],
          },
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning process reference. This drag page focuses the process on launch repeatability, first shift behavior, and gear spacing.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as background context for treating gearing and differential changes as controlled tests instead of one-shot magic numbers.',
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This rally page applies the process to bumps, mixed surfaces, AWD recovery, and weekly-safe baselines.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as context for treating suspension, damping, gearing, and differential changes as separate rally tests.',
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This Japan route checklist applies it to route type, corner family, and repeatable setup notes.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 complete tuning guide',
        sourceName: 'Forza Guide',
        sourceUrl: 'https://forza.guide/fh6/tuning/',
        note: 'Used as supporting context for connecting route symptoms to tuning categories.',
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a general tuning workflow reference. The A class road page applies it to low-power grip, braking stability, and repeatable corner exits.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 complete tuning guide',
        sourceName: 'Forza Guide',
        sourceUrl: 'https://forza.guide/fh6/tuning/',
        note: 'Used as supporting context for road-race tuning concepts. Keep page values as starting points until route screenshots and timing notes are collected.',
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
    mediaSources: [
      {
        type: 'video',
        title:
          'How To Build & Tune in Forza Horizon 6 | Basic Refresher & FH6 Changes Guide',
        sourceName: 'HokiHoshi on YouTube',
        sourceUrl: 'https://www.youtube.com/watch?v=I9bUB3mcqso',
        embedUrl: 'https://www.youtube-nocookie.com/embed/I9bUB3mcqso',
        note: 'Used as a tuning workflow reference. This S1 rally page focuses that workflow on recovery after bumps, AWD exit rotation, and playlist-safe setup notes.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 advanced tuning guide',
        sourceName: 'ForzaFire',
        sourceUrl:
          'https://www.forzafire.com/guides/forza-horizon-6-advanced-tuning',
        note: 'Used as supporting context for suspension and drivetrain test order on mixed-surface builds.',
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
    deepDive: [
      {
        title: 'S1 rally setup checkpoints',
        description:
          'S1 rally builds need power, but the useful tune is the one that recovers after rough sections and mixed-grip exits.',
        cards: [
          {
            title: 'Rough exit recovery',
            body: 'Use one bumpy corner exit as the repeatable test. If the car lands sideways or spins after the bump, solve suspension and throttle behavior before adding speed.',
            bullets: [
              'Raise or soften only enough to keep tire contact.',
              'Retest the same rough exit after every damping change.',
              'Do not shorten gearing if the car already spins after landing.',
            ],
          },
          {
            title: 'Mixed-surface braking',
            body: 'S1 rally cars often feel good on dirt until they hit a paved braking zone. A useful setup must slow down cleanly on both surfaces.',
            bullets: [
              'Use one dirt braking zone and one paved braking zone.',
              'Fix rear instability before adding front bite.',
              'Keep a safer brake setup for weekly playlist events.',
            ],
          },
          {
            title: 'AWD exit rotation',
            body: 'AWD should help the car pull out of corners, not drag it wide. If throttle makes the car understeer, tune differential behavior before changing every tire setting.',
            bullets: [
              'Compare half throttle and full throttle on the same exit.',
              'Check whether the front axle is pulling the car straight.',
              'Use the gear ratio calculator if exits feel asleep after shifts.',
            ],
          },
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
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 official source tracker',
        sourceName: 'Apex Tune Hub',
        sourceUrl: '/games/forza-horizon-6/official-sources',
        note: 'Used as the internal source policy for weekly playlist claims and update checks.',
      },
      {
        type: 'article',
        title: 'Forza Horizon 6 weekly playlist tracker',
        sourceName: 'Apex Tune Hub',
        sourceUrl: '/games/forza-horizon-6/weekly-playlist',
        note: 'Used as the operational tracker for event restrictions, legal car picks, tune presets, and reusable weekly notes.',
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
    deepDive: [
      {
        title: 'Weekly event prep workflow',
        description:
          'A weekly playlist tune has to be fast enough, legal for the restriction, and forgiving under traffic or messy attempts.',
        cards: [
          {
            title: 'Restriction pass',
            body: 'Start by writing the required class, car type, region, drivetrain, and surface. This prevents wasting time on a build that cannot enter the event.',
            bullets: [
              'Record class and car type before choosing upgrades.',
              'Check whether the event is road, dirt, drift, speed, or stunt.',
              'Keep one backup car for common restrictions.',
            ],
          },
          {
            title: 'Reliability pass',
            body: 'A weekly tune should survive traffic, bumps, and imperfect inputs. The fastest clean run is less useful than a setup that wins repeatedly.',
            bullets: [
              'Favor braking stability and exit traction.',
              'Avoid extreme gearing unless the objective is speed based.',
              'Test with a conservative first run before sharpening the tune.',
            ],
          },
          {
            title: 'Reuse pass',
            body: 'Every weekly build should create future value. Save the preset link and tag it by class, surface, drivetrain, and solved problem.',
            bullets: [
              'Link successful builds to tune preset pages.',
              'Move repeated car picks into the car database.',
              'Update the weekly tracker when rewards or restrictions change.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'difficulty-settings-guide',
    title: 'Forza Horizon 6 Difficulty Settings Guide - Apex Tune Hub',
    h1: 'Forza Horizon 6 difficulty settings guide',
    description:
      'Forza Horizon 6 difficulty settings guide for assists, Drivatar difficulty, rewind, racing line, manual shifting, rewards, and weekly event consistency.',
    eyebrow: 'Difficulty settings',
    intro:
      'Difficulty settings should make FH6 easier to learn without hiding the problem you are trying to fix. Tune assists, AI difficulty, rewind, racing line, and shifting one step at a time so the car still teaches you something.',
    primaryCta: {
      label: 'Open Assist Settings',
      href: '/games/forza-horizon-6/guides/best-assist-settings',
    },
    relatedLinks: [
      {
        label: 'HUD and accessibility',
        href: '/games/forza-horizon-6/guides/hud-accessibility-settings',
      },
      {
        label: 'Manual transmission',
        href: '/games/forza-horizon-6/guides/manual-transmission-guide',
      },
      {
        label: 'Weekly playlist checklist',
        href: '/games/forza-horizon-6/guides/weekly-playlist-tuning-checklist',
      },
    ],
    mediaSources: [
      {
        type: 'article',
        title: 'Forza Horizon 6 Known Issues',
        sourceName: 'Forza Support',
        sourceUrl:
          'https://support.forza.net/hc/en-us/articles/51701860097811-Forza-Horizon-6-Known-Issues',
        note: 'Used as an official checkpoint before treating difficulty, assists, or performance behavior as only a player-settings issue.',
      },
      {
        type: 'article',
        title: 'FH6 Known Issues and Bug Reporting',
        sourceName: 'Forza Forums',
        sourceUrl:
          'https://forums.forza.net/t/fh6-known-issues-and-bug-reporting-at-the-forza-feedback-portal/826214',
        note: 'Used as a known-issues reference before changing difficulty or assists around temporary event, input, or performance symptoms.',
      },
    ],
    sections: [
      {
        title: 'Change learning aids before AI pace',
        body: 'If a route is new, keep racing line, rewind, and stable assists available while learning braking markers. Raise AI difficulty only after the car repeats the route cleanly.',
        bullets: [
          'Use braking line while learning blind corners or wet routes.',
          'Keep rewind on when practicing route knowledge, then reduce reliance later.',
          'Do not raise AI pace while the car still misses braking zones.',
        ],
      },
      {
        title: 'Separate assist changes from tune changes',
        body: 'Traction control, stability control, ABS, shifting mode, and steering help change how the car feels. Test them separately from differential, tire pressure, gearing, and brake balance.',
        bullets: [
          'Change one assist group, then drive the same route again.',
          'If every car improves, keep working in settings.',
          'If only one car remains bad, move to the tune calculator or handling guides.',
        ],
      },
      {
        title: 'Use weekly events as the consistency test',
        body: 'A difficulty setup is good when it helps you finish restricted events without making the car feel numb. Weekly playlists are a useful test because they mix traffic, surfaces, and car limits.',
        bullets: [
          'Use a safer difficulty profile for co-op and restricted events.',
          'Keep manual shifting changes separate from car tune tests.',
          'Save a note when a setting helps repeated wins, not just one clean run.',
        ],
      },
    ],
    deepDive: [
      {
        title: 'Difficulty setting decision paths',
        description:
          'Use these paths to decide whether the next change belongs in difficulty, input settings, or the car tune.',
        cards: [
          {
            title: 'New route learning',
            body: 'Keep visibility and recovery aids active until braking zones and route flow are predictable.',
            bullets: [
              'Use racing line for unfamiliar route sections.',
              'Use rewind while learning corner order.',
              'Move to HUD settings if the route is hard to read.',
            ],
          },
          {
            title: 'Car control problem',
            body: 'If the car spins, pushes wide, or locks brakes after settings are stable, the tune needs the next pass.',
            bullets: [
              'Use assist settings before changing multiple sliders.',
              'Use handling guides for one-car problems.',
              'Keep the same difficulty profile while retuning.',
            ],
          },
          {
            title: 'Weekly win problem',
            body: 'If repeated weekly events fail, favor consistency over maximum reward multipliers until the car and route are stable.',
            bullets: [
              'Lower AI pace only when the event is the blocker.',
              'Keep safe assists for co-op and traffic-heavy races.',
              'Use weekly playlist notes to save the working profile.',
            ],
          },
        ],
      },
    ],
  },
];

export function getForzaHorizon6Guide(slug: string) {
  return forzaHorizon6Guides.find((guide) => guide.slug === slug);
}
