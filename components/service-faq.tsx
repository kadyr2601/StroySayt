"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import type { ServiceFaq } from "@/lib/services"
import { cn } from "@/lib/utils"

interface ServiceFaqProps {
  title: string
  description: string
  faqs: ServiceFaq[]
}

export default function ServiceFaq({ title, description, faqs }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className={cn(
                  "flex justify-between items-center w-full text-left p-6 rounded-lg",
                  openIndex === index ? "bg-yellow-500 text-black" : "bg-white hover:bg-yellow-50",
                )}
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform duration-200",
                    openIndex === index ? "transform rotate-180" : "",
                  )}
                />
              </button>

              {openIndex === index && (
                <div className="bg-white p-6 rounded-b-lg shadow-inner">
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
