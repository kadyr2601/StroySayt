"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Phone, Mail, MapPin, Send, ArrowRight, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ImmersiveContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  // Варианты анимации
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 to-black relative overflow-hidden">
      {/* Интерактивный фон */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Анимированные линии */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
              style={{
                top: `${20 * (i + 1)}%`,
                left: 0,
                right: 0,
                animationDelay: `${i * 0.5}s`,
                animation: "scanLine 8s linear infinite",
              }}
            ></div>
          ))}
        </div>

        {/* Градиентные пятна */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 mix-blend-screen filter blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 mix-blend-screen filter blur-[100px]"></div>

        {/* Сетка */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 opacity-5">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="border border-blue-500"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Готовы обсудить ваш проект? Наша команда экспертов ждет вашего обращения
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Контактная информация */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2 space-y-8"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-slate-900 p-6 rounded-lg border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-6">Контактная информация</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">Телефон</p>
                      <p className="text-white font-medium">+9 (710) 123-45-67</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">Email</p>
                      <p className="text-white font-medium">info@constructco.ae</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-300 mb-1">Адрес</p>
                      <p className="text-white font-medium">
                        Бизнес Бэй, Дубай, ОАЭ<br />
                        P.O. Box 123456
                      </p>
                    </div>
                  </div>
                </div>

                {/* Декоративные элементы */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-blue-500/20"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-blue-500/20"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-slate-900 p-6 rounded-lg border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-4">Часы работы</h3>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-blue-300">Понедельник - Пятница</p>
                    <p className="text-white font-medium">9:00 - 18:00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-blue-300">Суббота</p>
                    <p className="text-white font-medium">10:00 - 15:00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-blue-300">Воскресенье</p>
                    <p className="text-white font-medium">Выходной</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Форма обратной связи */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-slate-900 p-8 rounded-lg border border-slate-800">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Сообщение отправлено!</h3>
                    <p className="text-blue-100 mb-8">
                      Спасибо за обращение. Наша команда свяжется с вами в ближайшее время.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    >
                      Отправить еще сообщение
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-white mb-6">Отправьте нам сообщение</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-blue-300">
                            Имя
                          </label>
                          <Input
                            id="name"
                            type="text"
                            required
                            className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                            placeholder="Иван Иванов"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-blue-300">
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                            placeholder="ivan@example.com"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-blue-300">
                          Телефон
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                          placeholder="+9 (___) ___-__-__"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="project" className="text-sm font-medium text-blue-300">
                          Тип проекта
                        </label>
                        <select
                          id="project"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-400"
                        >
                          <option value="">Выберите тип проекта</option>
                          <option value="commercial">Коммерческое строительство</option>
                          <option value="residential">Жилое строительство</option>
                          <option value="renovation">Реконструкция</option>
                          <option value="other">Другое</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-blue-300">
                          Сообщение
                        </label>
                        <Textarea
                          id="message"
                          required
                          rows={4}
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                          placeholder="Расскажите о вашем проекте..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white relative overflow-hidden group"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin mr-2" />
                            Отправка...
                          </>
                        ) : (
                          <>
                            Отправить сообщение
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Стили для анимации */}
      <style jsx global>{`
        @keyframes scanLine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  )
}
