import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdArrowOutward } from 'react-icons/md';
import SEO from '../components/SEO';

const NotFoundPage = () => {
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
        title="404 - Page Not Found" 
        description="The page you are looking for does not exist on Sahil Singh's portfolio." 
        noIndex={true} 
      />
      <div className="w-full h-screen bg-zinc-200 font-neue text-zinc-800 flex flex-col justify-center py-6 px-4 md:px-10 overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-center h-full">
          
          {/* Restored Page Header - Full Size */}
          <div className="mb-10 pt-[4rem] md:pt-[5rem] border-2 rounded-3xl pb-8 border-zinc-400">
            <h1 className="font-founders uppercase text-5xl sm:text-7xl md:text-8xl leading-none px-6 md:px-10">
              Page Not Found
            </h1>
            <p className="max-w-3xl text-zinc-600 mt-4 text-base md:text-lg px-6 md:px-10">
              The link you followed might be broken, or the page may have been removed.
            </p>
          </div>

          {/* Restored Bento Grid - Full Size */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Card 1: 404 Visual Graphic */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-zinc-100/60 backdrop-blur-md border border-zinc-300/80 rounded-3xl p-6 md:p-10 shadow-sm flex flex-col justify-between min-h-[300px]"
            >
              <div className="space-y-4">
                <span className="text-zinc-400 text-xs font-semibold uppercase tracking-wider block">ERROR CODE</span>
                <h2 className="font-founders text-8xl md:text-[10rem] font-bold text-zinc-900 leading-none select-none tracking-tight">
                  404
                </h2>
                <p className="text-zinc-600 leading-relaxed text-base md:text-lg">
                  You have ventured outside the mapped coordinates. Let's get you back to the build grid.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 bg-zinc-900 text-zinc-100 hover:bg-zinc-950 transition-colors py-3.5 px-6 rounded-xl font-semibold uppercase tracking-wider text-xs cursor-pointer"
                >
                  <span>Go Back Home</span>
                  <MdArrowOutward className="text-sm" />
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Sitemap Navigation */}
            <motion.div
              variants={itemVariants}
              className="bg-zinc-950 text-zinc-100 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg min-h-[300px]"
            >
              <div>
                <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block mb-6">SITEMAP</span>
                <ul className="space-y-4 font-neue text-sm">
                  <li className="border-b border-zinc-800 pb-2">
                    <Link to="/" className="flex justify-between items-center group text-zinc-400 hover:text-zinc-100 transition-colors">
                      <span className="font-medium">Home</span>
                      <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li className="border-b border-zinc-800 pb-2">
                    <Link to="/work" className="flex justify-between items-center group text-zinc-400 hover:text-zinc-100 transition-colors">
                      <span className="font-medium">Work</span>
                      <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li className="border-b border-zinc-800 pb-2">
                    <Link to="/about" className="flex justify-between items-center group text-zinc-400 hover:text-zinc-100 transition-colors">
                      <span className="font-medium">About</span>
                      <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                  <li className="border-b border-zinc-800 pb-2">
                    <Link to="/contact" className="flex justify-between items-center group text-zinc-400 hover:text-zinc-100 transition-colors">
                      <span className="font-medium">Contact</span>
                      <MdArrowOutward className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-6 text-zinc-500 text-xs uppercase tracking-wider font-semibold">
                LOST BUT NOT STRANDED
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </>
  );
};

export default NotFoundPage;
