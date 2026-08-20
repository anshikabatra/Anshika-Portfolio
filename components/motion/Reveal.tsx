'use client'

import { motion, type Variants } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

import { fadeUp, reducedVariants, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/useReducedMotion'

interface RevealProps {
  children: ReactNode
  /** Override the default fadeUp motion. */
  variants?: Variants
  className?: string
  as?: ElementType
  delay?: number
  /** Skip the in-view gate — used for above-the-fold content. */
  immediate?: boolean
}

/**
 * Scroll-triggered reveal. Fires once, never re-triggers, and collapses to a
 * plain opacity fade under `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  variants = fadeUp,
  className,
  as = 'div',
  delay = 0,
  immediate = false,
}: RevealProps) {
  const reduced = usePrefersReducedMotion()
  const Component = motion[as as keyof typeof motion] as typeof motion.div
  const active = reduced ? reducedVariants : variants

  return (
    <Component
      data-reveal
      className={className}
      variants={active}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: viewportOnce })}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Component>
  )
}
