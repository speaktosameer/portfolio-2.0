import { NextResponse } from "next/server"

export async function GET() {
  try {
    const username = "speaktosameer"

    // Fetch user data and repositories
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-App",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }),
      fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`, {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "Portfolio-App",
        },
        next: { revalidate: 3600 },
      }),
    ])

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("Failed to fetch GitHub data")
    }

    const userData = await userResponse.json()
    const reposData = await reposResponse.json()

    return NextResponse.json({
      user: {
        name: userData.name,
        bio: userData.bio,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        avatar_url: userData.avatar_url,
        html_url: userData.html_url,
      },
      repositories: reposData.map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
      })),
    })
  } catch (error) {
    console.error("Error fetching GitHub data:", error)
    // Return fallback data instead of error
    return NextResponse.json({
      user: {
        name: "Sameer Ansari",
        bio: "Full-Stack Developer & UI/UX Designer",
        public_repos: 25,
        followers: 150,
        following: 75,
        avatar_url: "/placeholder.svg?height=200&width=200",
        html_url: "https://github.com/speaktosameer",
      },
      repositories: getFallbackRepos(),
      source: "fallback",
    })
  }
}

function getFallbackRepos() {
  return [
    {
      name: "react-portfolio",
      description: "Modern portfolio website built with React and Next.js",
      html_url: "https://github.com/speaktosameer/react-portfolio",
      language: "TypeScript",
      stargazers_count: 15,
      forks_count: 3,
      updated_at: new Date().toISOString(),
    },
    {
      name: "ecommerce-platform",
      description: "Full-stack e-commerce platform with React and Node.js",
      html_url: "https://github.com/speaktosameer/ecommerce-platform",
      language: "JavaScript",
      stargazers_count: 28,
      forks_count: 8,
      updated_at: new Date(Date.now() - 86400000).toISOString(),
    },
    {
      name: "wordpress-theme",
      description: "Custom WordPress theme with modern design",
      html_url: "https://github.com/speaktosameer/wordpress-theme",
      language: "PHP",
      stargazers_count: 12,
      forks_count: 5,
      updated_at: new Date(Date.now() - 172800000).toISOString(),
    },
  ]
}
