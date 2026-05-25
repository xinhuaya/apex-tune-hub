import type { TuneInput } from '@/lib/tuning/forza-horizon-6';

export type ForzaTunePreset = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  input: TuneInput;
  targetCars: string[];
  routeUse: string;
  tuningIntent: string;
  checklist: string[];
};

export const forzaTunePresets: ForzaTunePreset[] = [
  {
    slug: 's1-awd-road-understeer-balanced',
    title: 'S1 AWD Road Understeer Tune Preset - Forza Horizon 6',
    h1: 'S1 AWD road tune preset for understeer',
    description:
      'A shareable Forza Horizon 6 S1 AWD road racing tune preset for cars that push wide or miss apexes.',
    eyebrow: 'S1 AWD road preset',
    input: {
      raceType: 'road',
      drivetrain: 'AWD',
      classBand: 'S1',
      handlingIssue: 'understeer',
      drivingStyle: 'balanced',
    },
    targetCars: [
      '2025 Toyota GR GT Prototype',
      '2005 Honda NSX-R',
      '2020 Toyota GR Supra',
    ],
    routeUse:
      'Use this preset on fast road routes where the car has traction but refuses to rotate into medium-speed corners.',
    tuningIntent:
      'Add front bite and controlled rotation without making the rear nervous on exit.',
    checklist: [
      'Run one clean lap before changing anything.',
      'Watch whether the car misses the apex before or after throttle.',
      'Adjust front bite first, then differential if exits still feel flat.',
      'Save a car-specific version only after two repeatable laps.',
    ],
  },
  {
    slug: 'a-rwd-rally-oversteer-aggressive',
    title: 'A Class RWD Rally Oversteer Tune Preset - Forza Horizon 6',
    h1: 'A class RWD rally tune preset for oversteer',
    description:
      'A Forza Horizon 6 A class RWD rally preset for twitchy cars on mixed surface and touge-style routes.',
    eyebrow: 'A RWD rally preset',
    input: {
      raceType: 'rally',
      drivetrain: 'RWD',
      classBand: 'A',
      handlingIssue: 'oversteer',
      drivingStyle: 'aggressive',
    },
    targetCars: ['2022 Toyota GR86', '2003 Honda S2000', '1992 Honda NSX-R'],
    routeUse:
      'Use this preset when a lightweight RWD car rotates well but snaps too quickly on rough exits or elevation changes.',
    tuningIntent:
      'Keep the car eager on turn-in while calming the rear enough to survive bumps and quick transitions.',
    checklist: [
      'Test braking on a downhill section.',
      'Check if snap happens before throttle or after throttle.',
      'Do not add power until the rear catches predictably.',
      'Compare rally and road suspension before locking the build.',
    ],
  },
  {
    slug: 'a-rwd-street-wheelspin-stable',
    title: 'A Class RWD Street Wheelspin Tune Preset - Forza Horizon 6',
    h1: 'A class RWD street tune preset for wheelspin',
    description:
      'A stable Forza Horizon 6 A class RWD street preset for cars that light up tires out of slow corners.',
    eyebrow: 'A RWD street preset',
    input: {
      raceType: 'street',
      drivetrain: 'RWD',
      classBand: 'A',
      handlingIssue: 'wheelspin',
      drivingStyle: 'stable',
    },
    targetCars: [
      '1998 Toyota Supra RZ',
      '1997 Mazda RX-7',
      '2020 Toyota GR Supra',
    ],
    routeUse:
      'Use this preset on street routes with slow exits, bumps, and traffic where throttle confidence matters more than peak power.',
    tuningIntent:
      'Calm power delivery and improve driven-tire grip without making the car lazy.',
    checklist: [
      'Launch three times from the same point.',
      'Exit one slow corner at half throttle and full throttle.',
      'Back off differential aggression if wheelspin keeps returning.',
      'Only shorten gearing if traction remains repeatable.',
    ],
  },
  {
    slug: 'b-rwd-rally-slow-launch-balanced',
    title: 'B Class RWD Rally Slow Launch Preset - Forza Horizon 6',
    h1: 'B class RWD rally tune preset for slow launch',
    description:
      'A Forza Horizon 6 B class RWD rally preset for lower-power cars that feel sluggish leaving tight corners.',
    eyebrow: 'B RWD rally preset',
    input: {
      raceType: 'rally',
      drivetrain: 'RWD',
      classBand: 'B',
      handlingIssue: 'slow-launch',
      drivingStyle: 'balanced',
    },
    targetCars: ['1985 Toyota Sprinter Trueno GT Apex', '2022 Toyota GR86'],
    routeUse:
      'Use this preset on technical routes where momentum cars lose too much speed after hairpins or uphill exits.',
    tuningIntent:
      'Improve launch and lower-gear response while keeping the car controllable on mixed surfaces.',
    checklist: [
      'Test one uphill exit and one flat exit.',
      'Shorten lower gearing before adding power.',
      'Watch for new wheelspin after every launch improvement.',
      'Keep ride height and damping forgiving for rough sections.',
    ],
  },
  {
    slug: 's1-awd-dirt-unstable-braking-stable',
    title: 'S1 AWD Dirt Braking Stability Preset - Forza Horizon 6',
    h1: 'S1 AWD dirt tune preset for unstable braking',
    description:
      'A Forza Horizon 6 S1 AWD dirt preset for cars that wander, bounce, or rotate too sharply under braking.',
    eyebrow: 'S1 AWD dirt preset',
    input: {
      raceType: 'dirt',
      drivetrain: 'AWD',
      classBand: 'S1',
      handlingIssue: 'unstable-braking',
      drivingStyle: 'stable',
    },
    targetCars: ['2025 Toyota GR GT Prototype', '2005 Honda NSX-R'],
    routeUse:
      'Use this preset for fast dirt or mixed events where braking zones are rough enough to unsettle the car.',
    tuningIntent:
      'Make braking calmer before chasing corner speed or top-end power.',
    checklist: [
      'Brake in a straight line first, then trail brake lightly.',
      'Check if instability comes from bumps or rear rotation.',
      'Soften the platform before making differential changes.',
      'Retest after lowering power if the build is too sharp.',
    ],
  },
  {
    slug: 's2-awd-road-poor-top-speed-aggressive',
    title: 'S2 AWD Road Top Speed Tune Preset - Forza Horizon 6',
    h1: 'S2 AWD road tune preset for poor top speed',
    description:
      'A Forza Horizon 6 S2 AWD road preset for high-class builds that accelerate hard but run out of speed.',
    eyebrow: 'S2 AWD road preset',
    input: {
      raceType: 'road',
      drivetrain: 'AWD',
      classBand: 'S2',
      handlingIssue: 'poor-top-speed',
      drivingStyle: 'aggressive',
    },
    targetCars: ['2025 Toyota GR GT Prototype'],
    routeUse:
      'Use this preset on faster road routes where the car is stable but hits its gearing or aero ceiling too early.',
    tuningIntent:
      'Open up top-end speed without destroying launch, braking confidence, or corner exit grip.',
    checklist: [
      'Use the longest straight in the target route, not a highway-only test.',
      'Lengthen final drive before changing every gear.',
      'Watch if aero changes create new understeer.',
      'Compare lap time, not only speed trap numbers.',
    ],
  },
  {
    slug: 'a-awd-road-understeer-stable',
    title: 'A Class AWD Road Understeer Tune Preset - Forza Horizon 6',
    h1: 'A class AWD road tune preset for understeer',
    description:
      'A stable Forza Horizon 6 A class AWD road preset for builds that feel safe but push wide through apexes.',
    eyebrow: 'A AWD road preset',
    input: {
      raceType: 'road',
      drivetrain: 'AWD',
      classBand: 'A',
      handlingIssue: 'understeer',
      drivingStyle: 'stable',
    },
    targetCars: ['2020 Toyota GR Supra', '1992 Honda NSX-R', '2022 Toyota GR86'],
    routeUse:
      'Use this preset on road routes where AWD traction is strong but the front tires wash out before the car points at the exit.',
    tuningIntent:
      'Improve turn-in and mid-corner rotation while keeping the build friendly for longer championship routes.',
    checklist: [
      'Run a medium-speed corner twice before changing settings.',
      'Check if the push starts on entry, middle, or throttle exit.',
      'Add front response before reducing rear grip.',
      'Only chase aggression after the car hits apexes consistently.',
    ],
  },
  {
    slug: 's1-rwd-road-oversteer-balanced',
    title: 'S1 RWD Road Oversteer Tune Preset - Forza Horizon 6',
    h1: 'S1 RWD road tune preset for oversteer',
    description:
      'A balanced Forza Horizon 6 S1 RWD road preset for fast builds that rotate too sharply on entry or exit.',
    eyebrow: 'S1 RWD road preset',
    input: {
      raceType: 'road',
      drivetrain: 'RWD',
      classBand: 'S1',
      handlingIssue: 'oversteer',
      drivingStyle: 'balanced',
    },
    targetCars: ['2005 Honda NSX-R', '1997 Mazda RX-7', '1998 Toyota Supra RZ'],
    routeUse:
      'Use this preset when a high-class RWD road build is quick in clean air but loses time from snap rotation or nervous exits.',
    tuningIntent:
      'Calm the rear without muting the rotation that makes RWD cars fast on technical road sections.',
    checklist: [
      'Separate entry oversteer from throttle oversteer.',
      'Test one braking zone and one second-gear exit.',
      'Reduce snap before adding final-drive aggression.',
      'Keep lap time notes so stability changes do not hide lost speed.',
    ],
  },
  {
    slug: 'b-fwd-street-understeer-stable',
    title: 'B Class FWD Street Understeer Tune Preset - Forza Horizon 6',
    h1: 'B class FWD street tune preset for understeer',
    description:
      'A stable Forza Horizon 6 B class FWD street preset for compact builds that scrub speed and miss tight city apexes.',
    eyebrow: 'B FWD street preset',
    input: {
      raceType: 'street',
      drivetrain: 'FWD',
      classBand: 'B',
      handlingIssue: 'understeer',
      drivingStyle: 'stable',
    },
    targetCars: ['1985 Toyota Sprinter Trueno GT Apex', '2022 Toyota GR86'],
    routeUse:
      'Use this preset for lower-class street routes where braking, curbs, and traffic make front-end grip more important than peak speed.',
    tuningIntent:
      'Help the car rotate without making a forgiving FWD build unstable under braking or throttle lift.',
    checklist: [
      'Brake earlier for one lap, then compare a later-brake lap.',
      'Watch whether front tires slide before throttle is applied.',
      'Do not overcorrect with rear stiffness on bumpy streets.',
      'Tune for repeatable corner exits, not one perfect slide.',
    ],
  },
  {
    slug: 's1-awd-rally-wheelspin-balanced',
    title: 'S1 AWD Rally Wheelspin Tune Preset - Forza Horizon 6',
    h1: 'S1 AWD rally tune preset for wheelspin',
    description:
      'A Forza Horizon 6 S1 AWD rally preset for mixed-surface builds that break traction after jumps, crests, or slow exits.',
    eyebrow: 'S1 AWD rally preset',
    input: {
      raceType: 'rally',
      drivetrain: 'AWD',
      classBand: 'S1',
      handlingIssue: 'wheelspin',
      drivingStyle: 'balanced',
    },
    targetCars: ['2025 Toyota GR GT Prototype', '2005 Honda NSX-R'],
    routeUse:
      'Use this preset on rally routes where the car lands well but wastes time spinning all four tires after rough exits.',
    tuningIntent:
      'Keep AWD launch strength while smoothing power delivery and platform movement on uneven surfaces.',
    checklist: [
      'Test one flat launch and one crest exit.',
      'Check tire spin after landing before changing gearing.',
      'Soften the platform if traction loss follows bumps.',
      'Retest with partial throttle before increasing power.',
    ],
  },
  {
    slug: 'a-awd-dirt-slow-launch-balanced',
    title: 'A Class AWD Dirt Slow Launch Preset - Forza Horizon 6',
    h1: 'A class AWD dirt tune preset for slow launch',
    description:
      'A balanced Forza Horizon 6 A class AWD dirt preset for cars that bog down out of hairpins or uphill sections.',
    eyebrow: 'A AWD dirt preset',
    input: {
      raceType: 'dirt',
      drivetrain: 'AWD',
      classBand: 'A',
      handlingIssue: 'slow-launch',
      drivingStyle: 'balanced',
    },
    targetCars: ['2020 Toyota GR Supra', '2022 Toyota GR86', '2003 Honda S2000'],
    routeUse:
      'Use this preset when an AWD dirt build is easy to drive but loses races because it cannot pull hard from slow corners.',
    tuningIntent:
      'Improve low-speed response while preserving the traction and stability that make AWD dirt builds reliable.',
    checklist: [
      'Time a hairpin exit before changing final drive.',
      'Watch for bogging after the first upshift.',
      'Shorten lower gears in small steps.',
      'Stop if the fix creates wheelspin on loose exits.',
    ],
  },
  {
    slug: 's2-awd-drag-wheelspin-aggressive',
    title: 'S2 AWD Drag Wheelspin Tune Preset - Forza Horizon 6',
    h1: 'S2 AWD drag tune preset for wheelspin',
    description:
      'An aggressive Forza Horizon 6 S2 AWD drag preset for high-power builds that launch hard but waste grip early.',
    eyebrow: 'S2 AWD drag preset',
    input: {
      raceType: 'drag',
      drivetrain: 'AWD',
      classBand: 'S2',
      handlingIssue: 'wheelspin',
      drivingStyle: 'aggressive',
    },
    targetCars: ['2025 Toyota GR GT Prototype', '1998 Toyota Supra RZ'],
    routeUse:
      'Use this preset for drag and speed-zone testing when the car has enough power but cannot apply it cleanly in the first seconds.',
    tuningIntent:
      'Turn launch violence into usable acceleration before chasing a taller top gear or more peak horsepower.',
    checklist: [
      'Launch from the same line three times.',
      'Record whether spin happens instantly or after the first shift.',
      'Change launch behavior before changing top gear.',
      'Compare elapsed time, not only trap speed.',
    ],
  },
];

export function getForzaTunePreset(slug: string) {
  return forzaTunePresets.find((preset) => preset.slug === slug);
}

export function getRelatedForzaTunePresets(
  preset: ForzaTunePreset,
  limit = 3
) {
  return forzaTunePresets
    .filter((item) => item.slug !== preset.slug)
    .map((item) => {
      const sharedTargets = item.targetCars.filter((car) =>
        preset.targetCars.includes(car)
      ).length;
      const score =
        (item.input.raceType === preset.input.raceType ? 4 : 0) +
        (item.input.handlingIssue === preset.input.handlingIssue ? 4 : 0) +
        (item.input.classBand === preset.input.classBand ? 3 : 0) +
        (item.input.drivetrain === preset.input.drivetrain ? 2 : 0) +
        (item.input.drivingStyle === preset.input.drivingStyle ? 1 : 0) +
        sharedTargets * 2;

      return { item, score };
    })
    .sort((a, b) => b.score - a.score || a.item.slug.localeCompare(b.item.slug))
    .slice(0, limit)
    .map(({ item }) => item);
}

export function getPresetCalculatorUrl(preset: ForzaTunePreset) {
  const params = new URLSearchParams({
    race: preset.input.raceType,
    drive: preset.input.drivetrain,
    class: preset.input.classBand,
    issue: preset.input.handlingIssue,
    style: preset.input.drivingStyle,
  });

  return `/tools/forza-horizon-6-tune-calculator?${params.toString()}`;
}
