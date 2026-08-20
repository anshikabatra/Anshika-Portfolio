/**
 * Pages — a friendship-first memory app. Scrapbook albums holding photos,
 * doodles, stickers and voice notes, exactly as the résumé describes it.
 *
 * Illustrative interface, not a screenshot. See docs/CONTENT-GAPS.md.
 */
export function PagesApp() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#fdf6ee] via-[#fbf1f4] to-[#f2eefb] pt-9 text-[10px]">
      {/* Status row */}
      <div className="flex items-center justify-between px-4 pb-2 font-sans text-[8px] text-plum-900/50">
        <span>9:41</span>
        <span>▮▮▮</span>
      </div>

      {/* Title */}
      <div className="px-4 pb-3">
        <div className="font-serif text-[15px] italic leading-tight text-plum-900">Pages</div>
        <div className="font-sans text-[8px] uppercase tracking-wider text-plum-500">
          3 albums · 2 friends
        </div>
      </div>

      {/* Scrapbook spread */}
      <div className="min-h-0 flex-1 px-4">
        <div className="relative h-full rounded-xl border border-plum-900/10 bg-white/70 p-3 shadow-sm backdrop-blur-sm">
          {/* taped photo, tilted */}
          <div className="absolute left-4 top-4 w-[52%] -rotate-3">
            <div className="rounded-sm bg-white p-1 shadow-[0_4px_12px_rgba(20,18,26,0.12)]">
              <div className="aspect-[4/3] rounded-[2px] bg-gradient-to-br from-[#f7c9a8] via-[#e8a0b4] to-[#b39ddb]" />
            </div>
            <span
              aria-hidden
              className="absolute -top-1.5 left-1/2 h-3 w-8 -translate-x-1/2 rotate-2 bg-[#e8d9a0]/70"
            />
          </div>

          {/* second photo */}
          <div className="absolute right-3 top-14 w-[42%] rotate-6">
            <div className="rounded-sm bg-white p-1 shadow-[0_4px_12px_rgba(20,18,26,0.12)]">
              <div className="aspect-square rounded-[2px] bg-gradient-to-tr from-[#a8d8e8] to-[#d5c2f0]" />
            </div>
          </div>

          {/* doodle */}
          <svg
            aria-hidden
            viewBox="0 0 120 60"
            className="absolute bottom-[38%] left-3 w-[46%] text-[#9c3a5f]/70"
          >
            <path
              d="M4 42c14-26 30-30 42-14s26 16 38-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="98" cy="20" r="3" fill="currentColor" />
          </svg>

          {/* stickers */}
          <div className="absolute bottom-[26%] right-5 flex gap-1.5 text-[13px]">
            <span className="-rotate-12">🌸</span>
            <span className="rotate-6">✦</span>
          </div>

          {/* voice note */}
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1.5 shadow-sm">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#9c3a5f] text-[8px] text-white">
              ▶
            </span>
            <div className="flex flex-1 items-center gap-[2px]" aria-hidden>
              {[6, 10, 4, 12, 8, 14, 5, 9, 11, 4, 8, 6, 12, 7].map((h, i) => (
                <span
                  key={i}
                  style={{ height: `${h}px` }}
                  className="w-[2px] rounded-full bg-[#9c3a5f]/45"
                />
              ))}
            </div>
            <span className="shrink-0 font-sans text-[7px] text-plum-500">0:14</span>
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex items-center justify-around px-4 py-3 font-sans text-[8px] text-plum-500">
        <span className="text-plum-900">Albums</span>
        <span>Friends</span>
        <span>Add</span>
      </div>
    </div>
  )
}
