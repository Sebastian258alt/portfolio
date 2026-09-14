/**
 * experience.js
 * Add or edit work experience here. Each entry needs a pt and en version.
 * "current: true" marks an ongoing role (shows "Presente" / "Present").
 */
const EXPERIENCE_DATA = [
  {
    id: "exp-english-teacher",
    period: { pt: "2018 — Presente", en: "2018 — Present" },
    current: true,
    role: { pt: "Professor de Inglês", en: "English Teacher" },
    org: { pt: "[PLACEHOLDER] Nome da instituição/projecto", en: "[PLACEHOLDER] Institution/project name" },
    description: {
      pt: "[PLACEHOLDER] Ensino de Inglês geral e para fins específicos a alunos de diferentes níveis, com foco em comunicação prática e preparação para contextos académicos e profissionais.",
      en: "[PLACEHOLDER] Teaching general and specific-purpose English to students of different levels, focused on practical communication and preparation for academic and professional contexts.",
    },
    responsibilities: {
      pt: [
        "Planeamento e leccionação de aulas de Inglês",
        "Desenvolvimento de materiais didácticos",
        "Avaliação de progresso dos alunos",
        "Preparação para exames e contextos profissionais",
      ],
      en: [
        "Planning and teaching English classes",
        "Developing teaching materials",
        "Assessing student progress",
        "Exam and professional-context preparation",
      ],
    },
  },
  {
    id: "exp-translator",
    period: { pt: "[PLACEHOLDER] Ano — Ano", en: "[PLACEHOLDER] Year — Year" },
    current: false,
    role: { pt: "Tradutor Inglês–Português", en: "English–Portuguese Translator" },
    org: { pt: "[PLACEHOLDER] Cliente/organização", en: "[PLACEHOLDER] Client/organisation" },
    description: {
      pt: "[PLACEHOLDER] Tradução de documentos técnicos, académicos e de comunicação entre Inglês e Português, com atenção à terminologia e ao contexto cultural.",
      en: "[PLACEHOLDER] Translation of technical, academic and communication documents between English and Portuguese, with attention to terminology and cultural context.",
    },
    responsibilities: {
      pt: ["Tradução de documentos", "Revisão e controlo de qualidade", "Gestão de prazos de entrega"],
      en: ["Document translation", "Review and quality control", "Deadline management"],
    },
  },
  {
    id: "exp-content-creator",
    period: { pt: "[PLACEHOLDER] Ano — Presente", en: "[PLACEHOLDER] Year — Present" },
    current: true,
    role: { pt: "Criador de Conteúdos Educacionais", en: "Educational Content Creator" },
    org: { pt: "English With Sebastian / EnglishFlow", en: "English With Sebastian / EnglishFlow" },
    description: {
      pt: "[PLACEHOLDER] Criação de conteúdos digitais para aprendizagem de Inglês, combinando metodologia de ensino com ferramentas de tecnologia e IA.",
      en: "[PLACEHOLDER] Creating digital content for English learning, combining teaching methodology with technology and AI tools.",
    },
    responsibilities: {
      pt: ["Produção de conteúdos educativos", "Gestão de redes sociais", "Planeamento de currículo próprio"],
      en: ["Producing educational content", "Social media management", "Own curriculum planning"],
    },
  },
];
