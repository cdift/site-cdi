import { useState } from 'react';
import Abas from '../../common/Abas.jsx';
import Botao from '../../common/Botao.jsx';
import Pinguim from '../../common/Pinguim.jsx';
import Secao from '../../common/Secao.jsx';
import Selo from '../../common/Selo.jsx';
import { CURSOS } from '../../../data/cursos.js';

/* Os três cursos em abas (um de cada vez) e, embaixo, a tabela comparativa
   do design system com período, carga, duração e vagas lado a lado. */
const LINHAS = ['Período:', 'Carga horária:', 'Integralização:', 'Vagas:'];
const valor = (curso, chave) => curso.info.find(([, k]) => k === chave)?.[2];

export default function Cursos() {
  const [sigla, setSigla] = useState(CURSOS[0].sigla);
  const c = CURSOS.find((x) => x.sigla === sigla);
  return (
    <Secao
      id="cursos"
      fundo="faixa"
      titulo="Três cursos de tecnologia na FT"
      acao={
        <Abas
          id="curso"
          rotulo="Curso"
          valor={sigla}
          onChange={setSigla}
          opcoes={CURSOS.map((x) => ({ valor: x.sigla, rotulo: x.sigla }))}
        />
      }
    >
      <article
        key={c.sigla}
        role="tabpanel"
        aria-labelledby={`curso-${c.sigla}`}
        className="card grid gap-8 p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center animate__animated animate__fadeIn animate__faster"
      >
        <div className="flex flex-col gap-5">
          {c.selo && <Selo tipo="novo">{c.selo}</Selo>}
          <h3 className="titulo text-titulo-2">{c.nome}</h3>
          <p className="max-w-[60ch] text-corpo-lg text-muted">{c.texto}</p>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {c.info.map(([, chave, v]) => (
              <div key={chave} className="flex flex-col gap-1 bg-surface p-3">
                <dt className="text-legenda text-muted">
                  {chave.replace(':', '')}
                </dt>
                <dd className="font-mono text-corpo font-medium">{v}</dd>
              </div>
            ))}
          </dl>
          <Botao href={c.link} className="self-start">
            {c.botao}
          </Botao>
        </div>
        {c.img ? (
          <img
            src={c.img}
            alt={c.imgLabel}
            loading="lazy"
            className="mx-auto w-full max-w-[420px] object-contain"
          />
        ) : (
          <div
            aria-hidden="true"
            className="mx-auto grid aspect-square w-full max-w-[300px] place-items-center rounded-full bg-sky-soft"
          >
            <Pinguim pose="notebook" decorativo className="w-[52%]" />
          </div>
        )}
      </article>

      <div className="rev mt-7 overflow-x-auto">
        <table className="tabela-dados min-w-[560px]">
          <caption className="rotulo pb-3 text-left">Comparativo</caption>
          <thead>
            <tr>
              <th className="w-[22%]" />
              {CURSOS.map((x) => (
                <th key={x.sigla} scope="col">
                  {x.sigla}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {LINHAS.map((l) => (
              <tr key={l}>
                <th scope="row">{l.replace(':', '')}</th>
                {CURSOS.map((x) => (
                  <td key={x.sigla}>{valor(x, l)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Secao>
  );
}
