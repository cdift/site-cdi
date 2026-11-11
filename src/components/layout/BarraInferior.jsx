import { Link, useLocation } from 'react-router-dom';
import Icon from '../common/Icon.jsx';
import { NAV } from '../../data/navegacao.js';

/* Barra de atalhos fixa no rodapé da tela (só no celular, abaixo de 768px),
   do design system (.barra-inferior). Leva às cinco páginas. */
const CURTOS = {
  '/': 'Início',
  '/eventos': 'Eventos',
  '/professores': 'Professores',
  '/guia': 'Guia',
  '/campus': 'Campus',
};

export default function BarraInferior() {
  const { pathname } = useLocation();
  return (
    <nav className="barra-inferior" aria-label="Atalhos">
      {NAV.filter((i) => i.to).map((i) => (
        <Link
          key={i.to}
          to={i.to}
          aria-current={i.to === pathname ? 'page' : undefined}
        >
          <Icon name={i.icon} className="!text-[22px]" />
          {CURTOS[i.to] ?? i.label}
        </Link>
      ))}
    </nav>
  );
}
