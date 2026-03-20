const skillGroups = [
  {
    title: "FRONTEND",
    items: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React.js",
      "Redux",
      "Bootstrap",
      "Next.js",
    ],
  },
  {
    title: "BACKEND",
    items: [
      "Node.js",
      "Express.js",
      "PHP",
      "REST API Development",
      "MVC Architecture",
    ],
  },
  {
    title: "DATABASE & AUTH",
    items: [
      "DSA",
      "OOPs",
      "MongoDB",
      "MySQL",
      "Firebase",
    ],
  },
  {
    title: "TOOLS",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "Vercel",
      "Render",
      "WordPress CMS",
      "Figma",
    ],
  },
] as const;

function SkillRow({ name }: { name: string }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/3 px-3 py-2 text-sm text-white/70 hover:border-white/20 hover:bg-white/6 hover:text-white/90 transition">
      {name}
    </div>
  );
}

export default function SkillsPage() {
  return (
    <section className="relative">
      <div className="code-comment text-xs md:text-sm mb-4">
        {"// skills.json — tech stack & tools I actually use"}
      </div>

      <div className="editor-panel rounded-2xl p-6 md:p-10">
        <div className="flex items-start justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
              Skills
            </h1>
            <div className="mt-3 code-mono text-white/45 text-sm md:text-base">
              {`{ "status": "always_learning", "passion": "immeasurable" }`}
            </div>
          </div>

          <button
            type="button"
            aria-label="Spark"
            className="hidden md:grid place-items-center size-10 rounded-lg border border-white/12 bg-white/6 text-yellow-300/90 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_0_24px_rgba(255,210,90,0.15)] hover:bg-white/10 transition"
          >
            <span className="text-lg leading-none">*</span>
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {skillGroups.map(group => (
            <div key={group.title}>
              <div className="code-mono text-xs tracking-[0.35em] text-white/55">
                {group.title}
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {group.items.map(item => (
                  <SkillRow key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

