import { useRevelar } from '../../hooks/useRevelar.js';

/* Bloco de conteúdo das páginas: título, texto curto e uma ação
   opcional à direita, seguidos do conteúdo. "fundo": 'papel' (padrão),
   'faixa' (cinza-claro, para alternar) ou 'escuro' (azul-marinho). */
const FUNDOS = {
  papel: '',
  faixa: 'bg-bg-2',
  escuro: 'bg-dark text-on-dark',
};

export default function Secao({
  id,
  titulo,
  descricao,
  acao,
  fundo = 'papel',
  className = '',
  children,
}) {
  const ref = useRevelar();
  return (
    <section id={id} className={`${FUNDOS[fundo]} ${className}`}>
      <div className="gutter mx-auto max-w-page py-16 sm:py-24">
        {titulo && (
          <header
            ref={ref}
            className="mb-10 flex flex-col gap-6 sm:mb-12 md:flex-row md:items-end md:justify-between"
          >
            <div className="flex max-w-[680px] flex-col gap-3">
              <h2 className="titulo text-titulo-2">{titulo}</h2>
              {descricao && (
                <p
                  className={`text-corpo-lg ${fundo === 'escuro' ? 'text-on-dark/80' : 'text-muted'}`}
                >
                  {descricao}
                </p>
              )}
            </div>
            {acao && <div className="shrink-0">{acao}</div>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
