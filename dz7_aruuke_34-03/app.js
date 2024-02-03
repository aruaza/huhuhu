const buttons = document.querySelectorAll('.buttons');
const answers = document.querySelectorAll('.answer');
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (answers[index].style.display === 'none') {
        answers[index].style.display = 'block';
        button.textContent = 'скрыть ответ';
    } else {
            answers[index].style.display = 'none';
        button.textContent = 'показать ответ';        }
    });
});