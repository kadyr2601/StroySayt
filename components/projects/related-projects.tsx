"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface RelatedProjectsProps {
  currentProjectId: string
}

// Имитация данных о похожих проектах
const relatedProjects = [
  {
    id: "2",
    slug: "residential-complex-park-view",
    title: "Жилой комплекс «Парк Вью»",
    category: "Жилая недвижимость",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    description: "Современный жилой комплекс с панорамными видами на парк и развитой инфраструктурой.",
  },
  {
    id: "3",
    slug: "shopping-mall-galactic",
    title: "Торговый центр «Галактика»",
    category: "Коммерческая недвижимость",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    description: "Многофункциональный торговый центр с уникальной архитектурой и инновационными решениями.",
  },
  {
    id: "4",
    slug: "business-center-crystal",
    title: "Бизнес-центр «Кристалл»",
    category: "Коммерческая недвижимость",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    description: "Офисное здание премиум-класса с современным дизайном и энергоэффективными технологиями.",
  },
]

export default function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  // Фильтруем проекты, исключая текущий
  const filteredProjects = relatedProjects.filter((project) => project.id !== currentProjectId)

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Архитектурные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Сетка */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern-related" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-related)" />
          </svg>
        </div>

        {/* Архитектурные линии */}
        <div className="absolute top-0 left-20 bottom-0 border-l border-dashed border-slate-200"></div>
        <div className="absolute top-0 right-20 bottom-0 border-l border-dashed border-slate-200"></div>
        <div className="absolute left-0 top-20 right-0 border-t border-dashed border-slate-200"></div>
        <div className="absolute left-0 bottom-20 right-0 border-t border-dashed border-slate-200"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="h-px w-8 bg-blue-600"></div>
                <span className="text-sm font-medium uppercase tracking-wide">Другие проекты</span>
                <div className="h-px w-8 bg-blue-600"></div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Похожие проекты</h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Исследуйте другие наши проекты, которые могут вас заинтересовать.
            </p>
          </div>

          {/* Похожие проекты */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.slug}`} className="block">
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-md mb-4">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Оверлей при наведении */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Категория */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Архитектурные уголки */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
                    <span>Подробнее</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Ссылка на все проекты */}
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
            >
              Смотреть все проекты
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
