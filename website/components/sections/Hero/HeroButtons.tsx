"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1.3,
        duration: .6,
      }}
      className="mt-14 flex gap-6"
    >
      <button
        className="
          rounded-xl
          bg-zinc-900
          px-8
          py-4
          text-lg
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-xl
        "
      >
        Ver proyectos →
      </button>

      <button
        className="
          rounded-xl
          border
          border-zinc-300
          bg-white
          px-8
          py-4
          text-lg
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-zinc-100
        "
      >
        Contactar
      </button>
    </motion.div>
  );
}