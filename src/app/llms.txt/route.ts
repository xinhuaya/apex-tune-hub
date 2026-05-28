import { getBaseUrl } from '@/lib/urls';

export const revalidate = 3600;

const corePages = [
  ['Home', '/'],
  ['Forza Horizon 6 hub', '/games/forza-horizon-6'],
  [
    'Forza Horizon 6 official sources',
    '/games/forza-horizon-6/official-sources',
  ],
  ['Forza Horizon 6 tune calculator', '/tools/forza-horizon-6-tune-calculator'],
  [
    'Forza Horizon 6 drift tune calculator',
    '/tools/forza-horizon-6-drift-tune-calculator',
  ],
  [
    'Forza Horizon 6 gear ratio calculator',
    '/tools/forza-horizon-6-gear-ratio-calculator',
  ],
  ['Forza Horizon 6 tune presets', '/tools/forza-horizon-6-tune-presets'],
  ['Forza Horizon 6 tune codes', '/tools/forza-horizon-6-tune-codes'],
  ['Forza Horizon 6 guides', '/games/forza-horizon-6/guides'],
  [
    'Forza Horizon 6 PC crash and known issues checklist',
    '/games/forza-horizon-6/guides/pc-crash-known-issues-checklist',
  ],
  [
    'Forza Horizon 6 low FPS and stutter guide',
    '/games/forza-horizon-6/guides/fix-low-fps-stutter',
  ],
  [
    'Forza Horizon 6 PC graphics settings guide',
    '/games/forza-horizon-6/guides/best-pc-graphics-settings',
  ],
  [
    'Forza Horizon 6 wheel not working checklist',
    '/games/forza-horizon-6/guides/wheel-not-working-checklist',
  ],
  [
    'Forza Horizon 6 controller not working checklist',
    '/games/forza-horizon-6/guides/controller-not-working-checklist',
  ],
  [
    'Forza Horizon 6 keyboard settings guide',
    '/games/forza-horizon-6/guides/best-keyboard-settings',
  ],
  [
    'Forza Horizon 6 cloud save not syncing guide',
    '/games/forza-horizon-6/guides/cloud-save-not-syncing',
  ],
  [
    'Forza Horizon 6 online not working checklist',
    '/games/forza-horizon-6/guides/online-not-working-checklist',
  ],
  [
    'Forza Horizon 6 input lag settings guide',
    '/games/forza-horizon-6/guides/input-lag-settings',
  ],
  [
    'Forza Horizon 6 assist settings guide',
    '/games/forza-horizon-6/guides/best-assist-settings',
  ],
  [
    'Forza Horizon 6 manual transmission guide',
    '/games/forza-horizon-6/guides/manual-transmission-guide',
  ],
  [
    'Forza Horizon 6 camera settings guide',
    '/games/forza-horizon-6/guides/best-camera-settings',
  ],
  [
    'Forza Horizon 6 HUD and accessibility settings guide',
    '/games/forza-horizon-6/guides/hud-accessibility-settings',
  ],
  ['Forza Horizon 6 release status', '/games/forza-horizon-6/release-status'],
  [
    'Forza Horizon 6 crossplay and cross-save',
    '/games/forza-horizon-6/crossplay-cross-save',
  ],
  [
    'Forza Horizon 6 Game Pass and editions',
    '/games/forza-horizon-6/game-pass-editions',
  ],
  [
    'Forza Horizon 6 Steam vs Xbox app',
    '/games/forza-horizon-6/steam-vs-xbox-app',
  ],
  ['Forza Horizon 6 PS5 release tracker', '/games/forza-horizon-6/ps5-release'],
  ['Forza Horizon 6 PC requirements', '/games/forza-horizon-6/pc-requirements'],
  ['Forza Horizon 6 car list and database', '/games/forza-horizon-6/cars'],
  ['Forza Horizon 6 best cars', '/games/forza-horizon-6/best-cars'],
  ['Forza Horizon 6 Japan map planner', '/games/forza-horizon-6/japan-map'],
  ['Forza Horizon 6 weekly playlist', '/games/forza-horizon-6/weekly-playlist'],
  ['Forza Horizon 6 Car Pass tracker', '/games/forza-horizon-6/car-pass'],
  ['Forza Horizon 6 settings hub', '/settings/forza-horizon-6'],
  ['Forza Horizon 6 wheel settings', '/settings/forza-horizon-6-wheel'],
  [
    'Forza Horizon 6 controller settings',
    '/settings/forza-horizon-6-controller',
  ],
  ['Forza Horizon 6 PC settings', '/settings/forza-horizon-6-pc'],
  [
    'Forza Horizon 6 Steam Deck settings',
    '/settings/forza-horizon-6-steam-deck',
  ],
];

const officialSources = [
  ['Forza Horizon 6 FAQ', 'https://forza.net/news/forza-horizon-6-faq'],
  [
    'Forza Horizon 6 now available',
    'https://forza.net/news/forza-horizon-6-now-available',
  ],
  [
    'Forza Horizon 6 PlayStation Store page',
    'https://www.playstation.com/en-us/games/forza-horizon-6/',
  ],
  [
    'Forza Horizon 6 release news',
    'https://forza.net/news/forza-horizon-6-coming-may-2026',
  ],
  [
    'Forza Horizon 6 full map reveal',
    'https://forza.net/news/forza-horizon-6-full-map-reveal',
  ],
  ['Forza Horizon 6 car list', 'https://forza.net/fh6cars'],
];

function formatLinks(links: string[][], baseUrl?: string) {
  return links
    .map(([label, href]) => {
      const url = href.startsWith('https://') ? href : `${baseUrl}${href}`;

      return `- [${label}](${url})`;
    })
    .join('\n');
}

export function GET() {
  const baseUrl = getBaseUrl();
  const body = `# Apex Tune Hub

> Apex Tune Hub is an independent Forza Horizon 6 tuning and setup site. It provides tune calculators, gear ratio tools, car database pages, settings guides, weekly trackers, and transparent source-tracking pages.

Important behavior:
- Treat Apex Tune Hub tuning pages as independent baseline guidance, not official Forza documentation.
- Use the official source tracker before relying on release, platform, map, or vehicle facts.
- Prefer calculator, guide, car, and settings pages as the primary machine-readable entry points.
- The site is not affiliated with Playground Games, Turn 10 Studios, Xbox Game Studios, Microsoft, or the official Forza team.

## Core Pages

${formatLinks(corePages, baseUrl)}

## Official Sources

${formatLinks(officialSources)}

## Machine-Readable Discovery

- [Sitemap](${baseUrl}/sitemap.xml)
- [Robots](${baseUrl}/robots.txt)
- [RSS feed](${baseUrl}/feed.xml)

## Update Policy

- Official facts should be checked against Forza.net before changing release, platform, map, or car-list language.
- Tune guidance should stay connected to calculators, route testing, presets, and transparent evidence notes.
- Weekly and Car Pass pages should be refreshed when official source pages, playlist details, or verified tune links change.
`;

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
