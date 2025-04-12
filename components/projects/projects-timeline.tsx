"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

// Данные для временной шкалы строительства
const timelineSteps = [
  {
    id: 1,
    title: "Проектирование",
    description: "Разработка архитектурных и инженерных решений, создание концепции и детальных чертежей",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "blue",
    duration: "2-6 месяцев",
    elements: [
      "Разработка концепции",
      "Архитектурное проектирование",
      "Инженерное проектирование",
      "Согласование документации",
    ],
  },
  {
    id: 2,
    title: "Подготовительные работы",
    description: "Подготовка строительной площадки, геодезические работы и создание инфраструктуры",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "amber",
    duration: "1-2 месяца",
    elements: [
      "Очистка участка",
      "Геодезическая разметка",
      "Устройство временных дорог",
      "Организация строительного городка",
    ],
  },
  {
    id: 3,
    title: "Фундаментные работы",
    description: "Закладка фундамента, который станет надежной основой для всей конструкции",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "green",
    duration: "2-3 месяца",
    elements: ["Земляные работы", "Устройство котлована", "Армирование фундамента", "Заливка бетона"],
  },
  {
    id: 4,
    title: "Возведение каркаса",
    description: "Строительство несущих конструкций и основных элементов здания",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "orange",
    duration: "3-8 месяцев",
    elements: ["Монтаж колонн и балок", "Возведение стен", "Установка перекрытий", "Монтаж кровли"],
  },
  {
    id: 5,
    title: "Инженерные системы",
    description: "Монтаж внутренних коммуникаций, обеспечивающих функциональность здания",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "purple",
    duration: "2-4 месяца",
    elements: [
      "Электроснабжение",
      "Водоснабжение и канализация",
      "Вентиляция и кондиционирование",
      "Слаботочные системы",
    ],
  },
  {
    id: 6,
    title: "Отделочные работы",
    description: "Внутренняя и наружная отделка для придания зданию завершенного вида",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "pink",
    duration: "2-5 месяцев",
    elements: ["Внутренняя отделка помещений", "Фасадные работы", "Установка окон и дверей", "Финишные покрытия"],
  },
  {
    id: 7,
    title: "Сдача объекта",
    description: "Финальная проверка, тестирование систем и ввод здания в эксплуатацию",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    color: "sky",
    duration: "1-2 месяца",
    elements: [
      "Финальная отделка",
      "Тестирование инженерных систем",
      "Приемка объекта",
      "Получение разрешения на ввод в эксплуатацию",
    ],
  },
]

// Цветовые схемы для разных этапов
const colorMap: Record<string, { light: string; medium: string; dark: string }> = {
  blue: { light: "bg-blue-100", medium: "bg-blue-500", dark: "bg-blue-700" },
  amber: { light: "bg-amber-100", medium: "bg-amber-500", dark: "bg-amber-700" },
  green: { light: "bg-green-100", medium: "bg-green-500", dark: "bg-green-700" },
  orange: { light: "bg-orange-100", medium: "bg-orange-500", dark: "bg-orange-700" },
  purple: { light: "bg-purple-100", medium: "bg-purple-500", dark: "bg-purple-700" },
  pink: { light: "bg-pink-100", medium: "bg-pink-500", dark: "bg-pink-700" },
  sky: { light: "bg-sky-100", medium: "bg-sky-500", dark: "bg-sky-700" },
}

export default function ProjectsTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Декоративные архитектурные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Сетка измерений */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-slate-400" style={{ top: `${10 * (i + 1)}%` }}>
              <div className="absolute -top-1 left-4 text-xs text-slate-500">{10 * (i + 1)}%</div>
            </div>
          ))}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="absolute h-full w-px bg-slate-400" style={{ left: `${10 * (i + 1)}%` }}>
              <div className="absolute -left-1 top-4 text-xs text-slate-500">{10 * (i + 1)}%</div>
            </div>
          ))}
        </div>

        {/* Большие чертежные углы на заднем плане */}
        <svg className="absolute top-0 left-0 w-64 h-64 text-slate-200" viewBox="0 0 100 100">
          <path d="M0,30 L0,0 L30,0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute top-0 right-0 w-64 h-64 text-slate-200" viewBox="0 0 100 100">
          <path d="M100,30 L100,0 L70,0" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-64 h-64 text-slate-200" viewBox="0 0 100 100">
          <path d="M0,70 L0,100 L30,100" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-64 h-64 text-slate-200" viewBox="0 0 100 100">
          <path d="M100,70 L100,100 L70,100" fill="none" stroke="currentColor" strokeWidth="1" />
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
            <div className="relative px-3 py-1 border border-dashed border-slate-300 text-slate-700 text-sm">
              <span>Строительный процесс</span>
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-slate-300 rotate-45"></div>
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white border border-slate-300 rotate-45"></div>
              <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white border border-slate-300 rotate-45"></div>
              <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-2 h-2 bg-white border border-slate-300 rotate-45"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">От концепции до реализации</h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
            Познакомьтесь с процессом строительства, который мы применяем к каждому проекту, обеспечивая качество,
            эффективность и соблюдение сроков.
          </p>

          {/* Линия прогресса с движущимся индикатором */}
          <div className="relative h-2 w-full max-w-md mx-auto bg-slate-200 rounded-full mb-12">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full"
              style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            ></motion.div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-between px-1">
              {timelineSteps.map((_, index) => (
                <div
                  key={index}
                  className="relative h-full"
                  style={{ width: index === 0 || index === timelineSteps.length - 1 ? "0px" : "2px" }}
                >
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white z-10 ${
                      index === 0 ? "bg-blue-500" : "bg-slate-300"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Шаги процесса строительства */}
        <div className="space-y-24 lg:space-y-36">
          {timelineSteps.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
              isLast={index === timelineSteps.length - 1}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

interface TimelineStepProps {
  step: (typeof timelineSteps)[0]
  index: number
  isLast: boolean
  isFirst: boolean
}

function TimelineStep({ step, index, isLast, isFirst }: TimelineStepProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const isEven = index % 2 === 0
  const colorClasses = colorMap[step.color] || colorMap.blue

  return (
    <div ref={ref} className="relative">
      {/* Соединяющая линия между шагами */}
      {!isLast && (
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0.5 h-24 bg-gradient-to-b from-slate-300 to-transparent z-0"></div>
      )}

      {/* Номер шага */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-12 z-10">
        <div
          className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white",
            colorClasses.medium,
          )}
        >
          {step.id}
        </div>
      </div>

      {/* Контент шага */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn("grid lg:grid-cols-2 gap-8 relative")}
      >
        {/* Изображение */}
        <div className={cn("order-1", isEven ? "lg:order-1" : "lg:order-2")}>
          <div className="relative">
            <div className={cn("absolute -inset-4 rounded-lg opacity-10", colorClasses.light)}></div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <Image
                src={step.image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"}
                alt={step.title}
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />

              {/* Продолжительность этапа */}
              <div
                className={cn(
                  "absolute top-4 right-4 px-3 py-1 text-sm font-medium text-white rounded-sm",
                  colorClasses.medium,
                )}
              >
                {step.duration}
              </div>

              {/* Архитектурные линии на фото */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-white/30"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/30"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>
            </div>
          </div>
        </div>

        {/* Текстовое описание */}
        <div className={cn("order-2", isEven ? "lg:order-2" : "lg:order-1")}>
          <div className="relative">
            {/* Чертежные элементы */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t border-l border-slate-300"></div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b border-r border-slate-300"></div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className={cn("text-2xl font-bold mb-4", `text-${step.color}-600`)}>{step.title}</h3>

              <p className="text-slate-600 mb-6">{step.description}</p>

              <div className="space-y-3">
                {step.elements.map((element, i) => (
                  <div key={i} className="flex items-center">
                    <div className={cn("w-3 h-3 rounded-sm mr-3", colorClasses.medium)}></div>
                    <span className="text-slate-700">{element}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
