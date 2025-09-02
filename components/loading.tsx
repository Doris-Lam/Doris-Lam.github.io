"use client"
import React from "react"

export function Loading(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col dark:bg-stone-900 dark:text-stone-100 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-8 h-8 border-4 border-stone-300 dark:border-stone-600 border-t-stone-600 dark:border-t-stone-300 rounded-full"></div>
      </div>
    </div>
  )
}


