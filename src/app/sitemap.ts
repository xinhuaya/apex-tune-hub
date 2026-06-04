import { websiteConfig } from '@/config/website';
import { getLocalePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { forzaHorizon6Cars } from '@/lib/cars/forza-horizon-6-cars';
import { forzaHorizon6BestCarGuides } from '@/lib/guides/forza-horizon-6-best-car-guides';
import { forzaHorizon6ClassCarGuides } from '@/lib/guides/forza-horizon-6-class-car-guides';
import { forzaHorizon6Guides } from '@/lib/guides/forza-horizon-6-guides';
import { forzaHorizon6MakeCarGuides } from '@/lib/guides/forza-horizon-6-make-car-guides';
import { generateHreflangUrls } from '@/lib/hreflang';
import { blogSource, categorySource, source } from '@/lib/source';
import { forzaTunePresets } from '@/lib/tuning/forza-horizon-6-presets';
import { getBaseUrl } from '@/lib/urls';
import type { MetadataRoute } from 'next';
import type { Locale } from 'next-intl';

type Href = Parameters<typeof getLocalePathname>[0]['href'];
type SitemapEntry = MetadataRoute.Sitemap[number];

export const revalidate = 0;
const sitemapLastModified = new Date('2026-05-29');

/**
 * static routes for sitemap, you may change the routes for your own
 */
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/waitlist',
  '/privacy',
  '/terms',
  '/cookie',
  '/games/forza/best-cars',
  '/games/forza/best-drag-cars',
  '/games/forza/car-list',
  '/games/forza-horizon-6',
  '/games/forza-horizon-6/japan-map',
  '/games/forza-horizon-6/tuning-settings',
  '/games/forza-horizon-6/guides',
  '/games/forza-horizon-6/official-sources',
  '/games/forza-horizon-6/best-cars',
  ...Object.values(forzaHorizon6ClassCarGuides).map((guide) => guide.pathname),
  ...Object.values(forzaHorizon6MakeCarGuides).map((guide) => guide.pathname),
  ...Object.values(forzaHorizon6BestCarGuides).map((guide) => guide.pathname),
  '/games/forza-horizon-6/car-pass',
  '/games/forza-horizon-6/cars',
  '/games/forza-horizon-6/faq',
  '/games/forza-horizon-6/release-status',
  '/games/forza-horizon-6/crossplay-cross-save',
  '/games/forza-horizon-6/game-pass-editions',
  '/games/forza-horizon-6/steam-vs-xbox-app',
  '/games/forza-horizon-6/ps5-release',
  '/games/forza-horizon-6/pc-requirements',
  '/games/forza-horizon-6/weekly-playlist',
  '/settings/forza-horizon-6',
  '/settings/forza-horizon-6-controller',
  '/settings/forza-horizon-6-pc',
  '/settings/forza-horizon-6-steam-deck',
  '/settings/forza-horizon-6-wheel',
  '/tools/forza-tuning-calculator',
  '/tools/forza-tune-codes',
  '/tools/forza-horizon-6-drift-tune-calculator',
  '/tools/forza-horizon-6-gear-ratio-calculator',
  '/tools/forza-horizon-6-tune-calculator',
  '/tools/forza-horizon-6-tune-codes',
  '/tools/forza-horizon-6-tune-presets',
  ...(websiteConfig.blog.enable ? ['/blog'] : []),
  ...(websiteConfig.docs.enable ? ['/docs'] : []),
];

const highIntentGuideSlugs = [
  'japan-launch-tuning-plan',
  'japan-route-tuning-checklist',
  'best-starter-cars',
  'beginner-tuning-guide',
  'video-build-tune-refresher',
  'tuning-glossary-setup-terms',
  'tune-testing-checklist',
  'steam-deck-settings-guide',
  'difficulty-settings-guide',
  'controller-deadzone-settings',
  'wheel-rotation-deadzone-settings',
  'logitech-wheel-settings',
  'thrustmaster-wheel-settings',
  'fanatec-moza-wheel-settings',
  'weekly-playlist-tuning-checklist',
  'upgrade-order-tuning-guide',
  'tire-compound-upgrade-guide',
  'fix-understeer',
  'fix-oversteer',
  'fix-wheelspin',
];

/**
 * Generate a sitemap for the website with hreflang support
 *
 * https://nextjs.org/docs/app/api-reference/functions/generate-sitemaps
 * https://github.com/javayhu/cnblocks/blob/main/app/sitemap.ts
 * https://ahrefs.com/blog/hreflang-tags/
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = []; // final result

  // add static routes
  sitemapList.push(
    ...staticRoutes.flatMap((route) => {
      return routing.locales.map((locale) => ({
        url: getUrl(route, locale),
        alternates: {
          languages: generateHreflangUrls(route),
        },
      }));
    })
  );

  sitemapList.push(
    ...forzaHorizon6Cars.flatMap((car) =>
      routing.locales.map((locale) => {
        const route = `/games/forza-horizon-6/cars/${car.slug}`;

        return {
          url: getUrl(route, locale),
          alternates: {
            languages: generateHreflangUrls(route),
          },
        };
      })
    )
  );

  sitemapList.push(
    ...forzaHorizon6Guides.flatMap((guide) =>
      routing.locales.map((locale) => {
        const route = `/games/forza-horizon-6/guides/${guide.slug}`;

        return {
          url: getUrl(route, locale),
          alternates: {
            languages: generateHreflangUrls(route),
          },
        };
      })
    )
  );

  sitemapList.push(
    ...forzaTunePresets.flatMap((preset) =>
      routing.locales.map((locale) => {
        const route = `/tools/forza-horizon-6-tune-presets/${preset.slug}`;

        return {
          url: getUrl(route, locale),
          alternates: {
            languages: generateHreflangUrls(route),
          },
        };
      })
    )
  );

  // add blog related routes if enabled
  if (websiteConfig.blog.enable) {
    // add paginated blog list pages
    routing.locales.forEach((locale) => {
      const posts = blogSource
        .getPages(locale)
        .filter((post) => post.data.published);
      const totalPages = Math.max(
        1,
        Math.ceil(posts.length / websiteConfig.blog.paginationSize)
      );
      // /blog/page/[page] (from 2)
      for (let page = 2; page <= totalPages; page++) {
        sitemapList.push({
          url: getUrl(`/blog/page/${page}`, locale),
          alternates: {
            languages: generateHreflangUrls(`/blog/page/${page}`),
          },
        });
      }
    });

    // add paginated category pages
    routing.locales.forEach((locale) => {
      const localeCategories = categorySource.getPages(locale);
      localeCategories.forEach((category) => {
        // posts in this category and locale
        const postsInCategory = blogSource
          .getPages(locale)
          .filter((post) => post.data.published)
          .filter((post) =>
            post.data.categories.some((cat) => cat === category.slugs[0])
          );
        const totalPages = Math.max(
          1,
          Math.ceil(postsInCategory.length / websiteConfig.blog.paginationSize)
        );
        // /blog/category/[slug] (first page)
        sitemapList.push({
          url: getUrl(`/blog/category/${category.slugs[0]}`, locale),
          alternates: {
            languages: generateHreflangUrls(
              `/blog/category/${category.slugs[0]}`
            ),
          },
        });
        // /blog/category/[slug]/page/[page] (from 2)
        for (let page = 2; page <= totalPages; page++) {
          sitemapList.push({
            url: getUrl(
              `/blog/category/${category.slugs[0]}/page/${page}`,
              locale
            ),
            alternates: {
              languages: generateHreflangUrls(
                `/blog/category/${category.slugs[0]}/page/${page}`
              ),
            },
          });
        }
      });
    });

    // add posts (single post pages)
    routing.locales.forEach((locale) => {
      const posts = blogSource
        .getPages(locale)
        .filter((post) => post.data.published);
      posts.forEach((post) => {
        sitemapList.push({
          url: getUrl(`/blog/${post.slugs.join('/')}`, locale),
          alternates: {
            languages: generateHreflangUrls(`/blog/${post.slugs.join('/')}`),
          },
        });
      });
    });
  }

  // add docs related routes if enabled
  if (websiteConfig.docs.enable) {
    const docsParams = source.generateParams();
    sitemapList.push(
      ...docsParams.flatMap((param) =>
        routing.locales.map((locale) => ({
          url: getUrl(`/docs/${param.slug.join('/')}`, locale),
          alternates: {
            languages: generateHreflangUrls(`/docs/${param.slug.join('/')}`),
          },
        }))
      )
    );
  }

  return sitemapList.map((entry) => ({
    ...entry,
    lastModified: sitemapLastModified,
    changeFrequency: getChangeFrequency(entry.url),
    priority: getPriority(entry.url),
  }));
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getLocalePathname({ locale, href });
  return getBaseUrl() + pathname;
}

function getChangeFrequency(url: string): SitemapEntry['changeFrequency'] {
  if (
    url.includes('/weekly-playlist') ||
    url.includes('/car-pass') ||
    url.includes('/tune-codes') ||
    url.includes('/weekly-playlist-tuning-checklist')
  ) {
    return 'weekly';
  }

  if (
    url.includes('/games/forza-horizon-6') ||
    url.includes('/games/forza/best-cars') ||
    url.includes('/games/forza/best-drag-cars') ||
    url.includes('/games/forza/car-list') ||
    url.includes('/tools/forza-tune-codes') ||
    url.includes('/tools/forza-tuning-calculator') ||
    url.includes('/tools/forza-horizon-6') ||
    url.includes('/settings/forza-horizon-6')
  ) {
    return 'monthly';
  }

  return 'yearly';
}

function isHighIntentGuideUrl(url: string) {
  return highIntentGuideSlugs.some((slug) =>
    url.includes(`/games/forza-horizon-6/guides/${slug}`)
  );
}

function getPriority(url: string) {
  if (url.endsWith('/')) {
    return 1;
  }

  if (url.endsWith('/games/forza-horizon-6')) {
    return 0.95;
  }

  if (url.includes('/tools/forza-horizon-6-tune-calculator')) {
    return 0.93;
  }

  if (url.includes('/tools/forza-tuning-calculator')) {
    return 0.92;
  }

  if (url.includes('/tools/forza-tune-codes')) {
    return 0.91;
  }

  if (url.includes('/games/forza/best-cars')) {
    return 0.91;
  }

  if (url.includes('/games/forza/best-drag-cars')) {
    return 0.91;
  }

  if (url.includes('/games/forza/car-list')) {
    return 0.91;
  }

  if (
    url.endsWith('/games/forza-horizon-6/guides') ||
    url.endsWith('/games/forza-horizon-6/best-cars') ||
    url.endsWith('/games/forza-horizon-6/cars') ||
    url.includes('/waitlist')
  ) {
    return 0.9;
  }

  if (isHighIntentGuideUrl(url)) {
    return 0.86;
  }

  if (
    url.includes('/games/forza-horizon-6/guides/') ||
    url.includes('/tools/forza-horizon-6-tune-presets/')
  ) {
    return 0.78;
  }

  if (
    url.includes('/games/forza-horizon-6') ||
    url.includes('/games/forza/best-cars') ||
    url.includes('/games/forza/best-drag-cars') ||
    url.includes('/games/forza/car-list') ||
    url.includes('/tools/forza-tune-codes') ||
    url.includes('/tools/forza-tuning-calculator') ||
    url.includes('/tools/forza-horizon-6') ||
    url.includes('/settings/forza-horizon-6')
  ) {
    return 0.8;
  }

  return 0.6;
}
