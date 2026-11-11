import { useApi } from './useApi.js';
import { buscarCardapio } from '../services/endpoints/cardapio.js';
import { buscarCircular } from '../services/endpoints/circular.js';
import { buscarProfessores } from '../services/endpoints/professores.js';
import { buscarEventos } from '../services/endpoints/eventos.js';
import { CARDAPIO } from '../data/cardapio.js';
import { CIRCULAR } from '../data/circular.js';
import { PROFESSORES } from '../data/professores.js';
import { PROXIMOS } from '../data/eventos.js';

/* Dados que podem vir do back-end. Cada hook devolve { dados, carregando, erro }. */
export const useCardapio = () => useApi(buscarCardapio, CARDAPIO);
export const useCircular = () => useApi(buscarCircular, CIRCULAR);
export const useProfessores = () => useApi(buscarProfessores, PROFESSORES);
export const useEventos = () => useApi(buscarEventos, PROXIMOS);
