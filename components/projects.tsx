"use client"
import React, { useState } from "react"
import { ExternalLink, Github, X } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AI Coding Mentor",
    date: "NOVEMBER 2025",
    description:
      "Intelligent pair programming companion inspired by Grammarly. Real-time code analysis with visual highlighting, AI-powered explanations, code visualization, and interactive learning - making you a better programmer as you code.",
    detailedDescription: `Have you ever used Grammarly and thought, "What if I had something like this for my code?" That exact question sparked the creation of AI Coding Mentor.

Inspiration: From Grammarly to Code

Grammarly revolutionized writing by providing real-time feedback, explaining why something is wrong (not just what), and making learning seamless. I wanted to bring this same philosophy to programming.

AI Coding Mentor isn't just another code editor or linter - it's your intelligent coding companion that teaches you as you code, highlights issues in real-time, explains the 'why' behind every suggestion, and grows with you as you learn.

Traditional coding education separates learning from practice. You read tutorials, watch videos, then try to apply concepts in isolation. AI Coding Mentor flips this model - you learn by coding, and the AI guides you every step of the way.

The Core Features:

Real-Time Code Analysis: As you type, the AI analyzes your code with intelligent debouncing. It catches logic errors, performance issues, security vulnerabilities, best practices, and code smells - not just syntax errors.

Visual Code Highlighting: Every issue is color-coded with decorations:

• 🔴 Red for critical errors
• 🟡 Yellow for warnings
• 🔵 Blue for suggestions
• 🟢 Green for best practices

Click any highlighted section for detailed explanations and fixes.

Comprehensive Scoring System: Get instant feedback on code quality with four key metrics: Correctness (does it work?), Clarity (is it readable?), Best Practices (following conventions?), and Performance (is it efficient?). Track your improvement over time.

AI-Powered Code Generation: Ask the AI in natural language like "Create a function that sorts a list of dictionaries by a specific key" and get generated code with explanations. You understand what it's doing and why.

Interactive Code Visualization: See your code execution step-by-step with execution flow diagrams, variable tracking, function call visualization, and data flow analysis. Perfect for understanding complex algorithms or debugging tricky logic.

Personalized Lessons: Every piece of code becomes a learning opportunity. The Lesson Generator creates custom educational content based on your code - concept explanations, algorithm breakdowns, language features, and best practices.

Visual Code Diagrams: Generate beautiful Mermaid diagrams that visualize flowcharts, class diagrams, sequence diagrams, and state diagrams. Export as SVG for documentation or presentations.

Live Code Execution: Test your code instantly in a sandboxed environment with real-time output. Supports Python, Java, C++, C, C#, Go, Rust, Ruby, and PHP. All standard library modules and built-in functions work - import math, #include <iostream>, java.util.*, all ready to use.

Code Metrics Dashboard: Get comprehensive insights with real-time metrics visualization using Recharts. Track code statistics, structure analysis (functions, classes, imports), complexity metrics (cyclomatic complexity, nesting depth), code distribution, and line length analysis. Interactive charts update automatically as you type.

Smart Code Formatting: One-click beautification that formats according to language-specific style guides (PEP 8 for Python, etc.), fixes indentation, organizes imports, and applies consistent naming conventions.

Multi-Document Workspace: Work on multiple files simultaneously with a tabbed interface. Drag and drop tabs to reorder, each document maintains its own history and AI context. Perfect for working on related files or comparing implementations.

Code Sharing: Generate shareable links (expires in 30 days) perfect for code reviews, collaboration, or getting help. Recipients can view, analyze, and learn from your code.

The Technical Architecture:

Frontend: Built with React 18 and TypeScript for type safety. Monaco Editor (VS Code's editor) provides full IDE features - syntax highlighting, autocomplete, IntelliSense, code folding, find & replace. Recharts library powers the beautiful, responsive data visualizations in the metrics dashboard.

Backend: FastAPI framework with async/await for high concurrency and automatic OpenAPI documentation. The backend orchestrates AI analysis and code execution with comprehensive error handling.

AI Integration: Google Gemini AI provides deep code understanding with advanced analysis, context-aware suggestions, multi-language support, educational explanations, and natural language to code generation.

Code Execution Service: Sandboxed environment with multi-language runtime support, timeout protection, resource limits, and detailed error capture. All standard libraries work - Python's math/json/datetime, Java's java.util.*, C++'s standard library headers, and more.

Code Metrics Service: Calculates real-time metrics including line counting, function/class/import detection, cyclomatic complexity analysis, nesting depth calculation, and language-specific pattern recognition.

Database: PostgreSQL with SQLAlchemy ORM for history tracking (optional - app works without it). Stores past analyses, progress tracking, and achievements.

The Technical Challenges:

Building this required solving multiple complex problems:

Real-Time Analysis: Implementing intelligent debouncing to avoid overwhelming users while providing timely feedback. The AI analyzes code continuously but only surfaces insights when appropriate.

Visual Feedback Integration: Integrating Monaco Editor decorations with AI suggestions required understanding the editor's API deeply. Color-coded highlights needed to be non-intrusive yet informative.

Sandboxed Code Execution: Running user code safely required creating isolated environments with timeout protection, resource limits, and error capture. Supporting eight languages (Python, Java, C++, C, C#, Go, Rust, Ruby, PHP) each required specific runtime configurations.

Metrics Calculation: Building a robust metrics service that accurately counts lines, detects code structure, calculates complexity, and analyzes nesting depth across multiple languages required language-specific pattern recognition.

Prompt Engineering: Crafting prompts for Gemini AI that produce consistent, high-quality educational content across wildly different code samples. Too strict and you lose creativity, too loose and you get nonsense. Finding the sweet spot required dozens of iterations.

State Management: Each document maintains independent state - code, history, feedback, decorations, metrics. Managing this across multiple tabs with undo/redo functionality and localStorage persistence required careful architecture.

Performance Optimization: Monaco Editor is heavy. Loading metrics calculations in real-time could lag the UI. I used Web Workers, throttling, caching, and efficient rendering to keep everything smooth at 60fps.

The Learning Philosophy:

AI Coding Mentor is built on five core principles:

Contextual Learning: Learn from your actual code, not generic tutorials. The AI provides explanations tailored to what you're working on right now.

Just-in-Time Feedback: Get feedback exactly when you need it - as you code. This reinforces learning and prevents bad habits from forming.

Explanation, Not Just Correction: Every suggestion comes with a "why." You don't just learn what to change; you learn why it should be changed.

Progressive Complexity: The AI adapts to your skill level. Beginners get simple, clear explanations. Advanced users get deep technical insights.

Visual Learning: Diagrams and visualizations help you understand abstract concepts. See your code's execution flow, not just read about it.

What Makes This Special:

This isn't just an IDE - it's a learning platform. It combines the power of a full-featured code editor with intelligent AI assistance and educational tools.

Whether you're a beginner writing your first print("Hello, World!"), an intermediate developer learning design patterns, an experienced programmer exploring a new language, or a student working on assignments - AI Coding Mentor adapts to your level and provides contextual, educational feedback that makes you a better programmer.

The Beautiful, Modern UI:

Dark/Light Mode: Choose your preferred theme, preference saved to localStorage
Responsive Design: Works on desktop, tablet, and mobile
Smooth Animations: Polished, professional interface with Framer Motion
Keyboard Shortcuts: Ctrl+S to save, F5 to run, Ctrl+Enter to analyze, and more power-user features
Achievement System: Gamify your learning with badges for milestones and progress tracking

What I Learned:

This project taught me about the intersection of education and technology. The best learning tools don't just provide information - they provide timely, contextual, actionable insights that meet learners exactly where they are.

I learned about AI integration at a deep level. Working with Gemini AI required understanding how to structure prompts for consistency, handle context windows efficiently, and gracefully degrade when services are unavailable.

Building the metrics dashboard with Recharts taught me about data visualization principles. Good charts don't just display data - they reveal insights. I learned about progressive disclosure, interactive elements, and responsive design for visualizations.

The code execution service taught me about system security. Running untrusted code safely requires multiple layers of protection: sandboxing, timeouts, resource limits, and comprehensive error handling. One mistake could expose the system to arbitrary code execution.

Most importantly, I learned that the best feedback is the feedback you don't notice. AI Coding Mentor works quietly in the background, surfacing insights exactly when you need them, never overwhelming you with information, always teaching through doing.

The Impact:

The most rewarding part has been watching people learn. Beginners who were intimidated by error messages now understand what they mean. Intermediate developers discover optimization techniques they'd never considered. Experienced programmers learning new languages get contextual explanations tailored to their existing knowledge.

Code review became a learning opportunity. Instead of just sharing code for feedback, users share it with AI Coding Mentor, get comprehensive analysis, understand their mistakes, and learn before even asking a human reviewer. This makes human code reviews more productive - focused on architecture and design rather than syntax and basic best practices.

AI Coding Mentor proves that AI can be an incredible teaching tool. Not a replacement for human mentorship, but a supplement that makes learning accessible, immediate, and personalized. Everyone deserves a coding mentor, and now everyone has one.

`,
    tags: ["React", "TypeScript", "Monaco Editor", "FastAPI", "Python", "Google Gemini AI", "PostgreSQL", "Recharts"],
    liveUrl: "https://youtu.be/s_eNUOBTzi8",
    githubUrl: "https://github.com/Doris-Lam/My-AI-Mentor",
    image: "/images/aimentor.png",
    videoUrl: "https://www.youtube.com/embed/s_eNUOBTzi8",
  },
//   {
//     title: "VoiceVitals",
//     date: "SEPTEMBER 2025",
//     description:
//       "AI-powered voice recognition platform for health tracking. Features speech-to-text, symptom analysis, vital monitoring, and health insights powered by Google Gemini.",
//     detailedDescription: `The idea came from frustration. My friend was sick and couldn't be bothered to open her phone and type out all her symptoms. "I wish I could just talk to my phone and it would log everything," she said. That's when it clicked.

// What if health tracking was as simple as having a conversation? Instead of filling out forms or clicking through apps, you could just speak naturally – "I have a headache and I've been feeling tired all week" – and the app would understand, categorize, and track everything for you.

// Why This Matters:

// Healthcare is broken for accessibility. Seniors struggle with tiny buttons and confusing interfaces. People with disabilities can't navigate complex forms. Busy people don't have time to manually log everything. VoiceVitals makes health tracking accessible to everyone through natural speech.

// The vision was clear: speak naturally, get intelligent insights, track everything hands-free. No medical jargon required, no complicated forms, just talk like you're explaining to a friend.

// Building the Foundation:

// I started with the core: speech recognition. The Web Speech API seemed like the obvious choice, but I quickly realized it wasn't enough. The raw transcription was messy, full of "ums" and "likes," and didn't understand medical context at all.

// That's where Google Gemini came in. I built a pipeline where speech gets transcribed, then Gemini processes it to extract actual health data – symptoms, severity, duration, and context. It could understand "I've been coughing for three days" and automatically log it with proper timestamps and severity levels.

// The AI integration was fascinating. Gemini 1.5 Flash with its 1M token context window could understand complex medical relationships. It recognized over 100 common symptoms, detected medications (both brand names and generics), assessed urgency levels, and provided evidence-based recommendations.

// The Technical Challenge:

// The hardest part was making it feel natural and reliable. I had to:

// • Handle different accents and speech patterns across diverse users
// • Build a robust symptom extraction algorithm that understood medical terminology
// • Create a MongoDB schema that could handle flexible, unstructured health data
// • Implement real-time processing without lag or delays
// • Design a fallback system for when AI services were down
// • Ensure HIPAA-level security for sensitive health information

// I spent weeks fine-tuning the Gemini prompts to get accurate symptom extraction. Too strict and it missed important details. Too loose and it extracted nonsense. The sweet spot required understanding medical context, colloquial language, and emotional indicators.

// Building the Comprehensive Platform:

// VoiceVitals evolved into a complete health tracking ecosystem:

// Voice-Powered Health Records: Users speak naturally about symptoms, medications, and concerns. AI analyzes the transcript, extracts structured data, assesses urgency (low/medium/high/critical), and provides personalized recommendations. Every recording is saved with audio playback for reference.

// Vital Signs Monitoring: Track blood pressure, heart rate, temperature, and weight with intelligent color-coding. Red indicators for concerning values (BP ≥140/90, heart rate >100 BPM, temp ≥38°C), green for healthy ranges, blue for low values. The system learns your baseline and detects abnormal trends.

// Medication Management: Comprehensive tracking of prescriptions, dosages, schedules, and refills. The AI recognizes when you mention medications in voice recordings and automatically adds them to your tracker. Refill reminders ensure you never run out.

// Water Intake Tracking: Gamified hydration monitoring with daily goals, streak tracking, and achievement badges. Users log glasses of water throughout the day and get reminders to stay hydrated.

// AI-Powered Insights: Google Gemini analyzes your health history to identify patterns, correlations, and potential concerns. It notices things like "your headaches always occur after days with low water intake" or "your blood pressure spikes on stressful workdays."

// The Architecture:

// Frontend: Built with Next.js 15 and TypeScript for type safety and performance. Tailwind CSS for responsive design. Framer Motion for smooth animations. The app works seamlessly on desktop, tablet, and mobile with automatic dark/light mode switching.

// Backend: Node.js with Express handles API routes. MongoDB with Mongoose for flexible data modeling. JWT authentication with bcrypt password hashing. Comprehensive input validation with Joi. Deployed on Railway with automatic scaling.

// Security was paramount: JWT tokens for stateless authentication, AES-256 encryption for sensitive data, HTTPS with TLS 1.3, input sanitization to prevent injection attacks, and GDPR-compliant data handling with full portability and deletion rights.

// Making It Accessible:

// Accessibility wasn't an afterthought – it was core to the design. I implemented:

// • High contrast mode for visual impairments
// • Full keyboard navigation for motor disabilities
// • Screen reader support with proper ARIA labels
// • Voice commands for hands-free operation
// • Large touch targets for mobile users
// • Clear language without medical jargon
// • Consistent layout for cognitive accessibility

// The platform works for everyone: seniors who struggle with technology, people with disabilities who need accessible interfaces, busy professionals who want quick logging, and anyone preferring hands-free interaction.

// The Dashboard Experience:

// The dashboard shows your health at a glance: recent recordings with AI analysis, vital signs with trend charts, upcoming medication schedules, water intake progress, and quick action buttons for recording new entries.

// Each health record displays the full transcript, extracted symptoms with severity ratings, detected medications, AI-generated summary, personalized recommendations, and urgency assessment. Users can play back the original audio and edit details if needed.

// The vitals page visualizes trends over time with interactive charts. Blood pressure graphs show systolic and diastolic values with target ranges. Heart rate trends highlight resting vs active measurements. Weight tracking shows progress toward goals.

// What I Learned:

// This project taught me that the best technology serves people who need it most. Building for accessibility makes products better for everyone. AI is powerful, but only when combined with thoughtful design and real-world testing.

// I learned about prompt engineering, healthcare data modeling, HIPAA compliance, voice UI design, real-time processing, and building systems that scale. But most importantly, I learned that engineering can genuinely improve lives.

// My friend still uses VoiceVitals daily. Seeing her actually stick with health tracking – something she never did before – made every late night debugging session, every prompt iteration, and every accessibility refinement worth it.

// Healthcare technology shouldn't be complicated. It should just work, for everyone.

// `,
//     tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Google Gemini AI", "Web Speech API"],
//     liveUrl: "https://voice-vitals.vercel.app",
//     githubUrl: "https://github.com/Doris-Lam/VoiceVitals",
//     image: "/images/voicevitals.png",
//   },
  
  {
    title: "Make It What You Want",
    date: "AUGUST 2025",
    description:
      "Dynamic website generator that creates unique, interactive HTML pages on-demand using AI. Every URL path generates a completely different experience with AI-powered content generation.",
    detailedDescription: `What if every URL on a website could be completely unique? Not 404 errors, not static pages – but entirely new, AI-generated experiences created on the spot. That bizarre thought turned into my most experimental project yet.

The Crazy Idea:

Traditional websites are predictable. You visit /about, you get the about page. You visit /randomwordsthatdontexist, you get a 404. But what if /randomwordsthatdontexist generated a beautiful page about random words that don't exist?

I wanted to push the boundaries of what a "website" could be. Imagine typing literally anything into the URL bar and getting a coherent, aesthetically pleasing page about that topic – generated on the spot. No database, no pre-built content, just pure AI creativity.

The concept was simple yet absurd: infinite webpages from a single codebase. Every path becomes a unique experience. /space/adventure generates cosmic exploration. /underwater/city creates aquatic architecture. /crystal/cave/magic conjures mystical realms. Or make up your own – the possibilities are literally endless.

How It Works:

The technical implementation was wild. Every incoming request hits my catch-all route in Next.js. I extract the URL path, send it to Google Gemini AI with a carefully crafted prompt, and it generates:

• A creative interpretation of the path
• Engaging content and compelling headlines
• Color schemes and design suggestions
• Complete HTML structure with styling
• Relevant topics to explore further

Then I query the Unsplash API to pull high-quality images that match the generated content. The AI keywords from the path ensure the images are contextually relevant. Framer Motion adds smooth animations so each page feels alive, not robotic.

The entire process happens client-side. No backend servers processing requests, no database queries, just pure HTML/CSS/JS magic with AI augmentation. This keeps costs incredibly low – around $0.00625 per page generation with Gemini's pricing.

The Toolbar Experience:

I built a sleek glass-effect toolbar that floats on every page with essential tools:

Hard Reload: Completely regenerate new content for the same path. Same URL, entirely different experience.

Soft Reload: Refresh the page without making a new API call. Preserves the current generated content.

Random: Visit a surprise path. Let the algorithm take you somewhere unexpected.

Download HTML: Save the current page as a standalone HTML file. Your unique creation, preserved forever.

Share on X: Spread your discoveries. Show the world what bizarre path you found.

History: Track all the paths you've visited. Your personal journey through infinite possibilities.

The toolbar persists across all pages, providing seamless interaction no matter what content gets generated.

The Technical Challenges:

The hardest part was making it feel cohesive despite the chaos. Every page needed to feel intentional, even though it was generated in seconds. I experimented with:

• Prompt engineering to ensure consistent quality across wildly different topics
• Caching strategies so repeat visits loaded faster
• Rate limiting to avoid hitting API limits
• Responsive design that worked for any generated content
• Content moderation to filter inappropriate generations
• Fallback logic for edge cases and API failures
• Dynamic styling that adapted to AI-generated color schemes

Edge cases were fascinating to handle. What if someone types complete gibberish? What if the AI generates inappropriate content? What if Unsplash has no relevant images? Each scenario required specific logic and graceful degradation.

The prompt engineering was crucial. Too vague and you get generic content. Too specific and you lose creativity. I iterated dozens of times to find the sweet spot: structured enough for consistency, open enough for imagination.

The Technology Stack:

Frontend: Next.js 15 with App Router gave me the flexibility for dynamic routing. TypeScript kept everything type-safe despite unpredictable AI responses. Tailwind CSS v4 enabled dynamic styling based on AI suggestions.

AI Integration: Google Gemini 1.5 Flash processes ~50K characters per page. Its speed and cost-effectiveness made real-time generation feasible.

Images: Unsplash API integration provides stunning, royalty-free imagery. The free tier allows 50 requests per hour, perfect for experimentation.

Animations: Framer Motion adds smooth transitions and page load animations. Makes AI-generated content feel polished and professional.

The deployment to Vercel was seamless. Environment variables for API keys, automatic builds on push, and global CDN distribution. The site handles traffic spikes gracefully thanks to Vercel's edge network.

Why This Matters:

This project taught me about the future of dynamic content generation. We're moving toward a web where content adapts to users in real-time, where AI generates personalized experiences on the fly, where static websites become living, breathing entities.

It's also a commentary on how we build websites. Why are we still manually creating every page when AI can generate infinite variations? What happens when content becomes truly dynamic, never the same twice?

And honestly, it's just fun. Try visiting /purple-elephants-dancing-in-tokyo or /the-meaning-of-existential-pancakes or /neon-forests-that-whisper-secrets. Each one is unique, never seen before, and will never be exactly the same again.

Some Example Paths to Try:

/space/adventure → Cosmic exploration
/underwater/city → Aquatic architecture  
/cyber/punk → Futuristic neon worlds
/medieval/castle → Historical fantasy
/rainbow/paradise → Colorful dreamlands

Or invent your own. That's the entire point.

Cost and Scalability:

The economics are surprisingly favorable. Gemini costs ~$0.00625 per page at 50K characters. Unsplash is free up to 50 requests/hour. Even at scale, this site is incredibly cheap to run.

No database costs, no backend servers, no complex infrastructure. Just a Next.js app, two API keys, and AI magic. The simplicity is beautiful.

What I Learned:

This project taught me that the best experiments come from asking "what if?" instead of "why?" It taught me about AI integration, dynamic content generation, creative problem-solving, and building systems that embrace chaos rather than fight it.

I learned about prompt engineering at a deep level. Crafting prompts that generate consistent, high-quality content across infinite possibilities requires understanding how AI thinks, what constraints produce creativity, and how structure enables freedom.

Most importantly, I learned that practical use cases aren't always the goal. Sometimes the best projects are the ones that make you think "this is ridiculous" while you're building them. The ones that exist simply because they can, because the idea was too interesting not to explore.

Make It What You Want isn't going to replace traditional websites. But it proves that content generation can be immediate, personal, and infinitely creative. It shows that AI can be playful, experimental, and surprisingly coherent.

And in a world of static websites and predictable content, sometimes you need something delightfully unpredictable.

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
    detailedDescription: `Building a programming language from scratch seemed impossible until I actually tried it. Snout started as a "what if?" question and turned into one of my favorite learning journeys.

The Spark:

I had just started exploring Go – a language I'd never touched before. I didn't even understand what interpreters were or how programming languages worked beyond the surface level. But I had this weird idea: what if I built a programming language... but made all the output in French? 

I wasn't learning French or anything. I just thought "hmm why not try to make it lol in French." Because why should programming languages be predictable and boring?

The concept: a language that outputs everything in French. Write "let x = 5" and get back "x est égal à 5". Type puts([true, false]) and see [vrai, faux]. Make an error and get "ERREUR: identifiant introuvable" with an ASCII dog. It's absurd and delightful.

The concept was playful and impractical – exactly the kind of project that pushes you to learn deeply.

Learning Go from Scratch:

I had zero Go experience when I started. Coming from JavaScript and Python, Go felt alien. No classes, no inheritance, just structs and interfaces. Explicit error handling everywhere. Pointers that actually mattered.

But that unfamiliarity forced me to understand every line I wrote. I couldn't copy-paste patterns I didn't understand. Every function, every struct, every type declaration required research and experimentation.

Go's simplicity was actually perfect for building an interpreter. No complicated OOP hierarchies to wrestle with. Just clean, straightforward code that does exactly what it says. The standard library was powerful enough for everything I needed.

Understanding How Interpreters Work:

Before Snout, I had no idea how interpreters or compilers worked. Code was magic – you type it, it runs, somehow. Building Snout forced me to understand the machinery behind that magic.

Think of an interpreter as a translator that reads your code and executes it step by step. When you write let x = 5 + 3, the interpreter doesn't just "know" what to do – it goes through a multi-stage pipeline to transform text into executable instructions.

The Three-Stage Pipeline:

Stage 1 - Lexical Analysis (Lexer): The lexer takes your raw source code (just a string of characters) and breaks it into meaningful chunks called tokens. It's like breaking a sentence into words.

Example: "let x = 5;" becomes:
[LET, IDENT("x"), ASSIGN, INT(5), SEMICOLON]

The lexer scans character by character, recognizing patterns. When it sees "l-e-t" followed by a space, it knows that's a LET keyword. When it sees "5", it knows that's an integer token. It strips away whitespace and comments, leaving only the meaningful pieces.

This stage is mostly pattern matching and state machines. Surprisingly straightforward but tedious – lots of if/else checking "is this character a letter? a number? a symbol?"

Stage 2 - Parsing (Parser): The parser takes those flat tokens and builds a tree structure called an Abstract Syntax Tree (AST). It understands the grammar and structure of your code.

Example: The tokens [IDENT("x"), PLUS, INT(5), MULTIPLY, INT(3)] become a tree where PLUS is at the top, with x on the left and MULTIPLY on the right, and MULTIPLY has 5 and 3 as its children. The parser knows that multiplication has higher precedence than addition, so 5 * 3 gets grouped together first.

The parser understands that let x = 5 is a variable binding, that if (condition) { ... } is a conditional, and that fn(x, y) { ... } is a function definition.

This is where syntax errors get caught. If you write let x = , the parser expects a value after the equals sign. When it doesn't find one, it throws an error – hence the ASCII dog and French error messages in Snout. 🐶

The parser is where operator precedence, associativity, and grammar rules get enforced. Getting this right was challenging – I had to implement Pratt parsing to handle expressions correctly.

Stage 3 - Evaluation (Evaluator): The evaluator walks through the AST and actually executes your code. It's the brain that makes things happen.

When it encounters a variable binding like let x = 5, it stores x → 5 in the environment (a fancy word for "memory that tracks variables"). When it sees x + 3, it looks up x in the environment, finds 5, adds 3, and returns 8.

The evaluator handles:
• Variable storage and lookup (environments/scopes)
• Function calls (creating new scopes, binding parameters, executing body)
• Control flow (if statements, return statements)
• Type checking (can't add integers to strings)
• Memory management (garbage collection, preventing leaks)

This is the most complex stage. Every language feature you add (arrays, hashes, built-in functions) requires specific evaluation logic. Edge cases multiply quickly – what happens when a function returns inside a loop inside a conditional?

Why This Matters:

Building each component from scratch taught me how code transforms from text into executable instructions. It's the difference between using a tool and understanding how the tool works.

Now when I write JavaScript, I understand what's happening under the hood. The JavaScript interpreter is doing lexing, parsing, and evaluation – just like Snout, but way more optimized. When I get a "SyntaxError: Unexpected token", I know exactly where in the pipeline that error came from (the parser).

Understanding interpreters changed how I think about code. It's not magic anymore – it's a series of well-defined transformations from text to tokens to tree to execution.

Building the REPL:

I wanted Snout to feel like a real programming language, so I built a proper REPL (Read-Eval-Print Loop). You can write code interactively, see results immediately, and experiment just like Python or JavaScript.

The REPL experience includes:

• Multi-line input for complex expressions and functions
• Immediate feedback – type code, get results instantly
• Error messages in French (which is hilarious when debugging)
• History tracking so you can recall previous commands
• Interactive experimentation for testing ideas

Opening Snout greets you with:

Hello YOURNAME! This is the Snout programming language!
All output (including errors, booleans, null, and strings) will appear in French!
Feel free to type in commands
>>

It's a small touch, but makes the language feel alive and welcoming.

Language Features:

Snout supports core programming concepts:

Variables and Assignments: let x = 10; let name = "bonjour";

Arithmetic Operations: +, -, *, / with proper operator precedence

Booleans: true/false (output as vrai/faux in French)

Null Values: null (output as nul)

Conditionals: if (10 > 5) { "hi" } else { "bye" }

Functions: let add = fn(x, y) { return x + y; }; 

Function Calls: add(5, 7) returns 12

Arrays: let arr = [1, 2, 3]; supports indexing and manipulation

Hashes (Maps): let h = {"dog": "chien", "cat": "chat"};

Built-in Functions: len, first, last, rest, push, puts for common operations

The French Output System:

Every output is translated to French using the Lingva Translate API with a manual dictionary fallback. This created interesting challenges:

• Programming terms don't always translate well (what's the French for "integer overflow"?)
• API rate limiting required caching frequently used translations
• Fallback logic for when the API is unavailable
• Manual dictionary for common programming terms

Booleans print as vrai/faux. Null prints as nul. Strings get translated contextually. Arrays and hashes display their contents in French.

The ASCII Dog Error Handler:

Whenever you make a parser error, Snout prints an ASCII dog and a French error message:

  / \__
 (    @\___
 /         O
/   (_____/
/_____/ U

ERREUR : identifiant introuvable: variableName

It's whimsical, memorable, and makes debugging less frustrating. Errors become part of the learning experience rather than intimidating red text. 🐶

Technical Challenges:

Memory Management: Go requires careful memory management. I had to implement proper garbage collection, scope tracking, and prevent memory leaks. The environment (variable storage) needed efficient lookups while supporting nested scopes.

Error Handling: Explaining syntax errors in French while keeping them understandable was tricky. "ERREUR: décalage de type: INTEGER + BOOLEAN" needs to be clear even if you don't speak French. I iterated dozens of times on error message phrasing to balance French output with comprehension.

Operator Precedence: Ensuring 2 + 3 * 4 evaluates to 14, not 20. This required implementing Pratt parsing – a technique I'd never heard of before starting this project.

Scope Management: Functions create new scopes. Closures capture outer scopes. Variables shadow each other. Getting this right required understanding how environments nest and how lookups propagate.

Type System: Snout is dynamically typed, but still needs type checking at runtime. You can't add integers to booleans or call non-function values. The error messages needed to catch these gracefully.

The Learning Journey:

This project fundamentally changed how I think about programming. Before Snout, I saw code at a surface level – syntax and patterns. After Snout, I understand the layers beneath.

I learned Go by necessity. No tutorials held my hand through interpreter design. I read the Go docs, studied open-source interpreters, debugged cryptic compiler errors, and slowly built understanding through experimentation.

I learned what interpreters are and how they work. Lexers, parsers, ASTs, environments, evaluation strategies – concepts that were abstract became concrete through implementation.

Most importantly, I learned how things work beyond what I can see. When I write JavaScript now, I understand the interpreter processing my code. When I see Python's scope rules, I recognize the environment design decisions. The black box became transparent.

Example Code and Output:

Variables and arithmetic:

let a = 10;
let b = 20;
a + b * 2
// Output: 50

Functions:

let add = fn(x, y) { return x + y; };
add(5, 7)
// Output: 12

French output:

puts("hi")
// Output: bonjour

puts([true, false, null])
// Output: [vrai, faux, nul]

Error handling:

5 + true
// Output: ERREUR : décalage de type : INTEGER + BOOLEAN

Built-in functions:

len("bonjour")     // 7
len([1, 2, 3])      // 3
first([1, 2, 3])    // 1
last([1, 2, 3])     // 3

What I Learned:

Snout taught me that the best learning happens when you build things beyond your comfort zone. I had no business building an interpreter in a language I didn't know. But that forced me to learn deeply.

I learned Go not through tutorials, but through necessity. Every feature I needed, I had to figure out how to implement in Go. That's real learning – solving actual problems, not abstract exercises.

I learned how programming languages work at a fundamental level. Lexing, parsing, evaluation, scope management, memory handling – these aren't abstract concepts anymore. They're tools I built with my own hands.

Most importantly, I learned that understanding how things work beyond the surface makes you a better programmer. I don't just use JavaScript now – I understand how the JavaScript interpreter processes my code. That changes everything.

Future Possibilities:

I want to add more French language features – maybe French keywords (si/sinon instead of if/else), cultural context in outputs, French idioms as language features. Imagine learning French expressions through programming constructs.

For now, Snout exists as proof that learning can be playful, experimental, and ridiculous. You can teach yourself a new programming language while building a programming language while accidentally learning French vocabulary. It's absurd and beautiful.

And hey, I accidentally learned some French. "Fonction," "tableau," "erreur," and "identifiant" are permanently burned into my brain now. Along with how to build interpreters in Go. So I guess the French output thing worked after all.

Sometimes the best projects start with "hmm why not lol. 🐶"

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
    detailedDescription: `Built at uOttaHack 6 on 4 hours of sleep and way too much caffeine. Our team had a ridiculous idea: what if your favorite celebrity could teach you calculus?

The Inspiration:

I was a senior in high school, and senioritis had hit everyone hard. My classmates couldn't focus in lectures. People zoned out during class. The content was important, but traditional teaching methods just weren't landing anymore. We needed something different to make learning engaging again.

Around the same time, scrolling through TikTok one night, we kept seeing deepfake technology used for... questionable purposes. The technology was incredible, but it felt wasted on pranks and misinformation. That's when it hit us: what if we used deepfakes to solve the senioritis problem? What if we made learning engaging by having celebrities explain your textbook?

Think about it – students who can't lock into a boring lecture might pay attention if Drake was teaching calculus or Margot Robbie was explaining thermodynamics. The content stays the same, but the delivery becomes entertaining.

In a world where technology's potential is often misused, we decided to change the narrative. Deepfakes could be educational. They could combat senioritis. They could make learning fun again.

The Hackathon Chaos:

We had 24 hours to build something functional. My teammate Kevin joked "wouldn't it be cool if Drake could teach me calculus?" and we all looked at each other like... wait, could we actually do that?

The concept was wild: scan a textbook page with your smartphone, select your favorite celebrity, and get a personalized video lesson from them. Not just text-to-speech with their voice – actual lip-synced video where they explain complex concepts in their style. We were either genius or insane. Probably both.

What It Does:

CelebLearn enables users to upload a PDF or textbook image via their device. The platform then offers a selection of celebrities to choose from – imagine picking between Snoop Dogg, Margot Robbie, or Morgan Freeman to explain quantum physics.

The chosen celebrity explains the concept from your textbook in a fully lip-synced video. The AI adapts their teaching style to match the celebrity's personality. Snoop Dogg might say "yo, derivatives are like the rate of change, ya feel me?" while Morgan Freeman delivers it with gravitas.

But we didn't stop at passive learning. After watching the video, users record themselves explaining the concept in their own words. Our AI analyzes their explanation, generates keywords based on their understanding, and provides detailed feedback on what they got right and what they missed.

This creates a complete learning loop: celebrity teaches → you learn → you explain → AI assesses → you improve.

Making It Work:

We split up the work to maximize our 24 hours:

I handled the backend API with FastAPI (Python). Fast, async, perfect for coordinating multiple AI services.

Teammate #1 worked on OCR to extract text from textbook images. Textbooks are brutal – formulas, diagrams, weird fonts, nested subscripts. We used Tesseract with custom preprocessing pipelines to improve accuracy.

Teammate #2 integrated the Sync Labs Lip Sync API. This was the magic ingredient that made everything possible.

Teammate #3 built the React/TypeScript frontend. Clean, responsive, mobile-friendly. First time using React for three of us, learned on the fly.

The coordination was chaotic. We had to orchestrate: PDF upload → OCR extraction → text cleaning → AI script generation → audio generation → voice conversion → template video selection → lip sync processing → video delivery. Each step dependent on the previous. One failure broke everything.

The Magic - Lip Sync AI:

The Sync Labs Lip Sync API was mind-blowing. You give it:
• A source video (we used stock footage of celebrities)
• Audio of what you want them to say
• And it generates a perfectly lip-synced video

The API handles the deepfake processing, analyzing facial movements, mouth shapes, and timing to create seamless lip synchronization. The result looks natural, not uncanny valley.

We used OpenAI to generate teaching scripts adapted to each celebrity's style. The AI understood that Snoop Dogg should use casual language, while Morgan Freeman's explanations should be more poetic. It made the learning experience feel personal and engaging.

The process flow: get template audio → change voice → take template video → add lip syncing → combine everything. We had to run each step separately, which made debugging interesting at 3am.

The Assessment Feature:

At 3am, delirious but committed, we added the assessment feature. Users record themselves explaining the concept back to the AI.

OpenAI's Whisper transcribes their speech. GPT-4 analyzes the transcription, extracts keywords, and compares them against the original textbook content. It identifies what concepts they understood, what they missed, and where they need improvement.

The feedback is specific: "You got the main idea about derivatives representing rates of change, but you didn't mention the limit definition. Try explaining how we approach the slope of a tangent line."

We accidentally built an AI tutor without meaning to. The feedback loop turned passive video watching into active learning.

The Technical Challenges:

This project involved many separate API calls and piecing together several consecutive parts to make a functional program. The connection between front and back end was difficult to manage.

Generating the deepfake was particularly challenging. Limited APIs and resources available online meant we needed to compromise. Running each step separately (audio → voice change → video template → lip sync → combine) made the pipeline fragile.

API rate limits hit us hard. We had to implement caching, queueing, and fallback logic. At one point, we burned through our OpenAI credits and had to pool team member accounts.

Three of our teammates had never built a React website before. We learned TypeScript, component lifecycle, state management, and async data fetching in real-time during the hackathon. Stack Overflow was our best friend.

What We're Proud Of:

We managed to create such intricate and complex software in 24 hours. We had never used ML models to create deepfakes before – the concept was still relatively new to us.

Three teammates built their first React website. I built my first FastAPI backend. We integrated four separate AI services into a cohesive pipeline. And somehow, it worked.

What We Learned:

Throughout the hackathon, we participated in workshops and learned from other teams. We engaged in conversations about bugs, JavaScript quirks, React patterns, and API integration strategies.

The workshops taught us about incorporating accessibility features in software. We realized how important it is to make educational tools accessible to everyone, not just tech-savvy students.

Hackathons teach you to build fast and cut scope ruthlessly. We wanted 10 features, built 3 well. That's the right trade-off. Shipping something functional beats perfecting something incomplete.

We learned that the craziest ideas sometimes work. CelebLearn isn't going to replace traditional education, but it proves that learning can be engaging, personalized, and genuinely fun.

The Tech Stack:

Frontend: React with TypeScript for type safety and component reusability. Mobile-responsive design for smartphone scanning.

Backend: FastAPI made the Python backend blazingly fast. Async endpoints handled concurrent API calls efficiently.

AI Services: OpenAI for script generation, summarization, transcription (Whisper), and assessment (GPT-4). Sync Labs Lip Sync API for deepfake generation.

OCR: Tesseract with custom preprocessing for extracting text from textbook images.

Deployment: Render for backend hosting (learned at hour 20 that Vercel doesn't support Python backends).

What's Next:

CelebLearn strives to continue making learning educational concepts fun and engaging. Future plans include:

• Feedback system for users to report issues and suggest improvements
• More celebrity options and personalities
• User-generated celebrities – upload anyone and create custom teachers
• Support for more languages and accessibility features
• Better mobile app experience with native camera integration

What CelebLearn Taught Me:

Building CelebLearn in 24 hours was chaotic, exhausting, and honestly kind of absurd. But it taught me something important: learning doesn't have to be boring to be effective. Sometimes the best way to understand something is to make it engaging, entertaining, even ridiculous.

I built this to fight senioritis, but it reminded me that engagement matters at every stage of learning. When I'm in university now struggling through differential equations, I remember that the method matters as much as the material. If a deepfake celebrity can make someone care about thermodynamics, maybe there's always a way to make hard concepts click.

CelebLearn was a reminder that building things – even silly, experimental things – teaches you more than passive learning ever could. The best education often comes from trying something that seems impossible and figuring it out as you go.

And that lesson has stayed with me in everything I build.

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
    detailedDescription: `Built at uOttaHack 5 where we won 1st Place. Accessibility in education matters – that's what drove us to build SignSpeak, a platform that makes sign language learning interactive, immediate, and accessible to everyone.

The Inspiration:

Sign language is a universal language that allows individuals to communicate across barriers. Millions of people around the world experience hearing loss or mutism and rely on sign language for communication. But even those without these conditions may need sign language for certain circumstances – deaf family members, work environments, or simply wanting to be more inclusive.

The problem? There's a severe lack of accessible, virtual sign language learning tools. Most resources are expensive, require in-person classes, or use static images and videos with no feedback. You watch, try to copy, but have no idea if you're actually doing it right.

We wanted to change that. We set out to fill the gap with a free, accessible tool available to everyone, everywhere. SignSpeak would use computer vision to see your hands and tell you, in real-time, whether you're signing correctly.

What It Does:

SignSpeak creates an encouraging learning environment that provides computer vision sign language tests to track progression and perfect sign language skills. The UI is built around simplicity and usability – clean, intuitive, and accessible to users of all tech skill levels.

The teaching system works through a structured learning loop:

Lessons: Users start with interactive lessons that teach individual signs and concepts. Each lesson covers the material that will be tested in the upcoming quiz.

Progression Tests: After completing a lesson, users take a quiz where they perform signs in front of their camera. Our computer vision system evaluates their hand movements in real-time.

Success/Failure Feedback: Successfully completing the quiz congratulates the user and directs them to the next lesson. Failure results in helpful feedback and the opportunity to retake the lesson.

Continuous Learning: Users must successfully complete each quiz to proceed to the following lesson, ensuring mastery before progression.

This gamified approach keeps users motivated while ensuring they actually learn the signs, not just memorize images.

How We Built It:

Frontend: React with Next.js for a fast, responsive web application. The UI focuses on accessibility and simplicity.

Computer Vision: TensorFlow with MediaPipe model to detect 21 landmarks on each hand in real-time. These hand points are then compared with pre-assigned gesture patterns.

Real-Time Processing: The system captures video, processes it through MediaPipe, extracts hand landmarks, feeds them to TensorFlow, and evaluates the gesture – all in real-time at 60fps.

Gesture Recognition: We trained a custom TensorFlow model on sign language datasets, teaching it to recognize different signs with high accuracy across various hand sizes, skin tones, and lighting conditions.

The MediaPipe Magic:

MediaPipe was incredible. It tracks your hand movements at 60 frames per second in the browser, detecting 21 precise landmarks on each hand. Seeing those hand landmarks follow your movements in real-time felt like magic – the technology made our ambitious idea actually feasible.

The hand landmark detection includes finger joints, knuckles, wrist position, and palm orientation. This level of detail allows us to distinguish between similar signs that differ only in subtle finger positioning or hand angles.

Training the Model:

Getting the gesture recognition right was the hardest technical challenge. We needed the model to:

• Recognize different signs accurately across diverse users
• Handle variations in hand size, skin tone, and lighting conditions
• Work in real-time without lag or delays
• Provide helpful feedback when signs are almost correct
• Distinguish between similar signs with subtle differences

We spent days collecting training data. Our team sat around doing sign language gestures at different angles, distances, and lighting conditions. We recorded hundreds of samples per sign, ensuring diversity in the dataset. It was tedious but necessary for accurate recognition.

The Learning Experience:

We built SignSpeak like a game to keep users engaged:

• Start with basic signs (hello, thank you, please, etc.)
• Interactive lessons with video demonstrations
• Practice mode with real-time visual feedback
• Quizzes that evaluate your accuracy
• Progress tracking and achievement badges
• Gradual difficulty progression

The real-time feedback was key. Green overlay when you're signing correctly, yellow when you're close, red when you're wrong. Simple visual cues, but incredibly effective for learning without auditory feedback.

The Technical Challenges:

We ran into multiple roadblocks, mainly regarding our misunderstandings of Next.js. Coming into the hackathon, most of our team had limited Next.js experience. We learned about server-side rendering, client-side hydration, and API routes on the fly.

Running TensorFlow models in the browser is computationally expensive. We had to optimize everything:

• Model quantization to reduce file size and inference time
• Web workers to prevent UI blocking during processing
• Caching model weights to avoid reloading
• Throttling predictions to balance accuracy and performance
• Efficient frame sampling from video streams

Edge cases were fascinating to handle. What if there's bad lighting? What if multiple people are in frame? What if you're left-handed? What if you're wearing rings or nail polish? Each scenario required specific logic and graceful degradation.

Making It Accessible:

Ironically, building an accessibility tool required us to think deeply about accessibility for all users. We implemented:

• Full keyboard navigation for people who can't use a mouse
• High contrast modes for low vision users
• Clear visual feedback (since audio wouldn't work for deaf users)
• Text alternatives for all visual elements
• Adjustable text sizes and spacing
• Colorblind-friendly color schemes

This made the app better for everyone, not just our target users. Good accessibility is good design – universal design principles benefit all users.

What We're Proud Of:

We won 1st Place at uOttaHack 5 as a Top 3 Finalist! But beyond the award, we're proud that we managed to come up with so many ideas and implement them in such little time.

Building a computer vision system that works reliably in real-time is challenging. Getting it to work in a browser, accessible to anyone with a webcam, felt like a massive accomplishment.

What We Learned:

Throughout the hackathon, we participated in workshops and created connections. We engaged in conversations about bugs, JavaScript quirks, React patterns, and Next.js challenges. Learning from other teams' experiences accelerated our problem-solving.

The workshops taught us about blockchain technology, entrepreneurship connections to coding, and how to pitch technical projects effectively. These broader skills complemented our technical learning.

Most importantly, we learned that empathy drives the best projects. We built SignSpeak because we cared about making communication more inclusive. That motivation pushed us through technical challenges, late nights, and debugging frustration.

What's Next:

SignSpeak is seeking to continue services for teaching people to learn sign language. Future plans include:

• Suggestion box for users to report problems and request features
• Expanded sign library covering more advanced vocabulary
• Support for different sign language variants (ASL, BSL, etc.)
• Mobile app with native camera integration
• Collaboration with companies that develop audible navigation for blind users
• Integration with educational institutions for classroom use

We want to expand SignSpeak worldwide, filling the lack of accessible virtual sign language learning tools available to everyone, everywhere, for free.

The Impact:

We demoed SignSpeak at uOttaHack 5 and the response was overwhelming. Deaf community members gave us valuable feedback. Teachers asked if they could use it in their classes. People wanted to learn sign language specifically because our tool made it approachable and interactive.

That's when we realized: good tech isn't just about impressive algorithms and optimization. It's about removing barriers and empowering people to communicate, connect, and understand each other.

What SignSpeak Taught Me:

Building SignSpeak taught me that the most meaningful technology comes from seeing a problem and refusing to accept it as inevitable. Sign language education was expensive and inaccessible – but it didn't have to be. With computer vision and web technology, we could change that.

The project also taught me that accessibility isn't a feature you add at the end. It's a mindset you build with from the start. When we designed SignSpeak to be accessible to deaf users, it became better for everyone. That's a lesson I carry into every project now.

SignSpeak sparked something in me – a genuine interest in addressing accessibility issues and focusing on human-centered design. I started thinking differently about who technology serves and who gets left behind. Every design decision became a question: who are we building this for? Who might struggle to use it? How can we make it work for everyone?

But the most important thing SignSpeak taught me was about communication itself. Language isn't just about speaking – it's about connecting. Every barrier we remove, every person who can now learn sign language from their browser, is another connection made possible.

We won 1st Place at uOttaHack 5, and that was amazing. But what stayed with me wasn't the award – it was the deaf community members who came up after our demo with feedback and encouragement. That's when I understood: building with empathy and purpose matters more than any technical achievement.

SignSpeak reminded me that technology's real power isn't in the algorithms or the models. It's in making the world a little more inclusive, one project at a time. That realization has shaped everything I've built since.

`,
    tags: ["JavaScript", "HTML", "CSS", "React", "Next.js", "TensorFlow", "MediaPipe"],
    liveUrl: "https://devpost.com/software/signspeak-kgufm1",
    githubUrl: "https://github.com/PrecisionPilot/SignSpeak",
    image: "/images/signspeak.jpg",
  },
]

export function Projects(): React.JSX.Element {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  return (
    <div className="w-full min-h-screen flex items-start justify-center px-4 sm:px-6 pt-14 md:pt-16 pb-12">
      <div className="w-full max-w-4xl mx-auto">
        <div className="mb-16 space-y-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-900 dark:text-stone-100">
              i like building things that make people's lives <span className="bg-orange-200 dark:bg-orange-900/40 px-1.5 py-0.5 rounded">easier</span> and <span className="bg-orange-200 dark:bg-orange-900/40 px-1.5 py-0.5 rounded">more accessible</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-600 dark:text-stone-400">
              especially when it solves a problem i've actually experienced
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 text-sm rounded-md">
              accessibility
            </span>
            <span className="px-3 py-1.5 border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 text-sm rounded-md">
              ai/ml
            </span>
            <span className="px-3 py-1.5 border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 text-sm rounded-md">
              fullstack
            </span>
            <span className="px-3 py-1.5 border-2 border-stone-900 dark:border-stone-100 text-stone-900 dark:text-stone-100 text-sm rounded-md">
              design
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-stone-900 dark:text-stone-100">
              here's what i've been working on...
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-100 rounded-xl overflow-hidden hover:bg-stone-100 dark:hover:bg-stone-950 transition-all duration-200 cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-44 sm:h-48 md:h-auto">
                  {project.videoUrl ? (
                    <iframe
                      src={project.videoUrl}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                
                <div className="md:w-2/3 p-5 sm:p-6 space-y-4">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-stone-900 dark:text-stone-100">
                        {project.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-500 mt-1 uppercase tracking-wider">
                        {project.date} - COMPLETED
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
                        aria-label="View Project"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-5 w-5 text-stone-700 dark:text-stone-300" />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
                        aria-label="View on GitHub"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-5 w-5 text-stone-700 dark:text-stone-300" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 5).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-stone-700 dark:text-stone-300 text-xs font-medium rounded-full border border-orange-300 dark:border-orange-900/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="px-3 py-1 text-stone-500 dark:text-stone-400 text-xs font-medium">
                        +{project.tags.length - 5} more
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-stone-500 dark:text-stone-500 italic">
                    click to learn more →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Modal */}
        {selectedProject !== null && (
          <div 
            className="fixed inset-0 bg-black/50 dark:bg-black/70 z-50 flex items-center justify-center p-3 sm:p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-100 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative bg-stone-50 dark:bg-stone-800 flex items-center justify-center p-4 sm:p-6">
                {projects[selectedProject].videoUrl ? (
                  <div className="w-full aspect-video max-w-4xl">
                    <iframe
                      src={projects[selectedProject].videoUrl}
                      title={projects[selectedProject].title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-lg"
                    />
                  </div>
                ) : (
                  <img
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    className="max-w-full h-auto max-h-[60vh] sm:max-h-[500px] rounded-lg"
                  />
                )}
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-white dark:bg-stone-900 border-2 border-stone-900 dark:border-stone-100 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
                >
                  <X className="h-5 w-5 text-stone-900 dark:text-stone-100" />
                </button>
              </div>
              
              <div className="p-5 sm:p-6 md:p-8 space-y-6">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-stone-900 dark:text-stone-100">
                      {projects[selectedProject].title}
                    </h2>
                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-500 mt-2 uppercase tracking-wider">
                      {projects[selectedProject].date} - COMPLETED
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <a 
                      href={projects[selectedProject].liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
                      aria-label="View Project"
                    >
                      <ExternalLink className="h-5 w-5 text-stone-700 dark:text-stone-300" />
                    </a>
                    <a 
                      href={projects[selectedProject].githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border-2 border-stone-900 dark:border-stone-100 hover:bg-stone-200 dark:hover:bg-stone-950 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="h-5 w-5 text-stone-700 dark:text-stone-300" />
                    </a>
                  </div>
                </div>
                
                <div className="prose prose-stone dark:prose-invert max-w-none">
                  {projects[selectedProject].detailedDescription.split('\n\n').map((paragraph, idx) => {
                    const trimmed = paragraph.trim();
                    
                    // Check if it's ASCII art or code block (preserve original spacing)
                    if (paragraph.includes('\n') && (paragraph.match(/^\s+[^\w]/) || paragraph.match(/^[/\\|()@_]/m))) {
                      return (
                        <pre key={idx} className="text-sm text-stone-600 dark:text-stone-400 mb-4 font-mono bg-stone-50 dark:bg-stone-800 p-4 rounded-lg overflow-x-auto whitespace-pre">
                          {paragraph.trim()}
                        </pre>
                      );
                    }
                    
                    // Check if it's a main header (short, lowercase, no punctuation)
                    if (trimmed.length > 0 && 
                        !trimmed.includes('\n') && 
                        trimmed === trimmed.toLowerCase() &&
                        !trimmed.endsWith('.') &&
                        !trimmed.endsWith('?') &&
                        !trimmed.endsWith('!') &&
                        !trimmed.endsWith(':') &&
                        trimmed.length < 50 &&
                        !trimmed.startsWith('•')) {
                      return (
                        <h2 key={idx} className="text-lg sm:text-xl md:text-2xl font-bold text-stone-900 dark:text-stone-100 mt-10 mb-4 first:mt-0 uppercase tracking-wider">
                          {trimmed}
                        </h2>
                      );
                    }
                    
                    // Check if it's a subheader (ends with colon or starts with "the")
                    if (trimmed.length > 0 &&
                        !trimmed.includes('\n') &&
                        (trimmed.endsWith(':') || trimmed.toLowerCase().startsWith('the ')) &&
                        trimmed.length < 80 &&
                        !trimmed.startsWith('•')) {
                      return (
                        <div key={idx} className="mt-8 mb-4">
                          <h3 className="text-base sm:text-lg md:text-xl text-stone-900 dark:text-stone-100 bg-orange-100 dark:bg-orange-900/30 px-3 py-1.5 rounded-md inline-block">
                            {trimmed.toLowerCase()}
                          </h3>
                        </div>
                      );
                    }
                    
                    // Check if it's a bullet list
                    if (trimmed.includes('•')) {
                      const items = trimmed.split('\n').filter(line => line.trim());
                      return (
                        <ul key={idx} className="list-none space-y-2 mb-4 ml-0">
                          {items.map((item, itemIdx) => (
                            <li key={itemIdx} className="text-sm md:text-base text-stone-600 dark:text-stone-400 flex items-start">
                              <span className="text-orange-500 mr-2 flex-shrink-0">•</span>
                              <span>{item.replace('•', '').trim()}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    
                    // Regular paragraph
                    // Check if paragraph contains colons for bolding
                    if (trimmed.includes(':')) {
                      const parts = trimmed.split('\n');
                      return (
                        <p key={idx} className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                          {parts.map((line, lineIdx) => {
                            const colonIndex = line.indexOf(':');
                            if (colonIndex > 0 && colonIndex < 100) {
                              const before = line.substring(0, colonIndex);
                              const after = line.substring(colonIndex);
                              return (
                                <span key={lineIdx}>
                                  <strong className="font-bold text-stone-900 dark:text-stone-100">{before}</strong>
                                  {after}
                                  {lineIdx < parts.length - 1 && <br />}
                                </span>
                              );
                            }
                            return (
                              <span key={lineIdx}>
                                {line}
                                {lineIdx < parts.length - 1 && <br />}
                              </span>
                            );
                          })}
                        </p>
                      );
                    }
                    
                    return (
                      <p key={idx} className="text-sm md:text-base text-stone-600 dark:text-stone-400 leading-relaxed mb-4">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
                
                <div className="border-t-2 border-stone-200 dark:border-stone-700 pt-6 mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4 uppercase tracking-wide text-sm">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-stone-700 dark:text-stone-300 text-sm font-medium rounded-full border border-orange-300 dark:border-orange-900/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}