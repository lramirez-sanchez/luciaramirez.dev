"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        mx-auto
        flex
        min-h-screen
        w-full
        max-w-6xl
        flex-col
        px-12
        py-6
      "
    >
      {/* Título */}

      <h3
        className="
          text-6xl
          font-bold
          tracking-tight
          text-zinc-900
        "
      >
        {title}
      </h3>

      {/* Descripción */}

      <p
        className="
          mt-3
          w-full
          text-xl
          leading-8
          text-zinc-600
        "
      >
        {description}
      </p>

      {/* Imagen */}

      <div
        className="
          mt-5
          flex
          w-full
          justify-center
        "
      >
        <div
          className="
            aspect-video
            w-full
            max-w-2xl
            overflow-hidden
            rounded-3xl
            border
            border-zinc-200
            bg-zinc-100
            shadow-sm
            xl:max-w-4xl
          "
        >
          <div className="flex h-full items-center justify-center">
            <span className="text-lg text-zinc-400">
              Screenshot del proyecto
            </span>
          </div>
        </div>
      </div>

      {/* Información inferior */}

      <div
        className="
          mt-4
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Tecnologías */}

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-zinc-200
                px-5
                py-2
                text-sm
                font-medium
                text-zinc-700
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Enlaces */}

        <div className="flex gap-8">
          <button
            className="
              text-lg
              font-medium
              text-zinc-900
              transition
              hover:translate-x-1
            "
          >
            GitHub →
          </button>

          <button
            className="
              text-lg
              font-medium
              text-zinc-500
              transition
              hover:translate-x-1
            "
          >
            Live Demo →
          </button>
        </div>
      </div>
    </motion.article>
  );
}