"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const projects = [
  {
    name: "DFDL Parser",
    description:
      "A web-based tool for parsing flat files and BLOBs into structured data using editable DFDL schemas. Supports fixed-length and delimited formats, real-time error detection, and export to JSON or DFDL XML.",
    tags: ["Next.js", "TypeScript", "DFDL", "IBM IIB/ACE", "Parsing"],
    status: "Live",
    url: "/projects/dfdl-parser",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    name: "COBOL Copybook Mapper",
    description:
      "Map COBOL flat file records against a copybook. Parses PIC clauses (X, 9, COMP-3, BINARY), calculates field offsets, and visualizes every byte color-coded. Edit the copybook inline — add, move, delete fields or FILLERs — and download the modified copy.",
    tags: ["Next.js", "TypeScript", "COBOL", "IBM IIB/ACE", "Parsing"],
    status: "Live",
    url: "/projects/cobol-mapper",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
    ),
  },
  {
    name: "Docker Compose Gen",
    description:
      "Visual generator for docker-compose.yml files. Select from 19 pre-configured services (databases, cache, messaging, monitoring), configure ports, volumes and env vars, then export your compose file instantly.",
    tags: ["Next.js", "TypeScript", "Docker", "DevTools"],
    status: "Live",
    url: "/projects/docker-compose-gen",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
  {
    name: "ContractLens AI",
    description:
      "A free AI-powered tool that analyzes PDF documents — especially contracts — and explains to users in plain language what they are agreeing to, highlighting potential risks and key clauses.",
    tags: ["Python", "AI/ML", "PDF Processing", "NLP", "Next.js"],
    status: "Planned",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <AnimateOnScroll>
          <h2 className="font-mono text-green-400 text-sm mb-2">
            $ ls -la ~/projects
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h3>
          <p className="text-dark-100 mb-12 max-w-2xl">
            Ideas and tools I am building to solve real-world problems.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.name} delay={i * 100}>
              {"url" in project && project.url ? (
                <a
                  href={project.url as string}
                  {...(!(project.url as string).startsWith("/") && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="block terminal-window h-full hover:border-green-500/30 transition-all group cursor-pointer"
                >
                  <div className="terminal-header">
                    <span className="terminal-dot red" />
                    <span className="terminal-dot yellow" />
                    <span className="terminal-dot green" />
                    <span className="terminal-title">
                      {project.name.toLowerCase().replace(/\s/g, "-")}
                    </span>
                  </div>
                  <div className="terminal-body flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-green-400 shrink-0 mt-0.5">
                        {project.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold text-dark-50 group-hover:text-green-400 transition-colors">
                          {project.name}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono mt-1 border border-green-500/30 text-green-400 bg-green-500/5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-pulse" />
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-dark-50/80 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-300">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-dark-400 text-dark-100 border border-dark-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ) : (
                <div className="terminal-window h-full hover:border-green-500/30 transition-all group">
                  <div className="terminal-header">
                    <span className="terminal-dot red" />
                    <span className="terminal-dot yellow" />
                    <span className="terminal-dot green" />
                    <span className="terminal-title">
                      {project.name.toLowerCase().replace(/\s/g, "-")}
                    </span>
                  </div>
                  <div className="terminal-body flex flex-col h-full">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-green-400 shrink-0 mt-0.5">
                        {project.icon}
                      </span>
                      <div>
                        <h4 className="font-semibold text-dark-50 group-hover:text-green-400 transition-colors">
                          {project.name}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono mt-1 border border-green-500/30 text-green-400 bg-green-500/5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 status-pulse" />
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-dark-50/80 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-300">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-mono bg-dark-400 text-dark-100 border border-dark-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </AnimateOnScroll>
          ))}

          {/* Coming soon card */}
          <AnimateOnScroll delay={200}>
            <div className="rounded-lg border border-dashed border-dark-300 h-full flex items-center justify-center p-8 min-h-[250px]">
              <div className="text-center">
                <p className="font-mono text-dark-100 text-sm mb-2">
                  {`// more projects loading...`}
                </p>
                <p className="text-xs text-dark-200">Coming soon</p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
