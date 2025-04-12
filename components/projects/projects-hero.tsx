"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function ProjectsHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Три.js 3D сетка фона
  useEffect(() => {
    // Здесь был бы код для создания трехмерной сетки на заднем плане с помощью Three.js
    // Но для простоты мы будем использовать CSS-анимацию и SVG

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const blueprints = containerRef.current.querySelectorAll(".blueprint")
        blueprints.forEach((blueprint, index) => {
          const depth = index + 1
          const moveX = (x - rect.width / 2) / (80 * depth)
          const moveY = (y - rect.height / 2) / (80 * depth)

          // @ts-ignore
          blueprint.style.transform = `translate(${moveX}px, ${moveY}px)`
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <motion.div ref={containerRef} style={{ opacity }} className="relative h-screen overflow-hidden">
      {/* Основной фон - градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 z-0"></div>

      {/* Архитектурные чертежи/сетка на заднем плане */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 overflow-hidden">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-blue-300/10 relative">
              {i % 13 === 0 && (
                <div className="absolute h-px w-full bg-blue-400/30" style={{ top: `${Math.random() * 100}%` }}></div>
              )}
              {i % 17 === 0 && (
                <div className="absolute w-px h-full bg-blue-400/30" style={{ left: `${Math.random() * 100}%` }}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Плавающие архитектурные чертежи */}
      <div className="absolute inset-0 z-0">
        <div className="blueprint absolute top-1/4 left-1/4 w-64 h-64 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
            alt="Architectural blueprint"
            width={400}
            height={400}
            className="object-contain invert"
          />
        </div>
        <div className="blueprint absolute bottom-1/4 right-1/4 w-64 h-64 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
            alt="Architectural blueprint"
            width={400}
            height={400}
            className="object-contain invert"
          />
        </div>
        <div className="blueprint absolute top-1/3 right-1/3 w-48 h-48 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
            alt="Architectural blueprint"
            width={400}
            height={400}
            className="object-contain invert"
          />
        </div>
      </div>

      {/* Компас и измерительные линии */}
      <svg className="absolute left-10 bottom-10 h-32 w-32 text-blue-300/40 z-10" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.5" />
        <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <text x="53" y="15" fill="currentColor" fontSize="5">
          N
        </text>
        <text x="53" y="88" fill="currentColor" fontSize="5">
          S
        </text>
        <text x="88" y="53" fill="currentColor" fontSize="5">
          E
        </text>
        <text x="10" y="53" fill="currentColor" fontSize="5">
          W
        </text>
      </svg>

      {/* Градуированные линии по краям */}
      <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex-1 border-b border-blue-500/20 relative">
            <span className="absolute right-2 bottom-0 text-blue-400/60 text-xs">{i * 5}</span>
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-10 flex flex-col z-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex-1 border-b border-blue-500/20"></div>
        ))}
      </div>

      {/* Основное содержимое */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
        <motion.div style={{ y: y1 }}>
          <div className="inline-block mb-4 px-3 py-1 border border-blue-500/50 bg-blue-500/10 text-blue-300 text-sm">
            <div className="flex items-center space-x-2">
              <span className="h-1 w-1 rounded-full bg-blue-400 animate-pulse"></span>
              <span>Наши архитектурные реализации</span>
              <span className="h-1 w-1 rounded-full bg-blue-400 animate-pulse"></span>
            </div>
          </div>
        </motion.div>

        <motion.h1 style={{ y: y2 }} className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="relative inline-block">
            Портфолио <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">проектов</span>
            <div className="absolute -top-2 -left-4 w-8 h-8 border-t-2 border-l-2 border-blue-500/50"></div>
            <div className="absolute -bottom-2 -right-4 w-8 h-8 border-b-2 border-r-2 border-blue-500/50"></div>
          </span>
        </motion.h1>

        <motion.div style={{ y: y1 }} className="max-w-3xl">
          <p className="text-xl text-blue-100 mb-8">
            Коллекция наших лучших строительных и архитектурных работ, отражающих нашу приверженность инновациям,
            качеству и устойчивому развитию.
          </p>

          <div className="relative w-24 h-24 mx-auto">
            <svg className="absolute inset-0 text-blue-400/30 animate-slow-spin" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeDasharray="1,3" strokeWidth="1" />
            </svg>
            <svg
              className="absolute inset-0 rotate-45 text-blue-400/30 animate-slow-spin-reverse"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeDasharray="1,5" strokeWidth="1" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-blue-400 transform rotate-45"></div>
            </div>
          </div>
        </motion.div>

        {/* Анимированная прокрутка вниз */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <p className="text-blue-300 text-sm mb-2">Прокрутите вниз</p>
          <div className="w-5 h-9 border border-blue-500/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-1 bg-blue-400 rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Интерактивные дуги в углах */}
      <svg className="absolute top-0 left-0 w-32 h-32 text-blue-500/30" viewBox="0 0 100 100">
        <path
          d="M0,0 L80,0 C90,0 100,10 100,20 L100,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
      </svg>

      <svg className="absolute top-0 right-0 w-32 h-32 text-blue-500/30" viewBox="0 0 100 100">
        <path
          d="M100,0 L20,0 C10,0 0,10 0,20 L0,100"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
      </svg>

      <svg className="absolute bottom-0 left-0 w-32 h-32 text-blue-500/30" viewBox="0 0 100 100">
        <path
          d="M0,100 L0,20 C0,10 10,0 20,0 L100,0"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
      </svg>

      <svg className="absolute bottom-0 right-0 w-32 h-32 text-blue-500/30" viewBox="0 0 100 100">
        <path
          d="M100,100 L100,20 C100,10 90,0 80,0 L0,0"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
      </svg>

      {/* Пользовательские стили */}
      <style jsx global>{`
        @keyframes slow-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes slow-spin-reverse {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(-315deg); }
        }
        
        .animate-slow-spin {
          animation: slow-spin 20s linear infinite;
        }
        
        .animate-slow-spin-reverse {
          animation: slow-spin-reverse 30s linear infinite;
        }
        
        .grid-cols-20 {
          grid-template-columns: repeat(20, minmax(0, 1fr));
        }
        
        .grid-rows-20 {
          grid-template-rows: repeat(20, minmax(0, 1fr));
        }
      `}</style>
    </motion.div>
  )
}
