import Link from 'next/link'

import { profile } from '@/content/profile'

export const metadata = { title: 'Not found' }

/** A designed 404 — same aurora system as the hero, not a browser default. */
export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 sm:px-10 md:px-16">
      <div aria-hidden className="aurora-depth pointer-events-none absolute inset-0 opacity-85" />

      <div className="relative z-content mx-auto w-full max-w-hero">
        <p className="font-bebas text-numeral leading-none text-[var(--accent-orchid-tint)]">
          404
        </p>
        <h1 className="mt-1 font-bebas text-hero-sm uppercase text-plum-900 md:text-hero">
          Nothing here
        </h1>
        <p className="prose-hang mt-4 max-w-[46ch] font-serif text-lede-sm text-plum-700">
          That page doesn&rsquo;t exist &mdash; or it moved. The work is all one scroll away.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-plum-900 px-6 py-3 font-bebas text-lg uppercase tracking-[1.6px] text-plum-900 transition-colors duration-300 ease-signature hover:bg-plum-900 hover:text-canvas"
          >
            Back home
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-[44px] items-center font-serif italic text-plum-900 link-underline"
          >
            Or just email me
          </a>
        </div>
      </div>
    </section>
  )
}
