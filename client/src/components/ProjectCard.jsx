import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const ProjectCard = ({ project, className }) => {
  const navigate = useNavigate();
  const cursorRef = useRef(null);
  const svgRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  // Cursor follower
  useEffect(() => {
    const move = (e) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX - 50,
        y: e.clientY - 50,
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

  // Rotate text
  useEffect(() => {
    if (!svgRef.current) return;
    const rotateAnim = gsap.to(svgRef.current, {
      rotate: 360,
      transformOrigin: "50% 50%",
      duration: 6,
      repeat: -1,
      ease: "none",
    });
    return () => rotateAnim.kill();
  }, []);

  return (
    <>
      {/* Cursor follower */}
      <div
        ref={cursorRef}
        className="fixed z-50 pointer-events-none backdrop-blur-lg overflow-hidden rounded-full"
        style={{ left: 0, top: 0, width: 100, height: 100 }}
      >
        <div className="relative w-[100px] h-[100px]">
          <svg ref={svgRef} className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
                fill="none"
              />
            </defs>
            <text fill="white" fontSize="10" fontFamily="Arial" letterSpacing="2">
              <textPath xlinkHref="#circle" startOffset="0%">
                VIEW DETAILS • VIEW DETAILS •
              </textPath>
            </text>
          </svg>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full" />
          <div className="absolute bottom-0 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-white blur-3xl rounded-full" />
        </div>
      </div>

      {/* Project Card */}
      <div className={`flex flex-col gap-3 font-neue text-zinc-800 ${className}`}>
        <div
          onClick={() => navigate(`/work/${project.slug || ''}`)}
          className="h-[17rem] md:h-[22rem] group cursor-pointer flex justify-center items-center overflow-hidden text-zinc-700"
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
          <h1 className="text-xl flex mt-1 font-semibold items-center">
            {project.name || 'Untitled Project'}
          </h1>
          {project.tagline && (
            <p className="text-sm text-zinc-600 mt-1">{project.tagline}</p>
          )}
        </div>

        {/* Tools / Stack Tags */}
        <div className="flex gap-2 flex-wrap">
          {(project.stack || []).map((tool, i) => (
            <div
              key={i}
              className="px-3 md:px-4 uppercase md:py-1 py-0.5 border text-sm rounded-lg border-zinc-800"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
