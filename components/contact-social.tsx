"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from "lucide-react"
import { cn } from "@/lib/utils"

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="h-6 w-6" />, href: "#", color: "bg-blue-600" },
  { name: "Twitter", icon: <Twitter className="h-6 w-6" />, href: "#", color: "bg-sky-500" },
  { name: "Instagram", icon: <Instagram className="h-6 w-6" />, href: "#", color: "bg-pink-600" },
  { name: "LinkedIn", icon: <Linkedin className="h-6 w-6" />, href: "#", color: "bg-blue-700" },
  { name: "YouTube", icon: <Youtube className="h-6 w-6" />, href: "#", color: "bg-red-600" },
  { name: "GitHub", icon: <Github className="h-6 w-6" />, href: "#", color: "bg-slate-800" },
]

export default function ContactSocial() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-5">
        {Array.from({ length: 12 * 6 }).map((_, i) => (
          <div key={i} className="border border-blue-500"></div>
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-purple-500/10 filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Connect With Us</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, projects, and industry insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className={cn(
                "flex flex-col items-center justify-center p-6 rounded-lg text-white transition-all duration-300 group",
                "bg-slate-800/50 backdrop-blur-sm hover:shadow-[0_0_15px_rgba(0,100,255,0.3)]",
              )}
            >
              <div
                className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110",
                  link.color,
                )}
              >
                {link.icon}
              </div>
              <span className="font-medium">{link.name}</span>
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 transition-all duration-300"></div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400">
            Prefer email?{" "}
            <a href="mailto:info@constructco.com" className="text-blue-400 hover:text-blue-300 underline">
              info@constructco.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
