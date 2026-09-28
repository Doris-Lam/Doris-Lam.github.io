"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Leaf, Github, Linkedin, Mail } from "lucide-react"
import { projects, slugify } from "@/components/projects"
type Role = {
  company: string
  title: string
  period: string
  logo: string | React.ReactNode
  isImage?: boolean
  invertInDark?: boolean
  description: string
}

const roles: Role[] = [
  {
    company: "trinity labs",
    title: "engineer",
    period: "may 2026 - present",
    logo: "/icons/trinity.svg",
    isImage: true,
    invertInDark: true,
    description: "building real time voice for dispatch and logistics teams",
  },
  {
    company: "solana",
    title: "software engineer",
    period: "feb 2026 - may 2026",
    logo: "/icons/solana.jpeg",
    isImage: true,
    description:
      "developed solana.com/data",
  },
  {
    company: "voxer",
    title: "software engineering intern",
    period: "sep 2025 - dec 2025",
    logo: "/icons/voxer.png",
    isImage: true,
    description:
      "built communication infrastructure for speech and messaging",
  },
  {
    company: "hormonefit",
    title: "engineering intern",
    period: "may 2025 - aug 2025",
    logo: <Leaf className="w-4 h-4 text-green-700 dark:text-green-400" />,
    description:
      "launched a hipaa-compliant telehealth platform",
  }
]

export function MainContent(): React.JSX.Element {

  const highlight =
    "italic text-stone-900 dark:text-stone-100 underline decoration-orange-400/70 decoration-1 underline-offset-[5px] hover:decoration-orange-500 transition-colors cursor-pointer"

  return (
    <main className="w-full px-6 sm:px-8 md:px-12">
      <div className="w-full max-w-5xl mx-auto py-4 md:py-6">
        <section className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[0.95] tracking-tight">
              hi, i&apos;m <span className="italic">doris</span>.
            </h1>

            <p className="text-sm md:text-base text-stone-700 dark:text-stone-300 leading-relaxed max-w-xl">
              currently an engineer at trinity labs & studying computer engineering student at the university of waterloo. i care about building tools that are open, thoughtful, and made for the people who use them. in my free time you can catch me
  {" "}
              <span className={highlight}>hiking</span>
              ,{" "}
              <span className={highlight}>cooking</span>
              {" "}or reading a{" "}
              <span className={highlight}>book</span>.
            </p>

            <Socials />
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <SectionHeading>lately</SectionHeading>

              <ul className="divide-y divide-stone-200 dark:divide-stone-800">
                {roles.map((role, index) => (
                  <li
                    key={index}
                    className="group relative"
                  >
                    <div className="flex items-center gap-3 py-2">
                      <div className="w-6 h-6 rounded-full bg-white dark:bg-stone-900 ring-1 ring-stone-200 dark:ring-stone-800 flex items-center justify-center overflow-hidden shrink-0">
                        {role.isImage ? (
                          <Image
                            src={role.logo as string}
                            alt={role.company}
                            width={24}
                            height={24}
                            className={`object-cover w-full h-full${
                              role.invertInDark ? " dark:invert" : ""
                            }`}
                          />
                        ) : (
                          role.logo
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <span className="block font-sans text-base text-stone-900 dark:text-stone-100 truncate">
                          {role.company}
                        </span>
                        <span className="block text-xs text-stone-600 dark:text-stone-400 italic truncate">
                          {role.title}
                        </span>
                      </div>

                      <span className="text-[11px] tracking-wide text-stone-500 dark:text-stone-500 shrink-0">
                        {role.period}
                      </span>
                    </div>

                    {role.description && (
                      <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 motion-reduce:transition-none">
                        <div className="overflow-hidden">
                          <p className="pb-3 pl-9 -mt-1 text-sm text-stone-600 dark:text-stone-400 italic leading-relaxed">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <SectionHeading>school</SectionHeading>
              <div className="flex items-center gap-3 py-2">
                <div className="flex-1 min-w-0">
                  <span className="block font-sans text-base text-stone-900 dark:text-stone-100 truncate">
                    university of waterloo
                  </span>
                  <span className="block text-xs text-stone-600 dark:text-stone-400 italic truncate">
                    computer engineering
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <SectionHeading>projects</SectionHeading>
              <ul className="divide-y divide-stone-200 dark:divide-stone-800">
                {projects.map((project) => (
                  <li key={project.title}>
                    <Link
                      href={`/${slugify(project.title)}`}
                      className="flex items-baseline gap-3 py-2 group"
                    >
                      <span className="flex-1 min-w-0 font-sans text-base text-stone-900 dark:text-stone-100 truncate group-hover:underline decoration-orange-400/70 decoration-1 underline-offset-[5px]">
                        {project.title.toLowerCase()}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <div className="flex items-baseline gap-3">
      <h2 className="uppercase text-[11px] tracking-[0.2em] text-stone-500 dark:text-stone-500">
        {children}
      </h2>
      <span className="flex-1 h-px bg-stone-300 dark:bg-stone-800" />
    </div>
  )
}

function Socials(): React.JSX.Element {
  return (
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
  )
}
