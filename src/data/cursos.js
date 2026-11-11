import { IMAGENS } from './imagens.js';
import { LINKS } from './links.js';

/* Cursos de tecnologia. Sem "img", o card mostra o ícone "icone". */
export const CURSOS = [
  {
    sigla: 'BSI',
    nome: 'Bacharelado em Sistemas de Informação',
    texto:
      'Forma quem projeta e implanta sistemas de informação: do levantamento do problema com o cliente até o software rodando, passando por banco de dados, redes e gestão de projetos.',
    info: [
      ['schedule', 'Período:', 'Integral'],
      ['timer', 'Carga horária:', '3.060 horas'],
      ['date_range', 'Integralização:', '08 semestres'],
      ['groups', 'Vagas:', '50'],
    ],
    img: IMAGENS.cursoSI,
    imgLabel: 'Ilustração de duas pessoas programando',
    link: LINKS.curriculoSI,
    botao: 'Ver o currículo do curso',
  },
  {
    sigla: 'TADS',
    nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    texto:
      'Curso noturno e mais curto, focado em desenvolver software: programação, banco de dados, engenharia de software e muita prática em laboratório.',
    info: [
      ['dark_mode', 'Período:', 'Noturno'],
      ['timer', 'Carga horária:', '2.010 horas'],
      ['date_range', 'Integralização:', '06 semestres'],
      ['groups', 'Vagas:', '50'],
    ],
    img: IMAGENS.cursoTADS,
    imgLabel: 'Ilustração de duas pessoas desenvolvendo sistemas',
    link: LINKS.curriculoTADS,
    botao: 'Ver o currículo do curso',
  },
  {
    sigla: 'IA',
    nome: 'Inteligência Artificial e Ciência de Dados',
    selo: 'Novo curso',
    texto:
      'Aprendizado de máquina, estatística e processamento de dados. O curso é oferecido junto pela Faculdade de Tecnologia (FT) e pela Faculdade de Ciências Aplicadas (FCA).',
    info: [
      ['schedule', 'Período:', 'Integral'],
      ['timer', 'Carga horária:', '3.240 horas'],
      ['date_range', 'Integralização:', '08 semestres'],
      ['groups', 'Vagas:', '40'],
    ],
    icone: 'neurology',
    link: LINKS.cursoIA,
    botao: 'Conheça o curso',
  },
];
