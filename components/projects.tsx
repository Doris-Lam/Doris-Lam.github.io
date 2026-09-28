import React from "react"
import { ExternalLink, Github } from "lucide-react"
export const slugify = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export type Project = {
  title: string
  date: string
  status?: string
  description: string
  detailedDescription: string
  tags: string[]
  liveUrl: string
  githubUrl: string
  image: string
  videoUrl?: string
}

export const projects: Project[] = [
  {
    title: "AI Coding Mentor",
    date: "NOVEMBER 2025 - JANUARY 2026",
    description:
      "Grammarly, but for code. Flags issues inline as you type and explains why they're wrong instead of just fixing them.",
    detailedDescription: `Grammarly, but for code. I liked how Grammarly explains why something is wrong instead of just silently fixing it, and wanted to bring that idea to programming.

It analyzes your code as you type and color-codes issues inline: red for errors, yellow for warnings, and blue for suggestions. Clicking on one shows you why it’s wrong and how to fix it. Code runs in a sandbox across nine languages.

Frontend with React and Monaco, with FastAPI and Gemini on the backend and Postgres for storing history. The hardest part was keeping the AI analysis running constantly without making the editor feel slow or laggy.
`,
    tags: ["React", "TypeScript", "Monaco Editor", "FastAPI", "Python", "Google Gemini AI", "PostgreSQL", "Recharts"],
    liveUrl: "https://youtu.be/s_eNUOBTzi8",
    githubUrl: "https://github.com/Doris-Lam/My-AI-Mentor",
    image: "/images/aimentor.png",
    videoUrl: "https://www.youtube.com/embed/s_eNUOBTzi8",
  },

  {
    title: "Make It What You Want",
    date: "AUGUST 2025",
    description:
      "Every URL generates its own AI-made webpage instead of a 404.",
    detailedDescription: `Started from a stupidly simple idea: what if every URL generated its own unique webpage instead of a 404?

There are no static routes. Every path gets parsed, sent to Gemini, and turned into a themed page with its own copy, layout, and color palette, plus context-aware images from Unsplash. A floating toolbar lets you regenerate a route, jump to a random one, or download the page as standalone HTML.

The hardest part was making something this chaotic still feel intentional. Too much structure and every page started looking the same. Too little and the pages stopped making sense.

It’s weird, impractical, and sometimes completely absurd, which is exactly what made it fun to build.
`,
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Google Gemini AI", "Unsplash API", "Framer Motion"],
    liveUrl: "https://makeitwhatyouwant.vercel.app",
    githubUrl: "https://github.com/Doris-Lam/makeitwhatyouwant",
    image: "/images/makeitwhatyouwant.png",
  },
  {
    title: "Snout",
    date: "JULY 2025",
    description:
      "An interpreter for a toy language I wrote in Go where all the output is in French.",
    detailedDescription: `Started as a joke while I was learning Go: what if I made a programming language where everything was in French?

The language is intentionally ridiculous. \`true\` becomes \`vrai\`, \`null\` becomes \`nul\`, and syntax errors come with an ASCII dog and messages like \`ERREUR: identifiant introuvable\`. There’s also a REPL where you can test expressions and basically get yelled at in French.

I built everything from scratch in Go: the lexer, Pratt parser, tree-walking evaluator, scope environments, and runtime type checks. I didn’t know Go or how interpreters worked when I started, so I couldn’t really copy someone else’s implementation. I had to figure out what everything was actually doing.

It’s completely impractical and kind of stupid, but honestly one of my favorite things I’ve built.
`,
    tags: ["Go", "Lingva Translate API"],
    liveUrl: "https://github.com/Doris-Lam/Snout",
    githubUrl: "https://github.com/Doris-Lam/Snout",
    image: "/images/snout.png",
  },
  {
    title: "CelebLearn",
    date: "MARCH 2024",
    description:
      "Upload a textbook page, pick a celebrity, get a lip-synced video of them teaching it back to you.",
    detailedDescription: `Started as a sleep-deprived hackathon idea at uOttaHack: what if your favorite celebrity could teach you calculus?

Upload a textbook page, pick a celebrity, and get an AI-generated video of them explaining it. Drake explaining derivatives. Morgan Freeman teaching thermodynamics. Then you record yourself explaining it back, and the model tells you what you missed.

FastAPI backend glued the whole pipeline together: OCR, script generation, voice synthesis, lip sync, video processing, transcription, and feedback.

The hard part was that everything depended on everything else. One API failing meant the whole thing broke. Debugging a chain of async services at 3am was extremely chaotic, especially when the only way to figure out where it broke was to trace the entire pipeline backwards.
`,
    tags: ["Python", "FastAPI", "Sync Labs Lip Sync API", "OpenAI"],
    liveUrl: "https://devpost.com/software/celeblearn",
    githubUrl: "https://github.com/stampixel/celeb-learn",
    image: "/images/celeblearn.png",
    videoUrl: "https://www.youtube.com/embed/04uANbk8fZk",
  },
  {
    title: "SignSpeak",
    date: "FEBRUARY 2023",
    description:
      "Browser-based sign language practice that watches your hands and tells you if you're signing correctly.",
    detailedDescription: `Most sign language tools were just static videos with no feedback, so you had no idea if you were actually signing correctly.

SignSpeak watches your hands through the webcam instead. MediaPipe tracks 21 hand landmarks in real time, and a TensorFlow model compares them against trained gesture patterns to tell you if the sign was right.
`,
    tags: ["JavaScript", "HTML", "CSS", "React", "Next.js", "TensorFlow", "MediaPipe"],
    liveUrl: "https://devpost.com/software/signspeak-kgufm1",
    githubUrl: "https://github.com/PrecisionPilot/SignSpeak",
    image: "/images/signspeak.jpg",
  },
]


export function ProjectDetailBody({
  project,
}: {
  project: Project
}): React.JSX.Element {
  return (
    <div>
      <div className="relative flex items-center justify-center mb-8">
        {project.videoUrl ? (
          <div className="w-full aspect-video max-w-4xl">
            <iframe
              src={project.videoUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-md"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="max-w-full h-auto max-h-[60vh] sm:max-h-[500px] rounded-md"
          />
        )}
      </div>

      <div className="space-y-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl text-stone-900 dark:text-stone-100 tracking-tight leading-[1.05]">
              {project.title}
            </h2>
            <p className="text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-500 mt-2 uppercase tracking-[0.18em]">
              {project.date} · {project.status ?? "completed"}
            </p>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/50 transition-colors"
              aria-label="View Project"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800/50 transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="prose prose-stone dark:prose-invert max-w-none">
          {project.detailedDescription.split("\n\n").map((paragraph, idx) => {
            if (
              paragraph.includes("\n") &&
              (paragraph.match(/^\s+[^\w]/) || paragraph.match(/^[/\\|()@_]/m))
            ) {
              return (
                <pre
                  key={idx}
                  className="text-sm text-stone-600 dark:text-stone-400 mb-4 bg-stone-50 dark:bg-stone-800 p-4 rounded-lg overflow-x-auto whitespace-pre"
                >
                  {paragraph.trim()}
                </pre>
              )
            }

            const lines = paragraph
              .split("\n")
              .map((l) => l.trim())
              .filter((l) => l.length > 0)
            if (lines.length === 0) return null

            const isHeading = (s: string) =>
              s.length > 0 &&
              s.length < 80 &&
              !/[.!?:;,]$/.test(s) &&
              !/^[•\-*]/.test(s)

            const headingClass =
              " text-[11px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 flex items-baseline gap-3 mt-10 mb-4 first:mt-0"
const subHeadingClass =
              "font-sans text-lg md:text-xl italic text-stone-900 dark:text-stone-100 mt-6 mb-3"
const paragraphClass =
              "text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-4"
const renderHeading = (text: string, key: React.Key) => (
              <h2 key={key} className={headingClass}>
                <span>{text.toLowerCase()}</span>
                <span className="flex-1 h-px bg-stone-300 dark:bg-stone-800" />
              </h2>
            )
            const renderSubHeading = (text: string, key: React.Key) => (
              <h3 key={key} className={subHeadingClass}>
                {text.toLowerCase()}
              </h3>
            )
            const withCode = (text: string) =>
              text.split(/`([^`]+)`/).map((part, i) =>
                i % 2 === 1 ? (
                  <code
                    key={i}
                    className="text-[0.88em] px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200"
                  >
                    {part}
                  </code>
                ) : (
                  part
                ),
              )

            const renderParagraph = (text: string, key: React.Key) => (
              <p key={key} className={paragraphClass}>
                {withCode(text)}
              </p>
            )

            if (lines.length >= 3 && lines.every(isHeading)) {
              return (
                <ul key={idx} className="list-none space-y-1.5 mb-4 ml-0">
                  {lines.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm md:text-base text-stone-600 dark:text-stone-400 flex items-start"
                    >
                      <span className="text-stone-400 dark:text-stone-600 mr-3 flex-shrink-0">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )
            }

            if (lines.length === 2 && lines.every(isHeading)) {
              return (
                <div key={idx} className="mt-10 first:mt-0">
                  {renderHeading(lines[0], "h")}
                  {renderSubHeading(lines[1], "s")}
                </div>
              )
            }

            if (lines.length === 1) {
              return isHeading(lines[0])
                ? renderHeading(lines[0], idx)
                : renderParagraph(lines[0], idx)
            }

            return (
              <React.Fragment key={idx}>
                {lines.map((line, i) =>
                  isHeading(line)
                    ? renderHeading(line, i)
                    : renderParagraph(line, i),
                )}
              </React.Fragment>
            )
          })}
        </div>

        <div className="border-t border-stone-200 dark:border-stone-800 pt-6 mt-8">
          <h3 className="text-[11px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-4 flex items-baseline gap-3">
            <span>technologies</span>
          </h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-stone-500 dark:text-stone-500">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}