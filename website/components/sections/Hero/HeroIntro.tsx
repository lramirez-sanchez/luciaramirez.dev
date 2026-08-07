"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/animations/Typewriter";

export default function HeroIntro() {
  return (
    <>
      <motion.h1
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          font-[family:var(--font-title)]
          text-8xl
          xl:text-9xl
          font-bold
          tracking-[-0.07em]
          leading-none
          text-zinc-900
        "
      >
        Lucía
        <br />
        Ramírez
      </motion.h1>

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
          delay: .45,
          duration: .6,
        }}
      >
        <Typewriter
          words={[
            "Ingeniería Informática",
            "Desarrollo de Software",
            "Automatización",
            "Python",
            "SQL",
            "Linux",
          ]}
        />
      </motion.div>
    </>
  );
}