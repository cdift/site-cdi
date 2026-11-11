import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BarraInferior from './BarraInferior.jsx';
import RolagemAutomatica from './RolagemAutomatica.jsx';
import { AvisoProvider } from '../../context/AvisoProvider.jsx';
import { useEntradas } from '../../hooks/useEntradas.js';

/* Estrutura comum a todas as páginas: cabeçalho, conteúdo, rodapé, a barra
   de atalhos do celular e o aviso (toast). Liga as entradas ao rolar do
   design system a cada troca de página. */
export default function Layout({ children }) {
  const { pathname } = useLocation();
  useEntradas(pathname);
  return (
    <AvisoProvider>
      <div className="min-h-full bg-bg text-fg">
        <RolagemAutomatica />
        <Header />
        <main id="principal">{children}</main>
        <Footer />
        <BarraInferior />
      </div>
    </AvisoProvider>
  );
}
