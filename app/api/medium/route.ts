import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Medium RSS feed URL for the user
    const mediumRSSUrl = "https://medium.com/feed/@speaktosameer"

    const response = await fetch(mediumRSSUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; Portfolio/1.0)",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error("Failed to fetch Medium posts")
    }

    const xmlText = await response.text()

    // Parse XML to extract posts (simplified version)
    const posts = parseMediumRSS(xmlText)

    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Error fetching Medium posts:", error)
    // Return fallback posts instead of error
    return NextResponse.json({
      posts: getFallbackPosts(),
      source: "fallback",
    })
  }
}

function parseMediumRSS(xmlText: string) {
  // This is a simplified parser - in production, you'd use a proper XML parser
  const posts = []
  const itemRegex = /<item>([\s\S]*?)<\/item>/g
  let match

  while ((match = itemRegex.exec(xmlText)) !== null) {
    const item = match[1]

    const title = extractTag(item, "title")
    const link = extractTag(item, "link")
    const pubDate = extractTag(item, "pubDate")
    const description = extractTag(item, "description")
    const categories = extractCategories(item)

    if (title && link) {
      posts.push({
        title: cleanText(title),
        link,
        pubDate: new Date(pubDate).toISOString(),
        description: cleanText(description).substring(0, 200) + "...",
        categories,
        readTime: Math.ceil(cleanText(description).split(" ").length / 200) + " min read",
      })
    }
  }

  return posts.slice(0, 6) // Return latest 6 posts
}

function extractTag(text: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, "i")
  const match = text.match(regex)
  return match ? match[1] : ""
}

function extractCategories(text: string): string[] {
  const categoryRegex = /<category[^>]*>(.*?)<\/category>/g
  const categories = []
  let match

  while ((match = categoryRegex.exec(text)) !== null) {
    categories.push(match[1])
  }

  return categories.slice(0, 3) // Return first 3 categories
}

function cleanText(text: string): string {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, "")
    .trim()
}

function getFallbackPosts() {
  return [
    {
      title: "Building Scalable React Applications: Best Practices for 2024",
      link: "https://speaktosameer.medium.com/",
      pubDate: new Date().toISOString(),
      description:
        "Learn the latest techniques and patterns for building maintainable and scalable React applications that can grow with your business needs.",
      categories: ["React", "JavaScript", "Performance"],
      readTime: "8 min read",
    },
    {
      title: "The Psychology of UI/UX Design: Creating Intuitive User Experiences",
      link: "https://speaktosameer.medium.com/",
      pubDate: new Date(Date.now() - 86400000).toISOString(),
      description:
        "Discover how understanding user psychology can dramatically improve your design decisions and create more engaging digital experiences.",
      categories: ["UI/UX", "Psychology", "Design"],
      readTime: "6 min read",
    },
    {
      title: "WordPress Performance Optimization: From Slow to Lightning Fast",
      link: "https://speaktosameer.medium.com/",
      pubDate: new Date(Date.now() - 172800000).toISOString(),
      description:
        "Transform your WordPress site's performance with these proven optimization techniques that can reduce load times by up to 70%.",
      categories: ["WordPress", "Performance", "SEO"],
      readTime: "10 min read",
    },
  ]
}
