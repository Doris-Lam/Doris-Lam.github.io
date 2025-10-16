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
      <div className="px-4 py-3 border-2 border-stone-900 dark:border-stone-100 rounded-lg bg-stone-50 dark:bg-stone-800">
        <div className="flex items-center gap-3 mb-3">
          <Music className="w-5 h-5 text-stone-500 animate-pulse" />
          <div className="text-sm font-medium text-stone-500 dark:text-stone-400">
            loading top artists...
          </div>
        </div>
      </div>
    )
  }

  if (!artists || artists.length === 0) {
    return (
      <div className="px-4 py-3 border-2 border-stone-900 dark:border-stone-100 rounded-lg bg-stone-50 dark:bg-stone-800">
        <div className="flex items-center gap-3">
          <Music className="w-5 h-5 text-stone-500" />
          <div className="text-sm text-stone-500 dark:text-stone-400">
            no top artists data available
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {artists.map((artist, index) => (
        <div
          key={index}
          className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 border-2 border-stone-900 dark:border-stone-100 rounded-full bg-stone-50 dark:bg-stone-800"
        >
          {artist.image ? (
            <img
              src={artist.image}
              alt={artist.name}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover"
            />
          ) : (
            <Music className="w-5 h-5 text-stone-500" />
          )}
          <span className="text-sm font-medium text-stone-900 dark:text-stone-100">
            {artist.name}
          </span>
        </div>
      ))}
    </div>
  )
}
