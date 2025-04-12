import { homeData } from "./home"
import { servicesData, servicesList } from "./services"
import { projectsData, projectsList } from "./projects"
import { aboutData } from "./about"
import { contactData } from "./contact"

// Имитация задержки API
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Функции для получения данных с имитацией API
export async function getHomeData() {
  await delay(300) // Имитация задержки сети
  return homeData
}

export async function getServicesData() {
  await delay(300)
  return servicesData
}

export async function getServicesList() {
  await delay(300)
  return servicesList
}

export async function getServiceBySlug(slug: string) {
  await delay(300)
  return servicesList.find((service) => service.slug === slug)
}

export async function getProjectsData() {
  await delay(300)
  return projectsData
}

export async function getProjectsList() {
  await delay(300)
  return projectsList
}

export async function getProjectBySlug(slug: string) {
  await delay(300)
  return projectsList.find((project) => project.slug === slug)
}

export async function getAboutData() {
  await delay(300)
  return aboutData
}

export async function getContactData() {
  await delay(300)
  return contactData
}
