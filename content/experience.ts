import type {
  EducationItem,
  ExperienceItem,
  LeadershipItem,
  Project,
  SkillGroup,
} from './types'

/** Transcribed from the résumé. Bullets are lightly tightened, never embellished. */
export const experience: ExperienceItem[] = [
  {
    role: 'Product Designer',
    org: 'Zomato',
    location: 'India',
    period: 'Oct 2025 — Current',
    bullets: [
      'Built a Figma plugin from scratch, end-to-end, that auto-detects and maps design elements to system tokens (colour, typography, spacing) — enabling faster design standardisation and reducing manual tokenisation effort across teams.',
      'Designed and contributed to AI-powered internal tools that translate design concepts into structured, production-ready outputs, improving design-to-development workflows and enabling faster experimentation.',
      'Led design for Apple Pay integration across platforms (mobile app and Apple Watch), collaborating with cross-functional teams and external stakeholders to ensure seamless payment experiences at scale.',
      'Drove data privacy and compliance design initiatives aligned with upcoming regulatory requirements, redesigning key user flows (login, profile settings) to improve transparency, consent and user control over data.',
      'Contributed to conversational AI experiences on the Zomato app, working on chatbot interaction design and improving user journeys through AI-assisted support.',
      'Partnered closely with product, engineering and AI teams to identify workflow inefficiencies and design solutions that improve system-level efficiency and user experience.',
    ],
  },
  {
    role: 'Product Designer',
    org: 'E2E Networks',
    location: 'India',
    period: 'Jan 2025 — Oct 2025',
    bullets: [
      'Led the design and product strategy for Sovereign Cloud Portal, a cloud-native management portal built for internal use and enterprise clients like L&T, enabling end-to-end control over customer data, SKU management, billing and infrastructure.',
      'Collaborated across engineering, design and leadership to define the platform architecture, user workflows and scalable features — positioning it as a market-ready PaaS product.',
      'Integrated AI tools into design workflows, accelerating wireframing and prototyping by ~70% and front-end development readiness by ~80%. Practised prompt engineering to improve efficiency.',
      'Owned the end-to-end design lifecycle: user flows, system architecture, stakeholder demos and iterative delivery.',
    ],
  },
  {
    role: 'Early Experience',
    org: 'Product, UX & Growth',
    period: '2022 — 2024',
    bullets: [
      'Improved lead generation by 15% by redesigning a B2B website and optimising user flows (Oak Shipping).',
      'Contributed to product research, positioning and prototyping for early-stage startups across logistics and consumer platforms (WedAbout, Transworld).',
      'Executed design and brand systems across digital and offline channels, including 25+ shipped assets, book covers and B2B initiatives (Simon & Schuster, Bloomsbury).',
    ],
  },
]

export const education: EducationItem[] = [
  {
    institution: 'Indian Institute of Management, Indore & Indian Institute of Technology, Indore',
    qualification: 'Joint Degree — M.S. in Management & Data Science',
    location: 'Indore, Madhya Pradesh',
    period: '2025 — 2027',
  },
  {
    institution: 'Delhi Technological University',
    qualification: 'B.S. Design, Human Computer Interaction',
    location: 'Delhi, India',
    period: '2021 — 2025',
    detail: 'CGPA 9.10',
  },
  {
    institution: 'Modern School Barakhamba',
    qualification: 'CBSE Class XII — 95.6%',
    location: 'Delhi, India',
    period: '2021',
    detail: 'Core member of the Art Club, ModMUN, Interact Club and MSOSA',
  },
  {
    institution: 'Delhi Public School, Indirapuram',
    qualification: 'CBSE Class X — 97.6%',
    location: 'Delhi, India',
    period: '2019',
    detail: 'Cultural Head, Student Council',
  },
]

export const leadership: LeadershipItem[] = [
  {
    role: 'Co-founder',
    org: 'Privia AI',
    period: '2024 — Current',
    detail:
      'Building Privia AI, focused on technologies that ensure ethical, trustworthy and privacy-conscious AI adoption. Overseeing early-stage product development and brand positioning to lay the foundation for scalable, responsible AI.',
  },
  {
    role: 'Executive Secretary & Head of Marketing',
    org: 'TEDxDTU',
    period: '2023 — 2024',
    detail:
      "Executed one of Delhi's biggest TEDx conferences — 4 lakh website hits, 7 lakh social reach and over 1,500 registered attendees.",
  },
  {
    role: 'Project Head — Swajal',
    org: 'Enactus DTU',
    period: '2023 — 2024',
    detail:
      'Led a team of 70+ to devise a low-cost clean drinking water solution for slum dwellers, while creating job avenues for the underprivileged by imparting entrepreneurial skills.',
  },
]

/** Links recovered from the résumé PDF's link annotations. */
export const leadershipLinks: Record<string, string> = {
  'Privia AI': 'https://www.linkedin.com/company/privia-ai/',
  'Project Head — Swajal':
    'https://drive.google.com/file/d/16wnpLNzEiu9BvAvzXx1W7fhR3tZ3WSaD/view',
}

export const accolades: string[] = [
  'Perfect 10.0 SGPA in Semester VI — the highest in the cohort.',
  'Google UX Design Professional Certificate — 7-course series.',
  'Brand Management: Aligning Business, Brand and Behaviour — 7-course series.',
  'Winning Team, Enactus India Nationals 2021, for an early-stage project.',
  'Promising Sustainability Award, Enactus India Nationals 2022.',
  'Organizing Coordinator, International Conference of Business Model Innovation.',
  'Proficiency up to B1 level in German.',
  'Awarded the Blue Blazer from DPS Indirapuram for six consecutive years as a Scholar.',
]

export const skills: SkillGroup[] = [
  {
    label: 'Design & Research',
    items: [
      'UX Research',
      'Interaction Design',
      'Visual Design',
      'Design Systems',
      'Storytelling',
      'Usability Testing',
      'Motion Design',
    ],
  },
  {
    label: 'AI & No-Code',
    items: [
      'Prompt Engineering',
      'Figma Make',
      'Bolt',
      'Make',
      'Zapier',
      'Gemini',
      'Lovable',
      'Veo',
      'Flow',
      'NanoBanana',
      'Opal',
      'Cursor',
      'Stitch',
      'Notion AI',
      'Claude',
      'Codex',
    ],
  },
  {
    label: 'Software & Collaboration',
    items: [
      'Figma',
      'Adobe CC',
      'Notion',
      'Slack',
      'Jira',
      'Sketch',
      'InVision',
      'Google Analytics',
    ],
  },
]

/** Work shown on /more rather than the homepage. */
export const secondaryProjects: Pick<
  Project,
  'slug' | 'title' | 'meta' | 'description' | 'accent' | 'href' | 'linkLabel'
>[] = [
  {
    slug: 'agentflow',
    title: 'AgentFlow',
    meta: 'Product Concept & System Design · May 2025',
    description:
      'A marketplace platform for deploying AI agents and multi-agent systems, aimed at non-technical users automating repetitive work. Designed around no-code onboarding, role-based agents and GPT-powered flows to get an MVP moving quickly.',
    accent: 'steel',
  },
  {
    slug: 'privia-ai',
    title: 'Privia AI',
    meta: 'Co-founder · 2024 to Current',
    description:
      'Building technologies for ethical, trustworthy and privacy-conscious AI adoption — overseeing early-stage product development and brand positioning to lay the foundation for scalable, responsible AI.',
    accent: 'orchid',
    href: 'https://www.linkedin.com/company/privia-ai/',
    linkLabel: 'See Privia AI',
  },
  {
    slug: 'swajal',
    title: 'Swajal',
    meta: 'Project Head, Enactus DTU · 2023 to 2024',
    description:
      'A low-cost clean drinking water solution for slum dwellers, built with a team of 70+, designed to create job avenues for the underprivileged by imparting entrepreneurial skills alongside the product itself.',
    accent: 'rose',
    href: 'https://drive.google.com/file/d/16wnpLNzEiu9BvAvzXx1W7fhR3tZ3WSaD/view',
    linkLabel: 'See the project',
  },
]
