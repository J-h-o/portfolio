# AGENTS.md

Canonical guide for AI agents working in this repository. `CLAUDE.md` points here; keep this file the single source of truth.

## What this project is

Personal portfolio of **Joanis (John) Allushi**, full-stack developer based in Thessaloniki, Greece.
Repo: `https://github.com/J-h-o/portfolio` (branch: `master`).

- **Current state:** the **Next.js App Router rebuild is implemented at the root** with typed English/Greek content, locale-prefixed SSG case studies, services, about, booking and contact routes, metadata, JSON-LD, sitemap, and robots. Owner-dependent integration and launch items remain. See `docs/MIGRATION.md`.
- **Legacy state:** the unfinished 2022 Flutter Web app is preserved under `legacy/` as read-only reference until owner sign-off. See `docs/ARCHITECTURE.md`.

The rebuild happens **in this repo**: the Next.js app is scaffolded at the root, and the Flutter code moves to `legacy/` as a content/design reference until parity, then gets deleted.

## Read these before working

| Doc | Purpose |
|---|---|
| `docs/ARCHITECTURE.md` | Current Flutter app, file map, known bugs and placeholder code |
| `docs/MIGRATION.md` | Decision record + phased migration plan (this is the roadmap) |
| `docs/CONTENT.md` | Content inventory: what exists, what is placeholder, what the owner must supply |
| `docs/EXPERIENCE.md` | **Authoritative work history & skills** (extracted from owner's CVs, July 2026) — build all bio/experience/case-study content from this |
| `docs/DESIGN.md` | Current design tokens + Claude Design import workflow |
| `docs/SEO.md` | SEO strategy: rendering, metadata, structured data, performance |
| `docs/I18N.md` | English/Greek routing, dictionaries, translation rules, and locale SEO |

## Repo layout (current)

```
app/                    # Next.js routes, metadata routes, and contact API
components/             # Reusable layout, UI, and integration components
content/                # Typed public content; source of truth for rendered pages
styles/                 # Replaceable design-token adapter
public/                 # Brand and local font assets
design/                 # Supplied temporary Claude Design source export
tests/                  # Content integrity tests
legacy/                 # Read-only Flutter app and its original platform targets
docs/                   # Agent/human documentation (see table above)
```

The root is now the Next.js app. Everything Flutter-related lives under `legacy/`.

## Commands

**Current (Flutter — only if you must run the legacy app):**

```bash
flutter pub get
flutter run -d chrome
flutter build web
flutter analyze
```

Note: `pubspec.yaml` pins Dart SDK `>=2.15.1 <3.0.0` — the app will NOT build on modern Flutter (Dart 3+) without dependency upgrades. Do not sink time into fixing the legacy build unless explicitly asked; it exists as a content reference.

**Next.js:**

```bash
npm install
npm run dev          # local dev server
npm run build        # production build (must pass before any PR)
npm run lint
npm run test
npm run typecheck
```

## Conventions and guardrails

- **Do not add features to the Flutter app.** All new work targets the Next.js rebuild per `docs/MIGRATION.md`. Flutter code is read-only reference material.
- **Preserve real content.** Name, tagline, CV link, nav structure, and color palette in the Dart files are the authoritative source of existing content — extract, don't invent. Placeholder/duplicated content is flagged in `docs/CONTENT.md`; never treat it as real biography.
- **Content gaps need the owner.** Job history, project case studies, agency service descriptions, and testimonials must come from John — leave clearly marked `TODO(owner)` placeholders rather than fabricating.
- **SEO is a first-class requirement.** Every page in the new app ships with metadata, OG tags, and JSON-LD per `docs/SEO.md`. Server-render by default; add `"use client"` only where interactivity requires it.
- **Design system comes from Claude Design.** Don't hand-roll a visual identity. Follow the import workflow in `docs/DESIGN.md`; until Claude Design output lands, use the interim tokens documented there.
- **Booking = Cal.com embed** on a dedicated `/book` route (plus inline CTAs). Do not build a custom booking backend.
- **TypeScript strict, Tailwind CSS, App Router** for the new app. Commit messages: short imperative, lower-case (matches existing history, e.g. `cv section`).
- Update the relevant `docs/*.md` file whenever a decision or milestone in it changes. Stale docs are worse than no docs.
