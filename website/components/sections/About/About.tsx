"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="
        relative
        overflow-hidden
        border-t
        border-zinc-200
        bg-white
      "
    >
      {/* =========================================================
          INTRO — PRIMERO APRENDO. DESPUÉS CONSTRUYO.
      ========================================================= */}

      <div className="relative h-screen">
        <motion.div
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
            duration: 0.9,
          }}
          className="
            flex
            h-full
            items-center
            justify-center
            px-10
          "
        >
          <h2
            className="
              text-center
              text-7xl
              font-bold
              leading-[0.95]
              tracking-tight
              text-zinc-900
              md:text-8xl
              lg:text-[10rem]
            "
          >
            Primero aprendo.
            <br />
            Después construyo.
          </h2>
        </motion.div>
      </div>

      {/* =========================================================
          ABOUT — CONTENIDO
      ========================================================= */}

      <div
        className="
          mx-auto
          min-h-screen
          max-w-7xl
          px-10
          py-32
        "
      >
        {/* Cabecera */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.6,
          }}
          className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-200
            pb-6
          "
        >
          <span
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-zinc-400
            "
          >
            About me
          </span>

          <span
            className="
              text-sm
              font-medium
            text-zinc-400
            "
          >
            01
          </span>
        </motion.div>

        {/* Contenido */}

        <div
          className="
            grid
            gap-20
            pt-24
            lg:grid-cols-[1.4fr_0.6fr]
            lg:items-start
          "
        >
          {/* Descripción */}

          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-xl
              leading-9
              text-zinc-600
              md:text-2xl
              md:leading-10
            "
          >
            <p>
              Soy estudiante de Ingeniería Informática y me gusta convertir
              problemas en soluciones que realmente funcionen.
            </p>

            <p className="mt-8">
              Me interesa especialmente todo lo que ocurre detrás de una
              aplicación: cómo se estructuran los datos, cómo se comunican
              los sistemas y cómo podemos automatizar procesos para hacerlos
              más rápidos, sencillos y eficientes.
            </p>

            <p className="mt-8">
              Actualmente estoy desarrollando mi perfil alrededor de Python,
              bases de datos, APIs, Linux y automatización, mientras sigo
              explorando las distintas áreas de la informática para descubrir
              dónde puedo aportar más.
            </p>

            <p className="mt-8">
              Me gusta aprender construyendo: enfrentarme a un problema,
              investigar cómo resolverlo, equivocarme, entender por qué y
              volver a intentarlo mejor. Por eso mis proyectos no buscan
              únicamente demostrar qué tecnologías conozco, sino cómo pienso
              y cómo convierto una idea en algo funcional.
            </p>

            <p className="mt-8">
              Todavía estoy construyendo mi camino, pero tengo claro que
              quiero seguir aprendiendo, crear cosas útiles y disfrutar del
              proceso.
            </p>
          </motion.div>

          {/* Tecnologías / enfoque */}

          <motion.div
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
              amount: 0.3,
            }}
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="
              border-t
              border-zinc-200
              pt-6
            "
          >
            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-zinc-400
              "
            >
              Actualmente
            </span>

            <div className="mt-8 space-y-4">
              <p className="text-lg font-medium text-zinc-900">
                Ingeniería Informática
              </p>

              <p className="text-lg text-zinc-500">
                Python · SQL · Linux
              </p>

              <p className="text-lg text-zinc-500">
                Automatización · APIs
              </p>

              <p className="text-lg text-zinc-500">
                Desarrollo de software
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}