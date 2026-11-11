import Pinguim from '../../common/Pinguim.jsx';
import { IMAGENS } from '../../../data/imagens.js';
import { MISSOES, SOBRE } from '../../../data/inicio.js';
import { MEMBROS } from '../../../data/membros.js';
import { CURSOS } from '../../../data/cursos.js';

/* Números contados dos próprios dados do site, não estimados. Sobem do zero
   quando aparecem (data-contar, ver hooks/useEntradas.js). */
const NUMEROS = [
  [CURSOS.length, 'cursos representados'],
  [MEMBROS.reduce((s, g) => s + g.pessoas.length, 0), 'membros no CDI'],
];

/* Quem é o CDI: foto em arco com o Pingu espiando da borda, números, texto e
   missão, visão e valores. */
export default function Sobre() {
  return (
    <section id="sobre" className="border-t border-line">
      <div className="gutter mx-auto grid max-w-page gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div className="rev flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-[var(--arco)]">
            <img
              src={IMAGENS.fotoEquipe}
              alt="Estudantes reunidos em um evento do CDI"
              loading="lazy"
              className="foto-arco aspect-[5/4] w-full lg:aspect-[4/5]"
            />
            <Pinguim
              pose="espiando"
              alt="Pinguim do CDI espiando da borda da foto"
              className="absolute -right-px bottom-[12%] w-[84px]"
            />
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--raio-2)] border border-line bg-line">
            {NUMEROS.map(([n, t]) => (
              <div
                key={t}
                className="flex flex-col-reverse gap-0.5 bg-surface p-4"
              >
                <dt className="text-legenda text-muted">{t}</dt>
                <dd className="numero-grande !text-titulo-2" data-contar={n}>
                  0
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="flex flex-col gap-8">
          <div className="rev flex flex-col gap-4">
            <h2 className="titulo text-titulo-2">
              Quem fala pelos alunos de tecnologia na FT
            </h2>
            {SOBRE.map((p) => (
              <p key={p.slice(0, 12)} className="text-corpo-lg text-muted">
                {p}
              </p>
            ))}
          </div>
          <ol className="flex flex-col divide-y divide-line border-y border-line">
            {MISSOES.map((m, i) => (
              <li
                key={m.titulo}
                className="rev grid grid-cols-[3rem_minmax(0,1fr)] gap-x-4 gap-y-1 py-5 sm:grid-cols-[3rem_9rem_minmax(0,1fr)]"
                style={{ '--i': i }}
              >
                <span className="font-mono text-corpo-s text-accent">
                  0{i + 1}
                </span>
                <h3 className="font-display text-corpo-lg font-semibold">
                  {m.titulo}
                </h3>
                <p className="col-start-2 text-muted sm:col-start-3">
                  {m.texto}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
