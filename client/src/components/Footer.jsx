import React from 'react'
import { FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa'
import { FaArrowTurnDown } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between  items-start gap-6 md:gap-0 font-neue min-h-[20rem] px-6 md:px-10 py-10 text-zinc-100 bg-zinc-950'>


      <div className='text-5xl hidden md:flex md:text-8xl font-semibold'>@deepsahilz</div>

      <div className='text-3xl md:hidden font-semibold'>Have questions?<br/>I have answers</div>
      <div className='text-xl flex text-[#9f4] md:hidden  gap-2 items-center'>Let's connect at<FaArrowTurnDown className='text-sm -mb-1'/></div>
      <h1 className=' text-lg font-normal'>
        <span className='text-zinc-500 text-base md:text-lg block md:inline mr-3'>EMAIL</span>
        <span className='underline'>deepsahil.online@gmail.com</span>
      </h1>

      <div className='flex flex-col gap-1  md:text-lg justify-right  md:items-end uppercase'>
        <span className='text-zinc-500 mb-2'>socials</span>
        <a href='https://github.com/deepsahilz' className='underline text-[16px] flex items-center gap-2'><FaGithub className='text-zinc-500'/>Github</a>
        <a href='https://www.linkedin.com/in/sahil-singh-0421b7275/' className='underline text-[16px] flex items-center gap-2'><FaLinkedin className='text-zinc-500'/>LinkedIn</a>
        {/* <a href='#' className='underline text-[16px] flex items-center gap-2'><FaInstagram className='text-zinc-500'/>Instagram</a> */}
      </div>
      <div className='text-5xl mt-8 md:hidden md:text-8xl font-semibold'>@deepsahilz</div>
    </div>
  )
}

export default Footer
