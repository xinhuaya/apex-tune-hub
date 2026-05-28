import { defaultMessages } from '@/i18n/messages';
import type { MetadataRoute } from 'next';

/**
 * Generates the Web App Manifest for the application
 *
 * generated file name: manifest.webmanifest
 *
 * ref: https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/app/manifest.ts
 *
 * The manifest.json provides metadata used when the web app is installed on a
 * user's mobile device or desktop. See https://web.dev/add-manifest/
 *
 * Since the manifest file needs to be placed in the root of the app folder (outside the [locale] dynamic segment),
 * you need to provide a locale explicitly since next-intl can’t infer it from the pathname.
 *
 * Solution: use the default messages (get from the default locale)
 *
 * https://next-intl.dev/docs/environments/actions-metadata-route-handlers#manifest
 *
 * @returns {MetadataRoute.Manifest} The manifest configuration object
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: defaultMessages.Metadata.name,
    short_name: defaultMessages.Metadata.name,
    description: defaultMessages.Metadata.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#22d3ee',
    categories: ['games', 'utilities', 'productivity'],
    shortcuts: [
      {
        name: 'Forza Horizon 6 Hub',
        short_name: 'FH6 Hub',
        description: 'Open the main Forza Horizon 6 tuning hub.',
        url: '/games/forza-horizon-6',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'FH6 Tune Calculator',
        short_name: 'Calculator',
        description: 'Generate a baseline Forza Horizon 6 tune setup.',
        url: '/tools/forza-horizon-6-tune-calculator',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'FH6 Guides',
        short_name: 'Guides',
        description: 'Browse Forza Horizon 6 tuning and settings guides.',
        url: '/games/forza-horizon-6/guides',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
      {
        name: 'FH6 Weekly Playlist',
        short_name: 'Weekly',
        description: 'Open weekly event setup and restriction notes.',
        url: '/games/forza-horizon-6/weekly-playlist',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    ],
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
