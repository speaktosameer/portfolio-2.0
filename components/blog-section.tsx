"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices for 2024",
    excerpt:
      "Learn the latest techniques and patterns for building maintainable and scalable React applications that can grow with your business needs.",
    content:
      "In this comprehensive guide, we'll explore the essential practices for building React applications that scale. From component architecture to state management, performance optimization, and testing strategies...",
    category: "React",
    readTime: "8 min read",
    publishDate: "2024-01-15",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["React", "JavaScript", "Performance", "Architecture"],
    link: "https://speaktosameer.medium.com/",
  },
  {
    id: 2,
    title: "The Psychology of UI/UX Design: Creating Intuitive User Experiences",
    excerpt:
      "Discover how understanding user psychology can dramatically improve your design decisions and create more engaging digital experiences.",
    content:
      "User experience design goes beyond aesthetics. It's about understanding human behavior, cognitive load, and creating interfaces that feel natural and intuitive...",
    category: "UI/UX",
    readTime: "6 min read",
    publishDate: "2024-01-10",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["UI/UX", "Psychology", "Design", "User Research"],
    link: "https://speaktosameer.medium.com/",
  },
  {
    id: 3,
    title: "WordPress Performance Optimization: From Slow to Lightning Fast",
    excerpt:
      "Transform your WordPress site's performance with these proven optimization techniques that can reduce load times by up to 70%.",
    content:
      "Website speed is crucial for user experience and SEO. In this detailed guide, we'll cover everything from hosting optimization to advanced caching strategies...",
    category: "WordPress",
    readTime: "10 min read",
    publishDate: "2024-01-05",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["WordPress", "Performance", "SEO", "Optimization"],
    link: "https://speaktosameer.medium.com/",
  },
  {
    id: 4,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Stay ahead of the curve with these emerging web development trends that are shaping the future of digital experiences.",
    content:
      "The web development landscape is constantly evolving. From AI integration to new frameworks, let's explore what's coming next in our industry...",
    category: "Web Development",
    readTime: "7 min read",
    publishDate: "2024-01-01",
    image: "/placeholder.svg?height=200&width=400",
    tags: ["Web Development", "Trends", "AI", "Future"],
    link: "https://speaktosameer.medium.com/",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on web development, design, and technology. Stay updated with the latest
            trends and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={`${
                      post.category === "React"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : post.category === "UI/UX"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500"
                          : post.category === "WordPress"
                            ? "bg-gradient-to-r from-green-500 to-emerald-500"
                            : "bg-gradient-to-r from-orange-500 to-red-500"
                    } text-white border-0 shadow-lg`}
                  >
                    {post.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.publishDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Read More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a
              href="https://speaktosameer.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Posts
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
