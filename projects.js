/**
 * projects.js
 * Projectos profissionais, académicos e de tecnologia.
 *
 * Campos (todos opcionais, excepto id e name — a secção só mostra o que existir):
 *  featured      true  → apresentação em destaque (largura total)
 *  category      {pt,en}
 *  description   {pt,en}
 *  problem       {pt,en}   (só no destaque)
 *  solution      {pt,en}   (só no destaque)
 *  role          {pt,en}   frase curta sobre o meu papel
 *  contributions {pt:[],en:[]}   "O que fiz" em pontos concretos
 *  features      {pt:[],en:[]}   funcionalidades realmente implementadas
 *  skills        {pt:[],en:[]}   competências demonstradas
 *  tech          ["..."]   tecnologias/ferramentas (nomes próprios, iguais nas duas línguas)
 *  status        {pt,en}
 *  link, github  URLs (null se não existirem)
 *  screenshots   [{ src: "assets/img/projects/xxx.jpg", alt: {pt,en} }]
 *                → quando adicionares capturas reais, aparecem automaticamente.
 *
 * REGRA: só informação verificável — sem números, utilizadores ou resultados inventados.
 */
const PROJECTS_DATA = [
  {
    id: "proj-englishflow",
    featured: true,
    name: { pt: "English With Sebastian / EnglishFlow", en: "English With Sebastian / EnglishFlow" },
    category: { pt: "Educação · EdTech · Web", en: "Education · EdTech · Web" },
    description: {
      pt: "Aplicação web progressiva (PWA) de aprendizagem de Inglês para falantes de Português em Moçambique, com lições, quizzes, jogos e um tutor de IA.",
      en: "A progressive web app (PWA) for learning English, built for Portuguese speakers in Mozambique, with lessons, quizzes, games and an AI tutor.",
    },
    problem: {
      pt: "Os aprendentes moçambicanos de Inglês precisam de prática regular e estruturada, em Português, com exemplos do seu contexto.",
      en: "Mozambican learners of English need regular, structured practice in Portuguese, with examples from their own context.",
    },
    solution: {
      pt: "Uma aplicação gamificada com lições organizadas por níveis CEFR, quizzes e jogos, progressão por XP e sequências, ranking e um tutor de IA — com conteúdo localizado (Maputo, chapas, M-Pesa).",
      en: "A gamified app with lessons organised by CEFR level, quizzes and games, XP-and-streak progression, a leaderboard and an AI tutor — with localised content (Maputo, chapas, M-Pesa).",
    },
    role: {
      pt: "Fundador, gestor, criador de conteúdos e programador.",
      en: "Founder, manager, content creator and developer.",
    },
    contributions: {
      pt: [
        "Concebi e construí a aplicação de raiz.",
        "Criei e validei unidades de lições por níveis CEFR, com conteúdo bilingue e exemplos locais.",
        "Integrei a autenticação Google e a base de dados Supabase, e o tutor de IA com a API Gemini.",
        "Realizei uma auditoria de segurança e optimizei o desempenho (carregamento diferido de módulos e CSS crítico).",
      ],
      en: [
        "Designed and built the app from scratch.",
        "Created and validated lesson units by CEFR level, with bilingual content and local examples.",
        "Integrated Google sign-in and the Supabase database, and the AI tutor via the Gemini API.",
        "Ran a security audit and optimised performance (lazy-loaded modules and critical CSS).",
      ],
    },
    features: {
      pt: [
        "Lições organizadas por níveis CEFR",
        "Teste de nível",
        "Quizzes com vários tipos de pergunta (áudio, verdadeiro/falso, imagem-palavra)",
        "Jogo de palavras (word scramble)",
        "XP, sequências e níveis de progressão",
        "Ranking (leaderboard)",
        "Tutor de IA com Gemini",
        "Mascote Flowy bilingue (EN/PT) com activação por voz",
        "Início de sessão com Google",
      ],
      en: [
        "Lessons organised by CEFR level",
        "Placement test",
        "Quizzes with several question types (listening, true/false, image-word)",
        "Word-scramble game",
        "XP, streaks and progression levels",
        "Leaderboard",
        "AI tutor powered by Gemini",
        "Bilingual (EN/PT) Flowy mascot with voice activation",
        "Sign in with Google",
      ],
    },
    tech: ["JavaScript", "PWA", "Supabase", "Google OAuth", "Gemini API", "Node.js", "Vercel"],
    status: {
      pt: "Online e em uso por aprendentes em Moçambique; em melhoria contínua.",
      en: "Live and used by learners in Mozambique; under continuous improvement.",
    },
    link: "https://englishflowmz.vercel.app",
    github: null,
    screenshots: [],
  },
  {
    id: "proj-translation-sample",
    name: { pt: "Projecto de Tradução Técnica", en: "Technical Translation Project" },
    category: { pt: "Tradução", en: "Translation" },
    description: {
      pt: "Tradução de documentos técnicos e académicos entre Inglês e Português, com atenção à terminologia, ao registo e ao contexto cultural.",
      en: "Translation of technical and academic documents between English and Portuguese, with attention to terminology, register and cultural context.",
    },
    role: {
      pt: "Traduzi e revi os textos, incluindo, em contexto universitário, um relatório do Banco Mundial sobre água, saneamento e higiene (WASH).",
      en: "I translated and reviewed the texts, including, in a university setting, a World Bank report on water, sanitation and hygiene (WASH).",
    },
    skills: {
      pt: ["Tradução EN↔PT", "Terminologia", "Revisão"],
      en: ["EN↔PT translation", "Terminology", "Proofreading"],
    },
    link: null,
    github: null,
  },
  {
    id: "proj-academic",
    name: { pt: "Projecto Académico (UEM)", en: "Academic Project (UEM)" },
    category: { pt: "Académico", en: "Academic" },
    description: {
      pt: "Trabalho académico desenvolvido no âmbito da Licenciatura em Tradução e Interpretação na UEM, envolvendo pesquisa em linguística, teoria da tradução e prática de tradução.",
      en: "Academic work developed as part of the BA in Translation and Interpretation at UEM, involving research in linguistics, translation theory and translation practice.",
    },
    role: {
      pt: "Pesquisa, análise sintáctica e prática de tradução, com correcção e revisão dos resultados.",
      en: "Research, syntactic analysis and translation practice, with correction and review of the results.",
    },
    skills: {
      pt: ["Pesquisa", "Tradução", "Linguística"],
      en: ["Research", "Translation", "Linguistics"],
    },
    link: null,
    github: null,
  },
];
