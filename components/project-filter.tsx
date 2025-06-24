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
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce platform with real-time inventory",
    longDescription:
      "A comprehensive e-commerce platform built with React and Next.js, featuring real-time inventory management, secure payment processing with Stripe integration, advanced search and filtering, user authentication, order tracking, and admin dashboard. The platform handles thousands of products and provides seamless shopping experience across all devices.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    link: "https://github.com/speaktosameer",
  },
  {
    id: 2,
    title: "Fitness App Design",
    description: "Complete UI/UX design for fitness tracking mobile app",
    longDescription:
      "Comprehensive UI/UX design project for a fitness tracking mobile application. Conducted extensive user research, created user personas, designed wireframes and high-fidelity mockups, developed interactive prototypes, and established a complete design system. The app focuses on workout tracking, nutrition monitoring, and social features to keep users motivated.",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Figma", "User Research", "Prototyping", "Design System"],
    link: "https://www.behance.net/speaktosameer",
  },
  {
    id: 3,
    title: "Restaurant Website",
    description: "Custom WordPress theme with online ordering system",
    longDescription:
      "Custom WordPress website for a restaurant chain featuring online ordering system, table reservation functionality, menu management, customer reviews, location finder, and integration with delivery services. Built with performance optimization, SEO best practices, and mobile-responsive design to increase online orders by 150%.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "WooCommerce", "PHP", "MySQL", "Custom Theme"],
    link: "https://sameer-ansari.com.np",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts",
    longDescription:
      "Advanced analytics dashboard built with React and D3.js, featuring real-time data visualization, interactive charts and graphs, customizable widgets, data export functionality, user role management, and API integrations. The dashboard processes millions of data points and provides actionable insights for business decision-making.",
    category: "React",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React", "D3.js", "Chart.js", "WebSocket", "Node.js"],
    link: "https://github.com/speaktosameer",
  },
  {
    id: 5,
    title: "Brand Identity Design",
    description: "Complete brand identity for tech startup",
    longDescription:
      "Complete brand identity design project for a tech startup including logo design, color palette development, typography selection, brand guidelines creation, business card design, website mockups, and marketing materials. The brand identity reflects innovation, trust, and modern technology while maintaining professional appeal.",
    category: "UI/UX",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Branding", "Logo Design", "Adobe Creative Suite", "Brand Guidelines"],
    link: "https://www.behance.net/speaktosameer",
  },
  {
    id: 6,
    title: "Blog Platform",
    description: "Custom WordPress blog with advanced CMS features",
    longDescription:
      "Advanced WordPress blog platform with custom post types, advanced content management system, SEO optimization, social media integration, newsletter subscription, comment system with moderation, multi-author support, and performance optimization. The platform supports multiple content formats and provides excellent user experience for both readers and content creators.",
    category: "WordPress",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["WordPress", "Custom Post Types", "SEO", "Performance", "Security"],
    link: "https://sameer-ansari.com.np",
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
                  View Project
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
