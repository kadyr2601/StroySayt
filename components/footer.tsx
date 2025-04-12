import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-4">Логотип</h3>
            <p className="mb-4 text-gray-300">
              Мы создаем пространства, которые вдохновляют, функциональны и долговечны. Наша команда профессионалов
              готова воплотить в жизнь ваши самые смелые идеи в Дубае и по всем ОАЭ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Проекты
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Жилищное строительство
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Коммерческое строительство
                </Link>
              </li>
              <li>
                <Link href="/services/renovation" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Реконструкция
                </Link>
              </li>
              <li>
                <Link href="/services/interior" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Дизайн интерьера
                </Link>
              </li>
              <li>
                <Link href="/services/architecture" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  Архитектурное проектирование
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Контакты</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-indigo-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Бизнес Бэй, Дубай, ОАЭ
                  <br />
                  P.O. Box 123456
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-indigo-400 flex-shrink-0" />
                <a href="tel:+97143216789" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  +971 4 321 6789
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-indigo-400 flex-shrink-0" />
                <a href="mailto:info@logocompany.ae" className="text-gray-300 hover:text-indigo-400 transition-colors">
                  info@logocompany.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Логотип. Все права защищены. Компания зарегистрирована в Дубае, ОАЭ.</p>
        </div>
      </div>
    </footer>
  )
}
