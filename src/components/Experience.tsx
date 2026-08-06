"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const jobs = [
  {
    hash: "f9d4e8c",
    branch: "main",
    title: "Independent Builder — AI-Assisted Products",
    company: "Portfolio Products — johangarcia.dev",
    period: "2025 — Present",
    description: [
      "Designed and shipped 4 live web products using AI-assisted development with Claude Code: DFDL Parser, COBOL Copybook Mapper, Docker Compose Gen, and RetoHabitos.",
      "Applied integration-domain expertise to specify and validate developer tools that parse COBOL copybooks (PIC clauses, COMP-3, offsets) and DFDL schemas.",
      "Own the full product lifecycle: requirements, iteration, Vercel deployments, custom domains, transactional email (Resend), and database/auth setup (Supabase).",
    ],
    tags: ["Claude Code", "AI-Assisted Dev", "Vercel", "Supabase", "Resend"],
    stats: { files: 32, insertions: 610, deletions: 95 },
  },
  {
    hash: "a3f7c1d",
    branch: "chore/operations",
    title: "Operations Manager",
    company: "Belen de la Cruz Empanadas & Pastries — Atlanta, GA",
    period: "Nov 2023 — Present",
    description: [
      "Non-technical role held during U.S. relocation; technical skills maintained through independent projects.",
      "Run end-to-end daily operations for 70–150 daily customers — staffing, scheduling, vendor relations and customer experience.",
      "Own P&L accountability: cash reconciliation, weekly sales reporting and cost control.",
    ],
    tags: ["Operations", "P&L", "Process Optimization"],
    stats: { files: 4, insertions: 45, deletions: 8 },
  },
  {
    hash: "9c2b71e",
    branch: "chore/relocation",
    title: "U.S. Relocation — Career Transition",
    company: "Independent — Atlanta, GA",
    period: "Jan 2022 — Nov 2023",
    description: [
      "Relocated from Colombia to the United States and completed the U.S. work authorization process.",
      "Worked independently across construction, hospitality and food production while establishing residency, progressing into a full-time operations management role in Nov 2023.",
    ],
    tags: ["Relocation", "US Work Authorization"],
    stats: { files: 2, insertions: 24, deletions: 5 },
  },
  {
    hash: "b8e2f4a",
    branch: "feature/cloud-native",
    title: "Integration Developer",
    company: "PRAGMA S.A. — Colombia",
    period: "May 2021 — Jan 2022",
    description: [
      "Designed, developed and tuned IBM Integration Bus (IIB v10) message flows in ESQL for high-volume banking transaction processing.",
      "Built and maintained message models (DFDL / XML) and mapping logic across SOAP, REST and JMS interfaces for core banking services.",
      "Containerized IIB integration nodes with Docker and deployed to OpenShift, standardizing dev, QA and production environments.",
      "Implemented CI/CD pipelines in Azure DevOps and GitHub Actions, reducing manual deployment effort and improving release reliability.",
      "Governed services through IBM DataPower and WSRR; validated behavior with unit and regression testing across SOAP, REST and JMS.",
      "Migrated IIB v10 flows toward IBM API Connect, running container deployments on Docker with Jenkins, Azure DevOps and OpenShift.",
    ],
    tags: ["IIB v10", "ESQL", "DFDL", "Docker", "OpenShift", "API Connect"],
    stats: { files: 12, insertions: 230, deletions: 45 },
  },
  {
    hash: "c4d9e7b",
    branch: "feature/enterprise",
    title: "Expert Engineer 3",
    company: "SOPHOS SOLUTIONS S.A.S — Colombia",
    period: "Nov 2019 — May 2021",
    description: [
      "Delivered and maintained IIB (v9/v10) integration solutions for multiple banking clients in parallel, including ESQL flow development, message modeling and production troubleshooting.",
      "Designed and administered IBM MQ queue managers, queue topologies, clusters and channels for reliable asynchronous communication across distributed banking systems.",
      "Exposed and consumed services over SOAP, REST, TCP/IP and JMS, ensuring interoperability across heterogeneous platforms.",
      "Administered IBM DataPower and WSRR, optimizing service lifecycle, policy enforcement and security gateway configuration.",
    ],
    tags: ["IIB v9/v10", "IBM MQ", "MQ Clustering", "DataPower", "WSRR"],
    stats: { files: 18, insertions: 340, deletions: 67 },
  },
  {
    hash: "d1a6c3f",
    branch: "feature/ibm-core",
    title: "Application Programmer",
    company: "IBM — Colombia",
    period: "Feb 2017 — Nov 2019",
    description: [
      "Built IIB (v9/v10) integration services in ESQL for Tier-1 banking environments processing 500K+ daily transactions.",
      "Developed IBM MQ message flows, queues and channel configurations supporting high-availability, low-latency inter-system communication.",
      "Configured and governed services through IBM DataPower and WSRR, enforcing security policies and service contracts.",
      "Mentored junior developers and established integration patterns and coding standards adopted across the team.",
      "Led multidisciplinary teams designing and maintaining complex, enterprise-aligned integration architectures.",
    ],
    tags: ["IIB v9/v10", "ESQL", "IBM MQ", "DataPower", "WSRR", "Team Lead"],
    stats: { files: 24, insertions: 520, deletions: 130 },
  },
  {
    hash: "e5b8d2a",
    branch: "feature/mainframe",
    title: "Software Analyst",
    company: "FASOFTCOL E.U. — Colombia",
    period: "Mar 2014 — Nov 2016",
    description: [
      "Migrated AS/400 applications to COBOL batch processing and designed JCL scripts automating batch job scheduling.",
      "Built ETL pipelines loading flat files (CSV, TXT) into DB2 for reliable reporting workflows.",
    ],
    tags: ["COBOL", "AS/400", "JCL", "DB2", "ETL"],
    stats: { files: 11, insertions: 180, deletions: 42 },
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <AnimateOnScroll>
          <h2 className="font-mono text-green-400 text-sm mb-2">
            $ git log --stat --oneline
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Career History
          </h3>
        </AnimateOnScroll>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <AnimateOnScroll key={job.hash} delay={i * 100}>
              <div className="terminal-window hover:border-green-500/20 transition-colors">
                <div className="terminal-header">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                  <span className="terminal-title">
                    commit {job.hash}
                  </span>
                </div>
                <div className="terminal-body">
                  {/* Git commit header */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="git-hash">{job.hash}</span>
                    <span className="px-2 py-0.5 rounded text-xs font-mono border border-green-500/30 text-green-400 bg-green-500/5">
                      {job.branch}
                    </span>
                    <span className="text-xs font-mono text-dark-100 ml-auto">
                      {job.period}
                    </span>
                  </div>

                  {/* Job title */}
                  <h4 className="text-lg font-semibold text-dark-50">
                    {job.title}
                  </h4>
                  <p className="text-sm text-green-400 font-mono mb-3">
                    {job.company}
                  </p>

                  {/* Description */}
                  <ul className="space-y-1.5 text-sm text-dark-50/80 mb-4">
                    {job.description.map((d, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-green-400 shrink-0">&#9656;</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-dark-400 text-dark-100 border border-dark-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Git stats */}
                  <div className="text-xs font-mono text-dark-100 pt-2 border-t border-dark-300">
                    <span>{job.stats.files} files changed,</span>{" "}
                    <span className="git-stat-add">
                      +{job.stats.insertions}
                    </span>{" "}
                    <span className="git-stat-del">
                      -{job.stats.deletions}
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
