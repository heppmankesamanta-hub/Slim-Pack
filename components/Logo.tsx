import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12" }) => {
  // Nova URL do logo oficial fornecida pelo usuário
  const logoUrl = "https://iili.io/f8jD59j.png";

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={logoUrl} 
        alt="Slim Pack" 
        className="h-full w-auto object-contain transition-all duration-500 brightness-110 saturate-[1.1]"
        style={{ 
          filter: 'drop-shadow(0 0 20px rgba(31, 106, 225, 0.25))'
        }}
      />
    </div>
  );
};

export default Logo;