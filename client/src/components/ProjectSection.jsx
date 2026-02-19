import React from 'react'
import ProjectCard from './ProjectCard'
import { FaGithub } from 'react-icons/fa6'
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom'
import { projects } from '../data/projectsData'

const ProjectSection = () => {
  // Filter only featured projects
  const featuredProjects = projects.filter(p => p.isFeatured);

  return (
    <div className='w-full font-neue bg-zinc-100 rounded-t-4xl border-t overflow-hidden border-zinc-400 pb-20 text-zinc-800'>
      
      {/* Header */}
      <div className='mb-15 pt-[5rem] md:pt-[7rem] border-b pb-10 border-zinc-400'>
        <h1 className='font-founders uppercase text-7xl leading-none px-10'>
          Featured projects
        </h1>
      </div>

      {/* Projects Grid */}
      <div className='px-6 md:px-10'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-x-5 md:gap-y-16 gap-y-10 w-full'>
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} className="" />
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <Link to="/work" className='mt-20 group inline-block cursor-pointer ml-[50%] -translate-x-[50%]'>
        <div className='flex text-zinc-100 transition-all uppercase rounded-lg bg-zinc-800 hover:bg-zinc-950 justify-center items-center gap-2 px-4 md:px-6 py-3'>
          {/* <FaGithub className='text-2xl mb-[2px] hidden md:flex'/> */}
          <span className='text-sm md:text-base'>View more</span>
          <MdArrowOutward className='md:text-xl rotate-45 group-hover:-rotate-0 group-hover:scale-120 duration-300 transition-transform'/>
        </div>
      </Link>
    </div>
  )
}

export default ProjectSection
