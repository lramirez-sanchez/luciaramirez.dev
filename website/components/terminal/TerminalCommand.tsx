"use client";

import { motion } from "framer-motion";

interface TerminalCommandProps {
  command: string;
  output: React.ReactNode;
  delay: number;
}

export default function TerminalCommand({
  command,
  output,
  delay,
}: TerminalCommandProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay,
      }}
      className="space-y-2"
    >
      <p className="text-zinc-500">
        $ {command}
      </p>

      <div className="pl-2 text-blue-400">
        {output}
      </div>
    </motion.div>
  );
}