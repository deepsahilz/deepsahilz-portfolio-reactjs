import React from 'react'
import { useNavigate } from 'react-router-dom'
// import codexa_ss1 from '../assets/images/codexa_ss1.jpg'

const ProjectCard = ({project,className}) => {

  const navigate = useNavigate();

  return (
    <div className={`flex flex-col gap-3 font-neue text-zinc-800 ${className}`}>
    <div onClick={()=>{navigate(`${project.url}`)}} 
    className=' h-[30rem] group cursor-pointer  flex justify-center items-center overflow-hidden text-zinc-800 '>
      <div className='w-full h-full group-hover:scale-95 duration-800 overflow-hidden transition-transform rounded-xl'>
      <img className='w-full h-full object-cover group-hover:scale-110 duration-900 transition-transform' src={project.thumbnail}/>
      </div>
    </div>
    <div className='flex justify-between'>

    <h1 className='text-2xl font-semibold flex gap-2 items-center'><div className='w-4 h-4 rounded-full bg-zinc-800'></div>{project.name}</h1>
    <h1 className='flex justify-center items-center bg-zinc-200 rounded-lg px-3'>{project.type}</h1>
    </div>
    </div>
  )
}

export default ProjectCard