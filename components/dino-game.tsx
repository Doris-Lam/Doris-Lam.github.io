"use client"
import { useEffect, useRef, useState } from "react"

const CANVAS_H = 190
const HORIZON_TOP = 150
const CACTUS_ROOT_DEPTH = 10
const DINO_ROOT_DEPTH = 8
const SCROLL_SPEED = 120
const JUMP_V = -420
const GRAVITY = 950

type SpriteRect = { x: number; y: number; w: number; h: number }

const SPRITES = {
  DINO_RUN_1: { x: 936, y: 2, w: 44, h: 47 },
  DINO_RUN_2: { x: 980, y: 2, w: 44, h: 47 },
  DINO_JUMP: { x: 848, y: 2, w: 44, h: 47 },
  CACTUS_S1: { x: 228, y: 2, w: 17, h: 35 },
  CACTUS_L1: { x: 332, y: 2, w: 25, h: 50 },
  CLOUD: { x: 86, y: 2, w: 46, h: 14 },
  HORIZON: { x: 2, y: 54, w: 600, h: 12 },
} as const

type Obstacle = { x: number; sprite: SpriteRect; trigger: number }
type CloudInst = { x: number; y: number }

const peakTime = Math.abs(JUMP_V) / GRAVITY
const triggerFor = (w: number) =>
  Math.round(SCROLL_SPEED * peakTime - 22 - w / 2)

const TRIGGER_S = triggerFor(SPRITES.CACTUS_S1.w)
const TRIGGER_L = triggerFor(SPRITES.CACTUS_L1.w)

export function DinoGame(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = Math.max(1, window.devicePixelRatio || 1)
    const img = new Image()
    let imgReady = false
    img.onload = () => {
      imgReady = true
      setReady(true)
    }
    img.src = "/dino-sprite.png"

    let raf = 0
    let mounted = true

    const isMobile = () => window.innerWidth < 640
    let DINO_X = isMobile() ? 24 : 56

    const setSize = () => {
      DINO_X = isMobile() ? 24 : 56
      const w = window.innerWidth
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(CANVAS_H * dpr)
      canvas.style.width = w + "px"
      canvas.style.height = CANVAS_H + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.imageSmoothingEnabled = false
    }
    setSize()
    window.addEventListener("resize", setSize)

    const drawSprite = (s: SpriteRect, dx: number, dy: number) => {
      if (!imgReady) return
      ctx.drawImage(img, s.x, s.y, s.w, s.h, Math.round(dx), Math.round(dy), s.w, s.h)
    }

    const obstacles: Obstacle[] = []
    const W0 = window.innerWidth
    const clouds: CloudInst[] = [
      { x: W0 * 0.08, y: 24 },
      { x: W0 * 0.24, y: 8 },
      { x: W0 * 0.42, y: 48 },
      { x: W0 * 0.6, y: 18 },
      { x: W0 * 0.76, y: 56 },
      { x: W0 * 0.92, y: 30 },
    ]
    let dinoY = 0
    let dinoVy = 0
    let runFrame = 0
    let runFrameTimer = 0
    let lastT = 0
    let horizonOffset = 0

    const pickCactus = (): Obstacle => {
      const isLarge = Math.random() > 0.55
      const sprite = isLarge ? SPRITES.CACTUS_L1 : SPRITES.CACTUS_S1
      return {
        x: window.innerWidth + 20,
        sprite,
        trigger: isLarge ? TRIGGER_L : TRIGGER_S,
      }
    }

    const loop = (t: number) => {
      if (!mounted) return
      const dt = lastT ? Math.min(0.05, (t - lastT) / 1000) : 0.016
      lastT = t
      const W = window.innerWidth

      for (const c of clouds) {
        c.x -= SCROLL_SPEED * 0.2 * dt
        if (c.x < -SPRITES.CLOUD.w) {
          c.x = W + 80 + Math.random() * 280
          c.y = 8 + Math.random() * 56
        }
      }

      for (const o of obstacles) o.x -= SCROLL_SPEED * dt
      while (obstacles.length && obstacles[0].x + obstacles[0].sprite.w < -5) {
        obstacles.shift()
      }
      const rightmost = obstacles.length
        ? obstacles[obstacles.length - 1].x
        : -Infinity
      const desiredGap = 360 + Math.random() * 320
      if (rightmost < W - desiredGap) {
        obstacles.push(pickCactus())
      }

      const dinoFront = DINO_X + 44
      if (dinoY === 0 && dinoVy === 0) {
        for (const o of obstacles) {
          const dist = o.x - dinoFront
          if (dist > 0 && dist <= o.trigger) {
            dinoVy = JUMP_V
            break
          }
        }
      }
      dinoY += dinoVy * dt
      dinoVy += GRAVITY * dt
      if (dinoY > 0) {
        dinoY = 0
        dinoVy = 0
      }
      const airborne = dinoY < -1

      runFrameTimer += dt
      if (runFrameTimer > 0.16) {
        runFrame = 1 - runFrame
        runFrameTimer = 0
      }

      horizonOffset =
        (horizonOffset + SCROLL_SPEED * dt) % SPRITES.HORIZON.w

      ctx.clearRect(0, 0, W, CANVAS_H)

      const hsrc = SPRITES.HORIZON
      let hx = -horizonOffset
      while (hx < W) {
        drawSprite(hsrc, hx, HORIZON_TOP)
        hx += hsrc.w
      }

      for (const c of clouds) drawSprite(SPRITES.CLOUD, c.x, c.y)

      for (const o of obstacles) {
        const oy = HORIZON_TOP - o.sprite.h + CACTUS_ROOT_DEPTH
        drawSprite(o.sprite, o.x, oy)
      }

      const dinoSprite = airborne
        ? SPRITES.DINO_JUMP
        : runFrame === 0
          ? SPRITES.DINO_RUN_1
          : SPRITES.DINO_RUN_2
      const dinoYpos = HORIZON_TOP - dinoSprite.h + DINO_ROOT_DEPTH + dinoY
      drawSprite(dinoSprite, DINO_X, dinoYpos)

      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      mounted = false
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", setSize)
    }
  }, [])

  return (
    <div
      aria-hidden
      className={`relative w-full select-none pointer-events-none transition-opacity duration-500 ${
        ready ? "opacity-50 dark:opacity-40" : "opacity-0"
      }`}
      style={{ height: `${CANVAS_H}px` }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full dark:invert"
        style={{ height: `${CANVAS_H}px`, imageRendering: "pixelated" }}
      />
    </div>
  )
}
