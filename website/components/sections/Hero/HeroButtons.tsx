"use client";

import { motion } from "framer-motion";

export default function HeroButtons() {
  function scrollToProjects() {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }

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
        duration: 0.6,
      }}
      className="mt-14 flex items-center gap-6"
    >
      {/* Proyectos */}

      <button
        onClick={scrollToProjects}
        className="
          group
          text-lg
          font-semibold
          text-zinc-900
        "
      >
        Ver proyectos

        <span
          className="
            ml-2
            inline-block
            transition-transform
            duration-300
            group-hover:translate-x-2
          "
        >
          →
        </span>
      </button>

      {/* Contacto */}

      <button
        onClick={scrollToContact}
        className="
          rounded-xl
          border
          border-zinc-300
          bg-zinc-100
          px-8
          py-4
          text-lg
          font-medium
          text-zinc-900
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-zinc-200
        "
      >
        Contactar 📩
      </button>
    </motion.div>
  );
}