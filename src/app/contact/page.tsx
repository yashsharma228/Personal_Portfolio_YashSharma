"use client";

import { useState } from "react";
import { person } from "../../lib/portfolioData";

const socialLinks = [
  { label: "EMAIL", url: "yashsharma4841@gmail.com", icon: "✉️", color: "border-cyan-400" },
  { label: "LINKEDIN", url: "linkedin.com/in/yashsharma0228", icon: "💼", color: "border-blue-500" },
  { label: "GITHUB", url: "github.com/yashsharma228", icon: "🐙", color: "border-gray-400" },
  { label: "TWITTER", url: "x.com/Yashsharma0228", icon: "𝕏", color: "border-white/40" },
  { label: "TRAILHEAD", url: "salesforce.com/trailblazer/ysharma254", icon: "⭐", color: "border-blue-400" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xkoqydyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 3000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="code-comment text-xs md:text-sm mb-8">
        {"// contact.css — let's build something"}
      </div>

      <div className="contact-header mb-12">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Contact</h1>
        <div className="code-mono text-xs md:text-sm text-cyan-400 tracking-[0.2em]">
          // open to work, collabs & good conversations
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* LEFT SECTION - FIND ME ON */}
        <div>
          <div className="code-mono text-sm md:text-base tracking-[0.3em] text-cyan-400 mb-8 font-bold">
            FIND ME ON
          </div>
          <div className="space-y-4">
            {socialLinks.map((social) => (
              <div
                key={social.label}
                className={`contact-social-card border-l-4 ${social.color} bg-white/5 hover:bg-white/8 backdrop-blur-sm p-5 rounded-lg transition-all duration-300 group cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{social.icon}</span>
                  <div className="flex-1">
                    <div className="code-mono text-xs tracking-[0.2em] text-white/60 mb-1 font-semibold">
                      {social.label}
                    </div>
                    <a
                      href={social.label === "EMAIL" ? `mailto:${social.url}` : `https://${social.url}`}
                      target={social.label === "EMAIL" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="text-white/75 hover:text-white text-sm transition group-hover:translate-x-1 inline-block"
                    >
                      {social.url} →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION - SEND A MESSAGE */}
        <div>
          <div className="code-mono text-sm md:text-base tracking-[0.3em] text-cyan-400 mb-8 font-bold">
            SEND A MESSAGE
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            <div>
              <label className="code-mono text-xs text-white/60 mb-2 block">
                // YOUR_NAME <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="string"
                className="contact-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/8 outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="code-mono text-xs text-white/60 mb-2 block">
                // YOUR_EMAIL <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="string"
                className="contact-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/8 outline-none transition"
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label className="code-mono text-xs text-white/60 mb-2 block">
                // SUBJECT
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="string"
                className="contact-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/8 outline-none transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="code-mono text-xs text-white/60 mb-2 block">
                // MESSAGE <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="'''your message'''"
                className="contact-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:border-cyan-400/50 focus:bg-white/8 outline-none transition resize-none h-32"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`contact-submit-btn w-full mt-6 py-3 px-4 rounded-lg font-semibold code-mono text-sm transition-all duration-300 ${
                submitStatus === "success"
                  ? "bg-green-500/20 text-green-400 border border-green-500/50"
                  : submitStatus === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/50"
                    : "bg-cyan-500 hover:bg-cyan-600 text-white border border-cyan-400 disabled:opacity-70"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-4 h-4 border-2 border-current border-r-transparent rounded-full animate-spin" />
                  Sending...
                </span>
              ) : submitStatus === "success" ? (
                "✓ Message sent successfully!"
              ) : submitStatus === "error" ? (
                "✗ Failed to send. Please try again."
              ) : (
                "→ send_message()"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

