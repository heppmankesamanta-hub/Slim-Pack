
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Channels from './pages/Channels';
import SVA from './pages/SVA';
import MVNO from './pages/MVNO';
import VOD from './pages/VOD';
import EPG from './pages/EPG';
import Contact from './pages/Contact';
import { NavigationPaths } from './types';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path={NavigationPaths.HOME} element={<Home />} />
            <Route path={NavigationPaths.ABOUT} element={<About />} />
            <Route path={NavigationPaths.CHANNELS} element={<Channels />} />
            <Route path={NavigationPaths.SVA} element={<SVA />} />
            <Route path={NavigationPaths.MVNO} element={<MVNO />} />
            <Route path={NavigationPaths.VOD} element={<VOD />} />
            <Route path={NavigationPaths.EPG} element={<EPG />} />
            <Route path={NavigationPaths.CONTACT} element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
