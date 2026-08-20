'use client'

import { useEffect, useState } from 'react'

/**
 * Tracks `prefers-reduced-motion` and stays live if the user changes it
 * mid-session. Returns `false` on the server and on first paint so markup
 * matches between server and client, then corrects in an effect.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}
