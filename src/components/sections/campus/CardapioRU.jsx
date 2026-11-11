import { useState } from 'react';
import Abas from '../../common/Abas.jsx';
import Botao from '../../common/Botao.jsx';
import { useAgora } from '../../../hooks/useAgora.js';
import { useCardapio } from '../../../hooks/useDados.js';
import { CAMPOS_PRATO } from '../../../data/cardapio.js';
import { LINKS } from '../../../data/links.js';
import { refeicaoAtual } from '../../../utils/tempo.js';

const TIPOS = [
  ['padrao', 'Padrão'],
  ['vegano', 'Vegano'],
];

/* Cardápio da semana: abas de dia (abre no dia de hoje) e de refeição (abre
   no almoço até as 14h e no jantar depois), com o padrão e o vegano lado a lado. */
export default function CardapioRU() {
  const agora = useAgora();
  const { dados: cardapio } = useCardapio();
  const [diaEscolhido, setDiaEscolhido] = useState(null);
  const [refeicao, setRefeicao] = useState(() => refeicaoAtual(agora));
  const dia =
    cardapio.dias.find((d) => d.data === diaEscolhido) ??
    cardapio.dias.find((d) => d.data === agora.iso) ??
    cardapio.dias[0];
  const menu = dia?.[refeicao];

  return (
    <div id="cardapio" className="overflow-hidden card">
      <div className="flex flex-col gap-4 border-b border-line p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <Abas
          id="cardapio-dia"
          rotulo="Dia"
          valor={dia?.data}
          onChange={setDiaEscolhido}
          opcoes={cardapio.dias.map((d) => ({
            valor: d.data,
            rotulo: d.data === agora.iso ? 'Hoje' : d.rotulo,
            detalhe: d.dia,
          }))}
        />
        <Abas
          id="refeicao"
          rotulo="Refeição"
          valor={refeicao}
          onChange={setRefeicao}
          opcoes={[
            { valor: 'almoco', rotulo: 'Almoço' },
            { valor: 'jantar', rotulo: 'Jantar' },
          ]}
        />
      </div>

      <div
        key={`${dia?.data}-${refeicao}`}
        className="animate__animated animate__fadeIn animate__faster"
      >
        {!menu ? (
          <p className="p-8 text-center text-muted">
            Não há {refeicao === 'jantar' ? 'jantar' : 'almoço'} no Campus I
            neste dia.
            {dia?.fds &&
              ' Aos fins de semana, o restaurante aberto é o do Campus II (FCA).'}
          </p>
        ) : (
          <div className="grid divide-y divide-line md:grid-cols-2 md:divide-x md:divide-y-0">
            {TIPOS.map(([k, t]) => (
              <div key={k} className="flex flex-col gap-4 p-5 sm:p-7">
                <p className="font-mono text-rotulo uppercase tracking-[0.08em] text-muted">
                  {t}
                </p>
                <p className="titulo text-titulo-3">{menu[k].principal}</p>
                <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-2 text-corpo-s">
                  {CAMPOS_PRATO.filter(([c]) => c !== 'principal').map(
                    ([campo, rot]) => (
                      <div key={campo} className="contents">
                        <dt className="text-muted">{rot}</dt>
                        <dd>{menu[k][campo]}</dd>
                      </div>
                    )
                  )}
                </dl>
                {menu[k].nota && (
                  <p className="rounded-lg bg-bg px-3 py-2 text-legenda text-muted">
                    {menu[k].nota}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 border-t border-line bg-bg px-5 py-4 text-corpo-s sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <p>
          <span className="text-muted">Café da manhã:</span> {cardapio.cafe}
        </p>
        <Botao
          variante="link"
          href={LINKS.cardapio}
          className="shrink-0 !text-muted"
        >
          Fonte: Prefeitura Universitária
        </Botao>
      </div>
    </div>
  );
}
