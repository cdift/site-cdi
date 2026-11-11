/* CARDÁPIO DO RU (Restaurante do Campus I).
   Fonte: sistemas.prefeituralimeira.unicamp.br/RU/view/site/cardapio.php
   Os dias ficam em cardapio.json, gerado por scripts/atualizar-cardapio.mjs
   (npm run cardapio). O GitHub Actions roda o script várias vezes por dia e faz
   commit quando o cardápio muda (ver .github/workflows/cardapio.yml).
   Com a API configurada (VITE_API_URL), os dados vêm de GET /cardapio e este
   arquivo fica como reserva. */
import dados from './cardapio.json';

export const CAMPOS_PRATO = [
  ['principal', 'Prato principal'],
  ['guarnicao', 'Guarnição'],
  ['acompanhamento', 'Acompanhamento'],
  ['salada', 'Salada'],
  ['sobremesa', 'Sobremesa'],
  ['refresco', 'Refresco'],
];

export const CARDAPIO = dados;
