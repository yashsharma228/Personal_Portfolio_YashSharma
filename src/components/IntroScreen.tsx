"use client";

import { useEffect, useMemo, useState } from "react";
import { person } from "../lib/portfolioData";

const phrases = [
  "Full Stack Developer",
  "React & Next.js Specialist",
  "Building Scalable Web Applications",
] as const;

function useTypingLoop(items: readonly string[]) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = items[index % items.length] ?? "";
    const speed = deleting ? 24 : 42;
    const tick = window.setTimeout(() => {
      const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1);
      setText(next);

      if (!deleting && next === current) window.setTimeout(() => setDeleting(true), 700);
      if (deleting && next === "") {
        setDeleting(false);
        setIndex(i => i + 1);
      }
    }, speed);
    return () => window.clearTimeout(tick);
  }, [deleting, index, items, text]);

  return text;
}

function Particles() {
  const dots = useMemo(() => {
    const count = 70;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: 1.5 + Math.random() * 2.5,
      dx: (Math.random() - 0.5) * 0.06,
      dy: (Math.random() - 0.5) * 0.06,
      o: 0.25 + Math.random() * 0.55,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map(d => (
        <span
          key={d.id}
          className="absolute rounded-full bg-cyan-200/80 blur-[0.2px] animate-[floatDot_12s_linear_infinite]"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: `${d.s}px`,
            height: `${d.s}px`,
            opacity: d.o,
            ["--dx" as any]: `${d.dx}vw`,
            ["--dy" as any]: `${d.dy}vh`,
          }}
        />
      ))}
      <style>{`
        @keyframes floatDot {
          from { transform: translate3d(0,0,0); }
          to { transform: translate3d(var(--dx), var(--dy), 0); }
        }
      `}</style>
    </div>
  );
}

export default function IntroScreen({ onEnter }: { onEnter: () => void }) {
  const typed = useTypingLoop(phrases);

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center">
      <div className="absolute inset-0 bg-black" />
      <Particles />
      <div className="relative editor-panel rounded-2xl px-7 py-10 md:px-12 md:py-12 max-w-2xl w-[calc(100%-2rem)] text-center">
        <div className="text-white/65 text-lg md:text-xl">Welcome to</div>
        <div className="mt-1 text-white text-2xl md:text-4xl font-extrabold tracking-tight">
          {person.name}&apos;s Portfolio
        </div>
        <div className="mt-5 code-mono text-cyan-200/80 text-sm md:text-base min-h-6">
          {typed}
          <span className="inline-block w-2 opacity-70">|</span>
        </div>
        <button
          type="button"
          onClick={onEnter}
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/8 px-5 py-3 text-white/90 hover:bg-white/12 transition code-mono"
        >
          Enter Website
        </button>
      </div>
    </div>
  );
}

