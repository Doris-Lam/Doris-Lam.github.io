"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"

export function MainContent(): React.JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;
  return (
    <div className="w-full max-w-2xl mx-auto px-6">
      <div className="bg-white dark:bg-stone-950 rounded-2xl shadow-lg border border-stone-200 dark:border-stone-800 p-5">
        <div className="text-center mb-7">
          <h2 className="text-xl text-stone-900 dark:text-stone-100 mb-6">Hi there, I'm Doris! 👋</h2>

          <div className="flex justify-center mb-2">
            <div className="rounded-full overflow-hidden border-2 border-stone-200 dark:border-stone-700 flex items-center justify-center">
              <Image
                src="/icons/new.png"
                alt="Doris Lam"
                width={95}
                height={95}
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
            <p className="text-stone-700 dark:text-stone-200">
              Computer Engineering @{" "}
              <a href="https://uwaterloo.ca/engineering" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                <span className="dark:text-stone-100">
                🎓 UWaterloo
                </span>
              </a>
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-purple-500 dark:bg-purple-400 rounded-full"></span>
            <p className="text-stone-700 dark:text-stone-200">
              SWE Intern @{" "}
              <a href="https://www.voxer.com/" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-medium hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                <span className="dark:text-stone-100">
                📞 Voxer
                </span>
              </a>{" "}
              (Fall 2025)
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full"></span>
              <p className="text-stone-700 dark:text-stone-200">
                Founding Engineer @{" "}
                <a href="https://hormonefit.ca" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                  <span className="dark:text-stone-100">
                  🏥 HormoneFit
                  </span>
                </a>{" "}
              </p>
            </div>
          

          <div className="pt-4">
            <p className="text-stone-900 font-medium italic mb-4 dark:text-stone-100">Recently:</p>
        
            <div className="space-y-3 text-left max-w-lg mx-auto">
                          <div className="flex items-start space-x-3">
                <span className="text-stone-400 dark:text-stone-500 mt-1">•</span>
                <p className="text-stone-700 dark:text-stone-200 text-sm leading-relaxed">
                  Built a {" "}
                                  <a href="https://github.com/Doris-Lam/makeitwhatyouwant" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                  <span className="dark:text-stone-100">
                    🌟 Gemini-powered website generator 
                  </span>
                </a>{" "}
                  that creates unique pages on-demand
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-stone-400 dark:text-stone-500 mt-1">•</span>
                <p className="text-stone-700 dark:text-stone-200 text-sm leading-relaxed">
                  Built an {" "}
                                  <a href="https://github.com/Doris-Lam/VoiceVitals" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                  <span className="dark:text-stone-100">
                    🎤 AI-voiced health
                  </span>
                </a>{" "}
                  tracking platform
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-stone-400 dark:text-stone-500 mt-1">•</span>
                <p className="text-stone-700 dark:text-stone-200 text-sm leading-relaxed">
                  Built{" "}
                                  <a href="https://github.com/Doris-Lam/Snout" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                  <span className="dark:text-stone-100">
                    🐶 Snout,
                  </span>
                </a>{" "}
                  a Go-based French interpreter 
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-stone-400 dark:text-stone-500 mt-1">•</span>
                <p className="text-stone-700 dark:text-stone-200 text-sm leading-relaxed">
                  Created a CV-powered{" "}
                  <a href="https://devpost.com/software/signspeak-kgufm1" target="_blank" rel="noopener noreferrer" className="text-stone-900 font-bold hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                    <span className="dark:text-stone-100">
                  📚 sign language learning platform
                  </span>
                  </a>{" "}
                </p>
              </div>

            </div>


          </div>

          <div className="pt-6 space-y-4">
            <a href="/images/DorisLamResume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-stone-700 hover:bg-stone-800 text-white py-3 rounded-lg dark:bg-stone-200 dark:hover:bg-stone-300 dark:text-stone-900">
                Download my Resume
              </button>
            </a>

            <div className="space-y-2 text-sm">
              {/* <p className="text-stone-700">
                Feel free to take a look at my{" "}
                <a href="#" className="text-stone-900 font-medium hover:underline">
                  writing
                </a>
                !
              </p> */}
              <p className="text-stone-700 dark:text-stone-200">
                💻 Check out{" "}
                <a href="/projects" className="text-stone-900 font-bold hover:underline dark:hover:underline dark:decoration-stone-400 underline-offset-2 decoration-2">
                  <span className="dark:text-stone-100">
                  what I've built
                  </span>
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}