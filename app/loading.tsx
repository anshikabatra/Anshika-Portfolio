/** Designed loading state — a calm pulse in the display face, not a spinner. */
export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <p className="animate-pulse font-bebas text-2xl uppercase tracking-[1.6px] text-plum-500">
        Loading
      </p>
    </div>
  )
}
