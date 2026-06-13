// ─── DADOS DO PORTFÓLIO ─────────────────────────────────────

// 
import foto from './assets/foto.jpg'

export const PROFILE = {
  name:      'Filipe Cardoso',
  role:      'Estudante de ADS · Backend Python · APIs',
  location:  'Vitória da Conquista, BA — remoto',
  email:     'Ofilipe259@gmail.com',
  whatsapp:  'https://wa.me/5577998306756',
  linkedin:  'https://www.linkedin.com/in/filipe-cardoso-919532205',
  github:    'https://github.com/Filipcardos',
  photo:     foto,
  available: true,
  bio: [
    'Estudante de Análise e Desenvolvimento de Sistemas com base em Administração.',
    'Tenho experiência com automação de processos e organização de dados usando Python.',
    'Desenvolvo projetos focados em APIs, integração de sistemas e soluções práticas para problemas reais.',
  ],
}

export const TIMELINE = [
  
  {
    period:  '2024 — 2026 - hoje',
    role:    'Assistente Administrativo - Afya Educacional S.A.',
    where:   'Experiência Profissional - Tempo Integral',
    current: false,
    desc:    'Otimização de processos administrativos através de automação com scripts e estruturação de dados. Foco na redução de trabalho manual e melhoria na acuracidade de relatórios gerenciais utilizando Python e análise técnica de requisitos.',
    tags:    ['Automação', 'Análise de Dados', 'Processos', 'SQL', 'Excel Avançado', 'Scripting'],
  },
  {
    period:  '2025 — 2026 - hoje',
    role:    'Desenvolvedor Python · Projetos Próprios',
    where:   'Portfólio pessoal & Freelance',
    current: true,
    desc:    'Desenvolvimento de arquiteturas backend escaláveis, com foco em automação de fluxos de trabalho e consumo de APIs RESTful. Aplicação de boas práticas de modelagem e persistência em bancos relacionais para soluções orientadas a dados.',
    tags:    ['Python', 'FastAPI', 'APIs REST', 'PostgreSQL', 'Git', 'Backend Development'],
  },
  {
    period:  '2026 — cursando',
    role:    'Análise e Desenvolvimento de Sistemas - Afya Universidade UNIGRANRIO',
    where:   'Graduação',
    current: false,
    desc:    'Graduação em Análise e Desenvolvimento de Sistemas com foco no ecossistema backend. Embasamento acadêmico em engenharia de software, algoritmos complexos e modelagem de dados relacional, com prática constante na construção de APIs, integração entre sistemas e otimização de processos via automação.',
    tags:    ['SQL', 'APIs RESTful', 'Modelagem de Dados', 'Integração de Sistemas', 'Automação', 'Git', 'Engenharia de Software', 'Backend Development'],
  },
]

export const PROJECTS = [
  {
    id:       'fraude',
    type:     'Dados · Python',
    name:     'Análise de Transações',
    desc:     'Pipeline de análise de dados para detecção de anomalias em transações, aplicando técnicas de ciência de dados para identificar padrões de risco.',
    metric:   'Python · Pandas · Scikit-learn',
    tags:     ['Python', 'Pandas', 'Scikit-learn', 'Data Analysis'],
    github:   'https://github.com/Filipcardos/detecao-fraude-transacoes',
    live:     null,
    featured: true,
    status:   'público',
  },
  {
    id:       'monitoring',
    type:     'Backend · APIs',
    name:     'API Monitoring System',
    desc:     'Solução de monitoramento de infraestrutura que valida disponibilidade e latência de APIs, gerando logs e garantindo a resiliência de serviços.',
    metric:   'Python · APIs · Monitoramento',
    tags:     ['Python', 'APIs', 'Automação', 'Backend'],
    github:   'https://github.com/Filipcardos/api-monitoring-system',
    live:     null,
    featured: true, // Mudei para true, pois é um projeto muito técnico e relevante!
    status:   'público',
  },
  {
    id:       'automacao-adm',
    type:     'Automação · Python',
    name:     'Automação de Processos Administrativos',
    desc:     'Scripts voltados para otimização de fluxo de trabalho, eliminando tarefas manuais repetitivas e garantindo maior precisão na manipulação de dados.',
    metric:   'Python · Scripting · Automação',
    tags:     ['Python', 'Automação', 'Processos', 'Productivity'],
    github:   'https://github.com/Filipcardos/automacao-processos-administrativos', // Ajuste o link conforme o nome real do repo
    live:     null,
    featured: true,
    status:   'público',
  },
]

export const STACK = [
  {
    group: 'Backend',
    items: [
      { name: 'Python',      highlight: true },
      { name: 'FastAPI',     highlight: true },
      { name: 'APIs REST',   highlight: false },
    ],
  },
  {
    group: 'Dados',
    items: [
      { name: 'Pandas',      highlight: true },
      { name: 'Scikit-learn',highlight: false },
    ],
  },
  {
    group: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL',  highlight: true },
      { name: 'SQL',         highlight: true },
    ],
  },
  {
    group: 'Ferramentas',
    items: [
      { name: 'Git / GitHub',highlight: true },
      { name: 'Docker',      highlight: false },
    ],
  },
]