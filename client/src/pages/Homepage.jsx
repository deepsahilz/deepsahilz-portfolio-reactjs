import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectSection'
import SkillSection from '../components/SkillSection'
import AboutSection from '../components/AboutSection'

const Homepage = () => {

  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Make Projects scroll over Hero *very slowly*
  // const y = useTransform(scrollYProgress, [0, 0.3], ["100vh", "0vh"])

  return (
    <>
    <div className='bg-zinc-200 w-[100%] overflow-hidden'>
        <HeroSection />
        <ProjectsSection />
        <SkillSection />
        <AboutSection/>
    </div>
    </>
  )
}

export default Homepage
