"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  end,
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    countRef.current = 0
    const step = end / (duration * 60)

    const interval = setInterval(() => {
      countRef.current += step

      if (countRef.current >= end) {
        countRef.current = end
        clearInterval(interval)
      }

      setCount(Math.floor(countRef.current))
    }, 1000 / 60)

    return () => clearInterval(interval)
  }, [end, duration, inView])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
