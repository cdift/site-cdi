/* Imagens (pasta src/assets/img/). O Vite gera a URL final de cada arquivo no build.
   Para trocar uma imagem, substitua o arquivo ou o caminho aqui. */
const ARQUIVOS = import.meta.glob('../assets/img/**/*.{jpg,png,svg,webp}', {
  eager: true,
  import: 'default',
});

export const img = (caminho) => ARQUIVOS[`../assets/img/${caminho}`];
export const foto = (n) => img(`fotos/${String(n).padStart(2, '0')}.jpg`);

export const IMAGENS = {
  logo: img('logo.svg'),
  logoEscuro: img('logo-escuro.svg'),
  logoBranco: img('logo-branco.svg'),
  logoAzul: img('logo-azul.png'), // logo oficial, no cabeçalho
  fotoEquipe: foto(18),
  capaVideo: foto(18),
  visitas: [4, 20, 22, 15, 0, 2, 3, 19, 16, 17, 21, 7].map(foto),
  cursoSI: img('bsi.webp'),
  cursoTADS: img('tads.webp'),
  realizados: {
    Integrações: [25, 26, 27, 29, 30, 13, 14, 1, 6].map(foto),
    Workshop: [9, 10, 8].map(foto),
    Campeonatos: [12, 23, 31].map(foto),
    Reuniões: [11, 24, 28].map(foto),
  },
  mapaCampus: img('mapa.jpg'),
  globo: img('aviao.svg'),
  check: img('check.svg'),
  rotaCircular: {
    diurna: img('circular/circular-diurno.jpg'),
    noturna: img('circular/circular-noturno.jpg'),
  },
  redes: {
    instagram: img('instagram.svg'),
    gmail: img('gmail.svg'),
    linkedin: img('linkedin.svg'),
  },
};
