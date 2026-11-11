import Botao from '../../common/Botao.jsx';
import Secao from '../../common/Secao.jsx';
import { WHATS } from '../../../data/guia.js';

/* Os dois grupos de WhatsApp do CDI. Cores sólidas da paleta do pinguim. */
export default function GruposWhatsapp() {
  const estilos = ['bg-dark text-on-dark', 'bg-sky text-fg'];
  return (
    <Secao id="grupos" fundo="faixa" titulo="Grupos do CDI">
      <ul className="grid gap-4 md:grid-cols-2">
        {WHATS.map((w, k) => (
          <li
            key={w.botao}
            className={`flex flex-col gap-5 rounded-2xl p-7 sm:p-9 ${estilos[k]}`}
          >
            <h3 className="titulo text-titulo-1">
              {w.titulo[0]} {w.titulo[1]}
            </h3>
            <p className={`max-w-[44ch] ${k === 0 ? 'text-on-dark/80' : ''}`}>
              {w.texto}.
            </p>
            <Botao
              variante={k === 0 ? 'claro' : 'primario'}
              href={w.link}
              className="mt-auto self-start"
            >
              {w.botao}
            </Botao>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
