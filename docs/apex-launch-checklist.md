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

## 2026-05-29 Overnight Build Notes

- [x] Promoted high-intent FH6 guide URLs in `/llms.txt` and `/feed.xml`.
- [x] Added guide-library shortcut bays for Japan routes, device feel, wheel brands, and weekly event preparation.
- [x] Refined sitemap priority tiers so the FH6 hub, calculator, guide index, high-intent guides, and long-tail pages are not all treated the same.
- [x] Added Web App Manifest shortcuts for the FH6 hub, tune calculator, guide library, and weekly playlist.
- [x] Saved local screenshot evidence at `previews/apex-local-fh6-guides-shortcut-bays.png`.
- [x] Deployed the latest batch to production after Vercel quota recovered.
- [x] Verified production `200` responses for FH6 hub, guide library, `/feed.xml`, `/llms.txt`, `/opensearch.xml`, `/manifest.webmanifest`, and `/sitemap.xml`.
- [x] Re-submitted the live FH6 hub, guide library, sitemap, feed, llms, manifest, and OpenSearch URLs through IndexNow; accepted `200`.
- [x] Saved production screenshot evidence at `previews/apex-production-fh6-guides-shortcut-bays.png`.

## 2026-05-29 Pending Production Batch

- [x] Added `difficulty-settings-guide` and linked it from the guide library, settings hub, `/feed.xml`, `/llms.txt`, and high-intent sitemap list.
- [x] Added `controller-deadzone-settings` and linked it from controller/settings hubs, `/feed.xml`, `/llms.txt`, and high-intent sitemap list.
- [x] Added `wheel-rotation-deadzone-settings` and linked it from wheel/settings hubs, `/feed.xml`, `/llms.txt`, and high-intent sitemap list.
- [x] Added `tuning-glossary-setup-terms` and linked it from the launch guide cluster, `/feed.xml`, `/llms.txt`, and high-intent sitemap list.
- [x] Added `pnpm audit:fh6-links` to check FH6 guide duplicate slugs and generated-page links.
- [x] Verified `pnpm build` after each guide batch; only local `BETTER_AUTH_SECRET` warnings appeared.
- [x] Verified `pnpm audit:fh6-links`: `69` guide pages, `129` known paths, no duplicate slugs, no broken guide links.
- [x] Verified locally on port `3037`: the 4 new guide URLs, guide index, `/feed.xml`, `/llms.txt`, and `/sitemap.xml` returned `200` and contained the new paths.
- [ ] Deploy this batch to production after Vercel free deployment quota resets. Last CLI attempt returned `api-deployments-free-per-day`.
- [ ] After deploy, verify the 4 new guide URLs, updated `/games/forza-horizon-6/guides`, `/feed.xml`, `/llms.txt`, and `/sitemap.xml`.
- [ ] Submit IndexNow for the 4 new guide URLs plus the updated guide index, settings hubs, feed, llms, and sitemap.

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
