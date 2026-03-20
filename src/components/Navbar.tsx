"use client";

type NavbarProps = {
  openTabs: Array<{ href: string; label: string }>;
  activeTabHref: string;
  currentFileLabel: string;
  onSelectTab: (href: string) => void;
  onCloseTab: (href: string) => void;
};

const menuItems = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help", "Copilot"] as const;

export default function Navbar({
  openTabs,
  activeTabHref,
  currentFileLabel,
  onSelectTab,
  onCloseTab,
}: NavbarProps) {
  return (
    <div className="w-full border-b border-white/10 bg-[#1c1f27]">
      <div className="border-b border-white/8 bg-[#1e2240]">
        <div className="mx-auto flex h-10 max-w-448 items-center gap-3 px-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-[#ff5f56]" />
            <span className="size-3 rounded-full bg-[#ffbd2e]" />
            <span className="size-3 rounded-full bg-[#27c93f]" />
          </div>

          <div className="mx-auto hidden w-full max-w-140 items-center justify-center sm:flex">
            <div className="flex h-7 w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-[#272b4b] px-3 text-xs text-white/65 code-mono">
              <span className="text-[11px]">⌕</span>
              <span className="truncate">yash-sharma : portfolio</span>
              <span className="text-white/35">Ctrl</span>
              <span className="rounded bg-white/10 px-1 text-[10px] text-white/45">P</span>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 text-xs text-white/55 lg:flex">
            <span className="code-mono uppercase tracking-wide">Portfolio</span>
            <span className="text-white/35">/</span>
            <span className="code-mono text-white/75">Yash Sharma</span>
            <span className="text-white/35">/</span>
            <span className="code-mono text-white/65">{currentFileLabel}</span>
          </div>
        </div>
      </div>

      <div className="border-b border-white/8 bg-[#262a33]">
        <div className="mx-auto flex h-8 max-w-448 items-center px-3">
          <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap pr-2">
            {menuItems.map(item => (
              <button
                key={item}
                type="button"
                className="text-[13px] text-white/70 transition hover:text-white"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-448 px-3">
        {openTabs.length > 0 ? (
          <div className="flex gap-1 overflow-x-auto py-1.5">
            {openTabs.map(tab => {
              const isActive = tab.href === activeTabHref;
              return (
                <div
                  key={tab.href}
                  className={[
                    "flex items-center gap-2 rounded border px-3 py-2 text-sm code-mono",
                    isActive
                      ? "border-white/20 bg-white/12 text-white"
                      : "border-white/10 bg-white/8 text-white/80",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => onSelectTab(tab.href)}
                    className="truncate max-w-44 sm:max-w-80 text-left hover:text-white transition"
                  >
                    {tab.label}
                  </button>
                  <button
                    type="button"
                    aria-label={`Close ${tab.label} tab`}
                    onClick={() => onCloseTab(tab.href)}
                    className="grid place-items-center size-6 rounded hover:bg-white/10 text-white/75 hover:text-white transition"
                  >
                    ×
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="h-2" />
        )}
      </div>
    </div>
  );
}