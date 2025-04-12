"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Анимированные архитектурные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Чертежные линии */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern
              id="blueprint-grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(0)"
            >
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
        </svg>

        {/* Угловые элементы */}
        <svg className="absolute top-0 left-0 w-64 h-64 text-blue-500/20" viewBox="0 0 100 100">
          <path d="M0,40 L0,0 L40,0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute top-0 right-0 w-64 h-64 text-blue-500/20" viewBox="0 0 100 100">
          <path d="M100,40 L100,0 L60,0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-64 h-64 text-blue-500/20" viewBox="0 0 100 100">
          <path d="M0,60 L0,100 L40,100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-blue-500/20" viewBox="0 0 100 100">
          <path d="M100,60 L100,100 L60,100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>

        {/* Плавающие элементы на фоне */}
        <div className="absolute w-full h-full">
          <motion.div
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/5 filter blur-xl"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 15, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-500/5 filter blur-xl"
          ></motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-6">
            <div className="h-px w-12 bg-blue-500 mx-auto mb-4"></div>
            <span className="text-blue-400 text-sm font-medium">Готовы начать проект?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Воплотим вашу архитектурную <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              идею в реальность
            </span>
          </h2>

          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Свяжитесь с нами, чтобы обсудить ваш проект. Наша команда экспертов готова предложить инновационные
            архитектурные решения, которые превзойдут ваши ожидания.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Phone className="mr-2 h-5 w-5" />
              Заказать звонок
            </Button>

            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-800/20">
              <FileText className="mr-2 h-5 w-5" />
              Скачать портфолио
            </Button>
          </div>

          {/* Архитектурный элемент разделителя */}
          <div className="mt-16 relative">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800 border border-blue-500 rotate-45"></div>
          </div>

          {/* Информация о контактах */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2">Москва</h3>
              <p className="text-blue-200 mb-4">ул. Архитектурная, д. 1</p>
              <p className="text-blue-300">+7 (495) 123-45-67</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2">Санкт-Петербург</h3>
              <p className="text-blue-200 mb-4">Проектный пр., д. 42</p>
              <p className="text-blue-300">+7 (812) 765-43-21</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-lg font-bold text-white mb-2">Казань</h3>
              <p className="text-blue-200 mb-4">ул. Строительная, д. 15</p>
              <p className="text-blue-300">+7 (843) 987-65-43</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
