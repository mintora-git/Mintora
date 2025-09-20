"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Target, TrendingUp } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: Lightbulb,
      title: "Creativity",
      description: "Fresh and unique designs every time.",
    },
    {
      icon: Target,
      title: "Clarity",
      description: "Simple, clean, user-friendly experiences.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Designs built to help your business succeed.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Who We Are</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed text-pretty">
            Mintora Designs is a creative-first digital agency focused on building timeless brands and user-focused
            websites. Our mission is simple: to design meaningful digital experiences that connect businesses with their
            audience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={value.title}
                className={`text-center p-8 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-card-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
