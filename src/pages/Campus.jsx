import CabecalhoPagina from '../components/common/CabecalhoPagina.jsx';
import Pinguim from '../components/common/Pinguim.jsx';
import Sumario from '../components/common/Sumario.jsx';
import Restaurante from '../components/sections/campus/Restaurante.jsx';
import Circular from '../components/sections/campus/Circular.jsx';
import Intercamp from '../components/sections/campus/Intercamp.jsx';
import VideoFT from '../components/sections/campus/VideoFT.jsx';

const SUMARIO = [
  { id: 'ru', rotulo: 'Restaurante' },
  { id: 'circular', rotulo: 'Circular' },
  { id: 'intercamp', rotulo: 'Intercamp' },
  { id: 'video', rotulo: 'Vídeo' },
];

export default function Campus() {
  return (
    <>
      <CabecalhoPagina
        titulo="Bandeco, circular e Intercamp"
        texto="O que tem para comer hoje, quando passa o próximo ônibus entre FT, FCA e AABB e como reservar a viagem para Campinas."
      >
        <div className="relative hidden h-[180px] overflow-hidden lg:block">
          <Pinguim
            pose="correndo"
            decorativo
            className="absolute bottom-0 left-1/2 w-[170px]"
          />
        </div>
      </CabecalhoPagina>
      <Sumario itens={SUMARIO} />
      <Restaurante />
      <Circular />
      <Intercamp />
      <VideoFT />
    </>
  );
}
