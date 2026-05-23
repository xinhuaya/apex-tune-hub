import { ForzaHorizon6BestCarGuidePage } from '@/components/games/forza-horizon-6-best-car-guide';
import {
  getForzaHorizon6BestCarGuide,
  type ForzaHorizon6BestCarGuide,
} from '@/lib/guides/forza-horizon-6-best-car-guides';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const guideId: ForzaHorizon6BestCarGuide['id'] = 'drift';
const guide = getForzaHorizon6BestCarGuide(guideId);

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

export default function BestDriftCarsPage() {
  return <ForzaHorizon6BestCarGuidePage guide={guide} />;
}
