import React, { useEffect, useRef } from 'react';
import { TEXTS } from '../constants';

const About: React.FC = () => {
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
      <section className="relative pt-40 md:pt-56 pb-48 overflow-hidden grad-dark-tech">
        <div className="market-bg-layer">
          <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2000" className="market-bg-img" alt="" />
          <div className="market-bg-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal-up">
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-8 uppercase tracking-tighter leading-none">
                HUB DE <br/><span className="text-slim-tech-blue italic accent-glow">CONTEÚDOS.</span>
            </h1>
            <p className="text-lg font-light text-[#D1D1D1] max-w-4xl leading-relaxed border-l border-white/10 pl-10">
                {(TEXTS as any).HERO_WHO_WE_ARE}
            </p>
        </div>
      </section>

      <section className="py-40 bg-slim-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={(el) => { revealRefs.current[0] = el; }} className="reveal reveal-up bg-slim-gray/40 p-16 md:p-24 border border-white/5 backdrop-blur-sm rounded-[2.5rem]">
                <h2 className="text-[10px] font-bold text-slim-tech-blue tracking-[0.6em] uppercase mb-12">Expertise & Tradição</h2>
                <div className="text-lg text-[#D1D1D1] font-light leading-[1.6] space-y-6">
                    {TEXTS.WHO_WE_ARE}
                </div>
            </div>
        </div>
      </section>

      <section className="py-40 bg-slim-black border-y border-white/5 relative grad-flow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
                <div ref={(el) => { revealRefs.current[1] = el; }} className="reveal reveal-left md:col-span-4">
                    <img src="https://iili.io/fvNcaJj.png" alt="Newton Suzuki" className="w-full rounded-[2rem] border border-white/10" />
                </div>
                <div ref={(el) => { revealRefs.current[2] = el; }} className="reveal reveal-right md:col-span-8">
                    <h3 className="text-5xl md:text-7xl font-black text-white mb-12 tracking-tighter uppercase leading-none">NEWTON <span className="text-slim-tech-blue italic">SUZUKI</span></h3>
                    <p className="text-lg text-[#D1D1D1]/60 font-light leading-relaxed">
                        {TEXTS.CEO_BIO}
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default About;