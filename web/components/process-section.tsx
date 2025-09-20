"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Palette, Rocket } from "lucide-react"

export function ProcessSection() {
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

  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Listen, research, and understand your vision to create the perfect foundation for your project.",
    },
    {
      icon: Palette,
      title: "Design",
      description: "Create tailored visuals, branding, and layouts that capture your unique identity and goals.",
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "Launch your project with comprehensive support and long-term partnership for continued success.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Process</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className={`text-center relative transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${700 * index}ms` }}
                >
                  <div className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
