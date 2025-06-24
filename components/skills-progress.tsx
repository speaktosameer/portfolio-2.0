"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: number
  category: string
  color: string
}

const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend", color: "from-blue-500 to-cyan-500" },
  { name: "Next.js", level: 90, category: "Frontend", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", level: 88, category: "Frontend", color: "from-blue-600 to-blue-800" },
  { name: "JavaScript", level: 95, category: "Frontend", color: "from-yellow-400 to-yellow-600" },
  { name: "Tailwind CSS", level: 92, category: "Frontend", color: "from-teal-400 to-blue-500" },
  { name: "Node.js", level: 85, category: "Backend", color: "from-green-500 to-green-700" },
  { name: "Python", level: 80, category: "Backend", color: "from-blue-500 to-yellow-500" },
  { name: "PostgreSQL", level: 82, category: "Backend", color: "from-blue-600 to-indigo-600" },
  { name: "MongoDB", level: 78, category: "Backend", color: "from-green-600 to-green-800" },
  { name: "Figma", level: 90, category: "Design", color: "from-purple-500 to-pink-500" },
  { name: "Adobe XD", level: 85, category: "Design", color: "from-pink-500 to-red-500" },
  { name: "UI/UX Design", level: 88, category: "Design", color: "from-purple-600 to-blue-600" },
  { name: "WordPress", level: 92, category: "CMS", color: "from-blue-600 to-gray-700" },
  { name: "PHP", level: 80, category: "CMS", color: "from-indigo-500 to-purple-600" },
]

export function SkillsProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate each skill bar with a delay
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => ({
                ...prev,
                [skill.name]: skill.level,
              }))
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const categories = ["Frontend", "Backend", "Design", "CMS"]

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here's a breakdown of my technical expertise across different domains of web development and design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <Card
              key={category}
              className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-0"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-center">
                  <Badge
                    className={`${
                      category === "Frontend"
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : category === "Backend"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : category === "Design"
                            ? "bg-gradient-to-r from-purple-500 to-pink-500"
                            : "bg-gradient-to-r from-orange-500 to-red-500"
                    } text-white border-0 text-sm px-4 py-2`}
                  >
                    {category}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {animatedSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                        <div
                          className={`h-2.5 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${animatedSkills[skill.name] || 0}%`,
                            transitionDelay: `${index * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
