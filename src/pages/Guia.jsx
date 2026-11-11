import CabecalhoPagina from '../components/common/CabecalhoPagina.jsx';
import Sumario from '../components/common/Sumario.jsx';
import MapaCampus from '../components/sections/guia/MapaCampus.jsx';
import Servicos from '../components/sections/guia/Servicos.jsx';
import HorasExtensao from '../components/sections/guia/HorasExtensao.jsx';
import GruposWhatsapp from '../components/sections/guia/GruposWhatsapp.jsx';
import Oportunidades from '../components/sections/guia/Oportunidades.jsx';
import PerguntasFrequentes from '../components/sections/guia/PerguntasFrequentes.jsx';
import Pinguim from '../components/common/Pinguim.jsx';

const SUMARIO = [
  { id: 'mapa', rotulo: 'Mapa' },
  { id: 'servicos', rotulo: 'Serviços' },
  { id: 'horas', rotulo: 'Horas e extensão' },
  { id: 'grupos', rotulo: 'Grupos' },
  { id: 'oportunidades', rotulo: 'Oportunidades' },
  { id: 'faq', rotulo: 'Dúvidas' },
];

export default function Guia() {
  return (
    <>
      <CabecalhoPagina
        titulo="Chegou na FT? Comece por aqui."
        texto="Onde ficam as salas, quais sistemas você vai usar, como funcionam as horas complementares e as perguntas que todo calouro faz no primeiro mês."
      >
        <Pinguim
          pose="lendo"
          decorativo
          className="rev-pop ml-auto hidden w-full max-w-[220px] lg:block"
        />
      </CabecalhoPagina>
      <Sumario itens={SUMARIO} />
      <MapaCampus />
      <Servicos />
      <HorasExtensao />
      <GruposWhatsapp />
      <Oportunidades />
      <PerguntasFrequentes />
    </>
  );
}
