import { useEffect } from 'react';
import { semMovimento } from '../utils/gsap.js';

const SELETOR =
  '.rev, .rev-mola, .rev-pop, .rev-desfoque, .desenhar, .pg-espiar, [data-contar]';

/* Contador: <span data-contar="19">0</span> sobe até o número em 0,9 s,
   com saída forte (igual à --ease-saida). */
function contar(el, direto) {
  const fim = parseFloat(el.getAttribute('data-contar'));
  if (direto) {
    el.textContent = fim;
    return;
  }
  let t0 = null;
  const passo = (t) => {
    if (!t0) t0 = t;
    const p = Math.min((t - t0) / 900, 1);
    el.textContent = Math.round(fim * (1 - Math.pow(1 - p, 4)));
    if (p < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

/* Versão React do cdi-motion.js do design system: quando um bloco com uma
   das classes de entrada (.rev, .rev-mola, .rev-pop, .rev-desfoque,
   .desenhar, .pg-espiar) aparece na tela, ganha .is-in e o CSS de
   cdi-motion.css faz a animação. [data-contar] conta até o número.
   Roda de novo a cada troca de página ("chave"). */
export function useEntradas(chave) {
  useEffect(() => {
    const alvos = [...document.querySelectorAll(SELETOR)].filter(
      (el) => !el.classList.contains('is-in')
    );
    if (semMovimento() || !('IntersectionObserver' in window)) {
      alvos.forEach((el) => {
        el.classList.add('is-in');
        if (el.hasAttribute('data-contar')) contar(el, true);
      });
      return;
    }
    const io = new IntersectionObserver(
      (itens) => {
        for (const i of itens) {
          if (!i.isIntersecting) continue;
          i.target.classList.add('is-in');
          if (i.target.hasAttribute('data-contar')) contar(i.target);
          io.unobserve(i.target);
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );
    alvos.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [chave]);
}
