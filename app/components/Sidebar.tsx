/* eslint-disable @next/next/no-img-element */

import React from "react";
import { socialMediaLinks } from "../lib/social";

const Sidebar = () => {
  return (
    <>
      {/* Right Sidebar - Email */}
      <div className="hidden md:flex flex-col fixed top-[80%] right-20 transform -translate-y-1/2 items-center group">
        <a 
          href="mailto:anandabhilakshay@gmail.com" 
          className="text-slate-300 text-sm font-mono p-4 hover:text-green-400
                     transition-all duration-300 group-hover:translate-x-1"
          style={{ writingMode: 'vertical-lr' }}
        >
          anandabhilakshay@gmail.com
        </a>
        <div className="w-[1px] h-[315px] bg-green-400 mt-1 transition-all duration-300"></div>
      </div>

      {/* Left Sidebar - Social Media Links */}
      <div className="hidden md:flex flex-col fixed top-[80%] left-20 transform -translate-y-1/2 items-center group">
        {socialMediaLinks.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            target="_blank" 
            className="py-7 hover:-translate-x-1 transition-all duration-300 hover:fill-green-400"
          >
            <img src={item.icon.src} alt={item.name} className="w-6 h-6" />
          </a>
        ))}
        <div className="w-[1px] h-[315px] bg-green-400 mt-1 transition-all duration-300"></div>
      </div>
    </>
  );
}

export default Sidebar;
