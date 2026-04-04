"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
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
                  <a
                    href="https://wa.me/19546756464"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg border border-dark-300 hover:border-green-500/50 hover:text-green-400 text-dark-100 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
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
                      disabled={status === "sending"}
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
                      disabled={status === "sending"}
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
                      disabled={status === "sending"}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-sm font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
                        Executing...
                      </>
                    ) : (
                      <>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                        Run Script
                      </>
                    )}
                  </button>

                  {status === "success" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-green-500/30 bg-green-500/5 font-mono text-xs text-green-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      &#x2714; Script executed successfully. Message delivered.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center gap-2 p-3 rounded-lg border border-red-500/30 bg-red-500/5 font-mono text-xs text-red-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                      Error: Failed to send message. Please try again.
                    </div>
                  )}
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

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/19546756464"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 lg:bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center shadow-lg hover:scale-110 transition-all"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </section>
  );
}
