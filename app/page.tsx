"use client"
import { useEffect, useState } from "react";
import { Header } from "@/components/header"
import { MainContent } from "@/components/main-content"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col dark:bg-stone-900 dark:text-stone-100">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
