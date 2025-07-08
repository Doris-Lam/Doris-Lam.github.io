import React from "react"
import Image from "next/image"

export function About(): React.JSX.Element {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-light text-neutral-900 mb-6">About Me</h2>
                <div className="w-20 h-1 bg-neutral-900" />
              </div>
  
              <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                <p>
                  I'm a passionate developer who believes in the power of clean, functional design and efficient code.
                  With a keen eye for detail and a love for minimalism, I create digital experiences that are both
                  beautiful and purposeful.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving, ensuring every project not only
                  looks great but performs exceptionally. I specialize in modern web technologies and user-centered design
                  principles.
                </p>
              </div>
  
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">5+</h3>
                  <p className="text-neutral-600">Years Experience</p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-2">50+</h3>
                  <p className="text-neutral-600">Projects Completed</p>
                </div>
              </div>
            </div>
  
            <div className="relative">
              <div className="aspect-square bg-neutral-100 rounded-2xl overflow-hidden">
                <Image src="/placeholder.svg" alt="Profile" width={500} height={500} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-neutral-900 rounded-2xl opacity-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-neutral-300 rounded-full opacity-20" />
            </div>
          </div>
        </div>
      </section>
    )
  }
  