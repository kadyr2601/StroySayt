"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

export default function ContactMap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    // This would be replaced with actual map initialization code
    // For example, using Google Maps or Mapbox
    console.log("Map would initialize here")
  }, [isInView])

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Find Us</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Visit our headquarters or one of our regional offices to discuss your project in person.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative h-[400px] rounded-lg overflow-hidden"
        >
          {/* This would be replaced with an actual map component */}
          <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
            <div className="text-center">
              <p className="text-slate-400 mb-4">Interactive Map Would Appear Here</p>
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto animate-pulse">
                <MapPin className="h-8 w-8 text-blue-400" />
              </div>
            </div>
          </div>

          {/* Map overlay with location markers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-6 h-6 rounded-full bg-blue-500 animate-ping"></div>
              <div className="w-6 h-6 rounded-full bg-blue-500 absolute top-0"></div>
            </div>
            <div className="absolute top-1/4 left-1/4">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
            </div>
            <div className="absolute bottom-1/4 right-1/4">
              <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
            </div>
          </div>

          {/* Futuristic grid overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full grid grid-cols-12 grid-rows-6">
              {Array.from({ length: 12 * 6 }).map((_, i) => (
                <div key={i} className="border border-blue-500/10"></div>
              ))}
            </div>
          </div>

          {/* Scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-scan"></div>
          </div>
        </motion.div>

        <style jsx global>{`
          @keyframes scan {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(400px);
            }
          }
          .animate-scan {
            animation: scan 3s linear infinite;
          }
        `}</style>
      </div>
    </section>
  )
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
