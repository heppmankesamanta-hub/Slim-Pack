import React, { useEffect, useRef } from 'react';
import { CHANNELS_DATA } from '../constants';
import ChannelCard from '../components/ChannelCard';
import { Link } from 'react-router-dom';
import { NavigationPaths } from '../types';

const Channels: React.FC = () => {
  const revealRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.05 }
    );
    revealRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const renderSection = (title: string, data: any[], baseIndex: number) => {
    const sectionLogos: Record<string, string> = {
      'Canais ESPN': 'https://i.ibb.co/cSCm9sPm/71.png',
      'Canais Newco': 'https://iili.io/fvLv9nt.png',
      'Canais Hallo!': 'https://iili.io/f8cfQz7.png',
      'Canais Netcine': 'https://iili.io/f8wOk0P.png',
      'Canais Baita Conteúdo': 'https://i.ibb.co/XrW8WNhn/SLIM-PACK-logo-final-2026-05-11-T215314-257.png',
    };

    const logoUrl = sectionLogos[title];

    return (
      <section key={title} className="py-16 border-0 last:pb-16 lg:last:pb-32">
        <div 
          ref={(el) => { revealRefs.current[baseIndex] = el; }}
          className="reveal reveal-left flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="w-full">
            {logoUrl ? (
              <div className="flex flex-col">
                   <h2 className="text-[10px] font-bold text-white/20 tracking-[0.6em] uppercase mb-4">{title}</h2>
                  <img 
                    src={logoUrl} 
                    alt={title} 
                    className={`${title === 'Canais ESPN' ? 'h-64 md:h-80 lg:h-[28rem]' : 'h-24 md:h-32 lg:h-40'} w-auto object-contain brightness-110 self-start`} 
                  />
              </div>
            ) : (
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{title}</h2>
            )}
            <div className="h-[2px] w-16 bg-slim-orange mt-6 accent-glow"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((channel, i) => (
            <div 
              key={channel.id} 
              ref={(el) => { revealRefs.current[baseIndex + 1 + i] = el; }}
              className="reveal reveal-up"
              style={{ transitionDelay: `${(i % 3) * 150}ms` }}
            >
              <ChannelCard channel={channel} />
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="pt-0 bg-slim-black min-h-screen">
      <header className="relative pt-40 md:pt-56 pb-24 overflow-hidden bg-slim-black">
        <div className="market-bg-layer">
          <img src="https://images.unsplash.com/photo-1542204172-3c32e04f0f0c?auto=format&fit=crop&q=80&w=2000" className="market-bg-img opacity-10 blur-[80px]" alt="" />
          <div className="market-bg-overlay opacity-100"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal-up">
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-8 tracking-tighter uppercase leading-none">
              CANAIS<br/><span className="text-slim-orange italic accent-glow">LINEARES.</span>
            </h1>
            <p className="text-xl font-light text-[#D1D1D1]/40 max-w-2xl leading-relaxed border-l border-white/5 pl-8">
                Curadoria técnica e estratégica para potencializar a grade de programação do ISP.
            </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-slim-black">
        {(CHANNELS_DATA as any).ESPN && renderSection('Canais ESPN', (CHANNELS_DATA as any).ESPN, 0)}
        {renderSection('Canais Newco', CHANNELS_DATA.NEWCO, 20)}
        {renderSection('Canais Hallo!', CHANNELS_DATA.HALLO, 50)}
        {renderSection('Canais Netcine', CHANNELS_DATA.NETCINE, 200)}
        {(CHANNELS_DATA as any).LEO_LULLY && renderSection('CANAL LEO & LULLY', (CHANNELS_DATA as any).LEO_LULLY, 350)}
        {renderSection('Canais Baita Conteúdo', CHANNELS_DATA.BAITA, 100)}
        {renderSection('Canal TCM10', CHANNELS_DATA.TCM, 275)}
        {renderSection('Canal Agroplus', CHANNELS_DATA.AGROPLUS, 300)}

        <div ref={(el) => { revealRefs.current[400] = el; }} className="reveal reveal-up mt-20 flex justify-center pb-20">
          <Link to={NavigationPaths.CONTACT} className="group relative grad-cta text-slim-black px-14 py-6 text-sm font-black uppercase tracking-widest transition-all cta-glow rounded-full">
            <span className="relative z-10">Falar com Consultor.</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Channels;