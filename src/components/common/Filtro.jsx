/* Filtro do Uiverse.io by Yaya12085 (ver styles/componentes.css): caixa
   cinza com as opções; a escolhida fica branca e em negrito. Quebra linha
   quando não cabe. opcoes: [{ valor, rotulo }]. "alternar": clicar de novo
   na opção escolhida desmarca (onChange recebe null). */
export default function Filtro({
  opcoes,
  valor,
  onChange,
  rotulo,
  alternar = false,
  className = '',
}) {
  return (
    <div role="group" aria-label={rotulo} className={`filtro ${className}`}>
      {opcoes.map((o) => {
        const on = o.valor === valor;
        return (
          <button
            key={o.valor}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(on && alternar ? null : o.valor)}
            className="opcao font-display"
          >
            {o.rotulo}
          </button>
        );
      })}
    </div>
  );
}
