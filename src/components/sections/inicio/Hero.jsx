import { Link } from 'react-router-dom';
import Botao from '../../common/Botao.jsx';
import Icon from '../../common/Icon.jsx';
import Pinguim from '../../common/Pinguim.jsx';

/* Atalhos que flutuam em volta do Pingu (design system: .chip-flutuante). */
const CHIPS = [
  {
    to: '/campus#cardapio',
    icone: 'restaurant',
    rotulo: 'Bandeco',
    pos: 'top-[20%] -right-[3%]',
    i: 5,
  },
  {
    to: '/campus#circular',
    icone: 'directions_bus',
    rotulo: 'Circular',
    pos: 'top-1/2 -right-[2%] sm:-right-[8%]',
    i: 6,
  },
  {
    to: '/eventos',
    icone: 'event',
    rotulo: 'Eventos',
    pos: 'bottom-[15%] right-[2%]',
    i: 7,
  },
];

/* Abertura da página inicial (protótipo do design system): o que o site
   resolve, por onde começar e o Pingu no notebook com os atalhos em volta. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface">
      <div className="gutter mx-auto grid max-w-page items-center gap-10 pt-12 pb-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:pt-[72px] lg:pb-20">
        <div className="flex flex-col items-start gap-6">
          <h1 className="titulo rev text-display" style={{ '--i': 1 }}>
            Cardápio, circular, eventos e professores da FT.{' '}
            <span className="destaque-mao whitespace-nowrap">
              Num lugar só.
              <svg viewBox="0 0 200 14" className="desenhar" aria-hidden="true">
                <path
                  pathLength="1"
                  d="M3 8 C 24 2, 42 13, 66 7 S 110 2, 132 8 S 170 13, 197 5"
                />
              </svg>
            </span>
          </h1>
          <p
            className="rev max-w-[54ch] text-corpo-lg text-muted"
            style={{ '--i': 2 }}
          >
            O CDI representa os alunos de BSI, TADS e IA. Este site junta o que
            a gente mais responde no corredor: o que tem no bandeco, quando
            passa o próximo ônibus e onde fica cada sala.
          </p>
          <div className="rev flex flex-wrap gap-3.5 pt-1" style={{ '--i': 3 }}>
            <Botao variante="bloco" to="/guia">
              Guia do ingressante
            </Botao>
            <Botao variante="secundario" to="/campus">
              Vida no campus
            </Botao>
          </div>
        </div>

        <div className="relative mx-auto grid aspect-square w-full max-w-[470px] place-items-center">
          <div
            className="rev-pop absolute inset-[6%] rounded-full bg-sky-soft shadow-[inset_0_0_0_2px_var(--sky)]"
            style={{ '--i': 2 }}
          />
          <Pinguim
            pose="notebook"
            className="rev-pop relative mt-[4%] w-[62%]"
            style={{ '--i': 3 }}
            loading="eager"
          />
          <span
            className="balao rev-pop absolute top-[7%] -left-[2%] origin-[20%_100%]"
            style={{ '--i': 6 }}
          >
            Bora ver o bandeco de hoje?
          </span>
          {CHIPS.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className={`chip-flutuante rev-mola text-legenda sm:text-corpo-s ${c.pos}`}
              style={{ '--i': c.i }}
            >
              <Icon name={c.icone} className="!text-[18px] text-accent" />
              {c.rotulo}
            </Link>
          ))}
          <a
            href="#hoje"
            className="selo-giratorio absolute -left-[2%] bottom-0 !size-[88px] sm:!size-[112px]"
            aria-label="Rolar para Hoje no campus"
          >
            <svg
              className="girar-lento"
              viewBox="0 0 112 112"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="circulo-rolar"
                  d="M56 56 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0"
                />
              </defs>
              <text>
                <textPath href="#circulo-rolar" startOffset="0">
                  ROLE PARA EXPLORAR · ROLE PARA EXPLORAR ·
                </textPath>
              </text>
            </svg>
            <span className="seta">
              <Icon name="arrow_downward" className="!text-[22px]" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
