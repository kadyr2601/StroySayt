"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Hammer,
  Briefcase,
  Users,
  Phone,
  Home,
  ArrowRight,
  MapPin,
} from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null)
  const isMobile = useIsMobile()
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setHoverDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoverDropdown(null)
    }, 300)
  }

  // Данные для выпадающих списков
  const servicesItems = [
    { title: "Коммерческое строительство", slug: "commercial-construction" },
    { title: "Жилищное строительство", slug: "residential-construction" },
    { title: "Ремонт и реконструкция", slug: "renovation-remodeling" },
    { title: "Инфраструктурное развитие", slug: "infrastructure-development" },
    { title: "Управление проектами", slug: "project-management" },
    { title: "Проектирование", slug: "design-build" },
  ]

  const projectsItems = [
    { title: "Коммерческие проекты", slug: "commercial" },
    { title: "Жилые проекты", slug: "residential" },
    { title: "Инфраструктурные проекты", slug: "infrastructure" },
  ]

  // Определяем активный пункт меню
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  return (
      <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-2" : "py-4"}`}
          style={{
            background: isScrolled
                ? "rgba(255, 255, 255, 0.9)"
                : "linear-gradient(90deg, rgba(23, 37, 84, 0.95) 0%, rgba(30, 58, 138, 0.95) 100%)",
            backdropFilter: "blur(10px)",
          }}
      >
        <div className="container mx-auto px-4">
          {/* Оригинальная структура навбара */}
          <div className="flex items-center justify-between">
            {/* Логотип с оригинальным дизайном */}
            <Link href="/" className="relative group">
              <div
                  className={`flex items-center space-x-3 transition-all duration-300 ${
                      isScrolled ? "text-indigo-700" : "text-white"
                  }`}
              >
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-70 blur group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-white p-2 rounded-full">
                    <Building2 className="h-7 w-7 text-indigo-600" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">Логотип</span>
                </div>
              </div>
            </Link>

            {/* Мобильное меню */}
            {isMobile ? (
                <button
                    onClick={toggleMenu}
                    className={`focus:outline-none transition-colors duration-300 ${
                        isScrolled ? "text-indigo-700" : "text-white"
                    }`}
                    aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            ) : (
                /* Оригинальное десктопное меню - круговые элементы */
                <div className="hidden lg:flex items-center">
                  <nav className="flex items-center space-x-1">
                    {/* Главная */}
                    <Link
                        href="/"
                        className={`
                    relative px-5 py-2 rounded-full transition-all duration-300 
                    ${
                            isActive("/")
                                ? isScrolled
                                    ? "bg-indigo-100 text-indigo-700"
                                    : "bg-white/20 text-white"
                                : isScrolled
                                    ? "text-indigo-700 hover:bg-indigo-50"
                                    : "text-white hover:bg-white/10"
                        }
                  `}
                    >
                      <div className="flex items-center space-x-2">
                        <Home size={18} />
                        <span>Главная</span>
                      </div>
                    </Link>

                    {/* Услуги с выпадающим списком */}
                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("services")}
                        onMouseLeave={handleMouseLeave}
                    >
                      <button
                          onClick={() => toggleDropdown("services")}
                          className={`
                      flex items-center space-x-2 px-5 py-2 rounded-full transition-all duration-300
                      ${
                              isActive("/services")
                                  ? isScrolled
                                      ? "bg-indigo-100 text-indigo-700"
                                      : "bg-white/20 text-white"
                                  : isScrolled
                                      ? "text-indigo-700 hover:bg-indigo-50"
                                      : "text-white hover:bg-white/10"
                          }
                    `}
                      >
                        <Briefcase size={18} />
                        <span>Услуги</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                                activeDropdown === "services" || hoverDropdown === "services" ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Оригинальное выпадающее меню услуг */}
                      <div
                          className={`
                      absolute left-0 mt-3 w-72 rounded-2xl overflow-hidden transition-all duration-300 
                      ${
                              activeDropdown === "services" || hoverDropdown === "services"
                                  ? "opacity-100 translate-y-0 pointer-events-auto"
                                  : "opacity-0 -translate-y-4 pointer-events-none"
                          }
                    `}
                          style={{
                            background: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                          }}
                      >
                        <div className="p-3 grid grid-cols-1 gap-1">
                          {servicesItems.map((item) => (
                              <Link
                                  key={item.slug}
                                  href={`/services/${item.slug}`}
                                  className="group flex items-center p-3 rounded-xl hover:bg-indigo-50 transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setHoverDropdown(null)
                                  }}
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                                  <Hammer size={18} className="text-indigo-600" />
                                </div>
                                <div>
                                  <span className="text-gray-800 font-medium">{item.title}</span>
                                </div>
                                <ArrowRight
                                    size={16}
                                    className="ml-auto text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                              </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Проекты с выпадающим списком */}
                    <div
                        className="relative"
                        onMouseEnter={() => handleMouseEnter("projects")}
                        onMouseLeave={handleMouseLeave}
                    >
                      <button
                          onClick={() => toggleDropdown("projects")}
                          className={`
                      flex items-center space-x-2 px-5 py-2 rounded-full transition-all duration-300
                      ${
                              isActive("/projects")
                                  ? isScrolled
                                      ? "bg-indigo-100 text-indigo-700"
                                      : "bg-white/20 text-white"
                                  : isScrolled
                                      ? "text-indigo-700 hover:bg-indigo-50"
                                      : "text-white hover:bg-white/10"
                          }
                    `}
                      >
                        <Building2 size={18} />
                        <span>Проекты</span>
                        <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${
                                activeDropdown === "projects" || hoverDropdown === "projects" ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {/* Оригинальное выпадающее меню проектов */}
                      <div
                          className={`
                      absolute left-0 mt-3 w-64 rounded-2xl overflow-hidden transition-all duration-300 
                      ${
                              activeDropdown === "projects" || hoverDropdown === "projects"
                                  ? "opacity-100 translate-y-0 pointer-events-auto"
                                  : "opacity-0 -translate-y-4 pointer-events-none"
                          }
                    `}
                          style={{
                            background: "rgba(255, 255, 255, 0.95)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                          }}
                      >
                        <div className="p-3 grid grid-cols-1 gap-1">
                          {projectsItems.map((item) => (
                              <Link
                                  key={item.slug}
                                  href={`/projects/${item.slug}`}
                                  className="group flex items-center p-3 rounded-xl hover:bg-indigo-50 transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null)
                                    setHoverDropdown(null)
                                  }}
                              >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 group-hover:bg-indigo-200 transition-colors">
                                  <Building2 size={18} className="text-indigo-600" />
                                </div>
                                <div>
                                  <span className="text-gray-800 font-medium">{item.title}</span>
                                </div>
                                <ArrowRight
                                    size={16}
                                    className="ml-auto text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                              </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* О нас */}
                    <Link
                        href="/about"
                        className={`
                    relative px-5 py-2 rounded-full transition-all duration-300 
                    ${
                            isActive("/about")
                                ? isScrolled
                                    ? "bg-indigo-100 text-indigo-700"
                                    : "bg-white/20 text-white"
                                : isScrolled
                                    ? "text-indigo-700 hover:bg-indigo-50"
                                    : "text-white hover:bg-white/10"
                        }
                  `}
                    >
                      <div className="flex items-center space-x-2">
                        <Users size={18} />
                        <span>О нас</span>
                      </div>
                    </Link>

                    {/* Контакты */}
                    <Link
                        href="/contact"
                        className={`
                    relative px-5 py-2 rounded-full transition-all duration-300 
                    ${
                            isActive("/contact")
                                ? isScrolled
                                    ? "bg-indigo-100 text-indigo-700"
                                    : "bg-white/20 text-white"
                                : isScrolled
                                    ? "text-indigo-700 hover:bg-indigo-50"
                                    : "text-white hover:bg-white/10"
                        }
                  `}
                    >
                      <div className="flex items-center space-x-2">
                        <Phone size={18} />
                        <span>Контакты</span>
                      </div>
                    </Link>
                  </nav>

                  {/* Оригинальная кнопка "Получить консультацию" */}
                  <div className="ml-6">
                    <Link
                        href="/contact"
                        className="relative overflow-hidden px-6 py-2.5 rounded-full inline-block transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-blue-500/30 group"
                    >
                      <span className="relative z-10 font-medium">Получить консультацию</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </div>
                </div>
            )}
          </div>

          {/* Оригинальное мобильное меню */}
          {isMobile && isMenuOpen && (
              <div className="fixed inset-0 z-50 bg-gradient-to-br from-indigo-900 to-blue-800">
                <div className="container mx-auto px-4 py-8 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center">
                      <Link href="/" className="text-2xl font-bold text-white" onClick={closeMenu}>
                        Логотип
                      </Link>
                      <span className="text-white/80 text-sm ml-2 flex items-center">
                    <MapPin size={12} className="mr-1" /> Дубай, ОАЭ
                  </span>
                    </div>
                    <button onClick={closeMenu} className="text-white focus:outline-none">
                      <X size={24} />
                    </button>
                  </div>

                  <nav className="flex-1 flex flex-col space-y-4">
                    <Link href="/" className="text-white text-xl py-3 flex items-center space-x-3" onClick={closeMenu}>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Home size={20} />
                      </div>
                      <span>Главная</span>
                    </Link>

                    <div>
                      <button
                          onClick={() => toggleDropdown("mobile-services")}
                          className="text-white text-xl py-3 w-full text-left flex items-center justify-between space-x-3"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <Briefcase size={20} />
                          </div>
                          <span>Услуги</span>
                        </div>
                        <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                                activeDropdown === "mobile-services" ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {activeDropdown === "mobile-services" && (
                          <div className="mt-2 ml-12 space-y-3 border-l-2 border-white/20 pl-4">
                            {servicesItems.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/services/${item.slug}`}
                                    className="text-white/80 hover:text-white block py-2 transition-colors"
                                    onClick={closeMenu}
                                >
                                  {item.title}
                                </Link>
                            ))}
                          </div>
                      )}
                    </div>

                    <div>
                      <button
                          onClick={() => toggleDropdown("mobile-projects")}
                          className="text-white text-xl py-3 w-full text-left flex items-center justify-between space-x-3"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                            <Building2 size={20} />
                          </div>
                          <span>Проекты</span>
                        </div>
                        <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                                activeDropdown === "mobile-projects" ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      {activeDropdown === "mobile-projects" && (
                          <div className="mt-2 ml-12 space-y-3 border-l-2 border-white/20 pl-4">
                            {projectsItems.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/projects/${item.slug}`}
                                    className="text-white/80 hover:text-white block py-2 transition-colors"
                                    onClick={closeMenu}
                                >
                                  {item.title}
                                </Link>
                            ))}
                          </div>
                      )}
                    </div>

                    <Link href="/about" className="text-white text-xl py-3 flex items-center space-x-3" onClick={closeMenu}>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Users size={20} />
                      </div>
                      <span>О нас</span>
                    </Link>

                    <Link
                        href="/contact"
                        className="text-white text-xl py-3 flex items-center space-x-3"
                        onClick={closeMenu}
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone size={20} />
                      </div>
                      <span>Контакты</span>
                    </Link>
                  </nav>

                  <div className="mt-auto pt-6">
                    <Link
                        href="/contact"
                        className="block w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-center font-medium text-lg text-white"
                        onClick={closeMenu}
                    >
                      Получить консультацию
                    </Link>
                  </div>
                </div>
              </div>
          )}
        </div>
      </header>
  )
}
