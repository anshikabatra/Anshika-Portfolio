import { profile } from '@/content/profile'
import type { StatementLine } from '@/content/types'

/**
 * Hero.
 *
 * A server component with a pure-CSS entrance. Deliberately not Framer Motion:
 * this holds the LCP element, and a JS-driven reveal would ship `opacity:0` in
 * the server HTML — leaving the whole fold invisible if scripting fails and
 * delaying LCP until hydration either way.
 *
 * The stagger is expressed as per-child `animation-delay`, matching the
 * reference's own `hero-fade-slide-up` keyframe approach.
 */

function Line({ line }: { line: StatementLine }) {
  return (
    <span className="block">
      {line.map((seg, i) =>
        seg.emphasis ? (
          <em key={i} className="aurora-em text-[1.15em] italic">
            {seg.text}
          </em>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </span>
  )
}

/** 60ms steps, per docs/DESIGN-SPEC.md §6. Base offset clears the veil fade-in. */
function delay(step: number): React.CSSProperties {
  return { animationDelay: `${150 + step * 60}ms` }
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 sm:px-10 md:px-16">
      {/* Layer 2 of the background system — drifts and blurs, never touches text. */}
      <div
        aria-hidden
        className="aurora-depth pointer-events-none absolute inset-0 animate-veil-in"
      />

      <div className="relative z-content mx-auto w-full max-w-hero text-left">
        <div className="mb-[72px] sm:mb-12 md:mb-16">
          <h1
            style={delay(0)}
            className="block animate-hero-in font-bebas text-hero-sm text-plum-900 sm:text-5xl md:text-hero"
          >
            {profile.name}
          </h1>

          <p
            style={delay(1)}
            className="mt-1 animate-hero-in font-serif italic text-plum-500"
          >
            {profile.role}
          </p>
        </div>

        <div className="space-y-8 font-serif text-lede-sm text-plum-900 md:text-lede">
          {profile.statement.map((para, pi) => (
            <p key={pi} style={delay(2 + pi)} className="prose-hang animate-hero-in">
              {para.map((line, li) => (
                <Line key={li} line={line} />
              ))}
            </p>
          ))}
        </div>

        <p
          style={delay(2 + profile.statement.length)}
          className="mt-12 animate-hero-in font-serif text-fine text-plum-500"
        >
          {profile.location} · {profile.availability}
        </p>
      </div>
    </section>
  )
}
