/* Pingu, o pinguim do CDI: 15 poses. Cada uma diz quando usar (ver o guia do mascote
   em index.html, seção 6). Os arquivos ficam em src/assets/img/pinguim/ e são
   encontrados pelo import.meta.glob de data/imagens.js. */
import { img } from './imagens.js';

export const PINGUINS = {
  base: {
    src: img('pinguim/pinguim-01-base.webp'),
    alt: "Pinguim do CDI em pé, olhando para frente",
    papel: "Presença", // Avatar, rodapé, loading curto
    anim: "pg-flutuar",
  },
  aceno: {
    src: img('pinguim/pinguim-02-aceno.webp'),
    alt: "Pinguim do CDI piscando e acenando",
    papel: "Boas-vindas", // Herói, boas-vindas, e-mails
    anim: "pg-balancar",
  },
  apontando: {
    src: img('pinguim/pinguim-03-apontando.webp'),
    alt: "Pinguim do CDI apontando para o lado",
    papel: "Direção", // Tour, CTA lateral, novidades
    anim: "pg-balancar",
  },
  comemorando: {
    src: img('pinguim/pinguim-04-comemorando.webp'),
    alt: "Pinguim do CDI comemorando com os braços para cima",
    papel: "Sucesso", // Toast de sucesso, confirmações
    anim: "pg-pular",
  },
  lendo: {
    src: img('pinguim/pinguim-05-lendo.webp'),
    alt: "Pinguim do CDI sentado lendo um livro azul",
    papel: "Conteúdo longo", // Guia, FAQ, documentos
    anim: "pg-flutuar",
  },
  duvida: {
    src: img('pinguim/pinguim-06-duvida.webp'),
    alt: "Pinguim do CDI com a mão no queixo e um ponto de interrogação",
    papel: "Ajuda", // FAQ, busca vazia, ajuda
    anim: "pg-balancar",
  },
  bravo: {
    src: img('pinguim/pinguim-07-bravo.webp'),
    alt: "Pinguim do CDI de braços cruzados, com cara de bravo",
    papel: "Erro", // Erro de sistema, 500
    anim: "",
  },
  notebook: {
    src: img('pinguim/pinguim-08-notebook.webp'),
    alt: "Pinguim do CDI usando um notebook",
    papel: "Tecnologia", // Herói, Projetos, carregando
    anim: "pg-flutuar",
  },
  ideia: {
    src: img('pinguim/pinguim-09-ideia.webp'),
    alt: "Pinguim do CDI com uma lâmpada acesa sobre a cabeça",
    papel: "Sugestão", // Sugestões, dicas, novidades
    anim: "pg-balancar",
  },
  joinha: {
    src: img('pinguim/pinguim-10-joinha.webp'),
    alt: "Pinguim do CDI fazendo joinha",
    papel: "Aprovação", // Faça parte, confirmações leves
    anim: "pg-balancar",
  },
  correndo: {
    src: img('pinguim/pinguim-11-correndo.webp'),
    alt: "Pinguim do CDI correndo, deixando uma nuvem de poeira",
    papel: "Movimento", // Circular, loading, prazo
    anim: "pg-correr",
  },
  sentado: {
    src: img('pinguim/pinguim-12-sentado.webp'),
    alt: "Pinguim do CDI sentado sorrindo de olhos fechados",
    papel: "Calma", // Sobre, campus, fim de página
    anim: "pg-flutuar",
  },
  dormindo: {
    src: img('pinguim/pinguim-13-dormindo.webp'),
    alt: "Pinguim do CDI dormindo de bruços, com Zzz",
    papel: "Vazio", // Estado vazio, encerrado, fora do horário
    anim: "pg-respirar",
  },
  espiando: {
    src: img('pinguim/pinguim-14-espiando.webp'),
    alt: "Pinguim do CDI espiando por trás de uma parede",
    papel: "Descoberta", // Bordas de card, easter egg
    anim: "pg-espiar",
  },
  costas: {
    src: img('pinguim/pinguim-15-costas.webp'),
    alt: "Pinguim do CDI de costas",
    papel: "Ausência", // 404, em breve, manutenção
    anim: "",
  },
};

/* Pose recomendada por situação (use no lugar de escolher no olho). */
export const POSE_POR_SITUACAO = {
  boasVindas: 'aceno',
  sucesso: 'comemorando',
  confirmacaoLeve: 'joinha',
  vazio: 'dormindo',
  erroDeSistema: 'bravo',
  naoEncontrado: 'costas',
  carregando: 'correndo',
  carregandoDados: 'notebook',
  ajuda: 'duvida',
  conteudoLongo: 'lendo',
  novidade: 'ideia',
  direcionar: 'apontando',
  descoberta: 'espiando',
  pausa: 'sentado',
  padrao: 'base',
};
