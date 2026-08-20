import type { Metadata } from 'next'

import { SectionLabel } from '@/components/PageHeading'
import { MotionLab } from '@/components/MotionLab'

export const metadata: Metadata = {
  title: 'Styleguide',
  robots: { index: false, follow: false },
}

const TYPE = [
  { cls: 'font-bebas text-hero', label: 'hero — Bebas 60/57, 0.02em' },
  { cls: 'font-bebas text-hero-sm', label: 'hero-sm — Bebas 46/0.95' },
  { cls: 'font-bebas text-projtitle uppercase', label: 'projtitle — Bebas 40/1' },
  { cls: 'font-bebas text-numeral', label: 'numeral — Bebas 56/1' },
  { cls: 'font-bebas text-wordmark uppercase', label: 'wordmark — Bebas 32, 1.6px' },
  { cls: 'font-bebas text-navlink uppercase', label: 'navlink — Bebas 24, 1.6px' },
  { cls: 'font-serif text-lede', label: 'lede — Crimson 24/1.6' },
  { cls: 'font-serif text-lede-sm', label: 'lede-sm — Crimson 20/1.6' },
  { cls: 'font-serif text-copy', label: 'copy — Crimson 17/1.75' },
  { cls: 'font-serif text-eyebrow italic', label: 'eyebrow — Crimson italic 16' },
  { cls: 'font-serif text-fine', label: 'fine — Crimson 14/1.5' },
]

const INK = [
  { v: '--plum-900', n: 'plum-900', r: '13.96' },
  { v: '--plum-700', n: 'plum-700', r: '7.42' },
  { v: '--plum-500', n: 'plum-500', r: '5.34' },
  { v: '--canvas', n: 'canvas', r: '—' },
  { v: '--surface', n: 'surface', r: '—' },
]

const ACCENTS = [
  { v: '--accent-steel', n: 'steel', r: '5.29' },
  { v: '--accent-orchid', n: 'orchid', r: '4.98' },
  { v: '--accent-rose', n: 'rose', r: '5.26' },
  { v: '--accent-violet', n: 'violet', r: '5.95' },
]

const AURORA = ['--aurora-violet', '--aurora-orchid', '--aurora-steel', '--aurora-rose', '--aurora-peri']

const SPACE = [
  ['space-4', '1rem'],
  ['space-6', '1.5rem'],
  ['space-8', '2rem'],
  ['space-14', '3.5rem'],
  ['space-20', '5rem'],
  ['space-32', '8rem'],
]

export default function Styleguide() {
  return (
    <div className="mx-auto max-w-shell space-y-20 px-6 pb-24 pt-36 md:px-8 md:pt-44">
      <header>
        <h1 className="font-bebas text-hero-sm uppercase text-plum-900 md:text-hero">
          Styleguide
        </h1>
        <p className="mt-2 max-w-[60ch] font-serif text-lede-sm italic text-plum-500">
          The review surface. Every type role, colour, spacing step and motion primitive,
          rendered from the same tokens the site uses.
        </p>
      </header>

      <section>
        <SectionLabel>Type scale</SectionLabel>
        <div className="space-y-6">
          {TYPE.map((t) => (
            <div key={t.label} className="border-b border-plum-900/10 pb-5">
              <div className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
                {t.label}
              </div>
              <div className={`${t.cls} mt-1 text-plum-900`}>Ambiguity is the raw material</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Ink &amp; surface</SectionLabel>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {INK.map((c) => (
            <div key={c.n} className="overflow-hidden rounded-card border border-plum-900/10">
              <div className="h-20" style={{ background: `var(${c.v})` }} />
              <div className="bg-raised p-3">
                <div className="font-sans text-[11px] text-plum-900">{c.n}</div>
                <div className="font-sans text-[10px] text-plum-500">AA {c.r}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Accents</SectionLabel>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ACCENTS.map((c) => (
            <div key={c.n} className="overflow-hidden rounded-card border border-plum-900/10">
              <div className="h-20" style={{ background: `var(${c.v})` }} />
              <div className="bg-raised p-3">
                <div className="font-sans text-[11px] text-plum-900">{c.n}</div>
                <div className="font-sans text-[10px] text-plum-500">AA {c.r}:1</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionLabel>Aurora hues</SectionLabel>
        <div className="flex flex-wrap gap-3">
          {AURORA.map((v) => (
            <div key={v} className="flex items-center gap-2">
              <span
                className="size-10 rounded-full border border-plum-900/10"
                style={{ background: `var(${v})` }}
              />
              <span className="font-sans text-[11px] text-plum-500">{v.replace('--aurora-', '')}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 font-serif text-lede text-plum-900">
          Gradient emphasis renders like <em className="aurora-em text-[1.15em] italic">this</em>,
          sweeping on a 12s loop.
        </p>
      </section>

      <section>
        <SectionLabel>Spacing</SectionLabel>
        <div className="space-y-2">
          {SPACE.map(([n, v]) => (
            <div key={n} className="flex items-center gap-4">
              <span className="w-24 shrink-0 font-sans text-[11px] text-plum-500">{n}</span>
              <span className="h-4 bg-plum-900/20" style={{ width: `var(--${n})` }} />
              <span className="font-sans text-[11px] text-plum-500">{v}</span>
            </div>
          ))}
        </div>
      </section>

      <MotionLab />
    </div>
  )
}
