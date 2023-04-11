document.querySelector('#nav #hamburger').addEventListener('click', () => {
  document.querySelector('#nav #hamburger').classList.toggle('open');
  document.querySelector('#nav .links').classList.toggle('open');
});

document.querySelector('#nav .links').addEventListener('click', () => {
  document.querySelector('#nav #hamburger').classList.toggle('open');
  document.querySelector('#nav .links').classList.toggle('open');
});

document.querySelectorAll(`#faq .question`).forEach(item => {
  item.addEventListener('click', function () {
    this.nextElementSibling.classList.toggle('answer__open');
  });
});
