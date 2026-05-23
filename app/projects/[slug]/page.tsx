"use client"
import { notFound } from "next/navigation"
import Link from "next/link"
import { use } from "react"
import {
  projects,
  slugify,
  ProjectDetailBody,
} from "@/components/projects"

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const project = projects.find((p) => slugify(p.title) === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="w-full px-6 sm:px-8 md:px-12 pt-8 md:pt-12 pb-12">
      <div className="w-full max-w-3xl mx-auto space-y-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
        >
          <span>←</span>
          <span>back to projects</span>
        </Link>

        <ProjectDetailBody project={project} />
      </div>
    </main>
  )
}
