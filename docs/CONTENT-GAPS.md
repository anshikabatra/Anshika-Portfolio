# CONTENT GAPS

Everything on the site is grounded in the résumé PDF. This lists what is
missing, approximated, or worth replacing before you ship publicly.

## 1. Real project imagery — the biggest gap

The résumé has no screenshots, and the Figma Make link could not be read
(see §4). So each project's device mockup contains a **hand-built illustrative
UI**, composed only from features the résumé actually names:

| Project | Mock file | Built from |
|---|---|---|
| Zomato | `components/mocks/TokenMapper.tsx` | "auto-detects and maps design elements to system tokens (colour, typography, spacing)" |
| Sovereign Cloud Portal | `components/mocks/CloudPortal.tsx` | "customer data, SKU management, billing and infrastructure", "clients like L&T" |
| AI Product Copilot | `components/mocks/ProductCopilot.tsx` | "structured PRDs, execution plans, market insights", "case studies, competitor references" |
| Pages | `components/mocks/PagesApp.tsx` | "scrapbook-style albums with photos, doodles, stickers and voice notes" |

These are **not** lorem placeholders and they are not fabricated claims — but
they are also not the real product. **TODO: replace each with a real screenshot
or an approved export.** Drop images into `public/` and swap the `visual` field
in `content/projects.ts` for an `<Image>`.

The tenant names in the Cloud Portal mock (Northgate Rail, Meridian Bank, Corex
Systems) and its figures are **illustrative sample rows**, not real customers.
Only L&T is named in the résumé. Replace or blur before publishing if the mock
stays.

## 2. Missing content

- **TODO: case-study write-ups.** Projects 01 (Zomato) and 03 (AI Product
  Copilot) have no destination link, so they render without a CTA rather than
  with a dead one. Add `href` + `linkLabel` in `content/projects.ts` when
  write-ups exist.
- **TODO: an OG share image.** `opengraph-image.png` (1200×630) in `app/` is
  picked up automatically. Without it, link previews show text only.
- **TODO: a downloadable résumé PDF.** The `/resume` route renders the content
  as HTML; there is no "download PDF" affordance. Add the file to `public/` and
  link it if you want one.
- **TODO: confirm the real domain.** `https://anshikabatra.com` is assumed in
  `app/layout.tsx`, `app/sitemap.ts` and `app/robots.ts`. Change all three if
  it differs.
- **No X/Twitter account** was in the résumé, so the footer links LinkedIn,
  email and phone. The reference site's third icon is X — add it if you have one.

## 3. Judgement calls worth reviewing

- **The hero statement is written, not quoted.** The résumé's INTRODUCTION is a
  dense paragraph; display type needs short lines. It re-voices the same two
  claims (turning ambiguity into shippable structure; internal tools, platform
  products and AI-powered workflows) and adds nothing. Reword freely in
  `content/profile.ts` — it is the one piece of prose that is mine, not yours.
- **Your phone number is on the public page** (footer icon and `/resume`). It is
  on the résumé, so it is included — remove it from `content/profile.ts` if you
  would rather it were not indexed.
- **Four featured projects, not three.** The reference shows three; your résumé
  supports four strong ones. AgentFlow, Privia AI and Swajal are on `/more`.

## 4. The Figma Make file could not be read

`https://www.figma.com/make/XOUDMs7TJiIpnXpLWdg6aH/Portfolio?p=f`

Two blockers, either of which is enough on its own:

1. **No `node-id`.** `get_design_context` needs a node-specific URL — in Figma,
   select the frame and use *Copy link to selection*.
2. **Not authenticated.** Only `mcp__figma__authenticate` was exposed in this
   session, meaning the Figma MCP is connected but not signed in. No read tool
   was callable.

This did not block the build, because you specified the résumé as the sole
source of truth for content. If the Figma file has branding (logo, colour
preferences, imagery) you want reflected, authenticate and send a node link and
it can be folded in.
