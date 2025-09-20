"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
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

  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "Timeline varies by project complexity. A simple website typically takes 2-4 weeks, while more complex projects with custom features can take 6-8 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What do I need to get started?",
      answer:
        "Just your vision and business goals! We'll guide you through everything else. It helps to have your brand colors, logo (if you have one), content ideas, and examples of websites you like.",
    },
    {
      question: "Do you provide support after launch?",
      answer:
        "All our packages include post-launch support. We also offer ongoing maintenance plans to keep your website updated, secure, and performing optimally.",
    },
    {
      question: "Can you design my brand identity too?",
      answer:
        "Yes! We offer complete brand identity services including logo design, color palettes, typography, and brand guidelines. Our Professional and Enterprise packages include comprehensive branding.",
    },
    {
      question: "Do you work with businesses outside your local area?",
      answer:
        "Yes, we work with clients worldwide! Most of our communication happens digitally, and we're experienced in managing remote projects effectively.",
    },
    {
      question: "What if I need changes after the website is complete?",
      answer:
        "We include revisions in all our packages, and we're always available for updates and improvements. We can discuss ongoing maintenance or one-off changes based on your needs.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Frequently Asked Questions</h2>
        </div>

        <div
          className={`transition-all duration-800 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-card-foreground hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
