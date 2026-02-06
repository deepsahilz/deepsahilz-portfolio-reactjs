import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaArrowTurnDown } from "react-icons/fa6"

const Footer = () => {
  return (
    <section id="contact">
    <footer className='font-neue bg-zinc-950 text-zinc-100'>
      <div className='px-6 md:px-10 py-12 md:py-20'>
        
        {/* Desktop Layout */}
        <div className='hidden md:flex md:flex-col gap-16'>
          
          {/* Top Section - Big Username & CTA */}
          <div className='flex justify-between items-start'>
            <div className='text-7xl lg:text-8xl font-bold leading-none'>
              <span className='font-neue'>@</span>deepsahilz
            </div>
            <div className='text-right'>
              <div className='text-3xl lg:text-4xl font-semibold mb-2'>
                Let's work together
              </div>
              <div className='text-lg text-zinc-400'>
                Open for freelance & collaborations
              </div>
            </div>
          </div>

          {/* Bottom Section - Contact Info */}
          <div className='flex justify-between items-end border-t border-zinc-800 pt-10'>
            
            {/* Email */}
            <div className='flex flex-col gap-3'>
              <span className='text-zinc-500 text-sm uppercase tracking-wider'>Get in touch</span>
              <a 
                href='mailto:deepsahil.online@gmail.com' 
                className='text-2xl lg:text-3xl font-medium hover:text-[#9f4] transition-colors'
              >
                deepsahil.online@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div className='flex gap-8 items-center'>
              <a 
                href='https://github.com/deepsahilz' 
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-xl hover:text-[#9f4] transition-colors group'
              >
                <FaGithub className='text-3xl text-zinc-500 group-hover:text-[#9f4] transition-colors'/>
                <span>Github</span>
              </a>
              <a 
                href='https://www.linkedin.com/in/sahil-singh-0421b7275/' 
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-xl hover:text-[#9f4] transition-colors group'
              >
                <FaLinkedin className='text-3xl text-zinc-500 group-hover:text-[#9f4] transition-colors'/>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Keep as is */}
        <div className='md:hidden flex flex-col gap-6'>
          <div className='text-3xl font-semibold'>
            Have questions?<br/>I have answers
          </div>
          
          <div className='text-xl flex text-[#9f4] gap-2 items-center'>
            Let's connect at<FaArrowTurnDown className='text-sm -mb-1'/>
          </div>
          
          <div className='text-lg'>
            <span className='text-zinc-500 text-base block mb-1'>EMAIL</span>
            <a 
              href='mailto:deepsahil.online@gmail.com'
              className='break-all'
            >
              deepsahil.online@gmail.com
            </a>
          </div>

          <div className='flex flex-col gap-2'>
            <span className='text-zinc-500 text-base uppercase mb-1'>Socials</span>
            <a 
              href='https://github.com/deepsahilz'
              target='_blank'
              rel='noopener noreferrer' 
              className='flex items-center gap-2 text-base'
            >
              <FaGithub className='text-zinc-500'/>Github
            </a>
            <a 
              href='https://www.linkedin.com/in/sahil-singh-0421b7275/'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 text-base'
            >
              <FaLinkedin className='text-zinc-500'/>LinkedIn
            </a>
          </div>
          
          <div className='text-5xl mt-4 font-semibold'>
            @deepsahilz
          </div>
        </div>

      </div>
    </footer>
    </section>
  )
}

export default Footer