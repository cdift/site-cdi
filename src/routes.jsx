import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Eventos from "./pages/eventos";
import VidaNoCampus from "./pages/vidanocampus";
import Professores from "./pages/professores";
import GuiaParaIngressantes from "./pages/guiaparaingressantes";
import LoginPage from "./pages/login";
import RedefinirSenhaPage from "./pages/esqueceuSenha";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/eventos",
    element: <Eventos/>,
  },
  {
    path: '/vidanocampus',
    element: <VidaNoCampus/>
  },
  {
    path: "/professores",
    element: <Professores/>,
  },
  {
    path: "/guiaparaingressantes",
    element: <GuiaParaIngressantes/>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/redefinir_senha",
    element: <RedefinirSenhaPage />,
  },
]);
