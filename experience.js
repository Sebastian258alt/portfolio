/**
 * experience.js
 * Work experience. Each entry needs a pt and en version.
 * "current: true" marks an ongoing role.
 */
const EXPERIENCE_DATA = [
  {
    id: "exp-english-teacher",
    period: { pt: "~2020 — Presente", en: "~2020 — Present" },
    current: true,
    role: { pt: "Professor de Inglês", en: "English Teacher" },
    org: { pt: "Consultoria Linguística e Coaching Isac (CLCI) — Maputo, Moçambique", en: "Consultoria Linguística e Coaching Isac (CLCI) — Maputo, Mozambique" },
    description: {
      pt: "Mais de {years} anos a leccionar Inglês a alunos adultos, do nível iniciante ao intermédio (Níveis 1–4), com foco em aprendizagem estruturada e centrada no aluno.",
      en: "Over {years} years teaching English to adult learners, from beginner to intermediate levels (Levels 1–4), focused on structured, learner-centred instruction.",
    },
    responsibilities: {
      pt: [
        "Planeamento de aulas, exercícios e avaliações alinhados com os objectivos curriculares",
        "Adaptação de conteúdos e ritmo para turmas de níveis mistos",
        "Gestão de sala de aula e manutenção do envolvimento dos alunos",
        "Acompanhamento do progresso individual dos alunos",
      ],
      en: [
        "Designing lesson plans, exercises and assessments aligned with curriculum objectives",
        "Adapting content and pace for mixed-proficiency groups",
        "Classroom management and keeping learners engaged",
        "Tracking individual learner progress",
      ],
    },
  },
  {
    id: "exp-englishflow",
    period: { pt: "2026 — Presente", en: "2026 — Present" },
    current: true,
    role: { pt: "Fundador, Gestor & Criador de Conteúdos", en: "Founder, Manager & Content Creator" },
    org: { pt: "English With Sebastian / EnglishFlow — Plataforma digital", en: "English With Sebastian / EnglishFlow — Digital platform" },
    description: {
      pt: "Plataforma digital de aprendizagem de Inglês (englishflowmz.vercel.app) que combina criação de conteúdos, tecnologia e ferramentas de IA aplicadas ao ensino.",
      en: "Digital English-learning platform (englishflowmz.vercel.app) combining content creation, technology and AI tools applied to teaching.",
    },
    responsibilities: {
      pt: [
        "Criação e entrega de conteúdos estruturados de Inglês para falantes não nativos",
        "Desenvolvimento e gestão da plataforma web e da aplicação",
        "Acompanhamento do envolvimento dos alunos e iteração sobre os conteúdos",
        "Aplicação de ferramentas de IA ao planeamento e produção de materiais",
      ],
      en: [
        "Creating and delivering structured English content for non-native speakers",
        "Building and managing the web platform and app",
        "Tracking learner engagement and iterating on content",
        "Applying AI tools to planning and materials production",
      ],
    },
  },
  {
    id: "exp-enumerator",
    period: { pt: "2021 — 2022", en: "2021 — 2022" },
    current: false,
    role: { pt: "Inquiridor / Recolha de Dados", en: "Enumerator / Data Collector" },
    org: { pt: "Centro de Análise Política (CAP) — Cidade e Província de Maputo", en: "Centro de Análise Política (CAP) — Maputo City and Province" },
    description: {
      pt: "Recolha de dados primários junto de residentes para estudos de mobilidade, com administração rigorosa de questionários estruturados.",
      en: "Collected primary data from residents for mobility studies, administering structured questionnaires with accuracy and professionalism.",
    },
    responsibilities: {
      pt: [
        "Administração de questionários estruturados",
        "Recolha e registo rigoroso de dados no terreno",
        "Comunicação com residentes em contexto urbano e provincial",
      ],
      en: [
        "Administering structured questionnaires",
        "Accurate field data collection and recording",
        "Communicating with residents across urban and provincial contexts",
      ],
    },
  },
];
