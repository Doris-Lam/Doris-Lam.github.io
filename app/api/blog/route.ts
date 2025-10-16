import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import matter from "gray-matter"

export const dynamic = 'force-dynamic'

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

function getBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(process.cwd(), "content/blog")
  
  // Check if directory exists
  if (!fs.existsSync(blogDirectory)) {
    return []
  }

  const filenames = fs.readdirSync(blogDirectory)
  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(blogDirectory, filename)
      const fileContents = fs.readFileSync(filePath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug: filename.replace(/\.md$/, ""),
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        content: content,
      }
    })

  return posts
}

export async function GET() {
  try {
    const posts = getBlogPosts()
    return NextResponse.json({ posts })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ posts: [] }, { status: 500 })
  }
}

