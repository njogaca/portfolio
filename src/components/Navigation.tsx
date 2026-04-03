"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return { id: s.id, top: Infinity };
        return { id: s.id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActive(closest.id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-600/90 backdrop-blur-md border-b border-dark-300"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#hero"
            className="font-mono text-lg font-bold text-green-400 hover:text-green-300 transition-colors"
          >
            JG<span className="text-green-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-3 py-1.5 rounded text-sm font-mono transition-colors ${
                  active === s.id
                    ? "text-green-400 bg-green-500/10"
                    : "text-dark-100 hover:text-dark-50 hover:bg-dark-400"
                }`}
              >
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-dark-100">
            <span
              className="w-2 h-2 rounded-full bg-green-400 status-pulse"
            />
            <span className="hidden sm:inline">SYSTEM :: ONLINE</span>
          </div>
        </div>
      </nav>

      {/* Right dot navigation (desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center justify-end"
            aria-label={s.label}
          >
            <span className="absolute right-6 px-2 py-1 rounded bg-dark-400 border border-dark-300 text-xs font-mono text-dark-50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {s.label}
            </span>
            <span
              className={`w-2.5 h-2.5 rounded-full border transition-all ${
                active === s.id
                  ? "bg-green-400 border-green-400 scale-125 shadow-[0_0_8px_rgba(61,139,94,0.5)]"
                  : "border-dark-200 hover:border-green-500 hover:bg-green-500/30"
              }`}
            />
          </a>
        ))}
      </div>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-dark-600/95 backdrop-blur-md border-t border-dark-300">
        <div className="flex justify-around items-center h-14 px-2">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded transition-colors ${
                active === s.id ? "text-green-400" : "text-dark-100"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  active === s.id ? "bg-green-400" : "bg-dark-200"
                }`}
              />
              <span className="text-[10px] font-mono">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
