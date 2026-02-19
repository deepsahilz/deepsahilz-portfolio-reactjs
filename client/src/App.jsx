import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage';
import Layout from './components/Layout';
import CatGame from './pages/CatGame';
import ProjectPage from './pages/ProjectPage';
import WorkPage from './pages/WorkPage';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/work/:projectName" element={<ProjectPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Route>
        {/* fallback 404 / catch-all route should be last */}
        <Route path="/*" element={<CatGame />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
