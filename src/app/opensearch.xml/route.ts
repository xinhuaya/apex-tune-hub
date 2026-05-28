import { getBaseUrl } from '@/lib/urls';

export const revalidate = 86400;

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

export function GET() {
  const baseUrl = getBaseUrl();
  const searchUrl = `${baseUrl}/api/search?q={searchTerms}`;
  const fh6Url = `${baseUrl}/games/forza-horizon-6`;
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>Apex Tune Hub</ShortName>
  <Description>Search Apex Tune Hub Forza Horizon 6 tuning tools, guides, cars, settings, and presets.</Description>
  <InputEncoding>UTF-8</InputEncoding>
  <Image height="32" width="32" type="image/png">${escapeXml(baseUrl)}/favicon-32x32.png</Image>
  <Url type="text/html" template="${escapeXml(fh6Url)}" />
  <Url type="application/json" template="${escapeXml(searchUrl)}" />
</OpenSearchDescription>
`;

  return new Response(body, {
    headers: {
      'content-type': 'application/opensearchdescription+xml; charset=utf-8',
      'cache-control': 'public, max-age=86400, stale-while-revalidate=604800',
    },
  });
}
