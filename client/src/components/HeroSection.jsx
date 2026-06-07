import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { FaArrowTurnDown } from "react-icons/fa6";

const HeroSection = () => {
  const followerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    gsap.to(".dpImg", {
      width: 150,
      duration: 0.9,
    });
  }, []);

  // Interactive thread strings background animation using canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    const mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const numThreads = 5;
    const numPoints = 18;
    const threads = [];

    const initThreads = () => {
      threads.length = 0;
      for (let i = 0; i < numThreads; i++) {
        // Tight cluster anchored higher up (centered around 38% height, spaced by only 3% height)
        const edgeY = height * (0.36 + (i / (numThreads - 1)) * 0.03);
        const points = [];
        
        for (let j = 0; j <= numPoints; j++) {
          const x = (j / numPoints) * width;
          // Increased sag amounts to make them hang looser in the middle
          const sagAmount = 35 + (i * 24);
          const sag = Math.sin((j / numPoints) * Math.PI) * sagAmount;
          const targetY = edgeY + sag;
          
          points.push({
            x: x,
            y: targetY,
            targetY: targetY,
            vy: 0,
            mouseOffset: 0,
            stiffness: 0.016 + (i * 0.002),
            damping: 0.83,
          });
        }
        threads.push({ points, baseRowY: edgeY });
      }
    };

    initThreads();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initThreads();
    };

    window.addEventListener('resize', handleResize);

    let animationFrameId;
    let time = 0;

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Create a gorgeous gradient for visibility matching the site's accent palette
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.45)');   // Electric Blue
      gradient.addColorStop(0.5, 'rgba(159, 255, 68, 0.6)');  // Vibrant Lime Green
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.45)');   // Electric Blue

      const glowGradient = ctx.createLinearGradient(0, 0, width, 0);
      glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.12)');
      glowGradient.addColorStop(0.5, 'rgba(159, 255, 68, 0.18)');
      glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0.12)');

      threads.forEach((thread, threadIdx) => {
        thread.points.forEach((pt, ptIdx) => {
          const isEdge = ptIdx === 0 || ptIdx === numPoints;
          const swayFactor = isEdge ? 0 : 1;
          
          // Gentle default swaying movement (slower, smoother)
          const defaultWave = Math.sin(time * 0.01 + pt.x * 0.002 + threadIdx * 2.2) * 5 * swayFactor;
          let targetMouseOffset = 0;

          if (mouse.x > -500) {
            const dx = mouse.x - pt.x;
            const dy = mouse.y - pt.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const radius = 180; // interaction radius

            if (dist < radius && !isEdge) {
              const force = (radius - dist) / radius; // 0 to 1
              // Smoothly push string vertically away from cursor
              targetMouseOffset = (dy / dist) * force * 45;
            }
          }

          // Smoothly interpolate current offset to target offset to prevent jitter
          pt.mouseOffset += (targetMouseOffset - pt.mouseOffset) * 0.07;

          // Horizontal position baseline restoration
          const baselineX = (ptIdx / numPoints) * width;
          pt.x += (baselineX - pt.x) * 0.05;

          const targetY = pt.targetY + defaultWave + pt.mouseOffset;

          const ay = (targetY - pt.y) * pt.stiffness;
          pt.vy = (pt.vy + ay) * pt.damping;
          pt.y += pt.vy;
        });

        // Draw curves smoothly
        ctx.beginPath();
        ctx.moveTo(thread.points[0].x, thread.points[0].y);
        for (let j = 0; j < numPoints; j++) {
          const xc = (thread.points[j].x + thread.points[j + 1].x) / 2;
          const yc = (thread.points[j].y + thread.points[j + 1].y) / 2;
          ctx.quadraticCurveTo(thread.points[j].x, thread.points[j].y, xc, yc);
        }
        ctx.lineTo(thread.points[numPoints].x, thread.points[numPoints].y);

        // Faint glow path
        ctx.strokeStyle = glowGradient;
        ctx.lineWidth = 4.5;
        ctx.stroke();

        // Main thread stroke
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.25;
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
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
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

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

      <div className='flex items-end w-full h-screen px-6 md:px-10 pb-10 relative z-10'>
        <div className='relative h-full w-full '>
          <div className='w-full flex h-full justify-center items-center '>

            <div className='md:text-center w-full absolute top-[50%] left-[50%] -translate-[50%] flex  flex-col md:items-center '>
              <div className='flex items-center md:w-[35rem] lg:w-full flex-col text-6xl md:text-8xl lg:text-[7rem] font-semibold mb-10 '>
                <h1 className='inline-flex items-center md:text-left lg:text-center tracking-tight'>Hello<div className='w-40 h-20 rounded-full mx-6 -mb-2 bg-blue-400  overflow-hidden'><img src="/images/sahil_13.png" alt="Sahil" className="w-full w-full -mt-5 px-2" /></div> I'm Sahil </h1>
                <h1 className='inline-flex items-center md:text-left  lg:text-center text-[5.8rem] text-zinc-600  tracking-tight'>I   craft ideas into products  </h1>
                {/* <h1 className='mt-2 md:mt-0 md:ml-4 text-nowrap  md:text-right'> I am<span className='bg-[#9f0] ml-3 pr-2 md:pr-9 italic text-zinc-900'>Sahil</span></h1> */}
              </div>
              {/* <div className='md:flex text-6xl md:text-8xl md:h-[6.5rem] font-semibold mb-3 '>
                  <h1 className=' '>Hi there, </h1>
                  <h1 className='mt-2 md:mt-0 md:ml-4'> I am<span className='bg-[#9f0] ml-3 text-zinc-900'>Sahil</span></h1>
                </div> */}
              <h1 className='text-2xl  md:max-w-[48rem] md:mb-0 font-neue text-zinc-600  md:ml-2'>
                {/* Full stack Developer & designer focused on building fast, functional, and damn good-looking web apps. */}
                Developer & designer focused on building fast, functional, and damn good-looking web apps.
              </h1>
            </div>

            <div className='absolute bottom-10 text-right hidden md:block right-0 w-full'>
              <div className='flex justify-between items-end'>
                <div className='w-[13rem] h-[13rem] -mb-20 -ml-10'>
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
