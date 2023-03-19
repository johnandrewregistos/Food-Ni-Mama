const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
const payment1 = document.querySelector('#fries');
const payment2 = document.querySelector('#burger');
const payment3 = document.querySelector('#pizza');
const payment4 = document.querySelector('#shrimp');
const payment5 = document.querySelector('#spaghetti');
const order1 = document.querySelector('.item')
const cost1 = document.querySelector('.cost')
const paymentMethod = document.querySelector('#payment-method');
const close = document.querySelector('.close');
const swiperContainer = document.querySelector('.swiper');


close.addEventListener('click', () => {
  paymentMethod.classList.remove('buy-item-container');
  paymentMethod.classList.add('none');
  swiperContainer.classList.remove('none');
});


btn1.addEventListener('click', () => {
  paymentMethod.classList.add('buy-item-container');
  paymentMethod.classList.remove('none');
  swiperContainer.classList.add('none');
  let btnText = btn1.getAttribute('alt');
  order1.innerHTML = btnText;
  let payment = payment1.innerHTML;
  cost1.innerHTML = payment;
});

btn2.addEventListener('click', () => {
  paymentMethod.classList.add('buy-item-container');
  paymentMethod.classList.remove('none');
  swiperContainer.classList.add('none');
  let btnText = btn2.getAttribute('alt');
  order1.innerHTML = btnText;
  let payment = payment2.innerHTML;
  cost1.innerHTML = payment;
});

btn3.addEventListener('click', () => {
  paymentMethod.classList.add('buy-item-container');
  paymentMethod.classList.remove('none');
  swiperContainer.classList.add('none');
  let btnText = btn3.getAttribute('alt');
  order1.innerHTML = btnText;
  let payment = payment3.innerHTML;
  cost1.innerHTML = payment;
});

btn4.addEventListener('click', () => {
  paymentMethod.classList.add('buy-item-container');
  paymentMethod.classList.remove('none');
  swiperContainer.classList.add('none');
  let btnText = btn4.getAttribute('alt');
  order1.innerHTML = btnText;
  let payment = payment4.innerHTML;
  cost1.innerHTML = payment;
});

btn5.addEventListener('click', () => {
  paymentMethod.classList.add('buy-item-container');
  paymentMethod.classList.remove('none');
  swiperContainer.classList.add('none');
  let btnText = btn5.getAttribute('alt');
  order1.innerHTML = btnText;
  let payment = payment5.innerHTML;
  cost1.innerHTML = payment;
});