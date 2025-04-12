import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ServiceCtaProps {
  title: string
  description: string
}

export default function ServiceCta({ title, description }: ServiceCtaProps) {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-slate-300 mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
