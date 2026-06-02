import { forzaHorizon6BestCarGuides } from '../src/lib/guides/forza-horizon-6-best-car-guides';
import { forzaHorizon6ClassCarGuides } from '../src/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6Guides } from '../src/lib/guides/forza-horizon-6-guides';
import { forzaHorizon6MakeCarGuides } from '../src/lib/guides/forza-horizon-6-make-car-guides';

type MediaAuditPage = {
  path: string;
  title: string;
  type: 'guide' | 'best-car' | 'class-car' | 'make-car';
  priority: number;
  reasons: string[];
  hasOriginalDiagram: boolean;
  mediaSourceCount: number;
  embeddedVideoCount: number;
  sourceArticleCount: number;
  recommendation: string;
};

const priorityKeywords = [
  'calculator',
  'understeer',
  'oversteer',
  'wheelspin',
  'launch',
  'top speed',
  'gear',
  'drift',
  'road',
  'rally',
  'wheel',
  'controller',
  'steam deck',
  'settings',
  'weekly',
  'starter',
  'best',
];

function scorePriority(input: {
  path: string;
  title: string;
  intro?: string;
  type: MediaAuditPage['type'];
}) {
  const haystack = `${input.path} ${input.title} ${input.intro ?? ''}`
    .toLowerCase()
    .replace(/-/g, ' ');
  const reasons: string[] = [];
  let priority = 0;

  if (input.type === 'guide') {
    priority += 2;
    reasons.push('dynamic guide page');
  }

  if (input.type === 'best-car' || input.type === 'class-car') {
    priority += 2;
    reasons.push('car-choice page');
  }

  for (const keyword of priorityKeywords) {
    if (haystack.includes(keyword)) {
      priority += 1;
      reasons.push(`query intent: ${keyword}`);
    }
  }

  if (haystack.includes('fix')) {
    priority += 2;
    reasons.push('problem-solving page');
  }

  if (haystack.includes('tune') || haystack.includes('tuning')) {
    priority += 2;
    reasons.push('core tuning workflow');
  }

  return {
    priority,
    reasons: [...new Set(reasons)].slice(0, 8),
  };
}

function recommendationFor(page: Omit<MediaAuditPage, 'recommendation'>) {
  if (page.mediaSourceCount > 0 && page.hasOriginalDiagram) {
    return 'Keep current media, then add user-owned screenshots only after real route testing.';
  }

  if (page.type === 'guide' && page.hasOriginalDiagram) {
    return 'Add one credited video or user-owned screenshot if GSC shows impressions or clicks.';
  }

  if (page.type.includes('car')) {
    return 'Add one original comparison table first; add user-owned car screenshots after route testing.';
  }

  return 'Add an original diagram, then add credited media only when it matches the page exactly.';
}

function auditGuides(): MediaAuditPage[] {
  return forzaHorizon6Guides.map((guide) => {
    const mediaSources = guide.mediaSources ?? [];
    const embeddedVideoCount = mediaSources.filter(
      (source) => source.type === 'video' && source.embedUrl
    ).length;
    const sourceArticleCount = mediaSources.filter(
      (source) => source.type === 'article'
    ).length;
    const scored = scorePriority({
      path: `/games/forza-horizon-6/guides/${guide.slug}`,
      title: guide.h1,
      intro: guide.intro,
      type: 'guide',
    });
    const page = {
      path: `/games/forza-horizon-6/guides/${guide.slug}`,
      title: guide.h1,
      type: 'guide' as const,
      priority: scored.priority,
      reasons: scored.reasons,
      hasOriginalDiagram: true,
      mediaSourceCount: mediaSources.length,
      embeddedVideoCount,
      sourceArticleCount,
    };

    return {
      ...page,
      recommendation: recommendationFor(page),
    };
  });
}

function auditCarGuides(): MediaAuditPage[] {
  const bestCarPages = Object.values(forzaHorizon6BestCarGuides).map(
    (guide) => ({
      path: guide.pathname,
      title: guide.h1,
      intro: guide.intro,
      type: 'best-car' as const,
    })
  );
  const classCarPages = Object.values(forzaHorizon6ClassCarGuides).map(
    (guide) => ({
      path: guide.pathname,
      title: guide.h1,
      intro: guide.intro,
      type: 'class-car' as const,
    })
  );
  const makeCarPages = Object.values(forzaHorizon6MakeCarGuides).map(
    (guide) => ({
      path: guide.pathname,
      title: guide.h1,
      intro: guide.intro,
      type: 'make-car' as const,
    })
  );

  return [...bestCarPages, ...classCarPages, ...makeCarPages].map((item) => {
    const scored = scorePriority(item);
    const page = {
      path: item.path,
      title: item.title,
      type: item.type,
      priority: scored.priority,
      reasons: scored.reasons,
      hasOriginalDiagram: true,
      mediaSourceCount: 0,
      embeddedVideoCount: 0,
      sourceArticleCount: 0,
    };

    return {
      ...page,
      recommendation: recommendationFor(page),
    };
  });
}

function main() {
  const pages = [...auditGuides(), ...auditCarGuides()].sort((a, b) => {
    if (b.priority !== a.priority) {
      return b.priority - a.priority;
    }

    return a.path.localeCompare(b.path);
  });
  const missingMediaSources = pages.filter(
    (page) => page.mediaSourceCount === 0
  );
  const highPriorityMissingMedia = missingMediaSources
    .filter((page) => page.priority >= 5)
    .slice(0, 20);
  const report = {
    pageCount: pages.length,
    pagesWithOriginalDiagram: pages.filter((page) => page.hasOriginalDiagram)
      .length,
    pagesWithMediaSources: pages.filter((page) => page.mediaSourceCount > 0)
      .length,
    pagesWithEmbeddedVideo: pages.filter((page) => page.embeddedVideoCount > 0)
      .length,
    missingMediaSourceCount: missingMediaSources.length,
    highPriorityMissingMedia,
  };

  console.log(JSON.stringify(report, null, 2));
}

main();
