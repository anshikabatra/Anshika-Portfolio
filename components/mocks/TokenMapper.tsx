/**
 * Zomato — Figma plugin that auto-detects design elements and maps them to
 * system tokens. Drawn from the résumé's description of the tool: detection on
 * the left, token mapping on the right, across colour / type / spacing.
 *
 * This is an illustrative interface, not a screenshot. See docs/CONTENT-GAPS.md.
 */
export function TokenMapper() {
  const rows = [
    { raw: '#E23744', token: 'color/brand/primary', kind: 'Colour', ok: true },
    { raw: '#1C1C1C', token: 'color/text/primary', kind: 'Colour', ok: true },
    { raw: 'Inter 600 · 20/28', token: 'type/heading/sm', kind: 'Type', ok: true },
    { raw: 'Inter 400 · 14/20', token: 'type/body/sm', kind: 'Type', ok: true },
    { raw: '12px', token: 'space/3', kind: 'Spacing', ok: true },
    { raw: '18px', token: '— no match', kind: 'Spacing', ok: false },
  ]

  return (
    <div className="flex h-full text-[10px] leading-none">
      {/* Canvas side */}
      <div className="relative hidden w-[42%] shrink-0 border-r border-plum-900/10 bg-[#fafafa] p-4 sm:block">
        <div className="mb-3 font-sans text-[9px] uppercase tracking-wider text-plum-500">
          Selection · 24 layers
        </div>
        <div className="space-y-2">
          <div className="h-7 rounded bg-[#E23744]" />
          <div className="h-3 w-3/4 rounded bg-plum-900/80" />
          <div className="h-2 w-full rounded bg-plum-900/20" />
          <div className="h-2 w-5/6 rounded bg-plum-900/20" />
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="aspect-square rounded bg-plum-900/10" />
            <div className="aspect-square rounded bg-plum-900/10" />
            <div className="aspect-square rounded bg-plum-900/10" />
          </div>
          <div className="mt-3 h-6 w-2/3 rounded-full bg-[#E23744]/15" />
        </div>
        <div className="absolute inset-x-4 bottom-4 rounded border border-dashed border-[#E23744]/50 py-1 text-center font-sans text-[8px] text-[#E23744]">
          auto-detecting…
        </div>
      </div>

      {/* Plugin panel */}
      <div className="flex min-w-0 flex-1 flex-col bg-white">
        <div className="flex items-center justify-between border-b border-plum-900/10 px-4 py-2.5">
          <span className="font-sans text-[10px] font-semibold text-plum-900">
            Token Mapper
          </span>
          <span className="rounded-full bg-[#28c840]/15 px-2 py-0.5 font-sans text-[8px] text-[#1a7f30]">
            5 / 6 mapped
          </span>
        </div>

        <div className="min-h-0 flex-1 divide-y divide-plum-900/5 overflow-hidden">
          {rows.map((r) => (
            <div key={r.raw} className="flex items-center gap-2 px-4 py-[7px]">
              <span
                className={`size-1.5 shrink-0 rounded-full ${r.ok ? 'bg-[#28c840]' : 'bg-[#febc2e]'}`}
              />
              <span className="w-[26%] shrink-0 truncate font-sans text-[9px] text-plum-900">
                {r.raw}
              </span>
              <span className="shrink-0 font-sans text-[9px] text-plum-500">→</span>
              <span
                className={`min-w-0 flex-1 truncate font-sans text-[9px] ${
                  r.ok ? 'text-[#35617f]' : 'text-plum-500 italic'
                }`}
              >
                {r.token}
              </span>
              <span className="shrink-0 rounded bg-plum-900/5 px-1.5 py-0.5 font-sans text-[8px] text-plum-500">
                {r.kind}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 border-t border-plum-900/10 px-4 py-2.5">
          <div className="rounded bg-[#E23744] px-3 py-1.5 font-sans text-[9px] text-white">
            Apply tokens
          </div>
          <div className="rounded border border-plum-900/15 px-3 py-1.5 font-sans text-[9px] text-plum-700">
            Review 1
          </div>
        </div>
      </div>
    </div>
  )
}
