"use client";

import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "59778faa-7100-42cd-8af0-20c3f2f8d179");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          style: { background: "#1f2937", color: "#00ff41" },
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          style: { background: "#1f2937", color: "#ff007f" },
        });
      }
    } catch {
      toast.error("Network error, please try again!", {
        position: "top-right",
        autoClose: 3000,
        style: { background: "#1f2937", color: "#ff007f" },
      });
    }
  }

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-36 sm:px-12 lg:px-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <header className="text-center mb-10">
        <motion.h1
          className="text-green-500 text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Get in Touch
        </motion.h1>
        <p className="text-gray-400 mt-2">Eager to Learn, Ready to Code—Let&apos;s Connect!</p>
      </header>

      <motion.div
        className="w-full max-w-lg p-8 shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">

          <motion.div
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: false }}
          >
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: false }}
          >
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </motion.div>

          <motion.div
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: false }}
          >
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none transition"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-green-500 hover:opacity-80 text-black font-semibold py-3 rounded-lg transition-all duration-300"
            whileTap={{ scale: 0.95 }}
            viewport={{ once: false }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <ToastContainer />
    </motion.section>
  );
};

export default Contact;
