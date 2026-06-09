import React, { useEffect, useRef } from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import SkillSection2 from "../components/SkillSection2";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
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

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Sahildeep Singh",
    "alternateName": "Sahil Singh",
    "url": "https://deepsahilz.vercel.app/",
    "image": "https://deepsahilz.vercel.app/images/sahil_13.png",
    "jobTitle": "Web Application Developer & Designer",
    "knowsAbout": [
      "Web Development",
      "Frontend Engineering",
      "Backend Architecture",
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "GSAP",
      "Graphic Design"
    ],
    "sameAs": [
      "https://github.com/deepsahilz",
      "https://www.linkedin.com/in/sahil-singh-0421b7275/"
    ]
  };

  return (
    <>
      <SEO 
        title="Portfolio & Web Application Developer" 
        description="Portfolio of Sahil Singh (@deepsahilz). Developer and designer focused on building fast, functional, and visually rich web applications."
        schema={homeSchema}
      />
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