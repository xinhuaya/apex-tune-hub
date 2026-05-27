const INDEXNOW_KEY = 'ea52c6b28bddfc74821b5046a67dc918';
const DEFAULT_BASE_URL = 'https://apextunehub.com';
const DEFAULT_ENDPOINT = 'https://api.indexnow.org/indexnow';
const SUPPLEMENTAL_PATHS = ['/llms.txt', '/feed.xml'];

type SubmitOptions = {
  baseUrl: string;
  endpoint: string;
  dryRun: boolean;
  limit?: number;
  explicitUrls: string[];
};

function parseArgs(argv: string[]): SubmitOptions {
  const options: SubmitOptions = {
    baseUrl: process.env.INDEXNOW_BASE_URL ?? DEFAULT_BASE_URL,
    endpoint: process.env.INDEXNOW_ENDPOINT ?? DEFAULT_ENDPOINT,
    dryRun: false,
    explicitUrls: [],
  };

  for (let index = 0; index < argv.length; index++) {
    const arg = argv[index];
    const next = argv[index + 1];

    if (arg === '--dry-run') {
      options.dryRun = true;
      continue;
    }

    if (arg === '--base-url' && next) {
      options.baseUrl = next;
      index++;
      continue;
    }

    if (arg === '--endpoint' && next) {
      options.endpoint = next;
      index++;
      continue;
    }

    if (arg === '--limit' && next) {
      const limit = Number.parseInt(next, 10);
      if (Number.isFinite(limit) && limit > 0) {
        options.limit = limit;
      }
      index++;
      continue;
    }

    if (arg === '--url' && next) {
      options.explicitUrls.push(next);
      index++;
      continue;
    }
  }

  options.baseUrl = options.baseUrl.replace(/\/$/, '');

  return options;
}

function extractSitemapUrls(xml: string) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1]?.trim())
    .filter((url): url is string => Boolean(url));
}

async function fetchSitemapUrls(baseUrl: string) {
  const response = await fetch(`${baseUrl}/sitemap.xml`, {
    headers: {
      'user-agent': 'ApexTuneHub-IndexNow/1.0',
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch sitemap: ${response.status} ${response.statusText}`
    );
  }

  return extractSitemapUrls(await response.text());
}

function sameHostUrls(urls: string[], host: string) {
  return urls.filter((url) => {
    try {
      return new URL(url).host === host;
    } catch {
      return false;
    }
  });
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const base = new URL(options.baseUrl);
  const keyLocation = `${options.baseUrl}/${INDEXNOW_KEY}.txt`;
  const supplementalUrls = SUPPLEMENTAL_PATHS.map(
    (path) => `${options.baseUrl}${path}`
  );
  const sitemapUrls =
    options.explicitUrls.length > 0
      ? options.explicitUrls
      : [...(await fetchSitemapUrls(options.baseUrl)), ...supplementalUrls];

  const urlList = sameHostUrls([...new Set(sitemapUrls)], base.host).slice(
    0,
    options.limit
  );

  if (urlList.length === 0) {
    throw new Error('No URLs found for IndexNow submission.');
  }

  const payload = {
    host: base.host,
    key: INDEXNOW_KEY,
    keyLocation,
    urlList,
  };

  console.log(
    JSON.stringify(
      {
        endpoint: options.endpoint,
        host: payload.host,
        keyLocation: payload.keyLocation,
        urlCount: payload.urlList.length,
        firstUrls: payload.urlList.slice(0, 5),
        dryRun: options.dryRun,
      },
      null,
      2
    )
  );

  if (options.dryRun) {
    return;
  }

  const response = await fetch(options.endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  const body = await response.text();

  if (!response.ok) {
    throw new Error(
      `IndexNow submission failed: ${response.status} ${response.statusText}\n${body}`
    );
  }

  console.log(`IndexNow submission accepted: ${response.status}`);
  if (body) {
    console.log(body);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
