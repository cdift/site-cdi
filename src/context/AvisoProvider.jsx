import { useCallback, useRef, useState } from 'react';
import { AvisoContext } from './AvisoContext.js';
import Pinguim from '../components/common/Pinguim.jsx';

/* Aviso (toast) do design system: entra por baixo com o Pingu comemorando e
   some em 2,6 s. Qualquer componente chama avisar('texto') via useAviso. */
export function AvisoProvider({ children }) {
  const [texto, setTexto] = useState(null);
  const [vez, setVez] = useState(0);
  const timer = useRef(null);
  const avisar = useCallback((t) => {
    setTexto(t);
    setVez((v) => v + 1);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setTexto(null), 2600);
  }, []);
  return (
    <AvisoContext.Provider value={avisar}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className={`toast ${texto ? 'visivel' : ''}`}
      >
        <Pinguim
          key={vez}
          pose="comemorando"
          decorativo
          animar={Boolean(texto)}
        />
        <span>{texto}</span>
      </div>
    </AvisoContext.Provider>
  );
}
