"use client"
import { Header } from "@/components/header"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"
import { Doodles } from "@/components/doodles"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900 flex flex-col dark:bg-stone-900 dark:text-stone-100 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] transition-colors duration-300">
      <Doodles />
      <div className="relative z-10">
        <Header />
        <div className="flex-1">
          <Projects />
        </div>
        <Footer />
      </div>
    </div>
  )
} 