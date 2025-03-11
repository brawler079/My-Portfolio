import React from 'react';

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col fixed top-3/5 right-28 transform -translate-y-1/2">
      <a 
        href="mailto:anandabhilakshay@gmail.com" 
        className="text-slate-300 text-md font-mono tracking-wide hover:text-green-400 transition-all duration-300 relative p-2"
        style={{ writingMode: 'vertical-lr' }} 
      >
        anandabhilakshay@gmail.com
      </a>
    </div>
  );
}

export default Sidebar;
