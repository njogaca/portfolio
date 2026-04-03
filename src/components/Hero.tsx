"use client";

import TypeWriter from "./TypeWriter";

const codeLines = [
  { content: '<span class="syntax-keyword">import</span> <span class="syntax-bracket">{</span> <span class="syntax-variable">Engineer</span> <span class="syntax-bracket">}</span> <span class="syntax-keyword">from</span> <span class="syntax-string">"@colombia/atlanta"</span><span class="syntax-punctuation">;</span>' },
  { content: "" },
  { content: '<span class="syntax-keyword">interface</span> <span class="syntax-type">Profile</span> <span class="syntax-bracket">{</span>' },
  { content: '  <span class="syntax-variable">name</span><span class="syntax-punctuation">:</span> <span class="syntax-type">string</span><span class="syntax-punctuation">;</span>' },
  { content: '  <span class="syntax-variable">role</span><span class="syntax-punctuation">:</span> <span class="syntax-type">string</span><span class="syntax-punctuation">;</span>' },
  { content: '  <span class="syntax-variable">experience</span><span class="syntax-punctuation">:</span> <span class="syntax-type">number</span><span class="syntax-punctuation">;</span>' },
  { content: '  <span class="syntax-variable">stack</span><span class="syntax-punctuation">:</span> <span class="syntax-type">string</span><span class="syntax-bracket">[]</span><span class="syntax-punctuation">;</span>' },
  { content: '<span class="syntax-bracket">}</span>' },
  { content: "" },
  { content: '<span class="syntax-keyword">const</span> <span class="syntax-function">johan</span><span class="syntax-punctuation">:</span> <span class="syntax-type">Profile</span> <span class="syntax-operator">=</span> <span class="syntax-bracket">{</span>' },
  { content: '  <span class="syntax-variable">name</span><span class="syntax-punctuation">:</span> <span class="syntax-string">"Johan Garcia"</span><span class="syntax-punctuation">,</span>' },
  { content: '  <span class="syntax-variable">role</span><span class="syntax-punctuation">:</span> <span class="syntax-string">"Integration Engineer"</span><span class="syntax-punctuation">,</span>' },
  { content: '  <span class="syntax-variable">experience</span><span class="syntax-punctuation">:</span> <span class="syntax-number">8</span><span class="syntax-punctuation">,</span>' },
  { content: '  <span class="syntax-variable">stack</span><span class="syntax-punctuation">:</span> <span class="syntax-bracket">[</span><span class="syntax-string">"IBM MQ"</span><span class="syntax-punctuation">,</span> <span class="syntax-string">"Docker"</span><span class="syntax-punctuation">,</span> <span class="syntax-string">"OpenShift"</span><span class="syntax-bracket">]</span><span class="syntax-punctuation">,</span>' },
  { content: '<span class="syntax-bracket">}</span><span class="syntax-punctuation">;</span>' },
];

const techBadges = [
  "IBM MQ", "IIB/ACE", "DataPower", "Docker", "OpenShift",
  "Java", "Python", "COBOL", "CI/CD", "REST APIs",
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
            Integration Engineer with 8+ years of experience designing middleware
            solutions for Tier-1 banks processing over 500K daily transactions.
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

          <div className="flex gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get in Touch
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
            <TypeWriter lines={codeLines} speed={25} startDelay={800} />
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
