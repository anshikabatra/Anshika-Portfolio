/**
 * E2E Networks — Sovereign Cloud Portal. Composed from the capabilities named
 * in the résumé: customer data, SKU management, billing and infrastructure
 * control, for internal teams and enterprise clients.
 *
 * Illustrative interface, not a screenshot. See docs/CONTENT-GAPS.md.
 */
export function CloudPortal() {
  const nav = ['Overview', 'Customers', 'SKUs', 'Billing', 'Infrastructure', 'Audit']
  const stats = [
    { label: 'Active tenants', value: '148' },
    { label: 'SKUs live', value: '62' },
    { label: 'Monthly spend', value: '₹4.2Cr' },
  ]
  const rows = [
    { name: 'L&T Infotech', sku: 'Compute · A100 ×8', region: 'Mumbai', state: 'Healthy' },
    { name: 'Northgate Rail', sku: 'Object Store · 40TB', region: 'Delhi', state: 'Healthy' },
    { name: 'Meridian Bank', sku: 'Kubernetes · 24 nodes', region: 'Chennai', state: 'Degraded' },
    { name: 'Corex Systems', sku: 'Compute · L4 ×16', region: 'Mumbai', state: 'Healthy' },
  ]

  return (
    <div className="flex h-full bg-[#fbfbfd] text-[10px]">
      {/* Sidebar */}
      <aside className="hidden w-[24%] shrink-0 flex-col border-r border-plum-900/10 bg-[#12203a] p-3 sm:flex">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="size-2 rounded-sm bg-[#4ea3d8]" />
          <span className="font-sans text-[9px] font-semibold tracking-wide text-white/90">
            Sovereign
          </span>
        </div>
        <nav className="space-y-1">
          {nav.map((n, i) => (
            <div
              key={n}
              className={`truncate rounded px-2 py-1.5 font-sans text-[9px] ${
                i === 1 ? 'bg-white/15 text-white' : 'text-white/55'
              }`}
            >
              {n}
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded bg-white/10 p-2 font-sans text-[8px] leading-relaxed text-white/60">
          Region
          <div className="text-white/90">ap-south-1</div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center justify-between border-b border-plum-900/10 px-4 py-2.5">
          <span className="font-sans text-[10px] font-semibold text-plum-900">Customers</span>
          <div className="flex gap-1.5">
            <span className="rounded border border-plum-900/15 px-2 py-1 font-sans text-[8px] text-plum-500">
              Filter
            </span>
            <span className="rounded bg-[#12203a] px-2 py-1 font-sans text-[8px] text-white">
              New tenant
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 px-4 py-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded border border-plum-900/10 bg-white p-2">
              <div className="font-sans text-[8px] text-plum-500">{s.label}</div>
              <div className="mt-0.5 font-sans text-[13px] font-semibold text-plum-900">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <div className="min-h-0 flex-1 px-4 pb-3">
          <div className="overflow-hidden rounded border border-plum-900/10 bg-white">
            <div className="grid grid-cols-[1.4fr_1.6fr_1fr_0.9fr] gap-2 border-b border-plum-900/10 bg-[#f6f7fa] px-3 py-1.5 font-sans text-[8px] uppercase tracking-wide text-plum-500">
              <span>Tenant</span>
              <span>SKU</span>
              <span>Region</span>
              <span>State</span>
            </div>
            {rows.map((r) => (
              <div
                key={r.name}
                className="grid grid-cols-[1.4fr_1.6fr_1fr_0.9fr] items-center gap-2 border-b border-plum-900/5 px-3 py-[7px] font-sans text-[9px] last:border-0"
              >
                <span className="truncate text-plum-900">{r.name}</span>
                <span className="truncate text-plum-500">{r.sku}</span>
                <span className="truncate text-plum-500">{r.region}</span>
                <span
                  className={`truncate ${
                    r.state === 'Healthy' ? 'text-[#1a7f30]' : 'text-[#b26a00]'
                  }`}
                >
                  ● {r.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
