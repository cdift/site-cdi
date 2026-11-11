import { get } from '../api.js';

/* GET /circular. O formato da resposta é o mesmo de src/data/circular.js. */
export const buscarCircular = () => get('/circular');
