import { useContext } from 'react';
import { AvisoContext } from '../context/AvisoContext.js';

/* Retorna avisar('texto'), que mostra o aviso com o Pingu (AvisoProvider). */
export function useAviso() {
  return useContext(AvisoContext);
}
