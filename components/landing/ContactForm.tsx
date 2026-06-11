"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [projectTypes, setProjectTypes] = useState<string[]>([])
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const types = ["Web App", "Mobile App", "AI Agent", "Desktop App", "Other"]

  const toggleProjectType = (type: string) => {
    if (projectTypes.includes(type)) {
      setProjectTypes(projectTypes.filter((t) => t !== type))
    } else {
      setProjectTypes([...projectTypes, type])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error")
      return
    }

    setStatus("loading")
    // Simulate API submission
    setTimeout(() => {
      setStatus("success")
      setFormData({ name: "", email: "", message: "" })
      setProjectTypes([])
    }, 1200)
  }

  return (
    <section
      id="contact"
      className="bg-background text-foreground relative overflow-hidden py-24 transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      {/* Background visual accents */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <div className="dark:bg-primary/10 absolute bottom-[-20%] left-[-10%] h-[50%] w-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-[-10%] right-[-10%] h-[55%] w-[55%] rounded-full bg-emerald-500/5 blur-[140px] dark:bg-emerald-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Left Column */}
          <div className="flex h-full flex-col justify-between">
            <div>
              <div className="text-muted-foreground mb-6 inline-flex items-center gap-3 text-xs font-semibold tracking-widest uppercase">
                <span className="bg-border h-px w-6" />
                Contact
              </div>
              <h2
                id="contact-heading"
                className="text-foreground mb-6 font-serif text-4xl leading-[0.95] font-normal tracking-tight md:text-6xl lg:text-7xl"
              >
                Have a project <br />
                in <span className="text-muted-foreground/80 italic">mind?</span>
              </h2>
              <p className="text-muted-foreground mb-12 max-w-md text-base leading-relaxed font-light">
                Whether you need a full product built from scratch or a specialist team to extend
                yours — we&apos;d love to hear about it.
              </p>
            </div>

            <div>
              <div className="text-muted-foreground mb-2 text-[10px] font-bold tracking-wider uppercase">
                Direct Email
              </div>
              <p className="text-muted-foreground hover:text-foreground font-serif text-xl italic transition-colors">
                <a href="mailto:hello@codeware.studio">hello@codeware.studio</a>
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-card border-border rounded-2xl border p-8 backdrop-blur-md md:p-12">
            {status === "success" ? (
              <div className="animate-fade-in flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="mb-6 h-12 w-12 animate-bounce text-emerald-400" />
                <h3 className="text-foreground mb-3 font-serif text-3xl font-normal">
                  Message Received!
                </h3>
                <p className="text-muted-foreground mb-8 max-w-sm text-sm font-light">
                  Thank you for reaching out. We will review your project details and get back to
                  you within 24 hours.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="border-border hover:bg-accent hover:text-foreground rounded-full"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project selector */}
                <div>
                  <span className="text-muted-foreground mb-3.5 block text-xs font-bold tracking-wider uppercase">
                    What are we building?
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {types.map((type) => {
                      const isSelected = projectTypes.includes(type)
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleProjectType(type)}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                            isSelected
                              ? "bg-primary text-primary-foreground border-primary"
                              : "text-muted-foreground border-border hover:border-foreground bg-transparent"
                          }`}
                        >
                          {type}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Name */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-muted-foreground mb-2 block text-xs font-bold tracking-wider uppercase"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="bg-background border-border text-foreground focus:border-foreground placeholder-muted-foreground/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-muted-foreground mb-2 block text-xs font-bold tracking-wider uppercase"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="bg-background border-border text-foreground focus:border-foreground placeholder-muted-foreground/50 w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-muted-foreground mb-2 block text-xs font-bold tracking-wider uppercase"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a bit about what you have in mind..."
                    className="bg-background border-border text-foreground focus:border-foreground placeholder-muted-foreground/50 w-full resize-none rounded-xl border p-4 text-sm transition-colors focus:outline-none"
                  />
                </div>

                {status === "error" && (
                  <p className="animate-pulse text-xs font-medium text-rose-400">
                    Please fill out all required fields.
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-primary text-primary-foreground flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold shadow-sm transition-all hover:opacity-90 active:scale-98 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <div className="border-primary-foreground h-5 w-5 animate-spin rounded-full border-2 border-t-transparent" />
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
