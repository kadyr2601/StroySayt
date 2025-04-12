import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceHeroProps {
  title: string
  description: string
  image: string
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={image || "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"} alt={title} fill priority className="object-cover brightness-[0.4]" />
      </div>
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{title}</h1>
          <p className="text-xl text-white/90 mb-8">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Request a Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              View Our Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
