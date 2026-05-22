"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    title: "Password Manager Pro",
    description:
      "Secure, elegant password management application with zero-knowledge encryption, built with Next.js and TypeScript.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Encryption"],
    type: "Full Stack",
    image: "🔐",
    href: "#",
  },
  {
    title: "Design System",
    description:
      "Comprehensive, modular design system with 50+ components. Built for scalability and consistency across products.",
    tech: ["React", "TypeScript", "Storybook", "Design Tokens"],
    type: "Design System",
    image: "🎨",
    href: "#",
  },
  {
    title: "AI Content Studio",
    description:
      "AI-powered content generation platform. Leverages LLMs to create, refine, and optimize marketing copy.",
    tech: ["Next.js", "AI SDK", "Vercel", "React"],
    type: "SaaS",
    image: "🤖",
    href: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with live data visualization, custom metrics, and performance insights.",
    tech: ["React", "TypeScript", "Recharts", "WebSocket"],
    type: "Frontend",
    image: "📊",
    href: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with payments, inventory management, and admin dashboard.",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    type: "Full Stack",
    image: "🛍️",
    href: "#",
  },
  {
    title: "Design Exploration",
    description: "Experimental UI/UX design project exploring new interaction patterns and micro-animations.",
    tech: ["Framer Motion", "React", "Tailwind CSS"],
    type: "Experimental",
    image: "✨",
    href: "#",
  },
]

export default function Projects() {
  const titleRef = useRef(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  return (
    <main>
      <Navbar />

      <section className="min-h-screen pt-32 pb-20 px-6 noise-bg">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="mb-16">
            <div className="accent-line mb-8" />
            <h1 className="text-6xl lg:text-7xl font-black text-foreground leading-tight">
              Featured <span className="text-accent">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl">
              A selection of work that demonstrates my approach to design, engineering, and product development.
            </p>
          </div>

          <div ref={cardsRef} className="grid grid-cols-1 border border-l-4 border-black rounded-lg md:grid-cols-2 gap-8 mt-12 ">
            {PROJECTS.map((project) => (
              <a
                key={project.title}
                href={project.href}
                className="group glass-effect p-8 rounded-xl hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-6xl">{project.image}</div>
                  <span className="text-xs font-semibold text-accent uppercase">{project.type}</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-white/5 text-muted-foreground border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-accent font-semibold group-hover:gap-6 transition-all">
                  <span>View Project</span>
                  <ExternalLink size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
