import SectionCard from "../../components/SectionCard";
import { certifications } from "../../lib/portfolioData";

export default function CertificatesPage() {
  return (
    <div>
      <div className="code-comment text-xs md:text-sm mb-4">
        {"// certifications.tsx — credentials"}
      </div>
      <SectionCard title="Certifications & Achievements" subtitle="Verifiable credentials and milestones.">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map(c => (
            <div key={c.name} className="editor-panel rounded-xl p-5">
              <div className="text-white/90 font-semibold">{c.name}</div>
              <div className="mt-1 text-white/55 text-sm">
                {c.issuer} • <span className="code-mono">{c.date}</span>
              </div>
              <div className="mt-4 text-white/70 leading-relaxed">{c.description}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.skills.map(s => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 code-mono"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-white/70 hover:text-white transition"
              >
                Verify →
              </a>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

