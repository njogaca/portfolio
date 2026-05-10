"use client";

import { useState, useEffect, useMemo } from "react";

export type Token = { text: string; cls?: string };
export type TokenLine = Token[];

interface TypeWriterProps {
  lines: TokenLine[];
  /** ms per visible character */
  speed?: number;
  /** ms before the animation starts */
  startDelay?: number;
  /** extra ms between lines (in addition to one char of speed) */
  linePause?: number;
}

export default function TypeWriter({
  lines,
  speed = 18,
  startDelay = 500,
  linePause = 80,
}: TypeWriterProps) {
  // Total visible chars per line — for fast lookups
  const lineLengths = useMemo(
    () => lines.map((line) => line.reduce((s, t) => s + t.text.length, 0)),
    [lines]
  );
  const totalChars = useMemo(
    () => lineLengths.reduce((s, n) => s + n, 0),
    [lineLengths]
  );

  // Current global progress in characters typed
  const [typed, setTyped] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    if (typed >= totalChars) return;

    // If we just finished a line, pause longer before starting the next
    let acc = 0;
    let isLineEnd = false;
    for (const len of lineLengths) {
      acc += len;
      if (typed === acc && acc < totalChars) {
        isLineEnd = true;
        break;
      }
    }

    const delay = isLineEnd ? speed + linePause : speed;
    const t = setTimeout(() => setTyped((n) => n + 1), delay);
    return () => clearTimeout(t);
  }, [started, typed, totalChars, lineLengths, speed, linePause]);

  // Figure out which line we're on and the position within that line
  let consumed = 0;
  let activeLineIdx = 0;
  let charsInActiveLine = 0;
  for (let i = 0; i < lineLengths.length; i++) {
    if (typed <= consumed + lineLengths[i]) {
      activeLineIdx = i;
      charsInActiveLine = typed - consumed;
      break;
    }
    consumed += lineLengths[i];
    activeLineIdx = i + 1;
    charsInActiveLine = 0;
  }

  const isFinished = typed >= totalChars;

  return (
    <div className="font-mono text-sm leading-relaxed">
      {lines.map((line, lineIdx) => {
        if (lineIdx > activeLineIdx) return null;

        const isCurrentLine = lineIdx === activeLineIdx;
        const charsToShow = isCurrentLine ? charsInActiveLine : lineLengths[lineIdx];

        // Walk tokens and slice them up to charsToShow
        let remaining = charsToShow;
        const visibleTokens: Token[] = [];
        for (const token of line) {
          if (remaining <= 0) break;
          if (token.text.length <= remaining) {
            visibleTokens.push(token);
            remaining -= token.text.length;
          } else {
            visibleTokens.push({ ...token, text: token.text.slice(0, remaining) });
            remaining = 0;
          }
        }

        // Show cursor on the line currently being typed (or last line briefly when done)
        const showCursor = isCurrentLine && (!isFinished || lineIdx === lines.length - 1);

        return (
          <div key={lineIdx} className="flex">
            <span className="line-number">{lineIdx + 1}</span>
            <span className="whitespace-pre">
              {visibleTokens.map((tok, i) => (
                <span key={i} className={tok.cls}>
                  {tok.text}
                </span>
              ))}
              {showCursor && <span className="typing-cursor" />}
            </span>
          </div>
        );
      })}
    </div>
  );
}
