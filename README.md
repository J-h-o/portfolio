# Allushi — Portfolio, Software & AI Studio

The production rebuild of Joanis Allushi’s portfolio and software studio site. It combines verified work history and case studies with service pages, a Cal.com booking route, a working contact path, complete server-rendered SEO plumbing, and first-class English/Greek localization.

The site is built with Next.js App Router, strict TypeScript, Tailwind CSS, and a temporary Claude Design export. The legacy Flutter application is preserved in `legacy/` until owner sign-off.

## Run locally

Requirements: Node.js 20.9 or newer (Node.js 20.19+ recommended for the current lint ecosystem).

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. First-time visitors are sent to English at `/en`; selecting Greek stores the preference and uses `/el` on later unprefixed visits.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

All four must pass before deployment.

## Content and design boundaries

- `content/` is the typed source for public copy, services, work history, and case studies.
- `content/dictionary.ts` owns shared English/Greek UI copy; localized content modules preserve the same slugs and data shape in both languages.
- `components/` contains reusable view contracts; pages compose them without owning the content.
- `styles/design-tokens.css` is the temporary visual adapter. Replace this and the UI primitives when the final Claude Design system arrives.
- `design/allushi-design-system/` preserves the supplied temporary source export for reference.
- `legacy/` contains the original Flutter project and its pre-existing local changes.

No unresolved FODSA details, private phone number, obsolete CV, placeholder testimonials, or mock case studies are published.

## Integrations

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_CAL_LINK` to one shared Cal.com event URL, or `NEXT_PUBLIC_CAL_LINK_EN` / `NEXT_PUBLIC_CAL_LINK_EL` to separate translated events. Without them, `/book` shows a transparent email fallback.
- `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, and `CONTACT_TO_EMAIL` to enable direct contact-form delivery. Without them, a validated brief opens in the visitor’s email app.
- `NEXT_PUBLIC_SITE_URL` to the canonical production domain.

See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) for the Vercel launch procedure and [`docs/MIGRATION.md`](docs/MIGRATION.md) for remaining owner-dependent work.

Pull requests and pushes to `master` run the GitHub Actions workflow in `.github/workflows/ci.yml`. It installs from the lockfile, then runs lint, strict type-checking, tests, and the production build.

## Project guidance

Read [`AGENTS.md`](AGENTS.md) first. Supporting documents:

| Document | Purpose |
|---|---|
| [`docs/EXPERIENCE.md`](docs/EXPERIENCE.md) | Authoritative work history and skills |
| [`docs/CONTENT.md`](docs/CONTENT.md) | Public-content inventory and owner TODOs |
| [`docs/DESIGN.md`](docs/DESIGN.md) | Temporary design-system mapping and replacement boundary |
| [`docs/SEO.md`](docs/SEO.md) | Rendering and search requirements |
| [`docs/I18N.md`](docs/I18N.md) | Locale routing, translation rules, and adding languages |
| [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md) | Vercel, integrations, domain, and launch checks |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Legacy Flutter analysis |
