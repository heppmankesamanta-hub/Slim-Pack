import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavigationPaths } from '../types';
import { VOD_DATA, COLORS } from '../constants';

const VOD: React.FC = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const data = VOD_DATA.MIDIALAND;

  return (
    <div className="pt-0 bg-slim-black min-h-screen">
      {/* HERO SECTION */}
      <header className="relative pt-40 md:pt-56 pb-32 overflow-hidden bg-slim-black grad-dark-tech">
        <div className="market-bg-layer">
          <img src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=2000" className="market-bg-img" alt="" />
          <div className="market-bg-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal-up">
            <h1 className="text-6xl md:text-[100px] font-black text-white leading-none tracking-tighter uppercase">
                VOD<span className="text-slim-tech-blue italic accent-glow">.</span>
            </h1>
            <p className="text-lg md:text-2xl font-light text-[#D1D1D1]/70 max-w-2xl border-l-2 border-slim-tech-blue/50 pl-6 mt-6">
                Vídeo on demand para seus assinantes.
            </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slim-black">
        <div ref={(el) => { revealRefs.current[0] = el; }} className="reveal reveal-zoom bg-slim-gray/40 border border-white/5 p-10 md:p-20 overflow-hidden backdrop-blur-xl rounded-[3rem]">
            
            <div className="flex flex-col items-center text-center mb-24">
                {(data as any).logo ? (
                    <img src={(data as any).logo} alt={data.name} className="h-96 md:h-[36rem] w-auto object-contain brightness-125 mb-16" />
                ) : (
                    <div className="mb-16 p-8 bg-white/5 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(31,106,225,0.1)]">
                        <h3 className="text-5xl font-black text-white tracking-[0.2em]">{data.name}</h3>
                    </div>
                )}
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight max-w-4xl leading-tight">
                    {data.tagline}
                </h2>
                <div className="h-1 w-24 bg-slim-tech-blue mt-8 mb-12"></div>
                <p className="text-xl md:text-2xl text-[#D1D1D1] font-light leading-relaxed max-w-5xl">
                    {data.description}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* DIFERENCIAIS */}
                <div ref={(el) => { revealRefs.current[1] = el; }} className="reveal reveal-left space-y-10 bg-white/5 p-12 rounded-[2.5rem] border border-white/5">
                    <div className="flex items-center">
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest">Diferenciais</h3>
                    </div>
                    <ul className="space-y-6">
                        {data.highlights.map((item, i) => (
                            <li key={i} className="flex items-start space-x-4 group">
                                <span className="mt-1.5 w-2 h-2 bg-slim-tech-blue rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#1F6AE1]"></span>
                                <span className="text-lg font-bold text-white/70 uppercase tracking-wider group-hover:text-white transition-colors">{item}.</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* PRINCIPAIS CONTEÚDOS */}
                <div ref={(el) => { revealRefs.current[2] = el; }} className="reveal reveal-right space-y-10 bg-slim-black/40 p-12 rounded-[3.5rem] border border-white/5">
                    <div className="flex items-center">
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest">Principais conteúdos</h3>
                    </div>
                    <ul className="space-y-6">
                        {data.topContent.map((item, i) => (
                            <li key={i} className="flex items-start space-x-4 group">
                                <span className="mt-1.5 w-2 h-2 bg-slim-magenta rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#E23A8B]"></span>
                                <span className="text-lg font-bold text-white/70 uppercase tracking-wider group-hover:text-white transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div ref={(el) => { revealRefs.current[3] = el; }} className="reveal reveal-up mt-24 text-center border-t border-white/10 pt-20">
                <p className="text-3xl md:text-5xl font-black text-white mb-10 tracking-tight uppercase leading-tight">
                    Leve o Melhor do <span className="text-slim-tech-blue">Conteúdo On Demand</span> para seus Clientes.
                </p>
                <Link to={NavigationPaths.CONTACT} className="inline-block grad-cta text-slim-black px-16 py-8 text-xs font-black uppercase tracking-[0.4em] cta-glow rounded-full shadow-2xl hover:scale-105 transition-all">
                    Quero Midialand no meu Provedor
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
};

export default VOD;
