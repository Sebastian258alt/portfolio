/**
 * education.js
 * University education and formal courses.
 */
const EDUCATION_DATA = [
  {
    id: "edu-uem",
    period: { pt: "2022 — Presente", en: "2022 — Present" },
    current: true,
    course: { pt: "Licenciatura em Tradução e Interpretação (Inglês–Português)", en: "BA in Translation and Interpretation (English–Portuguese)" },
    institution: { pt: "Universidade Eduardo Mondlane (UEM) — Faculdade de Letras e Ciências Sociais", en: "Eduardo Mondlane University (UEM) — Faculty of Letters and Social Sciences" },
    description: {
      pt: "Finalista, actualmente em culminação do curso. Formação focada em tradução Inglês–Português, interpretação, linguística descritiva, teoria da tradução e literatura.",
      en: "Final-year student, currently completing the degree. Focused on English–Portuguese translation, interpretation, descriptive linguistics, translation theory and literature.",
    },
  },
  {
    id: "edu-clci",
    period: { pt: "Certificação profissional", en: "Professional certification" },
    current: false,
    course: { pt: "Certificação de Língua Inglesa (Níveis 1–5)", en: "English Language Certification (Levels 1–5)" },
    institution: { pt: "CLCI — Consultoria Linguística e Coaching Isac", en: "CLCI — Consultoria Linguística e Coaching Isac" },
    description: {
      pt: "Certificação de proficiência em Inglês que suporta o ensino estruturado de Inglês a alunos adultos do nível iniciante ao intermédio.",
      en: "English proficiency certification underpinning structured teaching of English to adult learners from beginner to intermediate levels.",
    },
  },
];