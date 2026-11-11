import axios from 'axios';

/* Cliente da API do back-end.
   O endereço vem de VITE_API_URL (arquivo .env, ver .env.example). Sem ele,
   apiConfigurada é false e os hooks de src/hooks/useDados.js usam só os dados
   locais de src/data/. */
const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/+$/, '');

export const apiConfigurada = BASE !== '';

const api = axios.create({
  baseURL: BASE,
  timeout: 10000,
  headers: { Accept: 'application/json' },
});

// Interceptor para tratar erros centralizados
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

/* Guarda a resposta de cada GET para que várias telas não repitam a mesma chamada. */
const cache = new Map();

export function get(caminho) {
  if (!cache.has(caminho)) {
    const req = api
      .get(caminho)
      .then((r) => r.data)
      .catch((e) => {
        cache.delete(caminho);
        throw e;
      });
    cache.set(caminho, req);
  }
  return cache.get(caminho);
}

export default api;
