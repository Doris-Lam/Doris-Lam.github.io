import { NextResponse } from "next/server"

export const runtime = 'edge'

// Static blog post metadata (content is read from markdown files at build time in the page component)
const blogPosts = [
  {
    slug: "0.5-2025-reflection",
    title: "1/2 2025 reflection",
    date: "AUG 2025",
    excerpt: "For a good part of my life, I had insane FOMO. I hated missing out on plans, on people, on moments.",
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
