"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { ProjectFilter } from "@/components/project-filter"
import { EnhancedContactForm } from "@/components/enhanced-contact-form"
import { MediumBlogSection } from "@/components/medium-blog-section"
import { GitHubSection } from "@/components/github-section"
import { SkillsProgress } from "@/components/skills-progress"
import { ClientFeedback } from "@/components/client-feedback"
import { useAnalytics } from "@/components/analytics"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollAnimation } from "@/components/scroll-animations"
import {
  ArrowRight,
  Code,
  Palette,
  WorkflowIcon as Wordpress,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Download,
  Award,
  Users,
  Coffee,
  Zap,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { trackEvent } = useAnalytics()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setShowScrollTop(currentScrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    trackEvent("scroll_to_top")
  }

  const handleCTAClick = (action: string) => {
    trackEvent("cta_click", { action })
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      <FloatingElements />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sameer Ansari
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              <Link
                href="#services"
                className="text-muted-foreground hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">
                Skills
              </Link>
              <Link
                href="#portfolio"
                className="text-muted-foreground hover:text-blue-600 transition-colors font-medium"
              >
                Portfolio
              </Link>
              <Link href="#blog" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-blue-600 transition-colors font-medium">
                Contact
              </Link>
              <ThemeToggle />
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Sameer Ansari"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white dark:border-gray-800 animate-pulse" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Full-Stack Developer & <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              UI/UX Designer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up-delay">
            I create beautiful, functional websites and applications using React, modern UI/UX principles, and
            WordPress. Based in Nepal 🇳🇵, working globally to bring your digital vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up-delay-2">
            <Button
              size="lg"
              onClick={() => handleCTAClick("view_work")}
              className="text-lg px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleCTAClick("download_cv")}
              className="text-lg px-8 py-4 border-2 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8 animate-slide-up-delay-3">
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/speaktosameer" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
              asChild
            >
              <a href="https://linkedin.com/in/speaktosameernp" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
              asChild
            >
              <a href="https://x.com/speaktosameer" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
              asChild
            >
              <a href="https://www.facebook.com/speaktosameer/" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="fade-up">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 5 years of experience in web development and design, I specialize in creating digital
                  experiences that are both beautiful and functional. Based in Nepal, I work with clients globally to
                  bring their digital visions to life.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My expertise spans across modern React applications, intuitive UI/UX design, and robust WordPress
                  solutions. I believe in the power of clean code, thoughtful design, and seamless user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me sharing knowledge through my blog, contributing to open-source
                  projects, or exploring the beautiful landscapes of Nepal.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/speaktosameer" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                    asChild
                  >
                    <a href="https://linkedin.com/in/speaktosameernp" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                    asChild
                  >
                    <a href="https://speaktosameer.medium.com/" target="_blank" rel="noopener noreferrer">
                      <Coffee className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-0">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                    <Award className="h-8 w-8 mr-2" />
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-0">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-2 flex items-center justify-center">
                    <Zap className="h-8 w-8 mr-2" />
                    5+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-0">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-green-600 mb-2 flex items-center justify-center">
                    <Users className="h-8 w-8 mr-2" />
                    30+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-0">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-orange-600 mb-2 flex items-center justify-center">
                    <Coffee className="h-8 w-8 mr-2" />
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I offer comprehensive digital solutions to help your business thrive in the modern web landscape.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <ScrollAnimation key={index} animation="scale-up" delay={index * 100}>
                <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-0 group">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Code className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-4 text-gray-900 dark:text-white">React Development</CardTitle>
                    <CardDescription className="text-lg leading-relaxed">
                      Modern, scalable React applications with clean code and optimal performance.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        React
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        Next.js
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        TypeScript
                      </Badge>
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        Tailwind CSS
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}

            <ScrollAnimation animation="scale-up" delay={1 * 100}>
              <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0 group">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Palette className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-gray-900 dark:text-white">UI/UX Design</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    User-centered design solutions that combine aesthetics with functionality.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      Figma
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      Adobe XD
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      Prototyping
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                    >
                      User Research
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation animation="scale-up" delay={2 * 100}>
              <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0 group">
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Wordpress className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-gray-900 dark:text-white">WordPress Development</CardTitle>
                  <CardDescription className="text-lg leading-relaxed">
                    Custom WordPress themes and plugins tailored to your specific needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    >
                      Custom Themes
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    >
                      Plugin Development
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    >
                      WooCommerce
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                    >
                      Performance
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <ScrollAnimation animation="slide-left">
          <SkillsProgress />
        </ScrollAnimation>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/10 dark:to-purple-900/10"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Here are some of my recent projects showcasing my skills in React, UI/UX, and WordPress development.
            </p>
          </div>
          <ScrollAnimation animation="fade-up">
            <ProjectFilter />
          </ScrollAnimation>
        </div>
      </section>

      {/* GitHub Section */}
      <GitHubSection />

      {/* Blog Section */}
      <section id="blog">
        <MediumBlogSection />
      </section>

      {/* Client Feedback Section */}
      <ClientFeedback />

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? I'd love to hear about your ideas and discuss how we can bring them to
              life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Email</div>
                    <div className="text-muted-foreground">sameer@example.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                    <div className="text-muted-foreground">+977 98XXXXXXXX</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Location</div>
                    <div className="text-muted-foreground">Kathmandu, Nepal 🇳🇵</div>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <h4 className="font-semibold mb-6 text-xl text-gray-900 dark:text-white">Follow Me</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                    asChild
                  >
                    <a href="https://github.com/speaktosameer" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                    asChild
                  >
                    <a href="https://linkedin.com/in/speaktosameernp" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                    asChild
                  >
                    <a href="https://x.com/speaktosameer" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                    asChild
                  >
                    <a href="https://www.facebook.com/speaktosameer/" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            <EnhancedContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sameer Ansari
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Developer & UI/UX Designer based in Nepal, creating digital experiences worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#services" className="hover:text-blue-600 transition-colors">
                    React Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-blue-600 transition-colors">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-blue-600 transition-colors">
                    WordPress Development
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="#about" className="hover:text-blue-600 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-blue-600 transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="hover:text-blue-600 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-blue-600 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h4>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com/speaktosameer" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                  asChild
                >
                  <a href="https://linkedin.com/in/speaktosameernp" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950 transition-all duration-300"
                  asChild
                >
                  <a href="https://speaktosameer.medium.com/" target="_blank" rel="noopener noreferrer">
                    <Coffee className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Sameer Ansari. All rights reserved. Built with React & Next.js | Made with ❤️ in Nepal 🇳🇵
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg animate-bounce"
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
