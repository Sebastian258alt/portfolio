/**
 * certificates.js
 * Certificate library. To add a new certificate:
 * 1. Copy an object below and edit the fields.
 * 2. Put the certificate image in assets/certs/ and the PDF in assets/docs/.
 * 3. category must be one of: ai, tech, leadership, marketing, english, translation, other
 */
const CERTIFICATE_CATEGORIES = [
  { id: "ai", pt: "Inteligência Artificial", en: "Artificial Intelligence" },
  { id: "tech", pt: "Tecnologia", en: "Technology" },
  { id: "leadership", pt: "Liderança", en: "Leadership" },
  { id: "marketing", pt: "Marketing", en: "Marketing" },
  { id: "english", pt: "Inglês", en: "English" },
  { id: "translation", pt: "Tradução", en: "Tradução" },
  { id: "other", pt: "Outros", en: "Other" },
];

const CERTIFICATES_DATA = [
  {
    id: "cert-clci",
    name: "CLCI",
    institution: "[PLACEHOLDER] Instituição emissora",
    date: "[PLACEHOLDER]",
    category: "translation",
    description: {
      pt: "[PLACEHOLDER] Breve descrição do certificado CLCI e das competências abrangidas.",
      en: "[PLACEHOLDER] Short description of the CLCI certificate and the skills it covers.",
    },
    image: "assets/certs/placeholder-cert.svg",
    pdf: null,
  },
  {
    id: "cert-ai-skills-passport",
    name: "AI Skills Passport",
    institution: "EY + Microsoft",
    date: "2026",
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
    institution: "HP",
    date: "[PLACEHOLDER]",
    category: "ai",
    description: {
      pt: "[PLACEHOLDER] Curso sobre pensamento crítico aplicado ao uso responsável de Inteligência Artificial.",
      en: "[PLACEHOLDER] Course on critical thinking applied to the responsible use of Artificial Intelligence.",
    },
    image: "assets/certs/placeholder-cert.svg",
    pdf: null,
  },
  {
    id: "cert-effective-leadership",
    name: "Effective Leadership",
    institution: "HP",
    date: "[PLACEHOLDER]",
    category: "leadership",
    description: {
      pt: "[PLACEHOLDER] Curso sobre liderança eficaz, comunicação e gestão de equipas.",
      en: "[PLACEHOLDER] Course on effective leadership, communication and team management.",
    },
    image: "assets/certs/placeholder-cert.svg",
    pdf: null,
  },
  {
    id: "cert-ai-beginners",
    name: "AI for Beginners",
    institution: "HP",
    date: "[PLACEHOLDER]",
    category: "ai",
    description: {
      pt: "[PLACEHOLDER] Introdução aos conceitos fundamentais de Inteligência Artificial.",
      en: "[PLACEHOLDER] Introduction to the fundamental concepts of Artificial Intelligence.",
    },
    image: "assets/certs/placeholder-cert.svg",
    pdf: null,
  },
  {
    id: "cert-social-media",
    name: "Certified Social Media Marketing Expertise",
    institution: "HP",
    date: "[PLACEHOLDER]",
    category: "marketing",
    description: {
      pt: "[PLACEHOLDER] Certificação em marketing e gestão de redes sociais.",
      en: "[PLACEHOLDER] Certification in social media marketing and management.",
    },
    image: "assets/certs/placeholder-cert.svg",
    pdf: null,
  },
  {
    id: "cert-english-business",
    name: "English for Business and Entrepreneurship MOOC",
    institution: "U.S. Department of State / FHI 360 (OPEN MOOCs)",
    date: "17 Jun 2026",
    category: "english",
    description: {
      pt: "Programa de Inglês aplicado a negócios e empreendedorismo, promovido pelo Online Professional English Network (OPEN) do Departamento de Estado dos EUA em parceria com a FHI 360. Certificado entregue pessoalmente pela Conselheira de Diplomacia Pública dos EUA em Moçambique.",
      en: "English programme applied to business and entrepreneurship, run through the U.S. Department of State's Online Professional English Network (OPEN) in partnership with FHI 360. Certificate presented in person by the U.S. Public Diplomacy Counselor to Mozambique.",
    },
    image: "assets/certs/cert-english-business.jpg",
    pdf: null,
  },
];
