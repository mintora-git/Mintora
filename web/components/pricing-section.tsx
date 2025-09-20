"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
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

  const packages = [
    {
      name: "Starter",
      price: "$500",
      description: "Perfect for small businesses getting started online",
      features: ["Professional website design", "Mobile responsive", "Basic SEO setup", "Contact form"],
    },
    {
      name: "Professional",
      price: "Custom Quote",
      description: "Tailored solutions for growing businesses",
      features: ["Custom requirements", "Advanced features", "Personalized approach", "Dedicated support"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "Large-scale solutions for established businesses",
      features: ["Enterprise-level features", "Full customization", "Priority support", "Ongoing maintenance"],
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Simple, Transparent Packages
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-8 bg-card rounded-xl border border-border hover:shadow-xl transition-all duration-300 hover:scale-103 ${
                pkg.popular ? "ring-2 ring-secondary shadow-lg" : ""
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 * index}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary mb-4">{pkg.price}</div>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.popular
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                } transition-all duration-200 hover:scale-105`}
                onClick={() => window.open("https://calendly.com/mintoradesigns/30min", "_blank")}
              >
                Book a Free Strategy Call
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
