"use client"
import { useEffect, useState } from "react";
import { Header } from "@/components/header"
import { Projects } from "@/components/projects"
import { Footer } from "@/components/footer"

export default function ProjectsPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col dark:bg-stone-900 dark:text-stone-100">
      <Header />
      <div className="flex-1">
        <Projects />
      </div>
      <Footer />
    </div>
  )
} 