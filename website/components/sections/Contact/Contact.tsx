"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [showEmail, setShowEmail] = useState(false);

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
      <div
        className="
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          flex-col
          justify-between
          px-10
          py-16
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
            amount: 0.4,
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
            Contacto
          </span>

          <span
            className="
              text-sm
              font-medium
              text-zinc-400
            "
          >
            02
          </span>
        </motion.div>

        {/* Contenido principal */}

        <div
          className="
            grid
            gap-20
            py-24
            lg:grid-cols-[1.4fr_0.6fr]
            lg:items-end
          "
        >
          {/* Título */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
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
              duration: 0.8,
            }}
          >
            <h2
              className="
                max-w-5xl
                text-7xl
                font-bold
                leading-[0.95]
                tracking-tight
                text-zinc-900
                md:text-8xl
                lg:text-[9rem]
              "
            >
              ¿Tienes un
              <br />
              proyecto
              <br />
              en mente?
            </h2>

            <motion.p
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
                amount: 0.3,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="
                mt-10
                text-xl
                leading-8
                text-zinc-500
              "
            >
              Hablemos.
            </motion.p>
          </motion.div>

          {/* Enlaces */}

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
              delay: 0.25,
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
              Encuéntrame
            </span>

            <div className="mt-8 flex flex-col">
              {/* Email */}

              <button
                type="button"
                onClick={() => setShowEmail((previous) => !previous)}
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  border-b
                  border-zinc-200
                  py-4
                  text-left
                  text-lg
                  font-medium
                  text-zinc-900
                "
              >
                {showEmail ? (
                  <motion.span
                    key="email"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="text-base"
                  >
                    lucia.ramirez.sanchez.101@gmail.com
                  </motion.span>
                ) : (
                  <motion.span
                    key="label"
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    Email
                  </motion.span>
                )}

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </button>

              {/* GitHub */}

              <a
                href="https://github.com/lramirez-sanchez"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-zinc-200
                  py-4
                  text-lg
                  font-medium
                  text-zinc-900
                "
              >
                GitHub

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/luc%C3%ADa-ram%C3%ADrez-sanchez/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  justify-between
                  border-b
                  border-zinc-200
                  py-4
                  text-lg
                  font-medium
                  text-zinc-900
                "
              >
                LinkedIn

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Footer */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="
            flex
            flex-col
            gap-3
            border-t
            border-zinc-200
            pt-6
            text-sm
            text-zinc-400
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>
            Lucía Ramírez
          </span>

          <span>
            Ingeniera Informática · Madrid
          </span>
        </motion.div>
      </div>
    </section>
  );
}