"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-900/80 backdrop-blur-lg p-8 rounded-lg border border-slate-800 shadow-[0_0_15px_rgba(0,100,255,0.15)] mb-12"
    >
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
        <p className="text-slate-400">Fill out the form below and our team will get back to you within 24 hours.</p>
      </div>

      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6 text-center"
        >
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Send className="h-8 w-8 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
          <p className="text-slate-300 mb-4">Thank you for reaching out. Our team will contact you shortly.</p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white border-none"
          >
            Send Another Message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">
                Full Name
              </label>
              <Input
                id="name"
                type="text"
                required
                className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                required
                className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-300">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-slate-300">
                Subject
              </label>
              <Input
                id="subject"
                type="text"
                required
                className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
                placeholder="Project Inquiry"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">
              Message
            </label>
            <Textarea
              id="message"
              required
              rows={5}
              className="bg-slate-800/50 border-slate-700 text-white focus:border-blue-400 focus:ring-blue-400/20"
              placeholder="Tell us about your project or inquiry..."
            />
          </div>

          <div className="flex items-center">
            <input
              id="privacy"
              type="checkbox"
              required
              className="h-4 w-4 rounded border-slate-700 text-blue-500 focus:ring-blue-400/20"
            />
            <label htmlFor="privacy" className="ml-2 block text-sm text-slate-400">
              I agree to the{" "}
              <a href="/privacy" className="text-blue-400 hover:text-blue-300">
                privacy policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-blue-400 hover:text-blue-300">
                terms of service
              </a>
              .
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full relative overflow-hidden group bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white border-none",
              isSubmitting && "opacity-80",
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4 ml-2" />
              </>
            )}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </Button>
        </form>
      )}
    </motion.div>
  )
}
