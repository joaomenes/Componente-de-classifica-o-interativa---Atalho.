const grades1 = document.querySelector('#grades1');
const grades2 = document.querySelector('#grades2');
const grades3 = document.querySelector('#grades3');
const grades4 = document.querySelector('#grades4');
const grades5 = document.querySelector('#grades5');
const buttonSubmit = document.querySelector('.buttonSubmit');
const containerEvaluation = document.querySelector('.containerEvaluation');
const container = document.querySelector('.container');



buttonSubmit.addEventListener('click', () => {

    mostrar();

})

function mostrar() {
    container.style.display = 'none'
    if (containerEvaluation.style.display === 'none')
        return containerEvaluation.style.display = 'block';

}