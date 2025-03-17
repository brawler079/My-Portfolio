"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-transparent h-auto">
      <div className="flex items-center justify-between 
        mx-10 md:mx-28 lg:mx-52 xl:mx-64 my-6 p-4 md:py-4 md:px-6 bg-white/10 backdrop-blur-lg border border-transparent
        shadow-2xl shadow-indigo-500/20 rounded-3xl">

        <div className="rounded-full font-semibold text-white/80 hover:text-indigo-300 bg-[#010713]/60 px-2 cursor-pointer">A</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {[
            { href: "#Home", label: "Home" },
            { href: "#about-me", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-white/80 hover:text-green-400 transition-colors duration-300
                 before:absolute before:left-0 before:bottom-0 before:w-0 before:h-[2px] 
                 before:bg-green-400 before:transition-all before:duration-300
                 hover:before:w-full">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu (Animated Slide-In) */}
      <div 
        ref={menuRef}
        className={`fixed top-0 left-0 w-full h-screen bg-[#0A0A1E]/90 backdrop-blur-md flex flex-col items-center justify-center 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 invisible"}`}>

        <nav className="flex flex-col space-y-12 text-center">
          {[
            { href: "#Home", label: "Home" },
            { href: "#about-me", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white text-2xl hover:text-indigo-300 transition"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Close Button (Inside the Menu) */}
        <button
          className="absolute top-9 right-10 text-white text-4xl"
          onClick={() => setIsOpen(false)}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
