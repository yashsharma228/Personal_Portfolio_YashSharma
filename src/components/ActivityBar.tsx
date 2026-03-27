"use client";

type ActivityId = "explorer" | "search" | "readme" | "extensions";

type ActivityBarProps = {
  active: ActivityId;
  onChange: (id: ActivityId) => void;
};

function Item({
  label,
  title,
  active,
  onClick,
}: {
  label: string;
  title: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={title}
      title={title}
      onClick={onClick}
      className={[
        "relative grid place-items-center h-12 w-12 transition",
        active ? "text-white" : "text-white/55 hover:text-white/85",
      ].join(" ")}
    >
      {active ? <span className="absolute left-0 top-2 bottom-2 w-0.5 bg-sky-400" /> : null}
      <span className="code-mono text-base leading-none">{label}</span>
    </button>
  );
}

export default function ActivityBar({ active, onChange }: ActivityBarProps) {
  return (
    <div className="hidden md:flex w-12 shrink-0 flex-col justify-between border-r border-white/10 bg-black/35 backdrop-blur">
      <div className="flex flex-col">
        <div className="h-10 grid place-items-center border-b border-white/10 text-white/60">
          <span className="code-mono text-sm">☰</span>
        </div>
        <Item label="⌕" title="Search" active={active === "search"} onClick={() => onChange("search")} />
        <Item label="📄" title="README" active={active === "readme"} onClick={() => onChange("readme")} />
        <Item label="⬚" title="Copilot" active={active === "extensions"} onClick={() => onChange("extensions")} />
      </div>

      <div className="flex flex-col border-t border-white/10 py-1">
        <Item label="⚙" title="Settings" active={false} onClick={() => {}} />
      </div>
    </div>
  );
}

