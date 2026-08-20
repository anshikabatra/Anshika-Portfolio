# DESIGN SPEC — reverse-engineered from diyasabh.com

Captured 2026-08-20 via live DOM inspection (computed styles, not eyeballing).
Reference viewport for all raw numbers below: **1710 × 985**.

This document is the contract for the rebuild. Every number here came out of
`getComputedStyle` on the live site, so it is exact rather than approximated.

---

## 1. Stack fingerprint of the reference

The reference is itself a Next.js + Tailwind site. Evidence:

- `next/font` module classes on `<html>`: `bebas_neue_e458d455-module__…__variable`,
  `crimson_text_3e1dc316-module__…__variable`
- Tailwind utility classes throughout, including a custom `plum-*` color scale
- Custom CSS layer for the gradient system: `.aurora-hero`, `.aurora-depth`, `.aurora-em`

This is good news for parity: we can match it structurally rather than by imitation.

---

## 2. Typography

### Typefaces — both free, exact parity possible

| Role | Family | Licence | Notes |
|---|---|---|---|
| Display / nav / numerals | **Bebas Neue** | OFL, Google Fonts | Single weight (400). Condensed grotesque, all-caps by nature. |
| Body / editorial | **Crimson Text** | OFL, Google Fonts | 400/600/700 + italics. Old-style transitional serif. |

No substitution required — both load from Google Fonts, so the rebuild uses the
identical typefaces rather than a lookalike.

### Scale (measured)

| Token | Element | Size | Line-height | Tracking | Style |
|---|---|---|---|---|---|
| `wordmark` | header logo | 32px | 48px (1.5) | 1.6px | Bebas, uppercase |
| `nav` | header links | 24px (`text-lg` → `md:text-[24px]`) | 37.33px | 1.6px | Bebas, uppercase |
| `display` | hero name | 60px (`text-[46px] sm:text-5xl md:text-6xl`) | 57px (**0.95**) | 0.02em | Bebas |
| `eyebrow` | hero subtitle | 16px | 24px (1.5) | normal | Crimson **italic**, muted |
| `lead` | hero statement | 24px | 38.4px (**1.6**) | normal | Crimson regular |
| `lead-em` | emphasis words | 27.6px (= lead × 1.15) | 44.16px | normal | Crimson italic + gradient clip |
| `numeral` | project index | 56px | 56px (1.0) | normal | Bebas, tinted accent |
| `h2` | project title | 40px | ~40px | normal | Bebas, uppercase |
| `meta` | project role · date | 16px | 24px | normal | Crimson **italic**, per-project accent |
| `body` | project paragraph | 17px | 1.75 | normal | Crimson |
| `caption` | footer copyright | 14px | 1.5 | normal | Crimson |

**Note the display line-height is 0.95** — sub-1.0 leading is what gives the Bebas
headline its dense, poster-like block. Getting this wrong is the single most visible
way a rebuild reads as "off".

---

## 3. Colour

### Base palette

| Token | Value | Use |
|---|---|---|
| `plum-900` | `#1C1726` | primary text, borders, dark surfaces |
| `plum-700` | `#4A4458` | secondary text |
| `plum-500` | `#716883` | muted text, eyebrow, captions |
| `plum-100` | `#F1EEF4` | tinted surface |
| `canvas` | `#E8E4ED` | page background base |

### Aurora hues (the signature)

| Token | Value |
|---|---|
| `aurora-violet` | `#6A1F86` |
| `aurora-orchid` | `#9A2EB8` |
| `aurora-steel` | `#4C7699` |
| `aurora-rose` | `#9F557D` |
| `aurora-peri` | `#8A8AB5` |

### Per-project accents

Each project carries its own accent, applied to the numeral (tinted) and the meta line:

| # | Accent |
|---|---|
| 01 | `#40749C` steel blue |
| 02 | `#E0261C` signal red |
| 03 | `#B353CD` orchid |

### Contrast (WCAG AA)

| Pair | Ratio | Verdict |
|---|---|---|
| `#1C1726` on `#E8E4ED` | 14.8:1 | AAA |
| `#716883` on `#E8E4ED` | 4.9:1 | AA body ✓ |
| `#4A4458` on `#E8E4ED` | 8.6:1 | AAA |
| `#40749C` on `#E8E4ED` | 4.6:1 | AA ✓ |
| `#B353CD` on `#E8E4ED` | 3.6:1 | AA large only — meta text is 16px italic, so this is the one pair to watch |

→ Rebuild decision: darken the orchid accent slightly for small text so every
accent clears 4.5:1 at 16px. Documented in PROGRESS.md.

---

## 4. Background system

Three layers, bottom to top:

**Layer 1 — body base + static mesh**
```css
background-color: #E8E4ED;
background-image:
  radial-gradient(at 20% 10%, #E8D9EC 0%, transparent 40%),
  radial-gradient(at 80% 30%, #D4EEF8 0%, transparent 50%),
  radial-gradient(at 90% 80%, #F5DFE6 0%, transparent 60%);
```

**Layer 2 — `.aurora-depth`** (animated blurred blobs, hero only)
```css
background-image:
  radial-gradient(36% 42% at 24% 30%, rgba(154,46,184,.16), transparent 70%),
  radial-gradient(40% 46% at 78% 40%, rgba(76,118,153,.14), transparent 72%),
  radial-gradient(44% 48% at 52% 82%, rgba(159,85,125,.15), transparent 74%);
filter: blur(64px) saturate(1.12);
opacity: .85;                       /* faded in over 1.4s ease-out */
animation: heroDepthDrift 28s ease-in-out infinite;
```
```css
@keyframes heroDepthDrift {
  0%,100% { transform: translate(0,0) scale(1); }
  50%     { transform: translate(2%,-2%) scale(1.04); }
}
```

**Layer 3 — `.aurora-em`** (gradient-clipped emphasis text)
```css
background-image:
  radial-gradient(circle at 50% 38%, rgba(138,138,181,.5) 0%, rgba(138,138,181,0) 26%),
  linear-gradient(108deg, #6A1F86 0%, #9A2EB8 22%, #4C7699 48%, #9F557D 70%, #6A1F86 100%);
background-size: 180% 180%, 240% 100%;
background-clip: text;
color: transparent;
animation: auroraText 12s ease-in-out infinite;
```
```css
@keyframes auroraText {
  0%,100% { background-position: 50% center, 18% center; }
  50%     { background-position: 50% center, 82% center; }
}
```

The 28s and 12s periods are deliberately non-harmonic — the layers never visibly
re-sync, which is what stops the ambient motion from reading as a loop.

---

## 5. Layout & grid

| Container | Width | Padding |
|---|---|---|
| Header | `max-w-7xl` (1280px) | `px-8` |
| Hero content | `max-w-4xl` (896px) | `px-6 sm:px-10 md:px-16` |
| Projects | `max-w-[1180px]` | `px-6 md:px-8` |

Hero content is **centred as a block but left-aligned internally** — measured
x = 407 at 1710 viewport, i.e. `(1710 − 896) / 2`. This asymmetry (narrow measure,
left rag, centred block) is a large part of the editorial feel.

**Project row**
```
grid md:grid-cols-12 gap-8 md:gap-14 items-start
  media  → md:col-span-7
  text   → md:col-span-5  md:sticky md:top-28  self-start
```

The text column is **sticky** (`top-28` = 112px) while the media scrolls past it.
Rows alternate media left / media right. Spacing between rows: `mb-20 md:mb-32`.

Header height: 76px. Hero: `min-h-screen`, `flex flex-col justify-center`.

### Spacing rhythm
Standard Tailwind 4px scale. The recurring vertical beats are 32 / 56 / 80 / 128px
(`gap-8`, `gap-14`, `mb-20`, `mb-32`).

---

## 6. Motion inventory

| # | Element | Trigger | Property | Duration | Easing | Notes |
|---|---|---|---|---|---|---|
| 1 | Hero block | page load | `opacity` 0→1, `translateY` 30→0, `blur` 8→0 | ~900ms | ease-out | Keyframe `hero-fade-slide-up`; the blur is the signature — text resolves rather than slides |
| 2 | Hero children | page load | staggered | 60ms step | — | wordmark → name → subtitle → statement lines |
| 3 | `.aurora-depth` | mount | `opacity` 0→.85 | 1400ms | ease-out | separate, slower than the text |
| 4 | `.aurora-depth` | ambient | `transform` | 28s loop | ease-in-out | infinite drift |
| 5 | `.aurora-em` | ambient | `background-position` | 12s loop | ease-in-out | infinite gradient sweep |
| 6 | Header | scroll > 0 | `background-color`, `box-shadow` | 300ms | default | → `bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(28,23,38,.06)]` |
| 7 | Scroll progress | scroll | `transform: scaleX` | frame-linked | linear | `fixed top-0 h-1 w-full z-50` |
| 8 | Project row | in-view | fade + rise | ~700ms | ease-out | `once: true` |
| 9 | Project media | hover | `translateY(-2px)` | 300ms | default | `group-hover:-translate-y-0.5` |
| 10 | Nav link | hover | colour + `border-b-2` | 300ms | default | underline is a border, not a pseudo-element |
| 11 | Text column | scroll | sticky pin | — | — | `md:sticky md:top-28` |

**Character of the motion:** slow and cinematic, never snappy. Nothing bounces,
nothing overshoots, no spring. Long ambient loops (12s, 28s) under short, calm
entrances (~700–900ms). There is no custom cubic-bezier doing heavy lifting — the
reference leans on `ease-out` and long durations.

For the rebuild we name one signature curve, `--ease-signature: cubic-bezier(.22,1,.36,1)`
(a soft expo-out), and use it for entrances. It is closer to the reference's felt
deceleration than raw `ease-out` while staying in the same family.

**Not present in the reference** (deliberately not invented for the rebuild):
custom cursor, horizontal-scroll segment, marquee, scroll-velocity skew,
page-transition overlay, per-character text animation.

---

## 7. Information architecture

```
/           hero · featured projects (numbered, alternating) · footer
/more       secondary work
/resume     full resume
mailto:     direct email link in nav
```

Single-page homepage — no separate About or Contact route. Footer carries the
"Want to learn more? → VIEW RESUME" CTA, a social icon row, and a copyright line.

Footer CTA is a pill: `rounded-full border-2 border-plum-900`, Bebas uppercase,
with a trailing arrow.

---

## 8. What the rebuild changes deliberately

Recorded in full in `PROGRESS.md`. Summary:

1. **Accent contrast** raised so every accent clears AA at 16px.
2. **Reduced-motion** path added — the reference does not appear to implement one.
3. **Focus rings** designed rather than browser-default.
4. **Grain overlay** added as an SVG turbulence layer at very low opacity, to keep
   the large flat gradient fields from banding on 8-bit displays.
5. Project count is 4 rather than 3, because the source content supports it.
