import { useState } from 'react';
import { SETORES, SETORES_POS } from '../../../data/guia.js';
import { IMAGENS } from '../../../data/imagens.js';

/* Mapa do campus com a lista de setores ao lado. Lista e mapa estão ligados:
   passar o mouse (ou o foco do teclado) num item acende o ponto no mapa e
   vice-versa; clicar fixa o destaque. O nome aparece junto ao ponto. */
export default function MapaInterativo() {
  const [fixo, setFixo] = useState(null);
  const [sobre, setSobre] = useState(null);
  const foco = sobre ?? fixo;
  const alternar = (k) => setFixo(fixo === k ? null : k);
  const eventos = (k) => ({
    onMouseEnter: () => setSobre(k),
    onMouseLeave: () => setSobre(null),
    onFocus: () => setSobre(k),
    onBlur: () => setSobre(null),
    onClick: () => alternar(k),
  });

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
      <div className="relative overflow-hidden card lg:sticky lg:top-24">
        <img
          src={IMAGENS.mapaCampus}
          alt="Mapa aéreo do campus da FT com os setores numerados de 1 a 21"
          className="block h-auto w-full"
        />
        {foco !== null && (
          <span aria-hidden="true" className="absolute inset-0 bg-dark/25" />
        )}
        {SETORES.map((setor, k) => {
          const on = foco === k;
          const [x, y] = SETORES_POS[k];
          return (
            <button
              key={setor}
              id={`mapa-ponto-${k + 1}`}
              type="button"
              aria-pressed={fixo === k}
              aria-label={`${k + 1}: ${setor}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              className={`absolute aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full ${on ? 'animate__animated animate__zoomIn animate__faster z-10 w-[6.5%] bg-white/30 ring-[3px] ring-alert' : 'w-[4.2%] hover:ring-2 hover:ring-white'}`}
              {...eventos(k)}
            />
          );
        })}
        {foco !== null && (
          <span
            key={foco}
            className="animate__animated animate__fadeIn animate__faster pointer-events-none absolute z-20 -translate-x-1/2 rounded-md bg-dark px-2 py-1 text-legenda font-semibold whitespace-nowrap text-white shadow-card"
            style={{
              left: `${Math.min(Math.max(SETORES_POS[foco][0], 18), 82)}%`,
              top: `calc(${SETORES_POS[foco][1]}% + 4.5%)`,
            }}
          >
            <span className="font-mono">{foco + 1}</span> · {SETORES[foco]}
          </span>
        )}
      </div>

      <div className="flex min-w-0 flex-col gap-3">
        <p className="text-corpo-s text-muted" aria-live="polite">
          {fixo === null
            ? 'Passe o mouse ou toque num setor para achar no mapa.'
            : `Destacado: ${fixo + 1}. ${SETORES[fixo]}`}
        </p>
        <ol className="grid gap-0.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {SETORES.map((s, k) => {
            const on = foco === k;
            return (
              <li key={s}>
                <button
                  id={`setor-${k + 1}`}
                  type="button"
                  aria-pressed={fixo === k}
                  className={`flex w-full items-center gap-3 rounded-lg px-2 py-1.5 text-left ${on ? 'bg-accent-soft text-fg' : 'text-muted hover:text-fg'}`}
                  {...eventos(k)}
                >
                  <span
                    className={`grid size-6 shrink-0 place-items-center rounded-full font-mono text-[11px] tabular-nums ${on ? 'bg-alert text-white' : 'bg-bg-2 text-fg'}`}
                  >
                    {k + 1}
                  </span>
                  <span className="text-corpo-s leading-tight">{s}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
