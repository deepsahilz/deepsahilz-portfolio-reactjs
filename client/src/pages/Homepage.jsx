import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectSection';

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial state: fade in and slight move from bottom
      animate={{ opacity: 1, y: 0 }} // Final state: fully visible and normal position
      exit={{ opacity: 0, y: -20 }} // Exit state: fade out and move up
      transition={{ duration: 0.5 }} // Transition duration
    >
      <HeroSection />
      <ProjectsSection />
    </motion.div>
  );
};

export default Homepage;
