"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"

const historyEvents = [
  {
    year: "1998",
    title: "Foundation",
    description:
      "ConstructCo was founded by John Smith with a vision to create a construction company focused on quality, integrity, and client satisfaction.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2003",
    title: "Expansion",
    description:
      "After completing several successful residential projects, we expanded into commercial construction, doubling our team size and project capacity.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2008",
    title: "Innovation",
    description:
      "We pioneered sustainable building practices in our region, becoming one of the first construction companies to achieve LEED certification.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2013",
    title: "Recognition",
    description:
      "Our commitment to excellence was recognized with multiple industry awards, establishing our reputation as a premier construction firm.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2018",
    title: "Global Reach",
    description:
      "We expanded our operations internationally, taking on landmark projects across three continents and forming strategic partnerships.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
  },
  {
    year: "2023",
    title: "The Future",
    description:
      "Today, we continue to push boundaries in construction technology, sustainability, and design, shaping the future of the built environment.",
    image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
  },
]

export default function AboutHistory() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Rich History</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            From humble beginnings to industry leadership, our journey has been defined by perseverance, innovation, and
            an unwavering commitment to excellence.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>

          {/* Progress line overlay that grows with scroll */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-yellow-500 transform -translate-x-1/2 origin-top hidden md:block"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <div className="space-y-24">
            {historyEvents.map((event, i) => (
              <HistoryEvent
                key={event.year}
                year={event.year}
                title={event.title}
                description={event.description}
                image={event.image}
                isEven={i % 2 === 0}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface HistoryEventProps {
  year: string
  title: string
  description: string
  image: string
  isEven: boolean
  index: number
}

function HistoryEvent({ year, title, description, image, isEven, index }: HistoryEventProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className="relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
      >
        {/* Year marker for desktop */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 hidden md:block">
          <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-sm z-10">
            {year}
          </div>
        </div>

        {/* Content */}
        <div className={`md:w-1/2 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
          {/* Year marker for mobile */}
          <div className="flex items-center mb-4 md:hidden">
            <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-sm mr-4">
              {year}
            </div>
            <h3 className="font-serif text-2xl font-bold">{title}</h3>
          </div>

          {/* Title for desktop */}
          <h3 className="font-serif text-2xl font-bold mb-4 hidden md:block">{title}</h3>

          <p className="text-slate-600 mb-6">{description}</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <div className={`relative ${isEven ? "md:pl-16" : "md:pr-16"}`}>
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image src={image || "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop"} alt={title} fill className="object-cover rounded-lg" />
              <div className="absolute inset-0 border border-yellow-500/20 rounded-lg"></div>
            </div>
            <div
              className={`absolute ${isEven ? "-left-2" : "-right-2"} -bottom-2 w-16 h-16 border border-yellow-500 rounded-sm -z-10`}
            ></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
