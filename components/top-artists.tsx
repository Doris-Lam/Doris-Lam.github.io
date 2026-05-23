"use client"
import { useEffect, useState } from "react"
import { Music } from "lucide-react"

interface Artist {
  name: string
  image: string
  url: string
  playcount: string
}

export function TopArtists() {
  const [artists, setArtists] = useState<Artist[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTopArtists = async () => {
      try {
        const response = await fetch("/api/spotify/top-artists")
        if (response.ok) {
          const data = await response.json()
          setArtists(data.artists)
        }
      } catch (error) {
        console.error("Error fetching top artists:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchTopArtists()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm italic text-stone-500 dark:text-stone-500">
        <Music className="w-4 h-4 animate-pulse" />
        loading top artists...
      </div>
    )
  }

  if (!artists || artists.length === 0) {
    return (
      <div className="flex items-center gap-2 text-sm italic text-stone-500 dark:text-stone-500">
        <Music className="w-4 h-4" />
        no top artists data available
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2">
      {artists.map((artist, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2 py-1.5 pr-3 pl-1 rounded-full ring-1 ring-stone-200 dark:ring-stone-800 bg-white/40 dark:bg-stone-900/40 hover:ring-stone-400 dark:hover:ring-stone-600 transition-colors"
        >
          {artist.image ? (
            <img
              src={artist.image}
              alt={artist.name}
              className="w-6 h-6 rounded-full object-cover"
            />
          ) : (
            <span className="w-6 h-6 rounded-full flex items-center justify-center text-stone-500">
              <Music className="w-3 h-3" />
            </span>
          )}
          <span className="font-serif text-sm text-stone-800 dark:text-stone-200">
            {artist.name}
          </span>
        </div>
      ))}
    </div>
  )
}
