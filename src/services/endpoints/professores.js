import { get } from '../api.js';

/* GET /professores. O formato da resposta é o mesmo de src/data/professores.js. */
export const buscarProfessores = () => get('/professores');
