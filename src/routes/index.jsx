import { Navigate, Route, Routes } from 'react-router-dom';
import Inicio from '../pages/Inicio.jsx';
import Eventos from '../pages/Eventos.jsx';
import Professores from '../pages/Professores.jsx';
import Guia from '../pages/Guia.jsx';
import Campus from '../pages/Campus.jsx';

/* Uma rota por página. Caminhos desconhecidos voltam para a inicial. */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/eventos" element={<Eventos />} />
      <Route path="/professores" element={<Professores />} />
      <Route path="/guia" element={<Guia />} />
      <Route path="/campus" element={<Campus />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
