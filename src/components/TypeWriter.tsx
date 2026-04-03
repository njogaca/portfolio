"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  lines: { content: string; className?: string }[];
  speed?: number;
  startDelay?: number;
}

export default function TypeWriter({
  lines,
  speed = 30,
  startDelay = 500,
}: TypeWriterProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (currentLine >= lines.length) return;

    const line = lines[currentLine].content;
    if (currentChar < line.length) {
      const timer = setTimeout(() => setCurrentChar((c) => c + 1), speed);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [started, currentLine, currentChar, lines, speed]);

  return (
    <div className="font-mono text-sm leading-relaxed">
      {lines.map((line, i) => {
        if (i > currentLine) return null;

        const text =
          i === currentLine
            ? line.content.slice(0, currentChar)
            : line.content;

        const showCursor = i === currentLine && currentLine < lines.length;

        return (
          <div key={i} className="flex">
            <span className="line-number">{i + 1}</span>
            <span
              className={line.className}
              dangerouslySetInnerHTML={{ __html: text }}
            />
            {showCursor && <span className="typing-cursor" />}
          </div>
        );
      })}
    </div>
  );
}
