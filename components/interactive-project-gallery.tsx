"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, ExternalLink, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

// Проекты для галереи
const projects = [
  {
    id: 1,
    title: "Современный жилой комплекс",
    category: "Жилая недвижимость",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    description: "Инновационный жилой комплекс с уникальной архитектурой и современными технологиями",
    stats: { площадь: "15,000 м²", квартиры: "120", этажи: "12" },
  },
  {
    id: 2,
    title: "Бизнес-центр «Горизонт»",
    category: "Коммерческая недвижимость",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
    description: "Престижный бизнес-центр класса А с панорамным остеклением и зелеными террасами",
    stats: { площадь: "25,000 м²", офисы: "200+", этажи: "18" },
  },
  {
    id: 3,
    title: "Торгово-развлекательный центр",
    category: "Коммерческая недвижимость",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    description: "Многофункциональный комплекс с торговыми площадями и развлекательными зонами",
    stats: { площадь: "45,000 м²", магазины: "150", посетители: "10,000/день" },
  },
  {
    id: 4,
    title: "Спортивный комплекс «Олимп»",
    category: "Спортивные объекты",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
    description: "Современный спортивный комплекс с бассейном, тренажерными залами и спортивными площадками",
    stats: { площадь: "12,000 м²", залы: "8", бассейны: "2" },
  },
  {
    id: 5,
    title: "Гостиничный комплекс «Панорама»",
    category: "Гостиничный бизнес",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    description: "Пятизвездочный отель с панорамными видами и премиальным сервисом",
    stats: { площадь: "18,000 м²", номера: "150", рестораны: "3" },
  },
]

export default function InteractiveProjectGallery() {
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const galleryRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(galleryRef, { once: false, amount: 0.2 })
  const controls = useAnimation()
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect()
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900 relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Сетка */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-10">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border border-blue-500/30"></div>
          ))}
        </div>

        {/* Градиентные пятна */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-500/10 mix-blend-screen filter blur-[80px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-purple-500/10 mix-blend-screen filter blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши знаковые проекты</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Погрузитесь в мир наших архитектурных шедевров, которые меняют облик современных городов
          </p>
        </motion.div>

        <div ref={galleryRef} className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
                style={{
                  transform:
                    !isMobile && activeProject === index
                      ? `perspective(1000px) rotateX(${mousePosition.y * -5}deg) rotateY(${mousePosition.x * 5}deg) scale(1.05)`
                      : "perspective(1000px) rotateX(0) rotateY(0) scale(1)",
                  transition: "transform 0.3s ease",
                }}
              >
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Градиентный оверлей */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Категория */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Кнопка подробнее */}
                  <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button size="sm" className="bg-white text-black hover:bg-blue-100 rounded-full w-10 h-10 p-0">
                      <Plus className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-slate-800/80 backdrop-blur-sm rounded-lg transform -translate-y-8 group-hover:-translate-y-16 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-blue-100 text-sm mb-4 line-clamp-2">{project.description}</p>

                  {/* Статистика проекта */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-xs text-blue-300 uppercase">{key}</p>
                        <p className="text-sm font-bold text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full text-blue-300 hover:text-white hover:bg-blue-900/50">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Декоративные элементы */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 border border-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Кнопка "Все проекты" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-none relative overflow-hidden group"
            >
              Смотреть все проекты
              <ExternalLink className="ml-2 h-4 w-4" />
              <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
