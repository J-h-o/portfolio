# CLAUDE.md

**Start by reading `AGENTS.md`** — it is the canonical agent guide for this repo. This file only adds Claude-specific notes; if it ever conflicts with `AGENTS.md`, `AGENTS.md` wins.

## Project in one line

Unfinished 2022 Flutter Web portfolio being rebuilt in this repo as a Next.js (SSR) portfolio + Cal.com booking + software agency site, styled via Anthropic's Claude Design. Roadmap: `docs/MIGRATION.md`.

## Claude-specific guidance

- **Plan mode first** for any migration-phase work — each phase in `docs/MIGRATION.md` is a meaningful chunk; confirm scope before scaffolding or deleting.
- **Claude Design integration:** the visual system will be generated with Claude Design (Anthropic's design tool). When given Claude Design output (exported layouts/components/tokens), translate it into Tailwind config + CSS variables per `docs/DESIGN.md` rather than copying raw markup verbatim.
- **Never fabricate biography or work history.** Real vs. placeholder content is mapped in `docs/CONTENT.md`. Use `TODO(owner)` markers for anything John must provide.
- The legacy Flutter app targets Dart <3.0 and won't build on modern toolchains — treat `lib/` (later `legacy/`) as read-only reference, don't debug its build.
- After completing a migration phase, update the phase checklist in `docs/MIGRATION.md` in the same change.

## Quick commands

New app (post-scaffold): `npm run dev` / `npm run build` / `npm run lint`.
`npm run build` must pass before considering any task done.
