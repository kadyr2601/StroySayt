import type { ReactNode } from "react"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
      <div className="w-16 h-16 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  )
}
