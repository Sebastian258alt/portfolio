/**
 * skills.js
 * level: "advanced" | "proficient" | "developing" — mapped to a discreet
 * visual indicator (not an exact percentage, per project guidelines).
 */
const SKILLS_DATA = [
  {
    category: { pt: "Tradução", en: "Translation" },
    items: [
      { name: { pt: "Tradução técnica EN↔PT", en: "Technical translation EN↔PT" }, level: "advanced" },
      { name: { pt: "Tradução académica", en: "Academic translation" }, level: "advanced" },
      { name: { pt: "Revisão e edição", en: "Revision and editing" }, level: "proficient" },
    ],
  },
  {
    category: { pt: "Interpretação", en: "Interpretation" },
    items: [
      { name: { pt: "Interpretação consecutiva", en: "Consecutive interpretation" }, level: "proficient" },
      { name: { pt: "Interpretação de acompanhamento", en: "Liaison interpretation" }, level: "proficient" },
    ],
  },
  {
    category: { pt: "Ensino de Inglês", en: "English Teaching" },
    items: [
      { name: { pt: "Ensino geral (todos os níveis)", en: "General English (all levels)" }, level: "advanced" },
      { name: { pt: "Inglês para negócios", en: "Business English" }, level: "advanced" },
      { name: { pt: "Preparação para exames", en: "Exam preparation" }, level: "proficient" },
    ],
  },
  {
    category: { pt: "Tecnologia & IA", en: "Technology & AI" },
    items: [
      { name: { pt: "Ferramentas de IA aplicadas ao ensino/tradução", en: "AI tools applied to teaching/translation" }, level: "proficient" },
      { name: { pt: "Criação de conteúdos digitais", en: "Digital content creation" }, level: "proficient" },
      { name: { pt: "Marketing digital", en: "Digital marketing" }, level: "developing" },
    ],
  },
];

const SKILL_LEVEL_LABEL = {
  advanced: { pt: "Avançado", en: "Advanced" },
  proficient: { pt: "Proficiente", en: "Proficient" },
  developing: { pt: "Em desenvolvimento", en: "Developing" },
};
