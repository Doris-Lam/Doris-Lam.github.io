import fs from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Doodles } from "@/components/doodles"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogPost {
  title: string
  date: string
  excerpt: string
  content: string
}

function getBlogPost(slug: string): BlogPost | null {
  try {
    const blogDirectory = path.join(process.cwd(), "content/blog")
    const filePath = path.join(blogDirectory, `${slug}.md`)
    
    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      title: data.title || "",
      date: data.date || "",
      excerpt: data.excerpt || "",
      content: content,
    }
  } catch (error) {
    console.error("Error reading blog post:", error)
    return null
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900 flex flex-col dark:bg-stone-900 dark:text-stone-100 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] transition-colors duration-300">
      <Doodles />
      <div className="relative z-10">
        <Header />
        <main className="w-full flex-1 px-4 sm:px-6 pt-14 md:pt-16 pb-12">
          <div className="w-full max-w-3xl mx-auto space-y-8">
            {/* Back button */}
            <Link 
              href="/misc"
              className="inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              back to misc
            </Link>

            {/* Post header */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-100">
                {post.title}
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-500 uppercase tracking-wider">
                {post.date}
              </p>
            </div>

            {/* Post content */}
            <article className="prose prose-stone dark:prose-invert max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mt-8 mb-4 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-stone-900 dark:text-stone-100 mt-8 mb-4 tracking-wide text-sm bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 rounded-md inline-block">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-stone-900 dark:text-stone-100 mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-none space-y-2 mb-4 ml-0">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-sm md:text-base text-stone-600 dark:text-stone-400 flex items-start">
                      <span className="text-orange-500 mr-2 flex-shrink-0">•</span>
                      <span>{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-bold text-stone-900 dark:text-stone-100">
                      {children}
                    </strong>
                  ),
                  code: ({ children }) => (
                    <code className="bg-stone-100 dark:bg-stone-800 px-1.5 py-0.5 rounded text-xs sm:text-sm font-mono text-stone-900 dark:text-stone-100">
                      {children}
                    </code>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-orange-500 pl-4 italic text-stone-600 dark:text-stone-400 my-4">
                      {children}
                    </blockquote>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>

            {/* Back button at bottom */}
            <div className="pt-8 border-t-2 border-stone-200 dark:border-stone-700">
              <Link 
                href="/misc"
                className="inline-flex items-center gap-2 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                back to misc
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

