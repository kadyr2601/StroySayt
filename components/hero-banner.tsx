"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const { scrollY } = useScroll()
  const [isLoaded, setIsLoaded] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Parallax effect values
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      }

      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll(".mouse-move")
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const moveX = (e.clientX - centerX) / 25
        const moveY = (e.clientY - centerY) / 25

        elements.forEach((el) => {
          const depth = Number.parseFloat(el.getAttribute("data-depth") || "1")
          const targetEl = el as HTMLElement
          targetEl.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    setIsMounted(true)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-b from-black via-slate-900 to-black"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-20">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border border-blue-500/30"></div>
          ))}
        </div>

        {/* Animated gradient blobs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/20 mix-blend-screen filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-purple-500/20 mix-blend-screen filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 rounded-full bg-yellow-500/10 mix-blend-screen filter blur-[80px] animate-blob animation-delay-4000"></div>

        {/* Animated lines */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
              style={{
                top: `${20 * (i + 1)}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.5}s`,
                animation: "scanLine 5s linear infinite",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* 3D Construction elements with parallax */}
      <motion.div
        className="absolute right-10 bottom-10 w-1/3 h-1/2 opacity-70 mouse-move hidden lg:block"
        data-depth="2"
        style={{ y: y1 }}
      >
        <Image src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop" alt="Дубай горизонт" fill className="object-contain" />
      </motion.div>

      <motion.div
        className="absolute left-10 top-1/4 w-1/4 h-1/3 opacity-50 mouse-move hidden lg:block"
        data-depth="1.5"
        style={{ y: y2 }}
      >
        <Image src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" alt="Бурдж-Халифа" fill className="object-contain" />
      </motion.div>

      {/* Main content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <AnimatePresence>
          {isMounted && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ opacity }}
                className="max-w-4xl mx-auto text-center lg:ml-0 lg:text-left lg:max-w-2xl"
              >
                <motion.div className="inline-block mb-4 mouse-move" data-depth="0.5">
                  <span className="px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-medium">
                    Инновационное строительство
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="block perspective-text">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                      Строим
                    </span>
                    <span className="block">Будущее</span>
                  </span>
                </motion.h1>

                <motion.div
                  className="h-1 w-40 mx-auto lg:mx-0 bg-gradient-to-r from-blue-500 to-purple-500 mb-8"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 160, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                ></motion.div>

                <motion.p
                  className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto lg:mx-0 lg:max-w-xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Передовые технологии и инновационные решения для создания архитектурных шедевров, которые определяют
                  облик городов будущего.
                </motion.p>

                <motion.div
                  className="flex flex-wrap justify-center lg:justify-start gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none relative overflow-hidden group"
                  >
                    Начать проект
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </Button>

                  <Button
                      size="lg"
                      variant="outline"
                      className="text-white border-blue-500/50 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-500 backdrop-blur-sm"
                  >
                    Наши работы
                  </Button>
                </motion.div>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                style={{ opacity }}
              >
                <p className="text-sm mb-2 text-blue-300">Прокрутите вниз</p>
                <div className="animate-bounce">
                  <ChevronDown className="h-6 w-6 text-blue-400" />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Overlay with diagonal split effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-70"></div>
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-70"></div>
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-70"></div>

        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(59,130,246,0.1)_45%,rgba(147,51,234,0.1)_55%,transparent_60%)] z-10"></div>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes blob {
          0% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .perspective-text {
          perspective: 1000px;
        }
        
        .perspective-text span {
          display: block;
          transform-style: preserve-3d;
          transition: transform 0.5s;
        }
        
        .perspective-text:hover span:first-child {
          transform: rotateX(15deg);
        }
        
        .perspective-text:hover span:last-child {
          transform: rotateX(-15deg);
        }
      `}</style>
    </section>
  )
}
