import Botao from '../../common/Botao.jsx';
import { IMAGENS } from '../../../data/imagens.js';
import { LUGARES } from '../../../data/inicio.js';

/* Fotos de visitas e eventos numa faixa que roda devagar (design system:
   .fotos-roda + .letreiro). Pausa com o mouse em cima ou com foco; com
   "reduzir movimento" vira uma faixa que rola para o lado. A segunda cópia
   é só para o loop não ter emenda (aria-hidden). */
const FOTOS = [...IMAGENS.visitas, ...IMAGENS.realizados['Integrações']].slice(
  0,
  10
);

function Faixa({ copia = false }) {
  return (
    <div className="letreiro-faixa" aria-hidden={copia || undefined}>
      {FOTOS.map((src) => (
        <figure key={src}>
          <img src={src} alt="" loading="lazy" />
        </figure>
      ))}
    </div>
  );
}

export default function Visitas() {
  return (
    <section
      id="visitas"
      aria-labelledby="visitas-titulo"
      className="overflow-hidden pt-16 pb-[88px] sm:pt-24"
    >
      <div className="gutter mx-auto max-w-page">
        <header className="rev mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 id="visitas-titulo" className="titulo text-titulo-2">
              O que a gente já fez
            </h2>
            <p className="text-corpo-lg text-muted">
              Integrações, workshops e visitas técnicas a{' '}
              {LUGARES.join(', ').replace(/, ([^,]*)$/, ' e $1')}.
            </p>
          </div>
          <Botao variante="link" to="/eventos">
            Ver eventos realizados
          </Botao>
        </header>
      </div>
      <div className="fotos-roda letreiro py-4">
        <Faixa />
        <Faixa copia />
      </div>
    </section>
  );
}
