
const buttonSubmit = document.querySelector('.buttonSubmit');
const containerEvaluation = document.querySelector('.containerEvaluation');
const container = document.querySelector('.container');



buttonSubmit.addEventListener('click', () => {  //capturando o clique do botão submit
    mostrar();
});

function grades1click() {
    document.querySelector('#grades1');
    const msg = document.querySelector('.informationNote');
    msg.innerHTML = 'You selected 1 out of 5';
    activeBotton()
}

function grades2click() {

    document.querySelector('#grades2');
    const msg = document.querySelector('.informationNote');
    msg.innerHTML = 'You selected 2 out of 5';
    activeBotton()
}

function grades3click() {

    document.querySelector('#grades3');
    const msg = document.querySelector('.informationNote');
    msg.innerHTML = 'You selected 3 out of 5';
    activeBotton()
}

function grades4click() {

    document.querySelector('#grades4');
    const msg = document.querySelector('.informationNote');
    msg.innerHTML = 'You selected 4 out of 5';
    activeBotton()
}

function grades5click() {

    document.querySelector('#grades5');
    const msg = document.querySelector('.informationNote');
    msg.innerHTML = 'You selected 5 out of 5';
    activeBotton()
}

function mostrar() {
    container.style.display = 'none'
    if (containerEvaluation.style.display === 'none')         //condição para esconder e mostrar a div
        return containerEvaluation.style.display = 'block';
}

function activeBotton() {
    const buttonSubmit = document.querySelector('.buttonSubmit');

    if (buttonSubmit != null) {
        buttonSubmit.disabled = false;    //ativa ou desaivar o botão submit
    }
}