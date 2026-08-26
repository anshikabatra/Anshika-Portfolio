export type AccentKey = 'steel' | 'orchid' | 'rose' | 'violet'

export interface SocialLink {
  label: string
  href: string
  icon: 'linkedin' | 'email'
}

export interface Profile {
  name: string
  /** Short role line under the name in the hero. */
  role: string
  location: string
  availability: string
  email: string
  phone: string
  linkedin: string
  /**
   * Hero statement, split into paragraphs of lines. Each line is a list of
   * segments so individual phrases can carry the aurora gradient treatment.
   */
  statement: StatementLine[][]
  socials: SocialLink[]
}

export interface StatementSegment {
  text: string
  emphasis?: boolean
}

export type StatementLine = StatementSegment[]

/** The visual that sits in a project's media column. */
export type ProjectVisual =
  | { kind: 'browser'; url: string; mock: MockKey }
  | { kind: 'browser-video'; url: string; href?: string; src: string; aspectClassName?: string }
  | { kind: 'browser-video-playlist'; url: string; sources: string[] }
  | { kind: 'image'; src: string; alt: string; aspectClassName?: string }
  | { kind: 'phone'; mock: MockKey }
  | { kind: 'phone-video'; src: string }
  | { kind: 'phone-video-playlist'; sources: string[]; clipDurationSeconds?: number }

export type MockKey =
  | 'token-mapper'
  | 'cloud-portal'
  | 'product-copilot'
  | 'pages-app'

export interface Project {
  slug: string
  index: string
  title: string
  /** Role · timeframe, rendered as the italic meta line. */
  meta: string
  description: string
  accent: AccentKey
  visual: ProjectVisual
  /** Omitted where no public write-up exists — the link is then not rendered. */
  href?: string
  linkLabel?: string
}

export interface ExperienceItem {
  role: string
  org: string
  location?: string
  period: string
  bullets: string[]
}

export interface EducationItem {
  institution: string
  qualification: string
  location: string
  period: string
  detail?: string
}

export interface LeadershipItem {
  role: string
  org: string
  period: string
  detail: string
}

export interface SkillGroup {
  label: string
  items: string[]
}
