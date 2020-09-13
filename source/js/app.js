let headerElem = document.querySelector('.header'),
  headerButtonElem = undefined;
if (headerElem) headerButtonElem = headerElem.querySelector('.header__button-menu');


let productTopButtonOrderElem = document.querySelector(".product-top__button-order");

let productCardButtonOrderArr = document.querySelectorAll('.product-card__button-order');

let modalElem = document.querySelector(".modal"),
  modalButtonSubmitElem = undefined,
  modalButtonBgElem = undefined;
if (modalElem) {
  modalButtonSubmitElem = modalElem.querySelector(".modal__button-submit");
  modalButtonBgElem = modalElem.querySelector(".modal__bg");
}

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

// if (modalButtonSubmitElem) {
//   modalButtonSubmitElem.addEventListener('click', () => {
//     modalElem.classList.remove('modal--show');
//   });
// }

if (modalButtonBgElem) {
  modalButtonBgElem.addEventListener('click', () => {
    modalElem.classList.remove('modal--show');
  });
}
