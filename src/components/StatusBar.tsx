"use client";

export default function StatusBar() {
  return (
    <footer className="h-7 shrink-0 border-t border-white/10 bg-sky-600/25 backdrop-blur">
      <div className="h-full max-w-7xl mx-auto px-2 sm:px-3 flex items-center justify-between text-[10px] sm:text-[11px] text-white/80 code-mono gap-2">
        <div className="flex items-center gap-3">
          <span className="text-white/90">main</span>
          <span className="text-white/60">⇄</span>
          <span className="text-white/75">0</span>
          <span className="text-white/75">0</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-white/75">
          <span>UTF-8</span>
          <span>Prettier</span>
          <span>Yash Sharma</span>
          <span>00:01</span>
        </div>
      </div>
    </footer>
  );
}

