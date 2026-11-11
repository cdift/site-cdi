import { useEffect, useState } from 'react';
import { AgoraContext } from './AgoraContext.js';
import { horaSP } from '../utils/tempo.js';

/* Um único relógio para o site inteiro, atualizado a cada 30 s.
   Os componentes leem a hora com o hook useAgora. */
export function AgoraProvider({ children }) {
  const [agora, setAgora] = useState(horaSP);
  useEffect(() => {
    const t = setInterval(() => setAgora(horaSP()), 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <AgoraContext.Provider value={agora}>{children}</AgoraContext.Provider>
  );
}
