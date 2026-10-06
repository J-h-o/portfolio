# CONTENT.md — Content inventory

Authoritative map of what content exists, what is placeholder, and what the owner (John) must supply. Agents: **never invent biography, employers, projects, or testimonials** — use `TODO(owner)` markers.

> **Update July 2026:** Owner provided two CVs (LinkedIn export + bbv engineer profile). Full work history, skills (incl. applied AI), education, certifications, and languages are now extracted in **`docs/EXPERIENCE.md`** — that file is the source of truth for biography/experience content.

## Real content (extract and reuse)

| Item | Value | Source |
|---|---|---|
| Name / logo | "Joanis Allushi." (orange dot accent) | `header.dart` |
| Role | "Application and Website developer" | `carousel_items.dart` |
| Tagline | "Full-stack developer, based in Thessaloniki." | `carousel_items.dart` |
| Site title | "Joanis Allushi \| Developer Portfolio" | `main.dart` |
| Nav IA | Home, Experience, Services, Portfolio, Contact Me | `header.dart` |
| Section heading | "Better Design, Better Experiences" | `cv.dart` |
| Hero images | `assets/person.png`, `assets/person1.png` | `assets/` |
| Palette (dark ref) | bg `#07111A`, accent orange `#F94D1E`, green `#15B572`, caption `#A6B1BB` | `constants.dart` |
| Contact email | contact@joanisallushi.com (public) / johnallushi5@gmail.com (personal) | CVs / owner |
| Phone | +30 698 369 1323 (publish? → TODO(owner) in EXPERIENCE.md) | CVs |
| LinkedIn | linkedin.com/in/joanisallushi | CVs |
| GitHub | https://github.com/J-h-o | git remote |
| Work history, skills, education, certs | see `docs/EXPERIENCE.md` | CVs (July 2026) |

## Placeholder content (do NOT treat as real)

- `job_experience_items.dart`: 2 "experience" items that are copies of the hero text; `dates`, `employers`, `title` lists are empty; descriptions/images empty.
- Hero carousel: 5 identical generated slides.
- `web/index.html`: meta description "A new Flutter project.", title "portfolio".
- CV link: Firebase Storage URL to a 2022 "Junior Developer" resume — stale (2026); do not carry forward.

## TODO(owner) — needed from John before/during Phase 2–3

1. ~~Work history~~ ✅ Resolved — `docs/EXPERIENCE.md`. Remaining gaps flagged there: xtendx/Simplex 2.0 public-safe description, AI-work disclosure scope, **FODSA project details (all of it — employer context, dates, role, NDA check)**.
2. **Projects:** case-study candidates ranked in `docs/EXPERIENCE.md`; owner picks 3–6 and supplies screenshots/links where they exist.
3. **Updated CV PDF** for the site's download button (the bbv profile is employer-branded — likely needs a personal-branded version).
4. **Agency details:** partially resolved by the supplied Allushi design export: brand name, voice, four capability areas, and process are implemented. `TODO(owner)`: confirm final target-client definition and pricing signals/commercial-model language before launch.
5. **Testimonials / client logos** (with permission — ArtVolt, Woli are candidates).
6. **Booking:** `/book` embeds the self-hosted booking page (15-min intro call, Mon–Fri 16:00–21:00 Athens). Rules and calendars are configured in `allushi-infra` (`stack/booking.py`).
7. **Bio & photos:** confirm short/long bio adapted from EXPERIENCE.md summary; professional photo (bbv profile has one — need the original file + usage OK).
8. **Domain:** likely **joanisallushi.com** (contact@ email exists on it) — confirm it's owned and will host the site.
9. ~~**Languages**~~ ✅ Resolved — English and Greek are implemented as complete, server-rendered locale trees (`/en`, `/el`) with semantic Greek translations and `hreflang` alternates. See `docs/I18N.md`.
10. **Socials:** LinkedIn confirmed (linkedin.com/in/joanisallushi); any others (X, etc.) for footer + JSON-LD `sameAs`?
