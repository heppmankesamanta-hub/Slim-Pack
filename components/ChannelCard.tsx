
import React, { useState } from 'react';
import { Channel } from '../types';

interface ChannelCardProps {
  channel: Channel;
}

const ChannelCard: React.FC<ChannelCardProps> = ({ channel }) => {
  const [isTapped, setIsTapped] = useState(false);
  
  // Identificação de grupos para tratamento visual específico
  const isMainGroup = ['band', 'bandnews', 'bandsports', 'arte1', 'agroplus_newco', 'saborarte', 'terraviva', 'newbrasil', 'freetv_crime', 'freetv_drama'].includes(channel.id) || channel.id.startsWith('espn');
  const isFastChannel = ['newbrasil', 'freetv_crime', 'freetv_drama', 'newbrasil_newco'].includes(channel.id);
  
  // Ajuste de escala específico solicitado para New Brasil, Free TV Crime e ESPN
  const isEspn = channel.id.startsWith('espn');
  const needsScaleBoost = ['newbrasil', 'freetv_crime', 'newbrasil_newco'].includes(channel.id) || isEspn;

  const toggleTap = () => {
    setIsTapped(!isTapped);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleTap();
    }
  };

  return (
    <div 
      tabIndex={0}
      onMouseEnter={() => setIsTapped(true)}
      onMouseLeave={() => setIsTapped(false)}
      onClick={toggleTap}
      onKeyDown={handleKeyPress}
      className={`group relative h-72 w-full bg-slim-gray border border-white/10 overflow-hidden rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] 
        ${isTapped ? 'translate-y-[-8px] border-white/20' : 'hover:translate-y-[-8px] hover:border-white/20 focus-visible:translate-y-[-8px]'}
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slim-tech-blue/50 cursor-pointer
      `}
    >
      {/* 1. CAMADA EXTERNA DE GLOW */}
      <div className={`absolute -inset-2 bg-gradient-to-r from-[#1F6AE1] via-[#6A2FE8] via-[#E23A8B] via-[#F47C20] to-[#FFD23F] opacity-0 transition-opacity duration-700 blur-2xl z-0 rounded-2xl
        ${isTapped ? 'opacity-40' : 'group-hover:opacity-40'}`} 
      />
      
      {/* Background Sólido Base */}
      <div className="absolute inset-0 bg-slim-gray z-[1] rounded-2xl"></div>

      {/* 2. ILUMINAÇÃO INTERNA */}
      <div className={`absolute inset-0 z-[2] opacity-0 transition-opacity duration-700 rounded-2xl
        bg-[radial-gradient(circle_at_center,rgba(31,106,225,0.15)_0%,rgba(106,47,232,0.1)_40%,transparent_70%)]
        ${isTapped ? 'opacity-100' : 'group-hover:opacity-100'}
      `}></div>

      {/* 3. CAMADA DO LOGO */}
      <div className={`absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 ease-in-out
        ${isFastChannel ? 'p-2 md:p-4' : 'p-6 md:p-8'}
        ${isTapped ? 'opacity-0 scale-90 pointer-events-none' : 'opacity-100 scale-100'}
      `}>
        <img 
          src={channel.logo} 
          alt={channel.name} 
          className={`w-full h-full object-contain transition-all duration-500 brightness-110
            ${isEspn ? 'scale-[2.4]' : needsScaleBoost ? 'scale-[1.2]' : 'scale-100'}
          `}
          style={isMainGroup ? { filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.2))' } : { filter: 'drop-shadow(0 0 20px rgba(0, 0, 0, 0.3))' }}
        />
      </div>

      {/* 4. CAMADA DE TEXTO - Padding reduzido e fontes ajustadas para caber conteúdo longo */}
      <div className={`absolute inset-0 z-30 flex flex-col justify-center p-6 md:p-8 transition-all duration-500 bg-slim-black/95 rounded-2xl
        ${isTapped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
      `}>
        <div className="relative">
          <h3 className="text-lg md:text-xl font-black text-white mb-2 tracking-tighter uppercase leading-none">
            {channel.name}
          </h3>
          <div className="w-10 h-1 bg-gradient-to-r from-slim-tech-blue to-slim-magenta mb-4"></div>
          
          <div className="text-[12px] md:text-[13px] font-medium text-[#D1D1D1] leading-snug">
            {channel.description}
          </div>
          
          {channel.category && (
            <div className="mt-4 flex items-center">
              <span className="text-[9px] font-bold text-slim-tech-blue uppercase tracking-[0.3em]">{channel.category}</span>
            </div>
          )}
        </div>
      </div>

      {/* Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay z-[5] rounded-2xl bg-[url('https://www.transparenttextures.com/patterns/p6-dark.png')]"></div>
    </div>
  );
};

export default ChannelCard;
