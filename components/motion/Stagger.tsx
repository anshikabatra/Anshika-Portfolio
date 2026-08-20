'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

import { STAGGER_STEP, staggerChildren, viewportOnce } from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/useReducedMotion'

interface StaggerProps {
  children: ReactNode
  className?: string
  step?: number
  delay?: number
  immediate?: boolean
}

/**
 * Orchestrator for a run of `Reveal` children. Children animate in sequence
 * rather than all at once — 60ms apart by default, per the spec.
 */
export function Stagger({
  children,
  className,
  step = STAGGER_STEP,
  delay = 0,
  immediate = false,
}: StaggerProps) {
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      data-reveal
      className={className}
      variants={staggerChildren(reduced ? 0 : step, reduced ? 0 : delay)}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: viewportOnce })}
    >
      {children}
    </motion.div>
  )
}
