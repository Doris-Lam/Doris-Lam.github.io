"use client"

import React, { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        console.log("Music paused")
      } else {
        audioRef.current.play()
          .then(() => console.log("Music playing"))
          .catch(err => console.error("Error playing audio:", err))
      }
      setIsPlaying(!isPlaying)
    }
  }

  if (!mounted) return null

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/bread.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={toggleMusic}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-stone-900 dark:border-stone-100 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-stone-900 dark:text-stone-100" />
        ) : (
          <VolumeX className="w-5 h-5 text-stone-900 dark:text-stone-100" />
        )}
      </button>
    </>
  )
}

