import { ehFimDeSemana, paraMin } from './tempo.js';

/* Paradas na ordem do trajeto, com a coluna correspondente da tabela. */
export const PARADAS = [
  { chave: 'ft', nome: 'FT', detalhe: 'saída' },
  { chave: 'fca', nome: 'FCA' },
  { chave: 'lateral', nome: 'FT lateral' },
  { chave: 'aabb', nome: 'AABB' },
  { chave: 'fim', nome: 'FT', detalhe: 'chegada' },
];

/* Próxima saída do Circular a partir da FT, dada a hora atual e a tabela de viagens. */
export function proximoCircular(agora, viagens) {
  if (ehFimDeSemana(agora)) return { semServico: true };
  const prox = viagens.find((v) => paraMin(v.ft) >= agora.min);
  return prox
    ? { viagem: prox, espera: paraMin(prox.ft) - agora.min }
    : { encerrado: true };
}

/* Próxima passagem do Circular em cada parada, a partir de agora. Um ônibus
   que saiu da FT às 13:00 ainda conta para a FCA às 13:15, e assim por
   diante. Paradas sem horário numa viagem (a AABB à noite) são puladas.
   Retorna [{ parada, hora, espera, onibus, emRota }]; "emRota" diz que é o
   ônibus que já saiu da FT. Paradas sem mais passagem hoje vêm sem hora. */
export function proximasPassagens(agora, viagens) {
  if (ehFimDeSemana(agora)) return [];
  return PARADAS.map((parada) => {
    const v = viagens.find(
      (x) => x[parada.chave] && paraMin(x[parada.chave]) >= agora.min
    );
    if (!v) return { parada };
    return {
      parada,
      hora: v[parada.chave],
      espera: paraMin(v[parada.chave]) - agora.min,
      onibus: v.onibus,
      emRota: paraMin(v.ft) < agora.min,
    };
  });
}
