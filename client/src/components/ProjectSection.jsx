import React from 'react'
import ProjectCard from './ProjectCard'
import codexa_1 from '../assets/images/codexa_1.webp'
import chatapp from '../assets/images/chatapp.webp'
import compass from '../assets/images/compass.webp'
import game404 from '../assets/images/404game.webp'
const ProjectSection = () => {
  const projects = [
    {
      name:"Codexa: Social platform",
      url:"/codexa",
      type:"web app",
      techStack:["react","nodejs","express","mongodb"],
      thumbnail: codexa_1
    },
    {
      name:"MERN Chat App",
      url:"/chatapp",
      type:"web app",
      techStack:["react","nodejs","express","mongodb"],
      thumbnail:chatapp,
    },
    {
      name:"MySQL compass",
      url:"/mysqlCompass",
      type:"Desktop app",
      techStack:["react","nodejs","electron"],
      thumbnail:compass,
    },
    {
      name:"404 mini interaction game",
      url:"/404game",
      type:"mini web game",
      techStack:["react","nodejs","electron"],
      thumbnail:game404,
    },
  ]
  return (
    <div className='  w-full font-neue bg-zinc-50 text-zinc-800 px-6 md:px-10 pb-40 rounded-b-2xl'>
      <h1 className='text-2xl font-semibold text-zinc-800 mb-10'>Projects</h1>
        <div className='relative'>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-x-7 gap-y-16 w-full'>
              {/* <div className='absolute top-0 left-[50%]'>hello</div> */}
            {projects.map((project, i) => (
                // <ProjectCard className={`${i==1||i==2?"col-span-1":"col-span-2"}`} key={i} project={project} />
                <ProjectCard className={`col-span-2`} key={i} project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectSection