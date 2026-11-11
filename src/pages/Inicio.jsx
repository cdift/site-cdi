import Hero from '../components/sections/inicio/Hero.jsx';
import Hoje from '../components/sections/inicio/Hoje.jsx';
import Sobre from '../components/sections/inicio/Sobre.jsx';
import Cursos from '../components/sections/inicio/Cursos.jsx';
import Visitas from '../components/sections/inicio/Visitas.jsx';
import Duvidas from '../components/sections/inicio/Duvidas.jsx';
import FacaParte from '../components/sections/inicio/FacaParte.jsx';
import Membros from '../components/sections/inicio/Membros.jsx';

/* Página inicial na ordem do protótipo do design system (pagina-cdi.html),
   com os membros da gestão no fim. */
export default function Inicio() {
  return (
    <>
      <Hero />
      <Hoje />
      <Sobre />
      <Cursos />
      <Visitas />
      <Duvidas />
      <FacaParte />
      <Membros />
    </>
  );
}
