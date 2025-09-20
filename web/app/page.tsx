import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseSection } from "@/components/why-choose-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <section id="why-choose">
          <WhyChooseSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
        <Footer />
      </main>
    </>
  )
}
