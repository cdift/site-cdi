import Acordeao from '../../common/Acordeao.jsx';
import Botao from '../../common/Botao.jsx';
import Pinguim from '../../common/Pinguim.jsx';
import { FAQ } from '../../../data/faq.js';

/* As quatro perguntas que mais chegam (bandeco, Intercamp, Circular, Wi-Fi),
   com o Pingu em dúvida e o atalho para o guia completo. */
const PERGUNTAS = FAQ.filter((f) =>
  /bandeco|Barão Geraldo|ônibus entre|Wi-Fi/.test(f.p)
);

export default function Duvidas() {
  const itens = PERGUNTAS.map((f) => ({
    titulo: f.p,
    conteudo: (
      <>
        <p className="text-muted">{f.r}</p>
        {f.link && (
          <Botao variante="link" href={f.link} className="self-start">
            {f.rotulo}
          </Botao>
        )}
      </>
    ),
  }));
  return (
    <section id="duvidas" className="bg-bg-2 py-16 sm:py-24">
      <div className="gutter mx-auto grid max-w-page gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start lg:gap-16">
        <header className="rev flex flex-col items-start gap-3.5">
          <Pinguim
            pose="duvida"
            largura={150}
            alt="Pinguim do CDI com uma dúvida"
            className="-mb-1"
          />
          <h2 className="titulo max-w-[16ch] text-titulo-2">
            As perguntas que mais chegam no corredor
          </h2>
          <p className="max-w-[36ch] text-muted">
            O guia completo tem mapa do campus, grupos de WhatsApp, horas de
            extensão e oportunidades.
          </p>
          <Botao variante="secundario" to="/guia">
            Abrir o guia completo
          </Botao>
        </header>
        <div className="rev" style={{ '--i': 1 }}>
          <Acordeao id="duvidas" itens={itens} inicial={0} />
        </div>
      </div>
    </section>
  );
}
