import Botao from '../../common/Botao.jsx';
import Secao from '../../common/Secao.jsx';
import { TEXTO_EXTENSAO, TEXTO_HORAS } from '../../../data/guia.js';
import { LINKS } from '../../../data/links.js';

/* Horas complementares e projetos de extensão, lado a lado. */
export default function HorasExtensao() {
  const blocos = [
    {
      titulo: 'Horas complementares e eletivas',
      textos: TEXTO_HORAS,
      link: LINKS.catalogoCursos,
      botao: 'Catálogo do seu curso',
    },
    {
      titulo: 'Projetos de extensão',
      textos: [TEXTO_EXTENSAO],
      link: LINKS.projetosExtensao,
      botao: 'Lista de projetos',
    },
  ];
  return (
    <Secao id="horas" titulo="Além das disciplinas">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        {blocos.map((b) => (
          <div
            key={b.titulo}
            className="flex flex-col gap-4 border-t border-fg pt-6"
          >
            <h3 className="titulo text-titulo-3">{b.titulo}</h3>
            {b.textos.map((t) => (
              <p key={t.slice(0, 12)} className="text-muted">
                {t}
              </p>
            ))}
            <Botao
              variante="secundario"
              href={b.link}
              className="mt-2 self-start"
            >
              {b.botao}
            </Botao>
          </div>
        ))}
      </div>
    </Secao>
  );
}
