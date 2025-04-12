import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { getServiceBySlug, getAllServiceSlugs, services } from "@/lib/services"
import ServiceHero from "@/components/service-hero"
import ServiceFeatures from "@/components/service-features"
import ServiceProcess from "@/components/service-process"
import ServiceProjects from "@/components/service-projects"
import ServiceFaq from "@/components/service-faq"
import ServiceCta from "@/components/service-cta"

type ServicePageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: service.metaTitle || `${service.title} | Construction Company`,
    description: service.metaDescription || service.shortDescription,
    openGraph: {
      title: service.metaTitle || `${service.title} | Construction Company`,
      description: service.metaDescription || service.shortDescription,
      type: "website",
      url: `https://constructioncompany.com/services/${service.slug}`,
    },
  }
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug)

  // If exact slug not found, try to find a service that contains the partial slug
  if (!service) {
    // Check if this is a partial slug match
    const partialMatch = services.find((s) => s.slug.includes(params.slug))
    if (partialMatch) {
      // Redirect to the full slug
      redirect(`/services/${partialMatch.slug}`)
    }

    // If no match at all, show 404
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ServiceHero title={service.title} description={service.fullDescription} image={service.heroImage} />

      <ServiceFeatures features={service.features} />

      <ServiceProcess
        title={`Our ${service.title} Process`}
        description="We follow a structured approach to ensure successful outcomes for every project."
        process={service.process}
      />

      <ServiceProjects
        title="Featured Projects"
        description={`Explore our portfolio of successful ${service.title.toLowerCase()} projects.`}
        projects={service.projects}
      />

      <ServiceFaq
        title="Frequently Asked Questions"
        description={`Common questions about our ${service.title.toLowerCase()} services.`}
        faqs={service.faqs}
      />

      <ServiceCta
        title="Ready to Start Your Project?"
        description="Contact us today to discuss your construction needs and how our services can help bring your vision to life."
      />
    </div>
  )
}
