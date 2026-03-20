"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  person,
  education,
  experience,
  skillsByCategory,
  projects,
  certifications,
} from "@/lib/portfolioData";

interface SearchEntry {
  file: string;
  href: string;
  text: string;
  line: number;
}

function buildIndex(): SearchEntry[] {
  const e: SearchEntry[] = [];

  // home.tsx
  e.push({ file: "home.tsx", href: "/portfolio", text: person.name, line: 1 });
  e.push({ file: "home.tsx", href: "/portfolio", text: person.title, line: 2 });
  e.push({ file: "home.tsx", href: "/portfolio", text: person.tagline, line: 3 });
  person.summary.forEach((s, i) =>
    e.push({ file: "home.tsx", href: "/portfolio", text: s, line: 4 + i }),
  );
  person.stats.forEach((s, i) =>
    e.push({ file: "home.tsx", href: "/portfolio", text: `${s.value} ${s.label}`, line: 10 + i }),
  );

  // about.tsx
  e.push({ file: "about.tsx", href: "/about", text: person.name, line: 1 });
  e.push({ file: "about.tsx", href: "/about", text: person.title, line: 2 });
  e.push({ file: "about.tsx", href: "/about", text: person.location, line: 3 });
  person.summary.forEach((s, i) =>
    e.push({ file: "about.tsx", href: "/about", text: s, line: 4 + i }),
  );

  // education.tsx
  education.forEach((ed, i) => {
    e.push({ file: "education.tsx", href: "/education", text: ed.title, line: i * 5 + 1 });
    e.push({ file: "education.tsx", href: "/education", text: ed.org, line: i * 5 + 2 });
    e.push({ file: "education.tsx", href: "/education", text: ed.year, line: i * 5 + 3 });
    e.push({ file: "education.tsx", href: "/education", text: ed.location, line: i * 5 + 4 });
    e.push({ file: "education.tsx", href: "/education", text: ed.description, line: i * 5 + 5 });
  });

  // experience.tsx
  experience.forEach((ex, i) => {
    e.push({ file: "experience.tsx", href: "/experience", text: ex.role, line: i * 6 + 1 });
    e.push({ file: "experience.tsx", href: "/experience", text: ex.company, line: i * 6 + 2 });
    e.push({ file: "experience.tsx", href: "/experience", text: ex.location, line: i * 6 + 3 });
    e.push({ file: "experience.tsx", href: "/experience", text: ex.date, line: i * 6 + 4 });
    ex.bullets.forEach((b, j) =>
      e.push({ file: "experience.tsx", href: "/experience", text: b, line: i * 6 + 5 + j }),
    );
  });

  // skills.json
  skillsByCategory.forEach((cat, i) => {
    e.push({ file: "skills.json", href: "/skills", text: cat.title, line: i * 3 + 1 });
    cat.items.forEach((item, j) =>
      e.push({ file: "skills.json", href: "/skills", text: item, line: i * 3 + 2 + j }),
    );
  });

  // projects.js
  projects.forEach((p, i) => {
    e.push({ file: "projects.js", href: "/projects", text: p.name, line: i * 5 + 1 });
    e.push({ file: "projects.js", href: "/projects", text: p.stack, line: i * 5 + 2 });
    e.push({ file: "projects.js", href: "/projects", text: p.description, line: i * 5 + 3 });
    e.push({ file: "projects.js", href: "/projects", text: p.learnings, line: i * 5 + 4 });
  });

  // certificates.tsx
  certifications.forEach((c, i) => {
    e.push({ file: "certificates.tsx", href: "/certificates", text: c.name, line: i * 4 + 1 });
    e.push({ file: "certificates.tsx", href: "/certificates", text: c.issuer, line: i * 4 + 2 });
    e.push({ file: "certificates.tsx", href: "/certificates", text: c.description, line: i * 4 + 3 });
    c.skills.forEach((s, j) =>
      e.push({ file: "certificates.tsx", href: "/certificates", text: s, line: i * 4 + 4 + j }),
    );
  });

  return e;
}

const INDEX = buildIndex();

function getFileColor(name: string) {
  const ext = name.split(".").pop()?.toLowerCase();
  if (ext === "tsx") return "bg-sky-400/80";
  if (ext === "js") return "bg-yellow-400/80";
  if (ext === "json") return "bg-lime-400/80";
  return "bg-white/50";
}

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query) return <span>{text}</span>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-400/70 text-white rounded-xs px-px">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </span>
  );
}

export default function SearchPanel({ onNavigate }: { onNavigate: (href: string) => void }) {
  const [query, setQuery] = useState("");
  const [matchCase, setMatchCase] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const q = query.trim();
    if (!q || q.length < 1) return [];

    const pattern = wholeWord ? `\\b${q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b` : q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const flags = matchCase ? "g" : "gi";
    let regex: RegExp;
    try {
      regex = new RegExp(pattern, flags);
    } catch {
      return [];
    }

    const matched = INDEX.filter(entry => regex.test(entry.text));

    // Group by file
    const groups: Record<string, SearchEntry[]> = {};
    for (const m of matched) {
      if (!groups[m.file]) groups[m.file] = [];
      groups[m.file].push(m);
    }
    return Object.entries(groups);
  }, [query, matchCase, wholeWord]);

  const totalMatches = results.reduce((sum, [, entries]) => sum + entries.length, 0);

  function navigate(href: string) {
    onNavigate(href);
    router.push(href);
  }

  return (
    <div className="w-full min-h-0 flex flex-col text-sm">
      {/* Header */}
      <div className="px-4 py-3 border-b border-white/10">
        <div className="text-xs tracking-widest text-white/45 code-mono">SEARCH</div>
      </div>

      {/* Search input area */}
      <div className="px-3 pt-3 pb-2 space-y-2">
        {/* Input row */}
        <div className="relative flex items-center">
          <span className="absolute left-2 text-white/40 pointer-events-none select-none text-base leading-none">
            ⌕
          </span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search"
            spellCheck={false}
            className="w-full bg-white/8 border border-white/15 rounded pl-7 pr-2 py-1.5 text-sm text-white placeholder:text-white/30 code-mono outline-none focus:border-sky-400/60 focus:bg-white/10 transition"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 text-white/40 hover:text-white/70 transition text-xs leading-none"
              aria-label="Clear"
            >
              ✕
            </button>
          )}
        </div>

        {/* Toggle buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            title="Match Case (Alt+C)"
            onClick={() => setMatchCase(v => !v)}
            className={[
              "code-mono px-1.5 py-0.5 rounded text-xs border transition select-none",
              matchCase
                ? "border-sky-400/70 bg-sky-400/15 text-sky-300"
                : "border-white/15 text-white/45 hover:border-white/30 hover:text-white/70",
            ].join(" ")}
          >
            Aa
          </button>
          <button
            type="button"
            title="Match Whole Word (Alt+W)"
            onClick={() => setWholeWord(v => !v)}
            className={[
              "code-mono px-1.5 py-0.5 rounded text-xs border transition select-none font-bold",
              wholeWord
                ? "border-sky-400/70 bg-sky-400/15 text-sky-300"
                : "border-white/15 text-white/45 hover:border-white/30 hover:text-white/70",
            ].join(" ")}
          >
            ab
          </button>
          {query && totalMatches > 0 && (
            <span className="ml-auto text-xs text-white/35 code-mono">
              {totalMatches} result{totalMatches !== 1 ? "s" : ""}
            </span>
          )}
          {query && totalMatches === 0 && (
            <span className="ml-auto text-xs text-white/35 code-mono">No results</span>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="min-h-0 overflow-y-auto flex-1">
        {query.trim().length === 0 && (
          <div className="px-4 py-6 text-xs text-white/30 code-mono text-center">
            Type to search across all files
          </div>
        )}

        {query.trim().length > 0 && results.length === 0 && (
          <div className="px-4 py-6 text-xs text-white/30 code-mono text-center">
            No results found
          </div>
        )}

        {results.map(([file, entries]) => (
          <div key={file} className="mb-1">
            {/* File header */}
            <button
              type="button"
              onClick={() => navigate(entries[0].href)}
              className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-white/6 transition group"
            >
              <span className={["inline-block size-2 shrink-0 rounded-sm", getFileColor(file)].join(" ")} />
              <span className="code-mono text-white/80 text-xs font-semibold truncate">{file}</span>
              <span className="ml-auto shrink-0 text-xs text-white/30 code-mono bg-white/8 px-1.5 rounded-full">
                {entries.length}
              </span>
            </button>

            {/* Match lines */}
            <div className="flex flex-col">
              {entries.map((entry, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => navigate(entry.href)}
                  className="flex items-start gap-2 pl-7 pr-3 py-1 hover:bg-white/8 transition group text-left"
                >
                  <span className="shrink-0 code-mono text-white/25 text-xs w-6 text-right select-none">
                    {entry.line}
                  </span>
                  <span className="code-mono text-white/60 text-xs break-all group-hover:text-white/80 transition">
                    <Highlight text={entry.text} query={query.trim()} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
