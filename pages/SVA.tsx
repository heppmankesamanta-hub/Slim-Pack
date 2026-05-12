import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { NavigationPaths } from '../types';

const SVA: React.FC = () => {
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

  const teleclinicaLogo = "https://iili.io/fv0aFNR.md.png";
  const newcoPlayLogo = "https://iili.io/fZ9VbHb.png";
  const slimFastLogo = "https://iili.io/fZ9GHxI.png";
  const graviolaLogo = "https://iili.io/fZHwgs4.png";
  const contaOutraVezLogo = "https://iili.io/fZHNyjs.png";
  const maquinaContosLogo = "https://iili.io/fZHUsDP.png";

  const specialties = [
    "Alergia e imunologia pediátrica", "Alergogista e imunologista", "Anestesiologia", "Cirurgia vascular",
    "Cardiologia", "Clínica médica", "Dermatologia", "Endocrinologia", "Metabologia",
    "Gastroenterologia", "Geriatria", "Ginecologia e obstetrícia", "Hematologia e hemoterapia",
    "Infectologia", "Neurologia", "Nefrologia", "Oftalmologia", "Ortopedia",
    "Otorrinolaringologia", "Pediatria", "Pneumologia", "Psicologia", "Psiquiatria",
    "Reumatologia", "Urologia"
  ];

  const slimFastBenefits = ["Valor único", "Sem limite de assinantes", "Multi plataforma", "Set up grátis", "Benefício tributário"];
  
  // Cor verde institucional solicitada para Tele Clinica (#11e24f)
  const brandGreen = "#11e24f";

  // Classes para logos 3x maiores e simétricos com efeito de revelação 3D
  const mainLogoClass = "reveal reveal-3d w-full h-[400px] md:h-[600px] object-contain brightness-110 accent-glow mb-12 transition-all duration-[1200ms] ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]";
  const subLogoClass = "reveal reveal-3d w-full h-[400px] md:h-[600px] object-contain brightness-110 accent-glow mb-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.34, 1.56, 0.64, 1)]";

  return (
    <div className="pt-0 bg-slim-black min-h-screen">
      <header className="relative pt-40 md:pt-56 pb-48 overflow-hidden grad-dark-tech">
        <div className="market-bg-layer">
          <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" className="market-bg-img" alt="" />
          <div className="market-bg-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h1 className="text-6xl md:text-[100px] font-black text-white mb-8 uppercase tracking-tighter leading-none animate-reveal-up">
                SVAS<span className="text-slim-tech-blue italic accent-glow">.</span>
            </h1>
            <p className="text-lg font-light text-[#D1D1D1]/60 max-w-2xl border-l border-slim-tech-blue/30 pl-10 animate-reveal-up" style={{ animationDelay: '200ms' }}>
                Serviços de Valor Agregado para potencializar o negócio do provedor.
            </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-64 bg-slim-black">
        
        {/* SLIM FAST SECTION */}
        <section className="flex flex-col items-center text-center">
            <img 
              ref={(el) => { revealRefs.current[0] = el; }} 
              src={slimFastLogo} alt="Slim Fast" className={mainLogoClass + " scale-110 md:scale-125"} 
            />
            <div ref={(el) => { revealRefs.current[1] = el; }} className="reveal reveal-up space-y-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                    PRIMEIRA PLATAFORMA <span className="text-slim-tech-blue italic">INDEPENDENTE DE CANAIS FAST.</span>
                </h2>
                <p className="text-xl text-[#D1D1D1]/80 font-light leading-relaxed">
                    A Slim Fast é a plataforma brasileira de canais FAST desenvolvida para provedores de internet que buscam diferenciação e desejam ir além da conectividade. Com um portfólio que inclui canais como CNN, Movie Sphere, Heartland, Rockie Bleu, Veja +, Turma da Mônica e Nsports, oferece uma solução completa para impulsionar o crescimento com sustentabilidade.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-6">
                    {slimFastBenefits.map((b, i) => (
                        <div key={i} className="px-6 py-2 bg-slim-tech-blue/10 border border-slim-tech-blue/20 rounded-full">
                            <span className="text-[10px] font-black uppercase tracking-widest text-slim-tech-blue">{b}.</span>
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 max-w-2xl mx-auto w-full">
                    <div className="p-8 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center">
                        <span className="text-4xl font-black text-white">+40 CANAIS</span>
                        <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] mt-2">ao vivo com marcas reconhecidas</span>
                    </div>
                    <div className="p-8 bg-white/5 rounded-2xl border border-white/5 flex flex-col items-center">
                        <span className="text-4xl font-black text-white">1.200h VOD</span>
                        <span className="text-[9px] text-white/30 uppercase tracking-[0.3em] mt-2">vídeo on demand</span>
                    </div>
                </div>
            </div>
        </section>

        {/* NEWCO PLAY SECTION */}
        <section className="flex flex-col items-center text-center">
            <img 
              ref={(el) => { revealRefs.current[2] = el; }} 
              src={newcoPlayLogo} alt="Newco Play" className={mainLogoClass} 
            />
            <div ref={(el) => { revealRefs.current[3] = el; }} className="reveal reveal-up space-y-6 max-w-4xl">
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                    SEMPRE NO <span className="text-slim-purple italic">SEU TEMPO!</span>
                </h2>
                <p className="text-xl text-[#D1D1D1]/80 font-light leading-relaxed">
                    Um universo de conteúdo ao seu alcance! Os maiores estúdios estão aqui: Universal, Warner, NBC, Sony e Dream Works. 
                    Mais de 1000 horas de conteúdos com documentários, séries e programas originais dos canais NEWCO.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-10">
                    {[
                        "Gravação até 18h", 
                        "Programação ao vivo", 
                        "Começar do início", 
                        "Replay até 7 dias", 
                        "Conteúdo offline", 
                        "Multi-telas", 
                        "120 novos títulos/mês",
                        "Estúdios Premium"
                    ].map((f, i) => (
                        <div key={i} className="flex items-center space-x-2 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-slim-purple/30 transition-all">
                            <div className="w-1.5 h-1.5 bg-slim-purple rounded-full"></div>
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-wide leading-tight">{f}.</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* TELE CLINICA BRASIL SECTION */}
        <section className="flex flex-col items-center">
            <img 
              ref={(el) => { revealRefs.current[4] = el; }} 
              src={teleclinicaLogo} alt="Tele Clínica Brasil" className={mainLogoClass + " scale-110 md:scale-125"} 
            />
            <div ref={(el) => { revealRefs.current[5] = el; }} className="reveal reveal-up w-full space-y-12">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                        SAÚDE COM <span style={{ color: brandGreen }}>AGILIDADE E CONFORTO.</span>
                    </h2>
                    <p className="text-xl text-[#D1D1D1]/80 font-light leading-relaxed">
                        Em um cenário onde apenas 26% da população possui convênio médico, este é o SVA que gera valor real. A Tele Clínica Brasil democratiza o acesso à saúde com consultas rápidas, seguras e disponíveis em todo o Brasil — sem filas, sem deslocamentos.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6" style={{ borderColor: `${brandGreen}33`, backgroundColor: `${brandGreen}0D` }}>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: brandGreen }}>Diferenciais</h4>
                        <ul className="space-y-4 text-[11px] font-bold text-white/60 uppercase tracking-widest">
                            <li>• Plantão 24 horas</li>
                            <li>• Prescrição de medicamentos</li>
                            <li>• Reconsulta com o mesmo médico</li>
                            <li>• Avaliação de exames</li>
                            <li>• White Label disponível</li>
                        </ul>
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
                        <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Exclusividades</h4>
                        <ul className="space-y-4 text-[11px] font-bold uppercase tracking-widest" style={{ color: brandGreen }}>
                            <li>• Psicologia de uso ilimitado</li>
                            <li>• +25 Especialidades médicas</li>
                            <li>• Atendimento multi-canal</li>
                            <li>• Gestão de carteira B2B</li>
                        </ul>
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6" style={{ borderColor: `${brandGreen}33`, backgroundColor: `${brandGreen}0D` }}>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.3em]" style={{ color: brandGreen }}>Vantagens B2B</h4>
                        <p className="text-lg font-black text-white leading-tight">redução de até 60% nas alíquotas do IBS e da CBS.</p>
                        <p className="text-[11px] text-white/40 uppercase font-light leading-relaxed">Modelo de negócio pronto e validado também para prefeituras.</p>
                    </div>
                </div>

                <div className="pt-16 border-t border-white/5">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.8em] mb-12 text-center" style={{ color: `${brandGreen}66` }}>Especialidades Médicas</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {specialties.map((s, i) => (
                            <div key={i} className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center transition-all hover:bg-white/10 group" style={{ borderColor: `${brandGreen}33`, backgroundColor: `${brandGreen}0D` }}>
                                <span className="text-[10px] font-bold group-hover:text-white uppercase tracking-tight" style={{ color: brandGreen }}>{s}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* GRAVIOLA SECTION */}
        <section className="space-y-24">
            <div className="flex flex-col items-center text-center">
                <img 
                  ref={(el) => { revealRefs.current[6] = el; }} 
                  src={graviolaLogo} alt="Graviola" className={mainLogoClass + " !h-[300px] !md:h-[450px]"} 
                />
                <div ref={(el) => { revealRefs.current[7] = el; }} className="reveal reveal-up max-w-4xl space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight">
                        TECNOLOGIA PARA <span className="text-slim-orange italic">CONTAR HISTÓRIAS.</span>
                    </h2>
                    <p className="text-xl text-[#D1D1D1]/80 font-light leading-relaxed">
                        A Graviola Digital usa tecnologia para conectar pessoas e contar histórias, ampliando o acesso à literatura brasileira. 
                        Impactamos mais de 5 milhões de leitores através de projetos culturais e comerciais.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* CONTA OUTRA VEZ */}
                <div className="flex flex-col items-center text-center space-y-6 bg-white/5 p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
                    <img 
                      ref={(el) => { revealRefs.current[8] = el; }}
                      src={contaOutraVezLogo} alt="Conta Outra Vez" className={subLogoClass + " transition-transform duration-500 group-hover:scale-[1.05]"} 
                    />
                    <div ref={(el) => { revealRefs.current[9] = el; }} className="reveal reveal-up space-y-4">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">CLUBINHO DE LEITURA INFANTIL</h3>
                        <p className="text-sm text-[#D1D1D1]/70 font-light leading-relaxed">
                            Todos os meses, os pequenos recebem dois livros selecionados por nossa curadoria, unindo educação e entretenimento para ler, ouvir e guardar para sempre.
                        </p>
                    </div>
                    <div className="w-full pt-8 border-t border-white/10 text-left">
                        <h4 className="text-[10px] font-black text-slim-orange uppercase tracking-widest mb-6">Diferenciais Destaques</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                "Dois livros por mês", 
                                "Autores brasileiros", 
                                "Livros ilustrados", 
                                "Narração profissional", 
                                "Orientação para adultos", 
                                "Acesso multi-device", 
                                "Posse definitiva", 
                                "App 100% infantil"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 text-[10px] font-bold text-white/50 uppercase tracking-wide">
                                    <div className="w-1 h-1 bg-slim-orange rounded-full"></div>
                                    <span>{item}.</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* MAQUINA DE CONTOS */}
                <div className="flex flex-col items-center text-center space-y-6 bg-white/5 p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group">
                    <img 
                      ref={(el) => { revealRefs.current[10] = el; }}
                      src={maquinaContosLogo} alt="Máquina de Contos" className={subLogoClass + " transition-transform duration-500 group-hover:scale-[1.05]"} 
                    />
                    <div ref={(el) => { revealRefs.current[11] = el; }} className="reveal reveal-up space-y-4">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight">CONTOS BRASILEIROS CONTEMPORÂNEOS</h3>
                        <p className="text-sm text-[#D1D1D1]/70 font-light leading-relaxed">
                            O aplicativo dos contos brasileiros. Todos os meses os leitores recebem livros de contos curtos, ideais para leitura em dispositivos eletrônicos e criação do hábito.
                        </p>
                    </div>
                    <div className="w-full pt-8 border-t border-white/10 text-left">
                        <h4 className="text-[10px] font-black text-slim-orange uppercase tracking-widest mb-6">Diferenciais Destaques</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                "Contos todos os meses", 
                                "Autores premiados", 
                                "Prêmio Literário exclusivo", 
                                "Histórias curtas digitais", 
                                "Opção de audiolivro", 
                                "Acesso App/Web", 
                                "Leitura offline", 
                                "ISBN e posse definitiva"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center space-x-2 text-[10px] font-bold text-white/50 uppercase tracking-wide">
                                    <div className="w-1 h-1 bg-slim-orange rounded-full"></div>
                                    <span>{item}.</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <div className="pt-16 flex justify-center pb-20">
          <Link to={NavigationPaths.CONTACT} className="group relative grad-cta text-slim-black px-14 py-6 text-sm font-black uppercase tracking-widest transition-all cta-glow rounded-full">
            <span className="relative z-10">Falar com Consultor.</span>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default SVA;