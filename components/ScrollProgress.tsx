'use client'

import { motion, useScroll, useSpring } from 'framer-motion'

import { usePrefersReducedMotion } from '@/lib/useReducedMotion'

/**
 * Reading-progress bar pinned to the top edge.
 *
 * Uses scaleX on a full-width element so the browser only ever compositor-
 * transforms — no layout, no paint, no CLS.
 */
export function ScrollProgress() {
  const reduced = usePrefersReducedMotion()
  const { scrollYProgress } = useScroll()

  // A light spring removes the jitter of raw wheel deltas without adding lag.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-progress h-1 w-full"
    >
      <motion.div
        style={{ scaleX: reduced ? scrollYProgress : scaleX, transformOrigin: '0% 50%' }}
        className="h-full w-full bg-gradient-to-r from-aurora-violet via-aurora-orchid to-aurora-steel"
      />
    </div>
  )
}
