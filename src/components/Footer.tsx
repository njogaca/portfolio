"use client";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Contact",    href: "#contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/njogaca/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/njogaca",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:jfgc1394@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-300 bg-dark-600/50">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Top: terminal-style brand + nav + social */}
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-dark-300/60">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-green-400 font-bold text-base">JG.</span>
              <span className="font-mono text-xs text-dark-200">~/portfolio</span>
            </div>
            <p className="text-sm text-dark-100 leading-relaxed max-w-xs">
              Integration Engineer building reliable middleware and cloud-native tools.
            </p>
            <p className="font-mono text-[11px] text-dark-200 mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-pulse" />
              Atlanta Metro Area, GA
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-mono text-xs text-green-400 mb-3"># navigation</p>
            <ul className="space-y-1.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-sm text-dark-100 hover:text-green-400 transition-colors"
                  >
                    <span className="text-dark-200 mr-1">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs text-green-400 mb-3"># connect</p>
            <div className="flex gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="p-2 rounded-lg border border-dark-300 hover:border-green-500/50 hover:text-green-400 text-dark-100 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 mt-4 font-mono text-xs text-dark-100 hover:text-green-400 transition-colors"
            >
              <span className="text-green-400">$</span> ./contact.sh
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-mono text-xs text-dark-200">
            <span className="text-dark-100">&copy; {year}</span> Johan Fernando Garcia Casas
            <span className="mx-2 text-dark-300">|</span>
            Powered by{" "}
            <a
              href="https://claude.ai/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Claude Code
            </a>
          </p>
          <p className="font-mono text-[11px] text-dark-200">
            <span className="text-purple-400">while</span>
            <span className="text-dark-100">{"("}</span>
            <span className="text-yellow-300">alive</span>
            <span className="text-dark-100">{") { "}</span>
            <span className="text-green-400">code</span>
            <span className="text-dark-100">{"(); }"}</span>
            <span className="typing-cursor ml-0.5" />
          </p>
        </div>
      </div>
    </footer>
  );
}
