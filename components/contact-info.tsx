"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Office Location",
      details: ["123 Tech Boulevard", "Innovation District", "Metropolis, MP 12345"],
      action: {
        text: "Get Directions",
        icon: <ExternalLink className="h-4 w-4 ml-2" />,
        href: "https://maps.google.com",
      },
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Numbers",
      details: ["Main: (555) 123-4567", "Support: (555) 987-6543", "Fax: (555) 321-7654"],
      action: {
        text: "Call Main Office",
        icon: <Phone className="h-4 w-4 ml-2" />,
        href: "tel:+15551234567",
      },
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Addresses",
      details: ["info@constructco.com", "support@constructco.com", "careers@constructco.com"],
      action: {
        text: "Send Email",
        icon: <Mail className="h-4 w-4 ml-2" />,
        href: "mailto:info@constructco.com",
      },
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: ["Monday-Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed"],
      action: {
        text: "Schedule Meeting",
        icon: <Clock className="h-4 w-4 ml-2" />,
        href: "#schedule",
      },
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-slate-900/80 backdrop-blur-lg p-8 rounded-lg border border-slate-800 shadow-[0_0_15px_rgba(0,100,255,0.15)] mb-12"
    >
      <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="group"
          >
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mr-4 group-hover:bg-blue-500/30 transition-colors duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <div className="space-y-1 mb-3">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-slate-400">
                      {detail}
                    </p>
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/30 p-0"
                  asChild
                >
                  <a href={item.action.href} target="_blank" rel="noopener noreferrer">
                    {item.action.text}
                    {item.action.icon}
                  </a>
                </Button>
              </div>
            </div>

            {index < contactItems.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent my-6"></div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
