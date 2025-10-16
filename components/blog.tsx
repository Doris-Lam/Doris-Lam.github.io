"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export function Blog(): React.JSX.Element {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog")
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts)
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100">
            blog
          </h2>
          <p className="text-sm text-stone-500 dark:text-stone-500 italic">
            thoughts on tech, learning, and building things
          </p>
        </div>
        <div className="p-6 border-2 border-stone-900 dark:border-stone-100 rounded-xl">
          <p className="text-sm text-stone-500 dark:text-stone-500">loading posts...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl sm:text-3xl font-light text-stone-900 dark:text-stone-100">
          blog
        </h2>
        <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-500 italic">
          thoughts on tech, learning, and building things
        </p>
      </div>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <div className="p-5 sm:p-6 border-2 border-stone-900 dark:border-stone-100 rounded-xl">
            <p className="text-sm text-stone-600 dark:text-stone-400">
              no posts yet, check back soon!
            </p>
          </div>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-5 sm:p-6 border-2 border-stone-900 dark:border-stone-100 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-950 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <h3 className="text-lg sm:text-xl font-medium text-stone-900 dark:text-stone-100">
                  {post.title}
                </h3>
                <span className="text-[11px] sm:text-xs text-stone-500 uppercase tracking-wider flex-shrink-0">
                  {post.date}
                </span>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  )
}

