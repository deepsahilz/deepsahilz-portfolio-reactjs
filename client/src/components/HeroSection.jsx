import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FaArrowTurnDown } from "react-icons/fa6";

const HeroSection = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    gsap.to(".dpImg", {
      width: 150,
      duration: 0.9,
    });
  }, []);








  // useEffect(() => {
  //   const follower = followerRef.current;
  //   const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  //   const mouse = { x: pos.x, y: pos.y };


  //   const padding = 100;

  //   const move = () => {
  //     pos.x += (mouse.x - pos.x) * 0.1;
  //     pos.y += (mouse.y - pos.y) * 0.1;

  //     const dx = Math.min(pos.x, window.innerWidth - pos.x);
  //     const dy = Math.min(pos.y, window.innerHeight - pos.y);
  //     const minDist = Math.min(dx, dy);
  //     const opacity = Math.max(0, Math.min(1, (minDist - 20) / (padding - 20)));

  //     gsap.set(follower, {
  //       x: pos.x + 20,
  //       y: pos.y + 20,
  //       opacity,
  //     });

  //     requestAnimationFrame(move);
  //   };

  //   const handleMouseMove = (e) => {
  //     mouse.x = e.clientX;
  //     mouse.y = e.clientY;
  //   };

  //   window.addEventListener('pointermove', handleMouseMove);
  //   requestAnimationFrame(move);

  //   return () => {
  //     window.removeEventListener('pointermove', handleMouseMove);
  //   };
  // }, []);



  // SVG for animated D with circles
  const AnimatedD = React.memo(() => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 300" className="w-full h-full">
      <style>
        {`
        .eye {
          transform-origin: center;
          animation: blink 1.8s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { transform: scaleY(1); }
          38% { transform: scaleY(1); }
          50% { transform: scaleY(0.1); }
          62% { transform: scaleY(1); }
        }
      `}
      </style>

      {/* D shape */}
      <path d="M65,50 L145,50 C235,50 255,120 253,150 C255,180 230,240 165,250 L65,250 Z" fill="black" />

      {/* Blinking "eyes" using scale */}
      <g className="eye">
        <circle cx="120" cy="130" r="25" fill="white" />
        <circle cx="185" cy="130" r="25" fill="white" />
      </g>
    </svg>
  ));




  return (
    <div className='w-full bg-zinc-200 font-nb text-zinc-800 relative overflow-hidden'>

      {/* <div
        ref={followerRef}
        className="fixed z-[9999] top-0 left-0 pointer-events-none hidden md:flex items-center gap-2 justify-center px-2 py-2 text-sm text-zinc-100 bg-zinc-950/80 border border-zinc-300 dark:border-zinc-700 rounded-lg backdrop-blur-md shadow-md font-medium"
        style={{ opacity: 0 }}
      >
        <div className='w-6 h-6 rounded-sm flex justify-center items-center bg-[#79c900]'>
          <FaArrowTurnDown />
        </div>
        scroll down
      </div> */}

      <div className='flex  items-end w-full h-screen px-6 md:px-10 pb-10'>
        <div className='relative h-full w-full '>
          <div className='w-full flex h-full justify-center items-center '>

            <div className='text-center w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center px-4 md:px-10'>
              <div className='flex items-center justify-center flex-col text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-semibold mb-6 md:mb-10 w-full'>
                <h2 className='flex flex-wrap items-center justify-center tracking-tight text-center leading-none'>
                  <span className='mr-2 md:mr-0'> Hello </span>
                  <div className='w-24 h-12 hidden md:flex sm:w-32 sm:h-16 md:w-40 md:h-20 rounded-full mx-3 sm:mx-4 md:mx-6 bg-blue-400 overflow-hidden items-center justify-center shrink-0'>
                    <img src="/images/sahil_13.png" alt="Sahil Singh Avatar - Developer & Designer" className="w-full h-full object-cover scale-110 mt-1" />
                  </div>
                  <span> I'm Sahil</span>
                  <div className='w-32 h-12 flex md:hidden  rounded-3xl mx-3 mt-2 sm:mx-4 md:mx-6 bg-blue-400 overflow-hidden items-center justify-center shrink-0'>
                    <img src="/images/sahil_13.png" alt="Sahil Singh Avatar - Developer & Designer" className="w-full h-full object-cover scale-110 mt-1" />
                  </div>
                </h2>
                <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-[5.8rem] text-zinc-800 tracking-tight text-center mt-3 leading-tight max-w-5xl'>
                  I craft ideas into products
                </h1>
              </div>
              <h2 className='text-base sm:text-xl md:text-2xl max-w-xl md:max-w-3xl font-neue text-zinc-600 text-center leading-relaxed px-2'>
                Developer & designer focused on building fast, functional, and damn good-looking web apps.
              </h2>
            </div>

            <div className='absolute bottom-10 text-right right-0 w-full'>
              <div className='flex justify-between items-end'>
                <div className='w-[8rem] h-[8rem] -mb-12 -ml-6 md:w-[13rem] md:h-[13rem] md:-mb-20 md:-ml-10'>
                  <AnimatedD />
                </div>
                {/* <div className='justify-end '>
                <h1 className='text-2xl text-zinc-600 dark:text-zinc-300 font-nb'>
                  <span className='text-zinc-600 dark:text-zinc-400 text-[1.32rem] font-semibold'>@deepsahilz<br /></span> everywhere
                </h1>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute pointer-events-none hidden z-[100] xl:block top-0 bottom-0 w-full h-full'>
        {/* <div className='border-zinc-400 absolute top-0 left-12 rounded-br-4xl border-r-3 border-b-3 w-[9.5rem] h-[82px]'></div> */}
        {/* <div className='border-zinc-400 absolute top-10  left-12  border-t-3 w-[9.5rem] h-20'></div> */}
        <div className='border-zinc-400 absolute top-10 left-[25.5px] right-[26px] rounded-tl-4xl border-l-3 border-t-3 rounded-tr-4xl  h-[26rem]'></div>
        <div className='border-zinc-400 absolute bottom-[12.8rem] left-[25.5px] rounded-bl-4xl border-b-3 border-l-3 w-[5rem] h-20'></div>
        <div className='border-zinc-400 absolute bottom-[95.5px] left-[75px] rounded-tr-[6rem] border-r-3 border-t-3 w-[8rem] h-[7rem]'></div>
        <div className='border-zinc-400 absolute bottom-[2.5rem] left-[12.55rem] rounded-b-4xl border-b-3 border-r-3 border-l-3 min-w-[67.25vw] w-[69.69rem] h-14'></div>
        <div className='border-zinc-400 absolute bottom-[7.76rem] right-[25.5px] rounded-br-4xl border-b-3 border-r-3 w-[9rem] h-20'></div>
        <div className='border-zinc-400 absolute bottom-[78.5px] right-[75px] rounded-tl-4xl border-l-3 border-t-3 w-[8.25rem] h-[3rem]'></div>
        <div className='border-zinc-400 absolute top-10 right-[26px] rounded-tr-4xl border-r-3 border-t-3 w-7 h-[31rem]'></div>
        {/* <div className='border-zinc-400 absolute top-0 right-[3rem] rounded-bl-4xl border-b-3 border-l-3 w-[16.5rem] h-[82px]'></div> */}
      </div>

      <div>

      </div>








    </div>






  )

}

export default HeroSection;
