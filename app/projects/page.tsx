import type { Metadata } from "next"
import ProjectsHero from "@/components/projects/projects-hero"
import ProjectFilterGallery from "@/components/projects/project-filter-gallery"
import ProjectCategories from "@/components/projects/project-categories"
import ProjectsShowcase from "@/components/projects/projects-showcase"
import ProjectsTimeline from "@/components/projects/projects-timeline"
import ArchitecturalProcess from "@/components/projects/architectural-process"
import CallToAction from "@/components/projects/call-to-action"

export const metadata: Metadata = {
  title: "Наши проекты | ConstructCo - Строительная компания",
  description: "Исследуйте наше портфолио строительных и архитектурных проектов, от концепции до завершения.",
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Героический раздел с 3D элементами */}
      <ProjectsHero />

      {/* Раздел категорий проектов с чертежным стилем */}
      <ProjectCategories />

      {/* Интерактивная фильтрация и галерея проектов */}
      <ProjectFilterGallery />

      {/* Избранные проекты с 3D-эффектами */}
      <ProjectsShowcase />

      {/* Временная шкала процесса строительства */}
      <ProjectsTimeline />

      {/* Архитектурный процесс с анимированными чертежами */}
      <ArchitecturalProcess />

      {/* Призыв к действию с интерактивным фоном */}
      <CallToAction />
    </div>
  )
}
