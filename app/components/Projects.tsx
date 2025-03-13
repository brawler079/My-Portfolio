"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { projects } from "../lib/projects";
import G from "../lib/images/GH.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start items-start px-8 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16"
    >
      <header className="text-left mb-8">
        <h1 className="text-green-500 text-3xl font-bold">
          Things I&apos;ve Worked On
        </h1>
      </header>

      <motion.div
        className="w-full flex flex-col gap-16 mt-8"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
          exit: { opacity: 0, scale: 0.8 }, 
        }}
      >
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-12 xl:gap-24 w-full max-w-5xl mx-auto ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <motion.div
              className="w-full md:w-[48%]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }} 
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false }}
            >
              <img
                src={item.img.src}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              className="w-full md:w-[50%] md:h-auto p-6 rounded-lg shadow-lg md:p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }} 
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false }}
            >
              <div className="flex items-start justify-between">
                <h2 className="text-slate-300 text-2xl font-semibold">
                  {item.title}
                </h2>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-start"
                >
                  <motion.img
                    src={G.src}
                    alt="GitHub"
                    className="w-12 h-12 object-contain cursor-pointer hover:opacity-80"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0, scale: 0.5 }} 
                  />
                </a>
              </div>

              <p className="text-slate-400 text-sm mt-3 text-justify">● {item.PA}</p>
              <p className="text-slate-400 text-sm mt-1 text-justify">● {item.PB}</p>

              <div className="w-full mt-4 flex flex-wrap gap-2">
                {item.TS.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="text-xs text-green-500 font-semibold font-sans px-1 py-1 text-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }} 
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
