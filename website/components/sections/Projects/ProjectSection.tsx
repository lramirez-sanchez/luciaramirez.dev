"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface ProjectSectionProps {
  id: string;
  title: string;
}

export default function ProjectSection({
  id,
  title,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className="relative bg-white"
    >
      {/* Título Sticky */}

      <div
        className="
          sticky
          top-0
          z-0
          flex
          h-screen
          items-center
          border-b
          border-zinc-200
          bg-white
        "
      >
        <div className="mx-auto w-full max-w-7xl px-12">
          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              text-8xl
              font-bold
              tracking-tight
              text-zinc-900
            "
          >
            {title}
          </motion.h2>
        </div>
      </div>

      {/* Proyectos */}

      <div className="relative z-10 bg-white">
        <ProjectCard
          title="Academic System"
          description="Sistema de gestión académica desarrollado con Python y PostgreSQL para administrar alumnos, asignaturas y profesores."
          technologies={[
            "Python",
            "PostgreSQL",
            "Docker",
          ]}
        />

        <ProjectCard
          title="Invoice Automation"
          description="Automatización del procesamiento de facturas mediante OCR y flujos de trabajo automáticos."
          technologies={[
            "Python",
            "FastAPI",
            "OCR",
          ]}
        />

        <ProjectCard
          title="Telegram Bot"
          description="Bot para automatizar tareas y enviar notificaciones utilizando la API de Telegram."
          technologies={[
            "Python",
            "Telegram API",
          ]}
        />
      </div>
    </section>
  );
}