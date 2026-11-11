/* Card do Uiverse.io by Sujitkavaiya (ver styles/componentes.css): fundo
   branco, sombra leve e, quando "interativo" (o card inteiro é um link),
   a borda fica azul no hover. */
export default function Card({
  as: Tag = 'div',
  interativo = false,
  className = '',
  children,
  ...props
}) {
  return (
    <Tag
      className={`card ${interativo ? 'card-interativo' : ''} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
