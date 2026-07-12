# Allushi Design System

Design system for **Allushi** (joanisallushi.com → allushi.io / allushi.ai) — a software development
studio delivering tailor-made software: frontend, backend, AI, advanced automation systems, and plugins.
Small team, big and complicated solutions. Clients have included government sectors, banks, startups,
and healthtech.

Brand position: **high quality, clean, professional image; fast delivery; close personal collaboration.**

## Sources

- `portfolio/` — attached Flutter codebase of the old, deprecated portfolio site
  (joanisallushi.com, "Joanis Allushi | Developer Portfolio"). Treated as *legacy reference only*;
  the client explicitly asked for a big step up from it. Legacy values: dark bg `#07111A`,
  primary green `#15B572`, accent red-orange `#F94D1E`, caption gray `#A6B1BB`, Oswald headings +
  Lato body, 8px-radius buttons, blob-shaped photo cutouts.
- `uploads/Generated image 1.png` — the current ALLUSHI wordmark lockup
  ("ALLUSHI / SOFTWARE • AI • SYSTEMS", black geometric caps, wide tracking). Copied to
  `assets/logo/` with derived white/transparent variants.

## The step-up direction

The old site was a personal portfolio; the new brand is a studio. The system keeps one thread of
continuity — the signal-green hue (`#15B572`) — and rebuilds everything else around the new wordmark's
engineered, monochrome character:

- **Ink & paper first.** Near-black (`--ink-950 #0A0C0E`) and white/off-white carry the identity.
  Green appears as a *signal*: status dots, accents, focus rings, one CTA per view — never floods.
- **Engineered type.** Space Grotesk (display) echoes the wordmark's geometry; Inter does body work;
  JetBrains Mono marks the "systems" layer — kickers, labels, code, metadata.
- **The dot separator** (`•`) from the lockup is the brand's native punctuation for meta rows:
  `SOFTWARE • AI • SYSTEMS`, `GOVERNMENT • BANKING • HEALTHTECH`.

## CONTENT FUNDAMENTALS

Voice: **personal but professional** — a small senior team speaking directly, not corporate marketing.

- **Person:** "we" for the studio, "you/your" for the client. Direct address: "We build the systems
  your team relies on." Never third-person ("Allushi provides…").
- **Casing:** sentence case for headlines and body ("Software that ships fast and holds up").
  UPPERCASE reserved for the mono kicker layer (`OUR WORK`, `SERVICES`) and the wordmark itself.
- **Sentences:** short, declarative, concrete. Lead with the outcome, then the how.
  Prefer "Delivered in six weeks" over "We pride ourselves on rapid delivery timelines."
- **Claims:** verifiable and specific — sectors served, delivery times, stack names.
  No superlative fluff ("world-class", "cutting-edge").
- **Technical vocabulary is welcome** (APIs, pipelines, automations, plugins) — clients hire Allushi
  *because* it's technical. Explain consequences, not jargon.
- **Emoji: never.** The technical register comes from mono type and dot separators instead.
- Example headline: `Tailor-made software, delivered fast.`
- Example kicker + heading pair: `SYSTEMS • AUTOMATION` / `Pipelines that run themselves.`
- Example body: `We're a small team that ships big systems — for governments, banks, and startups
  that can't afford to get it wrong.`

## VISUAL FOUNDATIONS

- **Color:** ink neutrals (11-step cool gray ramp) on paper white; dark sections use `--ink-950`
  with `--ink-900/800` cards. One accent: signal green (`--green-500 #15B572` anchor). Semantic
  red/amber/blue exist for status only. No gradients as identity — flat fields, hard sections.
- **Type scale:** 12→80px (`--text-xs`…`--text-5xl`). Display set tight (`--leading-tight 1.08`,
  tracking −1–2%); body at 15px/1.55. Mono kickers: 12px, 500, uppercase, +8% tracking.
  Wordmark-style lockups: +22% tracking (`--tracking-wordmark`).
- **Spacing:** 4px base scale to 128px. Content container 1140px. Sections breathe: 96–128px
  vertical padding on marketing surfaces.
- **Backgrounds:** flat paper or flat ink. Rhythm comes from alternating light/dark bands, not
  textures or gradients. No blobs (legacy motif, retired). Fine 1px rules (`--border-default`)
  divide content; occasional hairline grid/baseline patterns are acceptable in dark hero areas
  at very low contrast.
- **Cards:** white on light (1px `--border-default`, `--radius-md 10px`, `--shadow-card` whisper);
  `--ink-900` on dark with `--border-dark`. No colored left-border accents. Elevation is mostly
  border + tiny shadow; overlays use `--shadow-overlay`.
- **Radii:** tight and engineered — 6px controls, 10px cards, 14px large media, 999px pills for
  tags only. Nothing bubbly.
- **Buttons:** primary = ink-filled (dark: white-filled); accent = green-filled with ink text —
  at most one green CTA per view. Secondary = 1px outline. Ghost = text-only.
  Hover: fill lightens/darkens one step (no scale). Press: translateY(1px). Focus:
  `--shadow-accent-glow` ring (3px green at 20%).
- **Motion:** restrained and quick — 120–350ms, `--ease-out` (cubic-bezier(.22,1,.36,1)).
  Fades and small translates only; no bounces, no parallax. Status dots may pulse slowly.
- **Transparency/blur:** sparingly — a sticky nav may use paper/ink at 85% + `backdrop-filter: blur(12px)`;
  nothing else is glassy.
- **Imagery:** cool, desaturated, technical (screens, workspaces, infrastructure). B&W or
  near-B&W treatment preferred so the green signal stays the only color note. No stock-photo
  handshakes; real work or abstract system diagrams.
- **The mono layer:** anything "machine" — statuses, versions, dates, tags, code — is set in
  JetBrains Mono. This is the most distinctive brand device after the wordmark.

## ICONOGRAPHY

- The legacy codebase used Flutter's built-in Material icons (menu glyph only) — no bespoke icon set
  exists. **Adopted set: [Lucide](https://lucide.dev) via CDN** — 1.5px stroke, geometric, matches
  the engineered type. Flagged as an intentional addition.
- Usage: 16–20px inline with text, 24px in feature cards; stroke color inherits text color; green
  only for status/confirmation.
- Unicode as icons: the interpunct `•` (meta separators) and `→` (links/CTAs: "See the work →")
  are native brand devices. No emoji, ever.
- Logo assets in `assets/logo/`: `allushi-wordmark-black.png` (original, white bg),
  `allushi-wordmark-black-transparent.png`, `allushi-wordmark-white.png` (for dark surfaces).
  There is no standalone glyph/monogram mark — when space is tight, use the plain-type name
  "ALLUSHI" in Space Grotesk 700 with `--tracking-wordmark`, or just plain type. Never redraw the wordmark.
- Legacy person cutouts / favicon in `scraps/` are deprecated — do not use.

## Index

- `styles.css` — global entry; imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `fonts.css`.
- `assets/logo/` — wordmark variants. `assets/fonts/` — woff2 binaries.
- `guidelines/` — foundation specimen cards (Design System tab).
- `components/` — no source component library existed; standard set authored against the
  foundations (see "Intentional additions"):
  - `forms/` — Button, IconButton, Input, Select, Checkbox, Radio, Switch
  - `display/` — Card, Badge, Tag, Tooltip
  - `navigation/` — Tabs
  - `feedback/` — Dialog, Toast
- `ui_kits/website/` — the allushi.io marketing site kit (hero, services, work, process, contact).
- `templates/` — reusable starting templates for consuming projects.
- `SKILL.md` — agent skill entry point.

## Intentional additions

- Component set (Button…Toast): no component inventory existed in any source; authored from scratch.
- Lucide icons: no icon set existed in any source.
- Space Grotesk / Inter / JetBrains Mono: the wordmark's typeface is unidentified (custom or
  proprietary geometric sans). Space Grotesk is the nearest Google Fonts match — **ask the client
  for the real font files** if they exist.

## Caveats

- The wordmark PNG is raster-only (no vector source). Ask for an SVG/AI original.
- Legacy green `#15B572` was kept as the brand anchor on the client's continuity; confirm.
- No photography/illustration assets exist yet beyond the wordmark; image slots are placeholders.
