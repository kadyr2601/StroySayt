"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MapPin, Calendar, Ruler, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectDetailHeroProps {
  project: {
    title: string
    category: string
    location: string
    year: number
    client: string
    area: string
    description: string
  }
}

export default function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Параллакс эффекты при скролле
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  // Плавающие архитектурные элементы
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      const elements = document.querySelectorAll(".floating-element")
      elements.forEach((el, index) => {
        const depth = (index % 3) + 1
        const moveX = (x - 0.5) * depth * 20
        const moveY = (y - 0.5) * depth * 20

        // @ts-ignore
        el.style.transform = `translate(${moveX}px, ${moveY}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Фоновое изображение проекта с эффектом параллакса */}
      <motion.div className="absolute inset-0 z-0" style={{ scale, opacity }}>
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        {/* Затемняющий градиент */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90 z-10"></div>
      </motion.div>

      {/* Плавающие архитектурные элементы */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="floating-element absolute top-[20%] left-[20%] w-32 h-32 border border-blue-500/20 opacity-30"></div>
        <div className="floating-element absolute top-[40%] right-[30%] w-48 h-48 border border-blue-500/10 opacity-20"></div>
        <div className="floating-element absolute bottom-[30%] left-[40%] w-24 h-24 border border-blue-500/30 opacity-20"></div>

        {/* Архитектурная сетка */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Архитектурные измерительные линии */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-blue-500/20"></div>
        <div className="absolute right-8 top-0 bottom-0 w-px bg-blue-500/20"></div>
        <div className="absolute top-8 left-0 right-0 h-px bg-blue-500/20"></div>
        <div className="absolute bottom-8 left-0 right-0 h-px bg-blue-500/20"></div>
      </div>

      {/* Основной контент */}
      <div className="container relative h-full flex flex-col justify-center items-start mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <motion.div style={{ y }} className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500/20 backdrop-blur-sm border border-blue-500/40 rounded-sm">
              {project.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">{project.title}</h1>

          <p className="text-xl text-blue-100 mb-8 leading-relaxed">{project.description}</p>

          {/* Ключевые характеристики проекта */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-4 rounded-sm">
              <div className="flex items-center mb-2 text-blue-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Местоположение</span>
              </div>
              <p className="text-white font-medium">{project.location}</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-4 rounded-sm">
              <div className="flex items-center mb-2 text-blue-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Год завершения</span>
              </div>
              <p className="text-white font-medium">{project.year}</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-4 rounded-sm">
              <div className="flex items-center mb-2 text-blue-400">
                <Ruler className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Площадь</span>
              </div>
              <p className="text-white font-medium">{project.area}</p>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 p-4 rounded-sm">
              <div className="flex items-center mb-2 text-blue-400">
                <Users className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Заказчик</span>
              </div>
              <p className="text-white font-medium">{project.client}</p>
            </div>
          </div>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
            Просмотреть галерею
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Декоративные элементы нижнего края */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900 to-transparent z-20"></div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <p className="text-blue-300 text-sm mb-2">Прокрутите вниз для подробностей</p>
          <div className="w-5 h-9 border border-blue-500/50 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-1 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
