const skills = [
  { name: "JavaScript", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "React", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "UI/UX Design", level: 85 },
  { name: "Tailwind CSS", level: 90 },
]

const tools = ["VS Code", "Figma", "Git", "Docker", "AWS", "Vercel", "MongoDB", "PostgreSQL"]

import React from "react"

export function Skills(): React.JSX.Element {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-neutral-900 mb-6">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-neutral-900 mx-auto mb-6" />
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-8">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-700 font-medium">{skill.name}</span>
                    <span className="text-neutral-500 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div
                      className="bg-neutral-900 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 p-4 rounded-lg text-center hover:bg-neutral-100 transition-colors duration-200"
                >
                  <span className="text-neutral-700 font-medium">{tool}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-neutral-50 rounded-2xl">
              <h4 className="text-lg font-semibold text-neutral-900 mb-3">What I Bring</h4>
              <ul className="space-y-2 text-neutral-600">
                <li>• Clean, maintainable code architecture</li>
                <li>• User-centered design thinking</li>
                <li>• Performance optimization expertise</li>
                <li>• Collaborative team approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
