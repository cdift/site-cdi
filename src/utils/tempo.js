/* Hora de Limeira (America/Sao_Paulo): dia da semana, minutos desde 0h e data ISO. */
export function horaSP() {
  const d = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' })
  );
  const iso = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  return { dia: d.getDay(), min: d.getHours() * 60 + d.getMinutes(), iso };
}

export const paraMin = (h) => {
  const [a, b] = h.split(':').map(Number);
  return a * 60 + b;
};

/* Quanto falta, por extenso: "agora", "em 12 min", "em 1 hora",
   "em 1 hora e 20 min", "em 2 horas e 5 min". Abaixo de 1 hora, só minutos. */
export const formataEspera = (m) => {
  if (m <= 0) return 'agora';
  if (m < 60) return `em ${m} min`;
  const h = Math.floor(m / 60);
  const r = m % 60;
  return `em ${h} ${h === 1 ? 'hora' : 'horas'}${r ? ` e ${r} min` : ''}`;
};

export const ehFimDeSemana = (agora) => agora.dia === 0 || agora.dia === 6;

/* Depois das 14h o site mostra o jantar; antes, o almoço. */
export const refeicaoAtual = (agora) =>
  agora.min >= 14 * 60 ? 'jantar' : 'almoco';

/* Situação de uma refeição do RU agora, a partir do horário "07:00 - 08:30".
   Fim de semana conta como fechado (o Campus I não abre). */
export function situacaoRefeicao(horario, agora) {
  const [ini, fim] = horario.split(' - ').map(paraMin);
  if (ehFimDeSemana(agora)) return { estado: 'fechado' };
  if (agora.min < ini)
    return { estado: 'antes', abre: horario.split(' - ')[0] };
  if (agora.min <= fim)
    return { estado: 'servindo', fecha: horario.split(' - ')[1] };
  return { estado: 'encerrado' };
}
