"use client"

import React from "react"

import { useRef } from "react"
import {
  Building2,
  CheckCircle,
  Hammer,
  HardHat,
  MapPin,
  Users,
  PenTool,
  Calendar,
  ClipboardCheck,
  Key,
  Home,
  FileText,
  Eye,
  BarChart2,
  CheckSquare,
  Flag,
  Target,
  DollarSign,
  Search,
} from "lucide-react"
import { useInView } from "react-intersection-observer"
import { motion, useScroll } from "framer-motion"
import type { ServiceProcess as ServiceProcessType } from "@/lib/services"

interface ServiceProcessProps {
  title: string
  description: string
  process: ServiceProcessType[]
}

export default function ServiceProcess({ title, description, process }: ServiceProcessProps) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="h-8 w-8" />,
    CheckCircle: <CheckCircle className="h-8 w-8" />,
    Hammer: <Hammer className="h-8 w-8" />,
    HardHat: <HardHat className="h-8 w-8" />,
    MapPin: <MapPin className="h-8 w-8" />,
    Users: <Users className="h-8 w-8" />,
    PenTool: <PenTool className="h-8 w-8" />,
    Calendar: <Calendar className="h-8 w-8" />,
    ClipboardCheck: <ClipboardCheck className="h-8 w-8" />,
    Key: <Key className="h-8 w-8" />,
    Home: <Home className="h-8 w-8" />,
    FileText: <FileText className="h-8 w-8" />,
    Eye: <Eye className="h-8 w-8" />,
    BarChart2: <BarChart2 className="h-8 w-8" />,
    CheckSquare: <CheckSquare className="h-8 w-8" />,
    Flag: <Flag className="h-8 w-8" />,
    Target: <Target className="h-8 w-8" />,
    DollarSign: <DollarSign className="h-8 w-8" />,
    Search: <Search className="h-8 w-8" />,
  }

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Progress line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 transform -translate-x-1/2 hidden md:block"></div>

          {/* Progress line overlay that grows with scroll */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-yellow-500 transform -translate-x-1/2 origin-top hidden md:block"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <div className="max-w-5xl mx-auto">
            {process.map((step, index) => {
              return <StepItem key={index} step={step} index={index} iconMap={iconMap} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

interface StepItemProps {
  step: ServiceProcessType
  index: number
  iconMap: Record<string, React.ReactNode>
}

function StepItem({ step, index, iconMap }: StepItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div key={index} ref={ref} className="relative mb-16 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
      >
        {/* Step number and icon */}
        <div className="flex-shrink-0 z-10">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-yellow-500 flex items-center justify-center text-black text-3xl font-bold">
              {step.step}
            </div>
            <div className="absolute -right-2 -bottom-2 w-10 h-10 rounded-full bg-white flex items-center justify-center text-yellow-500 shadow-lg">
              {iconMap[step.icon] ? (
                React.cloneElement(iconMap[step.icon] as React.ReactElement, { className: "h-6 w-6" })
              ) : (
                <CheckCircle className="h-6 w-6" />
              )}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow bg-slate-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
          <p className="text-slate-600">{step.description}</p>
        </div>
      </motion.div>

      {/* Connector dots for mobile */}
      {index < process.length - 1 && (
        <div className="flex justify-center my-6 md:hidden">
          <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 mx-1"></div>
        </div>
      )}
    </div>
  )
}
