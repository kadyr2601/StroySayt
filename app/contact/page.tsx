import type { Metadata } from "next"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"
import ContactFaq from "@/components/contact-faq"
import ContactSocial from "@/components/contact-social"

export const metadata: Metadata = {
  title: "Contact Us | Construction Company",
  description:
    "Get in touch with our team for inquiries, quotes, or support. We're here to help with your construction needs.",
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <ContactHero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
      <ContactMap />
      <ContactFaq />
      <ContactSocial />
    </div>
  )
}
