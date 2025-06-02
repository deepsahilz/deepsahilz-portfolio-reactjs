import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 font-neue min-h-[20rem] px-6 md:px-10 py-10 text-zinc-100 bg-zinc-950'>
                <div className='flex items-end'>


      <div className='text-5xl md:text-8xl font-semibold'>
        <span className=''>@</span>

deepsahilz</div>
                </div>

      <h1 className='text-base md:text-lg font-normal'>
        <span className='text-zinc-500 block md:inline mr-3'>EMAIL</span>
        deepsahil.online@gmail.com
      </h1>

      <div className='flex flex-col text-lg justify-right items-end uppercase'>
        <span className='text-zinc-500 mb-2'>socials</span>
        <a href='#' className='hover:underline flex items-center gap-2'><FaGithub className='text-zinc-500'/>Github</a>
        <a href='#' className='hover:underline flex items-center gap-2'><FaLinkedin className='text-zinc-500'/>LinkedIn</a>
        <a href='#' className='hover:underline flex items-center gap-2'><FaInstagram className='text-zinc-500'/>Instagram</a>
      </div>
    </div>
  )
}

export default Footer
