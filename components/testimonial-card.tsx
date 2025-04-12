import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
}

export default function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
  return (
    <div className="bg-slate-800 p-8 rounded-lg relative">
      <Quote className="h-10 w-10 text-yellow-500/30 absolute top-4 right-4" />
      <p className="text-slate-300 mb-6 relative z-10">{quote}</p>
      <div className="border-t border-slate-700 pt-4">
        <h4 className="font-bold text-white">{author}</h4>
        <p className="text-slate-400 text-sm">{position}</p>
      </div>
    </div>
  )
}
