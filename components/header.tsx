"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes";
import Link from "next/link"

export function Header(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="w-full py-7 bg-stone-50 dark:bg-stone-900">
      <div className="w-full max-w-2xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-brother-signature text-5xl text-stone-800 hover:text-stone-600 dark:text-stone-100 dark:hover:text-stone-300 transition-colors">
            Doris Lam
          </Link>
          
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="/projects" className="text-stone-600 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white transition-colors text-sm">
                Projects
              </Link>
            </nav>
            
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-6 h-6 hover:bg-stone-200 dark:hover:bg-stone-800 rounded-md flex items-center justify-center transition-colors"
            >
              {mounted && (theme === "dark" ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />)}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}