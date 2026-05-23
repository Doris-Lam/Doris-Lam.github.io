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
      <div className="flex items-center gap-2 text-sm italic text-stone-500 dark:text-stone-500">
        <Disc3 className="w-4 h-4 animate-pulse" />
        loading favourite albums...
      </div>
    )
  }

  if (!albums || albums.length === 0) {
    return (
      <div className="flex items-center gap-2 text-sm italic text-stone-500 dark:text-stone-500">
        <Disc3 className="w-4 h-4" />
        no album data available
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 xs:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
      {albums.map((album, index) => (
        <div key={index} className="group relative">
          <div className="relative aspect-square overflow-hidden rounded-md ring-1 ring-stone-200 dark:ring-stone-800 group-hover:ring-stone-400 dark:group-hover:ring-stone-600 transition-all">
            {album.image ? (
              <img
                src={album.image}
                alt={album.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                <Disc3 className="w-6 h-6 text-stone-400" />
              </div>
            )}
          </div>
          <div className="hidden sm:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 w-max max-w-[200px]">
            <div className="bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 rounded-md px-3 py-2 shadow-lg text-center">
              <div className="font-serif text-sm leading-tight">{album.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-stone-400 dark:text-stone-500 mt-0.5">
                {album.artist}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
