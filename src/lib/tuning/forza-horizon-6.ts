export type RaceType =
  | 'road'
  | 'street'
  | 'dirt'
  | 'rally'
  | 'cross-country'
  | 'drift'
  | 'drag';
export type Drivetrain = 'FWD' | 'RWD' | 'AWD';
export type ClassBand = 'D' | 'C' | 'B' | 'A' | 'S1' | 'S2' | 'X';
export type HandlingIssue =
  | 'understeer'
  | 'oversteer'
  | 'wheelspin'
  | 'slow-launch'
  | 'unstable-braking'
  | 'poor-top-speed';
export type DrivingStyle = 'stable' | 'balanced' | 'aggressive';

export type TuneInput = {
  raceType: RaceType;
  drivetrain: Drivetrain;
  classBand: ClassBand;
  handlingIssue: HandlingIssue;
  drivingStyle: DrivingStyle;
};

export type DriftInput = {
  drivetrain: Extract<Drivetrain, 'RWD' | 'AWD'>;
  powerLevel: 'low' | 'medium' | 'high';
  tireGrip: 'street' | 'sport' | 'race' | 'drift';
  problem:
    | 'spins-out'
    | 'no-angle'
    | 'bogs-down'
    | 'snaps-back'
    | 'too-slippery';
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
};

export type GearInput = {
  raceType: RaceType;
  gears: '4' | '5' | '6' | '7' | '8' | '9' | '10';
  priority: 'acceleration' | 'balanced' | 'top-speed';
  symptom:
    | 'hits-limiter'
    | 'never-top-gear'
    | 'slow-launch'
    | 'bogs-after-shift'
    | 'wheelspin';
};

export type Recommendation = {
  setting: string;
  recommendation: string;
  why: string;
  test: string;
};

export type CalculationResult = {
  title: string;
  summary: string;
  confidence: 'baseline' | 'needs-testing' | 'situational';
  recommendations: Recommendation[];
};

export const raceTypeOptions: Array<{ value: RaceType; label: string }> = [
  { value: 'road', label: 'Road racing' },
  { value: 'street', label: 'Street racing' },
  { value: 'dirt', label: 'Dirt' },
  { value: 'rally', label: 'Rally / touge' },
  { value: 'cross-country', label: 'Cross-country' },
  { value: 'drift', label: 'Drift' },
  { value: 'drag', label: 'Drag' },
];

export const drivetrainOptions: Array<{ value: Drivetrain; label: string }> = [
  { value: 'AWD', label: 'AWD' },
  { value: 'RWD', label: 'RWD' },
  { value: 'FWD', label: 'FWD' },
];

export const classOptions: Array<{ value: ClassBand; label: string }> = [
  { value: 'D', label: 'D class' },
  { value: 'C', label: 'C class' },
  { value: 'B', label: 'B class' },
  { value: 'A', label: 'A class' },
  { value: 'S1', label: 'S1 class' },
  { value: 'S2', label: 'S2 class' },
  { value: 'X', label: 'X class' },
];

export const issueOptions: Array<{ value: HandlingIssue; label: string }> = [
  { value: 'understeer', label: 'Pushes wide / understeer' },
  { value: 'oversteer', label: 'Rear steps out / oversteer' },
  { value: 'wheelspin', label: 'Too much wheelspin' },
  { value: 'slow-launch', label: 'Slow launch' },
  { value: 'unstable-braking', label: 'Unstable braking' },
  { value: 'poor-top-speed', label: 'Poor top speed' },
];

export const styleOptions: Array<{ value: DrivingStyle; label: string }> = [
  { value: 'stable', label: 'Stable' },
  { value: 'balanced', label: 'Balanced' },
  { value: 'aggressive', label: 'Aggressive' },
];

const surfaceMap: Record<RaceType, string> = {
  road: 'Keep the car low and controlled. Prioritize clean rotation and braking stability.',
  street:
    'Use a road baseline, but keep a little more stability for traffic, bumps, and sharp exits.',
  dirt: 'Add compliance. The car needs to absorb bumps instead of skipping across the surface.',
  rally:
    'Favor rotation and suspension travel. Leave room for rough surfaces and quick direction changes.',
  'cross-country':
    'Raise the car, soften the setup, and favor stability over peak corner speed.',
  drift:
    'Use the drift calculator for better guidance. This baseline should prioritize angle control.',
  drag: 'Prioritize launch, traction, and straight-line gearing over corner balance.',
};

export function calculateTune(input: TuneInput): CalculationResult {
  const recommendations: Recommendation[] = [
    {
      setting: 'Baseline direction',
      recommendation: surfaceMap[input.raceType],
      why: 'Race surface changes the tuning target more than any single slider.',
      test: 'Run the same route twice and only change one category at a time.',
    },
    tirePressure(input),
    alignment(input),
    antiRollBars(input),
    suspension(input),
    differential(input),
    gearing(input),
  ];

  return {
    title: 'Forza Horizon 6 baseline tune',
    summary: `${input.classBand} ${input.drivetrain} ${input.raceType} setup for a ${input.drivingStyle} driver with ${issueLabel(input.handlingIssue).toLowerCase()}.`,
    confidence:
      input.classBand === 'X' || input.raceType === 'drift'
        ? 'situational'
        : 'baseline',
    recommendations,
  };
}

export function calculateDriftTune(input: DriftInput): CalculationResult {
  const isAwd = input.drivetrain === 'AWD';
  const skillNote =
    input.skillLevel === 'beginner'
      ? 'Favor predictability over maximum angle.'
      : input.skillLevel === 'advanced'
        ? 'You can accept a more reactive car if it holds angle better.'
        : 'Use a balanced setup and adjust one issue at a time.';

  const recommendations: Recommendation[] = [
    {
      setting: 'Drivetrain direction',
      recommendation: isAwd
        ? 'Use AWD for easier recovery and longer linked drifts. Bias the tune toward rear rotation.'
        : 'Use RWD for cleaner angle control and more natural throttle steering.',
      why: isAwd
        ? 'AWD is forgiving but can pull the car straight.'
        : 'RWD is expressive but punishes abrupt throttle.',
      test: 'Hold one long corner before testing transitions.',
    },
    {
      setting: 'Alignment',
      recommendation:
        input.problem === 'no-angle'
          ? 'Increase front bite and make the car more willing to rotate.'
          : input.problem === 'spins-out'
            ? 'Reduce the most aggressive alignment choices and make the rear calmer.'
            : 'Start with a front-bite drift alignment, then soften if the car snaps.',
      why: 'Drift alignment controls how quickly the car initiates and how it catches transitions.',
      test: 'Enter a medium-speed corner and check whether the car catches smoothly.',
    },
    {
      setting: 'Differential',
      recommendation:
        input.problem === 'too-slippery' || input.problem === 'spins-out'
          ? 'Reduce lock until throttle inputs stop turning into instant spins.'
          : 'Increase lock if the car will not hold angle under throttle.',
      why: 'Differential lock controls how aggressively both driven wheels rotate together.',
      test: 'Use second or third gear and hold a steady throttle through one corner.',
    },
    {
      setting: 'Gearing',
      recommendation:
        input.problem === 'bogs-down'
          ? 'Shorten the active drift gears so the engine stays in the power band.'
          : 'Keep the main drift gears close enough that the car does not fall out of boost or torque.',
      why: 'A drift car needs usable torque during the slide, not only a high top speed.',
      test: 'Check whether one gear can carry a whole corner without bouncing the limiter.',
    },
    {
      setting: 'Tires',
      recommendation:
        input.tireGrip === 'race'
          ? 'Race grip may make the car harder to slide. Consider a less grippy compound for beginner drift builds.'
          : 'Use enough grip to control the car, but not so much that it refuses to rotate.',
      why: 'Too much grip can prevent initiation; too little grip makes transitions messy.',
      test: 'Try one corner at constant throttle and watch whether angle builds gradually.',
    },
    {
      setting: 'Driver note',
      recommendation: skillNote,
      why: 'A setup that looks fast on paper is useless if the driver cannot repeat it.',
      test: 'Do three runs and keep the setup only if the third run is easier than the first.',
    },
  ];

  return {
    title: 'Forza Horizon 6 drift tune baseline',
    summary: `${input.drivetrain} drift setup for a ${input.skillLevel} driver. Main issue: ${driftProblemLabel(input.problem).toLowerCase()}.`,
    confidence: 'baseline',
    recommendations,
  };
}

export function calculateGearRatio(input: GearInput): CalculationResult {
  const finalDrive = gearFinalDrive(input);
  const spacing = gearSpacing(input);

  return {
    title: 'Forza Horizon 6 gear ratio baseline',
    summary: `${input.gears}-speed ${input.raceType} gearing with ${input.priority.replace('-', ' ')} priority.`,
    confidence: 'baseline',
    recommendations: [
      finalDrive,
      spacing,
      {
        setting: 'Launch test',
        recommendation:
          input.symptom === 'wheelspin'
            ? 'Lengthen first gear slightly or reduce launch aggression before changing every gear.'
            : 'Use first and second gear as the launch test before tuning top-end ratios.',
        why: 'Many bad gear tunes start with fixing top speed before the car can launch cleanly.',
        test: 'Launch three times from the same point and watch first-to-second behavior.',
      },
      {
        setting: 'Top-speed test',
        recommendation:
          input.symptom === 'hits-limiter'
            ? 'Lengthen final drive or the top gear until the car stops hitting the limiter early.'
            : 'If the car never reaches top gear, shorten the upper gears or reduce top-speed target.',
        why: 'A useful top gear should be reachable on the intended route.',
        test: 'Use the longest straight in your target event, not an unrealistic highway-only test.',
      },
    ],
  };
}

export function formatResultForClipboard(result: CalculationResult): string {
  return [
    result.title,
    result.summary,
    '',
    ...result.recommendations.flatMap((item) => [
      `${item.setting}: ${item.recommendation}`,
      `Why: ${item.why}`,
      `Test: ${item.test}`,
      '',
    ]),
    'Generated by Apex Tune Hub. Treat as a baseline and test in-game.',
  ].join('\n');
}

function tirePressure(input: TuneInput): Recommendation {
  const rough =
    input.raceType === 'dirt' ||
    input.raceType === 'rally' ||
    input.raceType === 'cross-country';
  return {
    setting: 'Tire pressure',
    recommendation:
      input.handlingIssue === 'wheelspin'
        ? 'Lower driven tire pressure slightly for more launch grip, then test heat and response.'
        : rough
          ? 'Use a more forgiving pressure direction for bumps and uneven surfaces.'
          : 'Start near a balanced road pressure, then adjust front or rear based on grip loss.',
    why: 'Tire pressure changes contact feel, heat behavior, and how quickly the car responds.',
    test: 'Run two laps and watch whether grip fades or the car feels lazy.',
  };
}

function alignment(input: TuneInput): Recommendation {
  return {
    setting: 'Alignment',
    recommendation:
      input.handlingIssue === 'understeer'
        ? 'Add front bite gradually before making big suspension changes.'
        : input.handlingIssue === 'oversteer'
          ? 'Calm the rear and avoid an overly sharp front-end setup.'
          : 'Use a moderate alignment baseline and tune after tire pressure feels stable.',
    why: 'Alignment is one of the fastest ways to change corner entry and mid-corner grip.',
    test: 'Use a medium-speed corner and check whether the car misses apexes or rotates too quickly.',
  };
}

function antiRollBars(input: TuneInput): Recommendation {
  return {
    setting: 'Anti-roll bars',
    recommendation:
      input.handlingIssue === 'understeer'
        ? 'Soften the front direction or add rear rotation carefully.'
        : input.handlingIssue === 'oversteer'
          ? 'Calm rear rotation and avoid making the rear too stiff.'
          : 'Keep ARBs balanced until you know whether the car needs more rotation or more stability.',
    why: 'ARBs shape how the car transfers weight and rotates through corners.',
    test: 'Check one corner entry and one corner exit separately.',
  };
}

function suspension(input: TuneInput): Recommendation {
  const rough =
    input.raceType === 'dirt' ||
    input.raceType === 'rally' ||
    input.raceType === 'cross-country';
  return {
    setting: 'Springs and ride height',
    recommendation: rough
      ? 'Use a softer, taller setup than road racing so the car can absorb bumps.'
      : input.drivingStyle === 'aggressive'
        ? 'Use a controlled setup that responds quickly without making the car nervous.'
        : 'Use a stable setup before lowering or stiffening too much.',
    why: 'Suspension controls platform stability, bump absorption, and confidence at speed.',
    test: 'Drive over curbs, crests, or rough exits and watch for bouncing or sudden grip loss.',
  };
}

function differential(input: TuneInput): Recommendation {
  const awd = input.drivetrain === 'AWD';
  return {
    setting: 'Differential',
    recommendation:
      input.handlingIssue === 'wheelspin'
        ? 'Reduce aggressive lock or torque delivery until exits are repeatable.'
        : awd
          ? 'Use AWD balance to add traction without making the car refuse to rotate.'
          : 'Tune acceleration lock around corner-exit behavior, not only straight-line launch.',
    why: 'Differential settings decide how power turns into rotation, traction, or wheelspin.',
    test: 'Exit the same slow corner three times and compare throttle confidence.',
  };
}

function gearing(input: TuneInput): Recommendation {
  return {
    setting: 'Gearing',
    recommendation:
      input.handlingIssue === 'poor-top-speed'
        ? 'Lengthen final drive or upper gears until the car has room to pull on long straights.'
        : input.handlingIssue === 'slow-launch'
          ? 'Shorten lower gearing carefully, but stop if wheelspin gets worse.'
          : 'Keep gearing matched to the event type before chasing top speed.',
    why: 'Good gearing keeps the engine useful in the part of the race that matters most.',
    test: 'Use the longest straight and slowest exit in your target event.',
  };
}

function gearFinalDrive(input: GearInput): Recommendation {
  const recommendation =
    input.symptom === 'hits-limiter'
      ? 'Lengthen final drive so the car has more speed before limiter.'
      : input.symptom === 'slow-launch' || input.priority === 'acceleration'
        ? 'Shorten final drive until launch improves, then back off if wheelspin appears.'
        : input.priority === 'top-speed'
          ? 'Lengthen final drive and confirm the car can still pull the last gear.'
          : 'Use a balanced final drive and tune individual gears after testing.';

  return {
    setting: 'Final drive',
    recommendation,
    why: 'Final drive moves the whole gearbox shorter or longer.',
    test: 'Change final drive first, then individual gears only if one part still feels wrong.',
  };
}

function gearSpacing(input: GearInput): Recommendation {
  return {
    setting: 'Gear spacing',
    recommendation:
      input.symptom === 'bogs-after-shift'
        ? 'Close the gap around the problem shift so RPM does not fall too far.'
        : input.symptom === 'never-top-gear'
          ? 'Shorten upper gears or accept fewer usable gears for the event.'
          : input.raceType === 'drag'
            ? 'Prioritize clean launch and strong mid-range shifts over corner exit flexibility.'
            : 'Keep lower gears responsive and upper gears long enough for the target route.',
    why: 'Gear spacing controls whether the engine stays in its useful power band.',
    test: 'Watch the RPM drop after each shift during the part of the event that matters most.',
  };
}

function issueLabel(issue: HandlingIssue): string {
  return issueOptions.find((option) => option.value === issue)?.label ?? issue;
}

function driftProblemLabel(problem: DriftInput['problem']): string {
  const labels: Record<DriftInput['problem'], string> = {
    'spins-out': 'Spins out',
    'no-angle': 'Cannot hold angle',
    'bogs-down': 'Bogs down',
    'snaps-back': 'Snaps back on transition',
    'too-slippery': 'Feels too slippery',
  };
  return labels[problem];
}
