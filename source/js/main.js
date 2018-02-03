(function() {
  'use strict';

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

  // Без проверки на существование элемента JS бросит ошибку, что указанный ДОМ-узел не найден
    // Uncaught TypeError: Cannot read property 'addEventListener' of null
  if (navMain && navToggle) {
    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.remove('main-nav--opened');
        navMain.classList.add('main-nav--closed');
      }
    });

  }

  var modal = document.querySelector('.modal');
  var orderBtn = document.querySelector('.popular-product__order');
  var addToCart = document.querySelector('.sizes__add');

  if (modal && orderBtn && addToCart) {
    orderBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
    });

    addToCart.addEventListener('click', function(evt) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
    });
  }
})();
