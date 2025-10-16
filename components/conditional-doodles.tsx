"use client"
import { usePathname } from "next/navigation"
import { Doodles } from "./doodles"

export function ConditionalDoodles() {
  const pathname = usePathname()
  
  // Don't show doodles on blog post pages
  if (pathname?.startsWith("/blog/")) {
    return null
  }
  
  return <Doodles />
}

