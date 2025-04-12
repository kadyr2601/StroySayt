import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ServiceProject } from "@/lib/services"

interface ServiceProjectsProps {
  title: string
  description: string
  projects: ServiceProject[]
}

export default function ServiceProjects({ title, description, projects }: ServiceProjectsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-sm font-medium rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-600 mb-4">{project.description}</p>
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
                >
                  View Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center text-slate-900 font-medium hover:text-yellow-500 transition-colors"
          >
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
