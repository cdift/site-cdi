import { useEffect, useState } from 'react';

/* Qual das seções (pelos ids) está passando pelo topo da tela. Usado pelo
   Sumario para marcar onde o leitor está nas páginas longas. */
export function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState(ids[0]);
  const chave = ids.join('|');
  useEffect(() => {
    const els = chave
      .split('|')
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return;
    const visiveis = new Map();
    const obs = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) visiveis.set(e.target.id, e.isIntersecting);
        const primeira = els.find((el) => visiveis.get(el.id));
        if (primeira) setAtiva(primeira.id);
      },
      { rootMargin: '-20% 0px -65% 0px' }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [chave]);
  return ativa;
}
