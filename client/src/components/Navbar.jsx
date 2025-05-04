import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = ['Work', 'About', 'Contact'];

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='fixed flex justify-center w-full z-50'>
      <div className='rounded-xl backdrop-blur-sm w-full'>
        <div className='flex justify-between items-center py-4 px-6 md:px-10 text-zinc-800'>
          <div onClick={() => navigate("/")} className='font-bold cursor-pointer text-xl font-neue'>
            deepsahilz
          </div>

          {/* Desktop Nav */}
          <ul className='hidden md:flex gap-5 uppercase'>
            {navLinks.map((text, i) => (
              <li key={i} className='overflow-hidden relative h-5 cursor-pointer hover:text-zinc-500'>
                <span className='block transition-transform duration-300 ease-in-out hover:-translate-y-full'>
                  <span className='block'>{text}</span>
                  <span className='block absolute left-0 top-full'>{text}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <div className='md:hidden'>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className='text-xl transition-transform duration-300'
            >
              {menuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu with transition */}
        <div
          className={`md:hidden px-6 overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-40 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          <ul className='flex flex-col gap-4 uppercase pt-2'>
            {navLinks.map((text, i) => (
              <li key={i} onClick={() => setMenuOpen(false)} className='text-lg'>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
