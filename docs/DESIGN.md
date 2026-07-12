# DESIGN.md — Design system & Claude Design workflow

## Source of truth

The final visual identity will be produced with **Claude Design**. A temporary Allushi export supplied on **12 July 2026** is currently implemented so the product can run end to end. The owner has explicitly said this export will be replaced; content and application logic must remain decoupled from it.

## Current temporary export mapping

| Export source | Production adapter |
|---|---|
| `design/allushi-design-system/tokens/` | `styles/design-tokens.css` |
| Supplied local WOFF2 files | `public/fonts/` and `@font-face` declarations |
| Supplied wordmark PNGs | `public/brand/` and `components/ui/brand-logo.tsx` |
| Supplied component contracts | `components/ui/` plus semantic classes in `app/globals.css` |
| Supplied website kit | Page/section composition only; mock case studies and fake metrics were not imported |
| Verified owner content | `content/` (never coupled to the design export) |

The current visual direction is ink/paper, signal green, Space Grotesk display, Inter body, and JetBrains Mono metadata. The design export itself is versioned only as reference; production components are idiomatic, accessible React.

## Workflow: Claude Design → this repo

1. **Owner generates** the design system / page layouts in Claude Design (it can ingest this repo and `docs/CONTENT.md` for context; point it at the legacy palette below as an optional dark-mode reference).
2. **Export** the replacement design system into a new versioned folder under `design/`; do not overwrite the existing export until the replacement is mapped and reviewed.
3. **Agents translate, don't paste:** convert exported values into
   - CSS variables + Tailwind theme extensions (`tailwind.config.ts` / `globals.css`) for color, type scale, spacing, radii, shadows;
   - typed React components under `components/ui/` following the exported component specs.
   Raw exported markup is reference material — rebuild it as idiomatic, accessible, server-renderable components.
4. **Record the mapping here**: update the table above with the replacement export version/date and the production adapter paths.

## Retired interim tokens

The neutral placeholder described below is no longer active because the temporary Allushi export has landed. Keep this history for migration context.

- Type: system font stack or Inter; one display serif optional. Legacy fonts (Oswald display / Lato body) may be kept during parity work.
- Layout: max-width `72rem` container, generous whitespace, 8-pt spacing scale.
- Color: light mode default. Legacy dark palette available as reference: bg `#07111A`, accent `#F94D1E`, green `#15B572`, caption `#A6B1BB`.
- Breakpoints: Tailwind defaults (`sm 640 / md 768 / lg 1024 / xl 1280`) — do not port the Flutter 800/1200 custom breakpoints.

## Non-negotiables regardless of design system

- WCAG 2.1 AA contrast; visible focus states; reduced-motion support for any animation.
- Server-rendered markup — no design pattern may require client-only rendering for primary content.
- Real text as HTML text (never text baked into images) — SEO requirement.
- Responsive from 360px up; touch targets ≥ 44px.
