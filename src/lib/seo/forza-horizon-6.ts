import { getBaseUrl } from '@/lib/urls';

export type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

const siteName = 'Apex Tune Hub';
const modifiedDate = '2026-05-29';

function buildOrganizationJsonLd() {
  return {
    '@type': 'Organization',
    name: siteName,
    url: getBaseUrl(),
    logo: absoluteUrl('/android-chrome-512x512.png'),
  };
}

export function absoluteUrl(path: string) {
  return `${getBaseUrl()}${path}`;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqJsonLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished: modifiedDate,
    dateModified: modifiedDate,
    author: {
      '@type': 'Organization',
      name: siteName,
      url: getBaseUrl(),
    },
    publisher: buildOrganizationJsonLd(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(path),
    },
  };
}

export function buildWebPageJsonLd({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: absoluteUrl(path),
    isPartOf: {
      '@type': 'WebSite',
      name: siteName,
      url: getBaseUrl(),
    },
    dateModified: modifiedDate,
  };
}

export function buildSoftwareApplicationJsonLd({
  title,
  description,
  path,
  featureList,
}: {
  title: string;
  description: string;
  path: string;
  featureList: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    description,
    url: absoluteUrl(path),
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    isAccessibleForFree: true,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    featureList,
    publisher: buildOrganizationJsonLd(),
  };
}

export function buildHowToJsonLd({
  title,
  description,
  path,
  steps,
}: {
  title: string;
  description: string;
  path: string;
  steps: FaqItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    url: absoluteUrl(path),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.question,
      text: step.answer,
    })),
  };
}

export function buildWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: getBaseUrl(),
    logo: absoluteUrl('/android-chrome-512x512.png'),
    description:
      'Racing tune calculators, car setup data, settings guides, and weekly trackers for Forza Horizon 6.',
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: getBaseUrl(),
    },
  };
}

export function buildItemListJsonLd({
  title,
  items,
}: {
  title: string;
  items: BreadcrumbItem[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
