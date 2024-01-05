const questionButtons = document.querySelectorAll('.question');
const answerParagraphs = document.querySelectorAll('.answer');
const minusIcons = document.querySelectorAll('.minus');
const plusIcons = document.querySelectorAll('.plus');

questionButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        answerParagraphs[index].classList.toggle('visible');
        minusIcons[index].classList.toggle('visible');
        plusIcons[index].classList.toggle('visible');
    });
});