"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Monitor, PenTool, Globe, Server, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const ServicesSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const observerOptions = useMemo(() => ({ threshold: 0.2 }), [])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    }, observerOptions)

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [observerOptions])

  const services = useMemo(
    () => [
      {
        icon: Monitor,
        title: "Web Design",
        description:
          "Beautiful, modern websites that captivate your audience and reflect your brand's unique personality.",
        features: ["Responsive Design", "User Experience", "Visual Design"],
      },
      {
        icon: Globe,
        title: "Web Development",
        description:
          "Custom, high-performance websites built with the latest technologies for optimal speed and functionality.",
        features: ["Custom Development", "Performance Optimized", "SEO Ready"],
      },
      {
        icon: PenTool,
        title: "Copywriting",
        description: "Compelling content that converts visitors into customers with persuasive, engaging copy.",
        features: ["Website Copy", "Brand Messaging", "Content Strategy"],
      },
      {
        icon: Server,
        title: "Hosting & Domain",
        description: "Reliable hosting solutions and domain management to keep your website running smoothly.",
        features: ["Fast Hosting", "Domain Setup", "SSL Security"],
      },
    ],
    [],
  )

  const handleContactClick = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            What We <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in creating complete digital solutions that drive growth and leave lasting impressions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group relative p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift glass ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Enhanced icon container */}
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-200 animate-pulse-glow">
                    <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-200" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more button */}
                  <Button
                    variant="ghost"
                    className="group/btn p-0 h-auto text-primary hover:text-accent transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div
          className={`text-center mt-16 transition-all duration-500 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-6 text-lg hover-lift animate-pulse-glow"
            onClick={handleContactClick}
          >
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
})

ServicesSection.displayName = "ServicesSection"
