"use client";

import IntroScreen from "../../components/IntroScreen";
import SectionCard from "../../components/SectionCard";
import { person } from "../../lib/portfolioData";
import Link from "next/link";
import { useEffect, useState } from "react";

const highlights = [
  { value: "6+", label: "Months" },
  { value: "10+", label: "Projects" },
  { value: "∞", label: "Curiosity" },
  { value: "↑", label: "Always Learning" },
] as const;

const socialLinks = [
  { label: "GitHub", href: person.links.github, icon: "◉" },
  { label: "LinkedIn", href: person.links.linkedin, icon: "▣" },
  { label: "Twitter (X)", href: person.links.x, icon: "◎" },
  { label: "Email", href: person.links.email, icon: "✉" },
  { label: "Trailhead", href: person.links.salesforce, icon: "▦" },
] as const;

const rotatingLines = [
  "Full Stack Developer with a focus on AI automation.",
  "Turning ideas into smart, AI-powered web experiences.",
  "Always learning, building, and exploring AI.",
  "Next.js, Node.js, APIs and AI automation in action.",
] as const;

export default function PortfolioHomePage() {
  const [entered, setEntered] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const v = window.localStorage.getItem("portfolio:entered");
    if (v === "1") setEntered(true);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLineIndex(prev => (prev + 1) % rotatingLines.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, []);

  function enter() {
    setEntered(true);
    window.localStorage.setItem("portfolio:entered", "1");
  }

  function handleSocialLinkClick(href: string) {
    if (href.startsWith("mailto:")) {
      window.location.href = href;
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      {!entered ? <IntroScreen onEnter={enter} /> : null}

      <SectionCard
        title={
          <span className="home-name-wrap">
            <span className="home-name-kicker">Portfolio</span>
            <span className="home-name-display">{person.name}</span>
          </span>
        }
        subtitle={
          <span className="home-rotating-subtitle" key={lineIndex}>
            <span className="home-rotating-subtitle-line">{rotatingLines[lineIndex]}</span>
          </span>
        }
      >
        <div className="home-hero mt-4 md:mt-6">
          <div className="home-orb home-orb-one" aria-hidden="true" />
          <div className="home-orb home-orb-two" aria-hidden="true" />
          <div className="home-orb home-orb-three" aria-hidden="true" />

          <div className="home-hero-content">
            <div className="home-tagline mt-3">Available for full stack developer roles</div>

            <div className="home-stats-wrap mt-4 rounded-xl border border-white/10 bg-black/20 overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4">
                {highlights.map((item, idx) => (
                  <div
                    key={item.label}
                    className="home-stat-card"
                    style={{ animationDelay: `${idx * 80}ms` }}
                  >
                    <div className="home-stat-value">{item.value}</div>
                    <div className="home-stat-label">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.filter(item => item.href.trim().length > 0).map((item, idx) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSocialLinkClick(item.href)}
                  aria-label={`Open ${item.label}`}
                  className="home-social-pill"
                  style={{ animationDelay: `${220 + idx * 45}ms` }}
                >
                  <span className="home-social-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3 home-cta-row">
              <Link
                href="/projects"
                className="rounded-md bg-white/10 border border-white/12 px-4 py-2 text-sm text-white/85 hover:bg-white/14 transition code-mono"
              >
                View My Work
              </Link>
              <Link
                href="/resume"
                className="rounded-md bg-white/10 border border-white/12 px-4 py-2 text-sm text-white/85 hover:bg-white/14 transition code-mono"
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="rounded-md bg-black/20 border border-white/12 px-4 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-white/90 transition code-mono"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
