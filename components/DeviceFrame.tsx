import type { ReactNode } from 'react'

/**
 * A macOS-style browser window. The chrome is drawn rather than imaged, so it
 * stays crisp at any density and costs nothing to download.
 */
export function BrowserFrame({
  url,
  href,
  children,
  aspectClassName = 'aspect-[16/10]',
}: {
  url: string
  href?: string
  children: ReactNode
  aspectClassName?: string
}) {
  return (
    <div className="overflow-hidden rounded-card border border-plum-900/10 bg-raised shadow-media transition-shadow duration-300 ease-signature group-hover:shadow-media-hover">
      <div className="flex items-center gap-3 border-b border-plum-900/10 bg-[#f6f4f8] px-4 py-3">
        <div className="flex gap-2" aria-hidden>
          <span className="size-3 rounded-full bg-[#ff5f57]" />
          <span className="size-3 rounded-full bg-[#febc2e]" />
          <span className="size-3 rounded-full bg-[#28c840]" />
        </div>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto max-w-[60%] truncate rounded-full bg-white px-4 py-1 font-serif text-[11px] text-plum-500 transition-colors hover:text-plum-900"
            aria-label={`Open ${url}`}
          >
            {url}
          </a>
        ) : (
          <div className="mx-auto max-w-[60%] truncate rounded-full bg-white px-4 py-1 font-serif text-[11px] text-plum-500">
            {url}
          </div>
        )}
      </div>
      <div className={`${aspectClassName} w-full overflow-hidden bg-white`}>{children}</div>
    </div>
  )
}

/** An iPhone-proportioned frame, Dynamic Island included. */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center rounded-card border border-white/45 bg-white/20 p-8 shadow-media backdrop-blur-xl transition-[background-color,box-shadow] duration-300 ease-signature group-hover:bg-white/30 group-hover:shadow-media-hover">
      <div className="relative w-[248px] rounded-[38px] bg-plum-900 p-[10px] shadow-[0_18px_40px_rgba(20,18,26,0.28)]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[30px] bg-black">
          <div
            aria-hidden
            className="absolute left-1/2 top-2 z-20 h-[22px] w-[76px] -translate-x-1/2 rounded-full bg-black"
          />
          {children}
        </div>
      </div>
    </div>
  )
}
