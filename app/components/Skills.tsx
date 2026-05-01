"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { Frontend, Backend, DB, Tools } from "../lib/util";

const sections = [
  { title: "Front-end", data: Frontend },
  { title: "Back-end", data: Backend },
  { title: "Database", data: DB },
  { title: "Ops", data: Tools },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-start items-start px-8 py-36 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16"
    >
      <div className="max-w-3xl text-left">
        <motion.h1
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-3xl font-bold text-green-500 mb-6"
        >
          Skills
        </motion.h1>
      </div>

      <div className="w-full flex flex-col space-y-16">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <h2 className="text-2xl font-semibold text-slate-400 mb-4">
              {section.title}
            </h2>

            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-12 px-3 py-4"
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
                exit: { opacity: 0, scale: 0.8 },
              }}
            >
              {section.data.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, y: 30 },
                    visible: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.5 },
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col items-center justify-center px-5 py-5 rounded-xl w-[110px] sm:w-[130px]"
                >
                  <img
                    src={item.img.src}
                    alt={item.title}
                    className="w-12 h-12 sm:w-20 sm:h-20 transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="text-sm sm:text-base font-medium text-slate-300 text-center mt-3 leading-tight">
                    {item.title}
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;