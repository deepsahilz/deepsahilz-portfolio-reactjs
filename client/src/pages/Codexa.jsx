import React from 'react';
import { motion } from 'framer-motion';

const Codexa = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state: fade in and slight move from bottom
      animate={{ opacity: 1, y: 0 }} // Final state: fully visible and normal position
      exit={{ opacity: 0, y: -20 }} // Exit state: fade out and move up
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className='px-10 bg-zinc-100 font-neue text-zinc-800'>
        <div className='pt-40 pb-20 text-center'>
          <h1 className='px-10 text-5xl  lg:text-9xl text-zinc-800  font-semibold text-center uppercase'>
            codexa
          </h1>
          {/* <p>A project sharing/ social media platform </p> */}
        </div>
        <div className=' h-[40rem] mx-auto bg-zinc-900 rounded-2xl w-full mb-20 overflow-hidden'>
          {/* <img src="src/assets/images/codexa_1.webp" className='w-full h-full object-cover' /> */}
        </div>
    
        <div>
          <h1 className='text-4xl font-semibold mb-10'>Description</h1>
          <h1 className='text-4xl font-semibold mb-10'>Tech Stack</h1>
          <h1 className='text-4xl font-semibold mb-10'>See the Highlights<br/> of this Project</h1>
          <div></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Codexa;
