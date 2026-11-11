import Botao from '../../common/Botao.jsx';
import Secao from '../../common/Secao.jsx';
import MapaInterativo from './MapaInterativo.jsx';
import { ENDERECO } from '../../../data/guia.js';
import { LINKS } from '../../../data/links.js';

/* Endereço da FT e o mapa interativo dos prédios. */
export default function MapaCampus() {
  return (
    <Secao
      id="mapa"
      titulo="Onde fica cada coisa na FT"
      descricao={ENDERECO}
      acao={
        <Botao variante="secundario" href={LINKS.comoChegar}>
          Como chegar
        </Botao>
      }
    >
      <MapaInterativo />
    </Secao>
  );
}
