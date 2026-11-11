import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../common/Icon.jsx';
import Pinguim from '../common/Pinguim.jsx';
import { useAviso } from '../../hooks/useAviso.js';
import { LINKS } from '../../data/links.js';
import { NAV } from '../../data/navegacao.js';
import { IMAGENS } from '../../data/imagens.js';

/* Copia o e-mail, mostra "Copiado" por 1,8 s e o aviso com o Pingu. */
function CopiarEmail() {
  const [copiado, setCopiado] = useState(false);
  const avisar = useAviso();
  const copiar = () => {
    const ok = () => {
      setCopiado(true);
      avisar('E-mail copiado!');
      setTimeout(() => setCopiado(false), 1800);
    };
    try {
      navigator.clipboard.writeText(LINKS.email).then(ok, () => {});
    } catch {
      /* sem acesso à área de transferência */
    }
  };
  return (
    <button
      id="copiar-email"
      type="button"
      onClick={copiar}
      className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1 font-mono text-rotulo text-on-dark transition-colors hover:border-white/60"
    >
      <Icon
        name={copiado ? 'check' : 'content_copy'}
        className="!text-[15px]"
      />
      {copiado ? 'Copiado' : 'Copiar'}
    </button>
  );
}

export default function Footer() {
  const redes = [
    ['Instagram', '@cdi.unicamp', LINKS.instagram, IMAGENS.redes.instagram],
    ['LinkedIn', 'CDI-FT Unicamp', LINKS.linkedin, IMAGENS.redes.linkedin],
  ];
  return (
    <footer
      id="contato"
      className="relative overflow-hidden bg-dark text-on-dark"
    >
      {/* Pingu correndo pela borda de cima (design system: .pg-correr). */}
      <Pinguim
        pose="correndo"
        decorativo
        className="pointer-events-none absolute top-2.5 left-0 hidden w-24 md:block"
      />
      <div className="gutter mx-auto max-w-page pt-[72px] pb-8 md:pt-[124px]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="flex flex-col gap-5">
            <h2 className="titulo max-w-[16ch] text-titulo-2 text-white">
              Dúvida, ideia ou reclamação? Fala com a gente.
            </h2>
            <p className="max-w-[44ch] text-on-dark/75">
              O CDI responde pelo e-mail e pelo Instagram. Se for sobre uma
              disciplina, diga qual e de que curso.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${LINKS.email}`}
                className="font-mono text-corpo-s text-white underline-offset-4 hover:underline"
              >
                {LINKS.email}
              </a>
              <CopiarEmail />
            </div>
            <div className="flex max-w-[420px] items-center gap-3.5 rounded-2xl border border-dashed border-white/30 px-4 py-3.5">
              <Pinguim
                pose="ideia"
                decorativo
                animar={false}
                className="size-[72px] shrink-0 rounded-full bg-sky-soft object-contain px-2 pt-1.5 pb-1"
              />
              <p className="text-corpo-s leading-snug text-on-dark/85">
                <b className="text-white">Tem uma ideia pro CDI?</b>
                <br />
                Manda por e-mail ou pelo Instagram. A gente lê tudo.
              </p>
            </div>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <p className="rotulo !text-on-dark/60">Páginas</p>
            <ul className="flex flex-col gap-2">
              {NAV.filter((i) => i.to).map((i) => (
                <li key={i.to}>
                  <Link
                    to={i.to}
                    className="text-on-dark/85 hover:text-white hover:underline underline-offset-4"
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-3">
            <p className="rotulo !text-on-dark/60">Redes</p>
            <ul className="flex flex-col gap-3">
              {redes.map(([nome, perfil, href, icone]) => (
                <li key={nome}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center gap-3"
                  >
                    <img src={icone} alt="" className="size-5" />
                    <span className="flex flex-col leading-tight">
                      <span className="text-white group-hover:underline underline-offset-4">
                        {perfil}
                      </span>
                      <span className="text-legenda text-on-dark/60">
                        {nome}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 text-legenda text-on-dark/60 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img src={IMAGENS.logoBranco} alt="CDI" className="h-7 w-auto" />
            <span>
              Centro Acadêmico de Informática · Faculdade de Tecnologia ·
              Unicamp Limeira
            </span>
          </div>
          <span>Feito pela área de Projetos do CDI</span>
        </div>
      </div>
    </footer>
  );
}
