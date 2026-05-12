import React from 'react';

export const SLIM_PACK_LOGO = "SLIM PACK";

export const COLORS = {
  BLACK: '#0B0B0B',
  GRAY: '#1A1A1A',
  PETROLEUM: '#0F2A44',
  TECH_BLUE: '#1F6AE1',
  PURPLE: '#6A2FE8',
  MAGENTA: '#E23A8B',
  ORANGE: '#F47C20',
  YELLOW: '#FFD23F',
};

export const TEXTS = {
  WHO_WE_ARE: (
    <>
      <p>A Slim Pack é uma empresa especializada na distribuição B2B de canais de TV e conteúdos, com expertise voltada à construção de parcerias estratégicas e geração de valor para o mercado de telecomunicações.</p>
      <br />
      <p>Atuando como elo entre produtores de conteúdo e ISPs/operadoras, a companhia viabiliza modelos de negócio mais ágeis, eficientes e escaláveis.</p>
      <br />
      <p>Fundada em 2018 por Newton Suzuki, a Slim Pack surgiu com o propósito de criar novos modelos de negócios e democratizar o acesso a grandes marcas. Hoje, a empresa reúne um portfólio diversificado, com conteúdos como canais lineares Newco (Grupo Band - Band, Band News, Arte 1, Band Sports, Terra Viva, New Brasil, Sabor & Arte, Agro+), Hallo!, Leo & Lully, Netcine, Agroplus, Baita Conteúdo, TCM10, além de SVAs como Slim Fast, Tele Clínica Brasil, Newco Play e Graviola Digital, e soluções como a MVNO Braz Móvel, VOD como a Midialand e um novo produto, o EPG (Eletronic Programming Guide).</p>
    </>
  ),
  HERO_WHO_WE_ARE: "À Slim Pack é um hub de soluções e conteúdos para provedores de internet e operadoras de telecomunicações.",
  CEO_BIO: "Executivo com mais de 30 anos de experiência no mercado de telecomunicações e entretenimento, com passagens por grandes players como TVA (Grupo Abril), NET/Claro, Hallmark Channel, Shoptour e Grupo Bandeirantes de Comunicação.",
};

export const CHANNELS_DATA = {
  ESPN: [
    {
      id: 'espn_principal',
      name: 'ESPN',
      logo: 'https://i.ibb.co/cSCm9sPm/71.png',
      description: (
        <>
          <p className="font-bold mb-2">Vitrine da marca, com foco na cobertura premium de futebol.</p>
          <p>Reúne as principais competições do calendário, como Libertadores, Sul-Americana, Brasileirão Serie B, Premier League, La Liga e Serie A Italiana, além de concentrar os jogos e eventos de maior relevância do dia.</p>
        </>
      )
    },
    {
      id: 'espn2',
      name: 'ESPN 2',
      logo: 'https://i.ibb.co/DFxTpLT/72.png',
      description: 'Dedicado aos grandes eventos do esporte global, com forte presença das ligas norte-americanas (NBA, NFL, NHL e MLB). Complementa a grade com conteúdos de tênis, boxe, ciclismo e produções originais, incluindo séries e documentários.'
    },
    {
      id: 'espn3',
      name: 'ESPN 3',
      logo: 'https://i.ibb.co/sJR2Dgcx/73.png',
      description: 'Canal voltado à diversidade esportiva, com cobertura de modalidades variadas como surfe, rugby, vôlei, judô, entre outros. Atua como plataforma para expansão do portfólio internacional e eventos de nicho com alto engajamento.'
    },
    {
      id: 'espn4',
      name: 'ESPN 4',
      logo: 'https://i.ibb.co/ZppT2kHy/74.png',
      description: 'Especializado em futebol internacional, com foco em torneios e ligas relevantes ao redor do mundo. Amplia a oferta do esporte mais consumido, garantindo profundidade e capilaridade na cobertura.'
    },
    {
      id: 'espn5_6',
      name: 'ESPN 5 & ESPN 6',
      logo: 'https://i.ibb.co/KjyWCgXK/75.png',
      description: 'Canais complementares que aumentam a capacidade de transmissões simultâneas, assegurando a exibição de múltiplos eventos ao vivo. Frequentemente utilizados para competições como NCAA e outras propriedades esportivas, garantindo cobertura integral do portfólio.'
    }
  ],
  NEWCO: [
    { 
      id: 'band', 
      name: 'Bandeirantes', 
      logo: 'https://iili.io/fQm6asa.png', 
      description: 'A Band é um canal de televisão brasileiro que está presente na TV aberta desde 1967. Conhecida por sua programação variada, que inclui programas de entretenimento, jornalismo, esporte e filmes, a Band é um canal com cobertura nacional.' 
    },
    { 
      id: 'bandnews', 
      name: 'Band News', 
      logo: 'https://iili.io/fQyfftt.png', 
      description: '24 horas no ar na velocidade da notícia. Canal de notícias 24 horas, que traz informações completas ao telespectador que não tem tempo para esperar. Com presença em 34 praças do país, a BandNews traz uma cobertura ampla, com todos os destaques, do Brasil e do mundo.' 
    },
    { 
      id: 'bandsports', 
      name: 'Band Sports', 
      logo: 'https://iili.io/fQ7ZHuf.png', 
      description: 'Há 22 anos, o BandSports é sinônimo de paixão pelo esporte. Com a credibilidade do Grupo Bandeirantes, oferecemos conteúdo qualificado e a força de um elenco consagrado — tudo isso em uma experiència multiplataforma que acompanha o ritmo dos fãs e o interesse das marcas.' 
    },
    { 
      id: 'arte1', 
      name: 'Arte1', 
      logo: 'https://iili.io/fQ7teg1.png', 
      description: 'PAIXÃO POR ARTE, CULTURA E COMPORTAMENTO. Classificado pela Agência Nacional do Cinema como um Canal Brasileiro de Espaço Qualificado, o Arte1 fomenta a pluralidade de olhares para a arte e incentiva a produção nacional independente, com produções originais e documentais. Arte / Cultura / Dança / Música / Exposição / Biografia' 
    },
    { 
      id: 'agroplus_newco', 
      name: 'Agro+', 
      logo: 'https://iili.io/fQ8WPrx.png', 
      description: 'O CANAL DO AGRONEGÓCIO, DEDICADO 100% À AGROINFORMAÇÃO. Com estúdios em Brasília de conteúdo ao vivo, são 10 horas para acompanhar em tempo real as discussões, tendências e decisões políticas que afetam o setor.' 
    },
    { 
      id: 'saborarte', 
      name: 'Sabor & Arte', 
      logo: 'https://iili.io/fQyqTqg.png', 
      description: 'MUITO ALÉM DA GASTRONOMIA. Uma programação que valoriza todos os detalhes, da simplicidade à sofisticação, da origem do ingrediente ao resultado final, proporcionando informação, variedade e entretenimento. Estrelado por um time de talentos com uma visão plural e autoral do universo gastronômico.' 
    },
    { 
      id: 'newbrasil_newco', 
      name: 'New Brasil', 
      logo: 'https://iili.io/fQms1gj.png', 
      description: 'A PLATAFORMA FAST DO GRUPO NEWCO PARA QUEM DESEJA CONTEÚDO DE QUALIDADE. No New Brasil você encontra jornalismo, política, agronegócio, economia, esportes, gastronomia, arte, turismo, análises e debates como grandes destaques na programação.' 
    },
    { 
      id: 'terraviva', 
      name: 'Terra Viva', 
      logo: 'https://iili.io/fQ7ydZb.png', 
      description: 'CULTIVANDO O MELHOR DO BRASIL. 12 horas de programação, ao vivo, programas com foco na agropecuária brasileira. Entrevistas técnicas, análises de notícias, previsão do tempo, cotações das commodities e o mundo de relevância para o Agronegócio.' 
    },
  ],
  HALLO: [
    { 
      id: 'hallo_brasil', 
      name: 'Hallo Brasil', 
      logo: 'https://iili.io/fQmEHib.png', 
      description: (
        <>
          <p>Canal HD com o melhor do conteúdo nacional: séries, filmes e grandes clássicos brasileiros. Conteúdo de qualidade para enriquecer sua grade e fidelizar assinantes!</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Ó Pai Ó, Olga, SOS Mulheres ao Mar.</p>
        </>
      )
    },
    { 
      id: 'hallo_dorama', 
      name: 'Hallo Dorama', 
      logo: 'https://iili.io/fQmG54j.png', 
      description: (
        <>
          <p>Hallo! Dorama, é o 1º canal totalmente dedicado aos doramas no Brasil, trazendo filmes e séries asiáticas aclamadas e exclusivas.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: The Last Bout, Last Madame, Operandi Gerhana, This Land Is Mine, Tiotoudao.</p>
        </>
      )
    },
    { 
      id: 'hallo_series', 
      name: 'Hallo Series', 
      logo: 'https://iili.io/fQme1UX.png', 
      description: (
        <>
          <p>Canal HD com as séries preferidas do público. Seus clientes não precisam procurar em outras plataformas: todas as séries estão reunidas em um único canal.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Eu, a Patroa e as Crianças, Lost.</p>
        </>
      )
    },
    { 
      id: 'hallo_anime', 
      name: 'Hallo Anime', 
      logo: 'https://iili.io/fQmvWMl.png', 
      description: (
        <>
          <p>Canal HD dedicado aos animes que marcaram gerações e moldaram a cultura geek no Brasil. O único canal de animes 24 horas, sem publicidade e 100% dublado.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Dragon Ball Z, Naruto, InuYasha.</p>
        </>
      )
    },
    { 
      id: 'hallo_classic', 
      name: 'Hallo Classic', 
      logo: 'https://iili.io/fQm800B.png', 
      description: (
        <>
          <p>Canal HD de entretenimento com filmes, séries e desenhos que fizeram história nos anos 90 e 2000. Nostalgia garantida para os seus clientes!</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Snoopy & Charlie Brown, Rambo III, A Pantera Cor-de-Rosa.</p>
        </>
      )
    },
    { 
      id: 'hallo_music', 
      name: 'Hallo Music', 
      logo: 'https://iili.io/fQmSlhG.png', 
      description: (
        <>
          <p>Canal HD que transmite festivais, shows e clipes, com conteúdo exclusivo para assinantes. O melhor da música em alta definição.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Shakira, Ed Sheeran, Katy Perry.</p>
        </>
      )
    },
    { 
      id: 'hallo_doc', 
      name: 'Hallo Doc', 
      logo: 'https://iili.io/fQmSlhG.png', 
      description: 'Canal HD dedicado a documentários e curiosidades do mundo, totalmente em português. Entretenimento e educação em uma programação variada com ciência, história, natureza, tecnologia, cultura e muito mais.' 
    },
    { 
      id: 'hallo_movies', 
      name: 'Hallo Movies', 
      logo: 'https://iili.io/fQmg1g2.png', 
      description: (
        <>
          <p>Canal HD com os grandes sucessos do cinema, feito para prender a atenção do seu assinante.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Karatê Kid, Ghost – Do Outro Lado da Vida, Besouro Verde.</p>
        </>
      )
    }
  ],
  NETCINE: [
    { 
      id: 'dark', 
      name: 'Dark TV', 
      logo: 'https://iili.io/fQyFb4f.png', 
      description: (
        <>
          <p>O horror tem um lar! Horror, ficção científica, fantasia e mistério em uma curadoria especializada com clássicos cult, estreias, séries e conteúdos exclusivos.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Filmes de Terror Clássicos, Slashers Modernos, Horror Psicológico.</p>
        </>
      )
    },
    { 
      id: 'cartoon_tv', 
      name: 'Cartoon TV', 
      logo: 'https://iili.io/fQy20y7.png', 
      description: (
        <>
          <p>Vai começar a diversão! Clássicos da animação e filmes em stop-motion para o público infantojuvenil, com criatividade, imaginação e histórias atemporais.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Robocop, Em Busca do Vale Encantado, Transformers, Bakugan.</p>
        </>
      )
    },
    { 
      id: 'cinemonde', 
      name: 'Cinemonde', 
      logo: 'https://iili.io/fQy3RN1.png', 
      description: (
        <>
          <p>Cinema clássico para sonhar! Os grandes clássicos do cinema mundial em uma curadoria sofisticada. Musicais, épicos, cinema de autor e obras inesquecíveis organizadas em coleções temáticas e mostras especiais.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: E o Vento Levou, Bonequinha de Luxo.</p>
        </>
      )
    },
    { 
      id: 'bradoky', 
      name: 'Bradoky', 
      logo: 'https://iili.io/fQyFJsa.png', 
      description: (
        <>
          <p>Vai encarar? Ação sem pausa. Filmes de aventura, guerra, artes marciais e faroeste com grandes astros e produções do mundo inteiro, 24 horas por dia.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Filmes clássicos e contemporâneos de ação, guerra, artes marciais e blockbusters cheios de adrenalina.</p>
        </>
      )
    }
  ],
  LEO_LULLY: [
    {
      id: 'leo_lully',
      name: 'LEO E LULLY',
      logo: 'https://i.ibb.co/N25J4HHH/SLIM-PACK-logo-final-2026-05-11-T214829-456.png',
      description: (
        <>
          <p className="font-bold mb-2">Aprender brincando, com conteúdo que encanta e desenvolve.</p>
          <p>Um universo educativo que transforma o aprendizado em diversão. Com centenas de vídeos, o canal combina músicas, histórias e atividades lúdicas que estimulam o desenvolvimento infantil de forma leve, segura e envolvente.</p>
          <p className="mt-2">Os conteúdos exploram habilidades essenciais como raciocínio lógico, memória, linguagem e percepção, criando uma experiência completa para crianças e tranquilidade para os pais.</p>
        </>
      )
    }
  ],
  BAITA: [
    { 
      id: 'bora', 
      name: 'Bora', 
      logo: 'https://i.ibb.co/RGNgV2db/31.png', 
      description: 'Cinema sem limites em HD. Filmes de todos os gêneros: terror, drama, comédia, ação em um canal completo e 100% livre de comerciais.' 
    },
    { 
      id: 'hello_tv', 
      name: 'Hello TV', 
      logo: 'https://i.ibb.co/wrxs4GC8/32.png', 
      description: 'Entretenimento em HD para toda a família, sem comerciais. Esportes, filmes e games em uma grade jovem, divertida e sem interrupções comerciais.' 
    },
    { 
      id: 'clubinho_fun', 
      name: 'Clubinho Fun', 
      logo: 'https://i.ibb.co/B298pSPR/33.png', 
      description: 'O canal HD que cresce junto com seus filhos. Programas, desenhos e produções especiais para crianças e adolescentes. Um espaço divertido, educativo e sem publicidade.' 
    },
    { 
      id: 'news_24h', 
      name: '24H News', 
      logo: 'https://i.ibb.co/m5PH0kM1/34.png', 
      description: 'Notícia em tempo real, 24 horas por dia. Canal jornalístico em HD, com programação ao vivo, documentários especiais e informação imparcial.' 
    },
    { 
      id: 'inspire', 
      name: 'Inspire', 
      logo: 'https://i.ibb.co/hFNGVnCV/35.png', 
      description: 'Um canal cheio de histórias exemplares. Histórias inspiradoras, lições de vida e muita autenticidade em alta definição. Conteúdo que conecta, inspira e transforma.' 
    },
    { 
      id: 'entretendo', 
      name: 'Entretendo', 
      logo: 'https://i.ibb.co/NnZc3XRT/36.png', 
      description: 'O melhor do cinema mundial em HD. Filmes inesquecíveis de todos os gêneros: drama, comédia, terror e ação em uma programação livre de comerciais.' 
    },
    { 
      id: 'promessas', 
      name: 'Promessas', 
      logo: 'https://i.ibb.co/kpkr4xP/37.png', 
      description: 'Canal em HD com uma programação voltada para toda a família, com mensagens de fé, louvor e reflexões que inspiram valores e fortalecem a espiritualidade.' 
    },
    { 
      id: 'mosaico', 
      name: 'Mosaico', 
      logo: 'https://i.ibb.co/rGCtzw4g/38.png', 
      description: 'Cultura, arte e estilo de vida em HD. Um canal plural, que reúne gastronomia, lazer e esportes em uma experiència agradável, limpa e sem comerciais.' 
    },
    { 
      id: 'up_channel', 
      name: 'Up Channel', 
      logo: 'https://i.ibb.co/VYyVF0Qs/39.png', 
      description: 'Educação e negócios em alta definição feito para aprender, curtir e crescer. Empreendedorismo, marketing, coaching, educação financeira e inovação.' 
    },
    { 
      id: 'life', 
      name: 'Life', 
      logo: 'https://i.ibb.co/rRb7fkDh/40.png', 
      description: 'Qualidade de vida em HD e sem comerciais. Conteúdo educativo e inspirador sobre saúde, bem-estar, comportamento, relacionamentos e educação.' 
    }
  ],
  TCM: [
    { 
      id: 'tcm10', 
      name: 'TCM Canal 10', 
      logo: 'https://iili.io/fQpfVv2.png', 
      description: 'TCM Canal 10 é referência em conteúdo no Rio Grande do Norte. Integrante do maior grupo de telecomunicações do estado, oferece programação diversificada com destaque para política, entretenimento e cultura nordestina.' 
    }
  ],
  AGROPLUS: [
    { 
      id: 'agroplus_premium', 
      name: 'Canal Agroplus', 
      logo: 'https://iili.io/fQmrohu.png', 
      description: (
        <>
          <p>O canal premium do agronegócio em HD, gratuito, via IP. Programação variada para quem vive e respira o agro.</p>
          <p className="mt-2 text-slim-tech-blue text-[10px] font-bold uppercase tracking-widest">Destaques: Conexão Rural, Minuto Agro, Agro Debate.</p>
        </>
      )
    }
  ]
};

export const VOD_DATA = {
  MIDIALAND: {
    name: 'MIDIALAND',
    logo: 'https://i.ibb.co/ynykkkJ0/SLIM-PACK-logo-final-2026-05-11-T215507-913.png',
    tagline: 'Histórias reais que prendem do início ao fim.',
    description: 'Com mais de 35 produções no portfólio, a Medialand é especializada na criação de conteúdos baseados na vida real, com forte atuação em doc-séries e séries de investigação. Narrativas intensas, atuais e envolventes que exploram temas como true crime, comportamento e sociedade, conectando audiência e relevância em diferentes plataformas.',
    highlights: [
      'Mais de 35 produções originais',
      'Forte expertise em doc-séries e true crime',
      'Conteúdos baseados em histórias reais',
      'Narrativas envolventes e de alta retenção',
      'Portfólio com múltiplos formatos: doc-séries, telefilmes, realidade e ficção',
      'Presença em grandes plataformas e canais'
    ],
    topContent: [
      'Investigação Criminal',
      'Anatomia do Crime',
      'Operação Policial',
      'Divisão de Homicídios',
      'Nos Campos do Holocausto',
      'Planeta Energia',
      'Terra Brasil'
    ]
  }
};

export const EPG_DATA = {
  EPG_BR: {
    name: 'EPG',
    logo: 'https://i.ibb.co/rKHYsWMm/color-2.png',
    tagline: 'Metadados que transformam a experiência de TV e streaming.',
    description: 'O EPG.BR é uma plataforma brasileira de metadados que entrega informação completa e atualizada para TV, cinema e futebol. Em uma única API, reúne grade de programação, catálogo de filmes e séries e cobertura esportiva em tempo real.',
    detailedText: 'Com atualização automática, enriquecimento de dados e integração simplificada, a plataforma permite que operadoras, ISPs e plataformas de vídeo ofereçam uma experiência mais rica, organizada e relevante para o usuário final.',
    quote: 'Mais engajamento, melhor navegação e aumento de consumo de conteúdo.',
    highlights: [
      '+ 400 canais, +12.000 filmes, +6.000 séries filmes',
      'Metadados enriquecidos: sinopse, elenco, imagens, trailers e classificação indicativa',
      'Atualização automática de programação (EPG)',
      'API completa para integração com plataformas de TV e VOD',
      'Futebol em tempo real com eventos, estatísticas e escalações',
      'Recurso “Onde Assistir” com cruzamento automático de canais',
      'Possibilidade de enriquecer EPGs existentes sem necessidade de migração',
      'Busca automatizada de metadados para VOD'
    ]
  }
};

export const FAST_CHANNELS = [
  { 
    id: 'freetv_crime', 
    name: 'TV Crime Grátis', 
    logo: 'https://i8lbVpS.png', 
    description: 'Séries e documentários de investigação criminal e suspense.' 
  },
  { 
    id: 'freetv_drama', 
    name: 'TV Drama', 
    logo: 'https://i8lbVpS.png', 
    description: 'As melhores histórias e tramas dramáticas em um canal linear gratuito.' 
  }
];