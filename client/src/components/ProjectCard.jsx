import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { MdArrowOutward } from 'react-icons/md';

const ProjectCard = ({ project, className }) => {
  const navigate = useNavigate();
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  // Cursor follower
  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        xPercent: -50,
        yPercent: -50,
        ease: "power2.out",
        duration: 0.3,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Show/hide cursor
  useEffect(() => {
    if (!cursorRef.current) return;
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
        className="fixed z-50 pointer-events-none"
        style={{ left: 0, top: 0, opacity: 0, visibility: 'hidden' }}
      >
        <div className="flex items-center gap-2 bg-zinc-800 text-white px-5 py-2.5 rounded-full shadow-2xl border border-zinc-700/50 backdrop-blur-md">
          <span className="font-semibold text-xs tracking-widest uppercase mt-[2px]">View Details</span>
        </div>
      </div>

      {/* Project Card */}
      <div className={`flex flex-col gap-3 font-neue text-zinc-800 ${className}`}>
        <div
          onClick={() => navigate(`/work/${project.slug || ''}`)}
          className="h-[15rem] md:h-[20rem] group cursor-pointer flex justify-center items-center overflow-hidden text-zinc-700"
        >
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="w-full h-full relative group-hover:scale-95 p-5 duration-800 overflow-hidden flex justify-center items-center bg-zinc-900 transition-transform rounded-lg"
          >
            <img
              src={project.thumbnail || ''}
              className="group-hover:opacity-50 rounded-lg group-hover:scale-130 duration-900 transition-all"
              alt={project.name || 'Project'}
            />
          </div>
        </div>

        {/* Name + Tagline */}
        <div className="flex flex-col">
          <h3 className="text-xl flex mt-1 font-semibold items-center">
            <span>{project.name || 'Untitled Project'}</span>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="group inline-flex items-center gap-0.5 text-[10px] uppercase tracking-wider font-extrabold bg-zinc-300/40 hover:bg-zinc-800 text-zinc-600 hover:text-zinc-100 px-2 py-1 rounded-md border border-zinc-400/60 hover:border-zinc-800 transition-all duration-300 ml-2 cursor-pointer "
                title="Visit Live Site"
              >
                <span>Visit Live</span>
                <MdArrowOutward className="text-[10px] group-hover:rotate-45 transition-transform duration-300" />
              </a>
            )}
          </h3>
          {project.tagline && (
            <p className="text-sm text-zinc-600 mt-1">{project.tagline}</p>
          )}
        </div>

        {/* Tools / Stack Tags */}
        <div className="flex gap-2 flex-wrap">
          {(project.stack || []).map((tool, i) => (
            <span
              key={i}
              className="px-2 md:px-4 py-1 md:py-2 text-xs uppercase tracking-wider font-semibold bg-zinc-300/30 text-zinc-700 border border-zinc-400  rounded-lg md:rounded-xl hover:bg-zinc-900 hover:text-zinc-100 hover:border-zinc-900 hover:scale-105 duration-300 transition-all cursor-default select-none"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
