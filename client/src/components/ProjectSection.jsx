import React from 'react'
import ProjectCard from './ProjectCard'
import codexa_1 from '../assets/images/codexa_1.webp'
import chatapp from '../assets/images/chatapp.webp'
import compass from '../assets/images/compass.webp'
import game404 from '../assets/images/404game.webp'
import { FaGithub } from 'react-icons/fa6'
import { MdArrowOutward } from "react-icons/md";


const ProjectSection = () => {
  const projects = [
    {
      id:1,
      name:"Codexa: Social platform",
      url:"/codexa",
      type:"web app",
      tools:["react","nodejs","express","mongodb"],
      thumbnail: codexa_1
    },
    {
      id:2,
      name:"MERN Chat App",
      url:"/chatapp",
      type:"web app",
      tools:["react","nodejs","express","mongodb"],
      thumbnail:chatapp,
    },
    {
      id:3,
      name:"MySQL compass",
      url:"/mysqlCompass",
      type:"Desktop app",
      tools:["react","nodejs","electron"],
      thumbnail:compass,
    },
    {
      id:4,
      name:"404 mini interaction game",
      url:"/404game",
      type:"mini web game",
      tools:["react","nodejs","electron"],
      thumbnail:game404,
    },
    {
      id:5,
      name:"Ochi Clone",
      url:"/404game",
      type:"mini web game",
      tools:["react","nodejs","electron"],
      thumbnail:"",
    },
    {
      id:6,
      name:"URL shortener",
      url:"/404game",
      type:"mini web game",
      tools:["react","nodejs","electron"],
      thumbnail:"",
    },
    
  ]
  // const projects = [
  //   {
  //     name:"Codexa: Social platform",
  //     url:"/codexa",
  //     type:"web app",
  //     tools:["react","nodejs","express","mongodb"],
  //     thumbnail: codexa_1
  //   },
  //   {
  //     name:"MERN Chat App",
  //     url:"/chatapp",
  //     type:"web app",
  //     tools:["react","nodejs","express","mongodb"],
  //     thumbnail:chatapp,
  //   },
  //   {
  //     name:"MySQL compass",
  //     url:"/mysqlCompass",
  //     type:"Desktop app",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:compass,
  //   },
  //   {
  //     name:"404 mini interaction game",
  //     url:"/404game",
  //     type:"mini web game",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:game404,
  //   },
  //   {
  //     name:"Ochi Clone",
  //     url:"/404game",
  //     type:"mini web game",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:"",
  //   },
  //   {
  //     name:"URL shortener",
  //     url:"/404game",
  //     type:"mini web game",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:"",
  //   },
  //   {
  //     name:"KreativKid: Artist's portfolio",
  //     url:"/404game",
  //     type:"mini web game",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:"",
  //   },
  //   {
  //     name:"SewaSadan- NGO page",
  //     url:"/404game",
  //     type:"mini web game",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:"",
  //   },
  //   {
  //     name:"Brainwave-frontend site",
  //     url:"/404game",
  //     type:"mini web game",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:"",
  //   },
  //   {
  //     name:"notes app",
  //     url:"/404game",
  //     type:"mini web game",
  //     tools:["react","nodejs","electron"],
  //     thumbnail:game404,
  //   },
  // ]
  return (
    <div className='  w-full font-neue bg-zinc-50 rounded-t-4xl border-t border-zinc-300 text-zinc-800  rounded-b-2xl'>
      <div className='mb-15 pt-[5rem] md:pt-[7rem] border-b pb-10 border-zinc-400'>
        <div className="flex justify-between items-end px-6 md:px-10">
          <h1 className='text-4xl md:text-5xl font-semibold text-zinc-800 bg-[#9f0]'>Featured<br className='md:hidden'/> Projects</h1>
          <h1 className='text-md  text-zinc-100 flex items-center gap-2 bg-zinc-800  uppercase rounded-full px-6 py-2'>
            {/* <FaGithub className='text-xl mb-[2px]'/> */}
            View all<span className='hidden md:visible'>projects</span> 
              <MdArrowOutward className='text-xl'/>
            </h1>
        </div>
      </div>
        <div className='relative px-6 md:px-10'>
            <div className='grid lg:grid-cols-6 grid-cols-1 gap-x-7 gap-y-16 w-full'>
              {/* <div className='absolute top-0 left-[50%]'>hello</div> */}
            {projects.map((project, i) => (
                // <ProjectCard className={`${i==0||i==1?"col-span-2":"col-span-1"}`} key={i} project={project} />
                <ProjectCard className={`col-span-2`} key={i} project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectSection