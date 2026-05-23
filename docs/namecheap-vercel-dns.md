# Namecheap + Vercel DNS Notes

Domain: `apextunehub.com`

## Recommended Flow

1. Deploy the project to Vercel.
2. In Vercel, open the project settings and add both domains:
   - `apextunehub.com`
   - `www.apextunehub.com`
3. Vercel will show the exact DNS records it wants. Use those values if they differ from the defaults below.
4. In Namecheap, go to `Domain List` -> `Manage` -> `Advanced DNS`.
5. Add or update these host records:

```text
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic

Type: CNAME Record
Host: www
Value: cname.vercel-dns-0.com
TTL: Automatic
```

## Important

- Do not set a CNAME record for `@`. Namecheap warns against using CNAME on the bare domain because it can interfere with email records.
- If Vercel shows a different CNAME target, use the value shown inside Vercel. Some Vercel docs and dashboards may show `cname.vercel-dns.com`; both values have appeared in Vercel guidance, so the project-specific dashboard value wins.
- DNS can update quickly, but allow up to 24 hours before assuming something is broken.
- After DNS verifies, set `NEXT_PUBLIC_BASE_URL` in Vercel to `https://apextunehub.com`.

## After DNS Works

Open these URLs:

```text
https://apextunehub.com
https://apextunehub.com/sitemap.xml
https://apextunehub.com/robots.txt
https://www.apextunehub.com
```

Choose one canonical domain in Vercel. Recommended canonical: `apextunehub.com`.
