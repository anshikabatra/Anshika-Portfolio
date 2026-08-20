# PROGRESS

## Approach

Reference recon was done against the **live DOM** — `getComputedStyle`, the
CSSOM keyframe rules, and measured bounding boxes — rather than by eye. Numbers
in `DESIGN-SPEC.md` are therefore exact, and the rebuild matches the reference's
hero metrics precisely (60px / 57px leading / 1.2px tracking / 896px measure,
identical at the same viewport).

The reference turned out to be Next.js + Tailwind using **Bebas Neue + Crimson
Text**, both free Google Fonts — so no typeface substitution was needed.

## Deliberate deviations from diyasabh.com

| # | Change | Why |
|---|---|---|
| 1 | Muted text darkened `#716883` → `#615870` | The reference's own muted grey measures **4.18:1** on its background — below the 4.5:1 AA floor for body text. Every accent was likewise re-derived so all seven text tokens clear AA (measured, in `styleguide`). |
| 2 | Per-project accents re-toned | Reference's orchid `#B353CD` is 3.33:1. Ours are 4.98–5.95:1. |
| 3 | Hero entrance is CSS, not JS | See "Bugs found" #1 — a JS-driven reveal ships `opacity:0` in the server HTML. |
| 4 | `prefers-reduced-motion` path added | The reference does not appear to implement one. All transforms collapse to a 150ms fade; ambient loops stop; Lenis is not initialised at all, since hijacking scroll is itself motion. |
| 5 | Designed focus ring | 2px solid, 3px offset, visible on every surface. |
| 6 | Grain overlay | An SVG turbulence layer at 3.5% opacity, to stop the wide flat gradients banding on 8-bit displays. A few hundred bytes, no PNG. |
| 7 | Four projects, not three | The source content supports it. |
| 8 | Third social icon is phone, not X | No X account in the résumé. |

## Bugs found and fixed during the build

1. **Whole page invisible without JavaScript.** Framer Motion serialises its
   `hidden` variant into the SSR HTML as inline `opacity:0`. With scripting
   unavailable, nothing below the fold would ever be revealed — and the LCP
   element started hidden either way. Fixed by moving the hero to a pure-CSS
   keyframe (which is also what the reference does) and adding a `<noscript>`
   stylesheet rule that outranks the inline style for every `[data-reveal]`.

2. **Every alpha colour utility silently compiled to nothing.** Tailwind v3
   cannot apply an opacity modifier to a colour declared as a plain
   `var(--hex)`; it needs bare channels plus the `<alpha-value>` placeholder.
   `bg-plum-900/25`, `bg-plum-900/15`, `border-plum-900/10` and friends were all
   emitting no rule — which erased every bullet marker, hairline rule and card
   border. Tokens now carry both a `--x-ch` channel triplet (for Tailwind) and a
   ready-made `--x` (for hand-written CSS).

3. **Type tokens collided with a browser extension.** An extension on the dev
   machine injects its own `.text-display-sm { font-family: … }` rule, which won
   the cascade and silently reset the hero to 28px Crimson. Utility class names
   share a global namespace with every extension stylesheet, so the scale was
   renamed to non-generic keys (`hero`, `lede`, `copy`, `fine`, `projtitle`).

4. **Wordmark wrapped to two lines at 390px**, overflowing the 76px header.
   Fixed with `whitespace-nowrap` and a smaller mobile step for both the
   wordmark and the nav.

5. **Four invalid opacity steps** (`/4`, `/8`, `/12`) that Tailwind's default
   scale never generates, so those surfaces rendered transparent.

## Verified

- `next build` clean; all 9 routes prerender static; `tsc --noEmit` clean.
- Lighthouse (production, headless): **Performance 97, Accessibility 100,
  Best Practices 100, SEO 92**, **CLS 0**, FCP 0.8s, LCP 2.4s.
  - SEO 92 is a single audit: the nav item "MORE" is on Lighthouse's
    generic-link-text list. Left as-is deliberately — it is the reference's own
    nav label, and matching the reference was the priority.
  - LCP 2.4s is the hero entrance; the animation is the design.
- Accessibility audit: one `h1`, no skipped heading levels, all landmarks
  present, every control has an accessible name, no image without `alt`.
- No horizontal scroll at 360 / 390 / 768 / 1024 / 1440 on any route.

## Not verified

Animation timing could not be watched frame-by-frame: the automation tab runs
occluded, so Chrome throttles rAF and pauses CSS animations, and layout reads
intermittently return stale values. Static layout was verified by settling
animations before capture. **Open the site in a real foreground tab to judge
the motion.**
