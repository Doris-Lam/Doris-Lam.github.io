"use client"
import { TopArtists } from "@/components/top-artists"
import { TopAlbums } from "@/components/top-albums"

export default function MiscPage() {
  return (
    <main className="w-full flex-1 px-6 sm:px-8 md:px-12 pt-8 md:pt-12 pb-12">
      <div className="w-full max-w-3xl mx-auto space-y-14">
        <div className="space-y-4">
          <div className="flex items-baseline gap-3">
            <span className="font-mono uppercase text-[11px] tracking-[0.2em] text-stone-500 dark:text-stone-500">
              elsewhere
            </span>
            <span className="flex-1 h-px bg-stone-300 dark:bg-stone-800" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight">
            more about <span className="italic">me</span>.
          </h1>
          <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 italic">
            small things that make me, me!
          </p>
        </div>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
              top artists this week
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-500 italic">
              what i&apos;ve been listening to lately
            </p>
          </div>
          <TopArtists />
        </section>

        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-900 dark:text-stone-100 tracking-tight">
              favourite albums
            </h2>
            <p className="text-sm text-stone-500 dark:text-stone-500 italic">
              albums that have been on repeat
            </p>
          </div>
          <TopAlbums />
        </section>
      </div>
    </main>
  )
}
