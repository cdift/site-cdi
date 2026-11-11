import { useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { gsap, semMovimento, useGSAP } from '../../utils/gsap.js';

/* Lista de perguntas que abrem e fecham (uma por vez). A altura anima com
   GSAP, de 0 até a altura do conteúdo, e o "+" gira para virar "×". */
export default function Acordeao({ itens, id = 'acordeao', inicial = -1 }) {
  const [aberto, setAberto] = useState(inicial);
  const raiz = useRef(null);

  useGSAP(
    () => {
      const paineis = gsap.utils.toArray('[data-painel]', raiz.current);
      const icones = gsap.utils.toArray('[data-icone]', raiz.current);
      const dur = semMovimento() ? 0 : 0.3;
      paineis.forEach((p, k) => {
        gsap.to(p, {
          height: k === aberto ? 'auto' : 0,
          duration: dur,
          ease: 'power2.inOut',
        });
        gsap.to(icones[k], {
          rotation: k === aberto ? 45 : 0,
          duration: dur,
          ease: 'power2.out',
        });
      });
    },
    { scope: raiz, dependencies: [aberto] }
  );

  return (
    <ul ref={raiz} className="divide-y divide-line border-y border-line">
      {itens.map((item, k) => {
        const on = aberto === k;
        return (
          <li key={item.titulo}>
            <h3>
              <button
                id={`${id}-${k}`}
                type="button"
                onClick={() => setAberto(on ? -1 : k)}
                aria-expanded={on}
                aria-controls={`${id}-${k}-painel`}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-corpo-lg font-semibold group-hover:text-accent">
                  {item.titulo}
                </span>
                <span data-icone className="grid shrink-0 text-muted">
                  <Icon name="add" />
                </span>
              </button>
            </h3>
            <div
              id={`${id}-${k}-painel`}
              role="region"
              aria-labelledby={`${id}-${k}`}
              data-painel
              inert={!on}
              className="overflow-hidden"
              style={{ height: k === inicial ? 'auto' : 0 }}
            >
              <div className="flex max-w-[70ch] flex-col gap-3 pb-6">
                {item.conteudo}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
