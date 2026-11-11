/* Minúsculas e sem acentos, para buscas ignorarem "á", "ç" etc. */
export const normaliza = (s) =>
  s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
