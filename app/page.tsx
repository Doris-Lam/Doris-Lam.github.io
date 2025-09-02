"use client"
import { useEffect, useState } from "react";
import { Header } from "@/components/header"
import { MainContent } from "@/components/main-content"
import { Footer } from "@/components/footer"
import { Loading } from "@/components/loading"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);
  if (!mounted) return <Loading />;
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col dark:bg-stone-900 dark:text-stone-100 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]">
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}
