"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      {/* Архитектурные декоративные элементы */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Сетка */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid-pattern-gallery" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern-gallery)" />
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
                <span className="text-sm font-medium uppercase tracking-wide">Галерея проекта</span>
                <div className="h-px w-8 bg-blue-600"></div>
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Фотографии проекта</h2>

            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Исследуйте визуальные материалы проекта {title}, демонстрирующие архитектурные решения и детали
              реализации.
            </p>
          </div>

          {/* Основная галерея */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - изображение ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Оверлей при наведении */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                    <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                  </div>

                  {/* Архитектурные уголки */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                  <div className="absolute top-2 right-2 w-6 h-6 border-t border-r border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b border-l border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-white/0 group-hover:border-white/70 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Лайтбокс для просмотра изображений */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute top-4 right-4 z-10">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={closeLightbox}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="absolute left-4 z-10">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={prevLightboxImage}>
                <ChevronLeft className="h-8 w-8" />
              </Button>
            </div>

            <div className="absolute right-4 z-10">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/10" onClick={nextLightboxImage}>
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>

            <div className="relative w-full max-w-5xl h-[80vh] mx-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={images[lightboxIndex] || "/placeholder.svg"}
                    alt={`${title} - изображение ${lightboxIndex + 1}`}
                    fill
                    className="object-contain"
                  />

                  {/* Архитектурные уголки */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30"></div>
                </motion.div>
              </AnimatePresence>

              {/* Индикатор текущего изображения */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                {lightboxIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
