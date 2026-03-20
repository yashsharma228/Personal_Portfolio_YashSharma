import SectionCard from "../../components/SectionCard";
import { experience } from "../../lib/portfolioData";

const experienceHighlights: Record<string, string[]> = {
  "AI Content Developer Intern": ["AI", "Content Ops", "WordPress", "SEO", "Automation"],
  "IT Technical Analyst Intern": ["React", "PHP", "MySQL", "REST API", "Figma"],
};

export default function ExperiencePage() {
  return (
    <div>
      <div className="code-comment text-xs md:text-sm mb-4">
        {"// experience.ts — professional journey"}
      </div>
      <SectionCard title={<span className="experience-page-title">Experience</span>} subtitle="interface Career extends Timeline {}">
        <div className="exp-shell mt-8">
          {experience.map((item, index) => (
            <div key={item.role + item.company} className="exp-item">
              <div className="exp-rail" aria-hidden="true">
                <span className={["exp-node", index === 0 ? "exp-node-active" : ""].join(" ")} />
              </div>

              <div className="exp-item-card">
                <div className="code-mono text-white/55 text-sm">{item.date}</div>

                <h3 className="exp-role-title mt-2">{item.role}</h3>

                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="exp-company-link mt-1 inline-block"
                >
                  @ {item.company}
                </a>

                <p className="exp-description mt-4">{item.bullets.join(" ")}</p>

                <div className="exp-tag-row mt-4">
                  {(experienceHighlights[item.role] ?? []).map(tag => (
                    <span key={tag} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}

