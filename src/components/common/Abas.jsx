import { useLayoutEffect, useRef, useState } from 'react';

/* Abas do Uiverse.io by Pradeepsaranbishnoi (ver styles/componentes.css):
   pílula branca com um "glider" que desliza até a aba ativa. Aqui o glider
   é posicionado pelo tamanho real de cada aba. Setas ← → trocam de aba pelo
   teclado, como manda o padrão de tablist.
   opcoes: [{ valor, rotulo, detalhe? }]. "detalhe" é um texto menor embaixo
   (ex.: a data no seletor de dias do cardápio). */
export default function Abas({
  opcoes,
  valor,
  onChange,
  rotulo,
  id,
  className = '',
}) {
  const lista = useRef(null);
  const [glider, setGlider] = useState(null);

  useLayoutEffect(() => {
    const medir = () => {
      const ativo = lista.current?.querySelector('[aria-selected="true"]');
      if (ativo)
        setGlider({ left: ativo.offsetLeft, width: ativo.offsetWidth });
    };
    medir();
    document.fonts?.ready.then(medir);
    window.addEventListener('resize', medir);
    return () => window.removeEventListener('resize', medir);
  }, [valor, opcoes.length]);

  const teclado = (e) => {
    const i = opcoes.findIndex((o) => o.valor === valor);
    const passo = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!passo) return;
    e.preventDefault();
    const prox = opcoes[(i + passo + opcoes.length) % opcoes.length];
    onChange(prox.valor);
    lista.current
      ?.querySelector(`[data-valor="${CSS.escape(String(prox.valor))}"]`)
      ?.focus();
  };

  return (
    <div className={`max-w-full overflow-x-auto p-1 ${className}`}>
      <div
        ref={lista}
        role="tablist"
        aria-label={rotulo}
        onKeyDown={teclado}
        className="abas"
      >
        {glider && (
          <span aria-hidden="true" className="glider" style={glider} />
        )}
        {opcoes.map((o) => {
          const ativo = o.valor === valor;
          return (
            <button
              key={o.valor}
              id={id ? `${id}-${o.valor}` : undefined}
              data-valor={o.valor}
              type="button"
              role="tab"
              aria-selected={ativo}
              tabIndex={ativo ? 0 : -1}
              onClick={() => onChange(o.valor)}
              className="aba"
            >
              {o.rotulo}
              {o.detalhe && (
                <span className="font-mono text-rotulo font-normal text-muted">
                  {o.detalhe}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
