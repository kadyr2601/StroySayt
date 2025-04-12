"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Maximize, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Данные для избранных проектов
const featuredProjects = [
  {
    id: 1,
    title: "Многофункциональный комплекс «Высота»",
    description: "Уникальный архитектурный проект, сочетающий офисные помещения, жилые апартаменты и общественные пространства в едином комплексе.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    achievements: [
      "Премия «Проект года 2023»",
      "Сертификат LEED Platinum",
      "Инновационные энергосберегающие технологии"
    ],
    stats: {
      площадь: "65,000 м²",
      этажность: "42 этажа",
      расположение: "Москва-Сити"
    },
    year: 2023
  },
  {
    id: 2,
    title: "Эко-квартал «Зеленая миля»",
    description: "Жилой квартал с интегрированной зеленой инфраструктурой, системами рециркуляции воды и энергоэффективными решениями.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    achievements: [
      "Международная награда за устойчивое развитие",
      "Самый экологичный проект года",
      "100% возобновляемые источники энергии"
    ],
    stats: {
      площадь: "120,000 м²",
      дома: "12 зданий",
      "зеленые зоны": "40% территории"
    },
    year: 2022
  },
  {
    id: 3,
    title: "Культурный центр «Горизонт»",
    description: "Современный центр искусств с концертными залами, выставочными пространствами и образовательными студиями.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    achievements: [
      "Архитектурная премия в категории «Культурные объекты»",
      "Идеальная акустика концертного зала",
      "Инновационные решения доступности для всех"
    ],
    stats: {
      площадь: "38,000 м²",
      вместимость: "3,000 человек",
      "выставочные площади": "5,000 м²"
    },
    year: 2023
  }
]

export default function ProjectsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoverProject, setHoverProject] = useState<number | null>(null)

  const handleProjectSelect = (index: number) => {
    setActiveIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Вертикальная линейка */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200"></div>
        <div className="absolute left-8 top-20 bottom-20 w-px">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="h-[10%] relative"
              style={{
                borderLeft: i % 5 === 0 ? "2px solid #3b82f6" : "1px solid #cbd5e1",
              }}
            >
              {i % 5 === 0 && (
                <div className="absolute left-2 top-0 transform -translate-y-1/2 text-xs text-slate-400">
                  {100 - i * 10}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Чертежные линии */}
        <div className="absolute top-20 left-20 bottom-20 right-20 border border-dashed border-slate-200"></div>

        {/* Координатные отметки */}
        <div className="absolute left-4 top-4 text-xs text-slate-400">0,0</div>
        <div className="absolute right-4 top-4 text-xs text-slate-400">1,0</div>
        <div className="absolute left-4 bottom-4 text-xs text-slate-400">0,1</div>
        <div className="absolute right-4 bottom-4 text-xs text-slate-400">1,1</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-3 py-1 border border-blue-500/50 rounded-sm text-blue-600 text-sm">
            <div className="flex items-center space-x-2">
              <span className="h-1 w-1 rounded-full bg-blue-600 animate-pulse"></span>
              <span>Наши избранные проекты</span>
              <span className="h-1 w-1 rounded-full bg-blue-600 animate-pulse"></span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Значимые архитектурные достижения</h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Представляем вам выдающиеся проекты, которые демонстрируют наш инновационный подход к архитектуре и
            строительству.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center"
        >
          {/* Список проектов */}
          <motion.div variants={itemVariants} className="space-y-4">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectSelect(index)}
                onMouseEnter={() => setHoverProject(index)}
                onMouseLeave={() => setHoverProject(null)}
                className={cn(
                  "relative p-6 rounded-sm cursor-pointer transition-all duration-300",
                  activeIndex === index
                    ? "bg-blue-50 border-l-4 border-blue-600"
                    : "bg-white hover:bg-slate-50 hover:shadow-md",
                )}
              >
                <div className="mb-2 flex justify-between items-start">
                  <h3
                    className={cn(
                      "text-lg font-bold transition-colors duration-300",
                      activeIndex === index ? "text-blue-600" : "text-slate-900",
                    )}
                  >
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-sm">
                    {project.year}
                  </span>
                </div>

                <p className="text-slate-600 text-sm">
                  {project.description.length > 100
                    ? `${project.description.substring(0, 100)}...`
                    : project.description}
                </p>

                {/* Индикатор активного проекта */}
                {activeIndex === index && (
                  <div
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-0 h-0 
                                border-t-8 border-t-transparent 
                                border-b-8 border-b-transparent 
                                border-l-8 border-l-blue-600"
                  ></div>
                )}

                {/* Архитектурные метки для активного или ховер проекта */}
                {(activeIndex === index || hoverProject === index) && (
                  <>
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-blue-500"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-blue-500"></div>
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-blue-500"></div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-blue-500"></div>
                  </>
                )}
              </div>
            ))}

            <div className="pt-4">
              <Button
                className="w-full bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 hover:border-blue-300"
                variant="outline"
              >
                <span>Смотреть все проекты</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Детальное представление выбранного проекта */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-white rounded-sm shadow-lg overflow-hidden">
              {/* Визуальное представление */}
              <div className="relative h-[450px] overflow-hidden group">
                <Image
                  src={featuredProjects[activeIndex].image || "/placeholder.svg"}
                  alt={featuredProjects[activeIndex].title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Затемнение и информационный оверлей */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-80"></div>

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{featuredProjects[activeIndex].title}</h3>

                  <p className="text-slate-200 mb-6">{featuredProjects[activeIndex].description}</p>

                  {/* Ключевые показатели проекта */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(featuredProjects[activeIndex].stats).map(([key, value]) => (
                      <div key={key} className="bg-white/10 backdrop-blur-sm p-3 rounded-sm text-center">
                        <p className="text-xs text-slate-300 uppercase">{key}</p>
                        <p className="text-lg font-bold text-white">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Подробнее о проекте
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Значок увеличения фото */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize className="h-5 w-5" />
                </div>

                {/* Достижения проекта */}
                <div className="absolute top-4 left-4 space-y-2">
                  {featuredProjects[activeIndex].achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 text-white text-sm rounded-sm max-w-[250px] flex items-center"
                    >
                      <div className="h-1.5 w-1.5 bg-white rounded-full mr-2"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>

              {/* Чертежные уголки вокруг изображения */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-500 opacity-50"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-blue-500 opacity-50"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-blue-500 opacity-50"></div>

              {/* Координатные линии чертежа */}
              <div className="absolute top-4 left-4 text-xs text-blue-500/70">A1</div>
              <div className="absolute top-4 right-4 text-xs text-blue-500/70">B1</div>
              <div className="absolute bottom-4 left-4 text-xs text-blue-500/70">A2</div>
              <div className="absolute bottom-4 right-4 text-xs text-blue-500/70">B2</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
