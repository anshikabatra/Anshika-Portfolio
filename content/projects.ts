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
    title: 'zomat0',
    meta: 'Product Designer & Builder ·  October 2025 - Current',
    description:
      'At Zomato, I have worked across consumer experiences, growth, AI, payments, privacy, and internal design infrastructure — moving between 0→1 product work, rapid experimentation, and systems that make teams faster. From shipping Apple Pay across Zomato and Apple Watch, to designing AI-powered ordering experiences for ChatGPT and Claude, building internal design tooling, and shaping growth experiments used by millions of customers, my work sits at the intersection of product, systems, engineering, and business.',
    accent: 'steel',
    visual: {
      kind: 'phone-video-playlist',
      sources: [
        '/ai-chatbot.mov',
        '/apple-pay.mov',
        '/vip-1.mov',
        '/zomato-bytes.mov',
        '/adaptive-surveys-1.mov',
        '/data-privacy-flows.mov',
      ],
      clipDurationSeconds: 5,
    },
    href: '/projects',
    linkLabel: 'View Projects',
  },
  {
    slug: 'sovereign-cloud-portal',
    index: '02',
    title: 'E2E Networks (L&T)',
    meta: 'B2B PaaS · For Larsen & Toubro (L&T) · January 2025 - October 2025',
    description:
      'I designed and shaped a Sovereign Cloud Portal for E2E Networks — a B2B platform that gives enterprise customers control over their cloud infrastructure, from resources and SKUs to billing and management. Working across product strategy, system architecture, user flows and interface design, I took the product from complex infrastructure requirements to a scalable, market-ready experience.',
    accent: 'orchid',
    visual: { kind: 'browser-video', url: 'e2e networks / sovereign cloud', href: 'https://jeep-oculus-99252673.figma.site/', src: '/e2e-networks.mov' },
    href: 'https://www.canva.com/design/DAGl4DY1whw/-xUOKKPVVaT1yQhoCr5EWQ/view',
    linkLabel: 'Read the case study',
  },
  {
    slug: 'iit-indore-iim-indore',
    index: '03',
    title: 'IIT Indore × IIM Indore',
    meta: 'Master of science in data science & management',
    description:
      'I’m currently pursuing a Joint Master’s in Data Science & Management from IIT Indore × IIM Indore, an executive programme built for working professionals.\n\nIt’s been one of the most exciting parts of my journey so far — from learning data science and management alongside my design practice to spending time on campus at both IIT Indore and IIM Indore.\n\nDesign taught me to think about people.\nData taught me to think about systems.\nManagement taught me to think about the bigger picture.\n\nAnd somewhere in between, I became increasingly fascinated by the intersection of design, technology, and business.',
    accent: 'rose',
    visual: { kind: 'image', src: '/iit-iim-indore.jpg', alt: 'Anshika Batra at the Indian Institute of Management Indore campus' },
  },
  {
    slug: 'privia-ai',
    index: '04',
    title: 'privia ai',
    meta: 'AI Reliability & Security · LLM Evals · Startup',
    description:
      'I co-founded Privia AI, a trust layer for the AI era, exploring how to make AI more transparent, reliable, and privacy-conscious.\n\nI worked across product strategy, UX, design, and brand, building a suite of products spanning digital footprint monitoring, LLM evaluation, AI observability, and trust.\n\nOne product, Mon AI, explored how teams could evaluate model performance, detect drift, and better understand AI behaviour — making emerging AI systems more measurable, reliable, and trustworthy.',
    accent: 'violet',
    visual: { kind: 'browser-video', url: 'priviaai.com', href: 'https://priviaai.com/', src: '/privia.mov' },
    href: '/projects',
    linkLabel: 'Read more',
  },
  {
    slug: 'simon-schuster-bloomsbury',
    index: '05',
    title: 'Simon & Schuster × Bloomsbury',
    meta: '30+ covers · Stories told in a single frame',
    description:
      'I’ve always been the person who lingers in bookstores.\n\nSo when I started designing book covers, it felt strangely full-circle — taking stories I loved and giving them their first glimpse into the world.\n\nSince then, I’ve designed 30+ covers for Simon & Schuster and Bloomsbury, with one even finding its way onto the Book of the Month stand at Delhi Airport.\n\nNow, whenever I walk into a bookstore, I catch myself looking at the covers a little differently.\n\nSometimes, I’m looking for mine.',
    accent: 'steel',
    visual: { kind: 'image', src: '/simon-schuster-bloomsbury.jpg', alt: 'Anshika Batra with book covers designed for Simon & Schuster and Bloomsbury', aspectClassName: 'aspect-[4/3]' },
  },
]
