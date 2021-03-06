(function() {
  'use strict';

  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.main-nav__toggle');

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
  var addToCart = document.querySelector('.product__cart');
  var catalog = document.querySelector('.catalog__list');

  function openModal () {
    modal.classList.add('modal--show');
  }

  function closeModal () {
    modal.classList.remove('modal--show');
  }

  if (modal && orderBtn) {
    orderBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      openModal();
    });
  }

  if (modal && addToCart) {
    addToCart.addEventListener('click', function(evt) {
      evt.preventDefault();
      openModal();
    });
  }

  if (catalog) {
    catalog.addEventListener('click', function (evt) {
      if (evt.target.classList.contains('product__cart')) {
        evt.preventDefault();
        openModal();
      }
    });
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (modal.classList.contains('modal--show')) {
        closeModal();
      }
    }
  });

  window.addEventListener('click', function (evt) {
    if (evt.target === modal) {
      closeModal();
    }
  });
})();


// This function has to be in global scope in order to initialize map from HTML
function initMap() {
  var academy = {lat: 59.9385536, lng: 30.3228812},
      mapNode = document.getElementById('google-map');

  if (mapNode) {
    var map = new google.maps.Map(mapNode, {
      zoom: 16.5,
      center: {lat: 59.9387942, lng: 30.3230833},
      scrollwheel: false
});

    var marker = new google.maps.Marker({
      position: academy,
      map: map,
      icon: 'img/map-pin.png'
    });
  }
}
