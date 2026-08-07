"use client";

import { motion } from "framer-motion";
import TerminalCommand from "./TerminalCommand";

export default function Terminal() {
  return (
    <motion.div
    initial={{
        opacity: 0,
        x: 120,
    }}

    animate={{
        opacity: 1,
         x: 0,
    }}

    transition={{
        duration: .9,
        delay: 1.6,
}}
      whileHover={{
        rotateX: 2,
        rotateY: -3,
        scale: 1.01,
      }}
      className="
        w-[520px]
        overflow-hidden
        rounded-2xl
        border
        border-zinc-800
        bg-[#18181B]
        shadow-2xl
      "
    >
      {/* Barra */}

      <div className="flex items-center gap-3 border-b border-zinc-800 px-5 py-4">

        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />

        <span className="ml-4 text-zinc-500">
          terminal
        </span>

      </div>

      {/* Contenido */}

      <div className="space-y-8 p-8 font-mono text-lg">

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
            <div className="space-y-1 text-green-400">
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

        <p className="text-zinc-500">
          $ _
          <span className="animate-pulse text-white"> |</span>
        </p>

      </div>
    </motion.div>
  );
}