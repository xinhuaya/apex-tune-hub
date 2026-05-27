# Apex Tune Hub Launch Checklist

Use this checklist when moving the local MVP from `http://localhost:3017` to `https://apextunehub.com`.

## Required Production Environment Variables

Set these in the deployment platform before the first public deploy:

```text
NEXT_PUBLIC_BASE_URL="https://apextunehub.com"
BETTER_AUTH_SECRET="replace-with-a-long-random-secret"
DATABASE_URL="postgres connection string"
RESEND_API_KEY="resend api key"
RESEND_AUDIENCE_ID="resend audience id"
```

Optional, but useful after the first deploy:

```text
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=""
NEXT_PUBLIC_CLARITY_PROJECT_ID=""
NEXT_PUBLIC_UMAMI_WEBSITE_ID=""
NEXT_PUBLIC_UMAMI_SCRIPT="https://cloud.umami.is/script.js"
```

## Before Deploy

- [x] Confirm the production domain is `apextunehub.com` and set `NEXT_PUBLIC_BASE_URL`.
- [ ] Replace the local `BETTER_AUTH_SECRET`.
- [ ] Connect a production Postgres database.
- [ ] Configure Resend or Beehiiv so update-list forms can capture emails.
- [x] Confirm `pnpm build` passes locally.
- [x] Confirm `/sitemap.xml` includes FH6 guides, preset pages, and car pages.
- [x] Confirm `/sitemap.xml` includes `lastmod`, `changefreq`, and `priority`.
- [x] Confirm `/robots.txt` blocks dashboard, account, and unused template pages, but not public FH6 settings pages.
- [x] Publish `/games/forza-horizon-6/official-sources` for official FH6 source tracking.
- [x] Publish `/llms.txt` and `/feed.xml` for AI/RSS discovery.

## After Deploy

- [x] Open `/`, `/games/forza-horizon-6`, `/tools/forza-horizon-6-tune-calculator`, `/games/forza-horizon-6/guides`, and one preset detail page.
- [x] Submit `/sitemap.xml` in Google Search Console.
- [x] Submit `/sitemap.xml` in Bing Webmaster Tools.
- [x] Submit public sitemap URLs through IndexNow.
- [x] Include `/llms.txt` and `/feed.xml` in the IndexNow helper script.
- [x] Re-submit IndexNow after discovery updates; accepted 87 URLs.
- [x] Verify `/games/forza-horizon-6/official-sources`, `/llms.txt`, and `/feed.xml` return `200`.
- [ ] Test the update-list form with a real email address.
- [ ] Check that confirmation email subject says `You are on the Apex Tune Hub update list`.
- [ ] Search `site:apextunehub.com forza horizon 6` after Google starts indexing.

## First 14 Days

- Publish or expand 5-10 more guide pages only after Search Console starts showing impressions.
- Watch Search Console queries for unexpected phrases and turn the best ones into guide pages.
- Keep calculator pages linked from every guide and preset page.
- Avoid thin city-style or fake meta pages. Label untested recommendations clearly.
- Add real testing notes, screenshots, or route-specific observations whenever available.

## Human Inputs Needed

- Production `BETTER_AUTH_SECRET`.
- Database provider and connection string.
- Newsletter provider API key and audience/publication ID.
- Analytics IDs, if analytics are enabled.
- First real newsletter subscription test.
