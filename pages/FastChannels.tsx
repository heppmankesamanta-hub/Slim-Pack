
import React, { useEffect, useRef } from 'react';
import { FAST_CHANNELS } from '../constants';
import ChannelCard from '../components/ChannelCard';
import { Link } from 'react-router-dom';
import { NavigationPaths } from '../types';

const FastChannels: React.FC = () => {
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

  return (
    <div className="pt-0 bg-slim-black min-h-screen">
      <header className="relative pt-64 md:pt-[450px] pb-48 overflow-hidden grad-tech-flow">
        <div className="market-bg-layer">
          <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=2000" className="market-bg-img" alt="" />
          <div className="market-bg-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal-up">
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-8 uppercase tracking-tighter leading-none">
                CANAIS <span className="text-white italic accent-glow">FAST</span>
            </h1>
            <p className="text-xl font-light text-[#D1D1D1]/60 max-w-2xl border-l border-slim-tech-blue/30 pl-10">
                Canais FAST (Free Ad-Supported Streaming TV) são canais de streaming gratuitos, com programação linear contínua, sustentados por publicidade.
            </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 bg-slim-black">
        <div ref={(el) => { revealRefs.current[0] = el; }} className="reveal reveal-up bg-slim-gray/40 p-16 mb-24 border border-white/5 backdrop-blur-md">
            <h2 className="text-[10px] font-bold text-slim-tech-blue tracking-[0.6em] uppercase mb-8">Novas Fronteiras</h2>
            <p className="text-2xl text-[#D1D1D1] font-light max-w-4xl">
                O modelo Fast une a experiência da TV tradicional à flexibilidade do digital, sem assinatura para o usuário final.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FAST_CHANNELS.map((channel, i) => (
            <div 
              key={channel.id} 
              ref={(el) => { revealRefs.current[i + 1] = el; }}
              className="reveal reveal-up"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <ChannelCard channel={channel} />
            </div>
          ))}
        </div>

        <div ref={(el) => { revealRefs.current[10] = el; }} className="reveal reveal-up mt-32 flex justify-center">
          <Link to={NavigationPaths.CONTACT} className="group relative grad-cta text-slim-black px-14 py-6 text-sm font-black uppercase tracking-widest transition-all cta-glow rounded-full">
            <span className="relative z-10">Falar com Consultor</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default FastChannels;
