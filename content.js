/**
 * content.js
 * Core site copy in both languages.
 */
/**
 * SITE_FACTS — números usados em vários sítios do site.
 * Altera aqui e o site inteiro (PT/EN, hero, destaques, experiência) fica coerente.
 * teachingYears: mínimo confirmável de anos a leccionar (CLCI, desde ~2021).
 * O número de certificados é calculado automaticamente a partir de certificates.js.
 */
const SITE_FACTS = {
  teachingYears: 4,
};

/**
 * CONTACT_CONFIG — como o formulário de contacto envia mensagens.
 *  - web3formsKey:    chave gratuita em web3forms.com (recomendado, 1 minuto)
 *  - formspreeEndpoint: URL do teu formulário em formspree.io
 *  - Se ambos estiverem vazios, o formulário abre o teu programa de email
 *    (mailto:) já preenchido — funciona sem qualquer serviço externo.
 */
const CONTACT_CONFIG = {
  email: "nhamoneques@gmail.com",
  web3formsKey: "",
  formspreeEndpoint: "",
};

const SITE_CONTENT = {
  pt: {
    meta: {
      title: "Sebastião Nhamuneque — Professor de Inglês, Tradutor & Intérprete",
      description:
        "Portefólio profissional de Sebastião Zefanias Nhamuneque Junior: ensino de Inglês, tradução e interpretação Inglês–Português, localização de conteúdos e tecnologia/IA. Maputo, Moçambique.",
    },
    nav: {
      home: "Início",
      about: "Sobre",
      experience: "Experiência",
      education: "Formação",
      skills: "Competências",
      certificates: "Certificados",
      documents: "Documentos",
      projects: "Projectos",
      services: "Serviços",
      contact: "Contacto",
      skip: "Saltar para o conteúdo",
    },
    hero: {
      eyebrow: "Ensino de Inglês · Tradução · Interpretação",
      title: "Sebastião Nhamuneque",
      subtitle: "Ensino, traduzo e construo pontes entre o Inglês e o Português.",
      intro:
        "Professor de Inglês moçambicano com mais de {years} anos de experiência, finalista de Tradução e Interpretação na Universidade Eduardo Mondlane e com interesse activo em tecnologia e inteligência artificial aplicadas à educação e à comunicação.",
      ctaPrimary: "Ver o meu percurso",
      ctaSecondary: "Descarregar CV",
      badges: ["Professor de Inglês", "Tradutor", "Intérprete", "Entusiasta de IA"],
      scrollHint: "Descer",
    },
    about: {
      title: "Sobre mim",
      lead:
        "Sou professor de Inglês, tradutor e intérprete, actualmente a concluir a Licenciatura em Tradução e Interpretação na Universidade Eduardo Mondlane (UEM).",
      body: [
        "Ao longo dos últimos anos dediquei-me ao ensino estruturado de Inglês a alunos adultos e jovens, à tradução técnica entre Inglês e Português e à interpretação consecutiva — sempre com foco em clareza, rigor e adaptação cultural.",
        "Fora da sala de aula, criei e gestiono o English With Sebastian / EnglishFlow, uma plataforma digital de aprendizagem de Inglês através da qual desenvolvo conteúdos, materiais didácticos e ferramentas de apoio ao estudo.",
        "Tenho um interesse crescente em inteligência artificial aplicada à educação, tradução e produtividade, reflectido nas certificações que tenho vindo a completar (EY, Microsoft, HP, Vodacom Group e OPEN MOOCs).",
      ],
      focusTitle: "Áreas de especialização",
      focusAreas: [
        "Ensino de Inglês (todos os níveis)",
        "Tradução técnica Inglês ↔ Português",
        "Interpretação consecutiva",
        "Localização de conteúdos",
        "Criação de conteúdos educativos digitais",
        "Tecnologia e Inteligência Artificial",
      ],
    },
    experience: { title: "Experiência", lead: "Um percurso construído entre a sala de aula, a tradução e a criação de conteúdos." },
    education: { title: "Formação Académica", lead: "Formação universitária e certificações complementares." },
    skills: { title: "Competências", lead: "Áreas onde aplico o meu trabalho diariamente." },
    certificates: {
      title: "Certificados",
      lead: "Biblioteca de certificações profissionais e académicas.",
      searchPlaceholder: "Pesquisar certificados…",
      all: "Todos",
      view: "Ver certificado",
      download: "Abrir PDF",
      empty: "Nenhum certificado encontrado para esta pesquisa.",
    },
    documents: {
      title: "Documentos Profissionais",
      lead: "CV e carta de apresentação para descarregar; restantes documentos mediante pedido.",
      view: "Visualizar",
      download: "Descarregar",
      privateNote: "Documento privado — disponível mediante pedido.",
      publicNote: "Documento público",
      otherLang: "Also in English",
    },
    projects: { title: "Projectos", lead: "Projectos profissionais, académicos e de tecnologia." },
    services: { title: "Serviços", lead: "Como posso ajudar-te ou à tua organização." },
    highlights: {
      title: "Destaques",
      items: [
        { number: "+{years}", label: "anos de experiência no ensino de Inglês" },
        { number: "{certs}", label: "certificados e cursos concluídos" },
        { number: "2", label: "idiomas de trabalho: Inglês e Português" },
        { number: "1", label: "plataforma digital de ensino de Inglês" },
      ],
    },
    contact: {
      title: "Contacto",
      lead: "Disponível para projectos de ensino, tradução, interpretação e colaborações.",
      formName: "Nome",
      formEmail: "Email",
      formSubject: "Assunto",
      formMessage: "Mensagem",
      formSubmit: "Enviar mensagem",
      formNote: "Podes também contactar-me directamente por email ou WhatsApp.",
      formSending: "A enviar…",
      formSuccess: "Mensagem enviada! Respondo o mais breve possível.",
      formError: "Não foi possível enviar agora. Por favor contacta-me por email ou WhatsApp.",
      formMailto: "A abrir o teu programa de email com a mensagem preenchida…",
      location: "Maputo, Moçambique",
    },
    footer: {
      role: "Professor de Inglês · Tradutor & Intérprete",
      rights: "Todos os direitos reservados.",
      backToTop: "Voltar ao topo",
    },
  },

  en: {
    meta: {
      title: "Sebastião Nhamuneque — English Teacher, Translator & Interpreter",
      description:
        "Professional portfolio of Sebastião Zefanias Nhamuneque Junior: English teaching, English–Portuguese translation and interpretation, content localisation and technology/AI. Maputo, Mozambique.",
    },
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      certificates: "Certificates",
      documents: "Documents",
      projects: "Projects",
      services: "Services",
      contact: "Contact",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "English Teaching · Translation · Interpretation",
      title: "Sebastião Nhamuneque",
      subtitle: "I teach, translate, and build bridges between English and Portuguese.",
      intro:
        "Mozambican English teacher with over {years} years of experience, final-year Translation and Interpretation student at Eduardo Mondlane University, with an active interest in technology and AI applied to education and communication.",
      ctaPrimary: "See my journey",
      ctaSecondary: "Download CV",
      badges: ["English Teacher", "Translator", "Interpreter", "AI Enthusiast"],
      scrollHint: "Scroll",
    },
    about: {
      title: "About me",
      lead:
        "I'm an English teacher, translator and interpreter, currently completing my BA in Translation and Interpretation at Eduardo Mondlane University (UEM).",
      body: [
        "Over the past years I've focused on structured English teaching to adult and young learners, technical translation between English and Portuguese, and consecutive interpretation — always aiming for clarity, accuracy and cultural fit.",
        "Outside the classroom, I founded and manage English With Sebastian / EnglishFlow, a digital English-learning platform through which I develop content, teaching materials and study-support tools.",
        "I have a growing interest in AI applied to education, translation and productivity, reflected in the certifications I've been completing (EY, Microsoft, HP, Vodacom Group and OPEN MOOCs).",
      ],
      focusTitle: "Areas of expertise",
      focusAreas: [
        "English teaching (all levels)",
        "Technical translation English ↔ Portuguese",
        "Consecutive interpretation",
        "Content localisation",
        "Digital educational content creation",
        "Technology and Artificial Intelligence",
      ],
    },
    experience: { title: "Experience", lead: "A path built across the classroom, translation work and content creation." },
    education: { title: "Education", lead: "University education and complementary certifications." },
    skills: { title: "Skills", lead: "Areas I apply in my day-to-day work." },
    certificates: {
      title: "Certificates",
      lead: "A library of professional and academic certifications.",
      searchPlaceholder: "Search certificates…",
      all: "All",
      view: "View certificate",
      download: "Open PDF",
      empty: "No certificates match this search.",
    },
    documents: {
      title: "Professional Documents",
      lead: "CV and cover letter to download; other documents available on request.",
      view: "View",
      download: "Download",
      privateNote: "Private document — available on request.",
      publicNote: "Public document",
      otherLang: "Versão em Português",
    },
    projects: { title: "Projects", lead: "Professional, academic and technology projects." },
    services: { title: "Services", lead: "How I can help you or your organisation." },
    highlights: {
      title: "Highlights",
      items: [
        { number: "+{years}", label: "years of English-teaching experience" },
        { number: "{certs}", label: "certificates and courses completed" },
        { number: "2", label: "working languages: English and Portuguese" },
        { number: "1", label: "digital English-learning platform" },
      ],
    },
    contact: {
      title: "Contact",
      lead: "Available for teaching, translation, interpretation and collaboration projects.",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSubmit: "Send message",
      formNote: "You can also reach me directly by email or WhatsApp.",
      formSending: "Sending…",
      formSuccess: "Message sent! I will reply as soon as possible.",
      formError: "Could not send right now. Please reach me by email or WhatsApp.",
      formMailto: "Opening your email app with the message filled in…",
      location: "Maputo, Mozambique",
    },
    footer: {
      role: "English Teacher · Translator & Interpreter",
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
};
