import { useState } from 'react';
import Abas from '../../common/Abas.jsx';
import Galeria from '../../common/Galeria.jsx';
import Secao from '../../common/Secao.jsx';
import { IMAGENS } from '../../../data/imagens.js';

const TIPOS = Object.keys(IMAGENS.realizados);

/* Fotos dos eventos que já aconteceram, separadas por tipo em abas. */
export default function EventosRealizados() {
  const [tipo, setTipo] = useState(TIPOS[0]);
  const fotos = IMAGENS.realizados[tipo];
  return (
    <Secao
      id="realizados"
      fundo="faixa"
      titulo="Fotos dos eventos"
      acao={
        <Abas
          id="tipo-evento"
          rotulo="Tipo de evento"
          valor={tipo}
          onChange={setTipo}
          opcoes={TIPOS.map((t) => ({
            valor: t,
            rotulo: t,
            detalhe: `${IMAGENS.realizados[t].length} fotos`,
          }))}
        />
      }
    >
      <div
        key={tipo}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Galeria fotos={fotos} rotulo={tipo} />
      </div>
    </Secao>
  );
}
