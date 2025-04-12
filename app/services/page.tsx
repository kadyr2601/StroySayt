import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Building2, CheckCircle, Hammer, HardHat, MapPin, Home } from "lucide-react"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Construction Company",
  description:
    "Explore our comprehensive range of construction services including commercial and residential construction, renovation, infrastructure development, and more.",
}

export default function ServicesPage() {
  // Map of icon names to components
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="h-12 w-12" />,
    CheckCircle: <CheckCircle className="h-12 w-12" />,
    Hammer: <Hammer className="h-12 w-12" />,
    HardHat: <HardHat className="h-12 w-12" />,
    MapPin: <MapPin className="h-12 w-12" />,
    Home: <Home className="h-12 w-12" />,
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
            alt="Construction services"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Comprehensive Services</h1>
            <p className="text-xl text-white/90 mb-8">
              From concept to completion, we offer a full range of construction services to meet your needs. Our expert
              team delivers quality, innovation, and value in every project.
            </p>
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services List Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Services</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We offer a wide range of construction and engineering services to meet all your building needs, from
              initial planning to final completion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="w-20 h-20 bg-yellow-100 rounded-lg flex items-center justify-center mb-6 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white transition-colors duration-300">
                  {iconMap[service.icon] || <Building2 className="h-12 w-12" />}
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center text-yellow-500 font-medium hover:text-yellow-600 transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Services</h2>
              <p className="text-slate-600 mb-8">
                With decades of experience and a commitment to excellence, we deliver construction services that exceed
                expectations. Our team of experts brings knowledge, skill, and dedication to every project, ensuring
                quality results that stand the test of time.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    <span className="font-bold">Expert Team:</span> Skilled professionals with extensive industry
                    experience
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    <span className="font-bold">Quality Assurance:</span> Rigorous standards and attention to detail
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    <span className="font-bold">Innovative Solutions:</span> Modern techniques and cutting-edge
                    technology
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-slate-700">
                    <span className="font-bold">Client-Focused Approach:</span> Transparent communication and
                    collaborative process
                  </p>
                </div>
              </div>
              <Button className="bg-slate-900 hover:bg-slate-800">
                Learn About Our Process
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
                  alt="Construction team"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-400 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Contact us today to discuss your construction needs and how our services can help bring your vision to
              life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
