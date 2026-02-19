import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { FaGithub } from 'react-icons/fa6'
import { MdArrowOutward } from "react-icons/md"
import { projects } from '../data/projectsData'

const WorkPage = () => {

    
  return (
    <div className='w-full font-neue bg-zinc-100 text-zinc-800 pb-20  overflow-hidden'>
      
      {/* Page Header */}
      <div className='mb-15 pt-[5rem] md:pt-[7rem] border-b pb-10 border-zinc-400'>
        <h1 className='font-founders uppercase text-7xl leading-none px-10'>All Projects</h1>
        <p className="max-w-3xl text-zinc-600 mt-4 text-lg px-10">
  Projects I’ve built over the past few months and years — from hackathon prototypes to real client work, spanning simple landing pages to full-stack applications.
</p>
      </div>

      {/* Projects Grid */}
      <div className='px-6 md:px-10 mt-10'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 gap-x-5 md:gap-y-16 gap-y-10 w-full'>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* GitHub Link */}
      <Link to="https://github.com/deepsahilz" className='mt-20 group inline-block cursor-pointer ml-[50%] -translate-x-[50%]'>
        <div className='flex text-zinc-100 transition-all uppercase rounded-lg bg-zinc-800 hover:bg-zinc-950 justify-center items-center gap-2 px-4 md:px-6 py-3'>
          <FaGithub className='text-2xl mb-[2px] hidden md:flex'/>
          <span className='text-sm md:text-base'>More on Github</span>
          <MdArrowOutward className='md:text-xl rotate-45 group-hover:-rotate-0 group-hover:scale-120 duration-300 transition-transform'/>
        </div>
      </Link>
    </div>
  )
}

export default WorkPage
