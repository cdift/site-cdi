import Botao from '../../common/Botao.jsx';
import Card from '../../common/Card.jsx';
import Pinguim from '../../common/Pinguim.jsx';
import Secao from '../../common/Secao.jsx';
import { useEventos } from '../../../hooks/useDados.js';
import { LINKS } from '../../../data/links.js';

/* Card de um evento futuro: arte, nome, quando e onde, e a inscrição. */
function CardEvento({ evento: ev, indice }) {
  return (
    <Card as="li" className="flex flex-col overflow-hidden">
      <img
        src={ev.imagem}
        alt={`Arte de ${ev.nome}`}
        className="aspect-[16/10] w-full bg-avatar object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <dl className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-legenda text-muted">
          <div className="flex gap-1">
            <dt className="sr-only">Data</dt>
            <dd>{ev.data}</dd>
          </div>
          <div className="flex gap-1">
            <dt className="sr-only">Local</dt>
            <dd>{ev.local}</dd>
          </div>
        </dl>
        <h3 className="titulo text-titulo-3">{ev.nome}</h3>
        <p className="flex-1 text-corpo-s text-muted">{ev.descricao}</p>
        <Botao
          id={`inscricao-${indice}`}
          href={ev.link}
          className="mt-2 self-start"
        >
          Inscrever-se
        </Botao>
      </div>
    </Card>
  );
}

/* Mural dos próximos eventos (vem da API quando configurada). */
export default function ProximosEventos() {
  const { dados: proximos } = useEventos();
  return (
    <Secao id="proximos" titulo="Próximos eventos">
      {proximos.length === 0 ? (
        <div className="estado-vazio rev py-12">
          <Pinguim pose="dormindo" largura={210} decorativo />
          <h3>Nenhum evento marcado por enquanto</h3>
          <p>
            Quando o CDI anunciar o próximo, ele aparece aqui com data, local e
            link de inscrição. Os anúncios saem primeiro no Instagram.
          </p>
          <Botao variante="link" href={LINKS.instagram}>
            Ver o Instagram do CDI
          </Botao>
        </div>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {proximos.map((ev, k) => (
            <CardEvento key={ev.id ?? k} evento={ev} indice={k} />
          ))}
        </ul>
      )}
    </Secao>
  );
}
