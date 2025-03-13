"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
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
      setLoading(false);

      if (response.ok) {
        toast.success("Message sent successfully!", { position: "top-right", autoClose: 3000, theme: "dark" });
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Something went wrong", { position: "top-right", autoClose: 3000, theme: "dark" });
      }
    } catch {
      setLoading(false);
      toast.error("Network error, please try again!", { position: "top-right", autoClose: 3000, theme: "dark" });
    }
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-40 sm:px-12 lg:px-16" 
    >
      <header className="text-center mb-10">
        <motion.h1
          className="text-green-500 text-4xl font-bold"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }} 
        >
          Get in Touch
        </motion.h1>
        <motion.p 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-gray-400 mt-2">Eager to Learn, Ready to Code—Let&apos;s Connect!</motion.p>
      </header>

      <motion.div
        className="w-full max-w-lg p-8 shadow-lg bg-gray-950 rounded-lg">
        <motion.form 
        initial={{y:100}}
        animate={{y:0}}
        transition={{duration:0.7}}
        viewport={{ once: false }}
        onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">
          <div>
            <label className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className={`w-full font-semibold py-3 rounded-lg ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-green-500 hover:opacity-80"}`}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </motion.div>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </section>
  );
};

export default Contact;
