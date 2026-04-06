"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  onComplete?: () => void;
  className?: string;
}

export function Typewriter({
  text,
  speed = 28,
  onComplete,
  className,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset when text changes
    setDisplayed("");
    setIndex(0);
  }, [text]);

  useEffect(() => {
    if (index >= text.length) {
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed((prev) => prev + text[index]);
      setIndex((i) => i + 1);
    }, speed);
    return () => clearTimeout(timer);
  }, [index, text, speed, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {index < text.length && (
        <span className="animate-pulse text-green-400">▌</span>
      )}
    </span>
  );
}
