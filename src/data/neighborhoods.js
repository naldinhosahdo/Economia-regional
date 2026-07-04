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
    color: '#c98500',
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
    color: '#c98500',
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
    color: '#3987e5',
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
    color: '#9085e9',
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
    color: '#199e70',
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
    color: '#199e70',
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
    color: '#c98500',
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
    color: '#e66767',
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
    color: '#898781',
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
    color: '#c98500',
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
    color: '#e66767',
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
    color: '#9085e9',
  },
];

export const tierColors = {
  premium: '#c98500',
  comercial: '#3987e5',
  universitario: '#9085e9',
  residencial: '#199e70',
  popular: '#e66767',
  industrial: '#898781',
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
  crescendo: '#199e70',
  estável: '#898781',
  retraindo: '#e66767',
};

// ---------------------------------------------------------------------------
// Bairros adicionais — dados básicos próprios + perfis de consumo por tipo
// ---------------------------------------------------------------------------

const tierProfiles = {
  premium: {
    economyProfile: 'Bairro de renda alta com forte setor de serviços, gastronomia e comércio de padrão elevado',
    topPurchases: [
      { name: 'Alimentação fora de casa', freq: 'diário' },
      { name: 'Academia e bem-estar', freq: 'semanal' },
      { name: 'Serviços de beleza e estética', freq: 'semanal' },
      { name: 'Roupas e acessórios de marca', freq: 'mensal' },
      { name: 'Lazer e experiências', freq: 'mensal' },
    ],
    topProducts: ['Comida saudável e orgânicos', 'Vinhos e importados', 'Cosméticos premium', 'Roupas fitness', 'Eletrônicos'],
    topServices: ['Restaurantes e cafés', 'Academias e studios', 'Salão de beleza e estética', 'Clínicas médicas', 'Pet care'],
    sideHustles: ['Aulas particulares de idiomas', 'Personal trainer autônomo', 'Aluguel por temporada (Airbnb)', 'Fotografia de eventos', 'Consultorias autônomas'],
    mainProblems: ['Custo de vida alto', 'Trânsito nos horários de pico', 'Falta de estacionamento', 'Especulação imobiliária', 'Pouco comércio popular'],
  },
  comercial: {
    economyProfile: 'Polo de comércio com grande fluxo diário de pessoas e forte presença de economia informal',
    topPurchases: [
      { name: 'Roupas e calçados populares', freq: 'quinzenal' },
      { name: 'Alimentação rápida', freq: 'diário' },
      { name: 'Eletrônicos e acessórios', freq: 'mensal' },
      { name: 'Produtos para revenda', freq: 'semanal' },
      { name: 'Materiais diversos', freq: 'mensal' },
    ],
    topProducts: ['Roupas no atacado', 'Celulares e capinhas', 'Comida de rua', 'Utilidades domésticas', 'Papelaria'],
    topServices: ['Conserto de celular', 'Fotocópia e impressão', 'Costura e ajustes', 'Lotéricas e bancos', 'Transporte de mercadoria'],
    sideHustles: ['Vendedor ambulante', 'Venda de quentinha', 'Frete com veículo próprio', 'Revenda de mercadorias', 'Serviços de entrega'],
    mainProblems: ['Insegurança e furtos', 'Calçadas ocupadas', 'Trânsito caótico', 'Falta de limpeza urbana', 'Estacionamento escasso'],
  },
  universitario: {
    economyProfile: 'Bairro movido pela economia estudantil, com consumo intenso durante o período letivo',
    topPurchases: [
      { name: 'Lanches e refeições baratas', freq: 'diário' },
      { name: 'Impressões e materiais', freq: 'semanal' },
      { name: 'Transporte por aplicativo', freq: 'diário' },
      { name: 'Bebidas e bares', freq: 'semanal' },
      { name: 'Roupas econômicas', freq: 'mensal' },
    ],
    topProducts: ['Marmita e comida por quilo', 'Apostilas e fotocópias', 'Material escolar', 'Cerveja e petiscos', 'Roupas de brechó'],
    topServices: ['Lanchonetes e trailers', 'Reprografia', 'Aulas de reforço', 'Quartos e pensões', 'Bares'],
    sideHustles: ['Aulas particulares', 'Venda de resumos e apostilas', 'Garçom nos fins de semana', 'Freelance de design e TI', 'Digitação de trabalhos'],
    mainProblems: ['Insegurança noturna', 'Falta de moradia estudantil', 'Transporte lotado', 'Barulho de bares', 'Poucos espaços de estudo'],
  },
  residencial: {
    economyProfile: 'Bairro residencial com comércio de proximidade e serviços voltados às famílias locais',
    topPurchases: [
      { name: 'Alimentação no mercadinho', freq: 'diário' },
      { name: 'Produtos de limpeza e higiene', freq: 'semanal' },
      { name: 'Medicamentos', freq: 'semanal' },
      { name: 'Roupas e calçados', freq: 'mensal' },
      { name: 'Material escolar', freq: 'mensal' },
    ],
    topProducts: ['Alimentos básicos', 'Produtos de limpeza', 'Remédios genéricos', 'Pão e laticínios', 'Gás de cozinha'],
    topServices: ['Mercadinhos e padarias', 'Salão de beleza popular', 'Farmácias', 'Oficinas e borracharias', 'Escolas e reforço'],
    sideHustles: ['Venda de salgados e bolos', 'Revenda de cosméticos', 'Serviços de pedreiro e pintor', 'Costura em casa', 'Cuidado de crianças e idosos'],
    mainProblems: ['Transporte público precário', 'Falta de lazer', 'Ruas mal iluminadas', 'Posto de saúde distante', 'Desemprego'],
  },
  popular: {
    economyProfile: 'Bairro popular de alta densidade com forte economia informal e comércio de subsistência',
    topPurchases: [
      { name: 'Alimentação básica', freq: 'diário' },
      { name: 'Produtos de higiene', freq: 'semanal' },
      { name: 'Crédito de celular', freq: 'semanal' },
      { name: 'Roupas populares', freq: 'mensal' },
      { name: 'Botijão de gás', freq: 'mensal' },
    ],
    topProducts: ['Arroz, feijão e básicos', 'Produtos de limpeza', 'Chip e recarga', 'Roupas de sacola', 'Comida pronta barata'],
    topServices: ['Mercearia de esquina', 'Barbearia popular', 'Lotérica e correspondente', 'Conserto de bicicleta e moto', 'Igrejas e assistência'],
    sideHustles: ['Venda de doces e salgados', 'Diarista e faxineira', 'Manicure em casa', 'Coleta de recicláveis', 'Bicos de obra e pintura'],
    mainProblems: ['Desemprego alto', 'Falta de saneamento', 'Violência', 'Acesso difícil a crédito', 'Escolas sem estrutura'],
  },
  industrial: {
    economyProfile: 'Área industrial com população trabalhadora e serviços voltados ao setor produtivo',
    topPurchases: [
      { name: 'Marmita e refeição rápida', freq: 'diário' },
      { name: 'Equipamentos de trabalho', freq: 'mensal' },
      { name: 'Transporte', freq: 'diário' },
      { name: 'Roupas básicas', freq: 'mensal' },
      { name: 'Eletrodomésticos', freq: 'trimestral' },
    ],
    topProducts: ['Marmitas', 'EPIs e ferramentas', 'Uniformes', 'Autopeças', 'Eletrodomésticos populares'],
    topServices: ['Refeitórios', 'Transporte fretado', 'Manutenção industrial', 'Logística', 'RH e seleção'],
    sideHustles: ['Venda de marmita', 'Transporte de funcionários', 'Revenda de uniformes', 'Borracharia', 'Chaveiro'],
    mainProblems: ['Poluição', 'Trânsito de caminhões', 'Pouco lazer', 'Transporte caro', 'Barulho'],
  },
};

const extraBairros = [
  // — Litoral / renda alta —
  { id: 'mucuripe', name: 'Mucuripe', coords: [-3.7225, -38.4790], score: 84, tier: 'premium', population: 13000, avgIncome: 6800, avgRent: 2900, rentTrend: 6, economyTrend: 'crescendo', dominantActivity: 'Pesca, gastronomia e orla', employmentRate: 'alto', informalEconomy: 'média (~20%)', opportunity: 'Feira do peixe movimenta milhares aos fins de semana — falta café e conveniência no entorno' },
  { id: 'praia-de-iracema', name: 'Praia de Iracema', coords: [-3.7205, -38.5155], score: 80, tier: 'premium', population: 8000, avgIncome: 5600, avgRent: 2600, rentTrend: 7, economyTrend: 'crescendo', dominantActivity: 'Turismo, bares e cultura', employmentRate: 'alto', informalEconomy: 'média (~25%)', opportunity: 'Polo de vida noturna renascendo — hostels e experiências para turistas têm alta procura' },
  { id: 'dionisio-torres', name: 'Dionísio Torres', coords: [-3.7450, -38.5140], score: 86, tier: 'premium', population: 16000, avgIncome: 7900, avgRent: 3600, rentTrend: 6, economyTrend: 'crescendo', dominantActivity: 'Residencial de alto padrão', employmentRate: 'alto', informalEconomy: 'baixa (~10%)', opportunity: 'Moradores idosos de alta renda sem serviços de cuidado domiciliar suficientes' },
  { id: 'papicu', name: 'Papicu', coords: [-3.7400, -38.4660], score: 78, tier: 'comercial', population: 20000, avgIncome: 4800, avgRent: 2300, rentTrend: 5, economyTrend: 'crescendo', dominantActivity: 'Comércio e serviços', employmentRate: 'alto', informalEconomy: 'média (~22%)', opportunity: 'Terminal do Papicu gera fluxo enorme — quiosques de conveniência e food service em falta' },
  { id: 'guararapes', name: 'Guararapes', coords: [-3.7680, -38.4800], score: 87, tier: 'premium', population: 9000, avgIncome: 9800, avgRent: 3900, rentTrend: 9, economyTrend: 'crescendo', dominantActivity: 'Residencial de luxo', employmentRate: 'alto', informalEconomy: 'muito baixa (~8%)', opportunity: 'Condomínios de luxo demandam serviços premium de pet, jardinagem e manutenção' },
  { id: 'luciano-cavalcante', name: 'Eng. Luciano Cavalcante', coords: [-3.7750, -38.4880], score: 82, tier: 'premium', population: 15000, avgIncome: 6900, avgRent: 3100, rentTrend: 8, economyTrend: 'crescendo', dominantActivity: 'Corporativo e residencial', employmentRate: 'alto', informalEconomy: 'baixa (~12%)', opportunity: 'Novo eixo corporativo — restaurantes executivos para almoço têm fila diária' },
  { id: 'salinas', name: 'Salinas', coords: [-3.7600, -38.4780], score: 83, tier: 'premium', population: 7000, avgIncome: 8200, avgRent: 3400, rentTrend: 7, economyTrend: 'crescendo', dominantActivity: 'Residencial alto padrão', employmentRate: 'alto', informalEconomy: 'baixa (~10%)', opportunity: 'Bairro valorizado sem padaria artesanal nem hortifrúti premium' },
  { id: 'praia-do-futuro', name: 'Praia do Futuro', coords: [-3.7480, -38.4440], score: 70, tier: 'comercial', population: 10000, avgIncome: 2600, avgRent: 1150, rentTrend: 6, economyTrend: 'crescendo', dominantActivity: 'Barracas de praia e turismo', employmentRate: 'médio', informalEconomy: 'alta (~40%)', opportunity: 'Barracas famosas lotadas — transporte e estacionamento organizados são o gargalo' },

  // — Centro-sul / classe média —
  { id: 'fatima', name: 'Fátima', coords: [-3.7520, -38.5300], score: 76, tier: 'residencial', population: 22000, avgIncome: 4100, avgRent: 1900, rentTrend: 5, economyTrend: 'crescendo', dominantActivity: 'Residencial e serviços', employmentRate: 'alto', informalEconomy: 'baixa (~18%)', opportunity: 'Bairro central residencial — cafeterias e estúdios de pilates abrem e lotam' },
  { id: 'joaquim-tavora', name: 'Joaquim Távora', coords: [-3.7500, -38.5200], score: 74, tier: 'residencial', population: 25000, avgIncome: 3700, avgRent: 1700, rentTrend: 4, economyTrend: 'estável', dominantActivity: 'Residencial e comércio', employmentRate: 'médio', informalEconomy: 'média (~24%)', opportunity: 'Rua de gastronomia crescendo — delivery de comida saudável ainda raro' },
  { id: 'sao-joao-do-tauape', name: 'São João do Tauape', coords: [-3.7520, -38.5050], score: 71, tier: 'residencial', population: 24000, avgIncome: 2900, avgRent: 1300, rentTrend: 5, economyTrend: 'crescendo', dominantActivity: 'Comércio e serviços', employmentRate: 'médio', informalEconomy: 'média (~30%)', opportunity: 'Corredor da Av. Pontes Vieira em expansão — salas pequenas para clínicas em falta' },
  { id: 'cidade-dos-funcionarios', name: 'Cidade dos Funcionários', coords: [-3.7900, -38.4950], score: 73, tier: 'residencial', population: 20000, avgIncome: 3800, avgRent: 1600, rentTrend: 6, economyTrend: 'crescendo', dominantActivity: 'Residencial e serviços', employmentRate: 'alto', informalEconomy: 'baixa (~18%)', opportunity: 'Famílias jovens em expansão — escolas infantis com lista de espera' },
  { id: 'cambeba', name: 'Cambeba', coords: [-3.8050, -38.4850], score: 72, tier: 'residencial', population: 18000, avgIncome: 3600, avgRent: 1500, rentTrend: 7, economyTrend: 'crescendo', dominantActivity: 'Administrativo e residencial', employmentRate: 'alto', informalEconomy: 'baixa (~16%)', opportunity: 'Centro administrativo do estado — almoço executivo e cafés têm demanda reprimida' },
  { id: 'sapiranga', name: 'Sapiranga', coords: [-3.7900, -38.4620], score: 67, tier: 'residencial', population: 28000, avgIncome: 2700, avgRent: 1200, rentTrend: 7, economyTrend: 'crescendo', dominantActivity: 'Residencial em valorização', employmentRate: 'médio', informalEconomy: 'média (~30%)', opportunity: 'Rota para o Iguatemi e praias — clínicas e escolas particulares em expansão' },
  { id: 'parquelandia', name: 'Parquelândia', coords: [-3.7350, -38.5550], score: 69, tier: 'residencial', population: 22000, avgIncome: 2800, avgRent: 1250, rentTrend: 4, economyTrend: 'estável', dominantActivity: 'Residencial', employmentRate: 'médio', informalEconomy: 'média (~26%)', opportunity: 'Perto do North Shopping — estacionamentos e lava-jatos sempre cheios' },
  { id: 'maraponga', name: 'Maraponga', coords: [-3.7860, -38.5660], score: 66, tier: 'residencial', population: 12000, avgIncome: 2500, avgRent: 1100, rentTrend: 5, economyTrend: 'crescendo', dominantActivity: 'Residencial com lagoa', employmentRate: 'médio', informalEconomy: 'média (~28%)', opportunity: 'Lagoa da Maraponga atrai famílias aos fins de semana — food park teria público cativo' },

  // — Comércio popular —
  { id: 'montese', name: 'Montese', coords: [-3.7600, -38.5450], score: 68, tier: 'comercial', population: 26000, avgIncome: 2300, avgRent: 1000, rentTrend: 4, economyTrend: 'estável', dominantActivity: 'Comércio popular têxtil', employmentRate: 'médio', informalEconomy: 'alta (~42%)', opportunity: 'Polo de confecção e tecidos — serviços de e-commerce para lojistas praticamente inexistem' },
  { id: 'antonio-bezerra', name: 'Antônio Bezerra', coords: [-3.7350, -38.5880], score: 62, tier: 'comercial', population: 28000, avgIncome: 1900, avgRent: 850, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Comércio e terminal', employmentRate: 'médio', informalEconomy: 'alta (~45%)', opportunity: 'Terminal movimenta dezenas de milhares por dia — café da manhã e marmita têm demanda gigante' },

  // — Universitários —
  { id: 'pici', name: 'Pici', coords: [-3.7450, -38.5650], score: 58, tier: 'universitario', population: 42000, avgIncome: 1500, avgRent: 700, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Universidade e comércio local', employmentRate: 'médio', informalEconomy: 'alta (~40%)', opportunity: 'Campus da UFC com 20 mil alunos — xerox, lanches e quartos para alugar sempre lotados' },
  { id: 'itaperi', name: 'Itaperi', coords: [-3.7880, -38.5480], score: 57, tier: 'universitario', population: 30000, avgIncome: 1600, avgRent: 750, rentTrend: 4, economyTrend: 'estável', dominantActivity: 'Universidade e residencial', employmentRate: 'médio', informalEconomy: 'alta (~38%)', opportunity: 'Entorno da UECE sem lanchonetes suficientes no turno da noite' },

  // — Residencial médio/oeste —
  { id: 'rodolfo-teofilo', name: 'Rodolfo Teófilo', coords: [-3.7450, -38.5480], score: 63, tier: 'residencial', population: 20000, avgIncome: 2100, avgRent: 950, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial e saúde', employmentRate: 'médio', informalEconomy: 'média (~30%)', opportunity: 'Complexo hospitalar ao lado — hospedagem para acompanhantes de pacientes em falta' },
  { id: 'amadeu-furtado', name: 'Amadeu Furtado', coords: [-3.7400, -38.5450], score: 64, tier: 'residencial', population: 12000, avgIncome: 2300, avgRent: 1000, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial', employmentRate: 'médio', informalEconomy: 'média (~28%)', opportunity: 'Corredor universitário — quitandas e restaurantes por quilo prosperam' },
  { id: 'monte-castelo', name: 'Monte Castelo', coords: [-3.7250, -38.5480], score: 61, tier: 'residencial', population: 14000, avgIncome: 2000, avgRent: 900, rentTrend: 2, economyTrend: 'estável', dominantActivity: 'Comércio de bairro', employmentRate: 'médio', informalEconomy: 'alta (~35%)', opportunity: 'Tradição em móveis e reformas — marcenaria sob medida com pouca concorrência' },
  { id: 'jacarecanga', name: 'Jacarecanga', coords: [-3.7170, -38.5450], score: 56, tier: 'residencial', population: 13000, avgIncome: 1800, avgRent: 800, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial histórico', employmentRate: 'médio', informalEconomy: 'alta (~36%)', opportunity: 'Casarões históricos baratos — potencial para estúdios criativos e coworkings' },
  { id: 'vila-uniao', name: 'Vila União', coords: [-3.7620, -38.5350], score: 62, tier: 'residencial', population: 15000, avgIncome: 2200, avgRent: 950, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial', employmentRate: 'médio', informalEconomy: 'média (~30%)', opportunity: 'Próximo a grandes avenidas — autopeças e oficinas em crescimento' },
  { id: 'aerolandia', name: 'Aerolândia', coords: [-3.7750, -38.5200], score: 59, tier: 'residencial', population: 12000, avgIncome: 1900, avgRent: 850, rentTrend: 4, economyTrend: 'estável', dominantActivity: 'Residencial e logística', employmentRate: 'médio', informalEconomy: 'alta (~34%)', opportunity: 'Margem da BR-116 — pontos de apoio a caminhoneiros escassos' },
  { id: 'passare', name: 'Passaré', coords: [-3.7980, -38.5450], score: 55, tier: 'residencial', population: 40000, avgIncome: 1600, avgRent: 720, rentTrend: 5, economyTrend: 'crescendo', dominantActivity: 'Residencial popular', employmentRate: 'médio', informalEconomy: 'alta (~44%)', opportunity: 'Conjuntos habitacionais novos — pet shops e farmácias ainda não chegaram' },
  { id: 'jardim-das-oliveiras', name: 'Jardim das Oliveiras', coords: [-3.7800, -38.5050], score: 60, tier: 'residencial', population: 30000, avgIncome: 1900, avgRent: 850, rentTrend: 4, economyTrend: 'estável', dominantActivity: 'Residencial popular', employmentRate: 'médio', informalEconomy: 'alta (~40%)', opportunity: 'Densidade alta sem academia de baixo custo num raio de 1,5 km' },
  { id: 'cajazeiras', name: 'Cajazeiras', coords: [-3.8120, -38.5080], score: 58, tier: 'residencial', population: 25000, avgIncome: 1700, avgRent: 780, rentTrend: 5, economyTrend: 'crescendo', dominantActivity: 'Residencial popular', employmentRate: 'médio', informalEconomy: 'alta (~42%)', opportunity: 'Crescimento acelerado perto do Castelão — material de construção bombando' },
  { id: 'lagoa-redonda', name: 'Lagoa Redonda', coords: [-3.8220, -38.4650], score: 61, tier: 'residencial', population: 35000, avgIncome: 2000, avgRent: 900, rentTrend: 8, economyTrend: 'crescendo', dominantActivity: 'Residencial em expansão', employmentRate: 'médio', informalEconomy: 'alta (~38%)', opportunity: 'Loteamentos novos todo ano — mercadinhos e padarias não acompanham o ritmo' },
  { id: 'serrinha', name: 'Serrinha', coords: [-3.7800, -38.5500], score: 52, tier: 'residencial', population: 33000, avgIncome: 1400, avgRent: 650, rentTrend: 2, economyTrend: 'estável', dominantActivity: 'Residencial popular', employmentRate: 'baixo', informalEconomy: 'alta (~45%)', opportunity: 'Vizinho ao aeroporto e à UECE — hospedagem econômica tem procura constante' },
  { id: 'henrique-jorge', name: 'Henrique Jorge', coords: [-3.7550, -38.5800], score: 54, tier: 'residencial', population: 28000, avgIncome: 1450, avgRent: 620, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial', employmentRate: 'médio', informalEconomy: 'alta (~44%)', opportunity: 'Comércio da Av. João Pessoa — lojas de variedades prosperam' },
  { id: 'joquei-clube', name: 'Jóquei Clube', coords: [-3.7650, -38.5750], score: 57, tier: 'residencial', population: 18000, avgIncome: 1700, avgRent: 760, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial', employmentRate: 'médio', informalEconomy: 'alta (~40%)', opportunity: 'Antiga área do jóquei em reurbanização — novos negócios chegando antes da valorização' },
  { id: 'bela-vista', name: 'Bela Vista', coords: [-3.7480, -38.5600], score: 58, tier: 'residencial', population: 17000, avgIncome: 1750, avgRent: 780, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial', employmentRate: 'médio', informalEconomy: 'média (~32%)', opportunity: 'Entre a UFC e o North Shopping — kitnets para estudantes com procura alta' },

  // — Leste popular / porto —
  { id: 'vicente-pinzon', name: 'Vicente Pinzón', coords: [-3.7220, -38.4650], score: 53, tier: 'popular', population: 45000, avgIncome: 1400, avgRent: 640, rentTrend: 4, economyTrend: 'estável', dominantActivity: 'Residencial popular', employmentRate: 'baixo', informalEconomy: 'muito alta (~50%)', opportunity: 'Entre bairros ricos e o porto — serviços domésticos e de manutenção com demanda garantida' },
  { id: 'cais-do-porto', name: 'Cais do Porto', coords: [-3.7100, -38.4680], score: 50, tier: 'popular', population: 22000, avgIncome: 1300, avgRent: 580, rentTrend: 2, economyTrend: 'estável', dominantActivity: 'Portuário', employmentRate: 'médio', informalEconomy: 'alta (~46%)', opportunity: 'Movimento do porto — refeições rápidas para trabalhadores em turnos' },
  { id: 'sabiaguaba', name: 'Sabiaguaba', coords: [-3.7750, -38.4380], score: 54, tier: 'popular', population: 5000, avgIncome: 1500, avgRent: 680, rentTrend: 9, economyTrend: 'crescendo', dominantActivity: 'Ecoturismo e praia', employmentRate: 'baixo', informalEconomy: 'muito alta (~55%)', opportunity: 'Dunas e praia preservadas — passeios ecológicos e barracas sustentáveis quase sem concorrência' },

  // — Grande oeste / sul popular —
  { id: 'pirambu', name: 'Pirambu', coords: [-3.7000, -38.5550], score: 46, tier: 'popular', population: 65000, avgIncome: 1000, avgRent: 420, rentTrend: 1, economyTrend: 'estável', dominantActivity: 'Comunidade litorânea', employmentRate: 'baixo', informalEconomy: 'muito alta (~65%)', opportunity: 'Grande Pirambu tem economia própria — microcrédito e capacitação profissional quase ausentes' },
  { id: 'bom-jardim', name: 'Bom Jardim', coords: [-3.7880, -38.5980], score: 44, tier: 'popular', population: 110000, avgIncome: 1050, avgRent: 480, rentTrend: 2, economyTrend: 'estável', dominantActivity: 'Comércio popular', employmentRate: 'baixo', informalEconomy: 'muito alta (~62%)', opportunity: 'Um dos maiores bairros da cidade — cursos profissionalizantes têm fila de espera' },
  { id: 'granja-portugal', name: 'Granja Portugal', coords: [-3.7800, -38.5900], score: 45, tier: 'popular', population: 55000, avgIncome: 1100, avgRent: 500, rentTrend: 2, economyTrend: 'estável', dominantActivity: 'Residencial popular', employmentRate: 'baixo', informalEconomy: 'muito alta (~58%)', opportunity: 'Comércio de esquina forte — atacarejo de vizinhança seria pioneiro' },
  { id: 'conjunto-ceara', name: 'Conjunto Ceará', coords: [-3.7750, -38.6070], score: 56, tier: 'popular', population: 85000, avgIncome: 1500, avgRent: 680, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Conjunto habitacional', employmentRate: 'médio', informalEconomy: 'alta (~45%)', opportunity: 'População enorme e fiel ao comércio local — hamburgueria artesanal viraria febre' },
  { id: 'jangurussu', name: 'Jangurussu', coords: [-3.8350, -38.5200], score: 47, tier: 'popular', population: 75000, avgIncome: 1150, avgRent: 520, rentTrend: 4, economyTrend: 'crescendo', dominantActivity: 'Residencial popular', employmentRate: 'baixo', informalEconomy: 'muito alta (~56%)', opportunity: 'Crescimento habitacional forte — creches particulares acessíveis em falta' },
  { id: 'barroso', name: 'Barroso', coords: [-3.8220, -38.5180], score: 49, tier: 'popular', population: 45000, avgIncome: 1250, avgRent: 550, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial popular', employmentRate: 'baixo', informalEconomy: 'alta (~50%)', opportunity: 'Sem opções de lazer pago — quadras society e buffets infantis lotariam' },
  { id: 'vila-velha', name: 'Vila Velha', coords: [-3.7000, -38.6000], score: 48, tier: 'popular', population: 60000, avgIncome: 1200, avgRent: 530, rentTrend: 2, economyTrend: 'estável', dominantActivity: 'Residencial popular', employmentRate: 'baixo', informalEconomy: 'muito alta (~52%)', opportunity: 'Praia da Barra próxima — pesca e turismo popular sem infraestrutura de apoio' },
  { id: 'siqueira', name: 'Siqueira', coords: [-3.7950, -38.6150], score: 43, tier: 'popular', population: 35000, avgIncome: 1000, avgRent: 450, rentTrend: 2, economyTrend: 'estável', dominantActivity: 'Periferia em consolidação', employmentRate: 'baixo', informalEconomy: 'muito alta (~60%)', opportunity: 'Terminal novo do Siqueira — comércio de passagem ainda engatinhando' },
  { id: 'canindezinho', name: 'Canindezinho', coords: [-3.7920, -38.5820], score: 44, tier: 'popular', population: 42000, avgIncome: 1080, avgRent: 470, rentTrend: 3, economyTrend: 'estável', dominantActivity: 'Residencial popular', employmentRate: 'baixo', informalEconomy: 'muito alta (~58%)', opportunity: 'Feira local forte — logística de entrega para feirantes é oportunidade aberta' },
];

for (const b of extraBairros) {
  const profile = tierProfiles[b.tier];
  neighborhoods.push({ ...profile, ...b, color: tierColors[b.tier] });
}
