import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const ProjectCard = ({ project, className }) => {
  const navigate = useNavigate();
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        ease: "power2.out",
        duration: 0.3,
        
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    gsap.to(cursorRef.current, {
      autoAlpha: hovering ? 1 : 0,
      scale: hovering ? 1 : 0.6,
      duration: 0.2,
      
      ease: "power2.out"
    });
  }, [hovering]);

  return (
    <>
      {/* Cursor follower */}
      <div
        ref={cursorRef}
        className="fixed z-50 pointer-events-none "
        style={{ left: 0, top: 0 }}
      >
        <div className="bg-white text-black px-3 py-2 text-sm rounded-full font-medium shadow-md">
          View Details  
        </div>
      </div>

      {/* Project Card */}
      <div className={`flex flex-col gap-3 font-neue text-zinc-800 ${className}`}>
        <div
          onClick={() => navigate(project.url)}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="h-[17rem] md:h-[22rem] group cursor-pointer flex justify-center items-center overflow-hidden text-zinc-700"
        >
          <div className="w-full h-full group-hover:scale-95 duration-800 overflow-hidden bg-zinc-900 transition-transform rounded-lg">
            <img className="w-full h-full object-cover group-hover:opacity-50 group-hover:scale-110 duration-900 transition-all" src={project.thumbnail} />
          </div>
        </div>

        <div className='flex justify-between'>
          <h1 className='text-lg flex mt-1 font-semibold items-center'>{project.name}</h1>
        </div>

        <div className='flex gap-2 flex-wrap'>
          {project.tools.map((tool, i) => (
            <div key={i} className='px-3 md:px-4 uppercase md:py-1 py-0.5 border text-sm rounded-lg border-zinc-800'>{tool}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
