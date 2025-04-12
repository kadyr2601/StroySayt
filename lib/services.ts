export interface ServiceProcess {
  step: number
  title: string
  description: string
  icon: string
}

export interface ServiceProject {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export interface ServiceFaq {
  question: string
  answer: string
}

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  heroImage: string
  features: {
    title: string
    description: string
  }[]
  process: ServiceProcess[]
  projects: ServiceProject[]
  faqs: ServiceFaq[]
  metaTitle?: string
  metaDescription?: string
}

export const services: Service[] = [
  {
    id: "commercial-construction",
    slug: "commercial-construction",
    title: "Commercial Construction",
    shortDescription:
      "Office buildings, retail spaces, and industrial facilities built to the highest standards of quality and efficiency.",
    fullDescription:
      "Our commercial construction services deliver exceptional quality, efficiency, and value for businesses of all sizes. From office buildings and retail spaces to industrial facilities and warehouses, we bring expertise, innovation, and attention to detail to every project. Our team works closely with clients to understand their unique needs and deliver solutions that enhance functionality, aesthetics, and sustainability.",
    icon: "Building2",
    heroImage: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000&auto=format&fit=crop",
    features: [
      {
        title: "Custom Design Solutions",
        description:
          "Tailored architectural and engineering solutions that align with your business objectives and brand identity.",
      },
      {
        title: "Sustainable Building Practices",
        description:
          "Eco-friendly construction methods and materials that reduce environmental impact and operating costs.",
      },
      {
        title: "Regulatory Compliance",
        description:
          "Comprehensive knowledge of commercial building codes and regulations to ensure all projects meet or exceed requirements.",
      },
      {
        title: "Efficient Project Management",
        description: "Streamlined processes and experienced project managers to ensure on-time, on-budget completion.",
      },
      {
        title: "Quality Craftsmanship",
        description:
          "Skilled tradespeople and premium materials for durable, high-quality construction that stands the test of time.",
      },
      {
        title: "Technology Integration",
        description:
          "Incorporation of smart building technologies for enhanced efficiency, security, and user experience.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Consultation & Planning",
        description:
          "We begin with a thorough consultation to understand your business needs, objectives, and vision for the project. Our team of experts works with you to develop a comprehensive plan that addresses all aspects of the construction process.",
        icon: "Users",
      },
      {
        step: 2,
        title: "Design & Engineering",
        description:
          "Our architects and engineers create detailed designs and specifications that align with your requirements and budget. We incorporate sustainable practices and innovative solutions to maximize efficiency and functionality.",
        icon: "PenTool",
      },
      {
        step: 3,
        title: "Permitting & Approvals",
        description:
          "We handle all necessary permits and approvals, navigating complex regulatory requirements to ensure compliance with local, state, and federal regulations. Our expertise in this area helps prevent delays and complications.",
        icon: "ClipboardCheck",
      },
      {
        step: 4,
        title: "Construction Execution",
        description:
          "Our skilled construction teams bring your project to life with precision and attention to detail. We maintain strict quality control standards and regular communication throughout the building process.",
        icon: "Hammer",
      },
      {
        step: 5,
        title: "Quality Assurance",
        description:
          "Rigorous inspections and quality checks are conducted at every stage to ensure all work meets our high standards. We address any issues promptly to maintain project integrity and timeline.",
        icon: "CheckCircle",
      },
      {
        step: 6,
        title: "Project Completion & Handover",
        description:
          "Upon completion, we conduct a final walkthrough with you to ensure all aspects of the project meet your expectations. We provide comprehensive documentation and training for any systems or features.",
        icon: "Key",
      },
    ],
    projects: [
      {
        id: "tech-office-complex",
        title: "Tech Innovation Office Complex",
        description:
          "A modern 50,000 sq ft office complex featuring open workspaces, collaborative areas, and state-of-the-art technology infrastructure.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Office Building",
      },
      {
        id: "retail-center",
        title: "Westside Retail Center",
        description:
          "A 30,000 sq ft retail development with 15 commercial units, featuring contemporary design and sustainable building practices.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Retail",
      },
      {
        id: "manufacturing-facility",
        title: "Advanced Manufacturing Facility",
        description:
          "A 75,000 sq ft industrial facility with specialized production areas, warehousing, and administrative offices.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Industrial",
      },
    ],
    faqs: [
      {
        question: "How long does a typical commercial construction project take?",
        answer:
          "Project timelines vary based on size, complexity, and specific requirements. A small office renovation might take 2-3 months, while a large commercial building could take 12-18 months. During our initial consultation, we'll provide a detailed timeline specific to your project.",
      },
      {
        question: "Do you handle all aspects of the commercial construction process?",
        answer:
          "Yes, we offer comprehensive services that cover every phase of commercial construction, from initial planning and design to final completion and handover. This includes permitting, site preparation, construction, mechanical/electrical/plumbing systems, interior finishes, and exterior work.",
      },
      {
        question: "How do you ensure projects stay within budget?",
        answer:
          "We implement rigorous cost control measures throughout the project lifecycle. This includes detailed initial estimates, regular budget reviews, value engineering when appropriate, and transparent communication about any potential cost impacts. Our experienced project managers closely monitor expenses to prevent overruns.",
      },
      {
        question: "Can you work with our existing architectural plans?",
        answer:
          "Absolutely. We're happy to work with plans you've already developed with an architect. Our team will review the plans, provide feedback if needed, and implement them according to specifications. We can also recommend architectural partners if you haven't yet developed plans.",
      },
      {
        question: "What types of commercial projects do you specialize in?",
        answer:
          "We have extensive experience across various commercial sectors, including office buildings, retail spaces, restaurants, hotels, medical facilities, warehouses, and industrial buildings. Our diverse portfolio demonstrates our ability to meet the unique requirements of different commercial environments.",
      },
    ],
    metaTitle: "Commercial Construction Services | Expert Builders for Business Facilities",
    metaDescription:
      "Professional commercial construction services for office buildings, retail spaces, and industrial facilities. Quality craftsmanship, efficient project management, and sustainable building practices.",
  },
  {
    id: "residential-construction",
    slug: "residential-construction",
    title: "Residential Construction",
    shortDescription:
      "Custom homes, multi-family dwellings, and residential developments that combine beauty, comfort, and durability.",
    fullDescription:
      "Our residential construction services create exceptional living spaces that reflect your unique lifestyle and preferences. Whether you're building a custom home, developing a multi-family property, or renovating an existing residence, our team brings creativity, craftsmanship, and attention to detail to every project. We focus on quality materials, energy efficiency, and thoughtful design to create homes that are beautiful, comfortable, and built to last.",
    icon: "Home",
    heroImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
    features: [
      {
        title: "Custom Home Design",
        description:
          "Personalized architectural designs that reflect your lifestyle, preferences, and vision for your dream home.",
      },
      {
        title: "Quality Craftsmanship",
        description: "Skilled artisans and tradespeople who take pride in their work and attention to detail.",
      },
      {
        title: "Energy Efficiency",
        description:
          "Sustainable building practices and materials that reduce environmental impact and lower utility costs.",
      },
      {
        title: "Smart Home Integration",
        description: "Cutting-edge technology solutions for comfort, convenience, security, and energy management.",
      },
      {
        title: "Outdoor Living Spaces",
        description:
          "Thoughtfully designed exterior areas that extend your living space and enhance your connection to nature.",
      },
      {
        title: "Warranty Protection",
        description: "Comprehensive warranty coverage that provides peace of mind and protects your investment.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We begin by understanding your vision, needs, lifestyle, and budget. This foundational meeting helps us align our services with your expectations and establish the groundwork for a successful project.",
        icon: "Users",
      },
      {
        step: 2,
        title: "Design Development",
        description:
          "Our design team works with you to create a home that reflects your personal style and functional requirements. We develop detailed plans, select materials, and finalize specifications for your approval.",
        icon: "PenTool",
      },
      {
        step: 3,
        title: "Budgeting & Scheduling",
        description:
          "We provide transparent cost estimates and develop a realistic timeline for your project. Our detailed planning at this stage helps prevent surprises and ensures smooth execution.",
        icon: "Calendar",
      },
      {
        step: 4,
        title: "Permitting & Pre-Construction",
        description:
          "We handle all necessary permits and approvals, prepare the site, and coordinate with subcontractors and suppliers to ensure everything is ready for construction to begin.",
        icon: "ClipboardCheck",
      },
      {
        step: 5,
        title: "Construction",
        description:
          "Our skilled construction team brings your home to life with precision and care. We maintain regular communication and site meetings to keep you informed throughout the building process.",
        icon: "Hammer",
      },
      {
        step: 6,
        title: "Quality Inspections & Completion",
        description:
          "We conduct thorough inspections at key stages and address any issues promptly. Upon completion, we perform a detailed walkthrough with you to ensure your complete satisfaction.",
        icon: "CheckCircle",
      },
    ],
    projects: [
      {
        id: "luxury-custom-home",
        title: "Lakeside Luxury Custom Home",
        description:
          "A 4,500 sq ft custom residence featuring open-concept living spaces, premium finishes, and expansive views of the surrounding landscape.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Custom Home",
      },
      {
        id: "modern-townhomes",
        title: "Urban Modern Townhomes",
        description:
          "A development of 12 contemporary townhomes with efficient floor plans, high-end finishes, and integrated smart home technology.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Multi-Family",
      },
      {
        id: "sustainable-residence",
        title: "Eco-Friendly Family Residence",
        description:
          "A 3,200 sq ft sustainable home featuring solar power, advanced insulation, water conservation systems, and natural materials.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Sustainable",
      },
    ],
    faqs: [
      {
        question: "How much does it cost to build a custom home?",
        answer:
          "The cost of building a custom home varies widely based on size, location, materials, finishes, and special features. As a general range, custom homes can cost anywhere from $200 to $500+ per square foot. During our initial consultation, we'll discuss your budget and provide more specific estimates based on your requirements.",
      },
      {
        question: "How long does it take to build a custom home?",
        answer:
          "The timeline for a custom home typically ranges from 8 to 16 months, depending on size, complexity, weather conditions, and permit processing times. This includes the design phase, permitting, and construction. We'll provide a detailed schedule specific to your project during the planning phase.",
      },
      {
        question: "Can I make changes during the construction process?",
        answer:
          "Yes, changes can be made during construction, though they may impact the timeline and budget. We have a structured change order process that documents modifications, updates costs, and adjusts schedules accordingly. We recommend finalizing as many decisions as possible during the design phase to minimize changes during construction.",
      },
      {
        question: "Do you offer interior design services?",
        answer:
          "Yes, we offer comprehensive interior design services that can be included in your project. Our designers work closely with you to select finishes, fixtures, colors, and materials that reflect your style and complement the architectural design of your home.",
      },
      {
        question: "How do you ensure quality construction?",
        answer:
          "We maintain strict quality control through regular inspections, skilled craftsmanship, premium materials, and attention to detail. Our project managers conduct frequent site visits, and we have specific quality checkpoints throughout the construction process. We also work with trusted subcontractors who share our commitment to excellence.",
      },
    ],
    metaTitle: "Residential Construction Services | Custom Homes & Multi-Family Developments",
    metaDescription:
      "Expert residential construction services for custom homes, multi-family dwellings, and developments. Quality craftsmanship, energy efficiency, and personalized designs for your dream home.",
  },
  {
    id: "renovation-remodeling",
    slug: "renovation-remodeling",
    title: "Renovation & Remodeling",
    shortDescription:
      "Transform existing spaces with our expert renovation services, enhancing functionality and aesthetic appeal.",
    fullDescription:
      "Our renovation and remodeling services breathe new life into existing spaces, enhancing both functionality and aesthetic appeal. Whether you're updating a single room or completely transforming your property, our team brings creativity, craftsmanship, and attention to detail to every project. We specialize in thoughtful designs that maximize space, improve flow, and incorporate modern amenities while respecting the character and integrity of your property.",
    icon: "Hammer",
    heroImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
    features: [
      {
        title: "Kitchen Renovations",
        description:
          "Modern, functional kitchen designs with premium cabinetry, countertops, appliances, and thoughtful space planning.",
      },
      {
        title: "Bathroom Remodels",
        description:
          "Luxurious bathroom transformations featuring quality fixtures, tile work, lighting, and storage solutions.",
      },
      {
        title: "Whole Home Renovations",
        description:
          "Comprehensive updates to transform your entire home with improved layouts, modern systems, and refreshed aesthetics.",
      },
      {
        title: "Basement Finishing",
        description:
          "Convert underutilized basement space into functional living areas, entertainment rooms, or home offices.",
      },
      {
        title: "Additions & Extensions",
        description:
          "Seamlessly expand your living space with additions that complement your existing structure and meet your growing needs.",
      },
      {
        title: "Historic Renovations",
        description:
          "Specialized expertise in updating historic properties while preserving their unique character and architectural details.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description:
          "We begin by understanding your goals, preferences, and budget for the renovation. Our team evaluates your existing space and discusses possibilities for transformation.",
        icon: "Users",
      },
      {
        step: 2,
        title: "Design & Planning",
        description:
          "Our designers create detailed plans for your renovation, including layouts, material selections, and 3D visualizations to help you envision the final result.",
        icon: "PenTool",
      },
      {
        step: 3,
        title: "Proposal & Contract",
        description:
          "We provide a comprehensive proposal with transparent pricing and a detailed scope of work. Once approved, we finalize the contract and prepare for construction.",
        icon: "FileText",
      },
      {
        step: 4,
        title: "Permitting & Preparation",
        description:
          "We secure all necessary permits and prepare the site for renovation, including any required demolition and protection of areas not being renovated.",
        icon: "ClipboardCheck",
      },
      {
        step: 5,
        title: "Construction & Remodeling",
        description:
          "Our skilled craftspeople execute the renovation with precision and care, adhering to the approved plans and maintaining regular communication throughout the process.",
        icon: "Hammer",
      },
      {
        step: 6,
        title: "Final Inspections & Completion",
        description:
          "We conduct thorough quality checks, address any final details, and walk through the completed project with you to ensure your complete satisfaction.",
        icon: "CheckCircle",
      },
    ],
    projects: [
      {
        id: "luxury-kitchen-remodel",
        title: "Luxury Kitchen Transformation",
        description:
          "A complete kitchen renovation featuring custom cabinetry, quartz countertops, professional-grade appliances, and a large center island.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Kitchen",
      },
      {
        id: "master-suite-addition",
        title: "Master Suite Addition",
        description:
          "A 600 sq ft addition creating a luxurious master bedroom with ensuite bathroom, walk-in closet, and private sitting area.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Addition",
      },
      {
        id: "historic-home-renovation",
        title: "Historic Brownstone Renovation",
        description:
          "A comprehensive renovation of a 19th-century brownstone, updating systems and amenities while preserving original architectural details.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Historic",
      },
    ],
    faqs: [
      {
        question: "How much does a typical renovation cost?",
        answer:
          "Renovation costs vary widely depending on the scope, size, materials, and complexity of the project. Kitchen renovations typically range from $30,000 to $100,000+, bathroom remodels from $15,000 to $50,000+, and whole-home renovations can range from $100 to $300+ per square foot. During our consultation, we'll provide estimates specific to your project.",
      },
      {
        question: "How long will my renovation take?",
        answer:
          "Project timelines depend on scope and complexity. Bathroom renovations typically take 3-6 weeks, kitchens 6-12 weeks, and whole-home renovations can take 3-9 months or more. We'll provide a detailed timeline during the planning phase and keep you updated throughout the project.",
      },
      {
        question: "Can I stay in my home during the renovation?",
        answer:
          "This depends on the extent of the renovation. For single-room renovations like kitchens or bathrooms, many homeowners choose to stay. For whole-home renovations or projects affecting multiple areas, temporary relocation might be more comfortable. We'll discuss logistics and help you plan accordingly.",
      },
      {
        question: "Do I need permits for my renovation project?",
        answer:
          "Most significant renovations require permits, especially those involving structural changes, electrical or plumbing work, or additions. As part of our service, we handle the permitting process, including application submission and coordination with inspectors.",
      },
      {
        question: "How do you handle unexpected issues discovered during renovation?",
        answer:
          "Renovations sometimes reveal hidden issues like water damage, outdated wiring, or structural problems. When this happens, we promptly communicate with you, explain the situation, provide options, and recommend solutions. We maintain a contingency in the budget for such discoveries, which we discuss during the planning phase.",
      },
    ],
    metaTitle: "Renovation & Remodeling Services | Transform Your Space",
    metaDescription:
      "Expert renovation and remodeling services for kitchens, bathrooms, whole homes, and additions. Transform your space with quality craftsmanship and innovative design.",
  },
  {
    id: "infrastructure-development",
    slug: "infrastructure-development",
    title: "Infrastructure Development",
    shortDescription:
      "Roads, bridges, and public facilities built with precision engineering and sustainable practices.",
    fullDescription:
      "Our infrastructure development services deliver essential public and private projects that support community growth and economic development. From roads and bridges to water systems and public facilities, we combine engineering expertise, quality construction, and sustainable practices to create infrastructure that is safe, efficient, and built to last. Our team navigates complex regulatory requirements and coordinates with multiple stakeholders to ensure successful project delivery.",
    icon: "MapPin",
    heroImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
    features: [
      {
        title: "Transportation Infrastructure",
        description: "Roads, bridges, tunnels, and transit facilities designed for safety, efficiency, and durability.",
      },
      {
        title: "Water & Wastewater Systems",
        description:
          "Treatment plants, distribution networks, and collection systems that ensure clean water and environmental protection.",
      },
      {
        title: "Public Facilities",
        description:
          "Government buildings, schools, recreation centers, and other community facilities that serve public needs.",
      },
      {
        title: "Energy Infrastructure",
        description:
          "Power generation, transmission, and distribution systems, including renewable energy installations.",
      },
      {
        title: "Environmental Projects",
        description: "Stormwater management, erosion control, and habitat restoration to protect natural resources.",
      },
      {
        title: "Industrial Infrastructure",
        description: "Specialized facilities and systems for manufacturing, logistics, and resource development.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Feasibility & Planning",
        description:
          "We conduct thorough assessments to evaluate project viability, identify constraints, and develop preliminary plans that align with community needs and regulatory requirements.",
        icon: "Search",
      },
      {
        step: 2,
        title: "Engineering & Design",
        description:
          "Our engineering team creates detailed designs and specifications that balance functionality, safety, sustainability, and cost-effectiveness for long-term infrastructure performance.",
        icon: "PenTool",
      },
      {
        step: 3,
        title: "Regulatory Compliance",
        description:
          "We navigate complex permitting processes and environmental reviews, coordinating with regulatory agencies to ensure all approvals are secured before construction begins.",
        icon: "ClipboardCheck",
      },
      {
        step: 4,
        title: "Stakeholder Coordination",
        description:
          "We facilitate communication and collaboration among government entities, utilities, property owners, and community groups to address concerns and minimize disruption.",
        icon: "Users",
      },
      {
        step: 5,
        title: "Construction Execution",
        description:
          "Our experienced teams implement infrastructure projects with precision, adhering to specifications, safety standards, and quality control measures throughout the construction process.",
        icon: "Hammer",
      },
      {
        step: 6,
        title: "Commissioning & Handover",
        description:
          "We thoroughly test all systems, provide comprehensive documentation, and train operations personnel to ensure smooth transition to the operational phase.",
        icon: "CheckCircle",
      },
    ],
    projects: [
      {
        id: "highway-expansion",
        title: "Regional Highway Expansion",
        description:
          "A 12-mile highway widening project including new bridges, interchanges, and stormwater management systems to improve traffic flow and safety.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Transportation",
      },
      {
        id: "water-treatment",
        title: "Municipal Water Treatment Facility",
        description:
          "A state-of-the-art water treatment plant with 15 MGD capacity, featuring advanced filtration systems and energy-efficient operations.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Water",
      },
      {
        id: "community-center",
        title: "Multi-Purpose Community Center",
        description:
          "A 45,000 sq ft public facility featuring recreation spaces, meeting rooms, and emergency shelter capabilities for community use.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Public Facility",
      },
    ],
    faqs: [
      {
        question: "How do you manage environmental impacts of infrastructure projects?",
        answer:
          "We implement comprehensive environmental management plans that include erosion control, habitat protection, pollution prevention, and restoration measures. Our team conducts thorough environmental assessments, obtains necessary permits, and monitors compliance throughout construction. We also incorporate sustainable design elements and construction practices to minimize long-term environmental impacts.",
      },
      {
        question: "How do you ensure infrastructure projects stay within budget?",
        answer:
          "We employ rigorous cost control measures, including detailed initial estimates, value engineering, regular budget reviews, and transparent reporting. Our experienced project managers closely monitor expenses and identify potential issues early. We also maintain appropriate contingencies for unforeseen conditions and work collaboratively with clients to manage scope and control costs.",
      },
      {
        question: "How do you minimize disruption to the public during infrastructure construction?",
        answer:
          "We develop comprehensive traffic management plans, maintain access to businesses and residences, implement dust and noise control measures, and communicate proactively with affected stakeholders. When possible, we schedule disruptive activities during off-peak hours and phase construction to limit impacts. Our team works closely with local officials and community representatives to address concerns promptly.",
      },
      {
        question: "What technologies do you use to enhance infrastructure quality and efficiency?",
        answer:
          "We utilize advanced technologies such as Building Information Modeling (BIM), GPS-guided equipment, drone surveys, and specialized materials testing. These tools improve accuracy, enhance coordination, and allow for real-time quality control. We also incorporate innovative materials and construction methods that improve durability, reduce maintenance requirements, and enhance sustainability.",
      },
      {
        question: "How do you handle coordination with utilities and other infrastructure systems?",
        answer:
          "We conduct thorough utility investigations early in the project, develop detailed coordination plans, and maintain regular communication with utility companies. Our team schedules utility relocations in advance of construction activities, implements protection measures for existing systems, and coordinates closely during installation of new utilities. We also document all utility locations accurately for future reference.",
      },
    ],
    metaTitle: "Infrastructure Development Services | Roads, Bridges & Public Facilities",
    metaDescription:
      "Expert infrastructure development services for transportation, water systems, and public facilities. Precision engineering, sustainable practices, and quality construction for community needs.",
  },
  {
    id: "project-management",
    slug: "project-management",
    title: "Project Management",
    shortDescription:
      "Comprehensive oversight of construction projects, ensuring timely completion, quality control, and budget adherence.",
    fullDescription:
      "Our project management services provide expert oversight and coordination for construction projects of all sizes and complexities. We serve as your dedicated advocate throughout the entire project lifecycle, from initial planning to final completion. Our experienced project managers employ proven methodologies, advanced tools, and effective communication to ensure your project is delivered on time, within budget, and to the highest quality standards. We anticipate challenges, mitigate risks, and coordinate all aspects of the construction process for seamless execution.",
    icon: "CheckCircle",
    heroImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
    features: [
      {
        title: "Comprehensive Planning",
        description:
          "Detailed project plans that define scope, schedule, budget, resources, and quality requirements for successful execution.",
      },
      {
        title: "Budget Management",
        description:
          "Rigorous cost control measures, including detailed estimates, value engineering, and regular financial reporting.",
      },
      {
        title: "Schedule Optimization",
        description:
          "Strategic scheduling and sequencing to maximize efficiency, minimize disruptions, and ensure timely completion.",
      },
      {
        title: "Quality Assurance",
        description:
          "Systematic quality control processes and inspections to ensure all work meets specifications and standards.",
      },
      {
        title: "Risk Management",
        description:
          "Proactive identification, assessment, and mitigation of potential risks that could impact project success.",
      },
      {
        title: "Stakeholder Coordination",
        description:
          "Effective communication and collaboration among all project participants, including owners, designers, contractors, and authorities.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Project Initiation",
        description:
          "We define project objectives, scope, and success criteria, establish the project team, and develop the initial project charter and governance framework.",
        icon: "Flag",
      },
      {
        step: 2,
        title: "Planning & Design Management",
        description:
          "We develop comprehensive project plans, coordinate design development, establish budgets and schedules, and identify potential risks and mitigation strategies.",
        icon: "PenTool",
      },
      {
        step: 3,
        title: "Procurement & Contracting",
        description:
          "We manage the selection of contractors and suppliers, negotiate contracts, and establish clear performance expectations and accountability measures.",
        icon: "FileText",
      },
      {
        step: 4,
        title: "Construction Oversight",
        description:
          "We provide on-site supervision, coordinate activities among multiple contractors, conduct regular progress meetings, and ensure compliance with plans and specifications.",
        icon: "Eye",
      },
      {
        step: 5,
        title: "Monitoring & Control",
        description:
          "We track progress against schedule and budget, implement quality control measures, address issues promptly, and provide regular status reports to stakeholders.",
        icon: "BarChart2",
      },
      {
        step: 6,
        title: "Project Closeout",
        description:
          "We manage final inspections, coordinate system commissioning, ensure documentation completion, and facilitate a smooth transition to operations and maintenance.",
        icon: "CheckSquare",
      },
    ],
    projects: [
      {
        id: "corporate-headquarters",
        title: "Corporate Headquarters Relocation",
        description:
          "Project management for a 100,000 sq ft corporate headquarters, including site selection, design coordination, construction oversight, and move management.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Commercial",
      },
      {
        id: "hospital-expansion",
        title: "Regional Hospital Expansion",
        description:
          "Comprehensive project management for a 75,000 sq ft hospital expansion, coordinating complex medical systems installation while maintaining ongoing operations.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Healthcare",
      },
      {
        id: "mixed-use-development",
        title: "Urban Mixed-Use Development",
        description:
          "Project management for a $50 million mixed-use development featuring retail, office, and residential components with complex phasing requirements.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Mixed-Use",
      },
    ],
    faqs: [
      {
        question: "What is the role of a construction project manager?",
        answer:
          "A construction project manager serves as the owner's representative and advocate throughout the project lifecycle. Key responsibilities include planning and organizing the project, coordinating design and construction activities, managing budgets and schedules, ensuring quality control, managing risks, facilitating communication among stakeholders, and resolving issues that arise during construction. The project manager is ultimately responsible for delivering the project according to the owner's requirements.",
      },
      {
        question: "How do your project management services add value to construction projects?",
        answer:
          "Our project management services add value through cost savings, time efficiency, quality enhancement, and risk reduction. We identify opportunities for value engineering and cost optimization, prevent schedule delays through proactive planning, ensure quality through rigorous oversight, and anticipate and mitigate potential problems before they impact the project. Additionally, we free owners from the day-to-day management burden, allowing them to focus on their core business while having confidence their project is in expert hands.",
      },
      {
        question: "Can you manage projects where design and construction are already underway?",
        answer:
          "Yes, we can join projects at any stage. When engaging mid-project, we begin with a comprehensive assessment of current status, including schedule review, budget analysis, contract evaluation, and quality inspection. We identify any existing issues or risks, develop recovery strategies if needed, and implement management systems to improve project performance moving forward. Our experienced team can quickly integrate into ongoing projects and add immediate value.",
      },
      {
        question: "What technologies and tools do you use for project management?",
        answer:
          "We utilize advanced project management software for scheduling (e.g., Microsoft Project, Primavera P6), cost control systems for budget management, Building Information Modeling (BIM) for coordination, cloud-based document management platforms for information sharing, and mobile field applications for real-time reporting and quality control. These technologies enhance transparency, improve collaboration, and provide accurate, up-to-date information for decision-making.",
      },
      {
        question: "How do you handle changes during the construction process?",
        answer:
          "We implement a structured change management process that includes formal documentation of proposed changes, thorough evaluation of cost and schedule impacts, clear communication with stakeholders, and proper authorization before implementation. We maintain a comprehensive change log, update project documents accordingly, and ensure all changes are properly incorporated into the work. Our proactive approach minimizes unnecessary changes while efficiently managing those that are required.",
      },
    ],
    metaTitle: "Construction Project Management Services | Expert Oversight & Coordination",
    metaDescription:
      "Professional construction project management services ensuring timely completion, quality control, and budget adherence. Expert oversight for projects of all sizes and complexities.",
  },
  {
    id: "design-build",
    slug: "design-build",
    title: "Design-Build Services",
    shortDescription:
      "Integrated design and construction services that streamline the building process and enhance collaboration.",
    fullDescription:
      "Our design-build services offer a streamlined approach to construction by integrating design and building services under a single contract and team. This collaborative method enhances communication, reduces costs, accelerates schedules, and improves quality through a unified workflow. Our multidisciplinary team works together from concept to completion, ensuring seamless coordination and a focus on your project goals. The design-build approach eliminates the traditional gaps between design and construction phases, resulting in more efficient project delivery and greater value for our clients.",
    icon: "Building2",
    heroImage: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
    features: [
      {
        title: "Single-Source Responsibility",
        description:
          "One team accountable for both design and construction, eliminating finger-pointing and simplifying project management.",
      },
      {
        title: "Accelerated Delivery",
        description:
          "Overlapping design and construction phases that reduce overall project duration compared to traditional methods.",
      },
      {
        title: "Cost Certainty",
        description:
          "Early price guarantees and fewer change orders through collaborative planning and integrated problem-solving.",
      },
      {
        title: "Enhanced Collaboration",
        description:
          "Architects, engineers, and builders working together from day one to optimize designs for constructability and value.",
      },
      {
        title: "Quality Focus",
        description:
          "Unified team approach that emphasizes quality and ensures design intent is properly executed in construction.",
      },
      {
        title: "Innovation Opportunities",
        description:
          "Creative solutions and alternative approaches developed through cross-disciplinary collaboration and shared expertise.",
      },
    ],
    process: [
      {
        step: 1,
        title: "Project Definition",
        description:
          "We work with you to define project goals, requirements, budget parameters, and success criteria, establishing a solid foundation for the design-build process.",
        icon: "Target",
      },
      {
        step: 2,
        title: "Conceptual Design",
        description:
          "Our integrated team develops initial design concepts that address your functional needs, aesthetic preferences, and budget constraints, with real-time input from construction experts.",
        icon: "PenTool",
      },
      {
        step: 3,
        title: "Design Development & Pricing",
        description:
          "We refine the design while simultaneously developing detailed cost estimates, allowing for informed decisions about design elements and materials based on budget impact.",
        icon: "DollarSign",
      },
      {
        step: 4,
        title: "Construction Documentation",
        description:
          "We prepare comprehensive construction documents while beginning early procurement and pre-construction activities, maintaining the integrated workflow throughout this phase.",
        icon: "FileText",
      },
      {
        step: 5,
        title: "Construction Execution",
        description:
          "Our construction team builds the project according to the approved design, with ongoing involvement from the design team to address field conditions and ensure design integrity.",
        icon: "Hammer",
      },
      {
        step: 6,
        title: "Project Completion",
        description:
          "We conduct thorough quality inspections, systems testing, and owner training, delivering a completed project that fulfills the vision established at the outset.",
        icon: "CheckCircle",
      },
    ],
    projects: [
      {
        id: "corporate-innovation-center",
        title: "Corporate Innovation Center",
        description:
          "A 65,000 sq ft facility featuring collaborative workspaces, research laboratories, and presentation areas, delivered 20% faster than traditional methods.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Commercial",
      },
      {
        id: "community-recreation-complex",
        title: "Community Recreation Complex",
        description:
          "A 85,000 sq ft multi-purpose recreation facility with aquatics center, gymnasiums, fitness areas, and community rooms, completed under budget through design-build efficiencies.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Public",
      },
      {
        id: "industrial-manufacturing-facility",
        title: "Advanced Manufacturing Facility",
        description:
          "A 120,000 sq ft industrial facility with specialized production areas, material handling systems, and administrative spaces, delivered on an accelerated schedule.",
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1000&auto=format&fit=crop",
        category: "Industrial",
      },
    ],
    faqs: [
      {
        question: "What are the main advantages of design-build compared to traditional construction methods?",
        answer:
          "Design-build offers several key advantages: 1) Faster delivery through overlapping design and construction phases, typically reducing schedules by 20-30%; 2) Cost savings through integrated problem-solving, value engineering, and fewer change orders; 3) Single-source accountability that eliminates disputes between separate design and construction entities; 4) Enhanced quality through collaborative design that incorporates construction expertise; and 5) Reduced administrative burden for owners who only need to manage one contract instead of multiple contracts.",
      },
      {
        question: "Is design-build suitable for all types of construction projects?",
        answer:
          "Design-build can be effective for most project types, but it's particularly well-suited for projects where schedule, budget certainty, or complex coordination are priorities. It works well for commercial buildings, healthcare facilities, educational institutions, industrial projects, and public infrastructure. Projects with very unique design requirements, highly specialized technical needs, or extensive stakeholder approval processes may require modifications to the standard design-build approach, which we can accommodate.",
      },
      {
        question: "How much input do I have in the design process with design-build?",
        answer:
          "Owners maintain significant input and approval authority throughout the design-build process. We establish clear milestones for owner review and approval, and we encourage active participation in design development. The difference is that your input benefits from the combined expertise of both designers and builders working collaboratively. This integrated approach often leads to better-informed decisions while still ensuring the final project reflects your vision and requirements.",
      },
      {
        question: "How do you ensure quality control in the design-build process?",
        answer:
          "Quality control is integrated throughout our design-build process. It begins with establishing clear quality expectations during project definition, continues with constructability reviews during design, and extends through construction with regular inspections and testing. Our unified team approach means designers remain involved during construction to ensure design intent is properly executed, while construction experts provide input during design to enhance quality and performance. We also implement formal quality management systems with documented procedures and verification processes.",
      },
      {
        question: "How are changes handled in a design-build project?",
        answer:
          "Changes in design-build projects are typically fewer than in traditional delivery methods because of the collaborative planning process. When changes are needed, they're evaluated by the integrated team for impacts on design, schedule, and budget. The design-build team provides comprehensive information about implications, allowing for informed decisions. Once approved, changes are implemented efficiently because the entire team is already coordinated. This streamlined process reduces the administrative burden and potential delays associated with changes in traditional construction projects.",
      },
    ],
    metaTitle: "Design-Build Services | Integrated Construction Solutions",
    metaDescription:
      "Streamlined design-build services that integrate design and construction under one team. Faster delivery, cost certainty, and enhanced quality through collaborative approach.",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
