# Arquitetura do Projeto

Este documento descreve a estrutura de pastas e as convenções que a equipe deve seguir.

## Estrutura de Pastas (dentro de `src/`)

- **`assets/`**: Arquivos estáticos como imagens, ícones e fontes.
  - **`img/`**: Fotos, logos, mapa, professores e membros. Os caminhos ficam centralizados em `data/imagens.js`.
- **`components/`**: Componentes React reutilizáveis.
  - **`common/`**: Componentes genéricos e primitivos (`Botao`, `Card`, `Secao`, `CabecalhoPagina`, `Rotulo`, `Abas`, `Acordeao`, `Sumario`, `Galeria`, `Icon`).
  - **`layout/`**: Componentes estruturais e de navegação (`Layout`, `Header`, `Footer`, `RolagemAutomatica`).
  - **`sections/`**: Seções de cada página, uma pasta por página (`inicio/`, `eventos/`, `professores/`, `guia/`, `campus/`).
- **`pages/`**: Componentes de página, representando cada rota principal da aplicação. Uma página só monta as suas seções.
- **`routes/`**: Configuração central do React Router (`index.jsx`).
- **`hooks/`**: Custom hooks React que encapsulam lógicas complexas e reutilizáveis (`useAgora`, `useApi`, `useDados`, `useRevelar` para a entrada suave dos blocos, `useSecaoAtiva` para o índice das páginas longas).
- **`services/`**: Configurações de API e integrações externas.
  - **`api.js`**: Instância configurada do axios (endereço em `VITE_API_URL`) e cache das respostas.
  - **`endpoints/`**: Arquivos separados por recurso (`cardapio.js`, `circular.js`, `professores.js`, `eventos.js`), contendo as chamadas de API.
- **`context/`**: Contextos React (Context API) para estado global. `AgoraProvider` fornece a hora de Limeira para o site inteiro; `AvisoProvider` mostra o aviso (toast) com o Pingu.
- **`data/`**: Conteúdo do site (textos, links, listas, cardápio, circular, FAQ…). Também serve de dados de reserva quando a API não está configurada ou falha.
- **`styles/`**: Tokens do design system (cores e tipografia).
  - **`colors.css`**: Paleta (azul do CDI clareado como destaque, o #0108f8 original só no logo, + cores do pinguim mascote) e as cores do tema (`bg`, `surface`, `fg`, `muted`, `line`, `accent`, `dark`, `sky`, `alert`).
  - **`cdi-tokens.css`**, **`cdi-motion.css`** e **`cdi-componentes.css`**: o design system v2 (pasta `design-system/`): cores de apoio, sombra de bloco, curvas e durações; entradas ao rolar, loops do mascote e reduzir movimento; selo, rótulo, botão de bloco, balão, tabela, toast, estado vazio, barra inferior.
  - **`componentes.css`**: CSS dos componentes vindos do Uiverse.io (botões, card, abas, filtro, campo de busca), com o autor de cada um.
  - **`typography.css`**: Fontes (Overpass nos títulos e no texto, Overpass Mono nos dados) e a escala de tamanhos (`text-display`, `text-titulo-1` a `3`, `text-corpo-*`, `text-legenda`, `text-rotulo`).
- **`utils/`**: Funções auxiliares (helpers), formatadores e utilitários genéricos não ligados ao React (`tempo`, `circular`, `rolagem`, `texto`).

Fora de `src/`, a pasta `public/` guarda apenas o `favicon.svg`.

## Padrões e Convenções

1. **Componentes**: Utilize nomes em PascalCase (`MeuComponente.jsx`), um componente por arquivo. Componentes genéricos vão em `common/`; os que só fazem sentido em uma página vão em `sections/<página>/`.
2. **Hooks**: Utilize o prefixo `use` e camelCase (`useDados.js`).
3. **Páginas**: Utilize PascalCase e nomeie de forma descritiva a rota correspondente. Cada nova rota é registrada em `routes/index.jsx`.
4. **Conteúdo**: Textos, links e listas ficam em `data/`, não espalhados nos componentes.
5. **Chamadas de API**: Adicione novos recursos criando arquivos em `services/endpoints/` e o hook correspondente em `hooks/useDados.js`. O formato da resposta deve ser o mesmo do arquivo equivalente em `data/`.
6. **Estilização**: O projeto usa Tailwind CSS. Use as cores de `styles/colors.css` (`bg-accent`, `text-fg`, `border-line`…) e os tamanhos de `styles/typography.css` (`text-titulo-1`, `text-corpo`…) em vez de valores soltos como `text-[#0108f8]` ou `text-[40px]`. Botões e cards usam `Botao` e `Card` de `common/`, escolhendo a variante, em vez de repetir classes. Blocos de página usam `Secao` (rótulo, título, texto e ação).
7. **Cor**: o azul do CDI (`accent`) é para ação e item ativo — botões, links, aba selecionada. Títulos e bordas ficam em tinta e cinza. O laranja (`alert`) só marca o que é "agora" (servindo, próximo ônibus).
8. **Componentes e movimento**: vêm do Uiverse, do GSAP (com seus plugins), do Animate.css e do design system do CDI (`styles/cdi-*.css`, documentado em `design-system/index.html`). Qualquer outra biblioteca entra só com o autor e a licença registrados em `componentes.css` e no README. Não escreva efeitos de hover ou animações próprias. Tudo respeita `prefers-reduced-motion`.
9. **Mascote**: use `<Pinguim pose="…" />` (`components/common/Pinguim.jsx`) com a pose da situação (`POSE_POR_SITUACAO` em `data/pinguins.js`): dormindo no estado vazio, dúvida em ajuda e busca sem resultado, comemorando em confirmações, e assim por diante.
10. **Formatação**: Rode o Prettier (`npx prettier --write src`) antes de commitar; a configuração está em `.prettierrc`.
