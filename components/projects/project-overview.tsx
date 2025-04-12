"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface ProjectOverviewProps {
  project: {
    title: string
    description: string
    features: string[]
  }
}

export default function ProjectOverview({ project }: ProjectOverviewProps) {
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
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        {/* Архитектурные линии */}
        <div className="absolute top-0 left-20 bottom-0 border-l border-dashed border-slate-200"></div>
        <div className="absolute top-0 right-20 bottom-0 border-l border-dashed border-slate-200"></div>
        <div className="absolute left-0 top-20 right-0 border-t border-dashed border-slate-200"></div>
        <div className="absolute left-0 bottom-20 right-0 border-t border-dashed border-slate-200"></div>

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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="h-px w-8 bg-blue-600"></div>
                <span className="text-sm font-medium uppercase tracking-wide">Обзор проекта</span>
                <div className="h-px w-8 bg-blue-600"></div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">О проекте</h2>

            <p className="text-lg text-slate-600">{project.description}</p>
          </div>

          <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 relative">
            {/* Архитектурные уголки */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-blue-500"></div>
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-blue-500"></div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-blue-500"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-blue-500"></div>

            <h3 className="text-xl font-bold text-slate-900 mb-6">Ключевые особенности проекта</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-3 text-slate-700">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
