/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";
import { socialMediaLinks } from "../lib/social";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="flex flex-col justify-start items-center px-8 mx-6 pb-10 sm:mx-8 md:mx-14 sm:px-12 lg:px-16"
    >
     <motion.div
  className="flex md:hidden flex-col items-center"
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.2 }} 
>

        <motion.a
          href="mailto:anandabhilakshay@gmail.com"
          className="text-green-500 text-md font-semibold font-mono pb-2"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          anandabhilakshay@gmail.com
        </motion.a>

        <motion.div className="flex flex-row p-2">
          {socialMediaLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="p-3"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              <img src={item.icon.src} alt={item.name} className="w-7 h-7" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.header
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full text-slate-300 text-xs md:text-sm text-center"
      >
        Designed & Built by Abhilakshay Anand © {date}
      </motion.header>
    </section>
  );
};

export default Footer;
