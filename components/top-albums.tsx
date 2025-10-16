"use client"
import { useEffect, useState } from "react"
import { Disc3 } from "lucide-react"

interface Album {
  name: string
  artist: string
  image: string
  url: string
  playcount: string
}

export function TopAlbums() {
  const [albums, setAlbums] = useState<Album[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const response = await fetch("/api/spotify/top-albums")
        if (response.ok) {
          const data = await response.json()
          setAlbums(data.albums)
        }
      } catch (error) {
        console.error("Error fetching top albums:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopAlbums()
  }, [])

  if (loading) {
    return (
      <div className="w-full sm:w-96 px-4 py-3 border-2 border-stone-900 dark:border-stone-100 rounded-lg bg-stone-50 dark:bg-stone-800">
        <div className="flex items-center gap-3 mb-3">
          <Disc3 className="w-5 h-5 text-stone-500 animate-pulse" />
          <div className="text-sm font-medium text-stone-500 dark:text-stone-400">
            loading favourite albums...
          </div>
        </div>
      </div>
    )
  }

  if (!albums || albums.length === 0) {
    return (
      <div className="w-full sm:w-96 px-4 py-3 border-2 border-stone-900 dark:border-stone-100 rounded-lg bg-stone-50 dark:bg-stone-800">
        <div className="flex items-center gap-3">
          <Disc3 className="w-5 h-5 text-stone-500" />
          <div className="text-sm text-stone-500 dark:text-stone-400">
            no album data available
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {albums.map((album, index) => (
          <div
            key={index}
            className="group relative"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-stone-900 dark:border-stone-100">
              {album.image ? (
                <img
                  src={album.image}
                  alt={album.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center">
                  <Disc3 className="w-8 h-8 text-stone-400" />
                </div>
              )}
            </div>
            {/* Speech bubble tooltip */}
            <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
              <div className="relative bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-100 rounded-2xl px-4 py-3 shadow-xl whitespace-nowrap">
                {/* Speech bubble tail pointing down */}
                <div className="absolute top-full left-1/2 -translate-x-1/2">
                  <div className="w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-stone-900 dark:border-t-stone-100 border-r-8 border-r-transparent"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-[-6px] w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white dark:border-t-stone-900 border-r-8 border-r-transparent"></div>
                </div>
                <div className="text-sm font-medium text-stone-900 dark:text-stone-100">
                  {album.name}
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-400">
                  {album.artist}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
