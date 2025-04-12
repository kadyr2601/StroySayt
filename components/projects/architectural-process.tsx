"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ArrowRight, ArrowLeft, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Данные для архитектурного процесса
const processSteps = [
  {
    id: 1,
    title: "Концептуальное проектирование",
    description: "Создание первоначальных эскизов и концепций на основе потребностей и видения клиента.",
    details: [
      "Определение целей и требований проекта",
      "Анализ места и контекста",
      "Разработка концептуальных эскизов",
      "Создание 3D-визуализаций",
      "Оценка технической и финансовой выполнимости",
    ],
  },
  {
    id: 2,
    title: "Рабочее проектирование",
    description: "Разработка детальных чертежей, спецификаций и технической документации для строительства.",
    details: [
      "Создание детальных архитектурных чертежей",
      "Разработка конструктивных решений",
      "Проектирование инженерных систем",
      "Выбор материалов и технологий",
      "Составление спецификаций и ведомостей",
    ],
  },
  {
    id: 3,
    title: "Согласование и экспертиза",
    description: "Получение необходимых разрешений и прохождение экспертизы проектной документации.",
    details: [
      "Подготовка документов для согласования",
      "Взаимодействие с надзорными органами",
      "Прохождение государственной экспертизы",
      "Внесение корректировок по результатам экспертизы",
      "Получение разрешения на строительство",
    ],
  },
  {
    id: 4,
    title: "Организация строительства",
    description: "Планирование и подготовка к строительным работам, выбор подрядчиков и поставщиков.",
    details: [
      "Разработка проекта организации строительства",
      "Составление графика работ",
      "Выбор генерального подрядчика",
      "Организация поставок материалов и оборудования",
      "Подготовка строительной площадки",
    ],
  },
  {
    id: 5,
    title: "Строительно-монтажные работы",
    description: "Непосредственно процесс строительства в соответствии с проектной документацией.",
    details: [
      "Земляные работы и устройство фундамента",
      "Возведение несущих конструкций",
      "Монтаж инженерных систем",
      "Отделочные работы",
      "Благоустройство территории",
    ],
  },
  {
    id: 6,
    title: "Авторский надзор",
    description: "Контроль за соответствием строительства утвержденному проекту на всех этапах работ.",
    details: [
      "Регулярные проверки на строительной площадке",
      "Консультирование по техническим вопросам",
      "Контроль качества используемых материалов",
      "Внесение изменений в проектную документацию при необходимости",
      "Оформление журнала авторского надзора",
    ],
  },
  {
    id: 7,
    title: "Сдача объекта",
    description: "Итоговая проверка, тестирование систем и оформление документов для ввода в эксплуатацию.",
    details: [
      "Итоговая проверка всех систем и конструкций",
      "Устранение замечаний и недоделок",
      "Оформление исполнительной документации",
      "Получение заключения о соответствии (ЗОС)",
      "Получение разрешения на ввод в эксплуатацию",
    ],
  },
]

export default function ArchitecturalProcess() {
  const [currentStep, setCurrentStep] = useState(1)
  const [infoVisible, setInfoVisible] = useState<number | null>(null)

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, processSteps.length))
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const showInfo = (stepId: number) => {
    setInfoVisible(infoVisible === stepId ? null : stepId)
  }

  const activeStep = processSteps.find((step) => step.id === currentStep) || processSteps[0]

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Чертежная бумага и архитектурные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Фон в виде чертежной бумаги */}
        <div className="absolute inset-0 bg-white">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E5E7EB" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Архитектурные элементы */}
        <div className="absolute top-0 left-0 w-36 h-36 border-t border-l border-blue-300/20"></div>
        <div className="absolute top-0 right-0 w-36 h-36 border-t border-r border-blue-300/20"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 border-b border-l border-blue-300/20"></div>
        <div className="absolute bottom-0 right-0 w-36 h-36 border-b border-r border-blue-300/20"></div>

        {/* Архитектурные тонкие линии */}
        <div className="absolute left-0 right-0 top-20 h-px bg-blue-200/20"></div>
        <div className="absolute left-0 right-0 bottom-20 h-px bg-blue-200/20"></div>
        <div className="absolute top-0 bottom-0 left-20 w-px bg-blue-200/20"></div>
        <div className="absolute top-0 bottom-0 right-20 w-px bg-blue-200/20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="relative h-0.5 w-12 bg-blue-500">
              <div className="absolute -top-2 -left-2 w-2 h-2 border border-blue-500 transform rotate-45"></div>
              <div className="absolute -top-2 -right-2 w-2 h-2 border border-blue-500 transform rotate-45"></div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Архитектурный процесс</h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Познакомьтесь с нашим структурированным подходом к архитектурному проектированию и реализации строительных
            проектов.
          </p>
        </motion.div>

        {/* Основной контент */}
        <div className="relative">
          {/* Процесс в виде горизонтальной шкалы */}
          <div className="mb-12">
            <div className="relative h-2 bg-slate-200 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / processSteps.length) * 100}%` }}
              ></div>

              {/* Маркеры шагов */}
              <div className="absolute -top-4 left-0 w-full flex justify-between">
                {processSteps.map((step) => (
                  <div key={step.id} className="relative group" onClick={() => setCurrentStep(step.id)}>
                    <button
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative z-10 cursor-pointer",
                        step.id === currentStep
                          ? "bg-blue-500 border-blue-500 text-white"
                          : step.id < currentStep
                            ? "bg-blue-500/20 border-blue-500 text-blue-800"
                            : "bg-white border-slate-300 text-slate-500",
                      )}
                    >
                      {step.id}
                    </button>

                    {/* Всплывающее название шага */}
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-slate-800 text-white text-xs py-1 px-2 rounded text-center">{step.title}</div>
                    </div>

                    {/* Соединяющая линия */}
                    <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-slate-200 -z-10">
                      {/* Визуализатор прогресса */}
                      {step.id <= currentStep && <div className="absolute top-0 left-0 h-full bg-blue-500"></div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Детальная информация о текущем шаге */}
          <div className="relative bg-white border border-slate-200 rounded-lg shadow-md p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Заголовок шага с архитектурными элементами */}
                <div className="relative mb-6">
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-blue-500"></div>
                  <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-blue-500"></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-blue-500"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-blue-500"></div>

                  <h3 className="text-2xl font-bold text-slate-900 py-2 px-6">
                    {activeStep.id}. {activeStep.title}
                  </h3>
                </div>

                {/* Описание шага */}
                <p className="text-slate-600 mb-8 px-6">{activeStep.description}</p>

                {/* Список пунктов */}
                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-medium text-slate-900 mb-4 flex items-center">
                    <Info className="h-5 w-5 text-blue-500 mr-2" />
                    Ключевые элементы
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {activeStep.details.map((detail, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-6 h-6 flex-shrink-0 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs mr-3 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-slate-700">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Чертежный макет */}
                <div className="relative h-0.5 w-full bg-slate-300 my-6 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-blue-500"
                    style={{ width: `${(activeStep.id / processSteps.length) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Навигация между шагами */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="border-slate-300 text-slate-700 disabled:opacity-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Предыдущий шаг
              </Button>

              <Button
                onClick={nextStep}
                disabled={currentStep === processSteps.length}
                className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
              >
                Следующий шаг
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
