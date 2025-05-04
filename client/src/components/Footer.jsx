import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between items-start font-neue h-[30rem] px-10 py-10 text-zinc-100 bg-zinc-950'>
      <div className='text-8xl font-semibold '>deepsahilz</div>
      <h1 className='text-lg font-normal'><span className='text-zinc-500 mr-3'>EMAIL</span>deepsahil.online@gmail.com</h1>
      <div className='flex flex-col uppercase'>
        <span className='text-zinc-500'>socials</span>
        <a href='#'>Github</a>
        <a href='#'>LinkedIn</a>
        <a href='#'>Instagram</a>
      </div>
    </div>
  )
}

export default Footer