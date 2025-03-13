/* eslint-disable @next/next/no-img-element */
'use client';
import { socialMediaLinks } from "../lib/social";
import { motion } from "framer-motion";

const Sidebar = () => {

  return (
    <>
      {/* Email Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="hidden md:flex flex-col fixed top-[80%] right-20 transform -translate-y-1/2 items-center group"
      >
        <motion.a
          href="mailto:anandabhilakshay@gmail.com"
          className="text-slate-300 text-sm font-mono p-4 hover:text-green-400 transition-all duration-300"
          style={{ writingMode: "vertical-lr" }}
          whileHover={{ scale: 1.1, x: -5 }}
        >
          anandabhilakshay@gmail.com
        </motion.a>
        <motion.div
          className="w-[1px] h-[315px] bg-green-400 mt-1"
          initial={{ height: 0 }}
          animate={{ height: 315 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Social Media Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="hidden md:flex flex-col fixed top-[80%] left-20 transform -translate-y-1/2 items-center group"
      >
        {socialMediaLinks?.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            className="py-7 hover:fill-green-400"
            whileHover={{ scale: 1.1, x: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div whileHover={{ rotate: 10, scale: 1.2 }}>
              <img src={item.icon?.src} alt={item.name} className="w-6 h-6" />
            </motion.div>
          </motion.a>
        ))}
        <motion.div
          className="w-[1px] h-[315px] bg-green-400 mt-1"
          initial={{ height: 0 }}
          animate={{ height: 315 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </motion.div>
    </>
  );
};

export default Sidebar;
