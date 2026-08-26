'use client'

import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; time: number }

/** A white light trail that stretches with fast pointer movement. */
export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return

    const target = { x: -200, y: -200 }
    const current = { x: -200, y: -200 }
    let points: Point[] = []
    let frame = 0
    let visible = false

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * scale
      canvas.height = window.innerHeight * scale
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(scale, 0, 0, scale, 0, 0)
    }
    const move = (event: PointerEvent) => {
      target.x = event.clientX
      target.y = event.clientY
      visible = true
    }
    const leave = () => { visible = false }
    const draw = (time: number) => {
      frame = requestAnimationFrame(draw)
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      current.x += (target.x - current.x) * 0.22
      current.y += (target.y - current.y) * 0.22
      if (visible) points.unshift({ x: current.x, y: current.y, time })
      points = points.filter((point) => time - point.time < 620).slice(0, 48)

      for (let index = points.length - 1; index >= 0; index -= 1) {
        const point = points[index]
        const age = (time - point.time) / 620
        const previous = points[Math.min(index + 1, points.length - 1)] ?? point
        const speed = Math.min(Math.hypot(point.x - previous.x, point.y - previous.y) * 1.4, 28)
        const alpha = (1 - age) ** 2 * (index === 0 ? 0.24 : 0.11)
        const radius = 28 + speed * 1.6 + age * 20
        context.save()
        context.translate(point.x, point.y)
        context.rotate(Math.atan2(point.y - previous.y, point.x - previous.x))
        context.scale(1 + speed / 32, 1)
        const glow = context.createRadialGradient(0, 0, 0, 0, 0, radius)
        glow.addColorStop(0, `rgba(255, 255, 255, ${alpha})`)
        glow.addColorStop(0.35, `rgba(255, 255, 255, ${alpha * 0.45})`)
        glow.addColorStop(1, 'rgba(255, 255, 255, 0)')
        context.fillStyle = glow
        context.beginPath()
        context.arc(0, 0, radius, 0, Math.PI * 2)
        context.fill()
        context.restore()
      }
    }

    resize()
    frame = requestAnimationFrame(draw)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('blur', leave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('blur', leave)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden className="cursor-glow" />
}
