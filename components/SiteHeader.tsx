'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { profile } from '@/content/profile'
import { cn } from '@/lib/utils'

/**
 * `aria` carries a descriptive accessible name where the visible label is a
 * word Lighthouse (rightly) treats as non-descriptive out of context — "More"
 * tells a screen-reader user nothing on its own.
 */
const NAV = [
  { label: 'Home', href: '/', aria: 'Home' },
  { label: 'More', href: '/more', aria: 'More work' },
  { label: 'Resume', href: '/resume', aria: 'Résumé' },
  { label: 'Email', href: `mailto:${profile.email}`, aria: `Email ${profile.name}` },
] as const

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 top-0 z-header w-full',
        'transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-signature',
        scrolled ? 'bg-white/80 shadow-header backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex h-[76px] max-w-header items-center justify-between gap-4 px-6 md:px-8">
        {/*
          `whitespace-nowrap` plus a smaller base size: at 390px the full name
          otherwise wrapped to two lines and overflowed the 76px header.
        */}
        <Link
          href="/"
          className="whitespace-nowrap font-bebas text-lg uppercase tracking-[1.6px] text-plum-900 transition-opacity duration-fast ease-signature hover:opacity-70 sm:text-2xl md:text-wordmark"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-3 sm:gap-5 md:gap-8">
            {NAV.map((item) => {
              const active = item.href === pathname
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-label={item.aria}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'inline-flex min-h-[44px] items-center whitespace-nowrap border-b-2 font-bebas',
                      'text-sm uppercase tracking-[1.6px] text-plum-900',
                      'transition-colors duration-300 ease-signature sm:text-lg md:text-navlink',
                      active
                        ? 'border-plum-900'
                        : 'border-transparent hover:border-plum-900/40 hover:text-plum-700'
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
