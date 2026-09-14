/**
 * projects.js
 * Professional, academic and technology projects.
 */
const PROJECTS_DATA = [
  {
    id: "proj-englishflow",
    name: { pt: "English With Sebastian / EnglishFlow", en: "English With Sebastian / EnglishFlow" },
    image: "assets/img/placeholder-project.svg",
    description: {
      pt: "Plataforma digital de ensino de Inglês com conteúdos estruturados, materiais didácticos e ferramentas de apoio ao estudo, disponível em englishflowmz.vercel.app.",
      en: "Digital English-teaching platform with structured content, teaching materials and study-support tools, available at englishflowmz.vercel.app.",
    },
    tech: ["Ensino de Inglês", "Web", "Criação de conteúdos", "IA"],
    link: "https://englishflowmz.vercel.app",
    github: null,
  },
  {
    id: "proj-translation-sample",
    name: { pt: "Projecto de Tradução Técnica", en: "Technical Translation Project" },
    image: "assets/img/placeholder-project.svg",
    description: {
      pt: "Tradução de documentos técnicos e académicos entre Inglês e Português, com atenção à terminologia, ao registo e ao contexto cultural.",
      en: "Translation of technical and academic documents between English and Portuguese, with attention to terminology, register and cultural context.",
    },
    tech: ["Tradução EN↔PT", "Terminologia", "Revisão"],
    link: null,
    github: null,
  },
  {
    id: "proj-academic",
    name: { pt: "Projecto Académico (UEM)", en: "Academic Project (UEM)" },
    image: "assets/img/placeholder-project.svg",
    description: {
      pt: "Trabalho académico desenvolvido no âmbito da Licenciatura em Tradução e Interpretação na UEM, envolvendo pesquisa em linguística, teoria da tradução e prática de tradução.",
      en: "Academic work developed as part of the BA in Translation and Interpretation at UEM, involving research in linguistics, translation theory and translation practice.",
    },
    tech: ["Pesquisa", "Tradução", "Linguística"],
    link: null,
    github: null,
  },
];