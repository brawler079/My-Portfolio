"use client";

import { Frontend, Backend, DB, Tools } from "../lib/util";

const sections = [
  { title: "Front-end", data: Frontend },
  { title: "Back-end", data: Backend },
  { title: "Database", data: DB },
  { title: "Ops", data: Tools },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col justify-start items-start px-8 py-36 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16">
      <div className="max-w-3xl text-left">
        <h1 className="text-3xl font-bold text-green-500 mb-6">Skills</h1>
      </div>
      <div className="w-full flex flex-col space-y-18">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-slate-400 mb-4">
              {section.title}
            </h2>
            <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-12 p-4">
              {section.data.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center px-6 py-6 rounded-xl max-w-[130px] sm:max-w-[180px]"
                >
                  <img
                    src={item.img.src}
                    alt={item.title}
                    className="w-12 h-12 sm:w-20 sm:h-20 transition-transform duration-300 hover:scale-110"
                  />
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-300 text-center mt-3">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
