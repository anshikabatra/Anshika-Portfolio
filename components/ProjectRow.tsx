'use client'

import { motion } from 'framer-motion'

import { BrowserFrame, PhoneFrame } from '@/components/DeviceFrame'
import { CloudPortal } from '@/components/mocks/CloudPortal'
import { PagesApp } from '@/components/mocks/PagesApp'
import { ProductCopilot } from '@/components/mocks/ProductCopilot'
import { TokenMapper } from '@/components/mocks/TokenMapper'
import type { MockKey, Project } from '@/content/types'
import { fadeUp, imageReveal, reducedVariants, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/useReducedMotion'
import { accentNumeral, accentText, cn } from '@/lib/utils'

const MOCKS: Record<MockKey, () => React.JSX.Element> = {
  'token-mapper': TokenMapper,
  'cloud-portal': CloudPortal,
  'product-copilot': ProductCopilot,
  'pages-app': PagesApp,
}

function Visual({ project }: { project: Project }) {
  const Mock = MOCKS[project.visual.mock]

  if (project.visual.kind === 'phone') {
    return (
      <PhoneFrame>
        <Mock />
      </PhoneFrame>
    )
  }

  return (
    <BrowserFrame url={project.visual.url}>
      <Mock />
    </BrowserFrame>
  )
}

export function ProjectRow({ project, flip }: { project: Project; flip: boolean }) {
  const reduced = usePrefersReducedMotion()
  const textVariants = reduced ? reducedVariants : fadeUp
  const mediaVariants = reduced ? reducedVariants : imageReveal

  const body = (
    <>
      <motion.div
        data-reveal
        variants={mediaVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={cn(
          'transition-transform duration-300 ease-signature group-hover:-translate-y-0.5 md:col-span-7',
          flip && 'md:order-2'
        )}
      >
        <Visual project={project} />
      </motion.div>

      <motion.div
        data-reveal
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className={cn(
          'self-start md:sticky md:top-28 md:col-span-5',
          flip && 'md:order-1'
        )}
      >
        <div
          aria-hidden
          className={cn('font-bebas text-numeral leading-none', accentNumeral[project.accent])}
        >
          {project.index}
        </div>

        <h3 className="mt-1 font-bebas text-projtitle uppercase text-plum-900">{project.title}</h3>

        <p className={cn('mt-2 font-serif italic', accentText[project.accent])}>
          {project.meta}
        </p>

        <p className="prose-hang mt-5 max-w-[46ch] font-serif text-copy text-plum-700">
          {project.description}
        </p>

        {project.href && (
          <span className="mt-5 inline-flex items-center gap-1.5 font-serif italic text-plum-900 link-underline">
            {project.linkLabel}
            <span
              aria-hidden
              className="transition-transform duration-fast ease-signature group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        )}
      </motion.div>
    </>
  )

  const grid = 'group grid items-start gap-8 md:grid-cols-12 md:gap-14'

  // Only the projects with a real destination become links. The rest stay as
  // plain articles rather than pretending to be clickable.
  return (
    <article className="mb-20 last:mb-0 md:mb-32">
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(grid, 'rounded-lg')}
          aria-label={`${project.title} — ${project.linkLabel}`}
        >
          {body}
        </a>
      ) : (
        <div className={grid}>{body}</div>
      )}
    </article>
  )
}
