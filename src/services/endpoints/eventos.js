import { get } from '../api.js';

/* GET /eventos. O formato da resposta é o mesmo de src/data/eventos.js. */
export const buscarEventos = () => get('/eventos');
