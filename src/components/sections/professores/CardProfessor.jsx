import { useState } from 'react';
import Botao from '../../common/Botao.jsx';
import Card from '../../common/Card.jsx';
import Icon from '../../common/Icon.jsx';
import { useAviso } from '../../../hooks/useAviso.js';
import { normaliza } from '../../../utils/texto.js';

/* Destaca no texto o trecho que bate com a busca (ignorando acentos; os
   índices batem porque cada letra acentuada vira uma letra sem acento). */
function Marca({ texto, termo }) {
  if (!termo) return texto;
  const i = normaliza(texto).indexOf(normaliza(termo));
  if (i < 0) return texto;
  return (
    <>
      {texto.slice(0, i)}
      <mark className="rounded bg-sky-soft px-0.5 text-fg">
        {texto.slice(i, i + termo.length)}
      </mark>
      {texto.slice(i + termo.length)}
    </>
  );
}

/* Card de um docente: foto, área de pesquisa, e-mail (com cópia) e o link do
   Lattes ou do perfil na FT. */
export default function CardProfessor({ professor: x, busca }) {
  const [copiado, setCopiado] = useState(false);
  const avisar = useAviso();
  const copiar = () => {
    try {
      navigator.clipboard.writeText(x.email).then(() => {
        setCopiado(true);
        avisar('E-mail copiado!');
        setTimeout(() => setCopiado(false), 1600);
      });
    } catch {
      /* sem área de transferência */
    }
  };
  return (
    <Card
      as="li"
      className="grid grid-cols-[88px_minmax(0,1fr)] gap-4 p-4 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-5"
    >
      <img
        src={x.foto}
        alt={`Foto de ${x.nome}`}
        loading="lazy"
        className="aspect-[4/5] w-full rounded-xl bg-avatar object-cover object-top"
      />
      <div className="flex min-w-0 flex-col gap-2">
        <h2 className="font-display text-titulo-3 font-semibold">
          <Marca texto={x.nome} termo={busca} />
        </h2>
        <p className="text-corpo-s text-muted">
          {x.area ? (
            <Marca texto={x.area} termo={busca} />
          ) : (
            'Área de pesquisa não informada.'
          )}
        </p>
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
          <button
            type="button"
            onClick={copiar}
            title="Copiar e-mail"
            className="inline-flex min-w-0 items-center gap-1.5 font-mono text-legenda text-muted hover:text-fg"
          >
            <Icon
              name={copiado ? 'check' : 'content_copy'}
              className="!text-[15px]"
            />
            <span className="truncate">{copiado ? 'Copiado' : x.email}</span>
          </button>
          <Botao variante="link" href={x.link}>
            {x.rotulo}
          </Botao>
        </div>
      </div>
    </Card>
  );
}
