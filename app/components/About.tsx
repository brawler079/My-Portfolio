import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about-me"
      className="py-32 px-8 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -100, scale: 0.9 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
        className="max-w-3xl text-left"
      >
        <motion.h1
          className="text-4xl text-green-500 font-bold text-start mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          About Me
        </motion.h1>

        <motion.p
          className="text-lg text-slate-400 mb-4 text-justify font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false }}
        >
          Hi, I&apos;m Abhilakshay Anand, a passionate full-stack developer who loves crafting dynamic and engaging web experiences. I thrive on solving complex problems, optimizing performance, and pushing creative boundaries to build seamless digital solutions.
        </motion.p>

        <motion.p
          className="text-lg text-slate-400 text-justify font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          I enjoy tackling complex challenges with a deep understanding of Data Structures & Algorithms, Object-Oriented Programming, and Databases, always striving to innovate and refine solutions.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
