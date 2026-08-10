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
    <section id={id}>
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

        {/* Academic System */}

        <ProjectCard
          title="Academic System"
          description="Backend académico desarrollado con Python y FastAPI, utilizando PostgreSQL para gestionar estudiantes, asignaturas, profesores, matrículas y calificaciones."
          technologies={[
            "Python",
            "FastAPI",
            "PostgreSQL",
            "SQL",
            "Pytest",
          ]}
          images={[
            "/projects/academic-system/api.png",
            "/projects/academic-system/students.png",
            "/projects/academic-system/performance.png",
          ]}
          github="https://github.com/lramirez-sanchez/academic-system"
        />

        {/* Invoice Automation */}

        <ProjectCard
          title="Invoice Automation"
          description="Sistema de automatización para procesar facturas, extraer información mediante OCR y estructurar los datos automáticamente."
          technologies={[
            "Python",
            "FastAPI",
            "OCR",
          ]}
          images={[
            "/projects/invoice-automation/upload.png",
            "/projects/invoice-automation/processing.png",
            "/projects/invoice-automation/result.png",
          ]}
        />

        {/* Telegram Bot */}

        <ProjectCard
          title="Telegram Bot"
          description="Bot desarrollado para automatizar tareas y enviar notificaciones mediante la API de Telegram."
          technologies={[
            "Python",
            "Telegram API",
          ]}
          images={[
            "/projects/telegram-bot/bot.png",
            "/projects/telegram-bot/notifications.png",
          ]}
        />

      </div>
    </section>
  );
}