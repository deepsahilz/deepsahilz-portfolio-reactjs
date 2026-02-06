import React from 'react';
import { motion } from 'framer-motion';
import codexa_searchbar from "../assets/images/codexa_searchbar.png"
import kreativkid1 from "../assets/images/kreativkid.png"
import kreativkid2 from "../assets/images/kreativkid_work.png"
import iristhumb from "../assets/images/irisThumb.png"
import mysql1 from "../assets/images/compass2.png"
import codexa_searchbarvid from "../assets/videos/codexa_searchbar.mp4"
import codexa_comments from "../assets/images/codexa_comments.png"
import codexa_commentsvid from "../assets/videos/codexa_comments.mp4"
import kreativkid11 from "../assets/videos/kreativkid1.mp4"
import irisvid from "../assets/videos/iris-walkthrough.mp4"
import kreativkid22 from "../assets/videos/kreativkid2.mp4"
import mysql11 from "../assets/videos/mysql1.mp4"
import { Link, useParams } from 'react-router-dom';
// import codexa_chat from "../assets/videos/codexa_chat.mp4"

const projects = [
    {   name: "codexa",
        description:"project sharing social media platform",
        concept: "Codexa is created to provide a social platform to developers, students and tech geeks to showcase their projects and learn from others, avoiding the hassle to find inspiration.",
        highlights: [
            {
            text: "Advance SearchBar with history and suggestions",
            imgSrc: codexa_searchbar,
            vidSrc: codexa_searchbarvid,
            },
            {
            text: "Comment section with nested replies and likes",
            imgSrc: codexa_comments,
            vidSrc: codexa_commentsvid,
            },],
            features:["Smart search with history and suggestions", "Project showcase with image/video previews","Commenting and feedback on projects.","Tag-based project categorization and filtering.","Like, save, and follow functionality for projects/users.","Add collaborator feature for working teams."],
            stack:["react.js","mongodb","express.js","web sockets"]
    },
    {
  name: "mysqlCompass",
  description: "GUI tool for managing and visualizing MySQL databases",
  concept: "Inspired by MongoDB Compass, this tool offers an intuitive interface to visualize, edit, and manage MySQL data efficiently with user-friendly features.",
  highlights: [
    {
      text: "",
      imgSrc: mysql1,
      vidSrc: mysql11,
    },
    
  ],
  isPending:true,
  features: [
    "Smart table viewer with auto row expansion",
    "Edit cells directly or via modals",
    "Search and filter data easily with history"
  ],
  stack: ["react.js", "tailwindcss", "node", "mysql"]
},
{
  name: "kreativkid",
  description: "Portfolio website for an artist to express his art and work.",
  concept: "KreativKid is a portfolio website designed to highlight an artist’s creativity through a clean and expressive portfolio layout, blending bold visuals and smooth interactions maintaining a visual language throughout.",
  highlights: [
    {
      text: "Interactive hero section and home page",
      imgSrc: kreativkid1,
      vidSrc: kreativkid11,
    },
    {
      text: "Dynamic Gallery with Before-After Image Comparison",
      imgSrc: kreativkid2,
      vidSrc: kreativkid22,
    },
  ],
  features: [
    "Animated transitions between sections",
    "Responsive and modern layout for all screen sizes",
    "Emphasis on visuals with minimal UI distractions"
  ],
  stack: ["react.js", "tailwindcss", "gsap"]
},
 {   name: "IRIS2026",
        description:"Official techfest website and event management platform of GNDU, Amritsar",
        concept: "IRIS is a full-stack event management platform designed to handle registrations, payments, and administration for a large-scale technical fest, focusing on reliability, speed, and a clean user experience.",
   highlights: [
    {
      text: "Site walkthrough",
      imgSrc: iristhumb,
      vidSrc: irisvid,
    },
   
  ],
  features: [
  "Secure user sign-in and account access",
  "Smooth event registration with flexible team options",
  "Multiple payment options with instant confirmation",
  "Automatic ticket creation with unique reference ID",
  "Easy-to-use admin dashboard for managing events",
  "Clean, modern, and fully responsive interface",
],

  stack: ["Next.js", "Supabase", "Tailwindcss","GSAP","Postgresql"],
    },



]


const ProjectPage = () => {
  const {projectName} = useParams();
  console.log(projectName)
  const Project = projects.find((p)=>p.name === projectName)
  if(!Project) return (<div className='text-7xl h-screen pt-20'>no project found</div>)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} // Initial state: fade in and slight move from bottom
      animate={{ opacity: 1, y: 0 }} // Final state: fully visible and normal position
      exit={{ opacity: 0, y: -20 }} // Exit state: fade out and move up
      transition={{ duration: 0.5 }} // Transition duration
    >


      <div className='px-5 border-b pb-10 md:pb-20 sm:px-10 bg-zinc-200 font-neue text-zinc-800'>
        
        <div className='pt-[12rem] mb-20 text-center'>
          <h1 className='px-5 text-5xl lg:text-9xl text-zinc-800 font-semibold text-center uppercase'>{"{ "}{Project.name}{" }"}</h1>
          <p className='sm:text-lg'>{Project.description}</p>
        </div>


        <div className='flex justify-between'>

          <div className='mb-14'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-2 md:mb-5'>Concept</h1>
            {(Project.isPending == true)&&<h2 className='text-2xl text-zinc-700'>//Currently in progress and not completed</h2> }
            <h2 className='text-xl md:text-3xl text-zinc-700 '>{Project.concept}</h2>
          </div>

        {/* <div className=' h-[40rem] mx-auto bg-zinc-900 rounded-2xl w-full mb-20 overflow-hidden'>
           <img src="src/assets/images/codexa_1.webp" className='w-full h-full object-cover' /> 
          </div>  */}
          
              </div>

        <div>
          

          <div className='mb-14'>
            <h1 className='text-2xl md:text-4xl font-semibold mb-4 md:mb-5'>Project Highlights</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-14'>
              {Project.highlights.map((item, i) => (
                <div key={i} className=''>
                  <h1 className="text-lg md:text-xl  mb-2  text-zinc-700 "><span className='bg-[#9f0] px-1 '>#</span> {item.text}</h1>
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
            
              {Project.features.map((item,idx)=>(
                  <div key={idx} className='flex gap-2'>
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
              {Project.stack.map((item,i)=>( 
                <div key={i} className=' px-3 md:px-5 uppercase py-1 md:py-2  md:text-lg  border rounded-lg border-zinc-700 '>{item}</div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
