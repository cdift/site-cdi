import Botao from '../../common/Botao.jsx';
import Secao from '../../common/Secao.jsx';
import { OPORTUNIDADES } from '../../../data/guia.js';
import { IMAGENS } from '../../../data/imagens.js';

/* Intercâmbio e iniciação científica. */
export default function Oportunidades() {
  return (
    <Secao id="oportunidades" titulo="Intercâmbio e iniciação científica">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_220px] lg:gap-12">
        {OPORTUNIDADES.map((o) => (
          <div
            key={o.titulo}
            className="flex flex-col gap-4 border-t border-fg pt-6"
          >
            <h3 className="titulo text-titulo-3">{o.titulo}</h3>
            <p className="text-muted">{o.texto}</p>
            <Botao variante="link" href={o.link} className="self-start">
              {o.rotulo}
            </Botao>
          </div>
        ))}
        <img
          src={IMAGENS.globo}
          alt=""
          loading="lazy"
          className="mx-auto hidden w-full max-w-[220px] opacity-80 lg:block"
        />
      </div>
    </Secao>
  );
}
