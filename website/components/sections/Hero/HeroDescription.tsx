"use client";

import { motion } from "framer-motion";

export default function HeroDescription() {
  return (
    <motion.p
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 1,
        duration: .6,
      }}
      className="
        mt-10
        max-w-lg
        text-lg
        leading-9
        text-zinc-600
      "
    >
      Desarrollo software y herramientas digitales que ayudan a empresas
      y profesionales a automatizar procesos y ahorrar tiempo.
    </motion.p>
  );
}