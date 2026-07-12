# DEPLOYMENT.md — Vercel launch runbook

The production target is **Vercel with GitHub integration**. The app uses static generation for public pages and one Next.js route handler for contact delivery, so no custom server configuration is required.

## CI/CD shape

- **CI:** `.github/workflows/ci.yml` runs on pull requests and pushes to `master`. It uses Node.js 20.19, `npm ci`, lint, strict type-checking, tests, and the production build.
- **CD previews:** Vercel’s Git integration deploys every non-production branch and pull request to a unique preview URL.
- **CD production:** Vercel deploys every accepted push to the configured production branch (`master`) to the production domain.
- No Vercel token or deployment secret is stored in GitHub because native Vercel Git deployment handles CD.

## Why this path

- Every push to a non-production branch gets a preview URL.
- The production branch (`master` in this repository) deploys automatically after it is connected.
- Next.js image optimisation, metadata routes, the contact route handler, and environment variables work without an extra platform adapter.
- Rollback is a deployment selection in Vercel rather than a server rebuild.

## One-time project setup

1. Import `https://github.com/J-h-o/portfolio` in Vercel.
2. Keep the framework preset as **Next.js** and the root directory as `./`.
3. Set the production branch to **`master`** (Vercel often defaults to `main`, so verify this explicitly).
4. Use the default build command `npm run build` and install command `npm install`.
5. Add the environment variables below to Production and Preview as appropriate.
6. Deploy once on the generated Vercel domain, then run the verification checklist.

No `vercel.json` is required. Git-based deployments are preferred over a custom GitHub Action because Vercel already supplies preview deployments and production promotion for this repository shape.

## Environment variables

| Name | Required for launch | Scope | Purpose |
|---|---:|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Production / Preview | Canonical metadata origin. Production should be the final HTTPS domain. |
| `NEXT_PUBLIC_CAL_LINK` | Yes for booking | Production / Preview | Shared Cal.com full event URL or `username/event` path. |
| `NEXT_PUBLIC_CAL_LINK_EN` | Optional | Production / Preview | Full URL or event path for the English event; overrides the shared link on `/en/book`. |
| `NEXT_PUBLIC_CAL_LINK_EL` | Optional | Production / Preview | Full URL or event path for the Greek event; overrides the shared link on `/el/book`. |
| `RESEND_API_KEY` | Recommended | Production / Preview | Sends contact briefs directly. Secret; never expose as `NEXT_PUBLIC_*`. |
| `RESEND_FROM_EMAIL` | Recommended | Production / Preview | Verified sender on the production domain. |
| `CONTACT_TO_EMAIL` | Recommended | Production / Preview | Recipient; defaults to `contact@joanisallushi.com`. |

The site still works safely before Cal.com or Resend is configured: booking shows an email fallback and the contact form opens a populated email draft.

## Connect Cal.com

1. In Cal.com, open **Event Types** and create or select the event visitors should book.
2. Configure duration, availability, connected calendar, conferencing location, and confirmation settings.
3. From the event’s menu choose **Embed** or copy its public URL. A URL such as `https://cal.com/username/intro-call` can be pasted directly into this project.
4. For one bilingual event, set `NEXT_PUBLIC_CAL_LINK`. For fully translated Cal.com titles/descriptions, create an English and Greek event and set `NEXT_PUBLIC_CAL_LINK_EN` and `NEXT_PUBLIC_CAL_LINK_EL`.
5. Add the same values in Vercel under **Project → Settings → Environment Variables** for Production and Preview, then redeploy.
6. Make one test booking in each language and confirm the event reaches the connected calendar and meeting provider.

These values are public booking URLs, not secrets. The application validates full URLs and accepts the global `cal.com` and European `cal.eu` hosts; event paths such as `username/intro-call` also work and default to `cal.com`.

## Domain and email

1. `TODO(owner)`: confirm whether the canonical launch domain is `joanisallushi.com`, `allushi.io`, or `allushi.ai`.
2. Add the chosen domain to Vercel and apply the DNS records Vercel provides.
3. Pick one canonical host (apex or `www`) and redirect the other.
4. Set `NEXT_PUBLIC_SITE_URL` to that canonical HTTPS URL and redeploy.
5. Verify the domain used in `RESEND_FROM_EMAIL` with Resend (SPF/DKIM) before enabling direct delivery.
6. Keep `contact@joanisallushi.com` only if that mailbox remains the intended public address after the brand-domain decision.

## Pre-launch verification

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

On the preview deployment verify:

- `/` redirects to the saved/default locale; `/en` and `/el` versions of services, portfolio, every case study, about, book, and contact return 200.
- `/sitemap.xml`, `/robots.txt`, `/manifest.webmanifest`, `/opengraph-image`, and `/icon` render.
- Page source contains headings and content without requiring JavaScript.
- English and Greek pages set the correct `<html lang>`, canonical URL, reciprocal `hreflang`, and language-preserving internal links.
- A real Cal.com test booking reaches the connected calendar and expected meeting provider.
- A contact-form test reaches `CONTACT_TO_EMAIL` and reply-to is the visitor address.
- Metadata canonical URLs use the final domain, not a preview URL.
- Lighthouse mobile scores at least 90 in Performance, Accessibility, Best Practices, and SEO.

## Launch and post-launch

1. Point the domain only after the preview passes.
2. Submit `/sitemap.xml` to Google Search Console.
3. Confirm the production branch and deployment protection settings.
4. Monitor the first real contact and booking flows.
5. Delete `legacy/` only after owner visual/content parity sign-off.

## Current blockers

- Final canonical domain decision.
- Cal.com account/event path and calendar availability.
- Resend account/API key and verified sender domain.
- Updated personal CV PDF.
- Final Claude Design export, imagery, testimonials/client permissions, and remaining owner content decisions.
