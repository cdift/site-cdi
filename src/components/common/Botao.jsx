import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import SetaLonga from './SetaLonga.jsx';

/* Botão do site. Os estilos vêm do Uiverse.io (ver styles/componentes.css):
   - primario: AKAspidey01 (texto desliza, seta sobe no hover)
   - claro: o mesmo, em branco, para fundo escuro
   - secundario: adamgiebl (contorno que se enche de baixo para cima)
   - link: alexmaracinaru (sublinhado que cresce e seta longa)
   E do design system (styles/cdi-componentes.css):
   - bloco / bloco-claro: botão com sombra dura que "afunda" no hover.
     Só um por tela: a ação principal (ex.: o herói, o processo seletivo).
   Com "href" vira link externo (nova aba); com "to", link interno do router;
   sem nenhum dos dois, um <button>. */
export default function Botao({
  variante = 'primario',
  href,
  to,
  className = '',
  children,
  ...props
}) {
  const externo = Boolean(href);
  let classes;
  let conteudo;
  if (variante === 'link') {
    classes = `link-seta ${className}`;
    conteudo = (
      <>
        <span className="link-texto">{children}</span>
        <SetaLonga />
      </>
    );
  } else if (variante === 'bloco' || variante === 'bloco-claro') {
    classes = `btn-bloco ${variante === 'bloco-claro' ? 'claro' : ''} ${className}`;
    conteudo = (
      <>
        {children}
        <Icon
          name={externo ? 'arrow_outward' : 'arrow_forward'}
          className="!text-[20px]"
        />
      </>
    );
  } else if (variante === 'secundario') {
    classes = `btn-contorno ${className}`;
    conteudo = children;
  } else {
    classes = `btn-principal ${variante === 'claro' ? 'btn-claro' : ''} ${className}`;
    conteudo = (
      <>
        <span className="btn-texto">{children}</span>
        <span className="btn-icone" aria-hidden="true">
          <Icon
            name={externo ? 'arrow_outward' : 'arrow_forward'}
            className="!text-[18px]"
          />
        </span>
      </>
    );
  }

  if (externo) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className={classes}
        {...props}
      >
        {conteudo}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {conteudo}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {conteudo}
    </button>
  );
}
