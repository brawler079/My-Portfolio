import { projects } from '../lib/projects';
import G from '../lib/images/GH.jpg';

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-start items-start px-8 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16">
      <header className="text-left mb-8">
        <h1 className="text-green-500 text-3xl font-bold">Things I've Worked On</h1>
      </header>

      <div className="flex flex-col gap-16 mt-8">
        {projects.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } w-full max-w-5xl mx-auto`}>
            <div className="w-full md:w-[48%]">
              <img 
                src={item.img.src} 
                alt={item.title} 
                className="w-full h-auto rounded-lg shadow-lg"/>
            </div>

            <div 
              className="w-full md:w-[50%] md:h- p-6 rounded-lg shadow-lg md:p-8">
              <div className="flex items-center justify-between">
                <h2 className="text-slate-300 text-2xl font-semibold">{item.title}</h2>
                <a 
                  href={item.github} 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <img 
                    src={G.src} 
                    alt="GitHub" 
                    className="w-12 h-12 object-contain cursor-pointer hover:opacity-80 transition mt-4"/>
                </a>
              </div>

              <p className="text-slate-400 text-sm mt-3 text-justify">●{item.PA}</p>
              <p className="text-slate-400 text-sm mt-1 text-justify">●{item.PB}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.TS.map((tech, i) => (
                  <span 
                    key={i} 
                    className="text-s bg-slate-900 text-green-500 px-2 py-1 rounded-3xl">
                    {tech}
                  </span>
                ))}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
