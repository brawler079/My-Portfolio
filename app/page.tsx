"use client";

import { motion, AnimatePresence } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";

const Home = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.section
        id="Home"
        className="h-screen flex items-center px-8 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16 w-full overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >

        <motion.div
          className="max-w-5xl text-left w-full"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false }}
        >
          <motion.h1
            className="text-green-500 mb-4 text-lg sm:text-xl font-light font-mono mx-1"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Hi, my name is
          </motion.h1>

          <motion.h2
            className="text-slate-300 mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
          >
            Abhilakshay Anand
          </motion.h2>

          <motion.h3
            className="text-slate-400 mb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Building the web, better
          </motion.h3>

          <motion.p
            className="text-slate-400 mb-12 max-w-lg md:max-w-2xl md:text-lg xl:text-xl font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
          >
            Innovating the web with precision and creativity. As a full-stack developer, I craft seamless, user-friendly
            experiences that blend performance, accessibility, and modern design.
          </motion.p>

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.a
              href="#contact"
              className="text-green-500 font-mono text-lg border border-green-500 p-3 rounded-md hover:bg-green-600/10 transition duration-200 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1XBHritRzXzMgy283bCDfrgOIYQBK-6qR/view?usp=sharing"
              className="text-green-500 font-mono text-lg border border-green-500 p-3 rounded-md hover:bg-green-600/10 transition duration-200 cursor-pointer items-center justify-center text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full overflow-x-hidden"
      >
        <Sidebar />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
