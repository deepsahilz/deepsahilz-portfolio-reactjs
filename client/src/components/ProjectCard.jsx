import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const ProjectCard = ({ project, className }) => {
  const navigate = useNavigate();
  const cursorRef = useRef(null);
  const leftHandRef = useRef(null);
  const rightHandRef = useRef(null);
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

  // Show/hide cursor & hand animations
  useEffect(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      autoAlpha: hovering ? 1 : 0,
      scale: hovering ? 1 : 0.6,
      duration: 0.2,
      ease: "power2.out"
    });

    if (hovering) {
      gsap.to(leftHandRef.current, {
        x: 4,
        yoyo: true,
        repeat: -1,
        duration: 0.4,
        ease: "power1.inOut"
      });
      gsap.to(rightHandRef.current, {
        x: -4,
        yoyo: true,
        repeat: -1,
        duration: 0.4,
        ease: "power1.inOut"
      });
    } else {
      gsap.killTweensOf(leftHandRef.current);
      gsap.killTweensOf(rightHandRef.current);
      gsap.set([leftHandRef.current, rightHandRef.current], { x: 0 });
    }
  }, [hovering]);

  return (
    <>
      {/* Cursor follower */}
      <div
        ref={cursorRef}
        className="fixed z-50 pointer-events-none"
        style={{ left: 0, top: 0, opacity: 0, visibility: 'hidden' }}
      >
        <div className="flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full shadow-2xl border border-zinc-700/50 backdrop-blur-md">
           <span ref={leftHandRef} className="text-lg">👉</span>
           <span className="font-semibold text-xs tracking-widest uppercase mt-[2px]">View More</span>
           <span ref={rightHandRef} className="text-lg">👈</span>
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
