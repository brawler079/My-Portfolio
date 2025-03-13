"use client";

import { projects } from '../lib/projects';
import G from '../lib/images/GH.jpg';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-start items-start px-8 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16"
      
    >
      <header
        className="text-left mb-8"
      >
        <motion.h1 
        initial={{opacity:0, x:80}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.6}}
        viewport={{once:false}}
        className="text-green-500 text-3xl font-bold">Things I&apos;ve Worked On</motion.h1>
      </header>

      <div className="flex flex-col gap-16 mt-8">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl mx-auto ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            {/* Image with fade-in effect */}
            <motion.div
              className="w-full md:w-[48%]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <img
                src={item.img.src}
                alt={item.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="w-full md:w-[50%] p-6 rounded-lg shadow-lg md:p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="flex items-start justify-between">
                <h2 className="text-slate-300 text-2xl font-semibold">{item.title}</h2>
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-start"
                >
                  <motion.img
                    src={G.src}
                    alt="GitHub"
                    className="w-12 h-12 object-contain cursor-pointer hover:opacity-80 transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </a>
              </div>

              <p className="text-slate-400 text-sm mt-3 text-justify">● {item.PA}</p>
              <p className="text-slate-400 text-sm mt-1 text-justify">● {item.PB}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.TS.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="text-s bg-slate-900 text-green-500 px-2 py-1 rounded-3xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
