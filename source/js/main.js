var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

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

var modal = document.querySelector('.modal');
var orderBtn = document.querySelector('.popular-product__order');
var addToCart = document.querySelector('.modal__add');

orderBtn.addEventListener('click', function() {
  modal.classList.add('modal--show');
});

addToCart.addEventListener('click', function() {
  modal.classList.remove('modal--show');
});

