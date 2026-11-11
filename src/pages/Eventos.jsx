import Botao from '../components/common/Botao.jsx';
import CabecalhoPagina from '../components/common/CabecalhoPagina.jsx';
import EventosRealizados from '../components/sections/eventos/EventosRealizados.jsx';
import ProximosEventos from '../components/sections/eventos/ProximosEventos.jsx';
import { TEXTO_EVENTOS } from '../data/eventos.js';
import { LINKS } from '../data/links.js';

export default function Eventos() {
  return (
    <>
      <CabecalhoPagina titulo="O que o CDI organiza" texto={TEXTO_EVENTOS}>
        <div className="flex flex-col gap-3 rounded-2xl border border-line bg-bg p-5">
          <p className="text-corpo-s text-muted">
            Quer propor um evento, palestra ou visita técnica? Mande a ideia
            pelo Instagram ou pelo e-mail no rodapé.
          </p>
          <Botao variante="link" href={LINKS.instagram} className="self-start">
            Falar no Instagram
          </Botao>
        </div>
      </CabecalhoPagina>
      <ProximosEventos />
      <EventosRealizados />
    </>
  );
}
