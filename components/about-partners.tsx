"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// In a real application, these would be actual partner logos
const partners = [
  { name: "Architectural Firm", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Engineering Consultants", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Material Supplier", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Technology Provider", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Financial Institution", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Insurance Company", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Real Estate Developer", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
  { name: "Sustainability Consultant", logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop" },
]

export default function AboutPartners() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Trusted Partners</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            We collaborate with industry-leading organizations to deliver exceptional results for our clients.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-center p-6 bg-slate-50 rounded-sm hover:bg-slate-100 transition-colors duration-300 group"
            >
              <div className="relative h-16 w-full grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 italic">
            &ldquo;Coming together is a beginning, staying together is progress, and working together is success.&rdquo;
            - Henry Ford
          </p>
        </div>
      </div>
    </section>
  )
}
