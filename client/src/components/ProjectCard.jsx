import React from 'react'
import { useNavigate } from 'react-router-dom'
// import codexa_ss1 from '../assets/images/codexa_ss1.jpg'

const ProjectCard = ({project,className}) => {

  const navigate = useNavigate();

  return (
    <div className={`flex flex-col gap-3 font-neue text-zinc-800 ${className}`}>
      <div className='flex justify-between'>
        <h1 className='text-lg uppercase flex gap-3  items-center'>
          <div className='w-3 h-3 rounded-full bg-zinc-800'></div>
          {/* <div className='font-semibold'>0{project.id}</div> */}
        {project.name}</h1>
        {/* <h1 className='flex justify-center items-center bg-zinc-200 rounded-lg px-3'>{project.type}</h1> */}
      </div>
      <div onClick={()=>{navigate(`${project.url}`)}} 
      className=' h-[20rem] group cursor-pointer   flex justify-center items-center  overflow-hidden text-zinc-700 '>
        <div className='w-full h-full group-hover:scale-95 duration-800 overflow-hidden bg-blue-300 transition-transform rounded-xl'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-900 transition-transform' src={project.thumbnail}/>
        </div>
     </div>
     <div className='flex gap-2 flex-wrap'>
      {project.tools.map((tool,i)=>(
        <div key={i} className=' px-4 py-1 border rounded-full border-zinc-600'>{tool}</div>
      ))}
    </div>  
    </div>
  )
}

export default ProjectCard