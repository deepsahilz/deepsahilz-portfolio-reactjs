import React from "react";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";
import AboutSection from "../components/AboutSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  return (
    <>
      <div className="bg-zinc-200 w-full overflow-hidden">

        <section id="home">
          <HeroSection />
        </section>

        <section id="work">
          <ProjectsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

          <SkillSection />

        {/* <Footer /> */}

      </div>
    </>
  );
};

export default Homepage;
