/**
 * AI Product Copilot — raw idea in, structured PRD / execution plan / market
 * insight out. Laid out as the résumé describes it: problem framing, feature
 * prioritisation, next-step generation, with context-aware evidence attached.
 *
 * Illustrative interface, not a screenshot. See docs/CONTENT-GAPS.md.
 */
export function ProductCopilot() {
  const sections = [
    { title: 'Problem framing', done: true },
    { title: 'Feature prioritisation', done: true },
    { title: 'Execution plan', done: true },
    { title: 'Market insight', done: false },
  ]

  return (
    <div className="flex h-full flex-col bg-[#fcfbfd] text-[10px]">
      {/* Prompt bar */}
      <div className="border-b border-plum-900/10 bg-white px-4 py-3">
        <div className="font-sans text-[8px] uppercase tracking-wider text-plum-500">
          Raw idea
        </div>
        <div className="mt-1 font-serif text-[11px] italic text-plum-900">
          “A tool that helps small restaurants forecast prep volume.”
        </div>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Generated document */}
        <div className="min-w-0 flex-1 space-y-2.5 p-4">
          <div className="font-sans text-[8px] uppercase tracking-wider text-plum-500">
            Generated PRD
          </div>

          <div className="h-2 w-2/3 rounded bg-plum-900/70" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-plum-900/15" />
            <div className="h-1.5 w-[92%] rounded bg-plum-900/15" />
            <div className="h-1.5 w-[78%] rounded bg-plum-900/15" />
          </div>

          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {['P0 · Forecast', 'P1 · Alerts', 'P2 · Export'].map((p, i) => (
              <div
                key={p}
                className={`rounded border px-1.5 py-1 font-sans text-[8px] ${
                  i === 0
                    ? 'border-[#9c3a5f]/30 bg-[#9c3a5f]/8 text-[#9c3a5f]'
                    : 'border-plum-900/10 bg-white text-plum-500'
                }`}
              >
                {p}
              </div>
            ))}
          </div>

          <div className="space-y-1.5 pt-1">
            <div className="h-1.5 w-[88%] rounded bg-plum-900/15" />
            <div className="h-1.5 w-[64%] rounded bg-plum-900/15" />
          </div>
        </div>

        {/* Evidence rail */}
        <aside className="hidden w-[34%] shrink-0 border-l border-plum-900/10 bg-white p-3 sm:block">
          <div className="mb-2 font-sans text-[8px] uppercase tracking-wider text-plum-500">
            Steps
          </div>
          <div className="space-y-1.5">
            {sections.map((s) => (
              <div key={s.title} className="flex items-center gap-1.5">
                <span
                  className={`size-1.5 shrink-0 rounded-full ${
                    s.done ? 'bg-[#9c3a5f]' : 'bg-plum-900/20'
                  }`}
                />
                <span
                  className={`truncate font-sans text-[9px] ${
                    s.done ? 'text-plum-900' : 'text-plum-500'
                  }`}
                >
                  {s.title}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-3 border-t border-plum-900/10 pt-2">
            <div className="mb-1.5 font-sans text-[8px] uppercase tracking-wider text-plum-500">
              Context attached
            </div>
            <div className="space-y-1">
              {['Case study ×3', 'Competitors ×5', 'Secondary research'].map((c) => (
                <div
                  key={c}
                  className="truncate rounded bg-plum-900/5 px-1.5 py-1 font-sans text-[8px] text-plum-700"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
