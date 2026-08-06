"use client";

import TypeWriter, { type TokenLine } from "./TypeWriter";

// Shorthand token helpers
const k  = (text: string) => ({ text, cls: "syntax-keyword" });
const t  = (text: string) => ({ text, cls: "syntax-type" });
const v  = (text: string) => ({ text, cls: "syntax-variable" });
const s  = (text: string) => ({ text, cls: "syntax-string" });
const n  = (text: string) => ({ text, cls: "syntax-number" });
const p  = (text: string) => ({ text, cls: "syntax-punctuation" });
const b  = (text: string) => ({ text, cls: "syntax-bracket" });
const op = (text: string) => ({ text, cls: "syntax-operator" });
const fn = (text: string) => ({ text, cls: "syntax-function" });
const sp = (text: string) => ({ text });

const codeLines: TokenLine[] = [
  [k("import"), sp(" "), b("{"), sp(" "), v("Engineer"), sp(" "), b("}"), sp(" "), k("from"), sp(" "), s('"@colombia/atlanta"'), p(";")],
  [],
  [k("interface"), sp(" "), t("Profile"), sp(" "), b("{")],
  [sp("  "), v("name"), p(":"), sp(" "), t("string"), p(";")],
  [sp("  "), v("role"), p(":"), sp(" "), t("string"), p(";")],
  [sp("  "), v("experience"), p(":"), sp(" "), t("number"), p(";")],
  [sp("  "), v("stack"), p(":"), sp(" "), t("string"), b("[]"), p(";")],
  [b("}")],
  [],
  [k("const"), sp(" "), fn("johan"), p(":"), sp(" "), t("Profile"), sp(" "), op("="), sp(" "), b("{")],
  [sp("  "), v("name"), p(":"), sp(" "), s('"Johan Garcia"'), p(",")],
  [sp("  "), v("role"), p(":"), sp(" "), s('"Integration Engineer"'), p(",")],
  [sp("  "), v("experience"), p(":"), sp(" "), n("8"), p(",")],
  [sp("  "), v("stack"), p(":"), sp(" "), b("["), s('"IIB"'), p(","), sp(" "), s('"MQ"'), p(","), sp(" "), s('"Python"'), p(","), sp(" "), s('"Claude"'), p(","), sp(" "), s('"Linux"'), b("]"), p(",")],
  [b("}"), p(";")],
];

const techBadges = [
  "IBM MQ", "IIB/ACE", "ESQL", "DFDL", "DataPower",
  "Docker", "OpenShift", "AWS", "Python", "COBOL",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="grid-overlay" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: intro */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-300 bg-dark-500/50 font-mono text-xs text-dark-100">
            <span className="w-2 h-2 rounded-full bg-green-400 status-pulse" />
            <span>Available for opportunities</span>
          </div>

          <div>
            <p className="font-mono text-green-400 text-sm mb-2">
              $ whoami
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Johan Fernando
              <br />
              <span className="gradient-text">Garcia Casas</span>
            </h1>
          </div>

          <p className="text-lg text-dark-100 max-w-lg">
            Integration Engineer with 8+ years building and operating enterprise
            middleware on IBM Integration Bus and IBM MQ for Tier-1 banks
            processing 500K+ daily transactions.
          </p>
          <p className="text-sm font-mono text-dark-100/80 max-w-lg">
            Atlanta Metro, GA · open to relocation · authorized to work in the
            U.S. — no sponsorship required
          </p>

          <div className="flex flex-wrap gap-2">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded border border-dark-300 bg-dark-500/50 text-xs font-mono text-dark-100 hover:border-green-500/50 hover:text-green-400 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              download="Johan_Garcia_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500/40 hover:border-green-400 hover:bg-green-500/10 text-green-400 font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Resume
            </a>
            <a
              href="https://github.com/njogaca"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-dark-300 hover:border-green-500/50 text-dark-50 font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right: code editor */}
        <div className="terminal-window glow-green">
          <div className="terminal-header">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">portfolio.tsx</span>
          </div>
          <div className="terminal-body">
            <TypeWriter lines={codeLines} speed={18} startDelay={400} linePause={60} />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dark-100">
        <span className="font-mono text-xs">scroll</span>
        <div className="w-5 h-8 rounded-full border border-dark-200 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-green-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
