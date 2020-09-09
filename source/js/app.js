let headerElem = document.querySelector('.header'),
  headerButtonElem = headerElem.querySelector('.header__button-menu');

let productTopButtonOrderElem = document.querySelector(".product-top__button-order");

let productCardButtonOrderArr = document.querySelectorAll('.product-card__button-order');

let modalElem = document.querySelector(".modal"),
  modalButtonAddElem = modalElem.querySelector(".modal__button-add");

headerElem.classList.remove('header--nojs');
headerButtonElem.addEventListener('click', (e) => {
  e.preventDefault();
  headerButtonElem.classList.toggle('header--menu-show');
  if (headerButtonElem.classList.contains('header--menu-show')) {
    headerElem.classList.add('header--show-menu');
  } else {
    headerElem.classList.remove('header--show-menu');
  }
});

if (productTopButtonOrderElem) {
  productTopButtonOrderElem.addEventListener('click', (e) => {
    e.preventDefault();
    modalElem.classList.add('modal--show');
  });
}

for (let i = 0; i < productCardButtonOrderArr.length; i++) {
  if (productCardButtonOrderArr[i]) {
    productCardButtonOrderArr[i].addEventListener('click', (e) => {
      e.preventDefault();
      modalElem.classList.add('modal--show');
    });
  }
}

if (modalButtonAddElem) {
  // modalElem.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   modalElem.classList.remove('modal--show');
  // });

    modalButtonAddElem.addEventListener('click', (e) => {
      e.preventDefault();
      modalElem.classList.remove('modal--show');
    });
  }
