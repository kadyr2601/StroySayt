import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  image: string
  title: string
  category: string
  description: string
}

export default function ProjectCard({ image, title, category, description }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg shadow-lg bg-white">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 w-full">
          <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full mb-2">
            {category}
          </span>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-slate-600 mb-4">{description}</p>
        <Link
          href="#"
          className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
        >
          View Project <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
