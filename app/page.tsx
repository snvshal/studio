import { Navbar } from "@/components/landing/Navbar"
import { Hero } from "@/components/landing/Hero"
import { LogosStrip } from "@/components/landing/LogosStrip"
import { Services } from "@/components/landing/Services"
import { ProjectShowcase } from "@/components/landing/ProjectShowcase"
import { Process } from "@/components/landing/Process"
import { Stack } from "@/components/landing/Stack"
import { Testimonials } from "@/components/landing/Testimonials"
import { ContactForm } from "@/components/landing/ContactForm"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <div className="dark bg-background text-foreground flex min-h-screen flex-col transition-colors duration-300">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:border focus:border-neutral-200 focus:bg-white focus:px-4 focus:py-2 focus:text-neutral-900 focus:shadow-sm"
      >
        Skip to content
      </a>

      {/* Responsive Navigation bar */}
      <Navbar />

      {/* Main Content Areas */}
      <main id="main-content" className="flex flex-1 flex-col">
        {/* Editorial Hero Area */}
        <Hero />

        {/* Scrolling Partner Logos */}
        <LogosStrip />

        {/* Interactive Services Grid */}
        <Services />

        {/* Selected Projects with Hover-interactive Mockups */}
        <ProjectShowcase />

        {/* Step-by-Step Delivery Process */}
        <Process />

        {/* Filter-friendly/Clean Tech Stack Categorization */}
        <Stack />

        {/* Partner Reviews & Testimonials */}
        <Testimonials />

        {/* Interactive Contact Form */}
        <ContactForm />
      </main>

      {/* Footnote and Social Connections */}
      <Footer />
    </div>
  )
}
