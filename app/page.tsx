"use client"
import { useEffect } from "react"
import { MainContent } from "@/components/main-content"

export default function Portfolio() {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden"
    return () => {
      document.documentElement.style.overflowY = ""
    }
  }, [])
  return <MainContent />
}
