"use client"
import { useEffect, useState } from "react"
import { Music } from "lucide-react"

interface SpotifyTrack {
  title: string
  artist: string
  album: string
  albumArt: string
  isPlaying: boolean
  songUrl: string
}

export function NowPlaying() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNowPlaying = async () => {
      try {
        const response = await fetch("/api/spotify/now-playing")
        if (response.ok) {
          const data = await response.json()
          setTrack(data)
        }
      } catch (error) {
        console.error("Error fetching now playing:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNowPlaying()
    // Refresh every 30 seconds
    const interval = setInterval(fetchNowPlaying, 30000)
    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-3 px-3 sm:px-4 py-3 border-2 border-stone-900 dark:border-stone-100 rounded-lg bg-stone-50 dark:bg-stone-800">
        <Music className="w-5 h-5 text-stone-500 animate-pulse" />
        <div className="text-sm text-stone-500 dark:text-stone-400">
          loading...
        </div>
      </div>
    )
  }

  if (!track || !track.isPlaying) {
    return (
      <div className="flex items-center gap-3 px-3 sm:px-4 py-3 border-2 border-stone-900 dark:border-stone-100 rounded-lg bg-stone-50 dark:bg-stone-800">
        <Music className="w-5 h-5 text-stone-500" />
        <div className="text-sm text-stone-500 dark:text-stone-400">
          not playing anything right now
        </div>
      </div>
    )
  }

  return (
    <a
      href={track.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-50 flex items-center gap-3 px-3 sm:px-4 py-3 border-2 border-stone-900 dark:border-stone-100 rounded-lg bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 hover:scale-[1.02] sm:hover:scale-105 hover:shadow-lg transition-all duration-200 group cursor-pointer"
    >
      <div className="relative">
        <img
          src={track.albumArt}
          alt={track.album}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded group-hover:scale-110 transition-transform duration-200"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded">
          <Music className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider">
            now playing
          </p>
        </div>
        <p className="text-sm font-medium text-stone-900 dark:text-stone-100 truncate group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
          {track.title}
        </p>
        <p className="text-xs text-stone-600 dark:text-stone-400 truncate">
          {track.artist}
        </p>
      </div>
    </a>
  )
}

