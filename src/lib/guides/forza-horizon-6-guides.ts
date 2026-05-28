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
    title: 'Forza Horizon 6 HUD and Accessibility Settings Guide - Apex Tune Hub',
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
    title: 'Forza Horizon 6 Brake Balance and Pressure Settings - Apex Tune Hub',
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
    title: 'Forza Horizon 6 Anti-Roll Bar and Suspension Settings - Apex Tune Hub',
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
];

export function getForzaHorizon6Guide(slug: string) {
  return forzaHorizon6Guides.find((guide) => guide.slug === slug);
}
