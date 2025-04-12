"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Имитация данных проектов
const projects = [
  {
    id: 1,
    title: "Небоскреб «Меридиан»",
    category: "commercial",
    tags: ["офис", "небоскреб", "стекло"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2023,
    location: "Москва",
  },
  {
    id: 2,
    title: "Жилой комплекс «Парковый»",
    category: "residential",
    tags: ["жилье", "эко", "парк"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2022,
    location: "Санкт-Петербург",
  },
  {
    id: 3,
    title: "Торговый центр «Галактика»",
    category: "commercial",
    tags: ["торговля", "развлечения", "фуд-корт"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2021,
    location: "Екатеринбург",
  },
  {
    id: 4,
    title: "Школа искусств",
    category: "educational",
    tags: ["образование", "искусство", "современный"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2023,
    location: "Казань",
  },
  {
    id: 5,
    title: "Отель «Приморский»",
    category: "hospitality",
    tags: ["отель", "люкс", "море"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2022,
    location: "Сочи",
  },
  {
    id: 6,
    title: "Медицинский центр",
    category: "healthcare",
    tags: ["здоровье", "клиника", "современный"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2021,
    location: "Новосибирск",
  },
  {
    id: 7,
    title: "Завод микроэлектроники",
    category: "industrial",
    tags: ["производство", "технологии", "автоматизация"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2023,
    location: "Зеленоград",
  },
  {
    id: 8,
    title: "Музей современного искусства",
    category: "cultural",
    tags: ["искусство", "выставка", "культура"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2022,
    location: "Москва",
  },
  {
    id: 9,
    title: "Жилой квартал «Весенний»",
    category: "residential",
    tags: ["жилье", "квартал", "семейный"],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    year: 2021,
    location: "Краснодар",
  },
]

// Фильтры для проектов
const filters = [
  { id: "all", name: "Все проекты" },
  { id: "commercial", name: "Коммерческие" },
  { id: "residential", name: "Жилые" },
  { id: "educational", name: "Образовательные" },
  { id: "hospitality", name: "Гостиничные" },
  { id: "healthcare", name: "Медицинские" },
  { id: "industrial", name: "Промышленные" },
  { id: "cultural", name: "Культурные" },
]

export default function ProjectFilterGallery() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [visibleProjects, setVisibleProjects] = useState(6)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  // Обработка изменения фильтра
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === activeFilter))
    }
    setVisibleProjects(6) // Сбрасываем количество видимых проектов при изменении фильтра
  }, [activeFilter])

  // Загрузить больше проектов
  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length))
  }

  // Выбор проекта для детального просмотра
  const handleProjectClick = (projectId: number) => {
    setSelectedProject(selectedProject === projectId ? null : projectId)
  }

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
    <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Архитектурные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Архитектурные линии */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>

        {/* Координатная сетка на фоне */}
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Архитектурные метки */}
        <div className="absolute top-10 left-10 h-20 w-20 border-t border-l border-blue-300/30"></div>
        <div className="absolute top-10 right-10 h-20 w-20 border-t border-r border-blue-300/30"></div>
        <div className="absolute bottom-10 left-10 h-20 w-20 border-b border-l border-blue-300/30"></div>
        <div className="absolute bottom-10 right-10 h-20 w-20 border-b border-r border-blue-300/30"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Фильтры проектов */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center mb-12 gap-3"
        >
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                "rounded-sm border transition-all duration-300",
                activeFilter === filter.id
                  ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                  : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-blue-600",
              )}
              size="sm"
            >
              {filter.name}
            </Button>
          ))}
        </motion.div>

        {/* Проекты */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={cn(
                  "group cursor-pointer relative",
                  selectedProject !== null && selectedProject !== project.id ? "opacity-50" : "",
                )}
                onClick={() => handleProjectClick(project.id)}
              >
                <div className="relative overflow-hidden bg-white rounded-sm shadow-md">
                  {/* Изображение проекта */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"}
                      alt={project.title}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-700 group-hover:scale-110",
                        selectedProject === project.id ? "scale-105" : "",
                      )}
                    />

                    {/* Оверлей при наведении */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        selectedProject === project.id ? "opacity-100" : "",
                      )}
                    ></div>

                    {/* Год и место */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium text-slate-900">
                      {project.year}
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium text-slate-900">
                      {project.location}
                    </div>

                    {/* Теги проекта */}
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Информация о проекте */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-600 text-sm">
                      Категория: {filters.find((f) => f.id === project.category)?.name}
                    </p>
                  </div>

                  {/* Чертежные уголки */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-blue-500/0 group-hover:border-blue-500/100 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-blue-500/0 group-hover:border-blue-500/100 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-blue-500/0 group-hover:border-blue-500/100 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-blue-500/0 group-hover:border-blue-500/100 transition-colors duration-300"></div>
                </div>

                {/* Развернутая информация о проекте при выборе */}
                <AnimatePresence>
                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="relative mt-2 bg-white p-6 shadow-lg border-l-4 border-blue-500"
                    >
                      <p className="text-slate-700 mb-4">
                        Подробная информация о проекте «{project.title}». Включает описание архитектурных решений,
                        примененных технологий и особенностей строительства.
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-slate-500">Год завершения:</p>
                          <p className="font-medium">{project.year}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Местоположение:</p>
                          <p className="font-medium">{project.location}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Категория:</p>
                          <p className="font-medium">{filters.find((f) => f.id === project.category)?.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Теги:</p>
                          <p className="font-medium">{project.tags.join(", ")}</p>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          Подробнее о проекте
                        </Button>
                      </div>

                      {/* Чертежный стиль */}
                      <div className="absolute top-0 left-0 h-6 w-6 border-t border-l border-blue-500/30"></div>
                      <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-blue-500/30"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Кнопка "Загрузить еще" */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button
              onClick={loadMoreProjects}
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 relative group"
              variant="outline"
            >
              <span>Показать больше проектов</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
