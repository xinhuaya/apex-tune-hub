# Apex Tune Hub

Apex Tune Hub is an independent racing setup site built on MKSaaS. The first content hub focuses on Forza Horizon 6 tune calculators, shareable preset pages, car database pages, settings guides, and weekly update capture.

## Local Development

```bash
pnpm install
pnpm dev --hostname localhost --port 3017
```

Local URL:

```text
http://localhost:3017
```

## Current MVP

- Forza Horizon 6 tuning hub
- Tune, drift tune, and gear ratio calculators
- Shareable tune preset hub and preset detail pages
- Starter car database with car detail pages
- Evergreen guide cluster for beginner tuning, handling fixes, gearing, wheel settings, and Steam Deck settings
- Newsletter/update-list CTA across high-intent pages
- Sitemap, robots, structured data, and IndexNow tuned for the public FH6 pages
- Production domain: `https://apextunehub.com`

## Launch Checklist

- `NEXT_PUBLIC_BASE_URL` is set to the production domain.
- Google Search Console, Bing Webmaster Tools, and IndexNow have received the sitemap.
- `/sitemap.xml` includes FH6 guides, preset pages, car pages, freshness metadata, and hreflang alternates.
- Remaining manual items: replace local auth/provider secrets, connect production database, configure Resend or Beehiiv, and test the update-list form with a real email address.

## Notes

Apex Tune Hub is not affiliated with Playground Games, Turn 10 Studios, Xbox Game Studios, Microsoft, or the official Forza team. Calculator outputs are baseline setup notes and should be tested in-game.
