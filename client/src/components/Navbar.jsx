import React from 'react'
import { useNavigate } from 'react-router-dom';

const navLinks = ['Work', 'About', 'Contact'];

const Navbar = () => {
  const navigate= useNavigate();
  return (
    <div className='fixed flex justify-center w-full z-50'>
      <div className='rounded-xl backdrop-blur-sm w-full'>
        <div className='flex justify-between items-center py-4 px-10 text-zinc-800'>
          <div onClick={()=>navigate("/")} className='font-bold cursor-pointer text-xl font-neue'>
            deepsahilz
          </div>
          <ul className='flex gap-5 uppercase'>
            {navLinks.map((text, i) => (
              <li key={i} className='overflow-hidden relative h-5 cursor-pointer hover:text-zinc-500'>
                <span className='block transition-transform duration-300 ease-in-out hover:-translate-y-full'>
                  <span className='block'>{text}</span>
                  <span className='block absolute left-0 top-full'>{text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
