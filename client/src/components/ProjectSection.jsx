import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectSection = () => {
  const projects = [
    {
      name:"Codexa: Social platform",
      url:"/codexa",
      type:"web app",
      techStack:["react","nodejs","express","mongodb"],
      thumbnail:"src/assets/images/codexa_1.webp",
    },
    {
      name:"MERN Chat App",
      url:"/chatapp",
      type:"web app",
      techStack:["react","nodejs","express","mongodb"],
      thumbnail:"src/assets/images/chatapp.webp",
    },
    {
      name:"MySQL compass",
      url:"/mysqlCompass",
      type:"Desktop app",
      techStack:["react","nodejs","electron"],
      thumbnail:"src/assets/images/compass.webp",
    },
    {
      name:"404 mini interaction game",
      url:"/404game",
      type:"mini web game",
      techStack:["react","nodejs","electron"],
      thumbnail:"src/assets/images/404game.webp",
    },
  ]
  return (
    <div className='  w-full font-neue bg-zinc-50 text-zinc-800 px-10 pb-40 rounded-b-2xl'>
      <h1 className='text-2xl font-semibold text-zinc-800 mb-10'>Projects</h1>
        <div className=' flex'>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-x-7 gap-y-16 w-full'>
            {projects.map((project, i) => (
                <ProjectCard className={`${i==1||i==2?"col-span-1":"col-span-2"}`} key={i} project={project} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProjectSection