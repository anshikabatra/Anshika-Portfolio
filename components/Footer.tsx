'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Reveal } from '@/components/motion/Reveal'
import { profile } from '@/content/profile'

function Icon({ name }: { name: 'linkedin' | 'email' }) {
  const common = { width: 22, height: 22, 'aria-hidden': true, focusable: false } as const

  if (name === 'linkedin') {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21h-4v-5.65c0-1.35-.03-3.08-1.9-3.08-1.9 0-2.2 1.46-2.2 2.98V21h-4V9Z" />
      </svg>
    )
  }

  if (name === 'email') {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="m3 6 9 6.5L21 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

}

export function Footer() {
  const pathname = usePathname()

  // The résumé has its own focused contact CTA, so a global second footer
  // would duplicate the call to action immediately below it.
  if (pathname === '/resume') return null

  return (
    <footer className="relative z-content px-4 py-12 md:px-8 md:py-20">
      <Reveal className="mx-auto max-w-shell text-center">
        <p className="font-serif text-xl italic text-plum-900">Want to learn more?</p>

        <Link
          href="/resume"
          className="group mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-plum-900 px-7 py-3 font-bebas text-xl uppercase tracking-[1.6px] text-plum-900 transition-colors duration-300 ease-signature hover:bg-plum-900 hover:text-canvas"
        >
          View resume
          <span
            aria-hidden
            className="transition-transform duration-fast ease-signature group-hover:translate-x-1"
          >
            →
          </span>
        </Link>

        <ul className="mt-10 flex items-center justify-center gap-6">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                className="grid size-11 place-items-center rounded-full text-plum-500 transition-colors duration-fast ease-signature hover:text-plum-900"
              >
                <Icon name={s.icon} />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-serif text-fine text-plum-500">
          © {profile.name} {new Date().getFullYear()}. Built with Codex.
        </p>
      </Reveal>
    </footer>
  )
}
