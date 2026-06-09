import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { MdArrowOutward } from 'react-icons/md';
import SEO from '../components/SEO';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

const ProjectPage = () => {
  const { projectName } = useParams();
  const [loadedVideos, setLoadedVideos] = useState({});
  const Project = projects.find(p => p.slug === projectName);
  if (!Project) {
    const containerVariants = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
    };

    return (
      <>
        <SEO 
          title="Project Not Found" 
          description="The project you are looking for does not exist on Sahil Singh's portfolio." 
          noIndex={true} 
        />
        <div className="w-full bg-zinc-200 font-neue text-zinc-800 pb-24 min-h-[80vh] flex flex-col justify-start">
          {/* Page Header */}
          <div className="mb-12 pt-[5rem] md:pt-[7rem] border-2 mt-24 mx-4 md:m-10 rounded-3xl pb-8 border-zinc-400">
            <h1 className="font-founders uppercase text-5xl sm:text-7xl md:text-8xl leading-none px-6 md:px-10">
              Project Not Found
            </h1>
            <p className="max-w-3xl text-zinc-600 mt-4 text-base md:text-lg px-6 md:px-10">
              The project code or identifier in the URL doesn't seem to match any of our recorded works.
            </p>
          </div>

          <div className="px-4 md:px-10 max-w-7xl w-full mx-auto">
            {/* Bento Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {/* Card 1: Explore Other Projects (Spans 2 cols) */}
              <motion.div
                variants={itemVariants}
                className="md:col-span-2 bg-zinc-100/60 backdrop-blur-md border border-zinc-300/80 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[300px]"
              >
                <div className="space-y-4">
                  <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block">EXPLORE WORK</span>
                  <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 leading-tight">
                    Check out our other built applications.
                  </h2>
                  <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                    I design and build dynamic web applications, interactive visual platforms, and responsive interfaces. Browse the full work catalog to find completed projects and active builds.
                  </p>
                </div>
                <div className="mt-8">
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 bg-zinc-900 text-zinc-100 hover:bg-zinc-950 transition-colors py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs cursor-pointer group"
                  >
                    <span>Browse All Projects</span>
                    <MdArrowOutward className="text-sm group-hover:rotate-45 duration-300 transition-transform" />
                  </Link>
                </div>
              </motion.div>

              {/* Card 2: Contact Support (Spans 1 col) */}
              <motion.div
                variants={itemVariants}
                className="bg-zinc-950 text-zinc-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg hover:scale-[1.01] transition-transform min-h-[300px]"
              >
                <div>
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block mb-6">NEED HELP?</span>
                  <h3 className="text-xl font-semibold mb-4 leading-tight">
                    Let's connect.
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    If you expected a specific project here, or if you want to collaborate on a new project or custom build, drop me a line.
                  </p>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors py-3 px-5 rounded-lg font-semibold uppercase tracking-wider text-xs cursor-pointer group w-full justify-between"
                  >
                    <span>Get in Touch</span>
                    <MdArrowOutward className="text-sm group-hover:rotate-45 duration-300 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </>
    );
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": Project.type === "webapp" ? "SoftwareApplication" : "CreativeWork",
    "name": Project.name,
    "description": Project.description,
    "url": `https://deepsahilz.vercel.app/work/${Project.slug}`,
    "image": `https://deepsahilz.vercel.app${Project.thumbnail}`,
    ...(Project.type === "webapp" && {
      "applicationCategory": "WebApplication",
      "operatingSystem": "All"
    }),
    "creator": {
      "@type": "Person",
      "name": "Sahildeep Singh"
    }
  };

  return (
    <>
      <SEO
        title={Project.name}
        description={Project.tagline || Project.description}
        ogImage={`https://deepsahilz.vercel.app${Project.thumbnail}`}
        schema={projectSchema}
      />
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
          {Project.highlights.map((item, i) => {
            const isVideoLoaded = loadedVideos[i] || false;
            return (
              <div key={i} className='col-span-1 md:col-span-6 relative'>
                <div className="bg-zinc-800 cursor-pointer flex-col relative group hover:scale-95 duration-500 transition-all flex justify-center h-[15rem] md:h-[30rem] border border-zinc-300 p-4 sm:p-6 md:p-10 shadow-md rounded-xl">
                  <h1 className="absolute top-4 left-4 sm:top-5 sm:left-5 text-sm sm:text-lg mb-2 text-zinc-100 z-10">
                    <span className='bg-[#9f0] px-3 rounded-md mr-2'></span> {item.text}
                  </h1>
                  <div className="relative overflow-hidden pt-5 w-full h-full transition-transform duration-700 group-hover:scale-110 rounded-lg flex justify-center items-center">

                    {/* Native Shrink-Wrap Container matching object-contain boundary */}
                    <div className="relative max-w-full max-h-full rounded-lg overflow-hidden flex items-center justify-center m-auto">
                      <img
                        src={item.imgSrc}
                        className={`max-w-full max-h-full rounded-lg object-contain transition-opacity duration-500 block ${
                          isVideoLoaded 
                            ? 'opacity-0 sm:opacity-70 sm:group-hover:opacity-0' 
                            : 'opacity-70'
                        }`}
                        alt={`${Project.name} Highlight - ${item.text}`}
                      />
                      <video
                        src={item.vidSrc}
                        onLoadedData={() => setLoadedVideos(prev => ({ ...prev, [i]: true }))}
                        className={`absolute inset-0 w-full h-full rounded-lg object-contain transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100' : 'opacity-0 pointer-events-none'
                          }`}
                        muted
                        loop
                        autoPlay
                        playsInline
                        onMouseOver={e => isVideoLoaded && e.target.play()}
                        onMouseOut={e => {
                          if (isVideoLoaded) {
                            e.target.pause();
                            e.target.currentTime = 0;
                          }
                        }}
                        onClick={e => {
                          if (isVideoLoaded) {
                            e.target.paused ? e.target.play() : (e.target.pause(), e.target.currentTime = 0);
                          }
                        }}
                      />
                      {item.vidSrc && !isVideoLoaded && (
                        <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-zinc-950/25 backdrop-blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <div className="flex flex-col items-center gap-2">
                            <div className="w-5 h-5 border-2 border-zinc-400 border-t-zinc-100 rounded-full animate-spin" />
                            <span className="text-[9px] font-mono tracking-wider text-white text-zinc-350 uppercase">Loading video...</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {item.vidSrc && isVideoLoaded && (
                      <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none transition-opacity duration-500 group-hover:opacity-0 z-20">
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
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ProjectPage;