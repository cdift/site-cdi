import Pinguim from '../../common/Pinguim.jsx';
import CardProfessor from './CardProfessor.jsx';
import { useProfessores } from '../../../hooks/useDados.js';
import { normaliza } from '../../../utils/texto.js';

/* Lista de docentes filtrada pela busca (que fica no cabeçalho da página). */
export default function ListaProfessores({ busca }) {
  const { dados: professores } = useProfessores();
  const lista = professores.filter((x) =>
    normaliza(x.nome + ' ' + (x.area || '')).includes(normaliza(busca))
  );
  return (
    <section className="gutter mx-auto max-w-page py-12 sm:py-16">
      <p className="mb-6 font-mono text-legenda text-muted" aria-live="polite">
        {lista.length} de {professores.length} professores
        {busca && ` para “${busca}”`}
      </p>
      {lista.length === 0 ? (
        <div className="estado-vazio">
          <Pinguim pose="duvida" largura={130} decorativo />
          <h3>Ninguém com “{busca}”</h3>
          <p>
            Nem no nome, nem na área de pesquisa. Tente um tema mais amplo, como
            “dados”, “software” ou “redes”.
          </p>
        </div>
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {lista.map((x) => (
            <CardProfessor key={x.nome} professor={x} busca={busca} />
          ))}
        </ul>
      )}
    </section>
  );
}
