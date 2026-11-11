import Botao from '../../common/Botao.jsx';
import Icon from '../../common/Icon.jsx';
import Secao from '../../common/Secao.jsx';
import { INTERCAMP_DICAS, INTERCAMP_HORARIOS } from '../../../data/campus.js';
import { LINKS } from '../../../data/links.js';

/* Ônibus Intercamp (Limeira ↔ Barão Geraldo): regras, horários e reserva. */
export default function Intercamp() {
  return (
    <Secao
      id="intercamp"
      titulo="Para ir a Barão Geraldo"
      descricao="Ônibus gratuito da Unicamp entre Limeira (FT, FCA e Cotil) e o campus de Campinas. Precisa de reserva."
      acao={
        <div className="flex flex-wrap gap-2">
          <Botao href={LINKS.intercampReserva}>Reservar</Botao>
          <Botao variante="secundario" href={LINKS.intercampHorarios}>
            Horários oficiais
          </Botao>
        </div>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <ul className="flex flex-col divide-y divide-line border-y border-line">
          {INTERCAMP_DICAS.map(([ic, t]) => (
            <li key={ic} className="flex gap-4 py-4">
              <Icon name={ic} className="mt-0.5 shrink-0 text-muted" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3">
          {INTERCAMP_HORARIOS.map((h) => (
            <div key={h.trajeto} className="card p-5">
              <p className="mb-3 font-display font-semibold">{h.trajeto}</p>
              <ul className="flex flex-wrap gap-2">
                {h.saidas.split(' · ').map((s) => (
                  <li
                    key={s}
                    className="rounded-md bg-bg px-2 py-1 font-mono text-corpo-s tabular-nums"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-legenda text-muted">
            Dias úteis. Em Campinas, o ponto é o estacionamento da Biblioteca
            Central (BCCL). Confira a página oficial antes de viajar.
          </p>
        </div>
      </div>
    </Secao>
  );
}
