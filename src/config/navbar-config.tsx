'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BadgeCheckIcon,
  BookOpenIcon,
  BuildingIcon,
  CookieIcon,
  DatabaseIcon,
  FileTextIcon,
  GaugeIcon,
  LinkIcon,
  ListChecksIcon,
  MailIcon,
  MailboxIcon,
  MonitorIcon,
  ShieldCheckIcon,
  SlidersHorizontalIcon,
  SquareKanbanIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import { websiteConfig } from './website';

/**
 * Get navbar config with translations
 *
 * NOTICE: used in client components only
 *
 * docs:
 * https://mksaas.com/docs/config/navbar
 *
 * @returns The navbar config with translated titles and descriptions
 */
export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: 'FH6 Hub',
      href: Routes.ForzaHorizon6,
      external: false,
    },
    {
      title: 'Guides',
      href: Routes.ForzaHorizon6Guides,
      external: false,
    },
    {
      title: 'Best Cars',
      items: [
        {
          title: 'Best Cars Hub',
          description: 'Road, drift, rally, class, and weekly car picks',
          icon: <BadgeCheckIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6BestCars,
          external: false,
        },
        {
          title: 'Best Drift Cars',
          description: 'Angle, recovery, differential, and gearing candidates',
          icon: <GaugeIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6BestDriftCars,
          external: false,
        },
        {
          title: 'Best Rally Cars',
          description: 'Mixed surface, touge, and dirt route candidates',
          icon: <SlidersHorizontalIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6BestRallyCars,
          external: false,
        },
        {
          title: 'Best Road Racing Cars',
          description: 'A, S1, and S2 grip setup candidates',
          icon: <ListChecksIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6BestRoadRacingCars,
          external: false,
        },
        {
          title: 'Best JDM Cars',
          description: 'Toyota, Honda, Mazda, drift, street, and touge picks',
          icon: <DatabaseIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6BestJdmCars,
          external: false,
        },
      ],
    },
    {
      title: 'Tune Calculator',
      href: Routes.TuneCalculator,
      external: false,
    },
    {
      title: 'Tools',
      items: [
        {
          title: 'Tune Calculator',
          description:
            'Baseline road, street, dirt, rally, and drag setup notes',
          icon: <SlidersHorizontalIcon className="size-4 shrink-0" />,
          href: Routes.TuneCalculator,
          external: false,
        },
        {
          title: 'FH6 Guides',
          description: 'Beginner tuning, handling fixes, gearing, and settings',
          icon: <BookOpenIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6Guides,
          external: false,
        },
        {
          title: 'Release Status',
          description: 'Xbox, PC, Game Pass, Steam Deck, and PS5 timing',
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6ReleaseStatus,
          external: false,
        },
        {
          title: 'PC Requirements',
          description: 'Minimum, recommended, SSD, storage, and upgrade notes',
          icon: <MonitorIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6PcRequirements,
          external: false,
        },
        {
          title: 'Official Sources',
          description: 'Release, platform, map, and car-list source tracker',
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6OfficialSources,
          external: false,
        },
        {
          title: 'Tune Presets',
          description: 'Shareable S1, A, road, rally, and street baselines',
          icon: <LinkIcon className="size-4 shrink-0" />,
          href: Routes.TunePresets,
          external: false,
        },
        {
          title: 'Tune Codes',
          description: 'Tune code workflow notes and shareable setup links',
          icon: <LinkIcon className="size-4 shrink-0" />,
          href: Routes.TuneCodes,
          external: false,
        },
        {
          title: 'Drift Tune Calculator',
          description: 'RWD and AWD drift setup guidance for angle and control',
          icon: <GaugeIcon className="size-4 shrink-0" />,
          href: Routes.DriftTuneCalculator,
          external: false,
        },
        {
          title: 'Gear Ratio Calculator',
          description:
            'Final drive and gear spacing notes for different routes',
          icon: <ListChecksIcon className="size-4 shrink-0" />,
          href: Routes.GearRatioCalculator,
          external: false,
        },
        {
          title: 'Steam Deck Settings',
          description: 'Handheld settings page for FPS and battery testing',
          icon: <MonitorIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6SteamDeck,
          external: false,
        },
        {
          title: 'PC Settings',
          description: 'Balanced, low-end, and high-end PC performance notes',
          icon: <MonitorIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6Pc,
          external: false,
        },
        {
          title: 'PC Requirements',
          description: 'Hardware requirements and upgrade priority notes',
          icon: <MonitorIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6PcRequirements,
          external: false,
        },
        {
          title: 'Wheel Settings',
          description: 'Force feedback and wheel profile starting points',
          icon: <GaugeIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6Wheel,
          external: false,
        },
        {
          title: 'Controller Settings',
          description: 'Steering, throttle, braking, and vibration notes',
          icon: <SlidersHorizontalIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6Controller,
          external: false,
        },
        {
          title: 'Car List',
          description:
            'Starter FH6 car list with source notes, class, PI, and tune notes',
          icon: <DatabaseIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6Cars,
          external: false,
        },
        {
          title: 'Car Pass Tracker',
          description: 'Weekly car additions, dates, and tune links',
          icon: <SquareKanbanIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6CarPass,
          external: false,
        },
        {
          title: 'Weekly Playlist',
          description: 'Repeat-visit tracker for rewards and tune links',
          icon: <SquareKanbanIcon className="size-4 shrink-0" />,
          href: Routes.ForzaHorizon6WeeklyPlaylist,
          external: false,
        },
      ],
    },
    {
      title: t('pages.title'),
      items: [
        ...(websiteConfig.blog.enable
          ? [
              {
                title: t('blog.title'),
                description: 'Guides, changelogs, and racing setup notes',
                icon: <FileTextIcon className="size-4 shrink-0" />,
                href: Routes.Blog,
                external: false,
              },
            ]
          : []),
        ...(websiteConfig.docs.enable
          ? [
              {
                title: t('docs.title'),
                description: 'Technical notes and documentation',
                icon: <ListChecksIcon className="size-4 shrink-0" />,
                href: Routes.Docs,
                external: false,
              },
            ]
          : []),
        {
          title: t('pages.items.about.title'),
          description: t('pages.items.about.description'),
          icon: <BuildingIcon className="size-4 shrink-0" />,
          href: Routes.About,
          external: false,
        },
        {
          title: t('pages.items.contact.title'),
          description: t('pages.items.contact.description'),
          icon: <MailIcon className="size-4 shrink-0" />,
          href: Routes.Contact,
          external: false,
        },
        {
          title: t('pages.items.waitlist.title'),
          description: t('pages.items.waitlist.description'),
          icon: <MailboxIcon className="size-4 shrink-0" />,
          href: Routes.Waitlist,
          external: false,
        },
        {
          title: t('pages.items.cookiePolicy.title'),
          description: t('pages.items.cookiePolicy.description'),
          icon: <CookieIcon className="size-4 shrink-0" />,
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('pages.items.privacyPolicy.title'),
          description: t('pages.items.privacyPolicy.description'),
          icon: <ShieldCheckIcon className="size-4 shrink-0" />,
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('pages.items.termsOfService.title'),
          description: t('pages.items.termsOfService.description'),
          icon: <FileTextIcon className="size-4 shrink-0" />,
          href: Routes.TermsOfService,
          external: false,
        },
      ],
    },
  ];
}
