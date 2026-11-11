# Site CDI

Site do CDI (Centro Acadêmico de Informática da FT-Unicamp), feito com Vite + React + Tailwind CSS.

## Como rodar

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install       # instala as dependências (só na primeira vez)
npm run dev       # servidor de desenvolvimento 
npm run build     # gera a versão final em dist/
npm run preview   # serve a pasta dist/ para conferir o build
npm run lint      # verifica o código com ESLint
npm run cardapio  # baixa o cardápio do RU para src/data/cardapio.json
```

## Cardápio do RU automático

O workflow `.github/workflows/cardapio.yml` roda `npm run cardapio` às 6h, 10h e 15h (Brasília),
lê o site da Prefeitura do campus e faz commit de `src/data/cardapio.json` quando o cardápio muda.
Para o site no ar mudar junto, a hospedagem precisa publicar a cada push na `main` (Vercel e
Netlify fazem isso ligados ao repositório). Para rodar na hora: Actions > Atualizar cardápio >
Run workflow.

## Estrutura

```
src/
  main.jsx             ponto de entrada
  App.jsx              router, contexto e layout
  index.css            Tailwind e classes globais
  assets/img/          imagens (fotos, logos, mapa, professores, membros…)
  components/
    common/            componentes genéricos (Botao, Card, Titulo, Galeria…)
    layout/            Layout, Header, Footer
    sections/          seções de cada página (inicio/, eventos/, professores/, guia/, campus/)
  pages/               uma página por rota (Inicio, Eventos, Professores, Guia, Campus)
  routes/index.jsx     rotas do React Router
  context/             AgoraProvider (hora de Limeira compartilhada)
  hooks/               useAgora, useApi e useDados (dados que podem vir da API)
  services/
    api.js             instância do axios e cache
    endpoints/         uma chamada por recurso (cardapio, circular, professores, eventos)
  data/                conteúdo do site: professores, links, cardápio, circular, membros, FAQ…
  styles/              colors.css (cores) e typography.css (fontes e tamanhos)
  utils/               funções de horário, circular, rolagem e texto
```

Os detalhes e as convenções estão em [ARCHITECTURE.md](ARCHITECTURE.md).

Para mudar textos, links ou listas, edite os arquivos em `src/data/`. Para trocar uma imagem,
substitua o arquivo em `src/assets/img/` ou ajuste o caminho em `src/data/imagens.js`.

## Conectando com o back-end

Sem configuração, o site usa só os dados de `src/data/`. Para buscar da API:

1. Copie `.env.example` para `.env`.
2. Preencha `VITE_API_URL`:
   - `VITE_API_URL=/api`: em desenvolvimento, o Vite repassa `/api/*` para `http://localhost:3000`
     (porta configurável em `vite.config.js`). Em produção, o servidor deve atender `/api` no mesmo domínio.
   - `VITE_API_URL=https://api.exemplo.com`: chama a API direto (ela precisa liberar CORS).
3. Reinicie o `npm run dev` (variáveis do `.env` são lidas na inicialização).

Endpoints usados (todos `GET`, respondendo JSON no mesmo formato dos arquivos de `src/data/`):

| Endpoint       | Formato                                  | Dados locais de reserva      |
| -------------- | ---------------------------------------- | ---------------------------- |
| `/cardapio`    | `{ cafe, dias: [...] }`                  | `CARDAPIO` em `cardapio.js`  |
| `/circular`    | `[{ n, onibus, ft, fca, lateral, aabb, fim }]` | `CIRCULAR` em `circular.js` |
| `/professores` | `[{ nome, foto, email, area, link, rotulo }]` | `PROFESSORES` em `professores.js` |
| `/eventos`     | `[{ nome, descricao, local, data, link, imagem }]` | `PROXIMOS` em `eventos.js` |

Enquanto a resposta não chega, ou se a chamada falhar, a página mostra os dados locais.
Para adicionar um endpoint, crie o arquivo em `src/services/endpoints/` e o hook em `src/hooks/useDados.js`.

## Publicação

O build gera arquivos estáticos em `dist/`. As páginas usam URLs reais (`/eventos`, `/guia`…),
então o servidor precisa devolver `index.html` para qualquer caminho que não seja um arquivo
(o chamado "SPA fallback"). Netlify, Vercel e o `npm run preview` já fazem isso; em Nginx, use
`try_files $uri /index.html;`.

## Componentes e animações de terceiros

Os componentes visuais e as animações vêm de quatro fontes, e só delas:

| Onde no site | Origem | Licença |
| --- | --- | --- |
| Botão principal (texto desliza, seta sobe) | [Uiverse.io](https://uiverse.io) · AKAspidey01 · `Buttons/AKAspidey01_ugly-horse-68` | MIT |
| Botão de contorno (preenche de baixo para cima) | Uiverse.io · adamgiebl · `Buttons/adamgiebl_rude-bear-14` | MIT |
| Link com seta (sublinhado que cresce) | Uiverse.io · alexmaracinaru · `Buttons/alexmaracinaru_empty-moose-12` | MIT |
| Cards (borda azul no hover) | Uiverse.io · Sujitkavaiya · `Cards/Sujitkavaiya_mighty-pig-81` | MIT |
| Abas com glider | Uiverse.io · Pradeepsaranbishnoi · `Radio-buttons/Pradeepsaranbishnoi_heavy-dragonfly-92` | MIT |
| Filtros e índice das páginas | Uiverse.io · Yaya12085 · `Radio-buttons/Yaya12085_rude-mouse-79` | MIT |
| Campo de busca | Uiverse.io · JayRamoliya · `Inputs/JayRamoliya_loud-rattlesnake-53` | MIT |
| Entrada dos blocos ao rolar, barra do menu, cabeçalho que some, FAQ, letreiro do Circular | [GSAP](https://gsap.com) + ScrollTrigger | Standard "no charge" license |
| Troca de conteúdo das abas, destaque no mapa | [Animate.css](https://animate.style) | MIT |
| Tokens, entradas ao rolar, selos, botão de bloco, balão, tabela comparativa, faixa de fotos, toast, estado vazio, barra inferior e as 15 poses do Pingu | Design system do CDI v2 (`design-system/`, arquivos `src/styles/cdi-*.css`) | Do CDI |

O CSS adaptado dos componentes do Uiverse está em `src/styles/componentes.css`, com o
autor de cada um. Só mudaram as cores e medidas (agora vêm dos tokens); a estrutura e o
comportamento são os originais. O código original de todos fica no repositório
[uiverse-io/galaxy](https://github.com/uiverse-io/galaxy).
