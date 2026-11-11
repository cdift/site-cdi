import { useState } from 'react';
import Filtro from '../../common/Filtro.jsx';
import Secao from '../../common/Secao.jsx';
import { MEMBROS } from '../../../data/membros.js';

const TODOS = 'Todos';

/* Membros com filtro por área: em vez de sete listas seguidas, o leitor
   escolhe a área que procura (ou vê todos). */
export default function Membros() {
  const [area, setArea] = useState(TODOS);
  const grupos =
    area === TODOS ? MEMBROS : MEMBROS.filter((g) => g.grupo === area);
  const pessoas = grupos.flatMap((g) =>
    g.pessoas.map((p) => ({ ...p, grupo: g.grupo }))
  );
  return (
    <Secao id="membros" fundo="faixa" titulo="Membros da gestão atual">
      <Filtro
        rotulo="Filtrar por área"
        valor={area}
        onChange={setArea}
        className="mb-8"
        opcoes={[TODOS, ...MEMBROS.map((g) => g.grupo)].map((g) => ({
          valor: g,
          rotulo: g,
        }))}
      />
      <ul
        key={area}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 animate__animated animate__fadeIn animate__faster"
      >
        {pessoas.map((p) => (
          <li key={p.nome} className="flex items-center gap-4 card p-3">
            <img
              src={p.foto}
              alt=""
              loading="lazy"
              className="size-16 shrink-0 rounded-xl bg-avatar object-cover"
            />
            <div className="flex min-w-0 flex-col">
              <p className="font-display font-semibold">{p.nome}</p>
              <p className="text-legenda text-muted">
                {p.funcao ? `${p.funcao} · ` : ''}
                {p.grupo}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
