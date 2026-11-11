import { PINGUINS } from '../../data/pinguins.js';

/* Mascote do CDI. Escolha a pose por situação (POSE_POR_SITUACAO em
   data/pinguins.js) e deixe o movimento padrão da pose (classes .pg-* em
   cdi-motion.css). Todas respeitam "reduzir movimento".

   <Pinguim pose="dormindo" largura={190} />            estado vazio
   <Pinguim pose="comemorando" largura={40} decorativo /> dentro do toast
   <Pinguim pose="costas" animar={false} />              página 404

   decorativo: alt="" (use quando o texto ao lado já diz tudo).
   Sem "decorativo", o alt padrão descreve a pose. */
export default function Pinguim({
  pose = 'base',
  largura,
  alt,
  decorativo = false,
  animar = true,
  className = '',
  ...props
}) {
  const p = PINGUINS[pose];
  if (!p) return null;
  return (
    <img
      src={p.src}
      alt={decorativo ? '' : (alt ?? p.alt)}
      width={largura}
      loading="lazy"
      draggable={false}
      className={`pg ${animar ? p.anim : ''} ${className}`}
      style={largura ? { width: largura } : undefined}
      {...props}
    />
  );
}
