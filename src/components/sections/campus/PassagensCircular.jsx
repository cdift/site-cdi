import { proximasPassagens } from '../../../utils/circular.js';
import { formataEspera } from '../../../utils/tempo.js';

/* Próxima passagem do Circular em cada parada do trajeto (FCA, FT lateral,
   AABB, chegada na FT), contando o ônibus que já saiu da FT. A parada com a
   passagem mais próxima fica em destaque. "escuro": para o painel azul-marinho.
   "semSaida": tira a linha da saída da FT quando ela já aparece em destaque. */
export default function PassagensCircular({
  agora,
  viagens,
  escuro = false,
  semSaida = false,
}) {
  const lista = proximasPassagens(agora, viagens).filter(
    (x) => !(semSaida && x.parada.chave === 'ft')
  );
  if (!lista.length) return null;
  const comHora = lista.filter((x) => x.hora);
  const maisPerto = comHora.length
    ? Math.min(...comHora.map((x) => x.espera))
    : null;
  const linha = escuro ? 'border-white/15' : 'border-line';
  const apoio = escuro ? 'text-on-dark/65' : 'text-muted';
  return (
    <ol className={`flex flex-col border-t ${linha}`}>
      {lista.map((x, k) => {
        const destaque = x.hora && x.espera === maisPerto;
        return (
          <li
            key={x.parada.chave}
            className={`linha-entra grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3 border-b py-2.5 ${linha}`}
            style={{ '--i': k + 1 }}
          >
            <span className={destaque ? '' : apoio}>
              {x.parada.nome}
              {x.parada.detalhe && (
                <span className={apoio}> · {x.parada.detalhe}</span>
              )}
            </span>
            <b
              className={`font-mono font-medium ${destaque ? (escuro ? 'text-white' : 'text-accent') : ''}`}
            >
              {x.hora ?? '—'}
            </b>
            <span className={`col-span-2 text-legenda ${apoio}`}>
              {x.hora
                ? `${formataEspera(x.espera)} · ônibus ${x.onibus}${x.emRota ? ', já saiu da FT' : ''}`
                : 'sem mais passagens hoje'}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
