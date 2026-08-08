"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { scrollY } = useScroll();

  const [showInitials, setShowInitials] = useState(false);

  const backgroundOpacity = useTransform(
    scrollY,
    [0, 80],
    [0, 0.8]
  );

  const borderOpacity = useTransform(
    scrollY,
    [0, 80],
    [0, 1]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setShowInitials((current) => !current);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
      "
    >
      {/* Fondo dinámico */}

      <motion.div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          opacity: backgroundOpacity,
        }}
        className="
          absolute
          inset-0
          -z-10
          backdrop-blur-md
        "
      />

      {/* Borde inferior */}

      <motion.div
        style={{
          opacity: borderOpacity,
        }}
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-zinc-200
        "
      />

      <nav
        className="
          mx-auto
          flex
          max-w-9xl
          items-center
          justify-between
          px-10
          py-6
        "
      >
        {/* Nombre */}

        <button
          onClick={() => scrollToSection("top")}
          className="
            relative
            flex
            h-5
            w-32
            items-center
            text-sm
            font-semibold
            tracking-tight
            text-zinc-900
            transition-opacity
            duration-300
            hover:opacity-50
          "
        >
          <AnimatePresence mode="wait">
            {showInitials ? (
              <motion.span
                key="initials"
                initial={{
                  opacity: 0,
                  y: 4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -4,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                LR
              </motion.span>
            ) : (
              <motion.span
                key="name"
                initial={{
                  opacity: 0,
                  y: -4,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 4,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                Lucía Ramírez
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {/* Navegación */}

        <div
          className="
            flex
            items-center
            gap-8
          "
        >
          <button
            onClick={() => scrollToSection("services")}
            className="
              text-sm
              font-medium
              text-zinc-500
              transition-colors
              duration-300
              hover:text-zinc-900
            "
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="
              text-sm
              font-medium
              text-zinc-500
              transition-colors
              duration-300
              hover:text-zinc-900
            "
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="
              text-sm
              font-medium
              text-zinc-500
              transition-colors
              duration-300
              hover:text-zinc-900
            "
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="
              text-sm
              font-medium
              text-zinc-500
              transition-colors
              duration-300
              hover:text-zinc-900
            "
          >
            Contact
          </button>
        </div>
      </nav>
    </motion.header>
  );
}