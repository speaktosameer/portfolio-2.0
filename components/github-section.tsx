"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Star, GitFork, ExternalLink, Users, BookOpen } from "lucide-react"

interface GitHubUser {
  name: string
  bio: string
  public_repos: number
  followers: number
  following: number
  avatar_url: string
  html_url: string
}

interface Repository {
  name: string
  description: string
  html_url: string
  language: string
  stargazers_count: number
  forks_count: number
  updated_at: string
}

interface GitHubData {
  user: GitHubUser
  repositories: Repository[]
}

export function GitHubSection() {
  const [githubData, setGithubData] = useState<GitHubData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/github")
        if (response.ok) {
          const data = await response.json()
          setGithubData(data)
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubData()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  if (!githubData) {
    return null
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Check out my latest open-source contributions and projects on GitHub.
          </p>
        </div>

        {/* GitHub Profile Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-900/20 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-blue-600 mr-2" />
                <span className="text-3xl font-bold text-blue-600">{githubData.user.public_repos}</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Public Repositories</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-green-50 dark:from-gray-800 dark:to-green-900/20 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-green-600 mr-2" />
                <span className="text-3xl font-bold text-green-600">{githubData.user.followers}</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Followers</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 dark:from-gray-800 dark:to-purple-900/20 border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-purple-600 mr-2" />
                <span className="text-3xl font-bold text-purple-600">{githubData.user.following}</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Following</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50 dark:from-gray-800 dark:to-orange-900/20 border-0">
            <CardContent className="p-6">
              <Button asChild variant="ghost" className="h-auto p-0 hover:bg-transparent">
                <a href={githubData.user.html_url} target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center justify-center mb-2">
                    <Github className="h-6 w-6 text-orange-600 mr-2" />
                    <span className="text-lg font-bold text-orange-600">Profile</span>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">View on GitHub</p>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Repositories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {githubData.repositories.map((repo, index) => (
            <Card
              key={repo.name}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {repo.name}
                  </span>
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {repo.description || "No description available"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    {repo.language && (
                      <Badge variant="outline" className="text-xs">
                        {repo.language}
                      </Badge>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-3 w-3" />
                      {repo.forks_count}
                    </div>
                  </div>
                </div>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="w-full justify-center hover:bg-blue-50 dark:hover:bg-blue-950"
                >
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Repository
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <a href={githubData.user.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
