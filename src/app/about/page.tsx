import SectionCard from "../../components/SectionCard";
import { education, person } from "../../lib/portfolioData";

const aboutSignals = [
  "Building scalable web apps with practical AI automation.",
  "Turning business workflows into useful digital products.",
] as const;

const aboutPoints = [
  "Hi! I'm Yash Sharma, a full stack developer specializing in building scalable web applications using modern technologies like React, Node.js, and REST APIs.",
  "I focus on performance, clean architecture, and real-world problem solving.",
  "Currently, I’m working as an AI Content Developer Intern, developing AI-assisted content and automation pipelines.",
] as const;

export default function AboutPage() {
  return (
    <div>
      <SectionCard
        title={<span className="about-page-title">About</span>}
        subtitle="A quick snapshot of who I am and what I am building."
      >
        <div className="about-page-shell mt-6">
          <div className="about-signal-bar">
            {aboutSignals.map(signal => (
              <div key={signal} className="about-signal-item">
                <span className="about-signal-dot">✦</span>
                <span>{signal}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-4">
            <article className="about-story-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="about-story-title-row">
                    <span className="about-story-icon">✦</span>
                    <h3 className="about-story-title">Current Focus</h3>
                  </div>
                </div>
              </div>

              <ul className="about-points-list mt-4">
                {aboutPoints.map(point => (
                  <li key={point} className="about-points-item">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="about-section-label mt-6">Education</div>

          <div className="mt-4 space-y-4">
            {education.map(item => (
              <article key={item.title} className="about-story-card">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="about-story-title-row">
                      <span className="about-story-icon">▣</span>
                      <h3 className="about-story-title">{item.title}</h3>
                    </div>
                    <div className="about-story-meta mt-2">{item.org}</div>
                  </div>
                  <div className="about-story-date">{item.year}</div>
                </div>

                <p className="about-story-copy mt-4">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

