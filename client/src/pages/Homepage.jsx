import React, { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    // Simple parallax effect on hero section
    gsap.to(heroRef.current, {
      y: 250, // Reduced movement for subtler effect
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.5, // Faster scrubbing for smoother feel
        invalidateOnRefresh: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="bg-zinc-200 w-full overflow-hidden relative">
        {/* Hero Section with parallax */}
        <section 
          id="home" 
          ref={heroRef} 
          className="relative z-0"
          style={{ willChange: 'transform' }}
        >
          <HeroSection />
        </section>

        {/* All other sections scroll normally over the hero */}
        <div className="relative z-10 bg-zinc-200">
          <section id="work">
            <ProjectsSection />
          </section>

          <section id="about">
            <AboutSection />
          </section>

          <SkillSection />

          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Homepage;