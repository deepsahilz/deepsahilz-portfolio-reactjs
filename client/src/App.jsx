import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Codexa from './pages/Codexa';
import Layout from './components/Layout';

const App = () => {
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

  return( 
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Homepage />} />
          <Route path="/codexa" element={<Codexa />} />
        </Route>
      </Routes>
    </Router>
);
};

export default App;
