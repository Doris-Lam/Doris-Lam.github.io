"use client"

import { useEffect } from "react"

const DURATION = 0.05
const MIN_GAP_MS = 45

// Build the click once into a buffer and replay that same buffer on every
// click. Rebuilding the node graph per click let envelope timing drift, so
// clicks didn't all sound identical.
function renderClick(sampleRate: number): Promise<AudioBuffer> {
  const frames = Math.ceil(sampleRate * DURATION)
  const offline = new OfflineAudioContext(1, frames, sampleRate)
  const t = 0

  const noiseBuf = offline.createBuffer(1, Math.ceil(sampleRate * 0.03), sampleRate)
  const data = noiseBuf.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1

  const noise = offline.createBufferSource()
  noise.buffer = noiseBuf
  const band = offline.createBiquadFilter()
  band.type = "bandpass"
  band.frequency.value = 4200
  band.Q.value = 1.3
  const noiseGain = offline.createGain()
  noiseGain.gain.setValueAtTime(0.0001, t)
  noiseGain.gain.exponentialRampToValueAtTime(0.085, t + 0.0008)
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.016)
  noise.connect(band)
  band.connect(noiseGain)
  noiseGain.connect(offline.destination)
  noise.start(t)

  const osc = offline.createOscillator()
  osc.type = "triangle"
  osc.frequency.setValueAtTime(1100, t)
  osc.frequency.exponentialRampToValueAtTime(620, t + 0.014)
  const oscGain = offline.createGain()
  oscGain.gain.setValueAtTime(0.0001, t)
  oscGain.gain.exponentialRampToValueAtTime(0.032, t + 0.0015)
  oscGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.02)
  osc.connect(oscGain)
  oscGain.connect(offline.destination)
  osc.start(t)
  osc.stop(t + 0.025)

  return offline.startRendering()
}

export function ClickSound(): null {
  useEffect(() => {
    let ctx: AudioContext | null = null
    let buffer: AudioBuffer | null = null
    let lastAt = 0

    // Render at mount, not on first interaction: OfflineAudioContext needs no
    // user gesture, and its promise cannot resolve inside the few ms between
    // pointerdown and click — which is why the first click used to be silent.
    ctx = new AudioContext()
    void renderClick(ctx.sampleRate).then((b) => {
      buffer = b
    })

    const warm = () => {
      if (ctx && ctx.state === "suspended") void ctx.resume()
    }

    const play = () => {
      if (!ctx || !buffer) return
      // identical buffer every time; a gap stops rapid clicks stacking
      const now = performance.now()
      if (now - lastAt < MIN_GAP_MS) return
      lastAt = now
      const src = ctx.createBufferSource()
      src.buffer = buffer
      src.connect(ctx.destination)
      src.start()
    }

    const onPointerDown = () => warm()

    const onClick = (e: MouseEvent) => {
      if (e.button !== 0) return
      if (!(e.target as HTMLElement | null)?.closest("a, button")) return
      warm()
      play()
    }

    document.addEventListener("pointerdown", onPointerDown)
    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("pointerdown", onPointerDown)
      document.removeEventListener("click", onClick)
      void ctx?.close()
    }
  }, [])

  return null
}
