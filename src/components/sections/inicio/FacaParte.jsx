import Botao from '../../common/Botao.jsx';
import Pinguim from '../../common/Pinguim.jsx';
import Secao from '../../common/Secao.jsx';
import Selo from '../../common/Selo.jsx';
import { AREAS } from '../../../data/membros.js';
import { LINKS } from '../../../data/links.js';

/* As áreas do CDI e, ao lado, o card escuro do processo seletivo com o Pingu
   fazendo joinha e o botão de bloco (a ação principal desta seção). */
export default function FacaParte() {
  return (
    <Secao
      id="faca-parte"
      titulo="Sete áreas, uma delas é a sua"
      descricao="O CDI é feito por alunos. Veja o que cada área faz e escolha onde você mais combina."
    >
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-10">
        <ol className="grid gap-x-10 sm:grid-cols-2">
          {AREAS.map((a, i) => (
            <li
              key={a.area}
              className="rev flex gap-4 border-t border-line py-5"
              style={{ '--i': i }}
            >
              <span className="font-mono text-corpo-s text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-display text-corpo-lg font-semibold">
                  {a.area}
                </h3>
                <p className="text-corpo-s text-muted">{a.texto}</p>
              </div>
            </li>
          ))}
        </ol>
        <aside
          className="rev-mola relative mt-[60px] flex flex-col items-start gap-4 self-start rounded-[var(--raio-3)] bg-dark p-7 pt-[104px] text-on-dark lg:sticky lg:top-24 lg:mt-[70px]"
          style={{ '--i': 2 }}
        >
          <Pinguim
            pose="joinha"
            alt="Pinguim do CDI fazendo joinha"
            className="absolute -top-[62px] right-[22px] w-[140px]"
          />
          <Selo className="!bg-dark-2 !text-on-dark">
            Inscrições no começo do semestre
          </Selo>
          <h3 className="titulo text-titulo-3 text-white">Processo seletivo</h3>
          <p className="text-corpo-s text-on-dark/80">
            As inscrições abrem no começo do semestre e são anunciadas no
            Instagram. Ative as notificações para não perder.
          </p>
          <Botao variante="bloco-claro" href={LINKS.instagram}>
            Seguir @cdi.unicamp
          </Botao>
        </aside>
      </div>
    </Secao>
  );
}
