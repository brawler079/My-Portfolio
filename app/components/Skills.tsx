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
      className="flex flex-col justify-start items-center px-6 sm:px-12 lg:px-16 py-36 mx-auto w-full max-w-[90%]"
    >
      <div className="max-w-3xl text-center sm:text-left">
        <h1 className="text-3xl font-bold text-green-500 mb-6">Skills</h1>
      </div>
      <div className="w-full flex flex-col space-y-8">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }} 
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
            className="w-full"
          >
            <h2 className="text-2xl font-semibold text-slate-400 mb-4 text-center sm:text-left">
              {section.title}
            </h2>
            <motion.div
              className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center gap-6 sm:gap-12 p-4"
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
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex flex-col items-center px-6 py-6 rounded-xl max-w-[130px] sm:max-w-[180px]"
                >
                  <img
                    src={item.img.src}
                    alt={item.title}
                    className="w-10 h-10 sm:w-16 sm:h-16 transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-300 text-center mt-3">
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
