import { Reveal } from '@/components/motion/Reveal'

/** Shared masthead for the secondary routes. */
export function PageHeading({
  title,
  lede,
}: {
  title: string
  lede: string
}) {
  return (
    <Reveal immediate className="mx-auto max-w-hero px-6 pb-12 pt-36 md:px-0 md:pb-16 md:pt-44">
      <h1 className="font-bebas text-hero-sm uppercase text-plum-900 md:text-hero">{title}</h1>
      <p className="prose-hang mt-3 max-w-[52ch] font-serif text-lede-sm italic text-plum-500">
        {lede}
      </p>
    </Reveal>
  )
}

/** Section label in the display face, with a hairline rule running to the edge. */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-baseline gap-4">
      <h2 className="shrink-0 font-bebas text-2xl uppercase tracking-[1.6px] text-plum-900">
        {children}
      </h2>
      <span aria-hidden className="h-px flex-1 bg-plum-900/15" />
    </div>
  )
}
