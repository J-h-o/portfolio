# SEO.md — SEO strategy & launch checklist

Why the rebuild exists: the Flutter app paints to canvas, so crawlers see an empty shell titled "portfolio" with description "A new Flutter project." The Next.js app must make every page's primary content server-rendered HTML.

## Implementation status — 12 July 2026

Implemented:

- Static HTML for home, services, portfolio, five case studies, about, booking, and contact.
- `generateStaticParams` for every case-study slug.
- Unique page titles, descriptions, canonicals, Open Graph, and Twitter cards.
- Site-wide `Person`, home `ProfessionalService`, per-service `Service`, and per-case-study `CreativeWork` JSON-LD.
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, generated icon/OG images, and custom 404.
- Local self-hosted fonts, explicit wordmark dimensions, reduced-motion support, semantic headings, and one H1 per page.
- Booking iframe isolated to the `/book` client leaf.
- Complete `/en` and `/el` sub-path routing, canonical URLs per locale, reciprocal `en-GB` / `el-GR` / `x-default` alternates, and localized sitemap entries.

Still required before launch: final domain/canonical decision, Resend verification, Lighthouse runs on a Vercel preview, Search Console submission, and final production imagery/design QA.

## Rendering rules

- SSG (`generateStaticParams`) for portfolio, case studies, services, about; SSR only where dynamic data requires it.
- Verify with `curl <url>` — hero text, headings, and body copy must appear in raw HTML without JS.
- `"use client"` only for leaf interactive components (booking embed, forms, menus).

## Per-page requirements (App Router `metadata` / `generateMetadata`)

- Unique `<title>` (≤60 chars, pattern: `{Page} | Joanis Allushi` or agency brand once decided) and `description` (~150 chars).
- Canonical URL, Open Graph + Twitter card, OG image (generate via `next/og` per page type).
- One `<h1>` per page; semantic heading hierarchy; descriptive `alt` text everywhere.

## Structured data (JSON-LD)

- Site-wide: `Person` (Joanis Allushi, `jobTitle`, `sameAs` socials from `docs/CONTENT.md`).
- Agency pages: `ProfessionalService` (or `LocalBusiness` with Thessaloniki address if owner wants local SEO) + `Service` per offering.
- Case studies: `CreativeWork`; blog posts (later): `BlogPosting` per post.

## Site plumbing

- `app/sitemap.ts` and `app/robots.ts`; submit sitemap to Google Search Console at launch.
- Trailing-slash and www/non-www redirects decided once; 301s from any legacy URLs.
- Custom 404; no orphan pages — everything reachable from nav or internal links.

## Performance (Core Web Vitals)

- Lighthouse ≥90 mobile on all categories before launch.
- `next/image` for all imagery (AVIF/WebP, explicit sizes); `next/font` (self-hosted, `display: swap`).
- Booking iframe on `/book` only; no booking JS ships site-wide.

## Content levers (post-launch)

- Case studies are the primary keyword surface ("Flutter developer Thessaloniki", "web development agency Greece", stack-specific terms) — write them as problem → solution → outcome with real metrics.
- Blog (Phase 5+) targeting long-tail dev/agency queries.
- English and Greek are now implemented. Any new page must ship both locale variants and reciprocal `hreflang` entries in the same change; see `docs/I18N.md`.
