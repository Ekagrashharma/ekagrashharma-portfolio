"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const SKILLS_CATEGORIES = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "PostgreSQL", "Prisma", "REST APIs", "Authentication", "Database Design"],
  },
  {
    category: "Full Stack",
    skills: ["Next.js Full Stack", "System Design", "DevOps Basics", "CI/CD", "Web Performance"],
  },
  {
    category: "Design",
    skills: ["UI/UX Design", "Design Systems", "Figma", "Prototyping", "Animation", "Accessibility"],
  },
  {
    category: "AI & Tools",
    skills: ["AI Integration", "LLM APIs", "Vercel AI SDK", "Git & GitHub", "Testing", "Debugging"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "System Thinking", "20/80 Efficiency", "Communication", "Collaboration"],
  },
]

export default function Skills() {
  const titleRef = useRef(null)
  const cardsRef = useRef<HTMLDivElement>(null)


  return (
    <main>
      <Navbar />

      <section className="min-h-screen pt-10 pb-10 px-6 noise-bg">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="mb-16">
            <div className="accent-line mb-8" />
            <h1 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Skills & <span className="text-accent">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
              A comprehensive overview of my technical and professional capabilities.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 border border-l-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {SKILLS_CATEGORIES.map((item) => (
              <div
                key={item.category}
                className="glass-effect p-8 rounded-xl hover:border-accent/50 transition-all duration-300 hover:translate-y-1"
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  {item.category}
                </h3>

                <ul className="space-y-3">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span className="text-accent text-sm">▸</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured tools section
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="accent-line" /> Development Tools
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {["VS Code", "Git", "Vercel", "GitHub", "NPM/Yarn", "Docker", "AWS", "Stripe"].map((tool) => (
                  <div key={tool} className="glass-effect p-4 rounded-lg text-center">
                    <p className="text-sm font-medium text-foreground">{tool}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <span className="accent-line" /> Design Tools
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {["Figma", "Adobe XD", "Framer", "Sketch", "Webflow", "Spline", "Blender", "After Effects"].map(
                  (tool) => (
                    <div key={tool} className="glass-effect p-4 rounded-lg text-center">
                      <p className="text-sm font-medium text-foreground">{tool}</p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
