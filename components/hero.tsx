"use client"

import React from "react"
import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero(): React.JSX.Element {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-neutral-200 rounded-full opacity-20 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-neutral-300 rounded-full opacity-15 blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: "15%",
            bottom: "25%",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-neutral-900 leading-tight">
              Hello, I'm{" "}
              <span className="font-bold bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                Alex
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Creative developer crafting digital experiences with clean code and thoughtful design
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <button className="rounded-full hover:bg-neutral-100 p-2 transition-colors">
              <Github className="h-5 w-5" />
            </button>
            <button className="rounded-full hover:bg-neutral-100 p-2 transition-colors">
              <Linkedin className="h-5 w-5" />
            </button>
            <button className="rounded-full hover:bg-neutral-100 p-2 transition-colors">
              <Mail className="h-5 w-5" />
            </button>
          </div>

          <div className="pt-8">
            <button
              className="rounded-full px-8 py-6 text-lg border border-neutral-300 hover:bg-neutral-100 bg-transparent transition-colors flex items-center mx-auto"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
