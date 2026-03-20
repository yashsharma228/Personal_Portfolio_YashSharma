"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import ActivityBar from "./ActivityBar";
import ChatPanel from "./ChatPanel";
import Navbar from "./Navbar";
import SearchPanel from "./SearchPanel";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";

type ActivityId = "explorer" | "search" | "readme" | "extensions";

const panelLabelById: Record<ActivityId, string> = {
  explorer: "Explorer",
  search: "Search",
  readme: "README",
  extensions: "Copilot",
};

const fileMap = [
  { href: "/", label: "landing.tsx" },
  { href: "/portfolio", label: "home.tsx" },
  { href: "/readme", label: "README.md" },
  { href: "/about", label: "about.tsx" },
  { href: "/education", label: "education.tsx" },
  { href: "/experience", label: "experience.tsx" },
  { href: "/skills", label: "skills.json" },
  { href: "/projects", label: "projects.js" },
  { href: "/certificates", label: "certificates.tsx" },
  { href: "/achievements", label: "achievements.tsx" },
  { href: "/contact", label: "contact.tsx" },
] as const;

export type EditorFile = (typeof fileMap)[number];

export default function EditorShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLandingRoute = pathname === "/";

  const currentFile = useMemo(
    () => fileMap.find(f => f.href === pathname) ?? { href: pathname, label: "page.tsx" },
    [pathname],
  );

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [openFiles, setOpenFiles] = useState<string[]>([]);
  const [activity, setActivity] = useState<ActivityId>("explorer");

  const openTabs = useMemo(
    () =>
      openFiles.map(href => {
        const matched = fileMap.find(f => f.href === href);
        return matched ?? { href, label: "page.tsx" };
      }),
    [openFiles],
  );

  function openFile(href: string) {
    setOpenFiles(prev => (prev.includes(href) ? prev : [...prev, href]));
    setMobileSidebarOpen(false);
    router.push(href);
  }

  function closeFileTab(href: string) {
    setOpenFiles(prev => {
      if (!prev.includes(href)) return prev;

      const next = prev.filter(fileHref => fileHref !== href);
      if (pathname === href) {
        const closedIndex = prev.indexOf(href);
        const nextActive = next[closedIndex] ?? next[closedIndex - 1] ?? "/";
        router.push(nextActive);
      }

      return next;
    });
  }

  function downloadResume() {
    const a = document.createElement("a");
    a.href = "/resume.pdf";
    a.download = "Yash_Sharma_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  function openPanel(id: ActivityId) {
    setActivity(id);
    setSidebarOpen(true);
    setMobileSidebarOpen(true);
  }

  return (
    <div className="min-h-svh md:min-h-screen max-h-svh md:max-h-screen overflow-hidden flex flex-col">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur">
        <Navbar
          openTabs={openTabs}
          activeTabHref={pathname}
          currentFileLabel={currentFile.label}
          onSelectTab={openFile}
          onCloseTab={closeFileTab}
        />
      </header>

      {!isLandingRoute ? (
        <div className="md:hidden border-b border-white/10 bg-black/20 px-3 py-2">
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(true)}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/8 px-3 py-1.5 text-xs text-white/85 code-mono"
          >
            <span>☰</span>
            <span>{panelLabelById[activity]}</span>
          </button>
        </div>
      ) : null}

      <div className="flex flex-1 min-h-0">
        {!isLandingRoute ? (
          <ActivityBar
            active={activity}
            onChange={openPanel}
            onDownloadResume={downloadResume}
          />
        ) : null}

        {!isLandingRoute && sidebarOpen ? (
          <aside className="hidden md:flex w-72 border-r border-white/10 bg-black/25 backdrop-blur min-h-0 flex-col">
            <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/10 overflow-x-auto">
              {(["explorer", "search", "readme", "extensions"] as ActivityId[]).map(panelId => {
                const isActive = panelId === activity;
                return (
                  <button
                    type="button"
                    onClick={() => openPanel(panelId)}
                    key={panelId}
                    className={[
                      "rounded-md px-2 py-1 text-xs code-mono border transition",
                      isActive
                        ? "bg-white/12 border-white/20 text-white"
                        : "bg-white/5 border-white/10 text-white/65 hover:text-white hover:bg-white/10",
                    ].join(" ")}
                  >
                    {panelLabelById[panelId]}
                  </button>
                );
              })}
            </div>

            <div className="flex-1 min-h-0">
              {activity === "search" ? (
                <SearchPanel onNavigate={openFile} />
              ) : activity === "readme" ? (
                <Sidebar currentPath={pathname} onOpenFile={openFile} />
              ) : activity === "extensions" ? (
                <ChatPanel />
              ) : (
                <Sidebar currentPath={pathname} onOpenFile={openFile} />
              )}
            </div>
          </aside>
        ) : null}

        {!isLandingRoute && mobileSidebarOpen ? (
          <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
            <button
              type="button"
              aria-label="Close sidebar"
              className="absolute inset-0 bg-black/55"
              onClick={() => setMobileSidebarOpen(false)}
            />
            <aside className="relative h-full w-[88vw] max-w-xs border-r border-white/10 bg-black/85 backdrop-blur flex min-h-0 flex-col">
              <div className="flex items-center justify-between px-3 py-2 border-b border-white/10">
                <div className="text-xs code-mono text-white/65">Panels</div>
                <button
                  type="button"
                  onClick={() => setMobileSidebarOpen(false)}
                  className="rounded border border-white/15 px-2 py-1 text-xs code-mono text-white/75"
                >
                  Close
                </button>
              </div>

              <div className="flex items-center gap-1 px-2 py-1.5 border-b border-white/10 overflow-x-auto">
                {(["explorer", "search", "readme", "extensions"] as ActivityId[]).map(panelId => {
                  const isActive = panelId === activity;
                  return (
                    <button
                      type="button"
                      onClick={() => setActivity(panelId)}
                      key={panelId}
                      className={[
                        "rounded-md px-2 py-1 text-xs code-mono border transition",
                        isActive
                          ? "bg-white/12 border-white/20 text-white"
                          : "bg-white/5 border-white/10 text-white/65 hover:text-white hover:bg-white/10",
                      ].join(" ")}
                    >
                      {panelLabelById[panelId]}
                    </button>
                  );
                })}
              </div>

              <div className="flex-1 min-h-0">
                {activity === "search" ? (
                  <SearchPanel onNavigate={openFile} />
                ) : activity === "readme" ? (
                  <Sidebar currentPath={pathname} onOpenFile={openFile} />
                ) : activity === "extensions" ? (
                  <ChatPanel />
                ) : (
                  <Sidebar currentPath={pathname} onOpenFile={openFile} />
                )}
              </div>
            </aside>
          </div>
        ) : null}

        <main className="flex-1 min-h-0 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-5 py-6 sm:py-8 md:py-10">
            {children}
          </div>
        </main>
      </div>

      <StatusBar />
    </div>
  );
}

