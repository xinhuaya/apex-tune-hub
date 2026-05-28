import { forzaHorizon6BestCarGuides } from '@/lib/guides/forza-horizon-6-best-car-guides';
import { forzaHorizon6ClassCarGuides } from '@/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6Guides } from '@/lib/guides/forza-horizon-6-guides';
import { forzaHorizon6MakeCarGuides } from '@/lib/guides/forza-horizon-6-make-car-guides';
import { getBaseUrl } from '@/lib/urls';

export const revalidate = 3600;

const feedUpdatedAt = new Date('2026-05-29T00:00:00.000Z');

type FeedItem = {
  title: string;
  path: string;
  description: string;
  category: string;
};

const feedItems: FeedItem[] = [
  {
    title: 'Forza Horizon 6 official source tracker added',
    path: '/games/forza-horizon-6/official-sources',
    description:
      'Apex Tune Hub now keeps official FH6 FAQ, release, map, and car-list links in one source tracker.',
    category: 'Source tracking',
  },
  {
    title: 'Forza Horizon 6 tuning hub',
    path: '/games/forza-horizon-6',
    description:
      'The main FH6 hub links calculators, guides, car pages, settings, weekly playlist notes, and Car Pass tracking.',
    category: 'Hub',
  },
  {
    title: 'Forza Horizon 6 release status',
    path: '/games/forza-horizon-6/release-status',
    description:
      'A source-backed release status page for Xbox, PC, Steam, Game Pass, Steam Deck, PS5 timing, and next Apex Tune Hub paths.',
    category: 'Release status',
  },
  {
    title: 'Forza Horizon 6 crossplay and cross-save',
    path: '/games/forza-horizon-6/crossplay-cross-save',
    description:
      'Source-backed FH6 platform switching guide for crossplay, cross-save, Steam, Xbox app, Steam Deck, PS5, and ownership checks.',
    category: 'Platform guide',
  },
  {
    title: 'Forza Horizon 6 Game Pass and editions',
    path: '/games/forza-horizon-6/game-pass-editions',
    description:
      'Source-backed FH6 buying guide for Game Pass, Standard, Deluxe, Premium, Premium Upgrade, Car Pass, VIP, and expansions.',
    category: 'Buying guide',
  },
  {
    title: 'Forza Horizon 6 Steam vs Xbox app',
    path: '/games/forza-horizon-6/steam-vs-xbox-app',
    description:
      'PC storefront guide comparing Steam, Xbox app, PC Game Pass, Steam Deck, Play Anywhere, cross-save, and add-on ownership.',
    category: 'PC platform guide',
  },
  {
    title: 'Forza Horizon 6 PS5 release tracker',
    path: '/games/forza-horizon-6/ps5-release',
    description:
      'Source-backed PS5 tracker covering PlayStation 5 timing, wishlist status, crossplay, cross-save, editions, and what is not confirmed yet.',
    category: 'PS5 tracker',
  },
  {
    title: 'Forza Horizon 6 PC requirements',
    path: '/games/forza-horizon-6/pc-requirements',
    description:
      'Steam-listed FH6 minimum and recommended PC requirements with SSD, storage, upgrade priority, and settings handoff notes.',
    category: 'PC requirements',
  },
  {
    title: 'Forza Horizon 6 tune calculator',
    path: '/tools/forza-horizon-6-tune-calculator',
    description:
      'Generate baseline setup notes by race type, drivetrain, class, handling issue, and tuning style.',
    category: 'Tool',
  },
  {
    title: 'Forza Horizon 6 guide library',
    path: '/games/forza-horizon-6/guides',
    description:
      'Beginner tuning, upgrade planning, handling fixes, device settings, event builds, and long-tail FH6 setup guides.',
    category: 'Guides',
  },
  {
    title: 'Forza Horizon 6 upgrade order tuning guide',
    path: '/games/forza-horizon-6/guides/upgrade-order-tuning-guide',
    description:
      'Upgrade order guide for class limits, tire spend, weight reduction, brakes, suspension, aero, power, and weekly event builds.',
    category: 'Upgrade planning',
  },
  {
    title: 'Forza Horizon 6 PI class upgrade planning guide',
    path: '/games/forza-horizon-6/guides/pi-class-upgrade-planning-guide',
    description:
      'PI class planning guide for keeping FH6 upgrades inside B, A, S1, S2, road, rally, drift, and weekly event limits.',
    category: 'Upgrade planning',
  },
  {
    title: 'Forza Horizon 6 tire compound upgrade guide',
    path: '/games/forza-horizon-6/guides/tire-compound-upgrade-guide',
    description:
      'Tire compound guide for spending PI on grip, braking, launch traction, wet-route stability, rally tires, and drift tire choices.',
    category: 'Upgrade planning',
  },
  {
    title: 'Forza Horizon 6 power vs grip upgrade guide',
    path: '/games/forza-horizon-6/guides/power-vs-grip-upgrade-guide',
    description:
      'Power-vs-grip guide for deciding when an FH6 build needs horsepower, tires, aero, weight reduction, or safer exits.',
    category: 'Upgrade planning',
  },
  {
    title: 'Forza Horizon 6 engine and drivetrain swap guide',
    path: '/games/forza-horizon-6/guides/engine-swap-drivetrain-swap-guide',
    description:
      'Engine and drivetrain swap guide for route fit, class limits, AWD conversions, RWD builds, weekly restrictions, and tune validation.',
    category: 'Upgrade planning',
  },
  {
    title: 'Forza Horizon 6 PC crash and known issues checklist',
    path: '/games/forza-horizon-6/guides/pc-crash-known-issues-checklist',
    description:
      'Troubleshooting checklist for FH6 crashes, stutter, launch failures, Steam or Xbox app installs, drivers, SSD space, overlays, and support-ready notes.',
    category: 'Troubleshooting',
  },
  {
    title: 'Forza Horizon 6 low FPS and stutter guide',
    path: '/games/forza-horizon-6/guides/fix-low-fps-stutter',
    description:
      'Performance guide for FH6 low FPS, stutter, SSD install checks, VRAM pressure, frame targets, overlays, drivers, and Steam Deck tradeoffs.',
    category: 'Performance',
  },
  {
    title: 'Forza Horizon 6 PC graphics settings guide',
    path: '/games/forza-horizon-6/guides/best-pc-graphics-settings',
    description:
      'PC graphics guide for FH6 balanced FPS, VRAM pressure, textures, shadows, reflections, frame caps, upscaling, and route testing.',
    category: 'PC graphics',
  },
  {
    title: 'Forza Horizon 6 wheel not working checklist',
    path: '/games/forza-horizon-6/guides/wheel-not-working-checklist',
    description:
      'Troubleshooting checklist for FH6 wheel detection, force feedback, rotation, deadzones, Logitech, Thrustmaster, Fanatec, and Moza setup paths.',
    category: 'Wheel troubleshooting',
  },
  {
    title: 'Forza Horizon 6 controller not working checklist',
    path: '/games/forza-horizon-6/guides/controller-not-working-checklist',
    description:
      'Troubleshooting checklist for FH6 controller detection, Steam Input, Bluetooth, USB, double input, deadzones, vibration, and steering feel.',
    category: 'Controller troubleshooting',
  },
  {
    title: 'Forza Horizon 6 keyboard settings guide',
    path: '/games/forza-horizon-6/guides/best-keyboard-settings',
    description:
      'Keyboard guide for FH6 steering control, throttle tapping, braking, manual shifting, keybinds, input delay, and safer tune choices.',
    category: 'Keyboard settings',
  },
  {
    title: 'Forza Horizon 6 cloud save not syncing guide',
    path: '/games/forza-horizon-6/guides/cloud-save-not-syncing',
    description:
      'Cloud-save guide for FH6 Xbox, Xbox app, Steam, Steam Deck, Game Pass, platform switching, DLC ownership, and support-ready notes.',
    category: 'Cloud save',
  },
  {
    title: 'Forza Horizon 6 online not working checklist',
    path: '/games/forza-horizon-6/guides/online-not-working-checklist',
    description:
      'Online troubleshooting checklist for FH6 matchmaking, convoys, crossplay, account sign-in, NAT, platform services, and support notes.',
    category: 'Online troubleshooting',
  },
  {
    title: 'Forza Horizon 6 input lag settings guide',
    path: '/games/forza-horizon-6/guides/input-lag-settings',
    description:
      'Input lag guide for FH6 controller, wheel, keyboard, display mode, FPS caps, VSync, wireless latency, overlays, and response testing.',
    category: 'Input lag',
  },
  {
    title: 'Forza Horizon 6 assist settings guide',
    path: '/games/forza-horizon-6/guides/best-assist-settings',
    description:
      'Assist settings guide for FH6 braking, steering, traction control, stability control, shifting, ABS, rewind, and racing line progression.',
    category: 'Assist settings',
  },
  {
    title: 'Forza Horizon 6 manual transmission guide',
    path: '/games/forza-horizon-6/guides/manual-transmission-guide',
    description:
      'Manual shifting guide for FH6 manual transmission, manual with clutch, controller binds, wheel paddles, keyboard shifting, and gear timing.',
    category: 'Manual transmission',
  },
  {
    title: 'Forza Horizon 6 camera settings guide',
    path: '/games/forza-horizon-6/guides/best-camera-settings',
    description:
      'Camera settings guide for FH6 cockpit, hood, chase, drift, wheel, controller, input lag checks, visibility, racing line, and route learning.',
    category: 'Camera settings',
  },
  {
    title: 'Forza Horizon 6 HUD and accessibility settings guide',
    path: '/games/forza-horizon-6/guides/hud-accessibility-settings',
    description:
      'HUD and accessibility guide for FH6 racing line, subtitles, UI scale, colorblind options, vibration, difficulty, route learning, and distraction reduction.',
    category: 'HUD and accessibility',
  },
  {
    title: 'Forza Horizon 6 AWD tune settings guide',
    path: '/games/forza-horizon-6/guides/best-awd-tune-settings',
    description:
      'AWD tune settings guide for FH6 launch grip, corner exit traction, differential balance, gearing, tire pressure, rally routes, and road racing.',
    category: 'AWD tuning',
  },
  {
    title: 'Forza Horizon 6 RWD tune settings guide',
    path: '/games/forza-horizon-6/guides/best-rwd-tune-settings',
    description:
      'RWD tune settings guide for FH6 throttle control, wheelspin, drift, road racing, differential setup, gearing, and beginner-friendly builds.',
    category: 'RWD tuning',
  },
  {
    title: 'Forza Horizon 6 FWD tune settings guide',
    path: '/games/forza-horizon-6/guides/best-fwd-tune-settings',
    description:
      'FWD tune settings guide for FH6 front tire grip, understeer, lift-off rotation, differential setup, gearing, braking stability, and road builds.',
    category: 'FWD tuning',
  },
  {
    title: 'Forza Horizon 6 differential settings guide',
    path: '/games/forza-horizon-6/guides/differential-settings-guide',
    description:
      'Differential settings guide for FH6 AWD, RWD, FWD, acceleration, deceleration, center balance, understeer, oversteer, wheelspin, and launch tuning.',
    category: 'Differential tuning',
  },
  {
    title: 'Forza Horizon 6 brake balance and pressure settings',
    path: '/games/forza-horizon-6/guides/brake-balance-pressure-settings',
    description:
      'Brake balance and pressure guide for FH6 unstable braking, lockups, trail braking, ABS, controller triggers, wheel pedals, road racing, and rally builds.',
    category: 'Brake tuning',
  },
  {
    title: 'Forza Horizon 6 anti-roll bar and suspension settings',
    path: '/games/forza-horizon-6/guides/anti-roll-bar-suspension-settings',
    description:
      'Anti-roll bar and suspension guide for FH6 understeer, oversteer, body roll, bumps, ride height, springs, damping, road racing, and rally routes.',
    category: 'Suspension tuning',
  },
  {
    title: 'Forza Horizon 6 tire pressure settings guide',
    path: '/games/forza-horizon-6/guides/tire-pressure-settings-guide',
    description:
      'Tire pressure guide for FH6 grip, heat, understeer, oversteer, road racing, drift, rally, wet routes, keyboard, controller, and wheel testing.',
    category: 'Tire pressure',
  },
  {
    title: 'Forza Horizon 6 alignment, camber, and toe settings',
    path: '/games/forza-horizon-6/guides/alignment-camber-toe-settings',
    description:
      'Alignment guide for FH6 camber, toe, caster, turn-in, understeer, oversteer, tire wear, road racing, drift, wheel users, and controller users.',
    category: 'Alignment tuning',
  },
  {
    title: 'Forza Horizon 6 advanced gear ratio tuning',
    path: '/games/forza-horizon-6/guides/advanced-gear-ratio-tuning',
    description:
      'Advanced gear ratio guide for FH6 final drive, launch, acceleration, top speed, manual shifting, RWD, AWD, drag, road racing, and route-specific gearing.',
    category: 'Advanced gearing',
  },
  {
    title: 'Forza Horizon 6 aero and downforce settings',
    path: '/games/forza-horizon-6/guides/aero-downforce-settings',
    description:
      'Aero and downforce guide for FH6 front aero, rear aero, grip, top speed, understeer, oversteer, road racing, S1 builds, S2 builds, and route testing.',
    category: 'Aero tuning',
  },
  {
    title: 'Forza Horizon 6 manual with clutch shifting guide',
    path: '/games/forza-horizon-6/guides/manual-with-clutch-shifting',
    description:
      'Manual with clutch guide for FH6 controller binds, wheel clutch pedals, keyboard shifting, missed shifts, launch control, downshifts, and race consistency.',
    category: 'Manual with clutch',
  },
  {
    title: 'Forza Horizon 6 launch control and start tuning',
    path: '/games/forza-horizon-6/guides/launch-control-tuning',
    description:
      'Launch control and start tuning guide for FH6 AWD, RWD, FWD, drag starts, road racing starts, wheelspin, gearing, differential, and throttle control.',
    category: 'Launch tuning',
  },
  {
    title: 'Forza Horizon 6 speed trap and speed zone tuning',
    path: '/games/forza-horizon-6/guides/speed-trap-speed-zone-tuning',
    description:
      'Speed trap and speed zone guide for FH6 top speed, grip, aero, gearing, braking zones, S1 builds, S2 builds, weekly playlist PR stunts, and route testing.',
    category: 'Speed PR stunts',
  },
  {
    title: 'Forza Horizon 6 danger sign and trailblazer tuning',
    path: '/games/forza-horizon-6/guides/danger-sign-trailblazer-tuning',
    description:
      'Danger sign and trailblazer guide for FH6 jump distance, offroad grip, suspension, ride height, rally tires, AWD builds, landing stability, and weekly playlist PR stunts.',
    category: 'Jump and offroad PR',
  },
  {
    title: 'Forza Horizon 6 seasonal championship tuning guide',
    path: '/games/forza-horizon-6/guides/seasonal-championship-tuning',
    description:
      'Seasonal championship guide for FH6 weekly playlist restrictions, class limits, AI difficulty, road, dirt, cross-country, street races, and reliable three-race setups.',
    category: 'Seasonal championships',
  },
  {
    title: 'Forza Horizon 6 The Trial co-op race tuning guide',
    path: '/games/forza-horizon-6/guides/the-trial-coop-race-tuning',
    description:
      'The Trial co-op guide for FH6 team racing, AI traffic, clean starts, AWD grip, class restrictions, safe passing, recovery gearing, and weekly wins.',
    category: 'The Trial co-op',
  },
  {
    title: 'Forza Horizon 6 Forzathon weekly challenge tuning guide',
    path: '/games/forza-horizon-6/guides/forzathon-weekly-challenge-tuning',
    description:
      'Forzathon weekly challenge guide for FH6 required cars, chapter tasks, road races, skill chains, speed zones, drift zones, and quick weekly setup swaps.',
    category: 'Forzathon weekly',
  },
  {
    title: 'Forza Horizon 6 auction house and tune code sharing guide',
    path: '/games/forza-horizon-6/guides/auction-house-tune-code-sharing',
    description:
      'Auction house and tune code sharing guide for FH6 event cars, legal builds, preset labels, bad tune-code checks, and weekly playlist setup prep.',
    category: 'Tune codes',
  },
  {
    title: 'Forza Horizon 6 street race and night race tuning guide',
    path: '/games/forza-horizon-6/guides/street-race-night-tuning',
    description:
      'Street race and night race guide for FH6 traffic, blind corners, rain, braking confidence, launch grip, AWD choices, and weekly-safe setups.',
    category: 'Street racing',
  },
  {
    title: 'Forza Horizon 6 Rivals time attack tuning guide',
    path: '/games/forza-horizon-6/guides/rivals-time-attack-tuning',
    description:
      'Rivals time attack guide for FH6 clean laps, route testing, ghost comparison, tire temperature, gearing, braking markers, and repeatable setup notes.',
    category: 'Rivals time attack',
  },
  {
    title: 'Forza Horizon 6 cross-country and offroad tuning guide',
    path: '/games/forza-horizon-6/guides/cross-country-offroad-tuning',
    description:
      'Cross-country and offroad tuning guide for FH6 jumps, bumps, water, dirt, rally tires, ride height, suspension travel, AWD grip, and weekly consistency.',
    category: 'Cross-country offroad',
  },
  {
    title: 'Forza Horizon 6 drift zone scoring and tuning guide',
    path: '/games/forza-horizon-6/guides/drift-zone-scoring-tuning',
    description:
      'Drift zone scoring guide for FH6 angle, speed, transitions, gearing, tire pressure, controller settings, wheel settings, and weekly playlist drift tasks.',
    category: 'Drift zone scoring',
  },
  {
    title: 'Forza Horizon 6 Japan launch tuning plan',
    path: '/games/forza-horizon-6/guides/japan-launch-tuning-plan',
    description:
      'Japan launch tuning plan for FH6 route types, starter builds, wet roads, mountain sections, urban corners, and calculator handoffs.',
    category: 'Japan launch',
  },
  {
    title: 'Forza Horizon 6 best starter cars guide',
    path: '/games/forza-horizon-6/guides/best-starter-cars',
    description:
      'Starter car guide for FH6 launch choices, early upgrades, beginner-friendly drivetrains, route fit, and first tune paths.',
    category: 'Starter cars',
  },
  {
    title: 'Forza Horizon 6 Steam Deck settings guide',
    path: '/games/forza-horizon-6/guides/steam-deck-settings-guide',
    description:
      'Steam Deck settings guide for FH6 install checks, graphics tradeoffs, frame caps, controls, battery targets, and route testing.',
    category: 'Steam Deck settings',
  },
  {
    title: 'Forza Horizon 6 Logitech wheel settings guide',
    path: '/games/forza-horizon-6/guides/logitech-wheel-settings',
    description:
      'Logitech wheel guide for FH6 rotation, force feedback, deadzones, pedals, camera, assists, and first setup checks.',
    category: 'Wheel settings',
  },
  {
    title: 'Forza Horizon 6 Thrustmaster wheel settings guide',
    path: '/games/forza-horizon-6/guides/thrustmaster-wheel-settings',
    description:
      'Thrustmaster wheel guide for FH6 force feedback, rotation, pedal feel, road racing, drift, and troubleshooting handoffs.',
    category: 'Wheel settings',
  },
  {
    title: 'Forza Horizon 6 Fanatec and Moza wheel settings guide',
    path: '/games/forza-horizon-6/guides/fanatec-moza-wheel-settings',
    description:
      'Fanatec and Moza wheel guide for FH6 direct-drive strength, damping, road detail, pedals, drift control, and consistency checks.',
    category: 'Wheel settings',
  },
  {
    title: 'Forza Horizon 6 Japan route tuning checklist',
    path: '/games/forza-horizon-6/guides/japan-route-tuning-checklist',
    description:
      'Japan route checklist for FH6 mountain, city, highway, wet-road, dirt, and mixed-surface tuning decisions.',
    category: 'Japan routes',
  },
  {
    title: 'Forza Horizon 6 weekly playlist tuning checklist',
    path: '/games/forza-horizon-6/guides/weekly-playlist-tuning-checklist',
    description:
      'Weekly playlist checklist for FH6 restrictions, event type, car choice, baseline tune, route testing, and tune-code sharing.',
    category: 'Weekly playlist',
  },
  {
    title: 'Forza Horizon 6 car list and database',
    path: '/games/forza-horizon-6/cars',
    description:
      'Starter car-list pages with official source notes, class, PI, acquisition, tune direction, testing status, and related setup paths.',
    category: 'Cars',
  },
  {
    title: 'Forza Horizon 6 weekly playlist tracker',
    path: '/games/forza-horizon-6/weekly-playlist',
    description:
      'Weekly prep workflow for event restrictions, reward cars, safe baseline builds, and setup links.',
    category: 'Weekly',
  },
];

const generatedGuideFeedItems: FeedItem[] = forzaHorizon6Guides.map(
  (guide) => ({
    title: guide.h1,
    path: `/games/forza-horizon-6/guides/${guide.slug}`,
    description: guide.description,
    category: guide.eyebrow,
  })
);

const generatedCarGuideFeedItems: FeedItem[] = [
  ...Object.values(forzaHorizon6ClassCarGuides),
  ...Object.values(forzaHorizon6MakeCarGuides),
  ...Object.values(forzaHorizon6BestCarGuides),
].map((guide) => ({
  title: guide.h1,
  path: guide.pathname,
  description: guide.description,
  category: guide.eyebrow,
}));

const allFeedItems = [
  ...feedItems,
  ...[...generatedGuideFeedItems, ...generatedCarGuideFeedItems].filter(
    (guideItem) =>
      !feedItems.some((feedItem) => feedItem.path === guideItem.path)
  ),
];

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function itemXml({ title, path, description, category }: FeedItem) {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}${path}`;

  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(description)}</description>
      <category>${escapeXml(category)}</category>
      <pubDate>${feedUpdatedAt.toUTCString()}</pubDate>
    </item>`;
}

export function GET() {
  const baseUrl = getBaseUrl();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Apex Tune Hub Updates</title>
    <link>${escapeXml(baseUrl)}</link>
    <atom:link href="${escapeXml(baseUrl)}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Forza Horizon 6 tuning tools, guide updates, source tracking, car pages, and weekly setup notes from Apex Tune Hub.</description>
    <language>en</language>
    <lastBuildDate>${feedUpdatedAt.toUTCString()}</lastBuildDate>
${allFeedItems.map(itemXml).join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
