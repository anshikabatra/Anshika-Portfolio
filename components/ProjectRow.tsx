'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

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

/** Plays related recordings as one continuous sequence. */
function VideoPlaylist({
  sources,
  label,
  className = 'size-full object-contain',
  clipDurationSeconds,
}: {
  sources: string[]
  label: string
  className?: string
  clipDurationSeconds?: number
}) {
  const [sourceIndex, setSourceIndex] = useState(0)
  const advance = () => setSourceIndex((index) => (index + 1) % sources.length)

  useEffect(() => {
    if (!clipDurationSeconds) return
    const timer = window.setTimeout(advance, clipDurationSeconds * 1000)
    return () => window.clearTimeout(timer)
  }, [clipDurationSeconds, sourceIndex])

  return (
    <video
      key={sources[sourceIndex]}
      className={className}
      src={sources[sourceIndex]}
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-label={label}
      onEnded={advance}
    />
  )
}

function Visual({ project }: { project: Project }) {
  if (project.visual.kind === 'image') {
    return (
      <div className="rounded-card shadow-media transition-shadow duration-300 ease-signature group-hover:shadow-media-hover">
        <img
          src={project.visual.src}
          alt={project.visual.alt}
          className={cn('w-full rounded-card object-contain', project.visual.aspectClassName)}
        />
      </div>
    )
  }

  if (project.visual.kind === 'phone') {
    const Mock = MOCKS[project.visual.mock]
    return (
      <PhoneFrame>
        <Mock />
      </PhoneFrame>
    )
  }

  if (project.visual.kind === 'browser-video') {
    return (
      <BrowserFrame
        url={project.visual.url}
        href={project.visual.href}
        aspectClassName={project.visual.aspectClassName ?? 'aspect-video'}
      >
        <video
          className="size-full object-cover"
          src={project.visual.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={`${project.title} product recording`}
        />
      </BrowserFrame>
    )
  }

  if (project.visual.kind === 'browser-video-playlist') {
    return (
      <BrowserFrame url={project.visual.url} aspectClassName="aspect-video">
        <VideoPlaylist
          sources={project.visual.sources}
          label={`${project.title} product recording`}
        />
      </BrowserFrame>
    )
  }

  if (project.visual.kind === 'phone-video') {
    return (
      <PhoneFrame>
        <video
          className="size-full object-cover"
          src={project.visual.src}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label={`${project.title} product recording`}
        />
      </PhoneFrame>
    )
  }

  if (project.visual.kind === 'phone-video-playlist') {
    return (
      <PhoneFrame>
        <VideoPlaylist
          sources={project.visual.sources}
          label={`${project.title} product recording`}
          className="size-full object-cover"
          clipDurationSeconds={project.visual.clipDurationSeconds}
        />
      </PhoneFrame>
    )
  }

  const Mock = MOCKS[project.visual.mock]

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
          'self-start transition-transform duration-300 ease-signature group-hover:-translate-y-0.5 md:sticky md:top-28 md:col-span-7',
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
          'self-start md:col-span-5',
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

        <p className="prose-hang mt-5 max-w-[46ch] whitespace-pre-line font-serif text-copy text-plum-700">
          {project.description.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
            part.startsWith('**') && part.endsWith('**') ? (
              <strong key={index}>{part.slice(2, -2)}</strong>
            ) : (
              part
            )
          )}
        </p>

        {project.href && (
          <a
            href={project.href}
            target={project.href.startsWith('http') ? '_blank' : undefined}
            rel={project.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="mt-5 inline-flex items-center gap-1.5 font-serif italic text-plum-900 link-underline"
          >
            {project.linkLabel}
            <span
              aria-hidden
              className="transition-transform duration-fast ease-signature group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        )}
      </motion.div>
    </>
  )

  const grid = 'group grid items-start gap-8 md:grid-cols-12 md:gap-14'

  return (
    <article id={project.slug} className="mb-20 scroll-mt-28 last:mb-0 md:mb-32">
      <div className={grid}>{body}</div>
    </article>
  )
}
