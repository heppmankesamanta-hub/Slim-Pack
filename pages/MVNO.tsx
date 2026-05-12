import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavigationPaths } from '../types';

const MVNO: React.FC = () => {
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

  const brazMovelLogo = "https://iili.io/fQyAgov.png";

  const vantagens = [
    "Aumenta o portfólio e market share",
    "Melhora a competitividade frente às grandes operadoras",
    "Aumenta a exposição da marca no mercado",
    "Fideliza e atrai novos clientes",
    "Permite usar toda a infraestrutura da Braz Móvel",
    "Atuação nacional, sem limites"
  ];

  const diferenciais = [
    "Sem custo de integração/setup",
    "Integração com os principais ERP’s",
    "A partir de 100 chips",
    "Perfil elétrico personalizado",
    "Operação white label",
    "e-Sim",
    "Rede VIVO",
    "Venda direta",
    "Bônus de portabilidade"
  ];

  return (
    <div className="pt-0 bg-slim-black min-h-screen">
      {/* HERO SECTION */}
      <header className="relative pt-40 md:pt-56 pb-32 overflow-hidden bg-slim-black grad-dark-tech">
        <div className="market-bg-layer">
          <img src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=2000" className="market-bg-img" alt="" />
          <div className="market-bg-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-reveal-up">
            <h1 className="text-6xl md:text-[100px] font-black text-white leading-none tracking-tighter uppercase">
                MVNO<span className="text-slim-tech-blue italic accent-glow">.</span>
            </h1>
            <p className="text-lg md:text-2xl font-light text-[#D1D1D1]/70 max-w-2xl border-l-2 border-slim-tech-blue/50 pl-6 mt-6">
                Mobilidade integrada ao negócio do ISP.
            </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-slim-black">
        {/* CONTEÚDO CENTRAL */}
        <div ref={(el) => { revealRefs.current[0] = el; }} className="reveal reveal-zoom bg-slim-gray/40 border border-white/5 p-10 md:p-20 overflow-hidden backdrop-blur-xl rounded-[3rem]">
            
            <div className="flex flex-col items-center text-center mb-24">
                <img src={brazMovelLogo} alt="Braz Móvel" className="h-64 md:h-[400px] w-auto brightness-110 accent-glow mb-16 transition-transform hover:scale-105 duration-700" />
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight max-w-4xl leading-tight">
                    Leve Telefonia Móvel para Seus Clientes com a <span className="text-slim-tech-blue">Braz Móvel.</span>
                </h2>
                <div className="h-1 w-24 bg-slim-tech-blue mt-8 mb-12"></div>
                <p className="text-xl md:text-2xl text-[#D1D1D1] font-light leading-relaxed max-w-5xl">
                    A Braz Móvel é uma operadora brasileira, regulada pela Anatel, criada para levar o serviço de telefonia móvel a todos os provedores de internet do país. Com ela, seu negócio ganha novas oportunidades de crescimento, competitividade e fidelização de clientes.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                {/* VANTAGENS */}
                <div ref={(el) => { revealRefs.current[1] = el; }} className="reveal reveal-left space-y-10 bg-white/5 p-12 rounded-[2.5rem] border border-white/5">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slim-tech-blue flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(31,106,225,0.4)]">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest">Vantagens</h3>
                    </div>
                    <ul className="space-y-6">
                        {vantagens.map((item, i) => (
                            <li key={i} className="flex items-start space-x-4 group">
                                <span className="mt-1.5 w-2 h-2 bg-slim-tech-blue rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#1F6AE1]"></span>
                                <span className="text-lg font-bold text-white/70 uppercase tracking-wider group-hover:text-white transition-colors">{item}.</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* DIFERENCIAIS */}
                <div ref={(el) => { revealRefs.current[2] = el; }} className="reveal reveal-right space-y-10 bg-slim-black/40 p-12 rounded-[2.5rem] border border-white/5">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-slim-orange flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(244,124,32,0.4)]">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-widest">Diferenciais</h3>
                    </div>
                    <ul className="space-y-6">
                        {diferenciais.map((item, i) => (
                            <li key={i} className="flex items-start space-x-4 group">
                                <span className="mt-1.5 w-2 h-2 bg-slim-orange rounded-full group-hover:scale-150 transition-transform shadow-[0_0_10px_#F47C20]"></span>
                                <span className="text-lg font-bold text-white/70 uppercase tracking-wider group-hover:text-white transition-colors">{item}.</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* SOCIAL PROOF & CALL TO ACTION */}
            <div ref={(el) => { revealRefs.current[3] = el; }} className="reveal reveal-up mt-24 text-center border-t border-white/10 pt-20">
                <div className="inline-block bg-slim-tech-blue/10 border border-slim-tech-blue/20 px-8 py-3 rounded-full text-slim-tech-blue text-[10px] font-black uppercase tracking-[0.4em] mb-10">
                    Liderança de Mercado
                </div>
                <p className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-none">
                    MAIS DE <span className="text-slim-tech-blue">300 PROVEDORES</span> <br className="hidden md:block" /> USAM BRAZ MÓVEL NO BRASIL!
                </p>
                <p className="text-2xl font-light text-white/40 mb-16 italic">
                    Nossa proposta comercial é imperdível!
                </p>
                <Link to={NavigationPaths.CONTACT} className="inline-block grad-cta text-slim-black px-16 py-8 text-xs font-black uppercase tracking-[0.4em] cta-glow rounded-full shadow-2xl hover:scale-105 transition-all">
                    Ativar Minha Operadora Agora
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
};

export default MVNO;