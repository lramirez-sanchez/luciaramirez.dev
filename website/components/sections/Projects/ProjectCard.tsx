"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  images?: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  images = [],
  github,
  demo,
}: ProjectCardProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

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

      {/* Carrusel */}

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
            relative
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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {images.length > 0 ? (
            <Image
              src={images[currentImage]}
              alt={`${title} screenshot ${currentImage + 1}`}
              fill
              className="object-cover"
              priority={currentImage === 0}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-lg text-zinc-400">
                Screenshot del proyecto
              </span>
            </div>
          )}

          {/* Indicadores */}

          {images.length > 1 && (
            <div
              className="
                absolute
                bottom-4
                left-1/2
                flex
                -translate-x-1/2
                gap-2
              "
            >
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`
                    h-2
                    w-2
                    rounded-full
                    transition-all
                    ${
                      index === currentImage
                        ? "w-6 bg-zinc-900"
                        : "bg-zinc-400"
                    }
                  `}
                />
              ))}
            </div>
          )}
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
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-lg
                font-medium
                text-zinc-900
                transition
                hover:translate-x-1
              "
            >
              GitHub ↗︎
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-lg
                font-medium
                text-zinc-500
                transition
                hover:translate-x-1
              "
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}