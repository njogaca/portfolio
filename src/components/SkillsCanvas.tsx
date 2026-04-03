"use client";

import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  icon: string;
  color: string;
  size: number;
}

const skills: Skill[] = [
  { name: "IBM MQ", icon: "MQ", color: "#054ADA", size: 52 },
  { name: "IIB", icon: "IIB", color: "#054ADA", size: 48 },
  { name: "ACE", icon: "ACE", color: "#054ADA", size: 44 },
  { name: "DataPower", icon: "DP", color: "#054ADA", size: 46 },
  { name: "WSRR", icon: "SR", color: "#054ADA", size: 40 },
  { name: "Java", icon: "☕", color: "#ED8B00", size: 48 },
  { name: "Python", icon: "🐍", color: "#3776AB", size: 50 },
  { name: "SQL", icon: "SQL", color: "#336791", size: 42 },
  { name: "COBOL", icon: "CB", color: "#005CA5", size: 40 },
  { name: "Docker", icon: "🐳", color: "#2496ED", size: 50 },
  { name: "Kubernetes", icon: "K8s", color: "#326CE5", size: 44 },
  { name: "OpenShift", icon: "OS", color: "#EE0000", size: 44 },
  { name: "Linux", icon: "🐧", color: "#FCC624", size: 48 },
  { name: "Git", icon: "Git", color: "#F05032", size: 42 },
  { name: "REST", icon: "API", color: "#3d8b5e", size: 40 },
  { name: "SOAP", icon: "XML", color: "#7B68EE", size: 38 },
  { name: "CI/CD", icon: "⚙️", color: "#3d8b5e", size: 44 },
  { name: "Azure DevOps", icon: "Az", color: "#0078D4", size: 42 },
  { name: "DB2", icon: "DB", color: "#054ADA", size: 40 },
  { name: "Claude", icon: "✦", color: "#D4A574", size: 46 },
];

function getPositionsOnSphere(count: number, radius: number) {
  const positions: { x: number; y: number; z: number }[] = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(-1 + (2 * i + 1) / count);
    const theta = Math.sqrt(count * Math.PI) * phi;
    positions.push({
      x: radius * Math.cos(theta) * Math.sin(phi),
      y: radius * Math.sin(theta) * Math.sin(phi),
      z: radius * Math.cos(phi),
    });
  }
  return positions;
}

export default function SkillsCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotationRef = useRef({ x: -15, y: 0 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);
  const [, setTick] = useState(0);

  const radius = 220;
  const positions = getPositionsOnSphere(skills.length, radius);

  useEffect(() => {
    let autoRotate = true;

    const animate = () => {
      if (autoRotate && !isDragging.current) {
        rotationRef.current.y += 0.15;
      }
      setTick((t) => t + 1);
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      autoRotate = false;
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - lastMouse.current.x;
      const dy = e.clientY - lastMouse.current.y;
      rotationRef.current.y += dx * 0.4;
      rotationRef.current.x += dy * 0.4;
      rotationRef.current.x = Math.max(-60, Math.min(60, rotationRef.current.x));
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseUp = () => {
      isDragging.current = false;
      setTimeout(() => { autoRotate = true; }, 2000);
    };

    const handleTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      autoRotate = false;
      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const dx = e.touches[0].clientX - lastMouse.current.x;
      const dy = e.touches[0].clientY - lastMouse.current.y;
      rotationRef.current.y += dx * 0.4;
      rotationRef.current.x += dy * 0.4;
      rotationRef.current.x = Math.max(-60, Math.min(60, rotationRef.current.x));
      lastMouse.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchEnd = () => {
      isDragging.current = false;
      setTimeout(() => { autoRotate = true; }, 2000);
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      el.addEventListener("touchstart", handleTouchStart, { passive: true });
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      if (el) {
        el.removeEventListener("mousedown", handleMouseDown);
        el.removeEventListener("touchstart", handleTouchStart);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const rotX = (rotationRef.current.x * Math.PI) / 180;
  const rotY = (rotationRef.current.y * Math.PI) / 180;

  const transformed = positions.map((pos) => {
    // Rotate Y
    let x = pos.x * Math.cos(rotY) + pos.z * Math.sin(rotY);
    let z = -pos.x * Math.sin(rotY) + pos.z * Math.cos(rotY);
    let y = pos.y;
    // Rotate X
    const y2 = y * Math.cos(rotX) - z * Math.sin(rotX);
    const z2 = y * Math.sin(rotX) + z * Math.cos(rotX);
    return { x, y: y2, z: z2 };
  });

  // Generate wireframe edges for icosahedron
  const wireframeRadius = radius * 0.72;
  const wireframePoints = generateIcosahedronVertices(wireframeRadius);
  const wireframeEdges = generateIcosahedronEdges();

  const transformedWireframe = wireframePoints.map((pos) => {
    let x = pos.x * Math.cos(rotY) + pos.z * Math.sin(rotY);
    let z = -pos.x * Math.sin(rotY) + pos.z * Math.cos(rotY);
    let y = pos.y;
    const y2 = y * Math.cos(rotX) - z * Math.sin(rotX);
    const z2 = y * Math.sin(rotX) + z * Math.cos(rotX);
    return { x, y: y2, z: z2 };
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full cursor-grab active:cursor-grabbing select-none overflow-hidden"
      style={{ perspective: "800px" }}
    >
      {/* Wireframe sphere */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-300 -300 600 600"
      >
        {wireframeEdges.map(([a, b], i) => {
          const pA = transformedWireframe[a];
          const pB = transformedWireframe[b];
          const avgZ = (pA.z + pB.z) / 2;
          const opacity = 0.08 + 0.15 * ((avgZ + wireframeRadius) / (2 * wireframeRadius));
          return (
            <line
              key={i}
              x1={pA.x}
              y1={pA.y}
              x2={pB.x}
              y2={pB.y}
              stroke="#3d8b5e"
              strokeWidth={0.8}
              opacity={opacity}
            />
          );
        })}
      </svg>

      {/* Skill nodes */}
      {skills.map((skill, i) => {
        const pos = transformed[i];
        const depthScale = (pos.z + radius) / (2 * radius);
        const scale = 0.5 + depthScale * 0.6;
        const opacity = 0.3 + depthScale * 0.7;
        const zIndex = Math.round(depthScale * 100);

        return (
          <div
            key={skill.name}
            className="absolute flex flex-col items-center gap-1 pointer-events-none"
            style={{
              left: `calc(50% + ${pos.x}px)`,
              top: `calc(50% + ${pos.y}px)`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              zIndex,
              transition: "none",
            }}
          >
            <div
              className="flex items-center justify-center rounded-xl shadow-lg font-bold"
              style={{
                width: skill.size,
                height: skill.size,
                backgroundColor: skill.color + "20",
                border: `1.5px solid ${skill.color}50`,
                color: skill.color,
                fontSize: skill.icon.length > 2 ? "0.65rem" : "1.3rem",
                fontFamily: skill.icon.length > 2 ? "var(--font-mono)" : undefined,
              }}
            >
              {skill.icon}
            </div>
            <span
              className="text-xs font-mono whitespace-nowrap"
              style={{ color: "#7a9982" }}
            >
              {skill.name}
            </span>
          </div>
        );
      })}

      {/* Center label */}
      <div className="absolute inset-0 flex items-end justify-center pb-4 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-300 bg-dark-500/80 backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7a9982" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
          <span className="text-xs font-mono text-dark-100">
            Drag to explore skills universe
          </span>
        </div>
      </div>
    </div>
  );
}

function generateIcosahedronVertices(radius: number) {
  const t = (1 + Math.sqrt(5)) / 2;
  const s = radius / Math.sqrt(1 + t * t);
  const raw = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ];
  // Subdivide for denser wireframe
  const vertices = raw.map(([x, y, z]) => ({ x: x * s, y: y * s, z: z * s }));
  return vertices;
}

function generateIcosahedronEdges(): [number, number][] {
  return [
    [0, 11], [0, 5], [0, 1], [0, 7], [0, 10],
    [1, 5], [1, 9], [1, 8], [1, 7],
    [2, 3], [2, 4], [2, 11], [2, 10], [2, 6],
    [3, 4], [3, 9], [3, 8], [3, 6],
    [4, 5], [4, 9], [4, 11],
    [5, 9], [5, 11],
    [6, 7], [6, 8], [6, 10],
    [7, 8], [7, 10],
    [8, 9],
    [10, 11],
  ];
}
