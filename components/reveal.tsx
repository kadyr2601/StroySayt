"use client"

import { useEffect, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

interface RevealProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function Reveal({ children, delay = 0, duration = 0.5, direction = "up" }: RevealProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Set initial and animate values based on direction
  let initial = { opacity: 0 }
  if (direction === "up") initial = { ...initial, y: 50 }
  if (direction === "down") initial = { ...initial, y: -50 }
  if (direction === "left") initial = { ...initial, x: 50 }
  if (direction === "right") initial = { ...initial, x: -50 }

  let animate = { opacity: 1 }
  if (direction === "up" || direction === "down") animate = { ...animate, y: 0 }
  if (direction === "left" || direction === "right") animate = { ...animate, x: 0 }

  useEffect(() => {
    if (inView) {
      controls.start(animate)
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} initial={initial} animate={controls} transition={{ duration, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  )
}
