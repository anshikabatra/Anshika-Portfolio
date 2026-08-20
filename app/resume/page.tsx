import type { Metadata } from 'next'

import { PageHeading, SectionLabel } from '@/components/PageHeading'
import { Reveal } from '@/components/motion/Reveal'
import { Stagger } from '@/components/motion/Stagger'
import {
  accolades,
  education,
  experience,
  leadership,
  leadershipLinks,
  skills,
} from '@/content/experience'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Résumé',
  description: `Full résumé for ${profile.name} — product design, AI-native tooling, platform products.`,
  alternates: { canonical: '/resume' },
}

export default function ResumePage() {
  return (
    <>
      <PageHeading
        title="Résumé"
        lede="Product design across consumer and enterprise systems, with a bias toward internal tools and AI-assisted workflows."
      />

      <div className="mx-auto max-w-hero space-y-16 px-6 pb-24 md:px-0">
        {/* Contact */}
        <Reveal>
          <dl className="grid gap-x-8 gap-y-3 font-serif text-copy sm:grid-cols-2">
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
                Based in
              </dt>
              <dd className="text-plum-900">
                {profile.location} · {profile.availability}
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
                Email
              </dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="link-underline text-plum-900"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
                Phone
              </dt>
              <dd>
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="link-underline text-plum-900">
                  {profile.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
                LinkedIn
              </dt>
              <dd>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-plum-900"
                >
                  anshika-batra
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>

        {/* Experience */}
        <section>
          <SectionLabel>Experience</SectionLabel>
          <Stagger className="space-y-10">
            {experience.map((job) => (
              <Reveal key={`${job.org}-${job.period}`} as="article">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-bebas text-2xl uppercase text-plum-900">
                    {job.role} <span className="text-plum-500">·</span> {job.org}
                  </h3>
                  <span className="font-serif text-fine italic text-plum-500">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2">
                  {job.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="prose-hang relative pl-5 font-serif text-copy text-plum-700"
                    >
                      <span
                        aria-hidden
                        className="absolute left-0 top-[0.62em] size-1.5 rounded-full bg-plum-900/25"
                      />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </Stagger>
        </section>

        {/* Education */}
        <section>
          <SectionLabel>Education</SectionLabel>
          <Stagger className="space-y-6">
            {education.map((e) => (
              <Reveal key={e.institution} as="article">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="max-w-[46ch] font-serif text-copy font-semibold text-plum-900">
                    {e.institution}
                  </h3>
                  <span className="font-serif text-fine italic text-plum-500">
                    {e.period}
                  </span>
                </div>
                <p className="font-serif text-copy text-plum-700">
                  {e.qualification}
                  {e.detail && <span className="text-plum-500"> · {e.detail}</span>}
                </p>
                <p className="font-serif text-fine italic text-plum-500">{e.location}</p>
              </Reveal>
            ))}
          </Stagger>
        </section>

        {/* Leadership */}
        <section>
          <SectionLabel>Leadership</SectionLabel>
          <Stagger className="space-y-6">
            {leadership.map((l) => {
              const href = leadershipLinks[l.org] ?? leadershipLinks[l.role]
              return (
                <Reveal key={l.role} as="article">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-bebas text-xl uppercase text-plum-900">
                      {l.role} <span className="text-plum-500">·</span> {l.org}
                    </h3>
                    <span className="font-serif text-fine italic text-plum-500">
                      {l.period}
                    </span>
                  </div>
                  <p className="prose-hang mt-1 max-w-[62ch] font-serif text-copy text-plum-700">
                    {l.detail}
                  </p>
                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`More about ${l.org}`}
                      className="link-underline mt-1 inline-block font-serif text-fine italic text-plum-900"
                    >
                      More about {l.org} →
                    </a>
                  )}
                </Reveal>
              )
            })}
          </Stagger>
        </section>

        {/* Skills */}
        <section>
          <SectionLabel>Skills</SectionLabel>
          <Stagger className="space-y-6">
            {skills.map((g) => (
              <Reveal key={g.label}>
                <h3 className="font-sans text-[11px] uppercase tracking-wider text-plum-500">
                  {g.label}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border border-plum-900/15 px-3 py-1 font-serif text-fine text-plum-700"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </Stagger>
        </section>

        {/* Accolades */}
        <section>
          <SectionLabel>Accolades</SectionLabel>
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
