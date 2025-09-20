import React from "react"

export const Footer = React.memo(() => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mintora Designs</h3>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Crafting digital identities, websites, and experiences that help businesses stand out and grow.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="mailto:mintoradesigns@gmail.com"
                  className="hover:text-primary-foreground transition-colors duration-200"
                >
                  mintoradesigns@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} Mintora Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
})

Footer.displayName = "Footer"
