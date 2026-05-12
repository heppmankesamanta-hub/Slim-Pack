import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavigationPaths } from '../types';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Início', path: NavigationPaths.HOME },
    { name: 'Quem Somos', path: NavigationPaths.ABOUT },
    { name: 'Canais Lineares', path: NavigationPaths.CHANNELS },
    { name: 'SVAS', path: NavigationPaths.SVA },
    { name: 'MVNO', path: NavigationPaths.MVNO },
    { name: 'VOD', path: NavigationPaths.VOD },
    { name: 'EPG', path: NavigationPaths.EPG },
    { name: 'Contato', path: NavigationPaths.CONTACT },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-2 bg-slim-black/95 backdrop-blur-2xl border-b border-white/5 transition-all duration-300 ${
      scrolled ? 'shadow-[0_10px_40px_rgba(0,0,0,0.8)]' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="flex-shrink-0">
            <Link to={NavigationPaths.HOME} className="flex items-center group">
              <Logo className="h-20 md:h-24 transition-transform duration-500 group-hover:scale-105" />
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-5 py-3 text-[10px] font-bold tracking-[0.25em] transition-all uppercase rounded-full ${
                    location.pathname === item.path 
                      ? 'bg-slim-tech-blue/20 text-slim-tech-blue shadow-[0_0_20px_rgba(31,106,225,0.1)]' 
                      : 'text-white/40 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-white/50 hover:text-white transition-colors"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slim-black/98 backdrop-blur-3xl border-b border-white/10 animate-fade-in">
          <div className="px-6 pt-6 pb-16 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-5 text-sm font-bold tracking-[0.4em] uppercase transition-all ${
                    location.pathname === item.path ? 'text-slim-tech-blue bg-white/5' : 'text-white/40'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;