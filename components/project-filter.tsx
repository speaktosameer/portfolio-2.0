"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  category: string
  image: string
  tags: string[]
  link: string
  type: "website" | "design" | "app"
}

const projects: Project[] = [
  {
    id: 1,
    title: "Land Buyers",
    description: "Real estate platform for land buyers and sellers with advanced search functionality",
    longDescription:
      "A comprehensive real estate platform built for land buyers and sellers. Features include advanced property search, interactive maps, property listings management, user authentication, and secure payment processing. The platform handles thousands of property listings with real-time updates and provides seamless experience across all devices.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Next.js", "Real Estate", "Maps API", "Payment Integration"],
    link: "https://www.landbuyers.com/",
    type: "website",
  },
  {
    id: 2,
    title: "OYDEE Mobile App",
    description: "Complete mobile app UI/UX design with modern interface and user experience",
    longDescription:
      "Comprehensive mobile application design for OYDEE platform. Created complete user interface design system, wireframes, prototypes, and interactive mockups. The design focuses on user experience optimization, accessibility, and modern mobile design patterns. Includes onboarding flows, main app screens, and micro-interactions.",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Figma", "Mobile Design", "UI/UX", "Prototyping", "Design System"],
    link: "https://www.figma.com/design/XMuc6XpQLMSD9pyvmiqCXW/OYDEE?node-id=0-1&p=f&t=IfOCzmicRKfabZ3d-0",
    type: "design",
  },
  {
    id: 3,
    title: "Aceso Essentia Care",
    description: "Healthcare platform with patient management and appointment scheduling",
    longDescription:
      "Modern healthcare platform built with React and advanced backend systems. Features include patient management, appointment scheduling, medical records, telemedicine capabilities, and secure patient data handling. The platform ensures HIPAA compliance and provides seamless experience for both patients and healthcare providers.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Healthcare", "Patient Management", "Security", "API Integration"],
    link: "http://acesoessentia.care/",
    type: "website",
  },
  {
    id: 4,
    title: "Bienes Raices Club",
    description: "Spanish real estate platform with property management and listings",
    longDescription:
      "A sophisticated real estate platform for Spanish-speaking markets. Built with modern web technologies, featuring property listings, advanced search filters, user profiles, property management tools, and multilingual support. The platform includes CRM functionality for real estate agents and property owners.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Real Estate", "Multilingual", "CRM", "Property Management"],
    link: "https://bienesraicesclub.com/",
    type: "website",
  },
  {
    id: 5,
    title: "Esumon Platform",
    description: "Educational technology platform with interactive learning modules",
    longDescription:
      "Comprehensive educational technology platform designed for modern learning. Features include interactive course modules, progress tracking, student-teacher communication, assignment management, and analytics dashboard. Built with scalable architecture to handle thousands of concurrent users and multimedia content delivery.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Education", "LMS", "Interactive Learning", "Analytics"],
    link: "https://esumon.com/",
    type: "website",
  },
  {
    id: 6,
    title: "Srishty Garden Resorts",
    description: "Luxury resort website with booking system and virtual tours",
    longDescription:
      "Elegant website for luxury garden resort featuring online booking system, virtual property tours, amenities showcase, and guest management. The site includes high-quality image galleries, interactive maps, seasonal pricing, and integration with booking platforms. Optimized for mobile devices and search engines.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Hospitality", "Booking System", "Virtual Tours", "SEO"],
    link: "https://srishtygardenresorts.com/",
    type: "website",
  },
  {
    id: 7,
    title: "Uncover Math Genius",
    description: "Interactive mathematics learning platform for students",
    longDescription:
      "Innovative mathematics learning platform designed to make math engaging and accessible. Features include interactive problem solving, step-by-step solutions, progress tracking, gamification elements, and adaptive learning algorithms. The platform caters to different learning styles and skill levels.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Education", "Mathematics", "Interactive Learning", "Gamification"],
    link: "https://uncovermathgenius.com/",
    type: "website",
  },
  {
    id: 8,
    title: "The Reader Nest",
    description: "Digital library and reading platform with community features",
    longDescription:
      "Comprehensive digital reading platform that combines library functionality with social features. Users can discover books, track reading progress, join book clubs, write reviews, and connect with fellow readers. The platform includes recommendation algorithms and personalized reading suggestions.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Digital Library", "Community", "Reading Tracker", "Social Features"],
    link: "https://thereadernest.com/",
    type: "website",
  },
  {
    id: 9,
    title: "Aussi ACC",
    description: "Australian accounting services website with client portal",
    longDescription:
      "Professional accounting services website for Australian market. Features include service portfolio, client portal, document management, appointment scheduling, and secure client communication. The site is optimized for local SEO and includes compliance with Australian business regulations.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Accounting", "Client Portal", "Document Management", "Australian Market"],
    link: "https://www.aussiacc.com.au/",
    type: "website",
  },
  {
    id: 10,
    title: "Dev Dental Art Implant Centre",
    description: "Dental clinic website with appointment booking and treatment information",
    longDescription:
      "Modern dental clinic website featuring comprehensive treatment information, before/after galleries, appointment booking system, patient testimonials, and doctor profiles. The site includes educational content about dental procedures and maintains HIPAA compliance for patient data.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Healthcare", "Dental", "Appointment Booking", "Medical Compliance"],
    link: "https://devdentalartimplantcentre.com/",
    type: "website",
  },
  {
    id: 11,
    title: "iFix Mobile Repair",
    description: "Mobile device repair service website with online booking",
    longDescription:
      "Service-oriented website for mobile device repair business. Features include service catalog, pricing calculator, online booking system, repair status tracking, and customer reviews. The site is optimized for local search and includes integration with inventory management systems.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Service Business", "Booking System", "Local SEO", "Repair Tracking"],
    link: "https://ifixmobilerepair.com/",
    type: "website",
  },
  {
    id: 12,
    title: "Gold Math Online",
    description: "Advanced mathematics learning platform with AI-powered tutoring",
    longDescription:
      "Cutting-edge online mathematics platform featuring AI-powered tutoring, adaptive learning paths, real-time problem solving, and comprehensive progress analytics. The platform uses machine learning to personalize learning experiences and provides instant feedback on mathematical concepts.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "AI/ML", "Mathematics", "Adaptive Learning", "Real-time Analytics"],
    link: "https://goldmath.online/",
    type: "website",
  },
  {
    id: 13,
    title: "Energy Solutions Solar",
    description: "Solar energy company website with calculator and consultation booking",
    longDescription:
      "Comprehensive solar energy company website featuring solar calculator, energy savings estimator, consultation booking, project gallery, and financing options. The site includes educational content about renewable energy and integration with CRM systems for lead management.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Solar Energy", "Calculator", "Lead Generation", "Renewable Energy"],
    link: "https://energysolutions-solar.com/",
    type: "website",
  },
  {
    id: 14,
    title: "Care Integrated Australia",
    description: "Healthcare integration platform for Australian medical services",
    longDescription:
      "Sophisticated healthcare integration platform designed for Australian medical services. Features include patient data integration, appointment coordination, medical record management, and compliance with Australian healthcare regulations. The platform connects multiple healthcare providers for seamless patient care.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Healthcare Integration", "Medical Records", "Australian Compliance", "API Integration"],
    link: "https://careintegrated.com.au/",
    type: "website",
  },
  {
    id: 15,
    title: "Vereda Platform",
    description: "Business management platform with analytics and reporting",
    longDescription:
      "Comprehensive business management platform featuring analytics dashboard, reporting tools, project management, team collaboration, and performance tracking. Built with modern React architecture and includes real-time data visualization and automated reporting capabilities.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Business Management", "Analytics", "Reporting", "Team Collaboration"],
    link: "https://vereda.in/",
    type: "website",
  },
]

export function ProjectFilter() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = ["All", "React", "UI/UX", "WordPress"]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeFilter === category ? "default" : "outline"}
            onClick={() => setActiveFilter(category)}
            className={`transition-all duration-300 ${
              activeFilter === category
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950"
            }`}
          >
            {category}
            <Badge variant="secondary" className="ml-2 text-xs">
              {category === "All" ? projects.length : projects.filter((p) => p.category === category).length}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            className="group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      project.category === "React"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : project.category === "UI/UX"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : "bg-gradient-to-r from-green-500 to-emerald-500"
                    } text-white border-0`}
                  >
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge
                    variant="secondary"
                    className={`${
                      project.type === "website"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        : project.type === "design"
                          ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                          : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    }`}
                  >
                    {project.type === "website" ? "🌐 Website" : project.type === "design" ? "🎨 Design" : "📱 App"}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tags.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 rounded-full p-2 hover:bg-white dark:hover:bg-gray-800 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h2>
                <Badge
                  className={`${
                    selectedProject.category === "React"
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : selectedProject.category === "UI/UX"
                        ? "bg-gradient-to-r from-purple-500 to-pink-500"
                        : "bg-gradient-to-r from-green-500 to-emerald-500"
                  } text-white border-0`}
                >
                  {selectedProject.category}
                </Badge>
                <Badge
                  variant="outline"
                  className={`${
                    selectedProject.type === "website"
                      ? "border-blue-500 text-blue-600"
                      : selectedProject.type === "design"
                        ? "border-purple-500 text-purple-600"
                        : "border-green-500 text-green-600"
                  }`}
                >
                  {selectedProject.type === "website"
                    ? "🌐 Website"
                    : selectedProject.type === "design"
                      ? "🎨 Design"
                      : "📱 App"}
                </Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{selectedProject.longDescription}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  {selectedProject.type === "design" ? "View Design" : "Visit Website"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
