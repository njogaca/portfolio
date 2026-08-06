"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import AnimateOnScroll from "./AnimateOnScroll";

const SkillsCanvas = dynamic(() => import("./SkillsCanvas"), { ssr: false });

const skillCategories = [
  {
    level: "Integration & Middleware",
    skills: [
      "IBM MQ",
      "IBM Integration Bus (v9/v10)",
      "IBM App Connect Enterprise",
      "IBM DataPower",
      "IBM WSRR",
      "IBM API Connect",
    ],
  },
  {
    level: "Messaging & Services",
    skills: [
      "ESQL",
      "MQSC / Message Flows",
      "DFDL & XML Message Models",
      "SOAP · REST · JMS",
      "XSLT / JSON",
      "MQ Clustering, Channels, SSL/TLS",
    ],
  },
  {
    level: "Platforms & Cloud",
    skills: ["Docker", "OpenShift", "Kubernetes", "AWS", "Linux"],
  },
  {
    level: "CI/CD & Tooling",
    skills: ["Azure DevOps", "Jenkins", "GitHub Actions", "Git"],
  },
  {
    level: "Languages & Data",
    skills: ["Java", "Python", "COBOL", "SQL", "DB2"],
  },
  {
    level: "AI-Assisted Delivery",
    skills: ["Claude Code", "Next.js", "Vercel", "Supabase", "Resend"],
  },
];

const credentials = [
  {
    title: "AWS Certified Solutions Architect — Associate (SAA-C03)",
    org: "Amazon Web Services",
    period: "In progress — 2026",
    state: "in_progress",
  },
  {
    title: "AWS Technical Professional",
    org: "Amazon Web Services",
    period: "2021",
    state: "done",
  },
  {
    title: "B.Sc. Software Engineering",
    org: "Universidad Central de Colombia — Bogotá",
    period: "2011 — 2018",
    state: "done",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
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
                skills_constellation.exe — hover to explore
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <AnimateOnScroll key={cat.level} delay={200 + i * 100}>
              <div className="h-full p-5 rounded-lg border border-dark-300 bg-dark-500/50 hover:border-green-500/20 transition-colors">
                <h4 className="font-mono text-green-400 text-sm mb-4">
                  {`// ${cat.level}`}
                </h4>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-dark-50/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Education & certifications */}
        <AnimateOnScroll delay={300}>
          <div className="terminal-window mt-10">
            <div className="terminal-header">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">certifications.log</span>
            </div>
            <div className="terminal-body divide-y divide-dark-300">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 py-3 first:pt-0 last:pb-0"
                >
                  <span className="text-green-400 shrink-0">
                    {c.state === "done" ? "✔" : "▸"}
                  </span>
                  <div className="flex-1 min-w-[12rem]">
                    <p className="text-sm text-dark-50">{c.title}</p>
                    <p className="text-xs font-mono text-dark-100">{c.org}</p>
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded ${
                      c.state === "done"
                        ? "text-dark-100 bg-dark-400 border border-dark-300"
                        : "text-green-400 bg-green-500/10 border border-green-500/30"
                    }`}
                  >
                    {c.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
