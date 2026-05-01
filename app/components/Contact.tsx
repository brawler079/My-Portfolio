"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const services = [
  {
    title: "Landing Page",
    price: "₹3,000 – ₹6,000",
    desc: "Single-page site with responsive design, animations, and contact form.",
  },
  {
    title: "Portfolio / Personal Site",
    price: "₹5,000 – ₹10,000",
    desc: "Multi-section portfolio with custom UI, projects showcase, and SEO basics.",
  },
  {
    title: "Full-Stack Web App",
    price: "₹15,000+",
    desc: "Auth, database, REST/GraphQL API, and a polished frontend.",
  },
  {
    title: "Freelance Hourly",
    price: "₹500 / hr",
    desc: "Bug fixes, feature additions, or consultations billed per hour.",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "59778faa-7100-42cd-8af0-20c3f2f8d179");

    const json = JSON.stringify(Object.fromEntries(formData));

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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 sm:px-12 lg:px-16"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          className="text-green-500 text-4xl font-bold"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Reach Out
        </motion.h1>
        <motion.p
          className="text-gray-400 mt-2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          Open to freelance projects, full-time roles, and everything in between.
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* LEFT — Hire Me */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="flex flex-col gap-5"
        >
          <div>
            <h2 className="text-white text-2xl font-semibold">Hire Me</h2>
            <p className="text-gray-400 mt-1 text-sm leading-relaxed">
              I build fast, accessible, and good-looking web experiences.
              Here&apos;s what I typically charge. Always happy to chat about your specific project.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-gray-950 border border-gray-800 rounded-lg p-4 hover:border-green-500/50 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-medium text-sm">{s.title}</span>
                  <span className="text-green-400 font-mono text-sm">{s.price}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-xs">
            * Prices vary based on complexity, timeline, and scope. Drop me a message for a custom quote.
          </p>
        </motion.div>

        {/* RIGHT — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="bg-gray-950 p-8 shadow-lg rounded-lg"
        >
          <motion.form
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 text-white"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 mt-1 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              className={`w-full font-semibold py-3 rounded-lg transition-opacity duration-200 ${
                loading ? "bg-gray-600 cursor-not-allowed" : "bg-green-600 hover:opacity-80"
              }`}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </section>
  );
};

export default Contact;