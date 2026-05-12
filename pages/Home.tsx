import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavigationPaths } from '../types';

const Home: React.FC = () => {
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

  const ecosystemItems = [
    { title: 'Canais Lineares.', desc: 'Distribuição oficial de canais lineares consolidados, com curadoria estratégica.', cta: 'Ver portfólio.', path: NavigationPaths.CHANNELS, img: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800' },
    { title: 'SVAS.', desc: 'Serviços de Valor Agregado que aumentam o valor percebido do plano e reduzem o churn.', cta: 'Ver Serviços.', path: NavigationPaths.SVA, img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800' },
    { title: 'MVNO.', desc: 'Solução completa de telefonia móvel White Label para seu ISP.', cta: 'Explorar MVNO.', path: NavigationPaths.MVNO, img: 'https://images.unsplash.com/photo-1556656793-062ff98782ee?auto=format&fit=crop&q=80&w=800' },
    { title: 'VOD.', desc: 'VOD - Vídeos on demand para seus assinantes terem a liberdade de assistir vídeos onde e quando desejarem.', cta: 'Conhecer VOD.', path: NavigationPaths.VOD, img: 'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&q=80&w=800' },
    { title: 'EPG.', desc: 'EPG - Uma plataforma, uma API. Dados enriquecidos para sua plataforma de TV e vídeo sob demanda.', cta: 'Ver EPG.', path: NavigationPaths.EPG, img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div className="pt-0 bg-slim-black">
      <section className="relative min-h-screen flex items-center overflow-hidden grad-dark-tech pt-40 md:pt-48 pb-32">
        <div className="market-bg-layer">
          <img src="https://images.unsplash.com/photo-1593784991095-a205039475fe?auto=format&fit=crop&q=80&w=2000" className="market-bg-img" alt="" />
          <div className="market-bg-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl animate-reveal-up">
            <h1 className="text-6xl md:text-[100px] font-black text-white leading-none mb-12 tracking-tighter uppercase">
              DISTRIBUIÇÃO QUE <span className="text-slim-tech-blue italic accent-glow">CONECTA.</span><br/>
              CONTEÚDO QUE <span className="text-slim-tech-blue italic accent-glow">ESCALA.</span>
            </h1>
            <p className="text-lg font-light text-[#D1D1D1]/60 mb-14 leading-relaxed max-w-2xl border-l border-white/5 pl-10">
              Criada para reinventar modelos de negócio para ISPs e democratizar o acesso de provedores de diferentes portes a grandes marcas.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to={NavigationPaths.CONTACT} className="group relative grad-cta text-slim-black px-14 py-6 text-sm font-black uppercase tracking-widest transition-all cta-glow text-center overflow-hidden rounded-full">
                <span className="relative z-10">Ativar Parceria.</span>
              </Link>
              <Link to={NavigationPaths.CHANNELS} className="px-14 py-6 text-sm font-bold uppercase tracking-widest border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-center rounded-full">
                Ver Canais.
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-40 relative bg-slim-black overflow-hidden grad-flow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div ref={(el) => { revealRefs.current[0] = el; }} className="reveal reveal-up mb-32 text-center max-w-6xl mx-auto">
            <p className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter uppercase italic">
              Soluções integradas de conteúdo, tecnologia e serviços para ISP'S que buscam diferenciação e escala.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ecosystemItems.map((sol, i) => (
              <div 
                key={i} 
                ref={(el) => { revealRefs.current[i + 1] = el; }}
                className="reveal reveal-up h-full"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Link 
                  to={sol.path}
                  className="group relative bg-slim-gray p-10 h-full transition-all duration-700 hover:bg-slim-gray/80 overflow-hidden flex flex-col justify-between rounded-[2.5rem] border border-white/5 min-h-[300px]"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-all duration-1000">
                    <img src={sol.img} className="w-full h-full object-cover blur-sm" alt="" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-2xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-slim-tech-blue transition-colors">{sol.title}</h4>
                    <p className="text-[#D1D1D1]/40 font-light leading-relaxed mb-10 text-lg">{sol.desc}</p>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 group-hover:text-slim-tech-blue">{sol.cta}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div ref={(el) => { revealRefs.current[7] = el; }} className="reveal reveal-up mt-40 pt-32 border-t border-white/5 text-center max-w-5xl mx-auto">
            <h3 className="text-3xl md:text-5 font-black text-white mb-10 tracking-tighter uppercase leading-none">
                DISTRIBUIDORA LICENCIADA DE <br/>
                <span className="text-slim-tech-blue italic">GRANDES PRODUTORAS.</span>
            </h3>
            <p className="text-lg font-light text-[#D1D1D1]/60 leading-relaxed max-w-3xl mx-auto">
                A Slim Pack foi criada para reinventar modelos de negócio para ISPs e democratizar o acesso de provedores de diferentes portes a grandes marcas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;