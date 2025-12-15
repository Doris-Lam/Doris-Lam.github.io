import { NextResponse } from "next/server"

export const runtime = 'edge'

// Static blog post metadata (content is read from markdown files at build time in the page component)
const blogPosts = [
  {
    slug: "on hobbies and exploration",
    title: "on hobbies and exploration",
    date: "DEC 2025",
    excerpt: "I have realized that I have not really explored my entire life yet, what I can do, what brings me joy, or what passions might be waiting for me.",
    content: "",
  },
  {
    slug: "comparison",
    title: "on comparison",
    date: "OCT 2025",
    excerpt: "For most of my life, I compared myself to everyone around me. In high school, I did not really know what I wanted to do.",
    content: "",
  },
]

export async function GET() {
  try {
    return NextResponse.json({ posts: blogPosts })
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return NextResponse.json({ posts: [] }, { status: 500 })
  }
}
