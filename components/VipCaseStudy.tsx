'use client'

import { useState } from 'react'

import { PhoneFrame } from '@/components/DeviceFrame'

const touchpoints = [
  { label: 'Home', context: 'Early intent', message: 'Make the benefit legible before the user starts choosing.', source: '/vip-1.mov' },
  { label: 'Banner', context: 'High visibility', message: 'Turn the proposition into a fast, scannable reason to care.', source: '/vip-2.mov' },
  { label: 'Cart', context: 'Decision point', message: 'Bring VIP closer to the wait the user is about to experience.', source: '/vip-3.mov' },
  { label: 'Rain / rush', context: 'Waiting hurts', message: 'Make the value contextual when time and demand are most visible.', source: '/vip-4.mov' },
]

const variants = [
  ['VIP Mode', 'The feature name alone asked users to infer the benefit.'],
  ['Skip the Queue', 'The immediate outcome gave users a reason to act.'],
  ['Skip the Queue with VIP Mode', 'The winning frame joined the benefit to the product.'],
]

function VideoPhone({ source, label }: { source: string; label: string }) {
  return <PhoneFrame><video className="size-full object-cover" src={source} autoPlay loop muted playsInline preload="metadata" aria-label={label} /></PhoneFrame>
}

export function VipCaseStudy() {
  const [activeTouchpoint, setActiveTouchpoint] = useState(0)
  const [activeVariant, setActiveVariant] = useState(1)
  const active = touchpoints[activeTouchpoint]

  return (
    <article className="vip-case-study pb-24 pt-28 md:pb-36 md:pt-40">
      <header className="mx-auto max-w-shell px-6 md:px-8">
        <p className="font-bebas text-lg uppercase tracking-[0.16em] text-accent-orchid">Zomato · Product Design & Growth</p>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-serif text-lede-sm italic text-plum-500">A paid add-on, reframed around the one moment it mattered.</p>
            <h1 className="mt-4 max-w-[11ch] font-bebas text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.82] tracking-[0.01em] text-plum-900">Skip the queue.</h1>
            <p className="mt-6 max-w-[52ch] font-serif text-copy text-plum-700">VIP Mode already existed. The question was not how to decorate it - it was how to make its value impossible to miss.</p>
          </div>
          <dl className="grid grid-cols-2 gap-5 border-t border-plum-900/15 pt-5 font-serif text-fine text-plum-700 lg:col-span-4">
            <div><dt className="font-sans text-[10px] uppercase tracking-wider text-plum-500">Role</dt><dd className="mt-1">Sole Product Designer</dd></div>
            <div><dt className="font-sans text-[10px] uppercase tracking-wider text-plum-500">Team</dt><dd className="mt-1">PM, data, business, motion & engineering</dd></div>
          </dl>
        </div>
      </header>

      <section className="mx-auto mt-24 max-w-shell px-6 md:mt-32 md:px-8">
        <div className="vip-reframe rounded-card border border-plum-900/10 p-7 md:p-14">
          <p className="font-sans text-[11px] uppercase tracking-[0.16em] text-plum-500">The product reframe</p>
          <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1.4fr] md:items-center">
            <p className="font-bebas text-5xl uppercase text-plum-500 line-through decoration-plum-500/30 md:text-7xl">VIP mode</p>
            <span className="font-serif text-4xl italic text-plum-500">→</span>
            <p className="font-bebas text-5xl uppercase leading-[0.86] text-plum-900 md:text-7xl">Skip the queue <span className="block text-3xl md:text-5xl">with VIP Mode</span></p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-hero gap-10 px-6 md:mt-32 md:grid-cols-12 md:px-0">
        <div className="md:col-span-4"><p className="font-bebas text-2xl uppercase tracking-[0.08em] text-plum-900">VIP wasn&apos;t for everyone.</p><p className="mt-3 font-serif text-lede-sm italic text-plum-500">It was for the moments when waiting hurt.</p></div>
        <div className="md:col-span-8"><p className="max-w-[60ch] font-serif text-copy text-plum-700">The strongest response came from less promotion-sensitive TG1 and TG2 users, higher-AOV carts, and contexts where time felt especially expensive: rain and rush periods.</p><div className="mt-8 grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr]"><div className="vip-signal">TG1 / TG2</div><span className="vip-operator">+</span><div className="vip-signal">Higher-AOV cart</div><span className="vip-operator">+</span><div className="vip-signal">Rain / rush</div></div><p className="mt-5 font-bebas text-3xl uppercase text-accent-orchid">High relevance for Skip the Queue</p></div>
      </section>

      <section className="mx-auto mt-24 max-w-shell px-6 md:mt-32 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12"><div className="lg:col-span-4"><p className="font-bebas text-3xl uppercase text-plum-900">Right message. Right user. Right moment.</p><p className="mt-3 font-serif text-copy text-plum-700">The design system was not one promotion repeated everywhere. Each surface had a different job in the ordering journey.</p><div className="mt-7 flex flex-wrap gap-2">{touchpoints.map((item, index) => <button key={item.label} type="button" onClick={() => setActiveTouchpoint(index)} className={`rounded-full border px-4 py-2 font-bebas text-lg uppercase tracking-wide transition-colors ${activeTouchpoint === index ? 'border-plum-900 bg-plum-900 text-canvas' : 'border-plum-900/20 text-plum-700 hover:border-plum-900'}`}>{item.label}</button>)}</div></div><div className="rounded-card border border-plum-900/10 bg-white/30 p-6 md:p-10 lg:col-span-8"><div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_248px] md:items-center"><div><p className="font-sans text-[11px] uppercase tracking-[0.16em] text-plum-500">{active.context}</p><h2 className="mt-2 font-bebas text-5xl uppercase text-plum-900">{active.label}</h2><p className="mt-5 max-w-[40ch] font-serif text-lede-sm italic text-plum-700">{active.message}</p></div><VideoPhone source={active.source} label={`VIP Mode ${active.label} recording`} /></div></div></div>
      </section>

      <section className="mx-auto mt-24 max-w-hero px-6 md:mt-32 md:px-0"><p className="font-bebas text-3xl uppercase text-plum-900">The design wasn&apos;t one answer. It was a set of questions.</p><p className="mt-3 max-w-[58ch] font-serif text-copy text-plum-700">Copy was treated as a product variable. Different frames went live to test which proposition made the value easiest to understand.</p><div className="mt-8 grid gap-3 md:grid-cols-3">{variants.map(([title, hypothesis], index) => <button key={title} type="button" onClick={() => setActiveVariant(index)} className={`rounded-card border p-6 text-left transition-colors ${activeVariant === index ? 'border-plum-900 bg-plum-900 text-canvas' : 'border-plum-900/15 bg-white/25 text-plum-900 hover:border-plum-900/45'}`}><p className="font-bebas text-3xl uppercase leading-none">{title}</p><p className={`mt-4 font-serif text-copy ${activeVariant === index ? 'text-plum-100' : 'text-plum-700'}`}>{hypothesis}</p></button>)}</div></section>

      <section className="mx-auto mt-24 max-w-shell px-6 md:mt-32 md:px-8"><div className="rounded-card border border-plum-900/10 bg-white/25 p-8 md:p-14"><p className="font-bebas text-3xl uppercase text-plum-900">A shared loop, not a handoff.</p><div className="mt-10 grid gap-3 text-center font-bebas text-xl uppercase tracking-wide text-plum-700 md:grid-cols-5"><div className="vip-team">PM</div><div className="vip-team vip-team-active">Design</div><div className="vip-team">Data / business</div><div className="vip-team">Visual / motion</div><div className="vip-team">Engineering</div></div><p className="mx-auto mt-8 max-w-[62ch] text-center font-serif text-copy text-plum-700">I shaped the product experiences, then worked with product, business, data, visual and engineering partners to decide what to launch, learn from it, and scale it.</p></div></section>

      <section className="mx-auto mt-24 max-w-hero px-6 md:mt-32 md:px-0"><p className="font-bebas text-3xl uppercase text-plum-900">From hypothesis to scale.</p><div className="mt-7 grid gap-3 sm:grid-cols-5">{['Hypothesis', 'Design', 'Experiment', 'Learn', 'Scale'].map((step, index) => <div key={step} className="vip-step"><span>{String(index + 1).padStart(2, '0')}</span>{step}</div>)}</div><p className="mt-7 max-w-[62ch] font-serif text-copy text-plum-700">Everything on this page shipped. After launch, product, business and data partners used the experiments to identify which user groups, contexts and messages were worth scaling. Selected experiences reached 100% rollout.</p></section>

      <section className="mx-auto mt-24 max-w-shell px-6 md:mt-32 md:px-8"><div className="vip-impact rounded-card p-8 text-center md:p-16"><p className="font-sans text-[11px] uppercase tracking-[0.18em] text-plum-500">Impact observed during the measured period</p><div className="mt-10 grid gap-10 md:grid-cols-2"><div><p className="font-bebas text-[clamp(5rem,12vw,10rem)] leading-none text-plum-900">+44%</p><p className="mt-2 font-serif text-lede-sm italic text-plum-700">OV</p></div><div><p className="font-bebas text-[clamp(5rem,12vw,10rem)] leading-none text-plum-900">+50%</p><p className="mt-2 font-serif text-lede-sm italic text-plum-700">Net revenue per order</p></div></div></div></section>

      <section className="mx-auto mt-24 max-w-hero px-6 text-center md:mt-32 md:px-0"><p className="font-serif text-2xl italic leading-relaxed text-plum-900">The strongest product value proposition isn&apos;t always the feature itself. Sometimes it&apos;s finding the moment when the feature suddenly matters.</p></section>
    </article>
  )
}
