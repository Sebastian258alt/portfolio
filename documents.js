/**
 * documents.js
 * Professional documents shown in the "Documentos Profissionais" section.
 *
 * visibility: "public"  -> file path is used directly, visible to everyone.
 *             "private" -> no public file path is stored here; the card shows
 *                          a "request" note and (optionally) mailto/WhatsApp
 *                          link instead of a direct download, so sensitive
 *                          files are never exposed on the public site.
 */
const DOCUMENTS_DATA = [
  {
    id: "doc-cv-pt",
    name: { pt: "Curriculum Vitae (Português)", en: "Curriculum Vitae (Portuguese)" },
    type: "PDF",
    icon: "cv",
    visibility: "public",
    file: "assets/docs/cv-pt.pdf",
  },
  {
    id: "doc-cv-en",
    name: { pt: "Curriculum Vitae (Inglês)", en: "Curriculum Vitae (English)" },
    type: "PDF",
    icon: "cv",
    visibility: "public",
    file: "assets/docs/cv-en.pdf",
  },
  {
    id: "doc-portfolio",
    name: { pt: "Portefólio de Tradução", en: "Translation Portfolio" },
    type: "PDF",
    icon: "portfolio",
    visibility: "public",
    file: "assets/docs/portfolio.pdf",
  },
  {
    id: "doc-diploma",
    name: { pt: "Diploma / Declaração Académica", en: "Diploma / Academic Statement" },
    type: "PDF",
    icon: "diploma",
    visibility: "private",
    file: null,
  },
  {
    id: "doc-reference",
    name: { pt: "Cartas de Recomendação", en: "Reference Letters" },
    type: "PDF",
    icon: "letter",
    visibility: "private",
    file: null,
  },
];
