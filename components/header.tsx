"use client"

import React from "react"
import { Moon, Sun, Home, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes";
import Link from "next/link"
import { MusicPlayer } from "./music-player"

export function Header(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full py-4 md:py-6">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Home Icon */}
          <Link 
            href="/" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-stone-900 dark:border-stone-100 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
          >
            <Home className="w-5 h-5 text-stone-900 dark:text-stone-100" />
          </Link>
          
          {/* Navigation Links (desktop) */}
          <nav className="hidden sm:flex items-center gap-2 md:gap-3">
            <Link 
              href="/projects" 
              className="px-6 py-2 rounded-full border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors text-sm font-light"
            >
              work
            </Link>
            <Link 
              href="/misc" 
              className="px-6 py-2 rounded-full border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors text-sm font-light"
            >
              more
            </Link>
            <a 
              href="/resume/Doris_Lam_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors text-sm font-light"
            >
              resume
            </a>
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-stone-900 dark:border-stone-100 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
            >
              {mounted && (theme === "dark" ? <Sun className="w-5 h-5 text-stone-100" /> : <Moon className="w-5 h-5 text-stone-900" />)}
            </button>

            <div className="block">
              <MusicPlayer />
            </div>

            {/* Mobile menu button */}
            <button
              className="sm:hidden w-10 h-10 rounded-full border-2 border-stone-900 dark:border-stone-100 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen((v) => !v)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-stone-900 dark:text-stone-100" />
              ) : (
                <Menu className="w-5 h-5 text-stone-900 dark:text-stone-100" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMenuOpen && (
          <div className="sm:hidden mt-3">
            <div className="border-2 border-stone-900 dark:border-stone-100 rounded-xl overflow-hidden bg-white dark:bg-stone-900">
              <nav className="flex flex-col">
                <Link 
                  href="/projects"
                  className="px-4 py-3 border-b-2 border-stone-900/10 dark:border-stone-100/10 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  work
                </Link>
                <Link 
                  href="/misc"
                  className="px-4 py-3 border-b-2 border-stone-900/10 dark:border-stone-100/10 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  more
                </Link>
                <a 
                  href="/resume/Doris_Lam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-stone-900 dark:text-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  resume
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}