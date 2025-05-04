import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Homepage from './pages/Homepage';
import Codexa from './pages/Codexa';
import Layout from './components/Layout';
import CatGame from './pages/CatGame';

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
          <Route path="/*" element={<CatGame />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/codexa" element={<Codexa />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
