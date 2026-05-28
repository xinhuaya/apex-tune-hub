'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

/**
 * Get footer config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://mksaas.com/docs/config/footer
 *
 * @returns The footer config with translated titles
 */
export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('product.title'),
      items: [
        {
          title: 'FH6 Hub',
          href: Routes.ForzaHorizon6,
          external: false,
        },
        {
          title: 'FH6 Guides',
          href: Routes.ForzaHorizon6Guides,
          external: false,
        },
        {
          title: 'Tune Calculator',
          href: Routes.TuneCalculator,
          external: false,
        },
        {
          title: 'Tune Presets',
          href: Routes.TunePresets,
          external: false,
        },
        {
          title: 'Tune Codes',
          href: Routes.TuneCodes,
          external: false,
        },
        {
          title: 'Drift Calculator',
          href: Routes.DriftTuneCalculator,
          external: false,
        },
        {
          title: 'Gear Ratio Calculator',
          href: Routes.GearRatioCalculator,
          external: false,
        },
        {
          title: 'Car List',
          href: Routes.ForzaHorizon6Cars,
          external: false,
        },
        {
          title: 'FAQ',
          href: Routes.ForzaHorizon6Faq,
          external: false,
        },
      ],
    },
    {
      title: t('resources.title'),
      items: [
        {
          title: 'Best Cars',
          href: Routes.ForzaHorizon6BestCars,
          external: false,
        },
        {
          title: 'Best Drift Cars',
          href: Routes.ForzaHorizon6BestDriftCars,
          external: false,
        },
        {
          title: 'Best Rally Cars',
          href: Routes.ForzaHorizon6BestRallyCars,
          external: false,
        },
        {
          title: 'Steam Deck Settings',
          href: Routes.ForzaHorizon6SteamDeck,
          external: false,
        },
        {
          title: 'Release Status',
          href: Routes.ForzaHorizon6ReleaseStatus,
          external: false,
        },
        {
          title: 'Crossplay & Cross-Save',
          href: Routes.ForzaHorizon6CrossplayCrossSave,
          external: false,
        },
        {
          title: 'PC Requirements',
          href: Routes.ForzaHorizon6PcRequirements,
          external: false,
        },
        {
          title: 'Official Sources',
          href: Routes.ForzaHorizon6OfficialSources,
          external: false,
        },
      ],
    },
    {
      title: t('company.title'),
      items: [
        {
          title: t('company.items.about'),
          href: Routes.About,
          external: false,
        },
        {
          title: t('company.items.contact'),
          href: Routes.Contact,
          external: false,
        },
        {
          title: 'FH6 Tune Drops',
          href: Routes.Waitlist,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
      ],
    },
  ];
}
