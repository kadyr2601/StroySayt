"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Ruler, Calendar, Users, MapPin, Building, Landmark, Lightbulb } from "lucide-react"

interface ProjectSpecsProps {
  project: {
    title: string
    location: string
    year: number
    client: string
    area: string
  }
}

export default function ProjectSpecs({ project }: ProjectSpecsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  // Дополнительные технические характеристики (в реальном проекте могут приходить из API)
  const technicalSpecs = [
    {
      icon: <Building className="h-5 w-5" />,
      title: "Тип здания",
      value: "Офисное здание класса A+",
    },
    {
      icon: <Landmark className="h-5 w-5" />,
      title: "Конструктивная система",
      value: "Монолитный железобетонный каркас",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Энергоэффективность",
      value: "Класс A (высокая)",
    },
  ]

  // Все спецификации проекта
  const allSpecs = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Местоположение",
      value: project.location,
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Год завершения",
      value: project.year.toString(),
    },
    {
      icon: <Ruler className="h-5 w-5" />,
      title: "Площадь",
      value: project.area,
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Заказчик",
      value: project.client,
    },
    ...technicalSpecs,
  ]

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Архитектурные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Сетка */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern-specs" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-specs)" />
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
                <span className="text-sm font-medium uppercase tracking-wide">Технические характеристики</span>
                <div className="h-px w-8 bg-blue-600"></div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Спецификации проекта</h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Детальная информация о технических характеристиках и параметрах проекта {project.title}.
            </p>
          </div>

          {/* Спецификации в виде карточек */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-slate-200 relative group hover:border-blue-500 transition-colors duration-300"
              >
                {/* Архитектурные уголки */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-slate-200 group-hover:border-blue-500 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-200 group-hover:border-blue-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-200 group-hover:border-blue-500 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-slate-200 group-hover:border-blue-500 transition-colors duration-300"></div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    {spec.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-slate-900 mb-1">{spec.title}</h3>
                    <p className="text-slate-600">{spec.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Технический чертеж или схема */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-slate-200 relative">
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-blue-500"></div>
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-blue-500"></div>
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-blue-500"></div>

            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Технические параметры проекта</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-slate-900 mb-2">Конструкции</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Фундамент: монолитная плита</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Каркас: железобетонный</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Перекрытия: монолитные</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-slate-900 mb-2">Инженерные системы</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Вентиляция: приточно-вытяжная</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Отопление: центральное</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Электроснабжение: 1 категория</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <h4 className="text-lg font-medium text-slate-900 mb-2">Отделка</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Фасад: вентилируемый</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Остекление: двухкамерные стеклопакеты</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    <span>Внутренняя отделка: премиум-класс</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
