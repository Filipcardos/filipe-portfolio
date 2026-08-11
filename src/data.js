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
    id:       'devops-api',
    type:     'DevOps · Backend',
    name:     'DevOps API Project',
    desc:     'API containerizada com pipeline de CI/CD automatizado, cobrindo build, testes e deploy em nuvem de ponta a ponta.',
    metric:   'Python · Docker · GitHub Actions · PostgreSQL',
    tags:     ['Python', 'Docker', 'Docker Compose', 'GitHub Actions', 'PostgreSQL'],
    github:   'https://github.com/Filipcardos/devops-api-project',
    live:     'https://devops-api-project.onrender.com/',
    featured: true,
    status:   'público',
  },
  {
    id:       'fraude',
    type:     'Dados · Machine Learning',
    name:     'Detecção de Fraude em Transações',
    desc:     'Análise exploratória e modelagem preditiva sobre transações financeiras, combinando Isolation Forest e Random Forest para identificar padrões anômalos.',
    metric:   'Python · Pandas · Scikit-learn',
    tags:     ['Python', 'Pandas', 'Scikit-learn', 'Machine Learning'],
    github:   'https://github.com/Filipcardos/detecao-fraude-transacoes',
    live:     null,
    featured: true,
    status:   'público',
  },
  {
    id:       'monitoring',
    type:     'Backend · Observabilidade',
    name:     'API Monitoring System',
    desc:     'Sistema de monitoramento contínuo de APIs com medição de tempo de resposta, detecção de anomalias e dashboard interativo para acompanhamento em tempo real.',
    metric:   'Python · FastAPI · Streamlit',
    tags:     ['Python', 'FastAPI', 'Streamlit', 'APIs', 'Observabilidade'],
    github:   'https://github.com/Filipcardos/api-monitoring-system',
    live:     null,
    featured: false,
    status:   'público',
  },
  {
    id:       'power-apps',
    type:     'Low-code · Automação',
    name:     'App Power Apps — Taxímetros do Internato',
    desc:     'Aplicativo em Power Apps para digitalizar o registro e a consulta de atividades de internato, com busca, ordenação e navegação via Power Fx.',
    metric:   'Power Apps · Power Fx · SharePoint',
    tags:     ['Power Apps', 'Power Fx', 'Power Platform'],
    github:   'https://github.com/Filipcardos/Projeto-Power-Apps',
    live:     null,
    featured: false,
    status:   'público',
  },
]

export const STACK = [
  {
    group: 'Linguagens & Backend',
    items: [
      { name: 'Python',      highlight: true },
      { name: 'FastAPI',     highlight: true },
      { name: 'APIs REST',   highlight: false },
      { name: 'JavaScript',  highlight: false },
      { name: 'HTML',        highlight: false },
      { name: 'CSS',         highlight: false },
    ],
  },
  {
    group: 'Dados & BI',
    items: [
      { name: 'Pandas',           highlight: true },
      { name: 'Scikit-learn',     highlight: false },
      { name: 'Jupyter Notebook', highlight: false },
      { name: 'Power BI',         highlight: false },
    ],
  },
  {
    group: 'Banco de Dados',
    items: [
      { name: 'PostgreSQL',  highlight: true },
      { name: 'SQL',         highlight: true },
      { name: 'TSQL',        highlight: false },
    ],
  },
  {
    group: 'Ferramentas & Processos',
    items: [
      { name: 'Git / GitHub',    highlight: true },
      { name: 'Docker',          highlight: false },
      { name: 'Linux',           highlight: false },
      { name: 'VS Code',         highlight: false },
      { name: 'Postman',         highlight: false },
      { name: 'Excel Avançado',  highlight: false },
      { name: 'Scrum / Kanban',  highlight: false },
    ],
  },
]