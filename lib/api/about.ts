import type { TeamMember, HistoryMilestone, CompanyValue, Achievement, Partner, MetaData } from "./types"

export const getAboutPageMeta = async (): Promise<MetaData> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
    title: "О нас | СтройКомпания",
    description: "Узнайте больше о нашей компании, истории, ценностях и команде профессионалов в строительной отрасли.",
  }
}

export const getTeamMembers = async (): Promise<TeamMember[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    {
      id: "1",
      name: "Александр Иванов",
      position: "Генеральный директор",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      bio: "Александр имеет более 25 лет опыта в строительной отрасли. Под его руководством компания выросла из небольшой местной фирмы в одну из ведущих строительных компаний региона.",
      social: {
        linkedin: "https://linkedin.com/in/alexandr-ivanov",
        email: "a.ivanov@stroycompany.ru",
      },
    },
    {
      id: "2",
      name: "Елена Петрова",
      position: "Технический директор",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      bio: "Елена руководит всеми техническими аспектами наших проектов. Ее инженерный опыт и внимание к деталям обеспечивают высочайшее качество и инновационные решения в каждом проекте.",
      social: {
        linkedin: "https://linkedin.com/in/elena-petrova",
        twitter: "https://twitter.com/epetrova",
        email: "e.petrova@stroycompany.ru",
      },
    },
    {
      id: "3",
      name: "Михаил Сидоров",
      position: "Финансовый директор",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      bio: "Михаил отвечает за финансовую стратегию компании и обеспечивает эффективное управление ресурсами. Его опыт в финансовом планировании помогает нам оставаться конкурентоспособными и стабильными.",
      social: {
        linkedin: "https://linkedin.com/in/mikhail-sidorov",
        email: "m.sidorov@stroycompany.ru",
      },
    },
    {
      id: "4",
      name: "Анна Козлова",
      position: "Директор по маркетингу",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      bio: "Анна руководит маркетинговой стратегией компании, обеспечивая сильное присутствие бренда на рынке и привлечение новых клиентов. Ее креативный подход и понимание рынка являются ключевыми для нашего роста.",
      social: {
        linkedin: "https://linkedin.com/in/anna-kozlova",
        twitter: "https://twitter.com/akozlova",
        email: "a.kozlova@stroycompany.ru",
      },
    },
    {
      id: "5",
      name: "Дмитрий Новиков",
      position: "Главный архитектор",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      bio: "Дмитрий возглавляет нашу архитектурную команду, создавая инновационные и функциональные дизайны для всех наших проектов. Его видение и творческий подход преобразуют идеи клиентов в выдающиеся архитектурные решения.",
      social: {
        linkedin: "https://linkedin.com/in/dmitry-novikov",
        email: "d.novikov@stroycompany.ru",
      },
    },
  ]
}

export const getHistoryMilestones = async (): Promise<HistoryMilestone[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 150))

  return [
    {
      year: 1998,
      title: "Основание компании",
      description:
        "СтройКомпания была основана с видением создания качественных строительных решений для растущего рынка.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      year: 2003,
      title: "Первый крупный проект",
      description:
        "Завершение первого крупного коммерческого проекта - бизнес-центра 'Меркурий', который стал знаковым для компании.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      year: 2008,
      title: "Расширение на жилищный сектор",
      description: "Начало работы в секторе жилищного строительства с запуском первого жилого комплекса 'Гармония'.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      year: 2012,
      title: "Внедрение экологических стандартов",
      description:
        "Принятие экологических стандартов строительства и получение первого сертификата LEED для проекта 'Зеленый офис'.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      year: 2015,
      title: "Международное признание",
      description:
        "Получение международной награды за инновационный дизайн и устойчивое строительство торгового центра 'Галактика'.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      year: 2018,
      title: "20-летний юбилей",
      description:
        "Празднование 20-летия компании и запуск программы социальной ответственности для поддержки местных сообществ.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      year: 2021,
      title: "Цифровая трансформация",
      description:
        "Внедрение передовых цифровых технологий, включая BIM-моделирование и автоматизацию процессов строительства.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
    {
      year: 2023,
      title: "Новые горизонты",
      description:
        "Расширение деятельности на новые регионы и запуск инновационных проектов в области устойчивого развития.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
    },
  ]
}

export const getCompanyValues = async (): Promise<CompanyValue[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 120))

  return [
    {
      id: "quality",
      icon: "Shield",
      title: "Качество",
      description:
        "Мы стремимся к совершенству во всем, что делаем, от материалов, которые мы выбираем, до мастерства, которое мы демонстрируем, и отношений, которые мы строим.",
    },
    {
      id: "integrity",
      icon: "Heart",
      title: "Честность",
      description:
        "Мы ведем бизнес с полной прозрачностью и этичностью, строя доверительные отношения с клиентами, партнерами и сотрудниками.",
    },
    {
      id: "innovation",
      icon: "Lightbulb",
      title: "Инновации",
      description:
        "Мы постоянно ищем новые идеи, технологии и методы, чтобы улучшить наши процессы и предоставить передовые решения нашим клиентам.",
    },
    {
      id: "sustainability",
      icon: "Leaf",
      title: "Устойчивое развитие",
      description:
        "Мы привержены экологически ответственным практикам строительства, которые минимизируют воздействие на окружающую среду и способствуют здоровому будущему.",
    },
    {
      id: "teamwork",
      icon: "Users",
      title: "Командная работа",
      description:
        "Мы верим в силу сотрудничества, объединяя разнообразные таланты и перспективы для достижения общих целей и превосходных результатов.",
    },
    {
      id: "client-focus",
      icon: "Target",
      title: "Ориентация на клиента",
      description:
        "Мы ставим потребности и видение наших клиентов в центр всего, что мы делаем, стремясь превзойти их ожидания на каждом этапе.",
    },
  ]
}

export const getAchievements = async (): Promise<Achievement[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 180))

  return [
    {
      value: 500,
      suffix: "+",
      title: "Завершенных проектов",
      description: "Успешно доставленных строительных проектов различных типов и масштабов по всей стране.",
    },
    {
      value: 25,
      title: "Лет опыта",
      description: "Четверть века опыта в строительной отрасли, создавая качественные здания и инфраструктуру.",
    },
    {
      value: 150,
      title: "Профессионалов",
      description: "Талантливых и преданных профессионалов, составляющих нашу разнообразную и опытную команду.",
    },
    {
      value: 30,
      title: "Отраслевых наград",
      description: "Признание за выдающиеся достижения в дизайне, качестве строительства и инновациях.",
    },
    {
      value: 98,
      suffix: "%",
      title: "Удовлетворенность клиентов",
      description: "Высокий уровень удовлетворенности клиентов, отражающий наше стремление к совершенству.",
    },
    {
      value: 15,
      title: "Зеленых сертификатов",
      description:
        "Проекты, сертифицированные по стандартам устойчивого строительства, демонстрирующие нашу приверженность экологичности.",
    },
  ]
}

export const getPartners = async (): Promise<Partner[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 130))

  return [
    {
      id: "1",
      name: "АрхитектПро",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Ведущая архитектурная фирма, специализирующаяся на инновационном дизайне.",
    },
    {
      id: "2",
      name: "ИнженерСтрой",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Эксперты в области инженерных систем и технических решений для строительства.",
    },
    {
      id: "3",
      name: "ЭкоМатериалы",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Поставщик экологически чистых и устойчивых строительных материалов.",
    },
    {
      id: "4",
      name: "ТехноСистемы",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Интеграторы современных технологических решений для умных зданий.",
    },
    {
      id: "5",
      name: "ФинансИнвест",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Финансовый партнер, обеспечивающий инвестиционные решения для крупных проектов.",
    },
    {
      id: "6",
      name: "ЛогистикПро",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Логистический партнер, обеспечивающий своевременную доставку материалов.",
    },
    {
      id: "7",
      name: "СтройКонтроль",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Независимая организация по контролю качества строительства.",
    },
    {
      id: "8",
      name: "ДизайнИнтерьер",
      logo: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      description: "Студия дизайна интерьеров, создающая функциональные и эстетичные пространства.",
    },
  ]
}
