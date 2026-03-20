import SectionCard from "../../components/SectionCard";
import { education } from "../../lib/portfolioData";

export default function EducationPage() {
  return (
    <div>
      <div className="code-comment text-xs md:text-sm mb-4">
        {"// education.tsx — academics"}
      </div>
      <SectionCard title="Education" subtitle="Academic timeline and key learning highlights.">
        <div className="mt-8 grid gap-5">
          {education.map(item => (
            <div key={item.title} className="editor-panel rounded-xl p-5">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="text-white/90 font-semibold">{item.title}</div>
                <div className="code-mono text-white/55 text-sm">{item.year}</div>
              </div>
              <div className="mt-3 text-white/65 text-sm">
                <div>{item.org}</div>
                <div className="text-white/45">{item.location}</div>
              </div>
              <div className="mt-4 text-white/70 leading-relaxed">{item.description}</div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

