import type { HomeData, Statistic, AboutFeature, Service, Project, Testimonial } from "./types"

export const homeData: HomeData = {
  heroBanner: {
    title: "Строим будущее вместе",
    subtitle: "Инновационные строительные решения для вашего бизнеса и дома",
    cta: {
      text: "Наши проекты",
      url: "/projects",
    },
    backgroundImage: {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      alt: "Современное здание с инновационной архитектурой",
    },
  },
  services: [
    {
      id: "1",
      title: "Жилищное строительство",
      description: "Создаем комфортные и энергоэффективные дома, которые прослужат поколениям.",
      icon: "Building2",
      slug: "residential",
    },
    {
      id: "2",
      title: "Коммерческое строительство",
      description: "Строим функциональные коммерческие объекты, которые помогают бизнесу процветать.",
      icon: "Building2",
      slug: "commercial",
    },
    {
      id: "3",
      title: "Реконструкция",
      description: "Даем новую жизнь старым зданиям, сохраняя их историческую ценность.",
      icon: "Hammer",
      slug: "renovation",
    },
    {
      id: "4",
      title: "Дизайн интерьера",
      description: "Создаем уникальные интерьеры, которые отражают вашу индивидуальность.",
      icon: "CheckCircle",
      slug: "interior",
    },
    {
      id: "5",
      title: "Архитектурное проектирование",
      description: "Разрабатываем инновационные архитектурные решения для зданий любого назначения.",
      icon: "CheckCircle",
      slug: "architecture",
    },
    {
      id: "6",
      title: "Ландшафтный дизайн",
      description: "Преображаем окружающую среду, создавая гармоничные ландшафты.",
      icon: "MapPin",
      slug: "landscape",
    },
  ],
  featuredProjects: [
    {
      id: "1",
      title: 'Жилой комплекс "Горизонт"',
      category: "Жилищное строительство",
      description: "Современный жилой комплекс с панорамными видами и развитой инфраструктурой.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      slug: "horizon-residential-complex",
    },
    {
      id: "2",
      title: 'Бизнес-центр "Меркурий"',
      category: "Коммерческое строительство",
      description: "Инновационный бизнес-центр класса А с современными технологиями и комфортными офисами.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop",
      slug: "mercury-business-center",
    },
    {
      id: "3",
      title: "Реконструкция исторического здания",
      category: "Реконструкция",
      description: "Восстановление исторического облика здания с сохранением его культурной ценности.",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
      slug: "historical-building-renovation",
    },
  ],
  testimonials: [
    {
      id: "1",
      quote:
        "СтройМастер превзошел все наши ожидания. Их команда профессионалов выполнила проект в срок и в рамках бюджета. Мы обязательно будем работать с ними снова.",
      author: "Алексей Петров",
      position: 'Генеральный директор, ООО "Инвест Строй"',
    },
    {
      id: "2",
      quote:
        "Благодаря СтройМастер наш ресторан получил уникальный дизайн, который привлекает новых клиентов каждый день. Их внимание к деталям просто поразительно.",
      author: "Елена Смирнова",
      position: 'Владелец, Ресторан "Панорама"',
    },
    {
      id: "3",
      quote:
        "Мы выбрали СтройМастер для строительства нашего жилого комплекса и не пожалели. Качество работы и профессионализм команды на высшем уровне.",
      author: "Иван Козлов",
      position: 'Директор по развитию, ЖК "Новые горизонты"',
    },
  ],
  statistics: [
    {
      id: "1",
      value: 25,
      label: "лет опыта",
      suffix: "",
    },
    {
      id: "2",
      value: 500,
      label: "завершенных проектов",
      suffix: "+",
    },
    {
      id: "3",
      value: 150,
      label: "профессионалов в команде",
      suffix: "",
    },
    {
      id: "4",
      value: 98,
      label: "довольных клиентов",
      suffix: "%",
    },
  ],
  aboutFeatures: [
    {
      id: "1",
      text: "Приверженность качеству и безопасности в каждом проекте",
    },
    {
      id: "2",
      text: "Высококвалифицированная команда профессионалов и мастеров",
    },
    {
      id: "3",
      text: "Устойчивые строительные практики и материалы",
    },
  ],
  contactSection: {
    title: "Готовы начать свой проект?",
    subtitle: "Свяжитесь с нами сегодня, и мы поможем воплотить ваши идеи в реальность.",
    cta: {
      text: "Связаться с нами",
      url: "/contact",
    },
  },
}

// Имитация задержки API
const apiDelay = () => new Promise((resolve) => setTimeout(resolve, 300))

// Функции для получения данных
export async function getHomeStats(): Promise<Statistic[]> {
  await apiDelay()
  return homeData.statistics
}

export async function getAboutFeatures(): Promise<AboutFeature[]> {
  await apiDelay()
  return homeData.aboutFeatures
}

export async function getFeaturedServices(): Promise<Service[]> {
  await apiDelay()
  return homeData.services
}

export async function getFeaturedProjects(): Promise<Project[]> {
  await apiDelay()
  return homeData.featuredProjects
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await apiDelay()
  return homeData.testimonials
}

export async function getHeroBanner() {
  await apiDelay()
  return homeData.heroBanner
}

export async function getContactSection() {
  await apiDelay()
  return homeData.contactSection
}
