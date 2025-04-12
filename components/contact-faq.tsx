"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What information do I need to provide for a project quote?",
    answer:
      "To provide an accurate quote, we typically need project location, scope, timeline, budget range, and any specific requirements or constraints. The more details you can provide, the more precise our estimate will be.",
  },
  {
    question: "How quickly can you start a new construction project?",
    answer:
      "Our project initiation timeline depends on several factors including current workload, project complexity, and permit requirements. Typically, we can begin the planning phase within 2-4 weeks of contract signing, with construction starting after permits are secured.",
  },
  {
    question: "Do you handle all necessary permits and approvals?",
    answer:
      "Yes, we manage the entire permitting process as part of our comprehensive service. Our team has extensive experience navigating local building codes and regulations to ensure all necessary approvals are obtained efficiently.",
  },
  {
    question: "What types of insurance and warranties do you provide?",
    answer:
      "We maintain comprehensive insurance coverage including general liability and workers' compensation. Additionally, we offer warranties on our workmanship (typically 1-5 years depending on the project) and pass through all manufacturer warranties on materials and equipment.",
  },
  {
    question: "How do you handle changes to the project scope once work has begun?",
    answer:
      "We implement a structured change order process. Any requested modifications are documented, priced, and approved before implementation. This ensures transparency and prevents unexpected costs or delays.",
  },
]

export default function ContactFaq() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Find answers to common questions about working with our construction company.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
  index: number
}

function FaqItem({ question, answer, index }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full text-left p-6 rounded-lg flex justify-between items-center transition-all duration-300",
          isOpen
            ? "bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-l-4 border-blue-500"
            : "bg-slate-900/50 hover:bg-slate-800/50",
        )}
      >
        <div className="flex items-center">
          <HelpCircle
            className={cn(
              "h-5 w-5 mr-3 flex-shrink-0 transition-colors duration-300",
              isOpen ? "text-blue-400" : "text-slate-400",
            )}
          />
          <h3 className="font-bold text-lg text-white">{question}</h3>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-slate-400 transition-transform duration-300",
            isOpen ? "transform rotate-180 text-blue-400" : "",
          )}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-slate-800/50 p-6 rounded-b-lg border-l-4 border-blue-500/50">
              <p className="text-slate-300">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
