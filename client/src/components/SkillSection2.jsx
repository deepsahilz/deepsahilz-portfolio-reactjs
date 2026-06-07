import React, { useEffect, useRef, useState } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiExpress, SiTailwindcss, SiGreensock, SiCplusplus } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'
import { SiSupabase } from 'react-icons/si'
import Matter from 'matter-js'
import { motion } from 'framer-motion'

const SiAdobephotoshop = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={props.className} 
    style={{ width: '1em', height: '1em', ...props.style }}
  >
    <path d="M0 0v24h24V0H0zm10.74 15.22c0 1.25-.32 2.21-.97 2.87-.64.67-1.57.99-2.77.99-1.22 0-2.15-.31-2.78-.92-.63-.61-.95-1.55-.95-2.83V9h2.36v6.23c0 .63.13 1.07.4 1.34.26.26.65.39 1.15.39.52 0 .91-.13 1.18-.39.26-.26.39-.7.39-1.34V9h2.38v6.22c-.01.01-.01.01-.01.01zM19 14.18c0 .87-.27 1.55-.8 2.05s-1.28.75-2.22.75c-.88 0-1.57-.14-2.09-.43v-2c.62.43 1.32.65 2.11.65.68 0 1-.22 1-.65 0-.17-.07-.31-.22-.43-.14-.12-.49-.28-1.04-.49-1-.38-1.68-.78-2.05-1.19-.36-.41-.54-.97-.54-1.69 0-.79.27-1.42.8-1.9s1.25-.72 2.15-.72c.81 0 1.48.14 2 .42l-.56 1.83c-.5-.27-1.05-.41-1.63-.41-.54 0-.82.17-.82.5 0 .15.06.27.19.38.13.11.45.24.96.42 1.05.39 1.77.81 2.16 1.25.39.43.59 1.02.59 1.76z" />
  </svg>
)

const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS' },
  { icon: <SiNextdotjs className="text-zinc-800" />, name: 'Next.js' },
  { icon: <SiSupabase className="text-green-500" />, name: 'Supabase' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React' },
  { icon: <SiTailwindcss className="text-sky-400" />, name: 'Tailwind' },
  { icon: <SiGreensock className="text-green-400" />, name: 'GSAP' },
  { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
  { icon: <SiExpress className="text-zinc-700" />, name: 'Express' },
  { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
  { icon: <SiMysql className="text-blue-600" />, name: 'MySQL' },
  { icon: <FaFigma className="text-purple-500" />, name: 'Figma' },
  { icon: <SiAdobephotoshop className="text-blue-600" />, name: 'Photoshop' },
  { icon: <FaGithub className="text-zinc-800" />, name: 'GitHub' },
  { icon: <SiCplusplus className="text-blue-700" />, name: 'C++' },
]

const SkillSection2 = () => {
  const containerRef = useRef(null)
  const engineRef = useRef(null)
  const pillRefs = useRef([])

  useEffect(() => {
    if (!containerRef.current) return

    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite

    // create engine
    const engine = Engine.create()
    engineRef.current = engine
    const world = engine.world

    const containerWidth = containerRef.current.clientWidth
    const containerHeight = containerRef.current.clientHeight

    // Boundaries - Thicker walls prevent high-velocity tunneling
    const wallThickness = 500
    const wallOptions = { isStatic: true, render: { visible: false } }
    const floor = Bodies.rectangle(containerWidth / 2, containerHeight + wallThickness / 2, containerWidth * 2, wallThickness, wallOptions)
    const leftWall = Bodies.rectangle(-wallThickness / 2, containerHeight / 2, wallThickness, containerHeight * 2, wallOptions)
    const rightWall = Bodies.rectangle(containerWidth + wallThickness / 2, containerHeight / 2, wallThickness, containerHeight * 2, wallOptions)
    const ceiling = Bodies.rectangle(containerWidth / 2, -wallThickness / 2, containerWidth * 2, wallThickness, wallOptions)

    World.add(world, [floor, leftWall, rightWall, ceiling])

    // Create pill bodies
    const pillBodies = []

    pillRefs.current.forEach((el, index) => {
      if (!el) return

      const width = el.offsetWidth
      const height = el.offsetHeight

      // Initial random position
      const x = Math.random() * (containerWidth - width) + width / 2
      const y = Math.random() * (containerHeight / 2) + 100 // Start from top half

      // Create rigid body for pill with rounded corners (capsule approximation)
      const body = Bodies.rectangle(x, y, width, height, {
        chamfer: { radius: height / 2 },
        restitution: 0.6, // Bounciness
        friction: 0.2,
        frictionAir: 0.02, // Increased air resistance to slow them down faster
        density: 0.001, // Increased mass to make them harder to throw at high speeds
        render: { visible: false }
      })

      pillBodies.push(body)

      // Store reference to DOM element in body for updating
      body.domElement = el
      body.width = width
      body.height = height
    })

    World.add(world, pillBodies)

    // Add mouse control
    const mouse = Mouse.create(containerRef.current)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false
        }
      }
    })
    World.add(world, mouseConstraint)

    // Run the engine
    const runner = Runner.create()
    Runner.run(runner, engine)

    // Sync DOM elements with physics bodies
    const updatePositions = () => {
      if (!containerRef.current) return;
      const currentWidth = containerRef.current.clientWidth;
      const currentHeight = containerRef.current.clientHeight;

      pillBodies.forEach(body => {
        if (body.domElement) {
          const { x, y } = body.position

          // Failsafe: if a pill somehow escapes the thick walls, teleport it back to center
          if (x < -200 || x > currentWidth + 200 || y < -200 || y > currentHeight + 200) {
            Matter.Body.setPosition(body, { x: currentWidth / 2, y: currentHeight / 2 })
            Matter.Body.setVelocity(body, { x: 0, y: 0 })
          } else {
            // Matter.js coordinates are center-based. 
            // Translate top-left of DOM element to match.
            body.domElement.style.transform = `translate(${x - body.width / 2}px, ${y - body.height / 2}px) rotate(${body.angle}rad)`
          }
        }
      })

      if (mouseConstraint.mouse.button !== -1) {
        containerRef.current.style.cursor = 'grabbing';
      } else {
        containerRef.current.style.cursor = 'grab';
      }

      requestAnimationFrame(updatePositions)
    }

    updatePositions()

    // Handle Resize
    const handleResize = () => {
      if (!containerRef.current) return
      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight

      // Update boundaries
      Matter.Body.setPosition(floor, { x: newWidth / 2, y: newHeight + wallThickness / 2 })
      Matter.Body.setVertices(floor, Matter.Bodies.rectangle(newWidth / 2, newHeight + wallThickness / 2, newWidth * 2, wallThickness).vertices)

      Matter.Body.setPosition(leftWall, { x: -wallThickness / 2, y: newHeight / 2 })
      Matter.Body.setVertices(leftWall, Matter.Bodies.rectangle(-wallThickness / 2, newHeight / 2, wallThickness, newHeight * 2).vertices)

      Matter.Body.setPosition(rightWall, { x: newWidth + wallThickness / 2, y: newHeight / 2 })
      Matter.Body.setVertices(rightWall, Matter.Bodies.rectangle(newWidth + wallThickness / 2, newHeight / 2, wallThickness, newHeight * 2).vertices)

      Matter.Body.setPosition(ceiling, { x: newWidth / 2, y: -wallThickness / 2 })
      Matter.Body.setVertices(ceiling, Matter.Bodies.rectangle(newWidth / 2, -wallThickness / 2, newWidth * 2, wallThickness).vertices)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      Runner.stop(runner)
      Engine.clear(engine)
      if (containerRef.current) {
        mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
        mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);
      }
    }
  }, [])

  return (
    <section className='bg-zinc-100 min-h-screen px-5 md:px-10 py-20 relative overflow-hidden flex flex-col justify-between border-t border-zinc-200'>
      <div className=' mx-auto w-full z-10 pointer-events-none'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-5xl md:text-7xl lg:text-8xl font-bold text-zinc-900 uppercase font-founders leading-tight '
        >
          My Tech Playground
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className='mt-2 text-zinc-500 text-lg  max-w-xl font-medium'
        >
          A collection of tools and technologies I use to bring digital experiences to life. Feel free to toss them around!
        </motion.p>
      </div>

      <div
        ref={containerRef}
        className="absolute inset-0 cursor-grab active:cursor-grabbing"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (pillRefs.current[index] = el)}
            className="absolute top-0 left-0 inline-flex items-center gap-3 bg-white/90 backdrop-blur-md border-2 border-zinc-200 py-3 px-6 md:py-6 md:px-10 rounded-full shadow-lg pointer-events-none select-none transition-colors"
          >
            <div className="text-2xl md:text-4xl">
              {skill.icon}
            </div>
            <span className="text-zinc-800 text-base md:text-xl font-semibold whitespace-nowrap">
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      {/* Decorative gradient at bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-200/50 to-transparent pointer-events-none" /> */}
    </section>
  )
}

export default SkillSection2
