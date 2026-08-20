/** Minimal class joiner — no dependency needed for this surface area. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

import type { AccentKey } from '@/content/types'

/**
 * Accent lookup. Kept as a static map rather than interpolated class names so
 * Tailwind's content scanner can see every class that will ever be emitted.
 */
export const accentText: Record<AccentKey, string> = {
  steel: 'text-accent-steel',
  orchid: 'text-accent-orchid',
  rose: 'text-accent-rose',
  violet: 'text-accent-violet',
}

export const accentNumeral: Record<AccentKey, string> = {
  steel: 'text-[var(--accent-steel-tint)]',
  orchid: 'text-[var(--accent-orchid-tint)]',
  rose: 'text-[var(--accent-rose-tint)]',
  violet: 'text-[var(--accent-violet-tint)]',
}
