import type { ProjectCategory, ProjectDetail, MetaData } from "./types"

export const getProjectsPageMeta = async (): Promise<MetaData> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 100))

  return {
    title: "Наши проекты | Логотип",
    description: "Исследуйте наше портфолио строительных и архитектурных проектов, от концепции до завершения.",
  }
}

export const getProjectCategories = async (): Promise<ProjectCategory[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    {
      id: "commercial",
      name: "Коммерческое строительство",
      icon: "Building2",
      count: 24,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
      color: "from-blue-500 to-blue-600",
      description: "Офисные здания, торговые центры и бизнес-комплексы",
    },
    {
      id: "residential",
      name: "Жилое строительство",
      icon: "Home",
      count: 36,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop",
      color: "from-green-500 to-green-600",
      description: "Жилые комплексы, индивидуальные дома и таунхаусы",
    },
    {
      id: "educational",
      name: "Образовательные учреждения",
      icon: "School",
      count: 12,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop",
      color: "from-yellow-500 to-yellow-600",
      description: "Школы, университеты и исследовательские центры",
    },
    {
      id: "hospitality",
      name: "Гостиничный бизнес",
      icon: "Building",
      count: 18,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=600&auto=format&fit=crop",
      color: "from-purple-500 to-purple-600",
      description: "Отели, курорты и объекты отдыха",
    },
    {
      id: "healthcare",
      name: "Здравоохранение",
      icon: "HospitalSquare",
      count: 9,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
      color: "from-red-500 to-red-600",
      description: "Больницы, клиники и медицинские центры",
    },
    {
      id: "industrial",
      name: "Промышленное строительство",
      icon: "Factory",
      count: 15,
      image: "https://images.unsplash.com/photo-1565636291267-c03b2a0f8c5e?q=80&w=600&auto=format&fit=crop",
      color: "from-gray-600 to-gray-700",
      description: "Заводы, склады и логистические центры",
    },
    {
      id: "cultural",
      name: "Культурные объекты",
      icon: "ArmchairIcon",
      count: 7,
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=600&auto=format&fit=crop",
      color: "from-amber-500 to-amber-600",
      description: "Музеи, театры и культурные центры",
    },
  ]
}

export const getProjects = async (): Promise<ProjectDetail[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 150))

  return [
    {
      id: "burj-khalifa-residences",
      slug: "burj-khalifa-residences",
      title: "Burj Khalifa Residences",
      category: "Жилая недвижимость",
      location: "Downtown Dubai, UAE",
      year: 2022,
      client: "Emaar Properties",
      area: "35,000 м²",
      description: "Элитные жилые апартаменты с потрясающим видом на центр Дубая и знаменитый Бурдж-Халифа.",
      features: ["Панорамное остекление", "Умный дом", "Консьерж-сервис 24/7", "Спа и фитнес-центр"],
      images: [
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "dubai-marina-complex",
      slug: "dubai-marina-complex",
      title: "Dubai Marina Complex",
      category: "Коммерческая недвижимость",
      location: "Dubai Marina, UAE",
      year: 2021,
      client: "Dubai Properties",
      area: "50,000 м²",
      description: "Современные офисные помещения в сердце Дубай Марины с передовыми технологиями и удобствами.",
      features: ["Гибкие офисные пространства", "Зеленые террасы", "Конференц-центр", "Подземный паркинг"],
      images: [
        "https://images.unsplash.com/photo-1546412414-e1885e51cfa9?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "palm-jumeirah-villas",
      slug: "palm-jumeirah-villas",
      title: "Palm Jumeirah Villas",
      category: "Жилая недвижимость",
      location: "Palm Jumeirah, Dubai, UAE",
      year: 2023,
      client: "Nakheel",
      area: "20,000 м²",
      description: "Эксклюзивные виллы на искусственном острове Пальма Джумейра с прямым доступом к пляжу.",
      features: ["Частный пляж", "Бассейн с морской водой", "Умный дом", "Панорамные окна"],
      images: [
        "https://images.unsplash.com/photo-1622653533660-a1c5c0bcd2ae?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1546412414-e1885e51cfa9?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "business-bay-tower",
      slug: "business-bay-tower",
      title: "Business Bay Tower",
      category: "Коммерческая недвижимость",
      location: "Business Bay, Dubai, UAE",
      year: 2022,
      client: "Dubai Holding",
      area: "60,000 м²",
      description: "Инновационный бизнес-центр в районе Business Bay с современной архитектурой и технологиями.",
      features: [
        "Умная система управления зданием",
        "Зеленый сертификат LEED Gold",
        "Панорамные лифты",
        "Конференц-центр",
      ],
      images: [
        "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "dubai-creek-harbour",
      slug: "dubai-creek-harbour",
      title: "Dubai Creek Harbour",
      category: "Смешанное использование",
      location: "Dubai Creek, UAE",
      year: 2023,
      client: "Emaar Properties",
      area: "100,000 м²",
      description:
          "Многофункциональный комплекс на берегу Dubai Creek с жилыми, коммерческими и развлекательными объектами.",
      features: ["Набережная", "Торговый центр", "Жилые апартаменты", "Офисные помещения"],
      images: [
        "https://images.unsplash.com/photo-1605101100278-5d1deb2b6498?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
      ],
    },
    {
      id: "downtown-dubai-mall",
      slug: "downtown-dubai-mall",
      title: "Downtown Dubai Mall",
      category: "Коммерческая недвижимость",
      location: "Downtown Dubai, UAE",
      year: 2021,
      client: "Emaar Malls",
      area: "80,000 м²",
      description: "Современный торговый центр в центре Дубая с магазинами, ресторанами и развлекательными зонами.",
      features: ["Атриум с фонтаном", "Кинотеатр IMAX", "Детская игровая зона", "Подземный паркинг"],
      images: [
        "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=1000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop",
      ],
    },
  ]
}

export const getProjectBySlug = async (slug: string): Promise<ProjectDetail | null> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 150))

  const allProjects = await getProjects()
  const project = allProjects.find((p) => p.slug === slug)

  if (!project) return null

  // Добавляем дополнительные данные для детальной страницы проекта
  return {
    ...project,
    specs: [
      {
        category: "Архитектура",
        items: [
          { label: "Общая площадь", value: project.area },
          { label: "Количество этажей", value: "22" },
          { label: "Высота здания", value: "95 м" },
          { label: "Площадь типового этажа", value: "1,800 м²" },
        ],
      },
      {
        category: "Инженерные системы",
        items: [
          { label: "Система кондиционирования", value: "Центральная, 4-трубная" },
          { label: "Вентиляция", value: "Приточно-вытяжная с рекуперацией" },
          { label: "Электроснабжение", value: "Двойное резервирование" },
          { label: "Лифты", value: "12 высокоскоростных лифтов" },
        ],
      },
      {
        category: "Экологичность",
        items: [
          { label: "Сертификация", value: "LEED Gold" },
          { label: "Энергоэффективность", value: "Класс A+" },
          { label: "Солнечные панели", value: "400 кВт" },
          { label: "Сбор дождевой воды", value: "Система рециркуляции" },
        ],
      },
    ],
    team: [
      {
        name: "Алексей Петров",
        role: "Главный архитектор",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Мария Иванова",
        role: "Руководитель проекта",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Сергей Смирнов",
        role: "Главный инженер",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
      },
      {
        name: "Екатерина Козлова",
        role: "Дизайнер интерьеров",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
      },
    ],
  }
}

export const getRelatedProjects = async (currentProjectId: string): Promise<ProjectDetail[]> => {
  // Имитация задержки API
  await new Promise((resolve) => setTimeout(resolve, 150))

  const allProjects = await getProjects()
  return allProjects.filter((project) => project.id !== currentProjectId).slice(0, 3)
}
