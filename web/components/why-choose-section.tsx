"use client"

import { useEffect, useRef, useState } from "react"
import { Zap, Target, Shield, Rocket } from "lucide-react"

export function WhyChooseSection() {
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

  const reasons = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description:
        "We deliver high-quality websites in record time without compromising on excellence or attention to detail.",
    },
    {
      icon: Target,
      title: "Results-Driven Design",
      description:
        "Every design decision is made with your business goals in mind, ensuring maximum impact and conversions.",
    },
    {
      icon: Shield,
      title: "Transparent & Reliable",
      description:
        "Clear communication, honest pricing, and dependable service you can count on for your business growth.",
    },
    {
      icon: Rocket,
      title: "Future-Ready Solutions",
      description: "We build scalable, modern websites that grow with your business and stay ahead of the competition.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-card/20 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Why <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mintora</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another design agency. We're your partners in digital success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className={`group relative text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift glass ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 * index}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
