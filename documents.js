/**
 * documents.js
 * Documentos mostrados na secção "Documentos Profissionais".
 *
 * visibility: "public"  -> ficheiro publicado (aparece Visualizar/Descarregar).
 *             "private" -> nenhum ficheiro é guardado no site; o cartão pede contacto.
 *
 * file: { pt: "...", en: "..." }  -> o botão usa o ficheiro do idioma activo
 *       e mostra um link para a outra versão.
 *
 * ATENÇÃO: nunca coloques aqui (nem em assets/) o Bilhete de Identidade,
 * histórico académico com número de estudante ou outros documentos pessoais.
 */
const DOCUMENTS_DATA = [
  {
    id: "doc-cv",
    name: { pt: "Curriculum Vitae", en: "Curriculum Vitae" },
    type: "PDF",
    icon: "cv",
    visibility: "public",
    file: { pt: "assets/docs/cv-pt.pdf", en: "assets/docs/cv-en.pdf" },
  },
  {
    id: "doc-cover-letter",
    name: { pt: "Carta de Apresentação", en: "Cover Letter" },
    type: "PDF",
    icon: "letter",
    visibility: "public",
    file: { pt: "assets/docs/carta-apresentacao-pt.pdf", en: "assets/docs/cover-letter-en.pdf" },
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
