"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Star, Trophy, BadgeIcon as Certificate } from "lucide-react"

const achievements = [
  {
    icon: <Award className="h-10 w-10" />,
    title: "Excellence in Construction",
    organization: "National Construction Association",
    year: "2022",
    description: "Recognized for outstanding quality and innovation in commercial building projects.",
  },
  {
    icon: <Star className="h-10 w-10" />,
    title: "Sustainable Builder of the Year",
    organization: "Green Building Council",
    year: "2021",
    description: "Awarded for leadership in sustainable construction practices and LEED-certified projects.",
  },
  {
    icon: <Trophy className="h-10 w-10" />,
    title: "Safety Performance Award",
    organization: "Construction Safety Alliance",
    year: "2020",
    description: "Honored for exceptional workplace safety standards and zero incident record.",
  },
  {
    icon: <Certificate className="h-10 w-10" />,
    title: "Best Workplace in Construction",
    organization: "Industry Employment Standards",
    year: "2019",
    description: "Recognized for employee satisfaction, professional development, and inclusive workplace culture.",
  },
]

export default function AboutAchievements() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1])
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-yellow-500 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-yellow-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-yellow-500 rounded-full"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <motion.div style={{ opacity, scale }} className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">Awards & Recognition</h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized by industry leaders and organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface AchievementCardProps {
  achievement: {
    icon: React.ReactNode
    title: string
    organization: string
    year: string
    description: string
  }
  index: number
}

function AchievementCard({ achievement, index }: AchievementCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-800 p-6 rounded-sm border-l-4 border-yellow-500 hover:bg-slate-700 transition-colors duration-300"
    >
      <div className="text-yellow-500 mb-4">{achievement.icon}</div>
      <h3 className="font-serif text-xl font-bold mb-2">{achievement.title}</h3>
      <div className="flex justify-between items-center mb-4">
        <p className="text-slate-400 text-sm">{achievement.organization}</p>
        <p className="text-yellow-500 font-bold">{achievement.year}</p>
      </div>
      <p className="text-slate-300 text-sm">{achievement.description}</p>
    </motion.div>
  )
}
