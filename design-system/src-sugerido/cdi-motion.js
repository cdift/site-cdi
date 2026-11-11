/* ─────────────────────────────────────────────────────────────────────
   CDI · motion.js  (HTML estático e protótipos)

   Faz em JavaScript puro o que o site React faz com GSAP:
     - revelar blocos ao rolar          (= useRevelar)
     - esconder o cabeçalho ao rolar    (= useEscondeAoRolar do Header.jsx)
     - barra que desliza no menu        (= MenuDesktop do Header.jsx)
     - contador de números              (novo)
   No projeto React NÃO importe este arquivo: continue com GSAP + hooks.
   ───────────────────────────────────────────────────────────────────── */
(function () {
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.add('js');

  /* Revelar ao rolar: .rev, .rev-mola, .rev-pop, .rev-desfoque, .desenhar, .pg-espiar */
  var alvos = document.querySelectorAll(
    '.rev, .rev-mola, .rev-pop, .rev-desfoque, .desenhar, .pg-espiar, [data-contar]'
  );
  if (reduz || !('IntersectionObserver' in window)) {
    alvos.forEach(function (el) {
      el.classList.add('is-in');
      if (el.hasAttribute('data-contar')) contar(el, true);
    });
  } else {
    var io = new IntersectionObserver(
      function (itens) {
        itens.forEach(function (i) {
          if (!i.isIntersecting) return;
          i.target.classList.add('is-in');
          if (i.target.hasAttribute('data-contar')) contar(i.target);
          io.unobserve(i.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );
    alvos.forEach(function (el) {
      io.observe(el);
    });
  }

  /* Contador: <span data-contar="19">0</span> */
  function contar(el, direto) {
    var fim = parseFloat(el.getAttribute('data-contar'));
    if (direto) {
      el.textContent = fim;
      return;
    }
    var t0 = null;
    var dur = 900;
    function passo(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 4); /* saída forte, igual à --ease-saida */
      el.textContent = Math.round(fim * e);
      if (p < 1) requestAnimationFrame(passo);
    }
    requestAnimationFrame(passo);
  }
  window.cdiContar = contar;

  /* Cabeçalho: some ao rolar para baixo (depois de 80px), volta ao subir */
  var cab = document.querySelector('[data-cabecalho]');
  if (cab) {
    var ultimo = window.scrollY;
    window.addEventListener(
      'scroll',
      function () {
        var y = window.scrollY;
        var esconde = y > 80 && y > ultimo && window.innerWidth >= 768;
        cab.style.transform = esconde ? 'translateY(-100%)' : 'translateY(0)';
        ultimo = y;
      },
      { passive: true }
    );
  }

  /* Barra do menu: desliza até o link atual / sob o mouse */
  var menu = document.querySelector('[data-menu]');
  if (menu) {
    var barra = menu.querySelector('[data-barra]');
    var ir = function (a) {
      if (!a) {
        barra.style.opacity = 0;
        return;
      }
      barra.style.opacity = 1;
      barra.style.width = a.offsetWidth + 'px';
      barra.style.transform = 'translateX(' + a.offsetLeft + 'px)';
    };
    var atual = menu.querySelector('[aria-current="page"]');
    menu.addEventListener('mouseover', function (e) {
      var a = e.target.closest('a');
      if (a) ir(a);
    });
    menu.addEventListener('mouseleave', function () {
      ir(atual);
    });
    document.fonts && document.fonts.ready.then(function () {
      ir(atual);
    });
    ir(atual);
  }
})();
