"use client";

import { useEffect, useRef, useCallback } from "react";

interface SkillNode {
  name: string;
  icon: string;
  color: string;
  category: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  glowIntensity: number;
  targetGlow: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
}

const skillData = [
  // IBM Core - cluster left-center
  { name: "IBM MQ", icon: "MQ", color: "#4a90d9", category: "ibm" },
  { name: "IIB", icon: "IIB", color: "#4a90d9", category: "ibm" },
  { name: "ACE", icon: "ACE", color: "#4a90d9", category: "ibm" },
  { name: "DataPower", icon: "DP", color: "#4a90d9", category: "ibm" },
  { name: "WSRR", icon: "SR", color: "#4a90d9", category: "ibm" },
  // Languages - cluster top-right
  { name: "Java", icon: "☕", color: "#ED8B00", category: "lang" },
  { name: "Python", icon: "🐍", color: "#3776AB", category: "lang" },
  { name: "SQL", icon: "SQL", color: "#336791", category: "lang" },
  { name: "COBOL", icon: "CB", color: "#5B9BD5", category: "lang" },
  // Cloud & DevOps - cluster bottom-right
  { name: "Docker", icon: "🐳", color: "#2496ED", category: "cloud" },
  { name: "Kubernetes", icon: "K8s", color: "#326CE5", category: "cloud" },
  { name: "OpenShift", icon: "OS", color: "#EE4444", category: "cloud" },
  { name: "Linux", icon: "🐧", color: "#E8C840", category: "cloud" },
  { name: "CI/CD", icon: "⚙️", color: "#4ade80", category: "cloud" },
  { name: "Azure DevOps", icon: "Az", color: "#0078D4", category: "cloud" },
  // Protocols & Data
  { name: "REST", icon: "API", color: "#4ade80", category: "proto" },
  { name: "SOAP", icon: "XML", color: "#9B7ED8", category: "proto" },
  { name: "Git", icon: "Git", color: "#F05032", category: "proto" },
  { name: "DB2", icon: "DB", color: "#4a90d9", category: "proto" },
  { name: "Claude", icon: "✦", color: "#D4A574", category: "proto" },
];

// Define connections between related skills
const connectionDefs: [string, string, number][] = [
  // IBM cluster
  ["IBM MQ", "IIB", 1], ["IIB", "ACE", 1], ["ACE", "DataPower", 0.7],
  ["DataPower", "WSRR", 0.7], ["IBM MQ", "ACE", 0.6], ["IIB", "WSRR", 0.5],
  ["IBM MQ", "DataPower", 0.5],
  // Languages
  ["Java", "Python", 0.5], ["Java", "SQL", 0.6], ["Python", "SQL", 0.5],
  ["COBOL", "SQL", 0.4],
  // Cloud cluster
  ["Docker", "Kubernetes", 0.9], ["Kubernetes", "OpenShift", 0.9],
  ["Docker", "OpenShift", 0.7], ["Docker", "Linux", 0.6],
  ["CI/CD", "Azure DevOps", 0.8], ["Docker", "CI/CD", 0.6],
  ["Kubernetes", "CI/CD", 0.5],
  // Cross-cluster
  ["Java", "IIB", 0.7], ["Java", "ACE", 0.6],
  ["IIB", "Docker", 0.4], ["ACE", "Docker", 0.5],
  ["ACE", "OpenShift", 0.5],
  ["REST", "DataPower", 0.6], ["SOAP", "IIB", 0.6], ["SOAP", "DataPower", 0.5],
  ["REST", "ACE", 0.5],
  ["DB2", "SQL", 0.7], ["DB2", "COBOL", 0.5], ["DB2", "IBM MQ", 0.4],
  ["Git", "CI/CD", 0.6], ["Git", "Azure DevOps", 0.5],
  ["Python", "Claude", 0.6], ["REST", "Claude", 0.4],
  ["Linux", "CI/CD", 0.4],
];

export default function SkillsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<SkillNode[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const hoveredRef = useRef<number>(-1);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);

  const initNodes = useCallback((w: number, h: number) => {
    const clusterCenters: Record<string, { x: number; y: number }> = {
      ibm: { x: w * 0.25, y: h * 0.45 },
      lang: { x: w * 0.7, y: h * 0.25 },
      cloud: { x: w * 0.7, y: h * 0.7 },
      proto: { x: w * 0.35, y: h * 0.75 },
    };

    const nodes: SkillNode[] = skillData.map((skill, i) => {
      const center = clusterCenters[skill.category];
      const angle = (i * 2.39996) + Math.random() * 0.5;
      const dist = 40 + Math.random() * 60;
      return {
        ...skill,
        x: center.x + Math.cos(angle) * dist,
        y: center.y + Math.sin(angle) * dist,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: skill.icon.length <= 2 ? 26 : 22,
        baseRadius: skill.icon.length <= 2 ? 26 : 22,
        glowIntensity: 0,
        targetGlow: 0,
      };
    });

    const connections: Connection[] = [];
    connectionDefs.forEach(([fromName, toName, strength]) => {
      const fromIdx = skillData.findIndex((s) => s.name === fromName);
      const toIdx = skillData.findIndex((s) => s.name === toName);
      if (fromIdx >= 0 && toIdx >= 0) {
        connections.push({ from: fromIdx, to: toIdx, strength });
      }
    });

    nodesRef.current = nodes;
    connectionsRef.current = connections;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (nodesRef.current.length === 0) {
        initNodes(w, h);
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    };

    const handleTouchEnd = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd);

    const animate = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const nodes = nodesRef.current;
      const connections = connectionsRef.current;
      const mouse = mouseRef.current;
      timeRef.current += 0.016;
      const time = timeRef.current;

      // Find hovered node
      hoveredRef.current = -1;
      for (let i = 0; i < nodes.length; i++) {
        const dx = mouse.x - nodes[i].x;
        const dy = mouse.y - nodes[i].y;
        if (Math.sqrt(dx * dx + dy * dy) < nodes[i].radius + 10) {
          hoveredRef.current = i;
          break;
        }
      }

      // Update glow targets
      const hovered = hoveredRef.current;
      const connectedToHovered = new Set<number>();
      if (hovered >= 0) {
        connectedToHovered.add(hovered);
        connections.forEach((c) => {
          if (c.from === hovered) connectedToHovered.add(c.to);
          if (c.to === hovered) connectedToHovered.add(c.from);
        });
      }

      // Physics: gentle floating + soft repulsion
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Gentle floating motion
        node.vx += Math.sin(time * 0.5 + i * 1.7) * 0.008;
        node.vy += Math.cos(time * 0.4 + i * 2.3) * 0.008;

        // Soft repulsion between nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = node.radius + other.radius + 30;
          if (dist < minDist && dist > 0) {
            const force = (minDist - dist) * 0.003;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            node.vx -= fx;
            node.vy -= fy;
            other.vx += fx;
            other.vy += fy;
          }
        }

        // Connection springs (gentle pull toward connected nodes)
        connections.forEach((c) => {
          if (c.from !== i && c.to !== i) return;
          const otherIdx = c.from === i ? c.to : c.from;
          const other = nodes[otherIdx];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const idealDist = 120 + (1 - c.strength) * 80;
          if (dist > idealDist) {
            const pull = (dist - idealDist) * 0.0003 * c.strength;
            node.vx += (dx / dist) * pull;
            node.vy += (dy / dist) * pull;
          }
        });

        // Keep in bounds
        const margin = 40;
        if (node.x < margin) node.vx += 0.05;
        if (node.x > w - margin) node.vx -= 0.05;
        if (node.y < margin) node.vy += 0.05;
        if (node.y > h - margin) node.vy -= 0.05;

        // Damping
        node.vx *= 0.97;
        node.vy *= 0.97;

        node.x += node.vx;
        node.y += node.vy;

        // Glow animation
        node.targetGlow = hovered < 0 ? 0.15 : connectedToHovered.has(i) ? 1 : 0.05;
        node.glowIntensity += (node.targetGlow - node.glowIntensity) * 0.08;

        // Radius pulse on hover
        const targetRadius = connectedToHovered.has(i)
          ? node.baseRadius * 1.15
          : node.baseRadius;
        node.radius += (targetRadius - node.radius) * 0.1;
      }

      // --- Draw ---
      ctx.clearRect(0, 0, w, h);

      // Draw background particles
      ctx.fillStyle = "rgba(61, 139, 94, 0.15)";
      for (let i = 0; i < 60; i++) {
        const px =
          ((Math.sin(time * 0.1 + i * 3.7) * 0.5 + 0.5) * w * 1.2) - w * 0.1;
        const py =
          ((Math.cos(time * 0.08 + i * 2.1) * 0.5 + 0.5) * h * 1.2) - h * 0.1;
        ctx.beginPath();
        ctx.arc(px, py, 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections
      connections.forEach((c) => {
        const from = nodes[c.from];
        const to = nodes[c.to];

        const isHighlighted =
          hovered >= 0 &&
          (c.from === hovered || c.to === hovered);

        const baseAlpha = isHighlighted
          ? 0.5 * c.strength
          : hovered >= 0
          ? 0.03
          : 0.12 * c.strength;

        // Pulse effect on connections
        const pulse = Math.sin(time * 2 + c.from + c.to) * 0.02;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = isHighlighted
          ? `rgba(74, 222, 128, ${baseAlpha + pulse})`
          : `rgba(61, 139, 94, ${baseAlpha + pulse})`;
        ctx.lineWidth = isHighlighted ? 1.5 : 0.6;
        ctx.stroke();

        // Animated particle traveling along connection when highlighted
        if (isHighlighted) {
          const t = ((time * 0.8 + c.from * 0.3) % 1);
          const px = from.x + (to.x - from.x) * t;
          const py = from.y + (to.y - from.y) * t;
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(74, 222, 128, 0.8)";
          ctx.fill();
        }
      });

      // Draw nodes
      nodes.forEach((node, i) => {
        const isHovered = i === hovered;
        const isConnected = connectedToHovered.has(i);
        const glow = node.glowIntensity;

        // Outer glow
        if (glow > 0.1) {
          const gradient = ctx.createRadialGradient(
            node.x, node.y, node.radius,
            node.x, node.y, node.radius + 20 * glow
          );
          gradient.addColorStop(0, `rgba(61, 139, 94, ${0.2 * glow})`);
          gradient.addColorStop(1, "rgba(61, 139, 94, 0)");
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 20 * glow, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }

        // Node background
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const bgAlpha = isHovered ? "30" : isConnected ? "25" : "15";
        ctx.fillStyle = node.color + bgAlpha;
        ctx.fill();

        // Node border
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        const borderAlpha = isHovered ? "bb" : isConnected ? "80" : "40";
        ctx.strokeStyle = node.color + borderAlpha;
        ctx.lineWidth = isHovered ? 2 : 1;
        ctx.stroke();

        // Icon text
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (node.icon.length > 2) {
          ctx.font = `bold 9px var(--font-geist-mono), monospace`;
          ctx.fillStyle = node.color + (isHovered ? "ff" : isConnected ? "cc" : "88");
          ctx.fillText(node.icon, node.x, node.y);
        } else {
          ctx.font = "16px sans-serif";
          ctx.fillText(node.icon, node.x, node.y);
        }

        // Label below
        ctx.font = `11px var(--font-geist-mono), monospace`;
        const labelAlpha = isHovered ? 1 : isConnected ? 0.8 : hovered >= 0 ? 0.2 : 0.5;
        ctx.fillStyle = `rgba(122, 153, 130, ${labelAlpha})`;
        ctx.fillText(node.name, node.x, node.y + node.radius + 14);

        // Category badge on hover
        if (isHovered) {
          const catLabels: Record<string, string> = {
            ibm: "IBM Middleware",
            lang: "Languages",
            cloud: "Cloud & DevOps",
            proto: "Protocols & Tools",
          };
          const catLabel = catLabels[node.category] || "";
          ctx.font = `9px var(--font-geist-mono), monospace`;
          ctx.fillStyle = "rgba(74, 222, 128, 0.7)";
          ctx.fillText(catLabel, node.x, node.y + node.radius + 28);
        }
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("touchend", handleTouchEnd);
    };
  }, [initNodes]);

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-300 bg-dark-500/80 backdrop-blur-sm pointer-events-none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7a9982" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
        <span className="text-xs font-mono text-dark-100">
          Hover to explore connections
        </span>
      </div>
    </div>
  );
}
