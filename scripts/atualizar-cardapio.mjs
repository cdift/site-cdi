/* Lê o cardápio do RU no site da Prefeitura do campus e grava src/data/cardapio.json
   no formato que o site usa ({ cafe, dias: [...] }).
   Uso: npm run cardapio (o GitHub Actions roda isto todo dia, ver
   .github/workflows/cardapio.yml). Se a leitura falhar, o arquivo não é alterado. */
import { writeFile } from 'node:fs/promises';

const URL_RU =
  'https://sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php';
const DESTINO = new URL('../src/data/cardapio.json', import.meta.url);
const ROTULOS = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// Rótulo no site da Prefeitura (sem acento, maiúsculo) -> campo do prato.
const CAMPOS = {
  ACOMPANHAMENTOS: 'acompanhamento',
  'PRATO PRINCIPAL': 'principal',
  GUARNICAO: 'guarnicao',
  SALADA: 'salada',
  SOBREMESA: 'sobremesa',
  REFRESCO: 'refresco',
  'NOTA TECNICA': 'nota',
};

const ENTIDADES = { amp: '&', lt: '<', gt: '>', quot: '"', nbsp: ' ' };

function texto(html) {
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&(\w+);/g, (m, nome) => {
      if (ENTIDADES[nome]) return ENTIDADES[nome];
      // &Atilde; -> Ã, &ccedil; -> ç etc.: letra + acento combinante.
      const acento = {
        acute: '́',
        grave: '̀',
        tilde: '̃',
        circ: '̂',
        uml: '̈',
        cedil: '̧',
      }[nome.slice(1)];
      return acento ? (nome[0] + acento).normalize('NFC') : m;
    })
    .replace(/\s+/g, ' ')
    .trim();
}

const semAcento = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '');

// "ARROZ E FEIJÃO" -> "Arroz e feijão"; textos que já têm minúsculas ficam iguais.
function capitalizar(s) {
  if (s !== s.toUpperCase()) return s;
  const min = s.toLocaleLowerCase('pt-BR');
  return min.charAt(0).toLocaleUpperCase('pt-BR') + min.slice(1);
}

function linhas(tabela) {
  return [...tabela.matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)].map(
    (m) => m[1]
  );
}

// Uma <table> com o cardápio padrão ou vegano; null se não há cardápio cadastrado.
function lerPrato(tabela) {
  const prato = {};
  for (const linha of linhas(tabela)) {
    const m = linha.match(/<strong>([\s\S]*?)<\/strong>([\s\S]*)/);
    if (!m) continue;
    const rotulo = semAcento(texto(m[1])).toUpperCase().replace(/:/g, '');
    const campo = CAMPOS[rotulo.trim()];
    const valor = texto(m[2]);
    if (campo && valor) prato[campo] = capitalizar(valor);
  }
  return prato.principal ? prato : null;
}

// Junta padrão e vegano; se só um existir, o outro fica vazio para a tela não quebrar.
function refeicao(padrao, vegano) {
  if (!padrao && !vegano) return null;
  return { padrao: padrao ?? {}, vegano: vegano ?? {} };
}

async function pagina(data) {
  const resp = await fetch(URL_RU, {
    method: 'POST',
    body: data ? new URLSearchParams({ data }) : undefined,
    signal: AbortSignal.timeout(20000),
  });
  if (!resp.ok) throw new Error(`${URL_RU} respondeu ${resp.status}`);
  return resp.text();
}

// Tabelas da página, em ordem: almoço padrão, almoço vegano, jantar padrão,
// jantar vegano e café da manhã.
const tabelas = (html) =>
  [...html.matchAll(/<table[\s\S]*?<\/table>/g)].map((m) => m[0]);

async function main() {
  const inicial = await pagina();
  const datas = [
    ...inicial.matchAll(/name="data" value="(\d{4}-\d{2}-\d{2})"/g),
  ].map((m) => m[1]);
  if (datas.length === 0) throw new Error('Nenhum dia encontrado na página.');

  let cafe = null;
  const dias = [];
  for (const data of datas) {
    const t = tabelas(await pagina(data));
    if (t.length < 4) throw new Error(`Página de ${data} fora do formato.`);
    const almoco = refeicao(lerPrato(t[0]), lerPrato(t[1]));
    const jantar = refeicao(lerPrato(t[2]), lerPrato(t[3]));
    if (!almoco && !jantar) continue;
    if (!cafe && t[4]) {
      cafe = linhas(t[4])
        .map(texto)
        .filter((l) => l && !/sujeito a altera/i.test(l))
        .join(' ');
    }
    const [ano, mes, d] = data.split('-');
    const semana = new Date(Date.UTC(ano, mes - 1, d)).getUTCDay();
    dias.push({
      data,
      rotulo: ROTULOS[semana],
      dia: `${d}/${mes}`,
      ...(semana === 0 || semana === 6 ? { fds: true } : {}),
      almoco,
      jantar,
    });
  }
  if (dias.length === 0) throw new Error('Nenhum cardápio cadastrado.');

  await writeFile(DESTINO, JSON.stringify({ cafe, dias }, null, 2) + '\n');
  console.log(`Cardápio salvo: ${dias.length} dias (${dias[0].data} em diante).`);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
