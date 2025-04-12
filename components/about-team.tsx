"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Linkedin, Twitter, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const teamMembers = [
  {
    name: "Jonathan Reynolds",
    position: "Chief Executive Officer",
    bio: "With over 30 years of experience in construction management, Jonathan has led the company through significant growth and transformation. His vision and strategic leadership have established our reputation for excellence.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "jonathan@constructco.com",
    },
  },
  {
    name: "Victoria Chen",
    position: "Chief Operations Officer",
    bio: "Victoria oversees all operational aspects of our business, ensuring efficient project delivery and client satisfaction. Her background in civil engineering and business administration brings valuable technical and management expertise.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "victoria@constructco.com",
    },
  },
  {
    name: "Michael Blackwood",
    position: "Chief Financial Officer",
    bio: "Michael manages our financial strategy and planning, maintaining our strong fiscal foundation. His prudent approach to financial management has enabled our sustainable growth and investment in innovation.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@constructco.com",
    },
  },
  {
    name: "Sophia Martinez",
    position: "Director of Architecture",
    bio: "Sophia leads our architectural design team, bringing creativity and technical expertise to every project. Her award-winning designs balance aesthetics, functionality, and sustainability to create exceptional spaces.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sophia@constructco.com",
    },
  },
]

export default function AboutTeam() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Meet the experienced professionals who guide our company with vision, expertise, and dedication.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

interface TeamMemberProps {
  member: {
    name: string
    position: string
    bio: string
    image: string
    social: {
      linkedin: string
      twitter: string
      email: string
    }
  }
  index: number
  inView: boolean
}

function TeamMember({ member, index, inView }: TeamMemberProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-6 overflow-hidden">
        <div className="aspect-[3/4] relative">
          <Image
            src={member.image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"}
            alt={member.name}
            fill
            className={cn("object-cover transition-transform duration-500", isHovered ? "scale-110" : "scale-100")}
          />
        </div>

        {/* Overlay with social icons */}
        <div
          className={cn(
            "absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0",
          )}
        >
          <a
            href={member.social.linkedin}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={member.social.twitter}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${member.social.email}`}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-yellow-500 transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Decorative border */}
        <div
          className={cn(
            "absolute inset-0 border-2 border-transparent transition-all duration-300",
            isHovered ? "border-yellow-500 scale-95" : "scale-100",
          )}
        ></div>
      </div>

      <div className="text-center">
        <h3 className="font-serif text-xl font-bold">{member.name}</h3>
        <p className="text-yellow-500 font-medium mb-3">{member.position}</p>
        <p className="text-slate-600 text-sm">{member.bio}</p>
      </div>
    </motion.div>
  )
}
