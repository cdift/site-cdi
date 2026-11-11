import Acordeao from '../../common/Acordeao.jsx';
import Botao from '../../common/Botao.jsx';
import Secao from '../../common/Secao.jsx';
import { FAQ } from '../../../data/faq.js';

/* Perguntas frequentes em acordeão (abre uma por vez). */
export default function PerguntasFrequentes() {
  const itens = FAQ.map((f) => ({
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
    <Secao id="faq" fundo="faixa" titulo="Perguntas que todo calouro faz">
      <div className="max-w-[860px]">
        <Acordeao id="faq" itens={itens} inicial={0} />
      </div>
    </Secao>
  );
}
