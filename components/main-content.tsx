"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Leaf, Github, Linkedin, Mail } from "lucide-react"

type Role = {
  company: string
  title: string
  period: string
  logo: string | React.ReactNode
  isImage?: boolean
  description: string
}

const roles: Role[] = [
  {
    company: "trinity labs",
    title: "engineer",
    period: "may 2026 - present",
    logo: "/icons/trinity.png",
    isImage: true,
    description: "",
  },
  {
    company: "solana",
    title: "software engineer",
    period: "feb 2026 - may 2026",
    logo: "/icons/solana.jpeg",
    isImage: true,
    description:
      "developed a blockchain analytics platform benchmarking solana ecosystem metrics across data providers",
  },
  {
    company: "voxer",
    title: "software engineer",
    period: "sep 2025 — dec 2025",
    logo: "/icons/voxer.png",
    isImage: true,
    description:
      "built and scaled communication infrastructure for real-time voice and messaging applications",
  },
  {
    company: "hormonefit",
    title: "founding engineer",
    period: "may 2025 — aug 2025",
    logo: <Leaf className="w-4 h-4 text-green-700 dark:text-green-400" />,
    description:
      "launched a hipaa-compliant telehealth platform for menopause and infertility patients",
  }
]

export function MainContent(): React.JSX.Element {
  const [showHiking, setShowHiking] = useState(false)
  const [showClimbing, setShowClimbing] = useState(false)
  const [hoveredRole, setHoveredRole] = useState<number | null>(null)

  const highlight =
    "italic text-stone-900 dark:text-stone-100 underline decoration-orange-400/70 decoration-1 underline-offset-[5px] hover:decoration-orange-500 transition-colors cursor-pointer"

  return (
    <main className="w-full px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-3xl mx-auto py-4 md:py-6">
        <section className="space-y-6 md:space-y-8">
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] tracking-tight">
              hi, i&apos;m <span className="italic">doris</span>.
            </h1>

            <p className="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed max-w-xl">
              a computer engineering student at the university of waterloo who spends most of her time building software grounded in authenticity, human connection, and real-world impact. in my spare time, you can find me{" "}
              <span className="relative inline-block">
                <span
                  className={highlight}
                  onMouseEnter={() => setShowClimbing(true)}
                  onMouseLeave={() => setShowClimbing(false)}
                >
                  climbing
                </span>
                {showClimbing && (
                  <span className="hidden sm:block absolute left-0 top-full mt-2 z-50 shadow-2xl rounded-md overflow-hidden w-[360px] h-[260px]">
                    <Image
                      src="/images/climbing.JPG"
                      alt="Climbing"
                      fill
                      className="object-cover"
                    />
                  </span>
                )}
              </span>
              ,{" "}
              <span className="relative inline-block">
                <span
                  className={highlight}
                  onMouseEnter={() => setShowHiking(true)}
                  onMouseLeave={() => setShowHiking(false)}
                >
                  hiking
                </span>
                {showHiking && (
                  <span className="hidden sm:block absolute left-0 top-full mt-2 z-50 shadow-2xl rounded-md overflow-hidden w-[360px] h-[260px]">
                    <Image
                      src="/images/hiking.jpeg"
                      alt="Hiking"
                      fill
                      className="object-cover"
                    />
                  </span>
                )}
              </span>
              , or reading a{" "}
              <span className={highlight}>book</span>.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline gap-3">
              <h2 className="font-mono uppercase text-[11px] tracking-[0.2em] text-stone-500 dark:text-stone-500">
                lately
              </h2>
              <span className="flex-1 h-px bg-stone-300 dark:bg-stone-800" />
            </div>

            <ul className="divide-y divide-stone-200 dark:divide-stone-800">
              {roles.map((role, index) => (
                <li
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredRole(index)}
                  onMouseLeave={() => setHoveredRole(null)}
                >
                  <div className="flex items-center gap-3 py-2">
                    <div className="w-6 h-6 rounded-full bg-white dark:bg-stone-900 ring-1 ring-stone-200 dark:ring-stone-800 flex items-center justify-center overflow-hidden shrink-0">
                      {role.isImage ? (
                        <Image
                          src={role.logo as string}
                          alt={role.company}
                          width={24}
                          height={24}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        role.logo
                      )}
                    </div>

                    <div className="flex-1 min-w-0 flex items-baseline gap-3">
                      <span className="font-serif text-base text-stone-900 dark:text-stone-100">
                        {role.company}
                      </span>
                      <span className="hidden sm:inline text-stone-300 dark:text-stone-700">
                        ·
                      </span>
                      <span className="hidden sm:inline text-sm text-stone-600 dark:text-stone-400 italic truncate">
                        {role.title}
                      </span>
                    </div>

                    <span className="font-mono text-[11px] tracking-wide text-stone-500 dark:text-stone-500 shrink-0">
                      {role.period}
                    </span>
                  </div>

                  {hoveredRole === index && (
                    <div className="hidden md:block absolute left-full ml-6 top-1/2 -translate-y-1/2 z-50 w-72">
                      <p className="text-sm text-stone-600 dark:text-stone-400 italic leading-relaxed border-l-2 border-orange-400/60 pl-3">
                        {role.description}
                      </p>
                    </div>
                  )}
                  {hoveredRole === index && (
                    <p className="md:hidden pb-3 pl-11 -mt-1 text-sm text-stone-600 dark:text-stone-400 italic">
                      {role.description}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-5 pt-2 text-stone-500 dark:text-stone-500">
            <a
              href="https://www.linkedin.com/in/dorislam23"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Doris-Lam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="mailto:doris.lam@uwaterloo.ca"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://devpost.com/Doryimoo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              aria-label="Devpost"
            >
              <svg
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
