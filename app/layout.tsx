import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Crimson_Text } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { CursorGlow } from '@/components/CursorGlow'
import { ScrollProgress } from '@/components/ScrollProgress'
import { SiteHeader } from '@/components/SiteHeader'
import { SmoothScroll } from '@/components/SmoothScroll'
import { profile } from '@/content/profile'

import './globals.css'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const crimson = Crimson_Text({
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
})

const SITE_URL = 'https://anshikabatra.com'
const DESCRIPTION =
  'Anshika Batra is a product designer and AI-native product generalist building internal tools, platform products and AI-powered workflows across consumer and enterprise systems.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${profile.name} · Product Designer`,
    template: `%s · ${profile.name}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Anshika Batra',
    'Product Designer',
    'AI product design',
    'Design Systems',
    'UX Research',
    'Delhi',
  ],
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: `${profile.name} · Product Designer`,
    title: `${profile.name} · Product Designer`,
    description: DESCRIPTION,
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} · Product Designer`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/icon.svg' }],
  },
}

export const viewport: Viewport = {
  themeColor: '#e8e4ed',
  colorScheme: 'light',
}

/** JSON-LD so the résumé content is machine-readable, not just rendered. */
const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: 'Product Designer',
  email: `mailto:${profile.email}`,
  url: SITE_URL,
  address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
  sameAs: [profile.linkedin],
  description: DESCRIPTION,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebas.variable} ${crimson.variable}`}>
      <head>
        {/*
          Framer Motion serialises its `hidden` variant into the server HTML as
          inline `opacity:0`. Without scripting those elements would never be
          revealed, so the whole page below the fold would be invisible.
          A stylesheet `!important` outranks a non-important inline style, so
          this restores every gated element when JS is unavailable.
        */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
      </head>
      <body className="grain min-h-screen antialiased">
        <CursorGlow />
        <script
          type="application/ld+json"
          // Serialised from a local constant — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-plum-900 focus:px-4 focus:py-2 focus:font-bebas focus:text-lg focus:uppercase focus:tracking-[1.6px] focus:text-canvas"
        >
          Skip to content
        </a>

        <SmoothScroll />
        <ScrollProgress />
        <SiteHeader />

        <main id="main" className="relative z-content">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
