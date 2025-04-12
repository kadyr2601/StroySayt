import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutCta() {
  return (
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Join Our Journey of Excellence</h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether you&apos;re looking to build your dream project or join our team, we invite you to be part of our
              continuing story of innovation and excellence in construction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Explore Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}
