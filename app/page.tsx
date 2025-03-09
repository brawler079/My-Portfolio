import About from './components/About'

const Home = () => {
  return (
    <>
    {/* Home */}
    <section id="Home" className='min-h-screen flex items-center px-8 mx-6 sm:mx-8 md:mx-14 sm:px-12 lg:px-16'>
      <div className='max-w-5xl text-left'>
        <h1 className='text-green-500 mb-4 md:text-lg font-light font-mono'>Hi, my name is</h1>
        <h2 className='text-slate-300 mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold'>
          Abhilakshay Anand
        </h2>
        <h3 className='text-slate-400 mb-8 text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold'>
        Building the web, better
        </h3>
        <p className='text-slate-400 mb-12 max-w-lg md:max-w-2xl md:text-lg font-normal'>
          Innovating the web with precision and creativity. As a full-stack developer, I craft seamless, user-friendly experiences that blend performance, accessibility, and modern design.
        </p>
        <a href='#' className='text-green-500 font-mono text-lg border border-green-500 px-5 py-3 
        rounded-md hover:bg-green-600/10 transition duration-200'>
          Get in touch
        </a>
      </div>
    </section>
    <About />
    </>
  )
}

export default Home