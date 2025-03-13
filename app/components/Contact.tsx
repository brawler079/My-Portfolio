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
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        toast.error(result.message || "Something went wrong", {
          position: "top-right",
          autoClose: 3000,
          theme: "dark",
        });
      }
    } catch {
      setLoading(false);
      toast.error("Network error, please try again!", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
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
    >
      <header className="text-center mb-10">
        <motion.h1
          className="text-green-500 text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <p className="text-gray-400 mt-2">Eager to Learn, Ready to Code—Let&apos;s Connect!</p>
      </header>

      <motion.div
        className="w-full max-w-lg p-8 shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-white">
          <label className="block text-sm font-medium text-gray-300">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <label className="block text-sm font-medium text-gray-300">Message</label>
          <textarea
            name="message"
            required
            rows={4}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
          ></textarea>

          <motion.button
            type="submit"
            className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${loading ? "bg-gray-600 cursor-not-allowed" : "bg-green-500 hover:opacity-80"}`}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </motion.section>
  );
};

export default Contact;