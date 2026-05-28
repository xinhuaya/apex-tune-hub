import { forzaHorizon6Cars } from '../src/lib/cars/forza-horizon-6-cars';
import { forzaHorizon6BestCarGuides } from '../src/lib/guides/forza-horizon-6-best-car-guides';
import { forzaHorizon6ClassCarGuides } from '../src/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6Guides } from '../src/lib/guides/forza-horizon-6-guides';
import { forzaHorizon6MakeCarGuides } from '../src/lib/guides/forza-horizon-6-make-car-guides';
import { forzaTunePresets } from '../src/lib/tuning/forza-horizon-6-presets';

const staticPaths = new Set([
  '/',
  '/games/forza-horizon-6',
  '/games/forza-horizon-6/best-cars',
  '/games/forza-horizon-6/car-pass',
  '/games/forza-horizon-6/cars',
  '/games/forza-horizon-6/crossplay-cross-save',
  '/games/forza-horizon-6/faq',
  '/games/forza-horizon-6/game-pass-editions',
  '/games/forza-horizon-6/guides',
  '/games/forza-horizon-6/japan-map',
  '/games/forza-horizon-6/official-sources',
  '/games/forza-horizon-6/pc-requirements',
  '/games/forza-horizon-6/ps5-release',
  '/games/forza-horizon-6/release-status',
  '/games/forza-horizon-6/steam-vs-xbox-app',
  '/games/forza-horizon-6/tuning-settings',
  '/games/forza-horizon-6/weekly-playlist',
  '/settings/forza-horizon-6',
  '/settings/forza-horizon-6-controller',
  '/settings/forza-horizon-6-pc',
  '/settings/forza-horizon-6-steam-deck',
  '/settings/forza-horizon-6-wheel',
  '/tools/forza-horizon-6-drift-tune-calculator',
  '/tools/forza-horizon-6-gear-ratio-calculator',
  '/tools/forza-horizon-6-tune-calculator',
  '/tools/forza-horizon-6-tune-codes',
  '/tools/forza-horizon-6-tune-presets',
]);

const generatedPaths = new Set<string>([
  ...staticPaths,
  ...Object.values(forzaHorizon6ClassCarGuides).map((guide) => guide.pathname),
  ...Object.values(forzaHorizon6MakeCarGuides).map((guide) => guide.pathname),
  ...Object.values(forzaHorizon6BestCarGuides).map((guide) => guide.pathname),
  ...forzaHorizon6Guides.map(
    (guide) => `/games/forza-horizon-6/guides/${guide.slug}`
  ),
  ...forzaHorizon6Cars.map((car) => `/games/forza-horizon-6/cars/${car.slug}`),
  ...forzaTunePresets.map(
    (preset) => `/tools/forza-horizon-6-tune-presets/${preset.slug}`
  ),
]);

function normalizedPath(href: string) {
  if (!href.startsWith('/')) {
    return undefined;
  }

  return href.split(/[?#]/)[0]?.replace(/\/$/, '') || '/';
}

function collectGuideHrefs() {
  return forzaHorizon6Guides.flatMap((guide) => [
    {
      source: guide.slug,
      label: guide.primaryCta.label,
      href: guide.primaryCta.href,
    },
    ...guide.relatedLinks.map((link) => ({
      source: guide.slug,
      label: link.label,
      href: link.href,
    })),
  ]);
}

function findDuplicateSlugs() {
  const seen = new Set<string>();
  const duplicates = new Set<string>();

  for (const guide of forzaHorizon6Guides) {
    if (seen.has(guide.slug)) {
      duplicates.add(guide.slug);
    }
    seen.add(guide.slug);
  }

  return [...duplicates];
}

function main() {
  const duplicates = findDuplicateSlugs();
  const brokenLinks = collectGuideHrefs().flatMap((link) => {
    const path = normalizedPath(link.href);

    if (!path || generatedPaths.has(path)) {
      return [];
    }

    return [
      {
        source: link.source,
        label: link.label,
        href: link.href,
        path,
      },
    ];
  });

  const report = {
    guideCount: forzaHorizon6Guides.length,
    knownPathCount: generatedPaths.size,
    duplicateSlugs: duplicates,
    brokenLinks,
  };

  if (duplicates.length > 0 || brokenLinks.length > 0) {
    console.error(JSON.stringify(report, null, 2));
    process.exitCode = 1;
    return;
  }

  console.log(JSON.stringify(report, null, 2));
}

main();
