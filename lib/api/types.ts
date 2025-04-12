export interface Image {
  src: string
  alt: string
}

export interface Link {
  text: string
  url: string
}

export interface TeamMember {
  id: string
  name: string
  position: string
  image: string
  bio: string
  social: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface HistoryMilestone {
  year: number
  title: string
  description: string
  image: string
}

export interface CompanyValue {
  id: string
  icon: string
  title: string
  description: string
}

export interface Achievement {
  value: number
  title: string
  description: string
  suffix?: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  description: string
}

export interface MetaData {
  title: string
  description: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  workingHours: string
  mapLocation: {
    lat: number
    lng: number
  }
}

export interface ContactFaq {
  question: string
  answer: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface ProjectCategory {
  id: string
  name: string
  icon: string
  count: number
  image: string
  color: string
  description: string
}

export interface ServicesData {
  hero: {
    title: string
    subtitle: string
    backgroundImage: Image
  }
  servicesList: Service[]
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  slug: string
}

export interface HomeData {
  heroBanner: {
    title: string
    subtitle: string
    cta: Link
    backgroundImage: Image
  }
  services: Service[]
  featuredProjects: Project[]
  testimonials: Testimonial[]
  statistics: Statistic[]
  aboutFeatures: AboutFeature[]
  contactSection: {
    title: string
    subtitle: string
    cta: Link
  }
}

export interface Statistic {
  id: string
  value: number
  label: string
  suffix?: string
}

export interface AboutFeature {
  id: string
  text: string
}

export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  slug: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  position: string
}

export interface ProjectDetail {
  id: string
  slug: string
  title: string
  category: string
  location: string
  year: number
  client: string
  area: string
  description: string
  features: string[]
  images: string[]
  specs: {
    category: string
    items: {
      label: string
      value: string
    }[]
  }[]
  team: {
    name: string
    role: string
    image: string
  }[]
}
