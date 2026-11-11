import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../common/Icon.jsx';
import { gsap, semMovimento, useGSAP } from '../../utils/gsap.js';
import { NAV } from '../../data/navegacao.js';
import { IMAGENS } from '../../data/imagens.js';
import { irPara } from '../../utils/rolagem.js';

const PAGINAS = NAV.filter((i) => i.to);
const CONTATO = NAV.find((i) => i.ancora);

/* Some ao rolar para baixo (depois de 80px) e volta ao rolar para cima:
   o menu fica à mão nas páginas longas sem ocupar a tela o tempo todo.
   Abaixo de 768px não some: lá os atalhos ficam na barra inferior. */
function useEscondeAoRolar(travado) {
  const [escondido, setEscondido] = useState(false);
  useEffect(() => {
    let ultimo = window.scrollY;
    const rolar = () => {
      const y = window.scrollY;
      if (!travado)
        setEscondido(y > 80 && y > ultimo && window.innerWidth >= 768);
      ultimo = y;
    };
    window.addEventListener('scroll', rolar, { passive: true });
    return () => window.removeEventListener('scroll', rolar);
  }, [travado]);
  return escondido && !travado;
}

/* Links das páginas no desktop, com uma barra que desliza (GSAP) até a página
   atual e, como no design system, até o link sob o mouse. Na primeira vez
   ela só aparece no lugar, sem deslizar. */
function MenuDesktop({ pathname }) {
  const lista = useRef(null);
  const barra = useRef(null);
  const primeira = useRef(true);
  useGSAP(
    () => {
      const mover = (animar, alvo) => {
        const ativo =
          alvo ?? lista.current?.querySelector('[aria-current="page"]');
        gsap.to(barra.current, {
          x: ativo ? ativo.offsetLeft : 0,
          width: ativo ? ativo.offsetWidth : 0,
          autoAlpha: ativo ? 1 : 0,
          duration: animar && !semMovimento() ? 0.35 : 0,
          ease: 'power3.out',
        });
      };
      mover(!primeira.current);
      primeira.current = false;
      const ajustar = () => mover(false);
      const sobre = (e) => {
        const a = e.target.closest('a');
        if (a) mover(true, a);
      };
      const sair = () => mover(true);
      const ul = lista.current;
      document.fonts?.ready.then(ajustar);
      window.addEventListener('resize', ajustar);
      ul.addEventListener('mouseover', sobre);
      ul.addEventListener('mouseleave', sair);
      return () => {
        window.removeEventListener('resize', ajustar);
        ul.removeEventListener('mouseover', sobre);
        ul.removeEventListener('mouseleave', sair);
      };
    },
    { dependencies: [pathname] }
  );
  return (
    <ul ref={lista} className="relative flex items-center gap-1">
      {PAGINAS.map((item) => {
        const ativo = item.to === pathname;
        return (
          <li key={item.to}>
            <Link
              to={item.to}
              aria-current={ativo ? 'page' : undefined}
              className={`block rounded-lg px-3 py-2 font-display text-corpo-s font-medium ${ativo ? 'text-fg' : 'text-muted hover:text-fg'}`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
      <span
        ref={barra}
        aria-hidden="true"
        className="invisible absolute -bottom-[15px] left-0 h-0.5 w-0 rounded-full bg-accent"
      />
    </ul>
  );
}

/* Cabeçalho de todas as páginas: logo, links das páginas e "Contato" como
   botão (leva ao rodapé). No celular, os links abrem numa lista. */
export default function Header() {
  const [aberto, setAberto] = useState(false);
  const { pathname } = useLocation();
  const escondido = useEscondeAoRolar(aberto);
  const fechar = () => setAberto(false);
  const cabecalho = useRef(null);
  useGSAP(
    () => {
      gsap.to(cabecalho.current, {
        yPercent: escondido ? -100 : 0,
        duration: semMovimento() ? 0 : 0.25,
        ease: 'power2.out',
      });
    },
    { dependencies: [escondido] }
  );
  const contato = (e) => {
    e.preventDefault();
    fechar();
    irPara(CONTATO.ancora);
  };

  return (
    <header
      ref={cabecalho}
      className="sticky top-0 z-30 border-b border-line bg-surface"
    >
      <div className="gutter mx-auto flex h-[72px] max-w-page items-center justify-between gap-6">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={IMAGENS.logoAzul}
            alt="CDI"
            className="h-[40px] w-[60px] object-contain"
          />
          <span className="hidden font-display text-legenda leading-tight text-muted xl:block">
            Centro Acadêmico
            <br />
            de Informática · FT
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <MenuDesktop pathname={pathname} />
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`#${CONTATO.ancora}`}
            onClick={contato}
            className="hidden h-10 items-center rounded-full border border-line-strong px-4 font-display text-corpo-s font-semibold transition-colors hover:border-fg sm:inline-flex"
          >
            Contato
          </a>
          <button
            id="menu-toggle"
            type="button"
            onClick={() => setAberto(!aberto)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            className="grid size-10 place-items-center rounded-full border border-line-strong lg:hidden"
          >
            <Icon name={aberto ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Principal (celular)"
        hidden={!aberto}
        className="border-t border-line bg-surface lg:hidden"
      >
        <ul className="gutter mx-auto flex max-w-page flex-col py-3">
          {PAGINAS.map((item) => {
            const ativo = item.to === pathname;
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={fechar}
                  aria-current={ativo ? 'page' : undefined}
                  className={`flex items-center gap-3 rounded-lg px-2 py-3 font-display text-corpo-lg font-medium ${ativo ? 'text-accent' : 'text-fg'}`}
                >
                  <Icon
                    name={item.icon}
                    className={ativo ? 'text-accent' : 'text-muted'}
                  />
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <a
              href={`#${CONTATO.ancora}`}
              onClick={contato}
              className="flex items-center gap-3 rounded-lg px-2 py-3 font-display text-corpo-lg font-medium"
            >
              <Icon name={CONTATO.icon} className="text-muted" />
              {CONTATO.label}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
