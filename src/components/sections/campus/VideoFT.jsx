import Icon from '../../common/Icon.jsx';
import Secao from '../../common/Secao.jsx';
import { IMAGENS } from '../../../data/imagens.js';
import { LINKS } from '../../../data/links.js';

/* Capa clicável do vídeo sobre a FT no YouTube. */
export default function VideoFT() {
  return (
    <Secao id="video" fundo="faixa" titulo="Um passeio pela FT antes de chegar">
      <a
        href={LINKS.videoFT}
        target="_blank"
        rel="noopener"
        className="group relative grid aspect-video w-full max-w-[880px] place-items-center overflow-hidden rounded-2xl bg-dark"
      >
        <img
          src={IMAGENS.capaVideo}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-55 group-hover:opacity-45"
        />
        <span className="relative flex flex-col items-center gap-3 px-6 text-center text-white">
          <span className="grid size-16 place-items-center rounded-full bg-white text-dark">
            <Icon name="play_arrow" className="!text-[36px]" />
          </span>
          <span className="font-display text-corpo-lg font-semibold">
            Assistir no YouTube
          </span>
        </span>
      </a>
    </Secao>
  );
}
