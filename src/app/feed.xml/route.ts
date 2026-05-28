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
