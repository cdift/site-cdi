import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';

/* Grade de fotos. Clicar abre a foto grande num <dialog> nativo; setas do
   teclado passam as fotos e Esc fecha. "limite" mostra só as primeiras e um
   botão "+N" que abre a galeria a partir dali. */
export default function Galeria({ fotos, rotulo, limite = fotos.length }) {
  const dialogo = useRef(null);
  const [atual, setAtual] = useState(null);
  const n = fotos.length;

  useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (atual !== null && !d.open) d.showModal();
    if (atual === null && d.open) d.close();
  }, [atual]);

  const passar = (passo) => setAtual((i) => (i + passo + n) % n);
  const teclado = (e) => {
    if (e.key === 'ArrowRight') passar(1);
    if (e.key === 'ArrowLeft') passar(-1);
  };
  const visiveis = fotos.slice(0, limite);

  return (
    <>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {visiveis.map((src, i) => {
          const resto = i === limite - 1 && n > limite ? n - limite : 0;
          return (
            <li key={src}>
              <button
                type="button"
                onClick={() => setAtual(i)}
                className="card card-interativo relative block aspect-[4/3] w-full overflow-hidden !bg-avatar"
                aria-label={`Abrir foto ${i + 1} de ${n}: ${rotulo}`}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {resto > 0 && (
                  <span className="absolute inset-0 grid place-items-center bg-dark/60 font-mono text-titulo-3 text-white">
                    +{resto}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogo}
        onClose={() => setAtual(null)}
        onKeyDown={teclado}
        onClick={(e) => e.target === dialogo.current && setAtual(null)}
        aria-label={rotulo}
        className="m-auto max-h-[92vh] w-[min(1100px,94vw)] bg-transparent p-0 backdrop:bg-dark/85"
      >
        {atual !== null && (
          <figure className="flex flex-col gap-3">
            <img
              src={fotos[atual]}
              alt={`${rotulo}, foto ${atual + 1} de ${n}`}
              className="max-h-[78vh] w-full rounded-xl object-contain"
            />
            <figcaption className="flex items-center justify-between gap-4 text-white">
              <span className="font-mono text-legenda">
                {rotulo} · {atual + 1}/{n}
              </span>
              <span className="flex gap-2">
                {[
                  ['chevron_left', 'Foto anterior', -1],
                  ['chevron_right', 'Próxima foto', 1],
                ].map(([ic, t, p]) => (
                  <button
                    key={ic}
                    type="button"
                    onClick={() => passar(p)}
                    aria-label={t}
                    className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <Icon name={ic} />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setAtual(null)}
                  aria-label="Fechar"
                  className="grid size-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Icon name="close" />
                </button>
              </span>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
