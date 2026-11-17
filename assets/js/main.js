// Mobile menu
(function () {
  var menu = document.getElementById('menu');
  var burger = document.querySelector('.burger');
  if (menu && burger) {
    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
  }

  // Publication filter tabs
  var btns = document.querySelectorAll('.tabs button');
  btns.forEach(function (b) {
    b.addEventListener('click', function () {
      btns.forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
      b.setAttribute('aria-pressed', 'true');
      document.querySelectorAll('#pubs li').forEach(function (li) {
        li.hidden = !(b.dataset.f === 'all' || li.dataset.k === b.dataset.f);
      });
    });
  });
})();
