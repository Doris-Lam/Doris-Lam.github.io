"use client"
import React, { useEffect, useState } from "react"
import { TypeAnimation } from 'react-type-animation'
import Image from "next/image"
import { Leaf, Github, Linkedin, Mail } from "lucide-react"
import { NowPlaying } from "./now-playing"

const slides = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
  "/images/5.png"
];

const roles = [
  {
    company: "solana",
    title: "software engineering fellow",
    period: "feb 2026 - present",
    logo: "/icons/solana.jpeg",
    bgColor: "bg-white dark:bg-stone-800",
    isImage: true,
    description: "solana x mlh fellowship"
  },
  {
    company: "voxer",
    title: "software engineer",
    period: "sep 2025 - dec 2025",
    logo: "/icons/voxer.png",
    bgColor: "bg-white dark:bg-stone-800",
    isImage: true,
    description: "building and scaling communication infrastructure for real-time voice and messaging applications"
  },
  {
    company: "hormonefit",
    title: "founding engineer",
    period: "may 2025 - aug 2025",
    logo: <Leaf className="w-6 h-6 text-green-600 dark:text-green-400" />,
    bgColor: "bg-white dark:bg-stone-800",
    isIcon: true,
    description: "launched a cost-effective HIPPA-compliant telehealth platform for menopause and infertility patients in Ontario"
  },
  {
    company: "university of waterloo",
    title: "BASc in computer engineering",
    period: "sep 2024 - present",
    logo: "/icons/waterloo.png",
    bgColor: "bg-white dark:bg-stone-800",
    isImage: true,
    description: "lots of coffee, not enough sleep, and a lot of fun"
  }
];

export function MainContent(): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSpotify, setShowSpotify] = useState(false);
  const [showHiking, setShowHiking] = useState(false);
  const [showClimbing, setShowClimbing] = useState(false);
  const [expandedRole, setExpandedRole] = useState<number | null>(null);
  
  // Auto-play slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full min-h-screen flex items-start justify-center px-4 sm:px-6 pt-10 md:pt-12 pb-12">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Main Content - Left Side */}
        <div className="w-full lg:w-1/2 space-y-6">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-stone-900 dark:text-stone-100">
            <TypeAnimation
              sequence={[
                "hi, i'm doris! :)",
                1000,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={0}
            />
          </h1>
          
          <div className="space-y-3 text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
            <p>
              i'm a computer engineering student at the university of waterloo who spends most of her time building stuff that's functional and fun
            </p>
            <div>
              in my spare time, you can find me{" "}
              <span className="relative inline-block">
                <span 
                  className="bg-orange-200 dark:bg-orange-900/40 px-1.5 py-0.5 rounded hover:bg-orange-300 dark:hover:bg-orange-900/60 transition-colors cursor-pointer"
                  onMouseEnter={() => setShowClimbing(true)}
                  onMouseLeave={() => setShowClimbing(false)}
                >
                  climbing
                </span>
                {showClimbing && (
                  <div className="hidden sm:block absolute left-0 top-full mt-2 z-50 shadow-2xl rounded-lg overflow-hidden w-[400px] h-[300px] border-2 border-stone-900 dark:border-stone-100">
                    <Image
                      src="/images/climbing.JPG"
                      alt="Climbing"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </span>,{" "}
              <span className="relative inline-block">
                <span 
                  className="bg-orange-200 dark:bg-orange-900/40 px-1.5 py-0.5 rounded hover:bg-orange-300 dark:hover:bg-orange-900/60 transition-colors cursor-pointer"
                  onMouseEnter={() => setShowHiking(true)}
                  onMouseLeave={() => setShowHiking(false)}
                >
                  hiking
                </span>
                {showHiking && (
                  <div className="hidden sm:block absolute left-0 top-full mt-2 z-50 shadow-2xl rounded-lg overflow-hidden w-[400px] h-[300px] border-2 border-stone-900 dark:border-stone-100">
                    <Image
                      src="/images/hiking.jpeg"
                      alt="Hiking"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </span>, or jamming to{" "}
              <span className="relative inline-block">
                <span 
                  className="bg-orange-200 dark:bg-orange-900/40 px-1.5 py-0.5 rounded hover:bg-orange-300 dark:hover:bg-orange-900/60 transition-colors cursor-pointer"
                  onMouseEnter={() => setShowSpotify(true)}
                  onMouseLeave={() => setShowSpotify(false)}
                >
                  music
                </span>
                {showSpotify && (
                  <div className="hidden sm:block absolute left-0 top-full mt-2 z-50 shadow-2xl rounded-lg w-80">
                    <NowPlaying />
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Slideshow before roles */}
        <div className="block lg:hidden">
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            {slides.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Roles */}
        <div className="space-y-2">
          <h2 className="text-base sm:text-lg md:text-xl font-light text-stone-700 dark:text-stone-300">
            what i'm up to:
          </h2>

          <div className="space-y-2">
            {roles.map((role, index) => (
              <div 
                key={index}
                className="relative"
              >
                <div
                  className="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-100 hover:bg-stone-100 dark:hover:bg-stone-950 transition-all duration-200 cursor-pointer"
                  onClick={() => setExpandedRole(expandedRole === index ? null : index)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg ${role.bgColor} flex items-center justify-center text-xl flex-shrink-0 overflow-hidden border-2 border-stone-900 dark:border-stone-100`}>
                      {role.isImage ? (
                        <Image 
                          src={role.logo} 
                          alt={role.company}
                          width={role.company === "university of waterloo" ? 32 : role.company === "voxer" ? 56 : 48}
                          height={role.company === "university of waterloo" ? 32 : role.company === "voxer" ? 56 : 48}
                          className={role.company === "voxer" ? "object-cover scale-110" : "object-cover"}
                        />
                      ) : role.isIcon ? (
                        role.logo
                      ) : (
                        role.logo
                      )}
                    </div>
                    
                    <div className="space-y-0.5">
                      <h3 className="text-sm md:text-base font-medium text-stone-900 dark:text-stone-100">
                        {role.company}
                      </h3>
                      <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400">
                        {role.title}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-xs md:text-sm text-stone-500 dark:text-stone-500 hidden sm:block">
                    {role.period}
                  </div>
                </div>
                
                {expandedRole === index && (
                  <div className="hidden md:block absolute left-full ml-4 top-0 z-50 w-80 animate-in fade-in slide-in-from-left-2 duration-200">
                    <div className="relative bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-100 rounded-2xl p-4 shadow-xl">
                      {/* Speech bubble tail */}
                      <div className="absolute left-0 top-6 -translate-x-full">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-stone-900 dark:border-r-stone-100 border-b-8 border-b-transparent"></div>
                        <div className="absolute top-0 left-[2px] w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-white dark:border-r-stone-900 border-b-8 border-b-transparent"></div>
                      </div>
                      <p className="text-sm text-stone-700 dark:text-stone-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                )}
                {expandedRole === index && (
                  <div className="md:hidden mt-2">
                    <div className="bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-100 rounded-2xl p-4 shadow">
                      <p className="text-sm text-stone-700 dark:text-stone-300">
                        {role.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Social Links - Mobile */}
        <div className="flex lg:hidden items-center justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/dorislam23" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-stone-700 dark:text-stone-300" />
          </a>
          <a 
            href="https://github.com/Doris-Lam" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 text-stone-700 dark:text-stone-300" />
          </a>
          
          <a 
            href="mailto:doris.lam@uwaterloo.ca"
            className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-stone-700 dark:text-stone-300" />
          </a>
          
          <a 
            href="https://devpost.com/Doryimoo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
            aria-label="Devpost"
          >
            <svg 
              fill="currentColor" 
              width="20px" 
              height="20px" 
              viewBox="0 0 24 24" 
              role="img" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-stone-700 dark:text-stone-300"
            >
              <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
            </svg>
          </a>
        </div>
        </div>

        {/* Slideshow - Right Side (desktop only) */}
        <div className="w-full lg:w-1/2 hidden lg:block space-y-6">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden">
            {slides.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pl-0 md:pl-40">
            <a 
              href="https://www.linkedin.com/in/dorislam23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-stone-700 dark:text-stone-300" />
            </a>
            <a 
              href="https://github.com/Doris-Lam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-stone-700 dark:text-stone-300" />
            </a>
            
            <a 
              href="mailto:doris.lam@uwaterloo.ca"
              className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-stone-700 dark:text-stone-300" />
            </a>
            
            <a 
              href="https://devpost.com/Doryimoo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
              aria-label="Devpost"
            >
              <svg 
                fill="currentColor" 
                width="20px" 
                height="20px" 
                viewBox="0 0 24 24" 
                role="img" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-stone-700 dark:text-stone-300"
              >
                <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}