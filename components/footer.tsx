import React from "react"
import { Heart } from "lucide-react"

export function Footer(): React.JSX.Element {
  return (
    <footer className="w-full py-6 border-t border-stone-200 dark:border-stone-800">
      <div className="text-center space-y-2">
        <p className="text-sm text-stone-600 dark:text-stone-400 flex items-center justify-center gap-1.5">
          made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse inline-block" /> and lots of ☕ by doris, 2025
        </p>
      </div>
    </footer>
  )
}
