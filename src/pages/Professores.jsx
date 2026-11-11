import { useEffect, useRef, useState } from 'react';
import CabecalhoPagina from '../components/common/CabecalhoPagina.jsx';
import Filtro from '../components/common/Filtro.jsx';
import Icon from '../components/common/Icon.jsx';
import ListaProfessores from '../components/sections/professores/ListaProfessores.jsx';
import { INTRO_PROF } from '../data/professores.js';

const TEMAS = ['Dados', 'Software', 'Redes', 'Otimização', 'Imagens'];

export default function Professores() {
  const [busca, setBusca] = useState('');
  const campo = useRef(null);

  // "/" leva direto para a busca, como em muitos sites de documentação.
  useEffect(() => {
    const atalho = (e) => {
      const digitando = /input|textarea/i.test(e.target.tagName);
      if (e.key === '/' && !digitando) {
        e.preventDefault();
        campo.current?.focus();
      }
    };
    window.addEventListener('keydown', atalho);
    return () => window.removeEventListener('keydown', atalho);
  }, []);

  return (
    <>
      <CabecalhoPagina titulo="Quem dá aula e orienta na FT" texto={INTRO_PROF}>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="busca-professor"
            className="campo flex h-12 items-center gap-3"
          >
            <Icon name="search" className="text-muted" />
            <input
              ref={campo}
              id="busca-professor"
              type="search"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Nome ou tema de pesquisa"
              className="min-w-0 flex-1 bg-transparent text-corpo outline-none placeholder:text-muted"
            />
            <kbd className="hidden rounded border border-line px-1.5 font-mono text-rotulo text-muted sm:block">
              /
            </kbd>
          </label>
          <Filtro
            rotulo="Temas comuns"
            alternar
            valor={busca}
            onChange={(t) => setBusca(t ?? '')}
            opcoes={TEMAS.map((t) => ({ valor: t, rotulo: t }))}
          />
        </div>
      </CabecalhoPagina>
      <ListaProfessores busca={busca} />
    </>
  );
}
