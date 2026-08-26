import type { Metadata } from 'next'

import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume for ${profile.name}.`,
  alternates: { canonical: '/resume' },
}

export default function ResumePage() {
  return (
    <section className="resume-page min-h-screen px-6 pb-24 pt-36 md:px-8 md:pt-44">
      <div className="mx-auto max-w-[744px] text-center">
        <h1 className="font-bebas text-hero-sm uppercase text-plum-900 md:text-hero">Resume</h1>
        <p className="mt-2 font-serif text-fine italic text-plum-500">Last updated August 2026</p>
        <a href="/resume-assets/anshika-batra-resume.pdf" download className="resume-action mt-8">Download PDF</a>

        <div className="resume-preview mt-16 overflow-hidden rounded-card border border-plum-900/10 bg-canvas shadow-media md:mt-20">
          <iframe title="Anshika Batra resume" src="/resume-assets/anshika-batra-resume.pdf#view=FitH" className="h-[540px] w-full md:h-[740px]" />
        </div>

        <p className="mt-20 font-serif text-lede-sm italic text-plum-900">Let’s work together</p>
        <a href={`mailto:${profile.email}`} className="resume-action mt-3">Email Anshika →</a>

        <ul className="mt-10 flex items-center justify-center gap-6">
          <li>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="resume-social">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.65c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21h-4V9Z" /></svg>
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="resume-social">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="2.5" y="4.5" width="19" height="15" rx="2" /><path d="m3 6 9 6.5L21 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </li>
        </ul>
        <p className="mt-8 font-serif text-fine text-plum-500">© {profile.name} 2026. Built with Codex.</p>
      </div>
    </section>
  )
}
