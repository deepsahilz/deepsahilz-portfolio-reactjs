import React, { useEffect, useRef } from 'react'
import HeroSection from '../components/HeroSection'
import ProjectsSection from '../components/ProjectSection'
import SkillSection from '../components/SkillSection'
import AboutSection from '../components/AboutSection'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Footer from '../components/Footer'

gsap.registerPlugin(ScrollTrigger)

const Homepage = () => {
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   gsap.to(sectionRef.current, {
  //     y: -400, // move it up slowly
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: 'top top',
  //       end: 'bottom top',
  //       pin:true,
  //       scrub: true,
  //     },
  //   });
  // }, []);
  
  return (
    <>
    <div className='bg-zinc-200 w-[100%] overflow-hidden'>
        {/* <div className='z-[10]' ref={sectionRef}> */}
        <HeroSection />
        {/* </div> */}
        {/* <div className='absolute z-[40] top-[100vh]'> */}
          <ProjectsSection />
          <AboutSection/>
          <SkillSection />
          {/* <Footer/> */}
        {/* </div> */}
    </div>
    </>
  )
}

export default Homepage
