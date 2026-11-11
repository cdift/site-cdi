import { get } from '../api.js';

/* GET /cardapio. O formato da resposta é o mesmo de src/data/cardapio.js. */
export const buscarCardapio = () => get('/cardapio');
