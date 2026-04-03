"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const jobs = [
  {
    hash: "a3f7c1d",
    branch: "main",
    title: "Operations Manager",
    company: "Belen de la Cruz Empanadas and Pastries",
    period: "Nov 2023 — Present",
    description: [
      "Led process optimization initiatives for a food service business, applying data-driven inventory management and supply chain improvements.",
      "Managed daily operations during U.S. relocation transition.",
    ],
    tags: ["Operations", "Management", "Process Optimization"],
    stats: { files: 4, insertions: 45, deletions: 8 },
  },
  {
    hash: "b8e2f4a",
    branch: "feature/cloud-native",
    title: "Integration Developer",
    company: "PRAGMA S.A.",
    period: "May 2021 — Jan 2022",
    description: [
      "Strategically developed and migrated services from IBM Integration Bus (IIB v10) to IBM App Connect Enterprise (ACE).",
      "Extensive use of Docker for containerization and OpenShift for cloud-based deployment.",
      "Implemented CI/CD pipelines using Azure DevOps and GitHub.",
      "Managed and configured IBM DataPower and WSRR Registry for efficient service exposure.",
    ],
    tags: ["IIB", "ACE", "Docker", "OpenShift", "Azure DevOps"],
    stats: { files: 12, insertions: 230, deletions: 45 },
  },
  {
    hash: "c4d9e7b",
    branch: "feature/enterprise",
    title: "Expert Engineer 3",
    company: "SOPHOS SOLUTIONS S.A.S",
    period: "Nov 2019 — May 2021",
    description: [
      "Developed integration solutions using IBM Integration Bus (IIB) versions 9 and 10.",
      "Managed and configured IBM MQ for robust inter-service communication.",
      "Implemented services utilizing SOAP, REST, TCP/IP, and JMS protocols.",
      "Administered IBM DataPower and WSRR Registry to optimize service lifecycle management.",
    ],
    tags: ["IIB", "IBM MQ", "DataPower", "SOAP", "REST"],
    stats: { files: 18, insertions: 340, deletions: 67 },
  },
  {
    hash: "d1a6c3f",
    branch: "feature/ibm-core",
    title: "Application Programmer",
    company: "IBM",
    period: "Feb 2017 — Nov 2019",
    description: [
      "Advanced design and development of integration services using IBM Integration Bus (IIB) versions 9 and 10.",
      "Effective implementation of MQ queues and exposure of services via SOAP, REST, TCP/IP, and JMS.",
      "Trained and mentored junior developers, facilitating effective knowledge transfer.",
      "Led multidisciplinary teams in complex integration projects.",
      "Designed integration architectures aligned with industry best practices.",
    ],
    tags: ["IIB", "IBM MQ", "DataPower", "WSRR", "Team Lead"],
    stats: { files: 24, insertions: 520, deletions: 130 },
  },
  {
    hash: "e5b8d2a",
    branch: "feature/mainframe",
    title: "Software Analyst",
    company: "FASOFTCOL E.U",
    period: "Mar 2014 — Nov 2016",
    description: [
      "Developed and maintained COBOL applications, migrating systems from AS400 to COBOL Batch.",
      "Designed and executed JCL scripts for batch processes, optimizing automation.",
      "Developed ETL processes for mass loading of flat files into DB2 databases.",
      "Provided technical support during installation and validation in QA and production environments.",
    ],
    tags: ["COBOL", "AS400", "JCL", "DB2", "ETL"],
    stats: { files: 11, insertions: 180, deletions: 42 },
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center py-24">
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
