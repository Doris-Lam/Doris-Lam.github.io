"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Doodles } from "@/components/doodles"
import { TopArtists } from "@/components/top-artists"
import { TopAlbums } from "@/components/top-albums"
import { Blog } from "@/components/blog"

export default function MiscPage() {
  return (
    <div className="min-h-screen bg-[#faf9f7] text-stone-900 flex flex-col dark:bg-stone-900 dark:text-stone-100 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] transition-colors duration-300">
      <Doodles />
      
      <div className="relative z-10">
        <Header />
        <main className="w-full flex-1 px-6 pt-16 pb-12">
          <div className="w-full max-w-4xl mx-auto space-y-16">
            {/* Intro */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-light text-stone-900 dark:text-stone-100">
                more about <span className="bg-orange-200 dark:bg-orange-900/40 px-1.5 py-0.5 rounded">me</span>
              </h1>
              <p className="text-base md:text-lg text-stone-600 dark:text-stone-400">
                things i write, listen to, and care about
              </p>
            </div>

            {/* Blog Section */}
            <Blog />

            {/* Top Artists This Week */}
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100">
                  top artists this week
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-500 italic">
                  what i've been listening to lately
                </p>
              </div>
              
              <TopArtists />
            </section>

            {/* Favourite Albums */}
            <section className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-light text-stone-900 dark:text-stone-100">
                  favourite albums
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-500 italic">
                  albums that have been on repeat
                </p>
              </div>
              
              <TopAlbums />
              
              <div className="text-center text-sm text-stone-500 dark:text-stone-500 italic">
                if you've made it this far, feel free to give <span className="bg-orange-200 dark:bg-orange-900/40 px-1.5 py-0.5 rounded">me</span> music recommendations! :)
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

