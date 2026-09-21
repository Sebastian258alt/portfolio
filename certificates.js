/**
 * certificates.js
 * Certificate library.
 * category must be one of: ai, tech, leadership, marketing, english, translation, other
 * issued: data ISO (AAAA-MM-DD) só para ordenação; date: texto mostrado no cartão.
 * image: null  -> cartão sem imagem (mostra placeholder e não tem botão "Ver").
 * extra: imagem adicional opcional (ex.: certificado entregue em cerimónia).
 */
const CERTIFICATE_CATEGORIES = [
  { id: "ai", pt: "Inteligência Artificial", en: "Artificial Intelligence" },
  { id: "tech", pt: "Tecnologia", en: "Technology" },
  { id: "leadership", pt: "Liderança", en: "Leadership" },
  { id: "marketing", pt: "Marketing", en: "Marketing" },
  { id: "english", pt: "Inglês", en: "English" },
  { id: "translation", pt: "Tradução", en: "Translation" },
  { id: "other", pt: "Outros", en: "Other" },
];

const CERTIFICATES_DATA = [
  {
    id: "cert-english-career",
    name: "English for Career Development MOOC",
    institution: "U.S. Department of State / FHI 360 (OPEN MOOCs)",
    date: "1 Set 2026",
    issued: "2026-09-01", // usado só para ordenar (mais recente primeiro)
    category: "english",
    description: {
      pt: "Programa de Inglês aplicado ao desenvolvimento profissional, promovido pelo Online Professional English Network (OPEN) do Departamento de Estado dos EUA em parceria com a FHI 360.",
      en: "English programme focused on career development, run through the U.S. Department of State's Online Professional English Network (OPEN) in partnership with FHI 360.",
    },
    image: "assets/certs/cert-english-career.jpg",
    pdf: null,
  },
  {
    id: "cert-english-business",
    name: "English for Business and Entrepreneurship MOOC",
    institution: "U.S. Department of State / FHI 360 (OPEN MOOCs)",
    date: "17 Jun 2026",
    issued: "2026-06-17", // usado só para ordenar (mais recente primeiro)
    category: "english",
    description: {
      pt: "Programa de Inglês aplicado a negócios e empreendedorismo, promovido pelo Online Professional English Network (OPEN) do Departamento de Estado dos EUA em parceria com a FHI 360. Certificado entregue pessoalmente pela Conselheira de Diplomacia Pública dos EUA em Moçambique.",
      en: "English programme applied to business and entrepreneurship, run through the U.S. Department of State's Online Professional English Network (OPEN) in partnership with FHI 360. Certificate presented in person by the U.S. Public Diplomacy Counselor to Mozambique.",
    },
    image: "assets/certs/cert-english-business.jpg",
    pdf: null,
    extra: {
      image: "assets/certs/cert-english-business-embassy.jpg",
      label: { pt: "Certificado da cerimónia", en: "Ceremony certificate" },
    },
  },
  {
    id: "cert-ai-skills-passport",
    name: "AI Skills Passport",
    institution: "EY + Microsoft",
    date: "2026",
    issued: "2026-01-01", // usado só para ordenar (mais recente primeiro)
    category: "ai",
    description: {
      pt: "Certificação sobre competências fundamentais de Inteligência Artificial, cobrindo a secção geral, competências de empregabilidade e o módulo de Negócios & Empreendedorismo, numa parceria entre a EY e a Microsoft.",
      en: "Certification covering foundational AI skills — the general section, employability skills, and the Business & Entrepreneurship module — delivered in partnership between EY and Microsoft.",
    },
    image: "assets/certs/cert-ai-skills-passport.jpg",
    pdf: null,
  },
  {
    id: "cert-fundamentos-ia",
    name: "Fundamentos de IA (TechStart)",
    institution: "Vodacom Group + Microsoft Learn",
    date: "8 Set 2026",
    issued: "2026-09-08", // usado só para ordenar (mais recente primeiro)
    category: "ai",
    description: {
      pt: "Curso introdutório sobre os conceitos fundamentais de Inteligência Artificial, concluído através do programa TechStart, numa parceria entre a Vodacom Group e a Microsoft Learn.",
      en: "Introductory course on the fundamental concepts of Artificial Intelligence, completed through the TechStart programme, in partnership between Vodacom Group and Microsoft Learn.",
    },
    image: "assets/certs/cert-fundamentos-ia.jpg",
    pdf: null,
  },
  {
    id: "cert-critical-thinking-ai",
    name: "Critical Thinking in the AI Era",
    institution: "HP LIFE (HP Foundation)",
    date: "3 Jun 2026",
    issued: "2026-06-03", // usado só para ordenar (mais recente primeiro)
    category: "ai",
    description: {
      pt: "Curso sobre pensamento crítico aplicado ao uso responsável da Inteligência Artificial: reconhecer conteúdo gerado por IA que distorce a verdade, estratégias contra enviesamentos na tomada de decisão e ferramentas práticas de verificação de factos.",
      en: "Course on critical thinking applied to the responsible use of AI: recognising AI-generated content that distorts truth, strategies against bias in decision-making, and practical fact-checking tools.",
    },
    image: "assets/certs/cert-critical-thinking-ai.jpg",
    pdf: null,
  },
  {
    id: "cert-effective-leadership",
    name: "Effective Leadership",
    institution: "HP LIFE (HP Foundation)",
    date: "4 Jun 2026",
    issued: "2026-06-04", // usado só para ordenar (mais recente primeiro)
    category: "leadership",
    description: {
      pt: "Curso sobre liderança eficaz: estratégias de liderança, o papel da ética e a importância de adaptar a abordagem a diferentes contextos e equipas.",
      en: "Course on effective leadership: leadership strategies, the role of ethics, and the importance of adapting your approach across different contexts and teams.",
    },
    image: "assets/certs/cert-effective-leadership.jpg",
    pdf: null,
  },
  {
    id: "cert-ai-beginners",
    name: "AI for Beginners",
    institution: "HP LIFE (HP Foundation)",
    date: "3 Jun 2026",
    issued: "2026-06-03", // usado só para ordenar (mais recente primeiro)
    category: "ai",
    description: {
      pt: "Introdução aos conceitos fundamentais de Inteligência Artificial: impacto no panorama tecnológico, conceitos-chave, importância dos dados, aplicações empresariais e implicações éticas.",
      en: "Introduction to the fundamentals of Artificial Intelligence: impact on the technological landscape, key concepts, the importance of data, business applications and ethical implications.",
    },
    image: "assets/certs/cert-ai-beginners.jpg",
    pdf: null,
  },
  {
    id: "cert-social-media",
    name: "Social Media Marketing",
    institution: "HP LIFE (HP Foundation)",
    date: "3 Jun 2026",
    issued: "2026-06-03", // usado só para ordenar (mais recente primeiro)
    category: "marketing",
    description: {
      pt: "Certificação em marketing e gestão de redes sociais: criação de campanhas eficazes, publicidade em diferentes plataformas e elaboração de anúncios segmentados.",
      en: "Certification in social media marketing and management: building effective campaigns, advertising across platforms, and creating targeted social media adverts.",
    },
    image: "assets/certs/cert-social-media.jpg",
    pdf: null,
  },
  {
    id: "cert-clci-english",
    name: "English Language Certification (Levels 1–5)",
    institution: "CLCI — Consultoria Linguística e Coaching Isac",
    date: "",
    issued: "2021-01-01",
    category: "english",
    description: {
      pt: "Certificação de proficiência em Inglês (Níveis 1–5) que sustenta o ensino estruturado a alunos adultos do nível iniciante ao intermédio. Comprovativo disponível mediante pedido.",
      en: "English proficiency certification (Levels 1–5) underpinning structured teaching to adult learners from beginner to intermediate levels. Proof available on request.",
    },
    image: null,
    pdf: null,
  },
];
