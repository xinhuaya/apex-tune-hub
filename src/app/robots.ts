import type { MetadataRoute } from 'next';
import { getBaseUrl } from '@/lib/urls';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/*',
        '/_next/*',
        '/admin/*',
        '/dashboard/*',
        '/payment',
        '/settings/apikeys',
        '/settings/billing',
        '/settings/credits',
        '/settings/notifications',
        '/settings/profile',
        '/settings/security',
      ],
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
