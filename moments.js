/**
 * moments.js
 * Eventos e momentos de reconhecimento (com fotos).
 * Novo momento = nova entrada aqui + fotos em assets/img/gallery/.
 * issued: AAAA-MM só para ordenação (mais recente primeiro); date: texto mostrado.
 */
const MOMENTS_DATA = [
  {
    id: "embassy-mooc-ceremony-2026",
    issued: "2026-06",
    date: { pt: "Junho de 2026", en: "June 2026" },
    title: {
      pt: "Cerimónia de certificados do MOOC English for Business and Entrepreneurship",
      en: "English for Business and Entrepreneurship MOOC certificate ceremony",
    },
    place: {
      pt: "American Center, Embaixada dos EUA em Maputo",
      en: "American Center, U.S. Embassy in Maputo",
    },
    text: {
      pt: "Dezasseis moçambicanos celebraram a conclusão do MOOC English for Business and Entrepreneurship numa cerimónia de entrega de certificados no American Center da Embaixada dos EUA em Maputo, conduzida pela Conselheira de Diplomacia Pública Nafeesah Allen e pelo Assistente de Ensino de Inglês norte-americano Lucas Sousa. Os graduados reforçaram o seu Inglês e desenvolveram competências práticas para o empreendedorismo, o crescimento académico e a carreira. Na primeira visita ao Centro, conheceram também outros recursos e oportunidades de formação nos EUA.",
      en: "Sixteen Mozambicans celebrated completing the English for Business and Entrepreneurship MOOC at a certificate ceremony at the U.S. Embassy's American Center in Maputo, led by Public Diplomacy Counselor Nafeesah Allen and American English Teaching Assistant Lucas Sousa. The graduates strengthened their English while building practical skills for entrepreneurship, academic growth and future careers. On their first visit to the Center, they also connected with additional U.S. educational resources and opportunities.",
    },
    photos: [
      {
        src: "assets/img/gallery/embassy-ceremony-2.jpg",
        alt: {
          pt: "Sebastião com os seus dois certificados, ao lado de dois representantes da Embaixada dos EUA, em frente às bandeiras dos EUA e de Moçambique",
          en: "Sebastião holding his two certificates alongside two U.S. Embassy representatives, in front of the U.S. and Mozambican flags",
        },
      },
      {
        src: "assets/img/gallery/embassy-ceremony-1.jpg",
        alt: {
          pt: "Sebastião a receber o certificado de conclusão no American Center",
          en: "Sebastião receiving his certificate of completion at the American Center",
        },
      },
    ],
    source: {
      label: "U.S. Embassy Maputo (Flickr)",
      url: "https://www.flickr.com/photos/usembassymaputo/55462069272/in/album-72177720335135588/",
    },
    related: "cert-english-business",
  },
];
