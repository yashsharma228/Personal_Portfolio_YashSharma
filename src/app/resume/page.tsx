"use client";

import SectionCard from "../../components/SectionCard";

export default function ResumePage() {
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "Yash_Sharma_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <div className="code-comment text-xs md:text-sm mb-4">
        {"// resume.pdf : full stack developer profile & experience"}
      </div>

      <SectionCard
        title={<span className="resume-page-title">Resume</span>}
        subtitle="Full Stack Developer | MCA Graduate | 6+ Certifications"
      >
        <div className="mt-6 space-y-4">
          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="w-full md:w-auto rounded-md bg-white/12 border border-white/20 px-6 py-3 text-sm text-white hover:bg-white/18 transition code-mono font-medium"
          >
            ↓ Download Resume (PDF)
          </button>

          {/* Resume Preview */}
          <div className="mt-6 rounded-lg border border-white/10 bg-white/5 overflow-hidden">
            <iframe
              src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
              className="w-full h-[600px] md:h-[800px]"
              title="Yash Sharma Resume"
            />
          </div>

          {/* Quick Stats */}
          <div className="mt-8 space-y-3">
            <div className="code-comment text-xs md:text-sm">
              {"// key highlights"}
            </div>
            <ul className="space-y-2 text-sm text-white/80 list-none">
              <li className="flex items-start gap-3">
                <span className="text-white/50 code-mono">▸</span>
                <span><span className="text-white font-medium">Tech Stack:</span> React, Next.js, Node.js, Express, PHP, MySQL, MongoDB, PostgreSQL</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/50 code-mono">▸</span>
                <span><span className="text-white font-medium">Experience:</span> Full Stack Development, REST APIs, JWT Authentication, UI/UX Design</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/50 code-mono">▸</span>
                <span><span className="text-white font-medium">Education:</span> MCA from Manipal University, BCA from University of Rajasthan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white/50 code-mono">▸</span>
                <span><span className="text-white font-medium">Internships:</span> AI Content Developer @ K4 Media, IT Technical Analyst @ Geo Planet Solution</span>
              </li>
            </ul>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
