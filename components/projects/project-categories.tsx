"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Building2, Home, School, Building, HospitalIcon as HospitalSquare, Factory, ArmchairIcon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const categories = [
  {
    id: "commercial",
    name: "Коммерческое строительство",
    icon: <Building2 className="h-6 w-6" />,
    count: 24,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "from-blue-500 to-blue-600",
    description: "Офисные здания, торговые центры и бизнес-комплексы",
  },
  {
    id: "residential",
    name: "Жилое строительство",
    icon: <Home className="h-6 w-6" />,
    count: 36,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "from-green-500 to-green-600",
    description: "Жилые комплексы, индивидуальные дома и таунхаусы",
  },
  {
    id: "educational",
    name: "Образовательные учреждения",
    icon: <School className="h-6 w-6" />,
    count: 12,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "from-yellow-500 to-yellow-600",
    description: "Школы, университеты и исследовательские центры",
  },
  {
    id: "hospitality",
    name: "Гостиничный бизнес",
    icon: <Building className="h-6 w-6" />,
    count: 18,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "from-purple-500 to-purple-600",
    description: "Отели, курорты и объекты отдыха",
  },
  {
    id: "healthcare",
    name: "Здравоохранение",
    icon: <HospitalSquare className="h-6 w-6" />,
    count: 9,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "from-red-500 to-red-600",
    description: "Больницы, клиники и медицинские центры",
  },
  {
    id: "industrial",
    name: "Промышленное строительство",
    icon: <Factory className="h-6 w-6" />,
    count: 15,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "from-gray-600 to-gray-700",
    description: "Заводы, склады и логистические центры",
  },
  {
    id: "cultural",
    name: "Культурные объекты",
    icon: <ArmchairIcon className="h-6 w-6" />,
    count: 7,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "from-amber-500 to-amber-600",
    description: "Музеи, театры и культурные центры",
  },
]

export default function ProjectCategories() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.2 })

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const handleCategoryLeave = () => {
    setActiveCategory(null)
  }

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Декоративные архитектурные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Сетка с точками */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 20 }).map((_, row) => (
            <div
              key={`row-${row}`}
              className="absolute h-[2px]"
              style={{ top: `${5 * (row + 1)}%`, left: 0, right: 0 }}
            >
              {Array.from({ length: 40 }).map((_, col) => (
                <div
                  key={`dot-${row}-${col}`}
                  className="absolute h-[2px] w-[2px] rounded-full bg-blue-800"
                  style={{ left: `${2.5 * (col + 1)}%` }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Чертежные линии */}
        <div className="absolute top-0 left-20 bottom-0 border-l border-dashed border-blue-200/20"></div>
        <div className="absolute top-0 right-20 bottom-0 border-l border-dashed border-blue-200/20"></div>
        <div className="absolute left-0 top-20 right-0 border-t border-dashed border-blue-200/20"></div>
        <div className="absolute left-0 bottom-20 right-0 border-t border-dashed border-blue-200/20"></div>

        {/* Угловые метки */}
        <svg className="absolute top-10 left-10 h-16 w-16 text-blue-300/20" viewBox="0 0 100 100">
          <path d="M0,20 L0,0 L20,0" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute top-10 right-10 h-16 w-16 text-blue-300/20" viewBox="0 0 100 100">
          <path d="M100,20 L100,0 L80,0" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-10 left-10 h-16 w-16 text-blue-300/20" viewBox="0 0 100 100">
          <path d="M0,80 L0,100 L20,100" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg className="absolute bottom-10 right-10 h-16 w-16 text-blue-300/20" viewBox="0 0 100 100">
          <path d="M100,80 L100,100 L80,100" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <div className="h-px w-8 bg-blue-600"></div>
              <span className="text-sm font-medium uppercase tracking-wide">Исследуйте наши работы</span>
              <div className="h-px w-8 bg-blue-600"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Категории проектов</h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Наша компания специализируется на различных типах строительства и архитектурных решений. Выберите категорию,
            чтобы увидеть наши проекты.
          </p>
        </motion.div>

        <div className="relative">
          {/* Визуализация выбранной категории */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {activeCategory && (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.15, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-[500px] h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={categories.find((c) => c.id === activeCategory)?.image || ""}
                    alt={categories.find((c) => c.id === activeCategory)?.name || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Сетка с категориями */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                onMouseEnter={() => handleCategoryHover(category.id)}
                onMouseLeave={handleCategoryLeave}
                className={cn("relative group", activeCategory && activeCategory !== category.id ? "opacity-70" : "")}
              >
                <div className="relative p-6 bg-white rounded-lg border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-300 h-full">
                  {/* Градиентный фон при наведении */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300",
                      category.color,
                    )}
                  ></div>

                  {/* Чертежные элементы */}
                  <div className="absolute top-3 right-3 h-8 w-8 border-t border-r border-slate-200 group-hover:border-blue-300 transition-colors duration-300"></div>
                  <div className="absolute bottom-3 left-3 h-8 w-8 border-b border-l border-slate-200 group-hover:border-blue-300 transition-colors duration-300"></div>

                  <div className="flex flex-col items-center text-center h-full">
                    <div
                      className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 bg-slate-100 group-hover:bg-gradient-to-br text-slate-600 group-hover:text-white",
                        category.color,
                      )}
                    >
                      {category.icon}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                      {category.name}
                    </h3>

                    <p className="text-slate-600 text-sm mb-4 flex-grow">{category.description}</p>

                    <div className="text-blue-600 font-medium">{category.count} проектов</div>

                    {/* Маленькая стрелка */}
                    <div className="absolute bottom-6 right-6 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600">
                        <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
