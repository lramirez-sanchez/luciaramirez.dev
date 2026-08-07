"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}

export default function Typewriter({
  words,
  typingSpeed = 55,
  deletingSpeed = 30,
  pause = 1800,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout: NodeJS.Timeout;

    if (!deleting) {
      // ESCRIBIENDO

      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setDeleting(true);
        }, pause);
      }
    } else {
      // BORRANDO

      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, deletingSpeed);
      } else {
        setDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pause,
  ]);

  return (
    <div className="mt-8 h-12 flex items-center font-[family:var(--font-body)] text-3xl text-zinc-600">
      <span className="mr-3">{">"}</span>

      <span>{text}</span>

      <span className="ml-1 animate-pulse font-light text-zinc-900">
        ▍
      </span>
    </div>
  );
}