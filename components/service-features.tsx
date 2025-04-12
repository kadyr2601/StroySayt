"use client"

import { useState } from "react"
import type React from "react"
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
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceFeatureProps {
  title: string
  description: string
}

interface ServiceFeaturesProps {
  features: ServiceFeatureProps[]
}

export default function ServiceFeatures({ features }: ServiceFeaturesProps) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)

  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="h-10 w-10" />,
    CheckCircle: <CheckCircle className="h-10 w-10" />,
    Hammer: <Hammer className="h-10 w-10" />,
    HardHat: <HardHat className="h-10 w-10" />,
    MapPin: <MapPin className="h-10 w-10" />,
    Users: <Users className="h-10 w-10" />,
    PenTool: <PenTool className="h-10 w-10" />,
    Calendar: <Calendar className="h-10 w-10" />,
    ClipboardCheck: <ClipboardCheck className="h-10 w-10" />,
    Key: <Key className="h-10 w-10" />,
    Home: <Home className="h-10 w-10" />,
    FileText: <FileText className="h-10 w-10" />,
    Eye: <Eye className="h-10 w-10" />,
    BarChart2: <BarChart2 className="h-10 w-10" />,
    CheckSquare: <CheckSquare className="h-10 w-10" />,
    Flag: <Flag className="h-10 w-10" />,
    Target: <Target className="h-10 w-10" />,
    DollarSign: <DollarSign className="h-10 w-10" />,
    Search: <Search className="h-10 w-10" />,
  }

  // Animation variants
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Наши возможности и экспертиза</h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Мы предлагаем комплексные решения, адаптированные к вашим конкретным потребностям, с акцентом на качество,
            эффективность и инновации.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
              variants={itemVariants}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              <div
                className={cn(
                  "h-full bg-gradient-to-br relative overflow-hidden rounded-xl transition-all duration-300",
                  activeFeature === index
                    ? "from-yellow-500 to-yellow-600 shadow-lg shadow-yellow-500/20 scale-105"
                    : "from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600",
                )}
              >
                <div className="p-6 h-full flex flex-col">
                  <div
                    className={cn(
                      "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                      activeFeature === index ? "bg-white text-yellow-500" : "bg-slate-700 text-white",
                    )}
                  >
                    {iconMap[Object.keys(iconMap)[index % Object.keys(iconMap).length]]}
                  </div>
                  <h3
                    className={cn(
                      "text-xl font-bold mb-3 transition-colors duration-300",
                      activeFeature === index ? "text-black" : "text-white",
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={cn(
                      "text-sm transition-colors duration-300",
                      activeFeature === index ? "text-black/80" : "text-slate-300",
                    )}
                  >
                    {feature.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/5"></div>
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-white/5"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
