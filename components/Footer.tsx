import React from 'react';
import { NavigationPaths } from '../types';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slim-black text-white pt-32 pb-16 border-t border-white/5 relative overflow-hidden font-bold">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="" 
          className="w-full h-full object-cover opacity-40 blur-[8px] contrast-[85%] saturate-[50%] brightness-[40%] scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-[#0B0B0B]/80 z-[1]"></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] via-transparent to-slim-petroleum/30 z-[2] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          
          <div className="flex-shrink-0 group">
            <Logo className="h-40 md:h-56 transition-transform duration-500 group-hover:scale-105" />
          </div>

          <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40"><strong>INSTITUCIONAL.</strong></h4>
              <p className="text-sm font-black text-[#D1D1D1] leading-relaxed max-w-xs">
                Distribuidora B2B de canais e conteúdos, especializada em gerar valor para ISPs por meio de parcerias estratégicas e modelos de negócio escaláveis.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40"><strong>NAVEGAÇÃO.</strong></h4>
              <ul className="space-y-4">
                <li><Link to={NavigationPaths.HOME} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">Início.</Link></li>
                <li><Link to={NavigationPaths.ABOUT} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">Quem Somos.</Link></li>
                <li><Link to={NavigationPaths.CHANNELS} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">Canais Lineares.</Link></li>
                <li><Link to={NavigationPaths.SVA} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">SVAS.</Link></li>
                <li><Link to={NavigationPaths.MVNO} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">MVNO.</Link></li>
                <li><Link to={NavigationPaths.VOD} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">VOD.</Link></li>
                <li><Link to={NavigationPaths.EPG} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">EPG.</Link></li>
                <li><Link to={NavigationPaths.CONTACT} className="text-xs text-white font-black hover:text-slim-tech-blue transition-colors tracking-wide">Contato.</Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40"><strong>HUB DE CONTATO.</strong></h4>
              <div className="space-y-6">
                <div className="flex items-center space-x-3 group">
                  <span className="text-slim-tech-blue opacity-50 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
                  </span>
                  <span className="text-sm text-white font-black">+55 (11) 91366-0707.</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <span className="text-slim-tech-blue opacity-50 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/></svg>
                  </span>
                  <span className="text-sm text-white font-black">comercial@slimpack.com.br.</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <p className="text-[9px] text-white font-light tracking-[0.4em] uppercase">
            © 2026 SLIM PACK | A CASA DO CONTEÚDO | Feito por Studio de Marcas Samanta Manke
          </p>
          <div className="flex space-x-12">
            <a href="https://www.linkedin.com/company/slim-pack/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-[9px] text-white hover:text-white transition-colors uppercase font-black tracking-[0.3em]">LinkedIn.</a>
            <a href="https://www.instagram.com/slimpackdigital/" target="_blank" rel="noopener noreferrer" className="text-[9px] text-white hover:text-white transition-colors uppercase font-black tracking-[0.3em]">Instagram.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;