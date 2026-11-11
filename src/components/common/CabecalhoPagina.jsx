/* Abertura das páginas internas: título, texto curto e, à direita,
   algo próprio da página (um atalho, um resumo, uma busca). */
export default function CabecalhoPagina({ titulo, texto, children }) {
  return (
    <section className="border-b border-line bg-surface">
      <div className="gutter mx-auto grid max-w-page gap-10 pt-14 pb-12 sm:pt-20 sm:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end">
        <div className="flex max-w-[720px] flex-col gap-4">
          <h1 className="titulo text-titulo-1">{titulo}</h1>
          {texto && <p className="text-corpo-lg text-muted">{texto}</p>}
        </div>
        {children && <div className="min-w-0">{children}</div>}
      </div>
    </section>
  );
}
