"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Heart, Users, Lightbulb, Award, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency, and ethical standards that exceed industry norms.",
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description:
      "We approach every project with enthusiasm and dedication, taking pride in our craft and the structures we create.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork, fostering partnerships with clients, architects, engineers, and communities.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description:
      "We continuously seek better methods, materials, and technologies to advance the art and science of construction.",
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Excellence",
    description:
      "We strive for the highest standards in every aspect of our work, from planning and execution to client service.",
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Sustainability",
    description:
      "We are committed to environmentally responsible practices that minimize impact and create healthier spaces.",
  },
]

export default function AboutValues() {
  const [activeValue, setActiveValue] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            These principles guide our decisions, shape our culture, and define our approach to construction.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setActiveValue(index)}
              onMouseLeave={() => setActiveValue(null)}
            >
              <div
                className={cn(
                  "bg-white p-8 rounded-sm border-b-4 shadow-lg transition-all duration-300 h-full",
                  activeValue === index ? "border-yellow-500 -translate-y-2" : "border-transparent",
                )}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-sm flex items-center justify-center mb-6 transition-colors duration-300",
                    activeValue === index ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-500",
                  )}
                >
                  {value.icon}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-yellow-500/20"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-yellow-500/20"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
