import { ForzaHorizon6MakeCarGuidePage } from '@/components/games/forza-horizon-6-make-car-guide';
import {
  getForzaHorizon6MakeCarGuide,
  type ForzaHorizon6MakeCarGuide,
} from '@/lib/guides/forza-horizon-6-make-car-guides';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const guideId: ForzaHorizon6MakeCarGuide['id'] = 'mazda';
const guide = getForzaHorizon6MakeCarGuide(guideId);

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

export default function BestMazdaCarsPage() {
  return <ForzaHorizon6MakeCarGuidePage guide={guide} />;
}
