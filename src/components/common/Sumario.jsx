import { useSecaoAtiva } from '../../hooks/useSecaoAtiva.js';

/* Índice das páginas longas (Guia, Vida no campus), no estilo do filtro do
   Uiverse (Yaya12085, ver styles/componentes.css). Fica grudado embaixo do
   cabeçalho e marca a seção em que o leitor está. No celular vira uma fileira
   de atalhos que rola para o lado. itens: [{ id, rotulo }] */
export default function Sumario({ itens }) {
  const ativa = useSecaoAtiva(itens.map((i) => i.id));
  return (
    <nav
      aria-label="Nesta página"
      className="sticky top-0 z-20 border-b border-line bg-bg"
    >
      <div className="gutter mx-auto max-w-page overflow-x-auto py-2">
        <ul className="filtro !flex-nowrap !inline-flex">
          {itens.map((i) => {
            const on = i.id === ativa;
            return (
              <li key={i.id} className="shrink-0">
                <a
                  href={`#${i.id}`}
                  aria-current={on ? 'location' : undefined}
                  className="opcao font-display"
                >
                  {i.rotulo}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
