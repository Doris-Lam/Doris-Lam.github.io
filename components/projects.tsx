"use client"
import React from "react"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export const yearFromDate = (date: string): string => {
  const years = date.match(/\d{4}/g)
  return years ? years[years.length - 1] : ""
}

export const taglineFromDescription = (desc: string): string => {
  const firstSentence = desc.split(/(?<=[.!?])\s+/)[0]
  const cleaned = firstSentence.replace(/[.!?]+$/, "").trim()
  if (cleaned.length <= 110) return cleaned
  return cleaned.slice(0, 107).replace(/\s+\S*$/, "") + "…"
}

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
      "Intelligent pair programming companion inspired by Grammarly. Real-time code analysis with visual highlighting, AI-powered explanations, code visualization, and interactive learning - making you a better programmer as you code.",
    detailedDescription: `Have you ever used Grammarly and thought, "What if I had something like this for my code?" That exact question sparked the creation of AI Coding Mentor.

inspiration

AI Coding Mentor was inspired by how Grammarly gives real-time feedback that explains why something is wrong instead of just fixing it for you. I wanted to bring that same idea to programming.

Traditional coding education separates learning from practice. You watch tutorials, read documentation, then try to apply concepts on your own. AI Coding Mentor flips that model by teaching you while you code.

core features

real-time code analysis:

AI analyzes your code as you type and catches logic errors, performance issues, security vulnerabilities, bad practices, and code smells in real time.

visual highlighting:

Issues are color-coded directly inside the editor.

• Red for critical errors
• Yellow for warnings
• Blue for suggestions
• Green for best practices

Clicking any highlighted issue gives a detailed explanation and a suggested fix.

ai code generation:

Ask for code in natural language and get a generated solution with explanations so you understand what it's doing and why.

code visualization:

Step through execution flow, variable changes, function calls, and data flow to better understand debugging and algorithms.

personalized lessons:

AI Coding Mentor turns your own code into learning material — explanations, breakdowns, and best practices tailored to what you're working on.

multi-language execution:

Run code instantly in a sandboxed environment with support for Python, Java, C++, C, C#, Go, Rust, Ruby, and PHP.

code metrics:

Track code quality with correctness, clarity, complexity, structure analysis, nesting depth, and performance insights in real time.

workspace:

Automatic formatting, organized imports, and a tabbed multi-document workspace where each file keeps its own state and history.

technical architecture

frontend:

Built with React, TypeScript, and Monaco Editor for a full IDE-like experience with syntax highlighting, IntelliSense, autocomplete, and code folding.

backend:

FastAPI with async architecture handles AI analysis, execution requests, and error handling efficiently.

ai integration:

Powered by Google Gemini for contextual code analysis, educational explanations, and natural language code generation.

database:

PostgreSQL with SQLAlchemy stores analysis history, progress tracking, and achievements.

technical challenges

real-time performance:

Balancing continuous AI analysis with editor performance. Used debouncing, caching, and optimized rendering to keep the experience smooth.

secure code execution:

Running user code safely required sandboxed environments with resource limits, timeout protection, and detailed error handling across multiple languages.

state management:

Each document maintains its own code, history, metrics, feedback, and editor decorations, which made multi-file state especially complex.

prompt engineering:

A huge part of the project was refining prompts for Gemini so the feedback stayed consistent, educational, and useful across very different codebases.

learning philosophy

AI Coding Mentor is built around a few core ideas:

• Learn from your own code instead of generic tutorials
• Get feedback exactly when you need it
• Understand why something should change, not just what to change
• Adapt explanations based on skill level
• Use visual learning to make abstract concepts easier to understand

what makes it different

This isn't just another code editor or AI chatbot. It's designed as a learning platform that combines a full IDE experience with contextual AI mentorship.

Whether someone is writing their first program or learning an entirely new language, the goal is to make coding feel more approachable, interactive, and less isolating.

what i learned

This project taught me a lot about the intersection of AI, education, and developer tools.

I learned how difficult it is to build systems that feel seamless in real time, especially when working with AI-generated feedback, live execution, and complex editor integrations. I also gained a much deeper understanding of prompt engineering, sandbox security, performance optimization, and data visualization.

Most importantly, the best educational tools are the ones that quietly guide users without overwhelming them.
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
      "Dynamic website generator that creates unique, interactive HTML pages on-demand using AI. Every URL path generates a completely different experience with AI-powered content generation.",
    detailedDescription: `Make It What You Want started from a stupidly simple idea — what if every possible URL generated its own unique webpage instead of a 404?

the concept

Instead of static routes like /about or /contact, any path becomes a completely AI-generated experience. Type something like /underwater/city, /cyber/punk, or /purple-elephants-dancing-in-tokyo and the site generates an entirely new page on the spot with custom content, visuals, styling, and themes.

how it works

The whole project runs on a catch-all route in Next.js. Every request gets parsed, sent to Google Gemini, and turned into a fully themed page with generated copy, layouts, color palettes, and suggested topics. I also integrated the Unsplash API to pull context-aware images that match the generated concept, while Framer Motion adds transitions and animations to make each page feel polished instead of robotic.

the floating toolbar

One of the coolest parts was building the floating toolbar that persists across every generated page. From there you can do a few things.

• Regenerate the same route with completely different content
• Visit a random path and let the algorithm take you somewhere unexpected
• Download a page as a standalone HTML file
• Share discoveries on the web
• Keep track of previously explored URLs

technical challenges

The biggest challenge was making something inherently chaotic still feel intentional. Since every page is AI-generated, I had to spend a lot of time on prompt engineering, fallback systems, moderation, dynamic styling, caching, and handling weird edge cases. The balance was difficult — too much structure made pages repetitive, too little made them incoherent.

tech stack

Built with Next.js 15, React, TypeScript, Tailwind CSS, Google Gemini AI, the Unsplash API, and Framer Motion. The entire system is lightweight and surprisingly cheap to run since there's no traditional backend infrastructure or database powering the content generation.

what i learned

More than anything, this project was an experiment in what websites could become when content is no longer static. Instead of designing individual pages, I built a system that creates infinite ones. It's weird, impractical, occasionally absurd, but that's what made it fun to build.

Make It What You Want probably won't replace traditional websites, but it explores a future where the web feels more dynamic, playful, and unpredictable. Sometimes the best projects come from asking "what if?" and just committing to the bit.
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
      "A Go-based interpreter for a custom language with French output, REPL support, and features like variables, functions, arrays, and error handling.",
    detailedDescription: `Snout started as a joke idea while I was learning Go for the first time, what if I built a programming language where all the output was in French?

why i built it

At the time, I had also become really curious about how interpreters and compilers actually worked under the hood. I realized I used programming languages every day without understanding what happened between writing code and seeing it execute. Snout became my way of forcing myself to learn that process from scratch.

the language

The language itself is intentionally absurd. Variables, arrays, booleans, functions, and errors all print in French. true becomes vrai, null becomes nul, and syntax errors greet you with an ASCII dog and messages like ERREUR: identifiant introuvable.

what i learned

What made the project meaningful wasn't really the final language, it was the learning process behind building it. Before Snout, code felt abstract. You write something, the computer runs it, and somehow it works. Building an interpreter forced me to understand every layer between raw text and execution.

I learned how lexers break source code into tokens, how parsers transform those tokens into ASTs, and how evaluators walk through those trees to execute code. Implementing Pratt parsing for operator precedence, environment systems for variable scope, and runtime type checking completely changed how I think about programming languages. Now when I write JavaScript or Python, I understand the machinery behind the language instead of just the syntax.

learning go

Learning Go at the same time made the experience even better. Since I didn't already know the language, I couldn't rely on habits or blindly copy patterns. Every struct, interface, pointer, and error handler forced me to slow down and actually understand what I was writing. Go's simplicity ended up being perfect for interpreter design because it exposed the logic directly instead of hiding it behind abstractions.

the repl

I also built a fully interactive REPL so the language feels alive instead of just theoretical. You can write code interactively, test expressions instantly, and debug with French error messages and the little ASCII dog yelling at you.

tech stack

Built entirely in Go with a custom lexer, parser, evaluator, REPL, runtime environment system, and translation layer powered by the Lingva Translate API.

More than anything, Snout taught me that the best way to understand something deeply is to build it yourself. I started the project not knowing Go or interpreter design, and ended up learning both simultaneously through experimentation, debugging, and a lot of trial and error.

It's ridiculous, impractical, and honestly one of my favorite things I've built. Sometimes the best projects really do start with "hmm why not lol." 🐶
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
      "AI-powered platform that converts textbook images to lip-synced celebrity explanations. Uses OCR for text extraction and NLP to assess user-recorded responses for comprehension feedback.",
    detailedDescription: `CelebLearn started as a sleep-deprived hackathon idea at uOttaHack — what if your favorite celebrity could teach you calculus?

the problem

At the time, I was in high school watching everyone around me completely checked out from classes because of senioritis. The material itself wasn't necessarily the issue, people just weren't engaged. Around the same time, deepfake technology was blowing up online, mostly being used for memes and misinformation. Our team thought it would be interesting to use that same technology for something educational instead.

the idea

The idea was simple but ridiculous, upload a textbook page, choose a celebrity, and get an AI-generated lip-synced video of them teaching the concept back to you. Imagine Drake explaining derivatives or Morgan Freeman teaching thermodynamics. The content stays educational, but the delivery becomes entertaining enough to actually hold attention.

what i built

I worked on the FastAPI backend that coordinated the entire pipeline. We had to connect OCR, script generation, voice synthesis, lip syncing, video processing, transcription, and AI feedback systems into one cohesive workflow, all within 24 hours.

tech stack

The project used OCR to extract textbook content, OpenAI models to generate explanations and assess student understanding, Whisper for speech transcription, and the Sync Labs Lip Sync API to create realistic deepfake-style educational videos. After watching the lesson, users could record themselves explaining the concept back, and the AI would analyze their response, identify gaps in understanding, and provide feedback.

what i learned

One of the biggest things I learned from this project was how difficult it is to orchestrate multiple AI systems together in real time. Every stage depended on the previous one succeeding: PDF upload, OCR extraction, script generation, audio processing, lip syncing, rendering, and assessment. If one API failed, the whole pipeline broke. Debugging chained asynchronous systems at 3am on no sleep was genuinely chaotic, but also one of the fastest ways I've ever learned.

Hackathons also forced me to learn quickly and prioritize aggressively. A few of us had never even built a React app before, so we were learning TypeScript, frontend state management, async API handling, and deployment while actively building the product. There wasn't time to overthink things. We just had to figure problems out as we went.

More than anything, CelebLearn taught me that the best projects are usually the ones that sound slightly ridiculous at first. We started with "what if Drake taught calculus?" as a joke, and somehow ended up building a full AI-powered educational platform in a single weekend.

It was chaotic, sleep deprived, technically messy, and honestly one of the most fun things I've ever built.
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
      "A computer vision system that detects and evaluates hand gestures to facilitate interactive sign language learning and assessment.",
    detailedDescription: `SignSpeak was built at uOttaHack, where our team ended up winning 1st Place. The project started from a simple problem — most sign language learning tools felt inaccessible, expensive, or passive. A lot of existing platforms relied on static videos with no actual feedback, so learners had no way of knowing whether they were signing correctly.

what we built

We wanted to build something more interactive. SignSpeak uses computer vision to analyze hand movements in real time and help users practice sign language directly from their browser. The platform combines lessons, quizzes, and live gesture recognition to create a more engaging learning experience instead of just memorization.

tech stack

Built with React, Next.js, TensorFlow, and MediaPipe. MediaPipe tracks 21 hand landmarks in real time through the webcam, while our TensorFlow model compares those landmarks against trained gesture patterns to evaluate whether a user is signing correctly.

technical challenges

One of the hardest parts was making the recognition system accurate across different users and environments. We had to think about lighting conditions, camera quality, hand sizes, skin tones, left-handed signing, and subtle gesture differences between signs. Our team spent hours collecting training data ourselves, recording gestures from different angles and conditions to improve the model's accuracy.

Running TensorFlow models in the browser forced us to think carefully about performance. We had to optimize model loading, prevent UI blocking, throttle predictions, and balance responsiveness with accuracy so the app still felt smooth in real time.

learning curve

The project also became a huge learning experience technically. Most of us came into the hackathon with very limited experience in Next.js, TensorFlow, and real-time computer vision systems. We were learning things like client-side rendering, model optimization, browser-based ML inference, and webcam processing while actively building the product.

what i learned

More importantly, SignSpeak changed the way I think about accessibility and human-centered design. Before this project, accessibility felt like something people added at the end of development. Building SignSpeak made me realize accessibility needs to shape the product from the beginning. Every design decision became a question of who could use the platform comfortably and who might be excluded unintentionally.

What stayed with me most wasn't winning the hackathon, it was the feedback from people in the deaf community after our demo. That was the moment I realized technology becomes meaningful when it removes barriers and helps people connect with each other.

SignSpeak was one of the first projects that made me see programming as more than just building software. It showed me how technology can create genuinely inclusive experiences when it's designed with empathy first.
`,
    tags: ["JavaScript", "HTML", "CSS", "React", "Next.js", "TensorFlow", "MediaPipe"],
    liveUrl: "https://devpost.com/software/signspeak-kgufm1",
    githubUrl: "https://github.com/PrecisionPilot/SignSpeak",
    image: "/images/signspeak.jpg",
  },
]

export function Projects(): React.JSX.Element {
  return (
    <div className="w-full min-h-screen flex items-start justify-center px-6 sm:px-8 md:px-12 pt-8 md:pt-12 pb-12">
      <div className="w-full max-w-3xl mx-auto">
        <div className="mb-12 space-y-8">
          <div className="space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="font-mono uppercase text-[11px] tracking-[0.2em] text-stone-500 dark:text-stone-500">
                selected work
              </span>
              <span className="flex-1 h-px bg-stone-300 dark:bg-stone-800" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 dark:text-stone-100 leading-[1.05] tracking-tight">
              things that make life <span className="italic">easier</span> and{" "}
              <span className="italic">more accessible</span>.
            </h1>
            <p className="text-base md:text-lg text-stone-600 dark:text-stone-400 max-w-xl italic">
              especially when it solves a problem i&apos;ve actually experienced.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500 dark:text-stone-500">
            <span>accessibility</span>
            <span className="text-stone-300 dark:text-stone-700">·</span>
            <span>ai/ml</span>
            <span className="text-stone-300 dark:text-stone-700">·</span>
            <span>fullstack</span>
            <span className="text-stone-300 dark:text-stone-700">·</span>
            <span>design</span>
          </div>
        </div>

        <ul className="divide-y divide-stone-200 dark:divide-stone-800">
          {projects.map((project, index) => (
            <li key={index}>
              <Link
                href={`/projects/${slugify(project.title)}`}
                className="group w-full text-left py-5 sm:py-6 flex items-baseline gap-4 sm:gap-6 hover:bg-stone-100/40 dark:hover:bg-stone-900/30 -mx-3 px-3 rounded-sm transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-stone-400 dark:text-stone-600 shrink-0 w-6">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 tracking-tight leading-tight group-hover:italic transition-all">
                      {project.title.toLowerCase()}
                    </h3>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-stone-500 dark:text-stone-500">
                      {yearFromDate(project.date)}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 italic leading-snug">
                    {taglineFromDescription(project.description)}
                  </p>
                </div>

                <span className="font-serif text-stone-300 dark:text-stone-700 text-2xl shrink-0 self-center transition-transform group-hover:translate-x-1 group-hover:text-stone-700 dark:group-hover:text-stone-300">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 dark:text-stone-100 tracking-tight leading-[1.05]">
              {project.title}
            </h2>
            <p className="font-mono text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-500 mt-2 uppercase tracking-[0.18em]">
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
                  className="text-sm text-stone-600 dark:text-stone-400 mb-4 font-mono bg-stone-50 dark:bg-stone-800 p-4 rounded-lg overflow-x-auto whitespace-pre"
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
              "font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 flex items-baseline gap-3 mt-10 mb-4 first:mt-0"
            const subHeadingClass =
              "font-serif text-lg md:text-xl italic text-stone-900 dark:text-stone-100 mt-6 mb-3"
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
            const renderParagraph = (text: string, key: React.Key) => (
              <p key={key} className={paragraphClass}>
                {text}
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
          <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone-500 dark:text-stone-500 mb-4 flex items-baseline gap-3">
            <span>technologies</span>
            <span className="flex-1 h-px bg-stone-300 dark:bg-stone-800" />
          </h3>
          <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-stone-500 dark:text-stone-500">
            {project.tags.map((tag, tagIndex) => (
              <span key={tagIndex}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}