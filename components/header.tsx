"use client"

import React from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes";
import Link from "next/link"

export function Header(): React.JSX.Element {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLink =
    "text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors";

  return (
    <header className="w-full py-6 md:py-8 px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-3xl mx-auto">
        <div className="flex items-center justify-end">
          <nav className="hidden sm:flex items-center gap-6 md:gap-8">
            <Link href="/" className={navLink}>
              home
            </Link>
            <Link href="/projects" className={navLink}>
              projects
            </Link>
            <Link href="/misc" className={navLink}>
              more
            </Link>
            <a
              href="/resume/Doris_Lam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={navLink}
            >
              resume
            </a>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted &&
                (resolvedTheme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                ))}
            </button>
          </nav>

          <button
            className="sm:hidden text-stone-700 dark:text-stone-300"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden mt-6 flex flex-col gap-4">
            <Link
              href="/projects"
              className={navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              projects
            </Link>
            <Link
              href="/misc"
              className={navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              more
            </Link>
            <a
              href="/resume/Doris_Lam_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              resume
            </a>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="text-left text-sm text-stone-600 dark:text-stone-400"
            >
              {mounted && (resolvedTheme === "dark" ? "light mode" : "dark mode")}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
