"use client"

import React from "react"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { Instagram, Linkedin, Palette, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export const ContactSection = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessName: "",
    message: "",
  })
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

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const subject = `New inquiry from ${formData.name} - ${formData.businessName}`
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ABusiness: ${formData.businessName}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
      window.location.href = `mailto:mintoradesigns@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`
    },
    [formData],
  )

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-muted/30" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Let's Build Something Great Together.
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Tell us about your business, and let's create something remarkable.
          </p>
        </div>

        <div
          className={`transition-all duration-500 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="mb-12">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-150"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50 border-border focus:border-primary transition-colors duration-150"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="businessName" className="text-sm font-medium text-foreground">
                    Business Name
                  </label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-150"
                    placeholder="Your business name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background/50 border-border focus:border-primary transition-colors duration-150 resize-none"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-6 text-lg hover-lift animate-pulse-glow"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">Follow us on social media</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/mintoradesigns/"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-150 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mintoradesigns/"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-150 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.behance.net/mintoradesigns"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-150 hover:scale-110"
              >
                <Palette className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
