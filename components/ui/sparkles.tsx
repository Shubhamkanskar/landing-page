"use client"

import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: number
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 1000,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const particles = useRef<any[]>([])
  const animationRef = useRef<number | null>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return
    context.current = canvasRef.current.getContext("2d")

    const updateCanvasSize = () => {
      if (!canvasContainerRef.current || !canvasRef.current || !context.current) return

      const { width, height } = canvasContainerRef.current.getBoundingClientRect()
      canvasRef.current.width = width
      canvasRef.current.height = height

      particles.current = []
      initParticles(width, height)
    }

    const initParticles = (width: number, height: number) => {
      particles.current = []
      const particleCount = Math.min(Math.max(Math.floor((width * height) / 1000) * particleDensity, 100), 1000)

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const size = Math.random() * (maxSize - minSize) + minSize
        const opacity = Math.random()
        const fadeDirection = Math.random() > 0.5 ? 1 : -1

        particles.current.push({
          x,
          y,
          size,
          opacity,
          fadeDirection,
        })
      }
    }

    const drawParticles = () => {
      if (!context.current || !canvasRef.current) return

      context.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      context.current.fillStyle = background
      context.current.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)

      particles.current.forEach((particle) => {
        context.current!.globalAlpha = particle.opacity
        context.current!.fillStyle = particleColor
        context.current!.beginPath()
        context.current!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.current!.fill()

        // Update particle opacity
        particle.opacity += 0.01 * particle.fadeDirection * speed
        if (particle.opacity <= 0 || particle.opacity >= 1) {
          particle.fadeDirection *= -1
        }
      })

      animationRef.current = requestAnimationFrame(drawParticles)
    }

    updateCanvasSize()
    drawParticles()

    resizeObserverRef.current = new ResizeObserver(updateCanvasSize)
    if (canvasContainerRef.current) {
      resizeObserverRef.current.observe(canvasContainerRef.current)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (resizeObserverRef.current && canvasContainerRef.current) {
        resizeObserverRef.current.unobserve(canvasContainerRef.current)
      }
    }
  }, [background, maxSize, minSize, particleColor, particleDensity, speed])

  return (
    <div ref={canvasContainerRef} className={cn("h-full w-full", className)} id={id}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
