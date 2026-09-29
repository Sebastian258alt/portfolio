/**
 * moments.js
 * Eventos e momentos de reconhecimento (com fotos).
 * Novo momento = nova entrada aqui + fotos em assets/img/gallery/.
 * issued: AAAA-MM só para ordenação (mais recente primeiro); date: texto mostrado.
 * date, place, issued, personal, related e source são opcionais.
 * personal: uma frase tua, em primeira pessoa, mostrada em destaque.
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
    personal: {
      pt: "Receber este certificado pessoalmente, no American Center, foi um marco no meu percurso em Inglês profissional.",
      en: "Receiving this certificate in person at the American Center was a milestone in my professional English journey.",
    },
    related: "cert-english-business",
  },
  {
    id: "american-shelf-uem-music-talk",
    // date: { pt: "Mês de 2026", en: "Month 2026" },  // <- acrescenta a data quando a souberes
    // issued: "2026-MM",                              // <- e a mesma data em formato AAAA-MM
    title: {
      pt: "Conversa sobre economia criativa e carreiras musicais na American Shelf da UEM",
      en: "Talk on the creative economy and music careers at the UEM American Shelf",
    },
    place: {
      pt: "American Shelf, Universidade Eduardo Mondlane",
      en: "American Shelf, Eduardo Mondlane University",
    },
    text: {
      pt: "Albino Mbie, músico americano-moçambicano e professor no Berklee College of Music, conversou com futuros empreendedores criativos e músicos na American Shelf da Universidade Eduardo Mondlane. Com base na sua experiência nos Estados Unidos, destacou a importância da profissionalização das carreiras musicais e realçou as oportunidades para os músicos moçambicanos tirarem partido da economia criativa e desenvolverem as competências tecnológicas necessárias para terem sucesso na indústria musical global.",
      en: "Albino Mbie, an American-Mozambican musician and professor at Berklee College of Music, spoke with future creative entrepreneurs and musicians at the American Shelf at Eduardo Mondlane University. Drawing on his experience in the United States, he stressed the importance of professionalizing music careers and highlighted the opportunities for Mozambican musicians to benefit from the creative economy and build the technology skills needed to succeed in the global music industry.",
    },
    photos: [
      {
        src: "assets/img/gallery/american-shelf-uem-talk.jpg",
        alt: {
          pt: "Fotografia de grupo dos participantes na conversa, em frente a um painel do EducationUSA",
          en: "Group photo of the participants in the talk, in front of an EducationUSA banner",
        },
      },
    ],
    source: {
      label: "U.S. Embassy Maputo — American Center",
      url: "https://mz.usembassy.gov/american-center-2/",
    },
  },
];
