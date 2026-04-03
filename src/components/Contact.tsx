"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:jfgc1394@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <AnimateOnScroll>
          <h2 className="font-mono text-green-400 text-sm mb-2">
            $ ./contact.sh
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Get in Touch
          </h3>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <AnimateOnScroll delay={100}>
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">contact_info.json</span>
              </div>
              <div className="terminal-body">
                <div className="font-mono text-sm space-y-1">
                  <p>
                    <span className="syntax-bracket">{"{"}</span>
                  </p>
                  <p className="pl-4">
                    <span className="syntax-variable">&quot;email&quot;</span>
                    <span className="syntax-punctuation">: </span>
                    <a
                      href="mailto:jfgc1394@gmail.com"
                      className="syntax-string hover:underline"
                    >
                      &quot;jfgc1394@gmail.com&quot;
                    </a>
                    <span className="syntax-punctuation">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="syntax-variable">&quot;phone&quot;</span>
                    <span className="syntax-punctuation">: </span>
                    <a
                      href="tel:+19546756464"
                      className="syntax-string hover:underline"
                    >
                      &quot;(+1) 954-675-6464&quot;
                    </a>
                    <span className="syntax-punctuation">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="syntax-variable">&quot;location&quot;</span>
                    <span className="syntax-punctuation">: </span>
                    <span className="syntax-string">
                      &quot;Atlanta Metro Area, GA&quot;
                    </span>
                    <span className="syntax-punctuation">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="syntax-variable">&quot;linkedin&quot;</span>
                    <span className="syntax-punctuation">: </span>
                    <a
                      href="https://www.linkedin.com/in/njogaca/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="syntax-string hover:underline"
                    >
                      &quot;linkedin.com/in/njogaca&quot;
                    </a>
                    <span className="syntax-punctuation">,</span>
                  </p>
                  <p className="pl-4">
                    <span className="syntax-variable">&quot;github&quot;</span>
                    <span className="syntax-punctuation">: </span>
                    <a
                      href="https://github.com/njogaca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="syntax-string hover:underline"
                    >
                      &quot;github.com/njogaca&quot;
                    </a>
                  </p>
                  <p>
                    <span className="syntax-bracket">{"}"}</span>
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-dark-300">
                  <p className="text-sm text-dark-50/80">
                    I am open to new opportunities in integration engineering
                    and cloud-native development. I welcome the opportunity to
                    connect and discuss how my experience can contribute to your
                    team.
                  </p>
                </div>

                <div className="flex gap-4 mt-6">
                  <a
                    href="https://www.linkedin.com/in/njogaca/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-dark-300 hover:border-green-500/50 hover:text-green-400 text-dark-100 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a
                    href="https://github.com/njogaca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-dark-300 hover:border-green-500/50 hover:text-green-400 text-dark-100 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Contact form as code */}
          <AnimateOnScroll delay={200}>
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">sendMessage.ts</span>
              </div>
              <div className="terminal-body">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="font-mono text-sm">
                    <span className="syntax-comment">
                      {`// Fill in the fields and run the script`}
                    </span>
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-dark-100 mb-1.5">
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-variable">name</span>{" "}
                      <span className="syntax-operator">=</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-dark-600 border border-dark-300 text-dark-50 font-mono text-sm placeholder-dark-200 focus:outline-none focus:border-green-500/50 transition-colors"
                      placeholder='"Your name"'
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-dark-100 mb-1.5">
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-variable">email</span>{" "}
                      <span className="syntax-operator">=</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg bg-dark-600 border border-dark-300 text-dark-50 font-mono text-sm placeholder-dark-200 focus:outline-none focus:border-green-500/50 transition-colors"
                      placeholder='"your@email.com"'
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-dark-100 mb-1.5">
                      <span className="syntax-keyword">const</span>{" "}
                      <span className="syntax-variable">message</span>{" "}
                      <span className="syntax-operator">=</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-lg bg-dark-600 border border-dark-300 text-dark-50 font-mono text-sm placeholder-dark-200 focus:outline-none focus:border-green-500/50 transition-colors resize-none"
                      placeholder='`Your message here...`'
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-mono text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    Run Script
                  </button>
                </form>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-dark-300 text-center">
          <p className="font-mono text-xs text-dark-100">
            &copy; 2026 Johan Fernando Garcia Casas &nbsp;|&nbsp; Powered by{" "}
            <a
              href="https://claude.ai/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Claude Code
            </a>
          </p>
          <p className="font-mono text-xs text-dark-200 mt-2">
            {`while(alive) { code(); }`}
          </p>
        </div>
      </div>
    </section>
  );
}
