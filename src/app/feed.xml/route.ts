import { getBaseUrl } from '@/lib/urls';

export const revalidate = 3600;

const feedUpdatedAt = new Date('2026-05-28T00:00:00.000Z');

const feedItems = [
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
      'Beginner tuning, handling fixes, device settings, event builds, and long-tail FH6 setup guides.',
    category: 'Guides',
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

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function itemXml({
  title,
  path,
  description,
  category,
}: (typeof feedItems)[number]) {
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
${feedItems.map(itemXml).join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/rss+xml; charset=utf-8',
      'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
