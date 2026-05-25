import { ForzaHorizon6ClassCarGuidePage } from '@/components/games/forza-horizon-6-class-car-guide';
import {
  getForzaHorizon6ClassCarGuide,
  type ForzaHorizon6ClassCarGuide,
} from '@/lib/guides/forza-horizon-6-class-car-guides';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const guideId: ForzaHorizon6ClassCarGuide['id'] = 'b';
const guide = getForzaHorizon6ClassCarGuide(guideId);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: guide.title,
    description: guide.description,
    locale,
    pathname: guide.pathname,
  });
}

export default function BestBClassCarsPage() {
  return <ForzaHorizon6ClassCarGuidePage guide={guide} />;
}
