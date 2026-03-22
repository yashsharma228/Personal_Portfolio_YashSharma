"use client";

const files = [
  { href: "/readme", name: "README.md" },
  { href: "/portfolio", name: "home.tsx" },
  { href: "/about", name: "about.tsx" },
  { href: "/experience", name: "experience.tsx" },
  { href: "/skills", name: "skills.json" },
  { href: "/projects", name: "projects.js" },
  { href: "/certificates", name: "certificates.tsx" },
  { href: "/contact", name: "contact.tsx" },
  { href: "/resume", name: "resume.pdf" },
] as const;

function FileIcon({ name }: { name: string }) {
  const ext = name.split(".").pop()?.toLowerCase();
  const color =
    ext === "tsx"
      ? "bg-sky-400/80"
      : ext === "js"
        ? "bg-yellow-400/80"
        : ext === "json"
          ? "bg-lime-400/80"
          : ext === "md"
            ? "bg-orange-400/80"
            : "bg-white/50";
  return <span className={["inline-block size-2 rounded-sm", color].join(" ")} />;
}

type SidebarProps = {
  currentPath: string;
  onOpenFile: (href: string) => void;
  onDownloadResume: () => void;
};

export default function Sidebar({ currentPath, onOpenFile, onDownloadResume }: SidebarProps) {
  return (
    <div className="w-full min-h-0 flex flex-col">
      <div className="px-4 py-3 border-b border-white/10">
        <div className="text-xs tracking-widest text-white/45 code-mono">EXPLORER</div>
        <div className="mt-1 text-sm text-white/75 font-semibold">portfolio</div>
      </div>

      <nav className="min-h-0 overflow-y-auto px-2 py-3">
        <div className="px-2 py-2 text-xs uppercase tracking-widest text-white/35">pages</div>
        <div className="flex flex-col gap-1">
          {files.map(f => {
            const active = f.href === currentPath;
            return (
              <button
                key={f.href}
                type="button"
                onClick={() => {
                  if (f.href === "/resume") {
                    onDownloadResume();
                    return;
                  }
                  onOpenFile(f.href);
                }}
                className={[
                  "flex items-center gap-2 rounded-md px-3 py-2 text-sm code-mono transition",
                  active
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:bg-white/6 hover:text-white/85",
                ].join(" ")}
              >
                <FileIcon name={f.name} />
                <span>{f.name}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}