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
- Sitemap and robots rules tuned for the public FH6 pages

## Launch Checklist

- Set `NEXT_PUBLIC_BASE_URL` to the production domain.
- Replace local auth and provider secrets before deployment.
- Configure Resend or Beehiiv for newsletter capture.
- Add Google Search Console and Bing Webmaster after the first deploy.
- Submit `/sitemap.xml` once the production domain is live.

## Notes

Apex Tune Hub is not affiliated with Playground Games, Turn 10 Studios, Xbox Game Studios, Microsoft, or the official Forza team. Calculator outputs are baseline setup notes and should be tested in-game.
