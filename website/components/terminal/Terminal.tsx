"use client";

import { motion } from "framer-motion";
import TerminalCommand from "./TerminalCommand";

export default function Terminal() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.9,
        delay: 1.6,
      }}
      whileHover={{
        rotateX: 1.5,
        rotateY: -2,
        scale: 1.01,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.10)",
      }}
      style={{
        transformPerspective: 1000,
      }}
      className="
        w-[420px]
        overflow-hidden
        rounded-2xl
        border
        border-zinc-200
        bg-zinc-50
        shadow-xl
      "
    >
      {/* Barra */}

      <div
        className="
          flex
          items-center
          gap-2.5
          border-b
          border-zinc-200
          px-4
          py-3
        "
      >
        <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-400" />

        <span className="ml-3 text-xs text-zinc-400">
          terminal
        </span>
      </div>

      {/* Contenido */}

      <div className="space-y-6 p-6 font-mono text-sm">

        <TerminalCommand
          command="whoami"
          output="Lucía Ramírez"
        />

        <TerminalCommand
          command="role"
          output="Computer Engineering Student"
        />

        <TerminalCommand
          command="skills"
          output={
            <div className="space-y-1 text-emerald-600">
              <p>✓ Python</p>
              <p>✓ SQL</p>
              <p>✓ Linux</p>
              <p>✓ Automation</p>
            </div>
          }
        />

        <TerminalCommand
          command="status"
          output="Available for freelance"
        />

        <p className="text-zinc-400">
          $ _
          <span className="animate-pulse text-zinc-700">
            {" |"}
          </span>
        </p>

      </div>
    </motion.div>
  );
}