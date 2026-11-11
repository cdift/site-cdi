/* Selo de estado do design system (.selo em cdi-componentes.css).
   tipo: 'agora' (laranja claro + ponto vivo: servindo, próximo ônibus),
   'novo', 'ok', 'erro', 'info' ou nenhum (cinza). */
export default function Selo({ tipo, children, className = '', ...props }) {
  return (
    <span
      className={`selo ${tipo ? `selo-${tipo}` : ''} ${className}`}
      {...props}
    >
      {tipo === 'agora' && <span className="ponto-vivo" aria-hidden="true" />}
      {children}
    </span>
  );
}
