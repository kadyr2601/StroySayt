"use client"

import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface InfiniteImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  speed?: "slow" | "normal" | "fast"
  className?: string
}

export function InfiniteImageCarousel({ images, speed = "normal", className }: InfiniteImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Определяем скорость анимации
  const speedMap = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  }

  // Дублируем изображения для создания эффекта бесконечной прокрутки
  const duplicatedImages = [...images, ...images]

  return (
    <div className={cn("relative w-full overflow-hidden py-10", className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none" />

      <div
        ref={containerRef}
        className="flex animate-scroll"
        style={{
          animationDuration: speedMap[speed],
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 mx-4 overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            style={{ width: "300px", height: "200px" }}
          >
            <Image
              src={image.src || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <p className="text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
