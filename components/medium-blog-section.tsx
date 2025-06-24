"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ExternalLink, BookOpen } from "lucide-react"

interface MediumPost {
  title: string
  link: string
  pubDate: string
  description: string
  categories: string[]
  readTime: string
}

export function MediumBlogSection() {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch("/api/medium")
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts || [])
        }
      } catch (error) {
        console.error("Error fetching Medium posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMediumPosts()
  }, [])

  // Fallback posts if API fails
  const fallbackPosts: MediumPost[] = [
    {
      title: "Building Scalable React Applications: Best Practices for 2024",
      description:
        "Learn the latest techniques and patterns for building maintainable and scalable React applications that can grow with your business needs.",
      link: "https://speaktosameer.medium.com/",
      pubDate: new Date().toISOString(),
      categories: ["React", "JavaScript", "Performance"],
      readTime: "8 min read",
    },
    {
      title: "The Psychology of UI/UX Design: Creating Intuitive User Experiences",
      description:
        "Discover how understanding user psychology can dramatically improve your design decisions and create more engaging digital experiences.",
      link: "https://speaktosameer.medium.com/",
      pubDate: new Date(Date.now() - 86400000).toISOString(),
      categories: ["UI/UX", "Psychology", "Design"],
      readTime: "6 min read",
    },
    {
      title: "WordPress Performance Optimization: From Slow to Lightning Fast",
      description:
        "Transform your WordPress site's performance with these proven optimization techniques that can reduce load times by up to 70%.",
      link: "https://speaktosameer.medium.com/",
      pubDate: new Date(Date.now() - 172800000).toISOString(),
      categories: ["WordPress", "Performance", "SEO"],
      readTime: "10 min read",
    },
  ]

  const displayPosts = posts.length > 0 ? posts : fallbackPosts

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-300 rounded w-96 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-300 rounded w-128 mx-auto"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-300 h-48 rounded-t-lg"></div>
                <div className="bg-gray-200 p-6 rounded-b-lg">
                  <div className="h-4 bg-gray-300 rounded mb-2"></div>
                  <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Latest from Medium
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Fresh insights, tutorials, and thoughts on web development, design, and technology straight from my Medium
            blog.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayPosts.slice(0, 6).map((post, index) => (
            <Card
              key={post.link + index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 h-48 flex items-center justify-center">
                <BookOpen className="h-16 w-16 text-blue-500 opacity-50" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 shadow-lg">
                    Medium
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.pubDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.slice(0, 3).map((category) => (
                    <Badge key={category} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn p-0 h-auto font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 w-full justify-start"
                >
                  <a href={post.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Read on Medium
                    <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
              <BookOpen className="h-5 w-5" />
              View All Posts on Medium
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
