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
      className="bg-background text-foreground py-24 transition-colors duration-300 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background visual accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 dark:bg-primary/10 blur-[120px]" />
        <div className="absolute top-[-10%] right-[-10%] w-[55%] h-[55%] rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-start">
          {/* Left Column */}
          <div className="flex flex-col h-full justify-between">
            <div>
              <div className="inline-flex items-center gap-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-6">
                <span className="w-6 h-px bg-border" />
                Contact
              </div>
              <h2
                id="contact-heading"
                className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-[0.95] tracking-tight text-foreground mb-6"
              >
                Have a project <br />
                in <span className="italic text-muted-foreground/80">mind?</span>
              </h2>
              <p className="text-base text-muted-foreground font-light leading-relaxed max-w-md mb-12">
                Whether you need a full product built from scratch or a specialist team to extend
                yours — we&apos;d love to hear about it.
              </p>
            </div>

            <div>
              <div className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase mb-2">
                Direct Email
              </div>
              <p className="font-serif italic text-xl text-muted-foreground hover:text-foreground transition-colors">
                <a href="mailto:hello@codeware.studio">hello@codeware.studio</a>
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="bg-card border border-border p-8 md:p-12 rounded-2xl backdrop-blur-md">
            {status === "success" ? (
              <div className="py-12 flex flex-col items-center justify-center text-center animate-fade-in">
                <CheckCircle2 className="h-12 w-12 text-emerald-400 mb-6 animate-bounce" />
                <h3 className="font-serif text-3xl font-normal text-foreground mb-3">
                  Message Received!
                </h3>
                <p className="text-sm text-muted-foreground font-light max-w-sm mb-8">
                  Thank you for reaching out. We will review your project details and get back to
                  you within 24 hours.
                </p>
                <Button
                  onClick={() => setStatus("idle")}
                  variant="outline"
                  className="rounded-full border-border hover:bg-accent hover:text-foreground"
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Project selector */}
                <div>
                  <span className="block text-xs font-bold tracking-wider text-muted-foreground uppercase mb-3.5">
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
                          className={`text-xs font-medium px-4 py-2 rounded-full border transition-all ${
                            isSelected
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-transparent text-muted-foreground border-border hover:border-foreground"
                          }`}
                        >
                          {type}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2"
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
                      className="w-full text-sm bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-foreground placeholder-muted-foreground/50 transition-colors"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2"
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
                      className="w-full text-sm bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-foreground placeholder-muted-foreground/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold tracking-wider text-muted-foreground uppercase mb-2"
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
                    className="w-full text-sm bg-background border border-border rounded-xl p-4 text-foreground focus:outline-none focus:border-foreground placeholder-muted-foreground/50 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-rose-400 font-medium animate-pulse">
                    Please fill out all required fields.
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:opacity-90 active:scale-98 disabled:opacity-50 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm"
                >
                  {status === "loading" ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
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
