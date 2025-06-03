import React from 'react';
import { motion } from 'framer-motion';
import codexa_searchbar from "../assets/images/codexa_searchbar.png"
import codexa_searchbarvid from "../assets/videos/codexa_searchbar.mp4"
import codexa_comments from "../assets/images/codexa_comments.png"
import codexa_commentsvid from "../assets/videos/codexa_comments.mp4"
import codexa_chat from "../assets/videos/codexa_chat.mp4"

const Codexa = () => {
  const project = {
    title: "codexa",
    concept: "Codexa is created to provide a social platform to developers, students and tech geeks to showcase their projects and learn from others, avoiding the hassle to find inspiration.",
    highlights: [
      {
        name: "Advance SearchBar with history and suggestions",
        imgSrc: codexa_searchbar,
        vidSrc: codexa_searchbarvid,
      },
      {
        name: "Comment section with nested replies and likes",
        imgSrc: codexa_comments,
        vidSrc: codexa_commentsvid,
      },
      // {
      //   name:"Real time chat with online status& notification",
      //   // imgSrc:codexa_searchbar,
      //   vidSrc:codexa_chat,
      // }
    ]
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} // Initial state: fade in and slight move from bottom
      animate={{ opacity: 1, y: 0 }} // Final state: fully visible and normal position
      exit={{ opacity: 0, y: -20 }} // Exit state: fade out and move up
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className='px-5 border-b pb-10 md:pb-20 sm:px-10 bg-zinc-200 font-neue text-zinc-800'>
        
        <div className='pt-28 mb-14 text-center'>
          <h1 className='px-5 text-5xl lg:text-9xl text-zinc-800 font-semibold text-center uppercase'>{"{ "}codexa{" }"}</h1>
          <p className='sm:text-lg'>A project sharing/ social media platform </p>
        </div>


        <div className='flex justify-between'>

          <div className='mb-14'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-2 md:mb-5'>Concept</h1>
            <h2 className='text-xl md:text-3xl text-zinc-700 '>{project.concept}</h2>
          </div>

        {/* <div className=' h-[40rem] mx-auto bg-zinc-900 rounded-2xl w-full mb-20 overflow-hidden'>
           <img src="src/assets/images/codexa_1.webp" className='w-full h-full object-cover' /> 
          </div>  */}
          
              </div>

        <div>
          

          <div className='mb-14'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-4 md:mb-5'>Project Highlights</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-14'>
              {project.highlights.map((item, i) => (
                <div key={i} className=''>
                  <h1 className="text-lg md:text-xl  mb-2  text-zinc-700 "><span className='bg-[#9f0] px-1 '>#</span> {item.name}</h1>
                  <div className="bg-zinc-800 cursor-pointer relative group hover:scale-95 duration-500 transition-all flex justify-center items-center h-[15rem] md:h-[30rem] border border-zinc-300 md:p-10  shadow-md rounded-xl">
                    <div className="relative overflow-hidden w-full h-full transition-transform duration-700 group-hover:scale-110 rounded-lg flex justify-center items-center">
                      <img
                        src={item.imgSrc}
                        className="transition-opacity rounded-lg opacity-70 duration-500 sm:group-hover:opacity-0 sm:block hidden md:max-w-full md:max-h-full"
                      />
                      <video
                        src={item.vidSrc}
                        className="px-5 sm:px-0 sm:absolute  transition-opacity rounded-lg overflow-hidden duration-500 opacity-100 sm:opacity-0 sm:group-hover:opacity-100  md:max-w-full md:max-h-full"
                        muted
                        loop
                        autoPlay
                        onMouseOver={e => e.target.play()}
                        onMouseOut={e => {
                          e.target.pause();
                          e.target.currentTime = 0;
                        }}
                        onClick={e => {
                          if (e.target.paused) e.target.play();
                          else {
                            e.target.pause();
                            e.target.currentTime = 0;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          

          <div className='mb-14'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-4 md:mb-5'>Other features</h1>
            <ul className='text-lg md:text-xl flex flex-col gap-2'> 
              {["User can like,comment,reply and save projects",
              "User can follow/unfolow each other",
              "User can explore the home feed and view project details ",
              "Project with multiple collaborators can be shared,visible on all profiles ",].map((item,idx)=>(
                  <div className='flex gap-2'>
                  <div className='bg-[#9f0] px-1 w-8 h-7 inline-block'> 0{idx}</div> 
                <li key={idx}>
                  {item}</li>
                  </div>
              ))
              }
            </ul>
          </div>

          <div className='mb-14'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-3 md:mb-5'>Tech Stack</h1>
            <div className='flex flex-wrap gap-2'>
              {["React","TailwindCSS","ExpressJs","Nodejs"].map((tag,i)=>( 
                <div key={i} className=' px-3 md:px-5 uppercase py-1 md:py-2  md:text-lg  border rounded-lg border-zinc-700 '>{tag}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Codexa;
