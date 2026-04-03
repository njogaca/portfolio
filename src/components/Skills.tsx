"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import AnimateOnScroll from "./AnimateOnScroll";

const SkillsCanvas = dynamic(() => import("./SkillsCanvas"), { ssr: false });

const skillCategories = [
  {
    level: "Expert",
    skills: [
      "IBM WebSphere MQ",
      "IBM Integration Bus (IIB)",
      "WebSphere Service Registry (WSRR)",
      "IBM DataPower Gateway",
    ],
  },
  {
    level: "Proficient",
    skills: ["Java", "SQL", "COBOL", "Git"],
  },
  {
    level: "Working Knowledge",
    skills: ["Python", "Docker", "Kubernetes", "OpenShift", "Linux"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <AnimateOnScroll>
          <h2 className="font-mono text-green-400 text-sm mb-2">
            # Skills.json
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Tech Universe
          </h3>
        </AnimateOnScroll>

        {/* 3D Canvas */}
        <AnimateOnScroll delay={100}>
          <div className="terminal-window mb-10">
            <div className="terminal-header">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">
                skills_universe.exe — drag to explore
              </span>
            </div>
            <div className="h-[400px] md:h-[500px] relative">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-full text-dark-100 font-mono text-sm">
                    Loading universe...
                  </div>
                }
              >
                <SkillsCanvas />
              </Suspense>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Skill grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <AnimateOnScroll key={cat.level} delay={200 + i * 100}>
              <div className="p-5 rounded-lg border border-dark-300 bg-dark-500/50 hover:border-green-500/20 transition-colors">
                <h4 className="font-mono text-green-400 text-sm mb-4">
                  {`// ${cat.level}`}
                </h4>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-dark-50/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
