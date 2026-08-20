# Anshika Batra — Portfolio

Personal portfolio site. Next.js App Router, TypeScript, Tailwind, Framer Motion, Lenis.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build        # production build
npm start            # serve the build
npm run typecheck    # tsc --noEmit
```

## Routes

| Path | What |
|---|---|
| `/` | Hero + featured work |
| `/more` | Secondary work and recognition |
| `/resume` | Full résumé |
| `/styleguide` | Type scale, colour ramp, spacing, live motion primitives |

`/styleguide` is `noindex` — it is the review surface, not a public page.

## Editing content

All copy lives in typed files under `content/`, so nothing requires touching JSX:

- `content/profile.ts` — name, role, contact, hero statement
- `content/projects.ts` — the four featured projects
- `content/experience.ts` — experience, education, leadership, skills, accolades, secondary work
- `content/types.ts` — shared types

## Design tokens

Declared once in `styles/tokens.css` and surfaced to Tailwind in `tailwind.config.ts`.
Components never hardcode a hex, duration, or easing curve.

Colours are declared twice on purpose: `--x-ch` holds bare `R G B` channels
(Tailwind needs that form for opacity modifiers like `bg-plum-900/25`), and
`--x` is the ready-made colour for hand-written CSS.

## Docs

- `docs/DESIGN-SPEC.md` — the design system, measured from the reference
- `docs/PROGRESS.md` — deviations, bugs found, what was and wasn't verified
- `docs/CONTENT-GAPS.md` — **read this first**; what still needs real content

## Before publishing

The project mockups are illustrative UIs built from described features, not real
screenshots. See `docs/CONTENT-GAPS.md` for how to swap them and what else is
outstanding (OG image, domain, case-study links).
