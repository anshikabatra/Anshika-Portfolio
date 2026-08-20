import type { Transition, Variants } from 'framer-motion'

/**
 * Motion primitives.
 *
 * One signature curve, three duration tiers, and a fixed stagger step. Every
 * animation in the site composes from these — nothing declares an ad-hoc
 * duration or easing inline.
 *
 * Character (from docs/DESIGN-SPEC.md §6): slow and cinematic. No spring, no
 * overshoot, no bounce. Only `transform` and `opacity` are animated, plus the
 * hero's one-off blur.
 */

export const EASE_SIGNATURE = [0.22, 1, 0.36, 1] as const
export const EASE_OUT_SOFT = [0.16, 1, 0.3, 1] as const

export const DUR = {
  fast: 0.2,
  base: 0.6,
  slow: 0.9,
} as const

export const STAGGER_STEP = 0.06

const base: Transition = { duration: DUR.base, ease: EASE_SIGNATURE }

/** Standard scroll reveal: rise 24px into place while fading in. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: base },
}

/**
 * The hero's signature entrance — text resolves out of a blur rather than
 * sliding. This is the single most recognisable moment on the reference.
 */
export const heroReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DUR.slow, ease: EASE_OUT_SOFT },
  },
}

/** Clip-mask reveal for headline lines held in an `overflow-hidden` parent. */
export const maskReveal: Variants = {
  hidden: { y: '110%' },
  visible: { y: '0%', transition: { duration: DUR.slow, ease: EASE_OUT_SOFT } },
}

/** Parent orchestrator. Children inherit `hidden`/`visible` and fire in order. */
export const staggerChildren = (step: number = STAGGER_STEP, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: step, delayChildren: delay },
  },
})

/** Media reveal: settles down from a slight over-scale, never up. */
export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.04, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: DUR.slow, ease: EASE_SIGNATURE },
  },
}

/** Per-character reveal, for short strings only. */
export const charReveal: Variants = {
  hidden: { opacity: 0, y: '0.4em' },
  visible: { opacity: 1, y: 0, transition: { duration: DUR.base, ease: EASE_SIGNATURE } },
}

/**
 * Reduced-motion equivalents. Every transform collapses to a 150ms opacity
 * fade so the page still acknowledges arrival without moving anything.
 */
export const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15, ease: 'linear' } },
}

/** Shared viewport config — reveals fire once and never re-trigger. */
export const viewportOnce = { once: true, amount: 0.25 } as const
