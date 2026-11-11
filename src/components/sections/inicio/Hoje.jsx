import { Link } from 'react-router-dom';
import Botao from '../../common/Botao.jsx';
import Pinguim from '../../common/Pinguim.jsx';
import SetaLonga from '../../common/SetaLonga.jsx';
import Selo from '../../common/Selo.jsx';
import PassagensCircular from '../campus/PassagensCircular.jsx';
import { useAgora } from '../../../hooks/useAgora.js';
import {
  useCardapio,
  useCircular,
  useEventos,
} from '../../../hooks/useDados.js';
import { REFEICOES } from '../../../data/campus.js';
import { LINKS } from '../../../data/links.js';
import { proximoCircular } from '../../../utils/circular.js';
import {
  formataEspera,
  paraMin,
  refeicaoAtual,
  situacaoRefeicao,
} from '../../../utils/tempo.js';

/* Rodapé dos cards: o link com seta do Uiverse, acionado pelo hover do card. */
function Rodape({ children }) {
  return (
    <span className="link-seta mt-auto">
      <span className="link-texto">{children}</span>
      <SetaLonga />
    </span>
  );
}

/* Selo da refeição: "agora" (laranja claro com ponto vivo) quando está
   servindo; cinza nos outros casos. */
function SeloRefeicao({ situacao }) {
  if (situacao.estado === 'servindo')
    return <Selo tipo="agora">Servindo até {situacao.fecha}</Selo>;
  const textos = {
    antes: `Abre às ${situacao.abre}`,
    encerrado: 'Encerrado por hoje',
    fechado: 'Fechado no fim de semana',
  };
  return <Selo>{textos[situacao.estado]}</Selo>;
}

/* Tíquete do bandeco: prato do dia, picote e, embaixo, o vegano e o preço. */
function Tiquete({ agora, cardapio }) {
  const refeicao = refeicaoAtual(agora);
  const nome = refeicao === 'jantar' ? 'Jantar' : 'Almoço';
  const dados = REFEICOES.find((r) => r.nome === nome);
  const hoje = cardapio.dias.find((d) => d.data === agora.iso);
  const menu = hoje?.[refeicao];
  return (
    <Link
      to="/campus#cardapio"
      className="card card-interativo rev group flex flex-col overflow-hidden"
      style={{ '--i': 0, '--furo': 'var(--bg)' }}
    >
      <div className="flex flex-col gap-2.5 p-6">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <span className="rotulo">
            {nome} · {dados.horario.replace(' - ', ' – ')}
          </span>
          <SeloRefeicao situacao={situacaoRefeicao(dados.horario, agora)} />
        </div>
        <p className="titulo mt-2 text-titulo-2 leading-[1.1]">
          {menu ? menu.padrao.principal : `Sem ${nome.toLowerCase()} hoje`}
        </p>
        <p className="text-muted">
          {menu
            ? `${menu.padrao.acompanhamento} · ${menu.padrao.guarnicao}`
            : 'O restaurante do Campus I não abre neste horário.'}
        </p>
      </div>
      <div className="picote" aria-hidden="true" />
      <div className="flex items-end justify-between gap-3 px-6 pt-6 pb-3">
        <div>
          <span className="rotulo">Opção vegana</span>
          <p className="mt-1">{menu ? menu.vegano.principal : '—'}</p>
        </div>
        <span className="font-mono text-titulo-3 font-medium whitespace-nowrap">
          {dados.valor}
        </span>
      </div>
      <span className="flex px-6 pb-5">
        <Rodape>Ver o cardápio da semana</Rodape>
      </span>
    </Link>
  );
}

/* Próximo Circular: a saída da FT em destaque (com quanto falta e uma barra
   que enche desde a saída anterior) e, embaixo, a próxima passagem em cada
   parada do trajeto, contando o ônibus que já está rodando. */
function CardCircular({ agora, viagens }) {
  const p = proximoCircular(agora, viagens);
  let progresso = 0;
  if (p.viagem) {
    const i = viagens.findIndex((v) => v.n === p.viagem.n);
    const anterior =
      i > 0 ? paraMin(viagens[i - 1].ft) : paraMin(p.viagem.ft) - 30;
    const total = Math.max(paraMin(p.viagem.ft) - anterior, 1);
    progresso = Math.min(Math.max(1 - p.espera / total, 0.04), 1);
  }
  return (
    <Link
      to="/campus#circular"
      className="card card-interativo rev group flex flex-col gap-4 p-6"
      style={{ '--i': 1 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <span className="rotulo">Circular Unicamp</span>
        <Selo tipo="info">Saída da FT</Selo>
      </div>
      {p.viagem ? (
        <>
          <p className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
            <span className="numero-grande !text-[clamp(2.6rem,2rem+2vw,3.6rem)]">
              {p.viagem.ft}
            </span>
            <span className="text-muted">
              <b className="text-fg">{formataEspera(p.espera)}</b> · ônibus{' '}
              {p.viagem.onibus}
            </span>
          </p>
          <div
            className="trilho"
            style={{ '--p': `${Math.round(progresso * 100)}%` }}
            aria-hidden="true"
          >
            <span />
          </div>
        </>
      ) : (
        <p className="titulo text-titulo-3">
          {p.semServico
            ? 'Não circula aos fins de semana.'
            : `Sem mais saídas da FT hoje. Primeira amanhã às ${viagens[0]?.ft ?? '06:40'}.`}
        </p>
      )}
      <PassagensCircular agora={agora} viagens={viagens} semSaida />
      <Rodape>Todos os horários</Rodape>
    </Link>
  );
}

/* Próximo evento; sem eventos marcados, o estado vazio com o Pingu dormindo. */
function ProximoEvento() {
  const { dados: eventos } = useEventos();
  const ev = eventos[0];
  if (!ev)
    return (
      <div
        className="estado-vazio rev h-full justify-center"
        style={{ '--i': 2 }}
      >
        <Pinguim pose="dormindo" largura={190} decorativo />
        <h3>Nenhum evento marcado</h3>
        <p>
          Quando o CDI marcar integração, palestra ou workshop, aparece aqui com
          local e link de inscrição.
        </p>
        <Botao variante="link" to="/#faca-parte">
          Quero ajudar a organizar
        </Botao>
      </div>
    );
  return (
    <Link
      to="/eventos"
      className="card card-interativo rev group flex flex-col gap-4 p-6"
      style={{ '--i': 2 }}
    >
      <div className="flex flex-wrap items-center justify-between gap-2.5">
        <span className="rotulo">Próximo evento</span>
        <Selo tipo="agora">Inscrições abertas</Selo>
      </div>
      <p className="titulo text-titulo-2 leading-[1.1]">{ev.nome}</p>
      <p className="font-mono text-corpo-s text-muted">
        {ev.data} · {ev.local}
      </p>
      <Rodape>Ver o evento</Rodape>
    </Link>
  );
}

/* "Hoje no campus": bandeco, Circular e próximo evento, calculados com a
   hora de Limeira, e atalhos para o que mais se procura. */
export default function Hoje() {
  const agora = useAgora();
  const { dados: cardapio } = useCardapio();
  const { dados: viagens } = useCircular();

  return (
    <section id="hoje" className="py-16 sm:py-24">
      <div className="gutter mx-auto max-w-page">
        <header className="rev mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="titulo text-titulo-2">Hoje no campus</h2>
          <p className="max-w-[40ch] font-mono text-rotulo tracking-[0.04em] text-muted">
            Cardápio atualizado sozinho a partir do site da Prefeitura. Horários
            do Circular em dias úteis.
          </p>
        </header>
        <div className="grid gap-5 min-[900px]:grid-cols-3">
          <Tiquete agora={agora} cardapio={cardapio} />
          <CardCircular agora={agora} viagens={viagens} />
          <ProximoEvento />
        </div>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <li>
            <Botao variante="link" href={LINKS.intercampReserva}>
              Reservar o Intercamp
            </Botao>
          </li>
          <li>
            <Botao variante="link" href={LINKS.salas}>
              Horários e salas das aulas
            </Botao>
          </li>
          <li>
            <Botao variante="link" href={LINKS.gruposMaterias}>
              Grupos de WhatsApp das matérias
            </Botao>
          </li>
          <li>
            <Botao variante="link" to="/guia#mapa">
              Mapa do campus
            </Botao>
          </li>
        </ul>
      </div>
    </section>
  );
}
