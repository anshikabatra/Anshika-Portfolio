import type { Metadata } from 'next'

import { ProjectRow } from '@/components/ProjectRow'
import { profile } from '@/content/profile'
import type { Project } from '@/content/types'

export const metadata: Metadata = { title: 'Projects', description: `Selected product work by ${profile.name}.`, alternates: { canonical: '/projects' } }

type Copy = Pick<Project, 'title' | 'meta' | 'description' | 'accent'> & {
  /** Kept in the source list so it can be restored without rebuilding its card. */
  hidden?: boolean
}

const copy: Copy[] = [
  { title: 'vip mode', meta: 'Product Design & Growth · Zomato', description: 'Worked on repositioning and redesigning VIP Mode around a clearer value proposition: “Skip the queue with VIP Mode.”\n\nBeyond the UI, I studied product and business data to understand opportunities to increase adoption and revenue, then designed and ran multiple experiments across the homepage, bottom sheets, banners, cart, and contextual touchpoints such as rain-related experiences.\n\nWithin the period measured, OV (order value) increased by 44%, while net revenue per order increased by 50%.', accent: 'orchid' },
  { title: 'chatgpt & claude snippets', meta: 'Product Design · AI · Zomato', description: 'Worked on Zomato’s exploration of AI-native ordering through ChatGPT and Claude, designing UI experiences that appear when a user initiates a Zomato order through AI products.\n\nThis included MCP authentication UI and the supporting product experience needed to connect a conversational AI interaction with Zomato’s ordering ecosystem.\n\nThe project pushed beyond conventional app interfaces and explored what food discovery and commerce could look like when the entry point is no longer the Zomato app itself, but a conversational AI.', accent: 'rose' },
  { title: 'token mapper plugin', meta: 'Tool building  ·  Design Systems  ·  0 → 1  ·  Zomato', description: 'Identified a gap in Zomato’s design workflow around broken or inconsistent design-system tokens across large Figma files.\n\nI designed and built the entire plugin myself using Claude, enabling designers to scan a file, identify token mismatches, and reconnect broken tokens to the correct design-system tokens across the entire file in a single click. The tool was adopted by the team to streamline design-system maintenance and eliminate repetitive manual fixes, making it significantly easier to keep files consistent at scale.\n\nThe project was also an early exploration of AI-assisted design tooling, and notably, a similar capability was later introduced by Figma at Config 2026.', accent: 'steel' },
  { title: 'box of joy - cms & web', meta: 'Tool building  ·  0 → 1  ·  Zomato', description: 'Designed and built the Eternal Box of Joy website and CMS as a 0→1 web experience using Ether, Zomato’s in-house AI-powered development tool.\n\nI worked across both design and implementation, to give the People team direct control over the website, enabling them to independently publish new deals, update content, and make changes without relying on developers for every iteration.\n\nThis turned the website from a static one-off build into a self-serve platform that the team could continuously manage and evolve, significantly reducing the dependency on engineering for everyday content updates.', accent: 'violet' },
  { title: 'apple pay integration', meta: 'Payments  ·  Micro-interactions  ·  Zomato', description: 'Worked on bringing Apple Pay to Zomato’s payment ecosystem, designing the experience across the ordering and checkout journey. I worked through the different states, interactions, and edge cases involved in introducing a new payment method while keeping the experience familiar and frictionless for existing Zomato users. The project involved thinking through how a new payment behaviour could fit naturally into an established, high-frequency consumer product.', accent: 'orchid' },
  // Temporarily hidden; retain the content and media mapping for a later restore.
  { title: 'zomato bytes', meta: 'Product Design  ·  Content  ·  Growth  ·  Zomato', description: 'Worked on Bytes, Zomato’s short-form food video experience, designed around the intersection of content discovery and food ordering. The concept connected restaurant- and dish-focused reels with a direct CTA to order, creating a shorter path from “that looks good” to actually placing an order. I worked on the experience and interaction patterns that allowed food content to become an actionable part of the ordering journey rather than simply a passive discovery format.', accent: 'rose', hidden: true },
  { title: 'AI Chatbot', meta: 'Conversational AI  ·  Product Design  ·  Zomato', description: 'Worked on selected UI and interaction experiences for Zomato’s AI chatbot and voicebot, exploring how conversational interfaces could become a new layer of the food-ordering experience. The work involved thinking beyond traditional screens and navigation patterns toward interactions where users could communicate their intent more naturally. It was an exploration of how AI could help users discover food, make decisions, and interact with Zomato in more contextual ways.', accent: 'steel' },
  { title: 'zomato for Enterprise', meta: 'Website redesign  ·  Enterprise Flow  ·  Zomato', description: 'Worked on redesigning the Zomato for Enterprise onboarding experience, with a focus on making the platform more accessible to smaller businesses. I designed a DIY onboarding flow that allows companies to complete most of the registration and setup process themselves, reducing the need for manual intervention from the ZFE team.', accent: 'violet' },
  { title: 'data privacy flows', meta: 'DPDP Law ·  Settings Architecture  ·  Zomato', description: 'Worked on Zomato’s product experiences around India’s Digital Personal Data Protection (DPDP) requirements. The challenge was translating complex privacy and regulatory requirements into experiences that users could actually understand and navigate without creating unnecessary friction. I worked across privacy-related flows and interaction states, balancing clarity, compliance, and Zomato’s existing product language. The project gave me an opportunity to work on a less visible but highly consequential part of a consumer product—designing for trust, transparency, and user control.', accent: 'orchid' },
  { title: 'adaptive surveys', meta: 'Research  ·  Systems  ·  Zomato', description: 'Designed a templatised adaptive survey system that made Zomato’s consumer research more contextual. Instead of following a fixed sequence of questions, each response could determine the next relevant question or path. I designed the logic and templates so the Marketing and Research teams could build and iterate these branching surveys themselves, reducing dependency on developers and making survey creation faster, more flexible, and personalised.', accent: 'rose' },
  { title: 'sovereign cloud', meta: 'B2B PaaS · For Larsen & Toubro (L&T) · E2E Networks', description: 'I designed and shaped a Sovereign Cloud Portal for E2E Networks — a B2B platform that gives enterprise customers control over their cloud infrastructure, from resources and SKUs to billing and management.\n\nWorking across product strategy, system architecture, user flows and interface design, I took the product from complex infrastructure requirements to a scalable, market-ready experience.', accent: 'steel' },
  { title: 'privia ai', meta: 'AI Reliability  & Security·  LLM Evals  ·  Startup', description: 'I co-founded Privia AI, a trust layer for the AI era, exploring how to make AI more transparent, reliable, and privacy-conscious.\n\nI worked across product strategy, UX, design, and brand, building a suite of products spanning digital footprint monitoring, LLM evaluation, AI observability, and trust.\n\nOne product, Mon AI, explored how teams could evaluate model performance, detect drift, and better understand AI behaviour — making emerging AI systems more measurable, reliable, and trustworthy.', accent: 'violet' },
]

const projects: Project[] = copy.filter(({ hidden }) => !hidden).map(({ hidden: _hidden, ...item }, index) => {
  const slug = item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
  const linkLabel = slug === 'vip-mode' ? 'Read the case study' : index < 2 ? 'View Project' : index === 2 || (index >= 4 && index <= 9) ? 'View Demo' : 'Read the case study'
  const visual = slug === 'privia-ai'
    ? { kind: 'browser-video' as const, url: 'priviaai.com', href: 'https://priviaai.com/', src: '/privia.mov' }
    : slug === 'sovereign-cloud'
    ? { kind: 'browser-video' as const, url: 'e2e networks / sovereign cloud', href: 'https://jeep-oculus-99252673.figma.site/', src: '/e2e-networks.mov' }
    : slug === 'token-mapper-plugin'
    ? { kind: 'browser-video' as const, url: 'figma.com/community/plugins', src: '/token-mapper-plugin.mp4' }
    : slug === 'ai-chatbot'
    ? { kind: 'phone-video' as const, src: '/ai-chatbot.mov' }
    : slug === 'adaptive-surveys'
    ? { kind: 'phone-video-playlist' as const, sources: ['/adaptive-surveys-1.mov', '/adaptive-surveys-2.mov'] }
    : slug === 'vip-mode'
    ? { kind: 'phone-video-playlist' as const, sources: ['/vip-1.mov', '/vip-2.mov', '/vip-3.mov', '/vip-4.mov'] }
    : slug === 'apple-pay-integration'
    ? { kind: 'phone-video' as const, src: '/apple-pay.mov' }
    : slug === 'zomato-bytes'
    ? { kind: 'phone-video' as const, src: '/zomato-bytes.mov' }
    : slug === 'chatgpt-claude-snippets'
    ? { kind: 'browser-video' as const, url: 'claude.ai', src: '/claude.mov', aspectClassName: 'aspect-[2366/1840]' }
    : slug === 'zomato-for-enterprise'
    ? { kind: 'browser-video' as const, url: 'zomato.com/enterprise', src: '/zfe.mov', aspectClassName: 'aspect-[2940/1766]' }
    : slug === 'box-of-joy-cms-web'
    ? { kind: 'browser-video-playlist' as const, url: 'eternalboxofjoy.zomato.com', sources: ['/box-of-joy-2.mov', '/box-of-joy-1.mov'] }
    : slug === 'data-privacy-flows'
    ? { kind: 'phone-video' as const, src: '/data-privacy-flows.mov' }
    : index % 3 === 2 || index === 3 || index === 7 || index === 10
      ? { kind: 'browser' as const, url: 'portfolio.local', mock: 'product-copilot' as const }
      : { kind: 'phone' as const, mock: 'pages-app' as const }
  const href = slug === 'vip-mode'
    ? '/projects/vip-mode'
    : slug === 'privia-ai'
      ? 'https://canva.link/o51spuspx89ruvk'
      : `#${slug}`
  const resolvedLinkLabel = slug === 'privia-ai' ? 'Know more' : linkLabel
  return { ...item, slug, href, linkLabel: resolvedLinkLabel, index: String(index + 1).padStart(2, '0'), visual }
})

export default function ProjectsPage() {
  return <section aria-label="Projects" className="pt-36 md:pt-44"><h1 className="sr-only">Projects</h1><div className="mx-auto max-w-shell px-6 pb-24 md:px-8 md:pb-36">{projects.map((project, index) => <ProjectRow key={project.slug} project={project} flip={index % 2 === 1} />)}</div></section>
}
