"use client"

import React, { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export const HeroSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleCalendlyClick = useCallback(() => {
    window.open("https://calendly.com/mintoradesigns/30min", "_blank")
  }, [])

  const handleContactClick = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card/30 to-background">
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orb */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-float opacity-60" />

        {/* Secondary floating orb */}
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-3xl animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        />

        {/* Accent orb */}
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl animate-float opacity-40"
          style={{ animationDelay: "4s" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-16">
        <div
          className={`transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center animate-pulse-glow">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary drop-shadow-[0_0_20px_theme(colors.primary/50)]">
              Mintora Designs
            </h1>
          </div>
        </div>

        <div
          className={`transition-all duration-600 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
            Designing Brands That{" "}
            <span className="text-accent drop-shadow-[0_0_20px_theme(colors.accent/50)]">Leave a Mark</span>
          </h2>
        </div>

        <div
          className={`transition-all duration-600 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed text-pretty">
            At Mintora Designs, we craft digital identities, websites, and experiences that help businesses{" "}
            <span className="text-foreground font-medium">stand out and grow</span> in the digital world.
          </p>
        </div>

        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center transition-all duration-600 delay-450 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white transition-all duration-200 hover-lift animate-pulse-glow group"
            onClick={handleCalendlyClick}
          >
            Get a Free Strategy Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-200 hover-lift glass bg-transparent"
            onClick={handleContactClick}
          >
            Contact Us
          </Button>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-600 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
})

HeroSection.displayName = "HeroSection"
