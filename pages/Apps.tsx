import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationPaths } from '../types';

const Apps: React.FC = () => {
  return (
    <div className="pt-0 bg-slim-black min-h-screen">
      <header className="relative pt-40 md:pt-56 pb-10 overflow-hidden grad-dark-tech">
        <div className="market-bg-layer">
          <img 
            src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=2000" 
            className="market-bg-img" 
            alt="Streaming Apps Interface" 
          />
          <div className="market-bg-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-2 uppercase tracking-tighter leading-none animate-reveal-up">
                HUB DE <br/><span className="text-slim-tech-blue italic accent-glow">APPS.</span>
            </h1>
            <p className="text-lg font-light text-[#D1D1D1]/60 max-w-2xl border-l border-slim-tech-blue/30 pl-10">
                Experiências curadas para elevar o nível do entretenimento digital do seu assinante.
            </p>
        </div>
      </header>

      <main className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 py-4">
        <div className="bg-slim-gray/40 border border-white/5 overflow-hidden backdrop-blur-sm rounded-[2rem] relative">
            <div className="max-w-7xl mx-auto px-8 py-8 md:py-12 flex flex-col items-center text-center">
                <div className="mb-4 animate-reveal-up">
                    <img src="https://i810Fs9.png" alt="Cindie Logo" className="w-[300px] md:w-[600px] h-auto brightness-125" />
                </div>
                <div className="max-w-5xl mb-6">
                    <p className="text-lg text-[#D1D1D1]/60 font-light leading-relaxed">
                        Cindie é a plataforma que leva ao público filmes e séries premiados e autorais.
                    </p>
                </div>
                <div className="mt-12 flex justify-center pb-8">
                  <Link to={NavigationPaths.CONTACT} className="group relative grad-cta text-slim-black px-14 py-6 text-sm font-black uppercase tracking-widest transition-all cta-glow text-center overflow-hidden rounded-full">
                    <span className="relative z-10">Falar com Consultor</span>
                  </Link>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Apps;