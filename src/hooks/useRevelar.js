import { useRef } from 'react';
import { gsap, semMovimento, useGSAP } from '../utils/gsap.js';

/* Faz o elemento subir 12px e aparecer na primeira vez que entra na tela
   (GSAP + ScrollTrigger, uma vez só). Com "reduzir movimento", não anima. */
export function useRevelar() {
  const ref = useRef(null);
  useGSAP(
    () => {
      if (semMovimento()) return;
      gsap.from(ref.current, {
        y: 12,
        autoAlpha: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      });
    },
    { scope: ref }
  );
  return ref;
}
