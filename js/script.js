const button = document.querySelector('.js-btn');
const share = document.querySelector('.js-share');
const buttonArrow = document.querySelector('.js-btn-image');

button.addEventListener('click', () => {
  share.classList.toggle('show');
  button.classList.toggle('active');
  buttonArrow.classList.toggle('active');
});
