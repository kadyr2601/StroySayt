"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProjectTeamProps {
  project: {
    title: string
  }
}

// Имитация данных о команде проекта
const teamMembers = [
  {
    name: "Александр Иванов",
    position: "Главный архитектор",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    bio: "Более 15 лет опыта в проектировании коммерческих зданий. Специализируется на современной архитектуре с интеграцией экологических решений.",
  },
  {
    name: "Елена Петрова",
    position: "Ведущий инженер-конструктор",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    bio: "Эксперт в области конструктивных решений для высотных зданий. Разработала инновационные подходы к сейсмоустойчивости конструкций.",
  },
  {
    name: "Михаил Сидоров",
    position: "Руководитель проекта",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    bio: "Сертифицированный проектный менеджер с опытом управления масштабными строительными проектами в России и за рубежом.",
  },
  {
    name: "Анна Козлова",
    position: "Дизайнер интерьеров",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    bio: "Создает функциональные и эстетичные интерьерные решения для коммерческих пространств с учетом современных тенденций и потребностей клиентов.",
  },
]

export default function ProjectTeam({ project }: ProjectTeamProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Архитектурные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Сетка */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern-team" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-team)" />
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
                <span className="text-sm font-medium uppercase tracking-wide">Команда проекта</span>
                <div className="h-px w-8 bg-blue-600"></div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ключевые специалисты</h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Познакомьтесь с командой профессионалов, которые работали над проектом {project.title} и воплотили его в
              реальность.
            </p>
          </div>

          {/* Команда проекта */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-[3/4] relative">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className={cn("object-cover transition-transform duration-500", "group-hover:scale-110")}
                    />
                  </div>

                  {/* Оверлей с социальными иконками */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    )}
                  >
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  {/* Архитектурные уголки */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                  <p className="text-slate-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
