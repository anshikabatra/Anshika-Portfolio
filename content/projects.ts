import type { Project } from './types'

/**
 * Featured work for the homepage. Descriptions are re-voiced from the résumé's
 * own bullets — no capability, client, metric or outcome here is invented.
 *
 * `href` is present only where the résumé carried a real link annotation.
 * Projects without one render no CTA rather than a dead link.
 */
export const projects: Project[] = [
  {
    slug: 'zomato-design-tooling',
    index: '01',
    title: 'Zomato',
    meta: 'Product Designer · Oct 2025 to Current',
    description:
      'I built a Figma plugin end-to-end that auto-detects design elements and maps them to system tokens — colour, typography, spacing — cutting the manual tokenisation effort that slows every team down. Alongside it I design AI-powered internal tools that turn design concepts into structured, production-ready output. I also led design for Apple Pay across the mobile app and Apple Watch, and drove the privacy and compliance work that reshaped login and profile settings around consent and user control.',
    accent: 'steel',
    visual: { kind: 'browser', url: 'zomato.design/token-mapper', mock: 'token-mapper' },
  },
  {
    slug: 'sovereign-cloud-portal',
    index: '02',
    title: 'Sovereign Cloud Portal',
    meta: 'Product Designer, E2E Networks · Jan 2025 to Oct 2025',
    description:
      'I led design and product strategy for a cloud-native management portal built for internal use and for enterprise clients including L&T. It gives operators end-to-end control over customer data, SKU management, billing and infrastructure. I worked across engineering, design and leadership to define the platform architecture and user workflows, and owned the full lifecycle — flows, system architecture, stakeholder demos, iterative delivery — positioning it as a market-ready PaaS product.',
    accent: 'orchid',
    visual: { kind: 'browser', url: 'e2enetworks.com/sovereign-cloud', mock: 'cloud-portal' },
    href: 'https://www.canva.com/design/DAGl4DY1whw/-xUOKKPVVaT1yQhoCr5EWQ/view',
    linkLabel: 'See the presentation',
  },
  {
    slug: 'ai-product-copilot',
    index: '03',
    title: 'AI Product Copilot',
    meta: 'Execution System · May 2025',
    description:
      'An AI-powered system that takes a raw product idea and returns something you can act on: a structured PRD, an execution plan, and market context. I designed the workflows for problem framing, feature prioritisation and next-step generation, then wired in context-aware output — case studies, competitor references, secondary research — so the answer arrives with its evidence attached.',
    accent: 'rose',
    visual: { kind: 'browser', url: 'copilot.local/brief', mock: 'product-copilot' },
  },
  {
    slug: 'pages',
    index: '04',
    title: 'Pages',
    meta: 'Concept App for Digital Memories · July 2025',
    description:
      'A friendship-first memory app, designed and prototyped in Figma Make. Scrapbook-style albums hold photos, doodles, stickers and voice notes — the texture of a shared history rather than a feed. I produced a narrative storytelling video for it using Pexels footage, Suno AI music and ElevenLabs narration, to carry the nostalgic, friendship-driven vision the product is built around.',
    accent: 'violet',
    visual: { kind: 'phone', mock: 'pages-app' },
    href: 'https://www.youtube.com/watch?v=Bc2JbOIa14w',
    linkLabel: 'Watch the film',
  },
]
