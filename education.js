/**
 * education.js
 * University education and formal courses. Certifications live in certificates.js.
 */
const EDUCATION_DATA = [
  {
    id: "edu-uem",
    period: { pt: "[PLACEHOLDER] 2021 — Presente", en: "[PLACEHOLDER] 2021 — Present" },
    current: true,
    course: { pt: "Licenciatura em Tradução e Interpretação", en: "BA in Translation and Interpretation" },
    institution: { pt: "Universidade Eduardo Mondlane (UEM)", en: "Eduardo Mondlane University (UEM)" },
    description: {
      pt: "Finalista, em processo de culminação do curso. Formação focada em tradução Inglês–Português, interpretação e teoria da tradução.",
      en: "Final-year student, currently completing the degree. Focused on English–Portuguese translation, interpretation and translation theory.",
    },
  },
  {
    id: "edu-clci",
    period: { pt: "[PLACEHOLDER] Ano", en: "[PLACEHOLDER] Year" },
    current: false,
    course: { pt: "CLCI", en: "CLCI" },
    institution: { pt: "[PLACEHOLDER] Instituição", en: "[PLACEHOLDER] Institution" },
    description: {
      pt: "[PLACEHOLDER] Breve descrição do curso/certificação CLCI.",
      en: "[PLACEHOLDER] Short description of the CLCI course/certification.",
    },
  },
];
