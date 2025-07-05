import React from 'react'
import ProjectCard from './ProjectCard'
import codexa_ss from '../assets/images/codexa_ss1.jpg'
import chatapp from '../assets/images/kreativkid.png'
import compass from '../assets/images/compass2.png'
import game404 from '../assets/images/404game.webp'
import { FaGithub } from 'react-icons/fa6'
import { MdArrowOutward } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'


const ProjectSection = () => {
  const navigate = useNavigate();
  const projects = [
    {
      id:1,
      name:"CODEXA (Project showcasing/Social platform)",
      url:"/codexa",
      type:"web app",
      tools:["Full stack app","mern app","web sockets"],
      thumbnail: codexa_ss
    },
    {
      id:2,
      name:"KreativKid Artist portfolio",
      url:"/kreativkid",
      type:"website",
      tools:["react","tailwind css","gsap","lenis"],
      thumbnail:chatapp,
    },
    // {
    //   id:3,
    //   name:"MERN Chat App",
    //   url:"/chatapp",
    //   type:"web app",
    //   tools:["react","nodejs","express","mongodb"],
    //   thumbnail:chatapp,
    // },
    {
      id:4,
      name:"MySQL compass",
      url:"/mysqlCompass",
      type:"Desktop app",
      tools:["Desktop app","react","nodejs","electron"],
      thumbnail:compass,
    },
    // {
    //   id:5,
    //   name:"404 mini interaction game",
    //   url:"/404game",
    //   type:"mini web game",
    //   tools:["react","nodejs","electron"],
    //   thumbnail:game404,
    // },
    // {
    //   id:6,
    //   name:"Ochi Clone",
    //   url:"/404game",
    //   type:"mini web game",
    //   tools:["Landing page","react","tailwind css","Awwwards clone"],
    //   thumbnail:"",
    // },
    // {
    //   id:6,
    //   name:"URL shortener",
    //   url:"/404game",
    //   type:"mini web game",
    //   tools:["Full stack app","mern stack","idk"],
    //   thumbnail:"",
    // },
    
  ]
  return (
    <div className='  w-full font-neue bg-zinc-100  rounded-t-4xl border-t overflow-hidden border-zinc-400 pb-20 text-zinc-800 '>
      <div className='mb-15 pt-[5rem] md:pt-[7rem] border-b pb-10   border-zinc-400'>
          <h1 className='font-founders uppercase text-7xl leading-none px-10 '>Featured projects</h1>
      </div>
        <div className=' px-6 md:px-10'>
            <div className='grid  xl:grid-cols-3 lg:grid-cols-2  gap-x-5 md:gap-y-16 gap-y-10 w-full'>
              {/* <div className='absolute top-0 left-[50%]'>hello</div> */}
            {projects.map((project, i) => (
                // <ProjectCard className={`${i==0||i==1?"col-span-2":"col-span-1"}`} key={i} project={project} />
                <ProjectCard className={``} key={i} project={project} />
                ))}
            </div>
        </div>
            <Link to="https://github.com/deepsahilz" className='mt-20 group inline-block cursor-pointer ml-[50%] -translate-x-[50%]  '>
            <div className='flex text-zinc-100 transition-all uppercase rounded-lg   bg-zinc-800 hover:bg-zinc-950 justify-center items-center gap-2 px-4 md:px-6 py-3'>
              <FaGithub className='text-2xl mb-[2px] hidden md:flex'/>
              <span className='text-sm md:text-base'>View all Projects</span>
              <MdArrowOutward className='md:text-xl rotate-45 group-hover:-rotate-0  group-hover:scale-120 duration-300 transition-transform '/>
            </div>
            </Link>
    </div>
  )
}

export default ProjectSection