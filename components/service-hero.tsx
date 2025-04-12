"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceHeroProps {
  title: string
  description: string
  image: string
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
      <section className="relative w-full h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 w-full h-full">
          <Image
              src={image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"}
              alt={title}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>

            <div className="w-20 h-1 bg-blue-500 mb-6" />

            <div className="prose prose-lg prose-invert">
              <p className="text-lg md:text-xl text-gray-200">{description}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                      "inline-flex items-center justify-center px-6 py-3 rounded-md",
                      "bg-blue-600 text-white font-medium",
                      "transition-all duration-200 ease-in-out",
                      "hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  )}
              >
                Получить консультацию
              </motion.a>

              <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                      "inline-flex items-center justify-center px-6 py-3 rounded-md",
                      "bg-blue-500/10 text-blue-400 border border-blue-500/50 font-medium",
                      "transition-all duration-200 ease-in-out",
                      "hover:bg-blue-500/20 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  )}
              >
                Наши проекты
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-24 h-24 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
          >
            <div className="text-white text-center">
              <div className="font-bold text-xl">15+</div>
              <div className="text-xs">лет опыта</div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}

