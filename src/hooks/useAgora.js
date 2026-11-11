import { useContext } from 'react';
import { AgoraContext } from '../context/AgoraContext.js';

/* Hora de Limeira ({ dia, min, iso }), fornecida pelo AgoraProvider. */
export function useAgora() {
  return useContext(AgoraContext);
}
