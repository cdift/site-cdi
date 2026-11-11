import Card from '../../common/Card.jsx';
import Icon from '../../common/Icon.jsx';
import Secao from '../../common/Secao.jsx';
import SetaLonga from '../../common/SetaLonga.jsx';
import { SERVICOS } from '../../../data/guia.js';

/* Serviços que o aluno usa no dia a dia. O card inteiro é o link. */
export default function Servicos() {
  return (
    <Secao
      id="servicos"
      fundo="faixa"
      titulo="Links que você vai usar o semestre todo"
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICOS.map((s) => (
          <li key={s.titulo}>
            <Card
              as="a"
              interativo
              href={s.link}
              target="_blank"
              rel="noopener"
              className="group flex h-full flex-col gap-3 p-5"
            >
              <Icon name={s.icone} className="text-muted" />
              <h3 className="font-display text-titulo-3 font-semibold">
                {s.titulo}
              </h3>
              <p className="flex-1 text-corpo-s text-muted">{s.texto}</p>
              <span className="link-seta">
                <span className="link-texto">{s.rotulo}</span>
                <SetaLonga />
              </span>
            </Card>
          </li>
        ))}
      </ul>
    </Secao>
  );
}
