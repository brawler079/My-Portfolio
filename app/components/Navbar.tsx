"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Function to close the menu if clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
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

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`fixed left-1/4 inset-0 bg-[#0A0A1E]/80 backdrop-blur-md flex flex-col 
        items-center justify-center transition-all ease-in duration-300
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>

        <nav className="flex flex-col space-y-12 text-center">
          <Link href="#Home" className="text-white text-2xl hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#about-me" className="text-white text-2xl hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="#skills" className="text-white text-2xl hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="#projects" className="text-white text-2xl hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="#contact" className="text-white text-2xl hover:text-indigo-300 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>

        <button
          className="absolute top-9 right-13 text-white text-4xl"
          onClick={() => setIsOpen(false)}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
