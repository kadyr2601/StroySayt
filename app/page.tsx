import type React from "react"
import { Suspense } from "react"
import Image from "next/image"
import { Building2, CheckCircle, Hammer, HardHat, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import ProjectCard from "@/components/project-card"
import TestimonialCard from "@/components/testimonial-card"
import AnimatedCounter from "@/components/animated-counter"
import { Reveal } from "@/components/reveal"
import HeroBanner from "@/components/hero-banner"
import InteractiveProjectGallery from "@/components/interactive-project-gallery"
import ImmersiveContactSection from "@/components/immersive-contact-section"
import { InfiniteImageCarousel } from "@/components/infinite-image-carousel"
import {
  getHomeStats,
  getAboutFeatures,
  getFeaturedServices,
  getFeaturedProjects,
  getTestimonials,
} from "@/lib/api/home"

// Компонент для статистики
async function StatsSection() {
  const stats = await getHomeStats()

  return (
    <section className="bg-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <AnimatedCounter
                end={stat.value}
                duration={2}
                className="text-4xl font-bold text-yellow-400"
                suffix={stat.suffix}
              />
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Компонент для секции о нас
async function AboutSection() {
  const features = await getAboutFeatures()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Reveal>
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
                  alt="Строительная команда"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </Reveal>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-yellow-400 rounded-lg -z-10"></div>
          </div>
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-yellow-500">25 лет</span> превосходства в строительстве
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-slate-600 mb-6">
                Основанная в 1998 году, наша компания выросла из небольшого местного подрядчика в одну из самых надежных
                строительных фирм в регионе. Мы сочетаем традиционное мастерство с передовыми технологиями для
                достижения исключительных результатов.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">{feature.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <Button className="bg-slate-900 hover:bg-slate-800">
                Узнать больше о нас
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

// Компонент для карусели изображений
function ProjectsCarousel() {
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      alt: "Бурдж-Халифа",
    },
    {
      src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
      alt: "Дубай Марина",
    },
    {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop",
      alt: "Небоскребы Дубая",
    },
    {
      src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
      alt: "Бизнес-Бей",
    },
    {
      src: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop",
      alt: "Пальма Джумейра",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Наши проекты в Дубае</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
            Ознакомьтесь с нашими знаковыми проектами, которые формируют горизонт Дубая и ОАЭ
          </p>
        </Reveal>
      </div>

      <InfiniteImageCarousel images={carouselImages} speed="normal" />
    </section>
  )
}

// Компонент для секции услуг
async function ServicesSection() {
  const services = await getFeaturedServices()

  // Карта иконок
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="h-10 w-10" />,
    Home: <HardHat className="h-10 w-10" />,
    Hammer: <Hammer className="h-10 w-10" />,
    MapPin: <MapPin className="h-10 w-10" />,
    CheckCircle: <CheckCircle className="h-10 w-10" />,
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши комплексные услуги</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Мы предлагаем широкий спектр строительных и инженерных услуг для удовлетворения всех ваших потребностей в
              строительстве, от начального планирования до окончательного завершения.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1 + 0.1}>
              <ServiceCard
                icon={iconMap[service.icon] || <Building2 className="h-10 w-10" />}
                title={service.title}
                description={service.description}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.7}>
          <div className="text-center mt-12">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
              Посмотреть все услуги
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Компонент для секции проектов
async function ProjectsSection() {
  const projects = await getFeaturedProjects()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши избранные проекты</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Исследуйте наше портфолио успешных проектов, демонстрирующих наш опыт, инновации и приверженность
              совершенству.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.1 + 0.1}>
              <ProjectCard
                image={project.image}
                title={project.title}
                category={project.category}
                description={project.description}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="text-center mt-12">
            <Button className="bg-slate-900 hover:bg-slate-800">
              Посмотреть все проекты
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// Компонент для секции отзывов
async function TestimonialsSection() {
  const testimonials = await getTestimonials()

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Не просто верьте нам на слово. Послушайте, что говорят наши довольные клиенты об опыте работы с нами.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1 + 0.1}>
              <TestimonialCard quote={testimonial.quote} author={testimonial.author} position={testimonial.position} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner - New WOW Effect */}
      <HeroBanner />

      {/* Stats Section */}
      <Suspense fallback={<div className="h-32 bg-slate-900"></div>}>
        <StatsSection />
      </Suspense>

      {/* About Section */}
      <Suspense fallback={<div className="h-96 bg-white"></div>}>
        <AboutSection />
      </Suspense>

      {/* Новая карусель изображений */}
      <ProjectsCarousel />

      {/* Services Section */}
      <Suspense fallback={<div className="h-96 bg-slate-50"></div>}>
        <ServicesSection />
      </Suspense>

      {/* Projects Section */}
      <Suspense fallback={<div className="h-96 bg-white"></div>}>
        <ProjectsSection />
      </Suspense>

      {/* Testimonials Section */}
      <Suspense fallback={<div className="h-96 bg-slate-900"></div>}>
        <TestimonialsSection />
      </Suspense>

      {/* Interactive Project Gallery - New Section */}
      <InteractiveProjectGallery />

      {/* Immersive Contact Section - New Section */}
      <ImmersiveContactSection />
    </div>
  )
}
