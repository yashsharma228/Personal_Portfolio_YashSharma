"use client";

import { person } from "../../lib/portfolioData";

export default function ReadmePage() {
  const techStack = {
    frontend: ["HTML", "CSS", "JavaScript (ES6+)", "Tailwind CSS", "React.js", "Redux", "Bootstrap", "Next.js"],
    backend: ["Node.js", "Express.js", "PHP", "REST API", "MVC Architecture"],
    database: ["MongoDB", "MySQL", "Firebase", "JWT", "RBAC"],
    tools: ["Git", "GitHub", "Postman", "Cloudinary", "Vercel", "Render", "Figma"],
  };

  const experience = [
    {
      title: "AI Content Developer Intern",
      company: "K4 Media and Technologies",
      location: "Jaipur",
      duration: "March 2026 – Present",
      highlights: [
        "Created AI-assisted content using ChatGPT and Gemini with structured prompt workflows",
        "Managed website content publishing using WordPress CMS and digital content pipelines",
        "Applied SEO and keyword optimization techniques to improve content visibility",
        "Collaborated with cross-functional teams to support AI-driven content automation",
      ],
    },
    {
      title: "IT Technical Analyst Intern",
      company: "Geo Planet Solution Pvt. Ltd.",
      location: "Jaipur",
      duration: "July 2025 – October 2025",
      highlights: [
        "Developed and maintained full-stack web applications using React, PHP, and MySQL",
        "Contributed to 5+ web and blockchain-based projects with responsive UI implementation",
        "Integrated REST APIs and improved application performance through debugging and optimization",
        "Designed UI wireframes and prototypes using Figma before development",
      ],
    },
  ];

  const projects = [
    {
      title: "Image Gallery App",
      tech: "MERN • Tailwind CSS • Next.js • Firebase • Cloudinary",
      year: "2026",
      highlights: [
        "Built a full-stack image management system with separate user and admin panels",
        "Implemented authentication, image uploads, likes, and comments functionality",
        "Integrated Firebase Authentication and Cloudinary for secure media handling",
        "Deployed frontend on Vercel and backend on Render with environment variables",
      ],
    },
    {
      title: "Office Task Management System",
      tech: "ReactJS • PHP • MySQL",
      year: "2025",
      highlights: [
        "Built a role-based task and expense management system",
        "Developed REST APIs with CRUD operations and file upload functionality",
        "Implemented authentication and optimized database queries for performance",
        "Designed UI prototypes in Figma before development",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Manipal University Jaipur",
      duration: "July 2023 – November 2025",
      location: "Jaipur, India",
      cgpa: "8.0",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "University of Rajasthan",
      duration: "August 2018 – October 2021",
      location: "Jaipur, India",
    },
  ];

  const certifications = [
    "Programming with JavaScript – Coursera (Sept 2023)",
    "ReactJS – HackerRank (March 2025)",
  ];

  const contactLinks = [
    { label: "Email", value: "yashsharma4841@gmail.com", href: "mailto:yashsharma4841@gmail.com" },
    { label: "Phone", value: "(+91) 9571790228", href: "tel:+919571790228" },
    { label: "GitHub", value: "yashsharma228", href: "https://github.com/yashsharma228" },
    { label: "LinkedIn", value: "yashsharma0228", href: "https://linkedin.com/in/yashsharma0228" },
  ];

  return (
    <div className="readme-container">
      <div className="code-comment text-xs md:text-sm mb-8">
        {"// README.md — Full Stack Developer & MCA Graduate"}
      </div>

      {/* HEADER */}
      <div className="readme-header mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Yash Sharma</h1>
        <div className="flex flex-wrap items-center gap-3 text-white/70 text-base md:text-lg mb-6">
          <span className="font-semibold text-white">Full Stack Developer</span>
          <span className="text-cyan-400">•</span>
          <span>{person.location}</span>
          <span className="text-lg">🇮🇳</span>
        </div>

        {/* QUICK TECH PILLS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {["React.js", "Next.js", "Node.js", "PHP", "MySQL"].map((tech) => (
            <div
              key={tech}
              className="readme-tech-pill px-3 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/5 text-cyan-300 text-sm code-mono flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* PROFESSIONAL SUMMARY */}
      <div className="readme-section mb-10">
        <h2 className="text-xl font-bold text-white mb-4 code-mono flex items-center gap-2">
          <span className="text-cyan-400">👨‍💻</span> Professional Summary
        </h2>
        <div className="text-white/70 leading-relaxed text-base multi-line-text">
          Full Stack Developer and MCA graduate with hands-on experience building scalable web applications using React.js, Next.js, Node.js, PHP, and MySQL. Skilled in REST API development, authentication systems, and responsive UI design. Experienced in developing and deploying production-ready applications with modern web technologies. Currently working as an AI Content Developer Intern while actively seeking Full Stack Developer opportunities.
        </div>
      </div>

      {/* CORE SKILLS */}
      <div className="readme-section mb-10">
        <h2 className="text-xl font-bold text-white mb-6 code-mono flex items-center gap-2">
          <span className="text-purple-400">⚙️</span> Core Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white/60 code-mono uppercase tracking-wider mb-3">
                {category.replace(/_/g, " ")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-white/8 border border-white/12 text-white/75 text-sm hover:border-cyan-400/30 hover:bg-cyan-400/5 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="readme-section mb-10">
        <h2 className="text-xl font-bold text-white mb-6 code-mono flex items-center gap-2">
          <span className="text-blue-400">💼</span> Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className="border-l-2 border-cyan-400/30 pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                <span className="text-sm text-white/50 code-mono">{exp.duration}</span>
              </div>
              <p className="text-white/60 mb-3">
                <span className="text-cyan-300">{exp.company}</span>
                <span className="text-white/40"> • {exp.location}</span>
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-white/60 flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">▹</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECTS */}
      <div className="readme-section mb-10">
        <h2 className="text-xl font-bold text-white mb-6 code-mono flex items-center gap-2">
          <span className="text-green-400">🚀</span> Technical Projects
        </h2>
        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div key={idx} className="border border-white/10 rounded-lg p-4 bg-white/5 hover:bg-white/8 transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <span className="text-sm text-white/50 code-mono">{project.year}</span>
              </div>
              <p className="text-cyan-300 text-sm code-mono mb-3">{project.tech}</p>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-white/60 flex items-start gap-3">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* EDUCATION */}
      <div className="readme-section mb-10">
        <h2 className="text-xl font-bold text-white mb-6 code-mono flex items-center gap-2">
          <span className="text-orange-400">🎓</span> Education
        </h2>
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div key={idx} className="border-l-2 border-orange-400/30 pl-4">
              <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="text-white/60">
                <span className="text-orange-300">{edu.school}</span>
                <span className="text-white/40"> • {edu.location}</span>
              </p>
              <div className="flex justify-between items-center mt-1 text-sm text-white/50">
                <span className="code-mono">{edu.duration}</span>
                {edu.cgpa && <span>CGPA: {edu.cgpa}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CERTIFICATIONS */}
      <div className="readme-section mb-10">
        <h2 className="text-xl font-bold text-white mb-4 code-mono flex items-center gap-2">
          <span className="text-yellow-400">📜</span> Certifications
        </h2>
        <ul className="space-y-2">
          {certifications.map((cert, idx) => (
            <li key={idx} className="text-white/70 flex items-start gap-3">
              <span className="text-yellow-400 mt-0.5">✓</span>
              <span>{cert}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CONNECT */}
      <div className="readme-section mb-10">
        <h2 className="text-xl font-bold text-white mb-4 code-mono flex items-center gap-2">
          <span className="text-blue-400">📞</span> Connect
        </h2>
        <div className="space-y-2">
          {contactLinks.map((link) => (
            <div key={link.label} className="flex items-center gap-3 text-white/70">
              <span className="text-white/40 code-mono text-xs min-w-20">{link.label}:</span>
              <a
                href={link.href}
                target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                rel={link.label === "Email" || link.label === "Phone" ? undefined : "noreferrer"}
                className="text-cyan-400 hover:text-cyan-300 transition hover:underline"
              >
                {link.value}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <div className="readme-footer text-center text-white/40 text-sm code-mono mt-12 pt-8 border-t border-white/10">
        <p>Made with 🤍 by Yash Sharma · 2026 with full design</p>
      </div>
    </div>
  );
}
