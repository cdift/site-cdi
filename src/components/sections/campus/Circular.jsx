import { useState } from 'react';
import Abas from '../../common/Abas.jsx';
import Botao from '../../common/Botao.jsx';
import Filtro from '../../common/Filtro.jsx';
import Secao from '../../common/Secao.jsx';
import PassagensCircular from './PassagensCircular.jsx';
import { useAgora } from '../../../hooks/useAgora.js';
import { useCircular } from '../../../hooks/useDados.js';
import { CIRCULAR_AO_VIVO } from '../../../data/circular.js';
import { IMAGENS } from '../../../data/imagens.js';
import { proximoCircular } from '../../../utils/circular.js';
import { ehFimDeSemana, formataEspera, paraMin } from '../../../utils/tempo.js';

const COLUNAS = [
  'Ônibus',
  'Sai da FT',
  'FCA',
  'FT lateral',
  'AABB',
  'Chega na FT',
];

/* Painel escuro com a próxima saída da FT e a próxima passagem em cada
   parada, que se atualizam com o relógio. */
function ProximaSaida({ agora, viagens }) {
  const p = proximoCircular(agora, viagens);
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-dark p-6 text-on-dark sm:p-8 lg:sticky lg:top-24">
      <p className="inline-flex items-center gap-2 font-mono text-rotulo uppercase tracking-[0.08em] text-on-dark/70">
        Próxima saída da FT
      </p>
      {p.viagem ? (
        <>
          <p className="font-mono text-[clamp(3rem,2rem+4vw,4.5rem)] leading-none font-medium tabular-nums text-white">
            {p.viagem.ft}
          </p>
          <p className="text-corpo-lg">
            {formataEspera(p.espera)} · ônibus {p.viagem.onibus}
          </p>
          <p className="text-corpo-s text-on-dark/70">
            {paraMin(p.viagem.ft) > 18 * 60 + 40
              ? 'Rota noturna: não passa pela AABB.'
              : 'Rota diurna: passa pela FCA e pela AABB.'}
          </p>
        </>
      ) : (
        <p className="titulo text-titulo-3 text-white">
          {p.semServico
            ? 'Não circula aos fins de semana.'
            : `Sem mais saídas da FT hoje. Primeira amanhã às ${viagens[0]?.ft ?? '06:40'}.`}
        </p>
      )}
      <PassagensCircular agora={agora} viagens={viagens} escuro semSaida />
      <p className="mt-2 border-t border-white/15 pt-4 text-legenda text-on-dark/70">
        Grátis com a carteirinha da Unicamp. Liga FT, FCA e AABB em dias úteis,
        das 6h40 às 23h50.
      </p>
    </div>
  );
}

/* Circular Unicamp: próxima saída sempre à vista e, ao lado, horários,
   rotas e localização ao vivo em abas. */
export default function Circular() {
  const agora = useAgora();
  const { dados: viagens } = useCircular();
  const [aba, setAba] = useState('horarios');
  const [rota, setRota] = useState('diurna');
  const [veiculo, setVeiculo] = useState(0);
  const p = proximoCircular(agora, viagens);
  const proxN = p.viagem?.n;

  return (
    <Secao id="circular" fundo="faixa" titulo="Quando passa o próximo ônibus">
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
        <ProximaSaida agora={agora} viagens={viagens} />

        <div className="flex min-w-0 flex-col gap-5">
          <Abas
            id="circular-aba"
            rotulo="Circular"
            valor={aba}
            onChange={setAba}
            opcoes={[
              { valor: 'horarios', rotulo: 'Horários' },
              { valor: 'rotas', rotulo: 'Rotas' },
              { valor: 'aovivo', rotulo: 'Ao vivo' },
            ]}
          />

          <div
            key={aba}
            className="animate__animated animate__fadeIn animate__faster"
          >
            {aba === 'horarios' && (
              <div className="overflow-x-auto card">
                <table className="w-full min-w-[560px] text-left text-corpo-s">
                  <thead className="border-b border-line text-legenda text-muted">
                    <tr>
                      {COLUNAS.map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="px-4 py-3 font-medium"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="font-mono tabular-nums">
                    {viagens.map((v) => {
                      const passou =
                        !ehFimDeSemana(agora) && paraMin(v.ft) < agora.min;
                      const prox = v.n === proxN;
                      return (
                        <tr
                          key={v.n}
                          aria-current={prox ? 'true' : undefined}
                          className={`border-t border-line transition-colors ${prox ? 'bg-accent-soft' : passou ? 'text-muted/60' : ''}`}
                        >
                          <td className="px-4 py-2.5">{v.onibus}</td>
                          <td
                            className={`px-4 py-2.5 ${prox ? 'font-bold text-accent' : 'font-medium'}`}
                          >
                            {v.ft}
                          </td>
                          <td className="px-4 py-2.5">{v.fca}</td>
                          <td className="px-4 py-2.5">{v.lateral}</td>
                          <td className="px-4 py-2.5">{v.aabb || '—'}</td>
                          <td className="px-4 py-2.5">{v.fim}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p className="border-t border-line px-4 py-3 text-legenda text-muted">
                  Depois das 18h40 o ônibus faz a rota noturna, sem a AABB.
                  Horários mudam em feriados e férias.
                </p>
              </div>
            )}

            {aba === 'rotas' && (
              <div className="flex flex-col gap-4">
                <Filtro
                  rotulo="Rota"
                  valor={rota}
                  onChange={setRota}
                  className="self-start"
                  opcoes={[
                    { valor: 'diurna', rotulo: 'Diurna · até 18h40' },
                    { valor: 'noturna', rotulo: 'Noturna · depois das 18h40' },
                  ]}
                />
                <img
                  src={IMAGENS.rotaCircular[rota]}
                  alt={`Mapa da rota ${rota} do Circular Unicamp Limeira, com as paradas numeradas`}
                  className="card h-auto w-full !bg-white"
                />
              </div>
            )}

            {aba === 'aovivo' && (
              <div className="flex flex-col gap-4">
                <Filtro
                  rotulo="Veículo"
                  valor={veiculo}
                  onChange={setVeiculo}
                  className="self-start"
                  opcoes={CIRCULAR_AO_VIVO.map((v, i) => ({
                    valor: i,
                    rotulo: v.nome,
                  }))}
                />
                <p className="font-mono text-legenda text-muted">
                  Saídas: {CIRCULAR_AO_VIVO[veiculo].horarios}
                </p>
                <iframe
                  key={veiculo}
                  src={CIRCULAR_AO_VIVO[veiculo].url}
                  title={`Localização em tempo real do ${CIRCULAR_AO_VIVO[veiculo].nome}`}
                  className="h-[440px] w-full rounded-2xl border border-line bg-bg"
                  loading="lazy"
                />
                <Botao
                  variante="link"
                  href={CIRCULAR_AO_VIVO[veiculo].url}
                  className="self-start"
                >
                  Abrir o mapa em tela cheia
                </Botao>
              </div>
            )}
          </div>
        </div>
      </div>
    </Secao>
  );
}
