import type { Metadata } from 'next'

import { PageHeading, SectionLabel } from '@/components/PageHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger } from '@/components/motion/Stagger'
import { accolades, secondaryProjects } from '@/content/experience'
import { profile } from '@/content/profile'
import { accentText, cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'More',
  description: `Concepts, ventures and side work by ${profile.name}.`,
  alternates: { canonical: '/more' },
}

export default function MorePage() {
  return (
    <>
      <PageHeading
        title="More"
        lede="Concepts, ventures and the work that sits alongside the day job."
      />

      <div className="mx-auto max-w-hero space-y-16 px-6 pb-24 md:px-0">
        <section>
          <SectionLabel>Other work</SectionLabel>
          <Stagger className="space-y-12">
            {secondaryProjects.map((p) => (
              <Reveal key={p.slug} as="article">
                <h3 className="font-bebas text-3xl uppercase text-plum-900">{p.title}</h3>
                <p className={cn('mt-1 font-serif italic', accentText[p.accent])}>{p.meta}</p>
                <p className="prose-hang mt-3 max-w-[62ch] font-serif text-copy text-plum-700">
                  {p.description}
                </p>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline mt-3 inline-block font-serif italic text-plum-900"
                  >
                    {p.linkLabel} →
                  </a>
                )}
              </Reveal>
            ))}
          </Stagger>
        </section>

        <section>
          <SectionLabel>Recognition</SectionLabel>
          <Reveal>
            <ul className="space-y-2">
              {accolades.map((a) => (
                <li
                  key={a}
                  className="prose-hang relative pl-5 font-serif text-copy text-plum-700"
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-[0.62em] size-1.5 rounded-full bg-plum-900/25"
                  />
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      </div>
    </>
  )
}
