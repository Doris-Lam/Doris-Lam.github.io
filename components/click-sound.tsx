"use client"

import { useEffect } from "react"

// Synthesised rather than a bundled audio file. A click reads as "crisp"
// because of a filtered noise transient; the short pitched body underneath
// keeps it from sounding like a hiss.
export function ClickSound(): null {
  useEffect(() => {
    let ctx: AudioContext | null = null
    let noiseBuffer: AudioBuffer | null = null

    const getNoise = (c: AudioContext) => {
      if (!noiseBuffer) {
        const len = Math.floor(c.sampleRate * 0.03)
        noiseBuffer = c.createBuffer(1, len, c.sampleRate)
        const data = noiseBuffer.getChannelData(0)
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
      }
      return noiseBuffer
    }

    const play = () => {
      ctx ??= new AudioContext()
      if (ctx.state === "suspended") void ctx.resume()

      const t = ctx.currentTime
      const master = ctx.createGain()
      master.gain.value = 0.9
      master.connect(ctx.destination)

      const noise = ctx.createBufferSource()
      noise.buffer = getNoise(ctx)
      const band = ctx.createBiquadFilter()
      band.type = "bandpass"
      band.frequency.value = 4200
      band.Q.value = 1.3
      const noiseGain = ctx.createGain()
      noiseGain.gain.setValueAtTime(0.0001, t)
      noiseGain.gain.exponentialRampToValueAtTime(0.085, t + 0.0008)
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.016)
      noise.connect(band)
      band.connect(noiseGain)
      noiseGain.connect(master)
      noise.start(t)
      noise.stop(t + 0.03)

      const osc = ctx.createOscillator()
      osc.type = "triangle"
      osc.frequency.setValueAtTime(1100, t)
      osc.frequency.exponentialRampToValueAtTime(620, t + 0.014)
      const oscGain = ctx.createGain()
      oscGain.gain.setValueAtTime(0.0001, t)
      oscGain.gain.exponentialRampToValueAtTime(0.032, t + 0.0015)
      oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.02)
      osc.connect(oscGain)
      oscGain.connect(master)
      osc.start(t)
      osc.stop(t + 0.025)
    }

    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return
      if (!(e.target as HTMLElement | null)?.closest("a, button")) return
      play()
    }

    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("click", onClick)
      void ctx?.close()
    }
  }, [])

  return null
}
