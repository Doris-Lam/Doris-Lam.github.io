"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function ThemeToggle(): React.JSX.Element {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // next-themes can't resolve the active theme until after hydration
  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === "dark"

  // 日 / 月 — sun and moon. Both are identical in Simplified and Traditional.
  // No uppercase or tracking: neither does anything useful for CJK.
  const word = (active: boolean) =>
    `text-[13px] leading-none transition-colors ${
      active
        ? "text-stone-900 dark:text-stone-100"
        : "text-stone-400 dark:text-stone-600 hover:text-stone-700 dark:hover:text-stone-300"
    }`

  return (
    <div className="flex items-center gap-2" role="group" aria-label="Colour theme">
      <button
        onClick={() => setTheme("light")}
        aria-label="Light mode"
        aria-pressed={mounted && !isDark}
        className={word(mounted && !isDark)}
      >
        日
      </button>
      <span className="text-[13px] leading-none text-stone-300 dark:text-stone-700">
        /
      </span>
      <button
        onClick={() => setTheme("dark")}
        aria-label="Dark mode"
        aria-pressed={isDark}
        className={word(isDark)}
      >
        月
      </button>
    </div>
  )
}
