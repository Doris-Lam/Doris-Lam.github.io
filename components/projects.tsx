"use client"
import React, { useEffect, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A sleek, responsive portfolio built with modern web technologies to showcase my projects and skills.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    liveUrl: "https://doris-lam.github.io",
    githubUrl: "https://github.com/Doris-Lam/Doris-Lam.github.io",
  },
  {
    title: "Snout",
    description:
      "A Go-based interpreter for a custom language with French output, REPL support, and features like variables, functions, arrays, and error handling.",
    tags: ["Go", "Lingva Translate API"],
    liveUrl: "https://github.com/Doris-Lam/Snout",
    githubUrl: "https://github.com/Doris-Lam/Snout",
  },
  {
    title: "CelebLearn",
    description:
      "AI-powered platform that converts textbook images to lip-synced celebrity explanations. Uses OCR for text extraction and NLP to assess user-recorded responses for comprehension feedback.",
    tags: ["Python", "FastAPI", "Sync Labs Lip Sync API", "OpenAI"],
    liveUrl: "https://devpost.com/software/celeblearn",
    githubUrl: "https://github.com/stampixel/celeb-learn",
  },
  {
    title: "SignSpeak",
    description:
      "A computer vision system that detects and evaluates hand gestures to facilitate interactive sign language learning and assessment.",
    tags: ["JavaScript", "HTML", "CSS", "React", "Next.js", "TensorFlow", "MediaPipe"],
    liveUrl: "https://devpost.com/software/signspeak-kgufm1",
    githubUrl: "https://github.com/PrecisionPilot/SignSpeak",
  },
]

export function Projects(): React.JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <div className="w-full py-7 bg-stone-50 dark:bg-stone-900">
      <div className="w-full max-w-2xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-xl text-stone-900 dark:text-stone-100 mb-4">Featured Projects</h2>
          <p className="text-stone-700 dark:text-stone-200 text-sm">
            A selection of my recent work showcasing different skills and technologies
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="group hover:shadow-xl border-0 bg-white dark:bg-stone-950 rounded-lg overflow-hidden">
              <div className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-stone-100">{project.title}</h3>
                <p className="text-neutral-600 dark:text-stone-300 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-neutral-100 dark:bg-stone-800 text-neutral-700 dark:text-stone-200 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 pt-2">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-transparent border border-neutral-300 dark:border-stone-700 hover:bg-neutral-50 dark:hover:bg-stone-800 px-3 py-2 rounded-md text-sm flex items-center justify-center dark:text-stone-100"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Here!
                  </a>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-2 hover:bg-neutral-100 dark:hover:bg-stone-800 rounded-md dark:text-stone-100"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}