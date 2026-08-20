'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { SectionLabel } from '@/components/PageHeading'
import {
  charReveal,
  fadeUp,
  heroReveal,
  imageReveal,
  maskReveal,
  staggerChildren,
} from '@/lib/motion'
import { usePrefersReducedMotion } from '@/lib/useReducedMotion'

const PRIMITIVES = [
  { name: 'fadeUp', variants: fadeUp, note: 'default scroll reveal · 600ms' },
  { name: 'heroReveal', variants: heroReveal, note: 'blur-resolve · 900ms' },
  { name: 'imageReveal', variants: imageReveal, note: 'settle from 1.04 · 900ms' },
]

/**
 * Every motion primitive on a loop, so regressions in feel are visible rather
 * than something you have to go hunting for on the live pages.
 */
export function MotionLab() {
  const reduced = usePrefersReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2600)
    return () => clearInterval(id)
  }, [])

  return (
    <section>
      <SectionLabel>Motion</SectionLabel>

      <p className="mb-8 max-w-[60ch] font-serif text-copy text-plum-700">
        Each primitive replays every 2.6s.{' '}
        {reduced ? (
          <strong className="text-plum-900">
            Reduced motion is currently ON — every transform is collapsed to a 150ms fade.
          </strong>
        ) : (
          <>Turn on “reduce motion” in your OS to see the collapsed variants.</>
        )}
      </p>

      <div className="grid gap-6 sm:grid-cols-3">
        {PRIMITIVES.map((p) => (
          <div key={p.name} className="rounded-card border border-plum-900/10 bg-raised p-5">
            <div className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
              {p.name}
            </div>
            <div className="mt-1 font-serif text-fine italic text-plum-500">{p.note}</div>
            <div className="mt-4 grid h-24 place-items-center">
              <motion.div
                key={`${p.name}-${tick}`}
                variants={p.variants}
                initial="hidden"
                animate="visible"
                className="grid size-16 place-items-center rounded-card bg-plum-900 font-bebas text-xl text-canvas"
              >
                Ab
              </motion.div>
            </div>
          </div>
        ))}

        {/* maskReveal needs an overflow-hidden parent to read correctly. */}
        <div className="rounded-card border border-plum-900/10 bg-raised p-5">
          <div className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
            maskReveal
          </div>
          <div className="mt-1 font-serif text-fine italic text-plum-500">
            clip-mask line · 900ms
          </div>
          <div className="mt-4 grid h-24 place-items-center">
            <span className="block overflow-hidden">
              <motion.span
                key={`mask-${tick}`}
                variants={maskReveal}
                initial="hidden"
                animate="visible"
                className="block font-bebas text-3xl uppercase text-plum-900"
              >
                Anshika
              </motion.span>
            </span>
          </div>
        </div>

        {/* staggerChildren + charReveal */}
        <div className="rounded-card border border-plum-900/10 bg-raised p-5 sm:col-span-2">
          <div className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
            staggerChildren + charReveal
          </div>
          <div className="mt-1 font-serif text-fine italic text-plum-500">60ms step</div>
          <div className="mt-4 grid h-24 place-items-center">
            <motion.span
              key={`stagger-${tick}`}
              variants={staggerChildren(reduced ? 0 : 0.06)}
              initial="hidden"
              animate="visible"
              className="flex font-bebas text-3xl uppercase text-plum-900"
            >
              {'PORTFOLIO'.split('').map((c, i) => (
                <motion.span key={i} variants={charReveal}>
                  {c}
                </motion.span>
              ))}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  )
}
