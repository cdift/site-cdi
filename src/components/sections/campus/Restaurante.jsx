import Botao from '../../common/Botao.jsx';
import Secao from '../../common/Secao.jsx';
import Selo from '../../common/Selo.jsx';
import CardapioRU from './CardapioRU.jsx';
import { REFEICOES } from '../../../data/campus.js';
import { LINKS } from '../../../data/links.js';
import { useAgora } from '../../../hooks/useAgora.js';
import { situacaoRefeicao } from '../../../utils/tempo.js';

/* Restaurante universitário: horários e preços, cardápio da semana e dicas. */
export default function Restaurante() {
  const agora = useAgora();
  return (
    <Secao
      id="ru"
      titulo="O que tem no bandeco"
      descricao="Cardápio atualizado automaticamente a partir do site da Prefeitura do campus."
    >
      <div className="flex flex-col gap-6">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {REFEICOES.map((r) => {
            const aberto =
              situacaoRefeicao(r.horario, agora).estado === 'servindo';
            return (
              <li key={r.nome} className="flex flex-col gap-1 bg-surface p-5">
                <span className="flex items-center justify-between gap-2">
                  <span className="font-display font-semibold">{r.nome}</span>
                  {aberto && <Selo tipo="agora">servindo</Selo>}
                </span>
                <span className="font-mono text-corpo-lg tabular-nums">
                  {r.horario.replace(' - ', '–')}
                </span>
                <span className="font-mono text-corpo-s text-muted">
                  {r.valor}
                </span>
              </li>
            );
          })}
        </ul>

        <CardapioRU />

        <dl className="grid gap-6 md:grid-cols-2">
          {[
            [
              'Fim de semana',
              'Abre o restaurante do Campus II (FCA). Sábado: café 8h–9h, almoço 11h30–13h30 e jantar 18h–19h. Domingo e feriado: café 8h–9h e almoço 11h30–13h30.',
              LINKS.ruHorarios,
              'Horários oficiais',
            ],
            [
              'Como pagar',
              'A refeição é descontada da carteirinha. Para pôr crédito, use as estações de recarga ao lado das entradas, com dinheiro ou PIX pelo app Unicamp Serviços.',
              LINKS.ruRecarga,
              'Como recarregar',
            ],
          ].map(([t, texto, href, rot]) => (
            <div
              key={t}
              className="flex flex-col gap-2 border-t border-line pt-4"
            >
              <dt className="font-display font-semibold">{t}</dt>
              <dd className="flex flex-col gap-2 text-corpo-s text-muted">
                {texto}
                <Botao variante="link" href={href} className="self-start">
                  {rot}
                </Botao>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Secao>
  );
}
