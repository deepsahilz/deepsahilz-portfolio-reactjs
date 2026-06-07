import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { MdArrowOutward } from 'react-icons/md';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

const ProjectPage = () => {
  const { projectName } = useParams();
  const Project = projects.find(p => p.slug === projectName);
  if (!Project) return <div className='text-7xl h-screen pt-20'>No project found</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen bg-zinc-200 font-neue text-zinc-800'
    >
      {/* ── HEADER ── */}
      <div className='px-6 md:px-10 pt-[8rem] md:pt-[10rem] pb-8 md:pb-12 text-center'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-tight'>
          {"{ "}{Project.name}{" }"}
        </h1>
        <p className='mt-4 text-base sm:text-lg text-zinc-700 max-w-2xl mx-auto'>{Project.description}</p>
      </div>

      {/* ── BENTO GRID ── */}
      <div className='px-6 md:px-10 py-8 md:py-16 pb-20 grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto'>

        {/* ── CONCEPT — full width ── */}
        <motion.div
          {...fadeUp(0.05)}
          className='col-span-1 md:col-span-8 bg-zinc-100 border border-zinc-300 rounded-2xl p-6 sm:p-8 md:p-12'
        >
          <span className='text-xs uppercase tracking-widest font-semibold mb-4 block'>Description</span>
          {Project.isPending && (
            <p className='text-zinc-500 text-sm mb-3'>// Currently in progress and not completed</p>
          )}
          <p className='text-base sm:text-2xl md:text-3xl leading-snug max-w-5xl'>{Project.concept}</p>
        </motion.div>

        {/* ── TECH STACK — left, smaller ── */}
        <motion.div
          {...fadeUp(0.1)}
          className='col-span-1 md:col-span-4 bg-zinc-100 border border-zinc-300 rounded-2xl p-6 sm:p-8 flex flex-col justify-between'
        >
          <div>
            <span className='text-xs uppercase tracking-widest font-semibold mb-6 block'>Tech Stack</span>
            <div className='flex flex-wrap gap-2'>
              {Project.stack.map((item, i) => (
                <div
                  key={i}
                  className='px-3 py-1 text-sm uppercase border border-zinc-700 rounded-lg transition-colors duration-300'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          {Project.liveUrl && (
            <a
              href={Project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 w-full group flex items-center justify-center gap-2 bg-zinc-900 text-zinc-100 hover:bg-zinc-950 transition-colors py-3.5 rounded-xl font-semibold uppercase tracking-wider text-sm cursor-pointer"
            >
              <span>Visit Live Project</span>
              <MdArrowOutward className="text-lg group-hover:rotate-45 duration-300 transition-transform" />
            </a>
          )}
        </motion.div>

        {/* ── OTHER FEATURES — right, taller ── */}
        <motion.div
          {...fadeUp(0.15)}
          className='col-span-1 md:col-span-6 bg-zinc-100 border border-zinc-300 rounded-2xl p-6 sm:p-8'
        >
          <span className='text-xs uppercase tracking-widest font-semibold mb-6 block'>Features</span>
          <ul className='flex flex-col gap-3'>
            {Project.features.map((item, idx) => (
              <li key={idx} className='flex items-start gap-3 text-base md:text-lg'>
                <span className='bg-[#9f0] text-zinc-950 font-bold text-xs px-1.5 py-0.5 rounded shrink-0 mt-1'>
                  0{idx}
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ── PROJECT HIGHLIGHTS ── */}
        {Project.highlights.map((item, i) => (
          <div key={i} className='col-span-1 md:col-span-6 relative'>
            <div className="bg-zinc-800 cursor-pointer flex-col relative group hover:scale-95 duration-500 transition-all flex justify-center h-[15rem] md:h-[30rem] border border-zinc-300 p-4 sm:p-6 md:p-10 shadow-md rounded-xl">
              <h1 className="absolute top-4 left-4 sm:top-5 sm:left-5 text-sm sm:text-lg mb-2 text-zinc-100 z-10">
                <span className='bg-[#9f0] px-3 rounded-md mr-2'></span> {item.text}
              </h1>
              <div className="relative overflow-hidden pt-5 w-full h-full transition-transform duration-700 group-hover:scale-110 rounded-lg flex justify-center items-center">
                <img
                  src={item.imgSrc}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity rounded-lg opacity-70 duration-500 sm:group-hover:opacity-0 sm:block hidden"
                />
                <video
                  src={item.vidSrc}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity rounded-lg overflow-hidden duration-500 opacity-100 sm:opacity-0 sm:group-hover:opacity-100"
                  muted
                  loop
                  autoPlay
                  playsInline
                  onMouseOver={e => e.target.play()}
                  onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
                  onClick={e => { e.target.paused ? e.target.play() : (e.target.pause(), e.target.currentTime = 0); }}
                />
                {item.vidSrc && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-500 group-hover:opacity-0 z-20">
                    <div className="w-12 h-12 rounded-full bg-zinc-950/70 backdrop-blur-sm border border-zinc-100/20 text-zinc-100 flex items-center justify-center shadow-lg transition-all duration-300">
                      <svg className="w-5 h-5 fill-current text-zinc-100 ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

      </div>
    </motion.div>
  );
};

export default ProjectPage;