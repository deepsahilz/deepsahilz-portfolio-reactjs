import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 font-neue min-h-[30rem] px-6 md:px-10 py-10 text-zinc-100 bg-zinc-950'>
      <div className='text-5xl md:text-8xl font-semibold'>deepsahilz</div>

      <h1 className='text-base md:text-lg font-normal'>
        <span className='text-zinc-500 block md:inline mr-3'>EMAIL</span>
        deepsahil.online@gmail.com
      </h1>

      <div className='flex flex-col uppercase'>
        <span className='text-zinc-500 mb-2'>socials</span>
        <a href='#' className='hover:underline'>Github</a>
        <a href='#' className='hover:underline'>LinkedIn</a>
        <a href='#' className='hover:underline'>Instagram</a>
      </div>
    </div>
  )
}

export default Footer
