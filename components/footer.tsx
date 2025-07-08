import { Github, Instagram, Linkedin, Mail } from "lucide-react"

import React from "react"

function DevpostIcon({ className }: { className?: string }) {
  return (
    <svg 
      fill="currentColor" 
      width="16px" 
      height="16px" 
      viewBox="0 0 24 24" 
      role="img" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
    </svg>
  )
}

export function Footer(): React.JSX.Element {
  return (
    <footer className="w-full py-6">
      <div className="text-center space-y-4">
        

        <div className="flex justify-center space-x-4">
          <a href="https://github.com/Doris-Lam" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-600 transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://devpost.com/Doryimoo" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-600 transition-colors">
            <DevpostIcon className="w-4 h-4" />
          </a>
          <a href="https://www.instagram.com/dorisimooo" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-600 transition-colors">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/dorislam23" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-stone-600 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="mailto:doris.lam@uwaterloo.ca" className="text-stone-400 hover:text-stone-600 transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-stone-400">© 2025 Doris Lam</p>
      </div>
    </footer>
  )
}
