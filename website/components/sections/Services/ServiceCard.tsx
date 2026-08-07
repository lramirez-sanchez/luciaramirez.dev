"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  target: string;
}

export default function ServiceCard({
  number,
  title,
  description,
  target,
}: ServiceCardProps) {
  const { scrollYProgress } = useScroll();

  const numberY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  );

  function scrollToProjects() {
    document.getElementById(target)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <section className="relative flex min-h-[90vh] items-center border-b border-zinc-200 overflow-hidden">

      {/* Número gigante */}

      <motion.span
        style={{ y: numberY }}
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          -translate-y-1/2
          select-none
          text-[20rem]
          font-bold
          leading-none
          tracking-tight
          text-zinc-100
        "
      >
        {number}
      </motion.span>

      {/* Contenido */}

      <div className="relative z-10 max-w-2xl">

        <motion.h2
          initial={{
            opacity: 0,
            y: 35,
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
            text-6xl
            font-bold
            tracking-tight
            text-zinc-900
          "
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.15,
            duration: 0.7,
          }}
          className="
            mt-8
            text-xl
            leading-10
            text-zinc-600
          "
        >
          {description}
        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
            y: 25,
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
            delay: 0.5,
            duration: 0.9,
          }}
          onClick={scrollToProjects}
          className="
            group
            mt-14
            flex
            items-center
            gap-2
            text-lg
            font-semibold
            text-zinc-900
          "
        >
          Explorar proyectos

          <span
            className="
              transition-transform
              duration-300
              group-hover:translate-x-2
            "
          >
            →
          </span>

        </motion.button>

      </div>

    </section>
  );
}