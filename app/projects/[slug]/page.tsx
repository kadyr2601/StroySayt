import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectDetailHero from "@/components/projects/project-detail-hero"
import ProjectOverview from "@/components/projects/project-overview"
import ProjectGallery from "@/components/projects/project-gallery"
import ProjectSpecs from "@/components/projects/project-specs"
import ProjectTeam from "@/components/projects/project-team"
import RelatedProjects from "@/components/projects/related-projects"
import ProjectCta from "@/components/projects/project-cta"

// Имитация данных проекта
const getProject = (slug: string) => {
  // В реальном приложении здесь был бы запрос к базе данных или API
  return {
    id: "1",
    slug, // Используем параметр slug
    title: "Современный офисный комплекс «Горизонт»",
    category: "Коммерческая недвижимость",
    location: "Москва, Россия",
    year: 2023,
    client: "ООО «Инвест Групп»",
    area: "45,000 м²",
    description:
        "Инновационный бизнес-центр класса A+ с уникальной архитектурной концепцией, интегрирующей современные технологии и устойчивое развитие в сердце делового района Москвы.",
    features: [
      "Энергоэффективный фасад с двойным остеклением",
      "Интеллектуальная система управления зданием",
      "Зеленые террасы и зоны отдыха",
      "Подземный паркинг на 500 мест",
      "Центральная атриумная зона",
    ],
    images: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    ],
  }
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject(params.slug)

  if (!project) {
    return {
      title: "Проект не найден | ConstructCo",
      description: "Запрашиваемый проект не найден",
    }
  }

  return {
    title: `${project.title} | Проекты ConstructCo`,
    description: project.description,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProject(params.slug)

  if (!project) {
    notFound()
  }

  return (
      <div className="min-h-screen">
        {/* Герой-секция с параллакс-эффектом */}
        <ProjectDetailHero project={project} />

        {/* Обзор проекта с интерактивными элементами */}
        <ProjectOverview project={project} />

        {/* Галерея фотографий */}
        <ProjectGallery images={project.images} title={project.title} />

        {/* Технические характеристики */}
        <ProjectSpecs project={project} />

        {/* Команда проекта */}
        <ProjectTeam project={project} />

        {/* Похожие проекты */}
        <RelatedProjects currentProjectId={project.id} />

        {/* Призыв к действию */}
        <ProjectCta />
      </div>
  )
}

