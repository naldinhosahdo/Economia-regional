export const neighborhoods = [
  {
    id: 'meireles',
    name: 'Meireles',
    coords: [-3.7289, -38.5023],
    score: 92,
    tier: 'premium',
    population: 42000,
    avgIncome: 8500,
    avgRent: 4200,
    rentTrend: +8,
    economyProfile: 'Bairro de alta renda litorâneo com forte setor de serviços premium e turismo',
    economyTrend: 'crescendo',
    dominantActivity: 'Turismo e serviços premium',
    employmentRate: 'alto',
    informalEconomy: 'baixa (~12%)',

    topPurchases: [
      { name: 'Alimentação fora de casa', freq: 'diário' },
      { name: 'Academia e bem-estar', freq: 'semanal' },
      { name: 'Cosméticos e beleza', freq: 'semanal' },
      { name: 'Roupas de marca', freq: 'mensal' },
      { name: 'Viagens e lazer', freq: 'mensal' },
    ],

    topProducts: [
      'Suplementos alimentares',
      'Vinhos e bebidas importadas',
      'Cosméticos premium',
      'Roupas fitness',
      'Equipamentos de praia',
    ],

    topServices: [
      'Restaurantes e bares',
      'Academias e crossfit',
      'Salão de beleza e estética',
      'Clínicas odontológicas',
      'Imobiliárias de luxo',
    ],

    sideHustles: [
      'Aulas de inglês/espanhol particular',
      'Fotografia de eventos e casamentos',
      'Personal trainer autônomo',
      'Aluguel por temporada (Airbnb)',
      'Venda de bijuteria/artesanato na orla',
    ],

    mainProblems: [
      'Custo de vida muito alto exclui moradores de menor renda',
      'Trânsito intenso nos horários de pico',
      'Falta de vagas de estacionamento',
      'Gentrificação afasta comércio popular',
      'Pouca diversidade de serviços acessíveis',
    ],

    opportunity: 'Turistas e moradores demandam serviços de concierge e experiências locais autênticas que ainda não existem no bairro',
    color: '#f59e0b',
  },
  {
    id: 'aldeota',
    name: 'Aldeota',
    coords: [-3.7381, -38.5089],
    score: 88,
    tier: 'premium',
    population: 58000,
    avgIncome: 7200,
    avgRent: 3800,
    rentTrend: +5,
    economyProfile: 'Principal polo de serviços e comércio de médio-alto padrão de Fortaleza',
    economyTrend: 'crescendo',
    dominantActivity: 'Serviços profissionais e comércio',
    employmentRate: 'alto',
    informalEconomy: 'baixa (~15%)',

    topPurchases: [
      { name: 'Roupas e calçados', freq: 'quinzenal' },
      { name: 'Alimentação (restaurantes)', freq: 'diário' },
      { name: 'Eletrônicos e tecnologia', freq: 'mensal' },
      { name: 'Cursos e capacitação', freq: 'mensal' },
      { name: 'Saúde (consultas)', freq: 'mensal' },
    ],

    topProducts: [
      'Roupas de marca nacional',
      'Smartphones e acessórios',
      'Medicamentos e vitaminas',
      'Materiais de escritório',
      'Perfumes e cosméticos',
    ],

    topServices: [
      'Escritórios de advocacia e contabilidade',
      'Clínicas médicas e odontológicas',
      'Salões de beleza e barbearias',
      'Academias',
      'Escolas de idiomas',
    ],

    sideHustles: [
      'Freelance de design e marketing digital',
      'Consultoria empresarial autônoma',
      'Revenda de roupas (brechó online)',
      'Aulas de reforço escolar',
      'Assessoria em redes sociais',
    ],

    mainProblems: [
      'Congestionamento crônico em avenidas principais',
      'Falta de estacionamento acessível',
      'Custo de aluguel comercial muito alto',
      'Calçadas em péssimas condições',
      'Pouco espaço verde e lazer',
    ],

    opportunity: 'Alta concentração de profissionais liberais sem espaço de coworking acessível — coworking com sala de reunião por hora tem fila de espera',
    color: '#f59e0b',
  },
  {
    id: 'centro',
    name: 'Centro',
    coords: [-3.7263, -38.5271],
    score: 75,
    tier: 'comercial',
    population: 95000,
    avgIncome: 2800,
    avgRent: 2100,
    rentTrend: -2,
    economyProfile: 'Maior polo comercial popular do estado, enorme fluxo de pessoas e alto índice de informalidade',
    economyTrend: 'estável',
    dominantActivity: 'Comércio popular e atacado',
    employmentRate: 'médio',
    informalEconomy: 'muito alta (~52%)',

    topPurchases: [
      { name: 'Roupas e calçados populares', freq: 'quinzenal' },
      { name: 'Eletrônicos usados e novos', freq: 'mensal' },
      { name: 'Alimentação rápida', freq: 'diário' },
      { name: 'Materiais de construção', freq: 'mensal' },
      { name: 'Artigos religiosos e presentes', freq: 'ocasional' },
    ],

    topProducts: [
      'Roupas de brechó e atacado',
      'Celulares e capinhas',
      'Ferragens e parafusos',
      'Comida de rua (tapioca, acarajé)',
      'Artigos de papelaria',
    ],

    topServices: [
      'Conserto de celular e eletrônicos',
      'Fotocópia e impressão',
      'Costura e ajuste de roupas',
      'Serviços bancários e loterias',
      'Transporte informal (mototaxi)',
    ],

    sideHustles: [
      'Vendedor ambulante / camelô',
      'Venda de quentinha caseira',
      'Frete com carro próprio',
      'Flanelinha e guardador de carros',
      'Cambista e cambio informal',
    ],

    mainProblems: [
      'Insegurança pública e assaltos frequentes',
      'Sujeira e falta de coleta de lixo adequada',
      'Calçadas ocupadas irregularmente',
      'Trânsito caótico sem solução',
      'Degradação dos prédios históricos',
    ],

    opportunity: 'Conserto de celular com espera de 3h+ em todos os pontos — um serviço rápido e de qualidade domina o mercado',
    color: '#3b82f6',
  },
  {
    id: 'benfica',
    name: 'Benfica',
    coords: [-3.7456, -38.5378],
    score: 70,
    tier: 'universitario',
    population: 35000,
    avgIncome: 1900,
    avgRent: 1400,
    rentTrend: +3,
    economyProfile: 'Polo universitário com economia movida por estudantes e ciclo semestral intenso',
    economyTrend: 'estável',
    dominantActivity: 'Serviços estudantis e alimentação',
    employmentRate: 'médio',
    informalEconomy: 'alta (~35%)',

    topPurchases: [
      { name: 'Alimentação (lanches e refeições)', freq: 'diário' },
      { name: 'Xerox e impressão', freq: 'semanal' },
      { name: 'Livros e material escolar', freq: 'mensal' },
      { name: 'Roupas baratas', freq: 'mensal' },
      { name: 'Bebidas (bares)', freq: 'semanal' },
    ],

    topProducts: [
      'Apostilas e fotocópias',
      'Marmita e refeição por quilo',
      'Caneta, caderno, papel',
      'Cerveja e petiscos',
      'Roupas de brechó',
    ],

    topServices: [
      'Reprografia e encadernação',
      'Aulas de reforço e monitoria',
      'Bares e botequins',
      'Pensão e quarto para estudantes',
      'Lanchonetes e trailers',
    ],

    sideHustles: [
      'Aulas particulares e tutoria',
      'Venda de apostilas e resumos',
      'Garçom/bartender nos fins de semana',
      'Freelance de design e TI',
      'Digitação e formatação de trabalhos',
    ],

    mainProblems: [
      'Insegurança noturna com assaltos a estudantes',
      'Falta de moradia estudantil acessível',
      'Bares geram barulho excessivo à noite',
      'Trânsito caótico no horário de aula',
      'Poucos espaços de estudo fora da universidade',
    ],

    opportunity: 'Lavanderia self-service tem ROI de 14 meses — bairro universitário com 35k moradores e nenhuma no raio de 2km',
    color: '#8b5cf6',
  },
  {
    id: 'parangaba',
    name: 'Parangaba',
    coords: [-3.7711, -38.5623],
    score: 65,
    tier: 'residencial',
    population: 62000,
    avgIncome: 2200,
    avgRent: 950,
    rentTrend: +6,
    economyProfile: 'Bairro residencial de classe média-baixa com comércio de proximidade ativo e forte economia informal',
    economyTrend: 'crescendo',
    dominantActivity: 'Comércio local e serviços domésticos',
    employmentRate: 'médio',
    informalEconomy: 'alta (~40%)',

    topPurchases: [
      { name: 'Alimentação no mercadinho', freq: 'diário' },
      { name: 'Produtos de limpeza e higiene', freq: 'semanal' },
      { name: 'Roupas e calçados básicos', freq: 'mensal' },
      { name: 'Medicamentos', freq: 'semanal' },
      { name: 'Material escolar dos filhos', freq: 'mensal' },
    ],

    topProducts: [
      'Alimentos básicos (arroz, feijão, óleo)',
      'Produtos de limpeza (Bombril, Omo)',
      'Roupas de segunda mão',
      'Remédio genérico',
      'Gás de cozinha',
    ],

    topServices: [
      'Salão de beleza popular',
      'Mecânica e borracharia',
      'Padaria e mercearia',
      'Farmácia popular',
      'Escola pública e reforço',
    ],

    sideHustles: [
      'Venda de salgado e bolo caseiro',
      'Revenda de cosméticos (Avon, Natura, Boticário)',
      'Pedreiro, pintor, eletricista por diária',
      'Costureira em casa',
      'Cuidadora de idosos e crianças',
    ],

    mainProblems: [
      'Transporte público precário e superlotado',
      'Falta de opções de lazer e cultura',
      'Desemprego e subemprego frequente',
      'Ruas sem iluminação adequada',
      'Falta de posto de saúde próximo',
    ],

    opportunity: 'Academia low cost (R$50/mês) teria 800+ alunos imediatos — população quer se exercitar mas não tem onde',
    color: '#10b981',
  },
  {
    id: 'messejana',
    name: 'Messejana',
    coords: [-3.8289, -38.4989],
    score: 60,
    tier: 'residencial',
    population: 78000,
    avgIncome: 1800,
    avgRent: 800,
    rentTrend: +9,
    economyProfile: 'Bairro em rápida expansão residencial com forte setor de construção e comércio emergente',
    economyTrend: 'crescendo',
    dominantActivity: 'Construção civil e comércio popular',
    employmentRate: 'médio',
    informalEconomy: 'muito alta (~48%)',

    topPurchases: [
      { name: 'Material de construção', freq: 'semanal' },
      { name: 'Alimentação (feira livre)', freq: 'semanal' },
      { name: 'Roupas e calçados populares', freq: 'mensal' },
      { name: 'Eletrodomésticos usados', freq: 'ocasional' },
      { name: 'Auto peças', freq: 'mensal' },
    ],

    topProducts: [
      'Cimento, areia e tijolo',
      'Ferro e materiais hidráulicos',
      'Produtos da feira (hortifruti)',
      'Auto peças e acessórios',
      'Roupas de brechó',
    ],

    topServices: [
      'Mão de obra de construção',
      'Mecânica automotiva',
      'Feirantes e hortifruti',
      'Mercearia e açougue',
      'Escola e creche',
    ],

    sideHustles: [
      'Serviço de pedreiro e construção',
      'Venda na feira livre aos fins de semana',
      'Mototaxi informal',
      'Cuidador de obra',
      'Catador de material reciclável',
    ],

    mainProblems: [
      'Falta de saneamento básico em áreas novas',
      'Ruas sem asfalto nas periferias do bairro',
      'Ausência de escola de ensino médio próxima',
      'Posto de saúde sobrecarregado',
      'Enchente nas épocas de chuva',
    ],

    opportunity: 'Aluguel subindo 9% ao ano — abrir clínica popular com consulta a R$30 atenderia demanda reprimida enorme',
    color: '#10b981',
  },
  {
    id: 'cocó',
    name: 'Cocó',
    coords: [-3.7489, -38.4789],
    score: 85,
    tier: 'premium',
    population: 38000,
    avgIncome: 9200,
    avgRent: 3500,
    rentTrend: +11,
    economyProfile: 'Bairro residencial de alta renda próximo ao parque, com perfil de consumo voltado a bem-estar e lifestyle',
    economyTrend: 'crescendo',
    dominantActivity: 'Bem-estar, saúde e gastronomia',
    employmentRate: 'alto',
    informalEconomy: 'muito baixa (~8%)',

    topPurchases: [
      { name: 'Alimentação saudável e orgânica', freq: 'semanal' },
      { name: 'Academia e atividades físicas', freq: 'diário' },
      { name: 'Restaurantes e experiências', freq: 'semanal' },
      { name: 'Cursos e desenvolvimento pessoal', freq: 'mensal' },
      { name: 'Viagens nacionais e internacionais', freq: 'trimestral' },
    ],

    topProducts: [
      'Alimentos orgânicos e naturais',
      'Suplementos e proteínas',
      'Roupas esportivas premium',
      'Vinhos e produtos importados',
      'Livros e cursos online',
    ],

    topServices: [
      'Personal trainer e crossfit',
      'Nutricionista e psicólogo',
      'Restaurantes e hamburguerias artesanais',
      'Estética avançada e clínicas',
      'Pet care premium',
    ],

    sideHustles: [
      'Coaching de carreira e vida',
      'Fotografia lifestyle e redes sociais',
      'Aluguel de imóvel por temporada',
      'Venda de artesanato e produtos naturais',
      'Consultoria de nutrição e saúde',
    ],

    mainProblems: [
      'Trânsito intenso no entorno do parque',
      'Custo de vida inacessível para trabalhadores do bairro',
      'Falta de comércio popular para funcionários',
      'Poucas opções de transporte público',
      'Alta especulação imobiliária',
    ],

    opportunity: 'Bairro com maior crescimento imobiliário de Fortaleza — padaria artesanal com café teria ticket médio de R$35 e fila no fim de semana',
    color: '#f59e0b',
  },
  {
    id: 'barra-do-ceara',
    name: 'Barra do Ceará',
    coords: [-3.6889, -38.5889],
    score: 48,
    tier: 'popular',
    population: 89000,
    avgIncome: 1100,
    avgRent: 450,
    rentTrend: +2,
    economyProfile: 'Comunidade pesqueira e popular com alta informalidade e serviços básicos insuficientes',
    economyTrend: 'estável',
    dominantActivity: 'Pesca artesanal e comércio local',
    employmentRate: 'baixo',
    informalEconomy: 'muito alta (~68%)',

    topPurchases: [
      { name: 'Alimentação básica', freq: 'diário' },
      { name: 'Pescado e frutos do mar', freq: 'diário' },
      { name: 'Produtos de limpeza básicos', freq: 'semanal' },
      { name: 'Roupas de segunda mão', freq: 'mensal' },
      { name: 'Material escolar', freq: 'semestral' },
    ],

    topProducts: [
      'Peixe e frutos do mar frescos',
      'Arroz, feijão e óleo de cozinha',
      'Álcool e cigarro',
      'Roupas de brechó',
      'Gás de cozinha',
    ],

    topServices: [
      'Peixaria e barraca de praia',
      'Barbearia popular',
      'Borracharia e mecânica simples',
      'Mercearia de esquina',
      'Igreja e serviços religiosos',
    ],

    sideHustles: [
      'Pesca e venda de peixe na beira da praia',
      'Barraca de coco e camarão',
      'Guia turístico informal da praia',
      'Artesanato de renda e bordado',
      'Ferro velho e reciclagem',
    ],

    mainProblems: [
      'Falta de saneamento básico e esgoto',
      'Acesso precário à internet e tecnologia',
      'Escolas superlotadas e distantes',
      'Tráfico de drogas e violência',
      'Erosão costeira ameaça casas',
    ],

    opportunity: 'Mercado de internet fibra praticamente inexplorado — 60k moradores pagando caro por 3G ruim',
    color: '#ef4444',
  },
  {
    id: 'maracanau',
    name: 'Maracanaú',
    coords: [-3.8756, -38.6256],
    score: 55,
    tier: 'industrial',
    population: 230000,
    avgIncome: 2400,
    avgRent: 680,
    rentTrend: +4,
    economyProfile: 'Maior polo industrial do Ceará com população trabalhadora e déficit de serviços de suporte ao setor produtivo',
    economyTrend: 'estável',
    dominantActivity: 'Indústria e comércio atacadista',
    employmentRate: 'alto',
    informalEconomy: 'média (~28%)',

    topPurchases: [
      { name: 'Alimentação industrial (marmita)', freq: 'diário' },
      { name: 'Roupas e calçados básicos', freq: 'mensal' },
      { name: 'EPI e equipamentos de trabalho', freq: 'mensal' },
      { name: 'Eletrônicos e eletrodomésticos', freq: 'trimestral' },
      { name: 'Materiais de construção', freq: 'semestral' },
    ],

    topProducts: [
      'Marmita e quentinha para fábrica',
      'EPI (capacete, luva, bota)',
      'Ferramentas e equipamentos',
      'Roupas de trabalho',
      'Eletrodomésticos populares',
    ],

    topServices: [
      'Refeitório e alimentação industrial',
      'Transporte de funcionários',
      'Serviços de RH e seleção',
      'Manutenção industrial',
      'Logística e frete',
    ],

    sideHustles: [
      'Venda de marmita para trabalhadores',
      'Transporte fretado de funcionários',
      'Revenda de uniformes e EPIs',
      'Serviço de chaveiro e segurança',
      'Borracharia e manutenção veicular',
    ],

    mainProblems: [
      'Poluição industrial e qualidade do ar',
      'Trânsito pesado de caminhões',
      'Poucos serviços de saúde mental para trabalhadores',
      'Custo de transporte alto para quem mora longe',
      'Falta de lazer e cultura no polo',
    ],

    opportunity: 'Polo industrial sem hotel executivo — executivos de SP/RJ fazem viagens frequentes e dormem a 40km de distância',
    color: '#6b7280',
  },
  {
    id: 'varjota',
    name: 'Varjota',
    coords: [-3.7367, -38.4967],
    score: 90,
    tier: 'premium',
    population: 22000,
    avgIncome: 7800,
    avgRent: 3200,
    rentTrend: +7,
    economyProfile: 'Principal polo gastronômico e de entretenimento noturno de Fortaleza, com alta rotatividade e consumo elevado',
    economyTrend: 'crescendo',
    dominantActivity: 'Gastronomia e entretenimento',
    employmentRate: 'alto',
    informalEconomy: 'média (~22%)',

    topPurchases: [
      { name: 'Jantar e happy hour', freq: 'semanal' },
      { name: 'Bebidas e drinks', freq: 'semanal' },
      { name: 'Experiências gastronômicas', freq: 'quinzenal' },
      { name: 'Roupas para sair', freq: 'mensal' },
      { name: 'Táxi e apps de transporte', freq: 'semanal' },
    ],

    topProducts: [
      'Cervejas artesanais e importadas',
      'Pratos da gastronomia cearense',
      'Drinks e coquetéis',
      'Petiscos e finger food',
      'Sorvete e sobremesas artesanais',
    ],

    topServices: [
      'Restaurantes de culinária variada',
      'Bares e rooftops',
      'Salão de beleza e barbearia',
      'Estacionamento',
      'Segurança particular',
    ],

    sideHustles: [
      'Barman e garçom freelance nos fins de semana',
      'Fotógrafo de eventos e restaurantes',
      'Chef pessoal e catering',
      'Influencer de gastronomia local',
      'Valet e estacionamento informal',
    ],

    mainProblems: [
      'Barulho noturno afeta moradores',
      'Lixo nas ruas após a madrugada',
      'Falta de estacionamento público',
      'Custo altíssimo do aluguel comercial',
      'Sazonalidade forte em baixa temporada',
    ],

    opportunity: 'Bairro sem café diurno de qualidade — mesmo fluxo do jantar quer brunch e café da tarde aos fins de semana',
    color: '#f59e0b',
  },
  {
    id: 'mondubim',
    name: 'Mondubim',
    coords: [-3.8022, -38.5889],
    score: 45,
    tier: 'popular',
    population: 95000,
    avgIncome: 1200,
    avgRent: 520,
    rentTrend: +1,
    economyProfile: 'Grande bairro popular com forte comércio de subsistência e alto índice de trabalho informal',
    economyTrend: 'estável',
    dominantActivity: 'Comércio popular e trabalho informal',
    employmentRate: 'baixo',
    informalEconomy: 'muito alta (~60%)',

    topPurchases: [
      { name: 'Alimentação básica (mercadinho)', freq: 'diário' },
      { name: 'Produtos de higiene e limpeza', freq: 'semanal' },
      { name: 'Roupas populares', freq: 'mensal' },
      { name: 'Remédio e farmácia', freq: 'semanal' },
      { name: 'Crédito telefônico', freq: 'semanal' },
    ],

    topProducts: [
      'Alimentos básicos e congelados',
      'Produtos de limpeza',
      'Crédito e chip de celular',
      'Roupas de sacola e brechó',
      'Cosméticos populares',
    ],

    topServices: [
      'Mercadinho e armazém',
      'Barbearia e salão popular',
      'Farmácia popular',
      'Lotérica e correspondente bancário',
      'Escola de reforço',
    ],

    sideHustles: [
      'Venda de salgado, bolo e doce caseiro',
      'Revenda de roupas e cosméticos',
      'Diarista e faxineira',
      'Serviço de manicure em casa',
      'Vendedor de sorvete e picolé na rua',
    ],

    mainProblems: [
      'Alto índice de desemprego',
      'Acesso difícil a crédito formal',
      'Violência e sensação de insegurança',
      'Falta de equipamentos culturais e de lazer',
      'Escolas sem estrutura adequada',
    ],

    opportunity: 'Alta densidade populacional sem correspondente bancário suficiente — fintech de microcrédito e conta digital tem demanda enorme',
    color: '#ef4444',
  },
  {
    id: 'edson-queiroz',
    name: 'Edson Queiroz',
    coords: [-3.7878, -38.4678],
    score: 72,
    tier: 'universitario',
    population: 45000,
    avgIncome: 3200,
    avgRent: 1200,
    rentTrend: +8,
    economyProfile: 'Polo universitário em expansão com perfil jovem, empreendedor e voltado à tecnologia',
    economyTrend: 'crescendo',
    dominantActivity: 'Educação superior e serviços para jovens',
    employmentRate: 'médio',
    informalEconomy: 'média (~30%)',

    topPurchases: [
      { name: 'Alimentação universitária', freq: 'diário' },
      { name: 'Tecnologia (softwares, cursos online)', freq: 'semanal' },
      { name: 'Transporte (app)', freq: 'diário' },
      { name: 'Livros técnicos e materiais', freq: 'mensal' },
      { name: 'Roupas casuais e streetwear', freq: 'mensal' },
    ],

    topProducts: [
      'Assinaturas digitais (Netflix, Spotify)',
      'Material didático técnico',
      'Roupas streetwear e casual',
      'Marmita e comida rápida',
      'Acessórios de informática',
    ],

    topServices: [
      'Restaurantes universitários',
      'Impressão e encadernação',
      'Transporte por aplicativo',
      'Coworking e sala de estudo',
      'Cursos de programação e design',
    ],

    sideHustles: [
      'Desenvolvedor freelance e designer',
      'Criador de conteúdo digital',
      'Tutor de programação e matemática',
      'Produtor de vídeo e social media',
      'Revenda de produtos digitais',
    ],

    mainProblems: [
      'Falta de moradia acessível para estudantes de fora',
      'Transporte público insuficiente à noite',
      'Pouca infraestrutura de lazer',
      'Alta rotatividade de moradores atrapalha comunidade',
      'Poucas opções de saúde próximas',
    ],

    opportunity: 'Cluster de 5 faculdades sem incubadora de startups — centenas de projetos embrionários sem nenhum suporte estruturado',
    color: '#8b5cf6',
  },
];

export const tierColors = {
  premium: '#f59e0b',
  comercial: '#3b82f6',
  universitario: '#8b5cf6',
  residencial: '#10b981',
  popular: '#ef4444',
  industrial: '#6b7280',
};

export const tierLabels = {
  premium: 'Premium',
  comercial: 'Comercial',
  universitario: 'Universitário',
  residencial: 'Residencial',
  popular: 'Popular',
  industrial: 'Industrial',
};

export const trendIcon = {
  crescendo: '▲',
  estável: '→',
  retraindo: '▼',
};

export const trendColor = {
  crescendo: '#10b981',
  estável: '#94a3b8',
  retraindo: '#ef4444',
};
