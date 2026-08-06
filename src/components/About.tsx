"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "500K+", label: "Daily Transactions" },
  { value: "Tier-1", label: "Banking Clients" },
  { value: "4", label: "Live Products" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <AnimateOnScroll>
          <h2 className="font-mono text-green-400 text-sm mb-2">
            # About.system
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            System Profile
          </h3>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Terminal card */}
          <AnimateOnScroll delay={100}>
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
                <span className="terminal-title">user_profile.log</span>
              </div>
              <div className="terminal-body space-y-4 text-sm text-dark-50/90">
                <div className="flex items-center gap-3 pb-3 border-b border-dark-300">
                  <div>
                    <p className="font-mono text-green-400 text-xs">
                      OPERATOR
                    </p>
                    <p className="font-semibold text-lg">
                      Johan Fernando Garcia Casas
                    </p>
                    <p className="text-dark-100 text-sm">
                      Integration Engineer
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono pb-3 border-b border-dark-300">
                  <div>
                    <span className="text-dark-100">location:</span>
                    <span className="text-green-400 ml-1">Atlanta, GA</span>
                  </div>
                  <div>
                    <span className="text-dark-100">origin:</span>
                    <span className="text-green-400 ml-1">Colombia</span>
                  </div>
                  <div>
                    <span className="text-dark-100">status:</span>
                    <span className="text-green-400 ml-1">OPEN</span>
                  </div>
                  <div>
                    <span className="text-dark-100">auth:</span>
                    <span className="text-green-400 ml-1">
                      US — no sponsorship
                    </span>
                  </div>
                </div>

                <div>
                  <p className="font-mono text-dark-100 text-xs mb-2">
                    $ cat mission.txt
                  </p>
                  <p className="leading-relaxed">
                    My career began in Colombia with COBOL mainframes and AS/400
                    migrations — foundational work on mission-critical systems
                    where reliability is non-negotiable.
                  </p>
                  <p className="leading-relaxed mt-3">
                    I moved into IBM middleware and spent 8+ years building and
                    operating enterprise integration on IIB (v9/v10) and IBM MQ
                    for Tier-1 banking environments processing 500K+ daily
                    transactions — ESQL message flows, DFDL/XML message models,
                    queue manager administration, clustering and channel
                    security, and service governance through DataPower and WSRR.
                  </p>
                  <p className="leading-relaxed mt-3">
                    Now based in Atlanta, I pair that enterprise background with
                    cloud-native delivery: IIB workloads containerized on Docker
                    and OpenShift, CI/CD in Azure DevOps, Jenkins and GitHub
                    Actions, and my AWS Solutions Architect — Associate
                    certification in progress.
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Stats + languages */}
          <div className="space-y-6">
            <AnimateOnScroll delay={200}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-lg border border-dark-300 bg-dark-500/50 hover:border-green-500/30 hover:bg-dark-400/50 transition-all group"
                  >
                    <p className="text-2xl font-bold gradient-text group-hover:scale-105 transition-transform">
                      {stat.value}
                    </p>
                    <p className="text-xs font-mono text-dark-100 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300}>
              <div className="terminal-window">
                <div className="terminal-header">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                  <span className="terminal-title">languages.config</span>
                </div>
                <div className="terminal-body space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 900 600" width="24" height="16" className="rounded-sm shadow-sm">
                        <rect width="900" height="300" fill="#FCD116"/>
                        <rect y="300" width="900" height="150" fill="#003893"/>
                        <rect y="450" width="900" height="150" fill="#CE1126"/>
                      </svg>
                      <span className="text-sm">Spanish</span>
                    </div>
                    <span className="text-xs font-mono text-green-400 px-2 py-0.5 rounded bg-green-500/10">
                      Native
                    </span>
                  </div>
                  <div className="border-t border-dark-300" />
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg viewBox="0 0 900 600" width="24" height="16" className="rounded-sm shadow-sm">
                        <rect width="900" height="600" fill="#fff"/>
                        <rect width="900" height="46.15" fill="#B22234"/>
                        <rect y="92.3" width="900" height="46.15" fill="#B22234"/>
                        <rect y="184.6" width="900" height="46.15" fill="#B22234"/>
                        <rect y="276.9" width="900" height="46.15" fill="#B22234"/>
                        <rect y="369.2" width="900" height="46.15" fill="#B22234"/>
                        <rect y="461.5" width="900" height="46.15" fill="#B22234"/>
                        <rect y="553.8" width="900" height="46.15" fill="#B22234"/>
                        <rect width="364" height="323" fill="#3C3B6E"/>
                      </svg>
                      <span className="text-sm">English</span>
                    </div>
                    <span className="text-xs font-mono text-green-400 px-2 py-0.5 rounded bg-green-500/10">
                      Professional
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={400}>
              <div className="p-4 rounded-lg border border-dark-300 bg-dark-500/50">
                <p className="font-mono text-xs text-dark-100 mb-2">
                  $ cat core_strengths.md
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "ESQL message flow development",
                    "IBM MQ administration & clustering",
                    "DFDL / XML message modeling",
                    "Service governance (DataPower, WSRR)",
                    "Cloud-native containerization",
                    "CI/CD pipeline automation",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-green-400">&#9656;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
