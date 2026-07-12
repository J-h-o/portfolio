# MIGRATION.md — Flutter → Next.js roadmap

The single roadmap for turning this repo into a portfolio + booking + software-agency website. The first end-to-end implementation landed on 12 July 2026; remaining items are primarily owner integrations, final design, launch QA, and sign-off.

## Decision record (July 2026)

| Decision | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router), TypeScript, Tailwind CSS** | SSR/SSG for SEO, metadata API, mature ecosystem for booking/agency features, free Vercel deploys |
| Rendering | Static (SSG) by default, SSR where needed | Portfolio/agency pages are mostly static; fastest CWV |
| Booking | **Cal.com embed** on `/book` | Open-source, free tier, Google Calendar sync, self-hostable later; no custom backend to maintain |
| Design system | **Claude Design (Anthropic)** output, translated to Tailwind tokens | Owner will generate layouts/design system with Claude Design; workflow in `docs/DESIGN.md` |
| Repo strategy | **Rebuild in this repo**; Flutter moves to `legacy/`, deleted after parity | Keeps history and content in one place |
| Rewrite vs. port | Rewrite | Flutter Web canvas rendering is incompatible with SEO goals; app is ~500 LOC with mostly placeholder content — nothing to port but content |

## Target site map

```
/                → Home: hero, services teaser, featured projects, booking CTA
/portfolio       → Project grid (SSG)
/portfolio/[slug]→ Case study pages (SSG, one per project)
/services        → Agency services (web/app development, consulting)
/about           → Bio, experience timeline, CV download
/book            → Cal.com embedded scheduler
/contact         → Contact form + details
/blog (optional) → Later phase; strongest long-term SEO lever
```

Content lives in typed data files or MDX under `content/` — no CMS in v1.

## Phases

### Phase 0 — Documentation & content extraction ✅ (this change)
- [x] AGENTS.md / CLAUDE.md / docs suite
- [x] Content inventory (`docs/CONTENT.md`)
- [ ] Owner fills `TODO(owner)` items in `docs/CONTENT.md` (job history, projects, services, updated CV)

### Phase 1 — Scaffold
- [x] Move Flutter app (`lib/`, `web/`, `android/`, `ios/`, `test/`, `pubspec.*`, `analysis_options.yaml`, `.metadata`, `.dart_tool` ignores) → `legacy/`
- [x] Next.js 16 App Router scaffold at root (strict TypeScript, Tailwind CSS 4, ESLint)
- [x] Base layout: nav (Home/Portfolio/Services/About/Book/Contact), footer, local fonts
- [x] Translate the supplied temporary Allushi design export into a replaceable token/component layer
- [ ] Deploy pipeline (Vercel) with preview URLs
  - [x] GitHub Actions CI for lint, types, tests, and production build
  - [ ] Import the GitHub repository into the owner’s Vercel account to activate preview/production CD

### Phase 2 — Portfolio parity & content
- [x] Home page (single server-rendered hero with real content)
- [x] About page: verified bio, complete public-safe experience timeline, skills, education, certification, languages
- [ ] Updated owner CV PDF and download link (page currently states that the updated CV is pending)
- [x] Portfolio grid + reusable SSG case-study template with five verified projects
- [x] Contact page + validated route handler + Resend adapter + email fallback

### Phase 3 — Agency
- [x] Services page with four supplied capability areas and a clear process
- [ ] Owner-approved pricing signals and final target-client language
- [ ] Testimonials/clients section (owner-supplied)
- [x] Booking CTAs throughout

### Phase 4 — Booking
- [ ] Cal.com account + event types (e.g. 15-min intro, 60-min consultation)
- [x] `/book` route with lazy `@calcom/embed-react` adapter and transparent fallback
- [ ] Supply `NEXT_PUBLIC_CAL_LINK` and verify the real booking flow
- [ ] Confirmation/thanks flow

### Phase 5 — SEO hardening & launch
- [x] Technical SEO: per-page metadata/canonicals, OG images, JSON-LD, sitemap, robots, manifest, icon, and custom 404
- [x] Public content is server-rendered; case studies use `generateStaticParams`
- [x] English and Greek locale trees with persistent switching, translated metadata/structured data, and `hreflang` alternates
- [ ] Lighthouse ≥ 90 on all categories, mobile
- [ ] Domain + redirects from any old URLs; submit sitemap to Search Console
- [ ] Delete `legacy/` once owner confirms parity

## Implemented architecture (12 July 2026)

- Public content is typed under `content/`; English and Greek share the same content contracts and case-study slugs, and no page or visual component owns biography or case-study facts.
- The temporary Claude Design export is preserved under `design/`, with production tokens adapted in `styles/design-tokens.css` and reusable components under `components/`.
- All public routes are static/SSG. `/api/contact` is the only dynamic route.
- Booking JavaScript is loaded only on `/book` and only when a Cal.com link exists.
- Deployment and environment setup are documented in `docs/DEPLOYMENT.md`.

## Definition of done (per phase)
`npm run build` and `npm run lint` pass; pages server-render real HTML (verify with `curl` — content must be visible without JS); relevant docs updated; no fabricated content shipped.
