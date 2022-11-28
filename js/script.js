const grades1 = document.querySelector('#grades1');
const grades2 = document.querySelector('#grades2');
const grades3 = document.querySelector('#grades3');
const grades4 = document.querySelector('#grades4');
const grades5 = document.querySelector('#grades5');
const buttonSubmit = document.querySelector('.buttonSubmit');

buttonSubmit.addEventListener('click', function () {
    
    if(grades1.value) return alert("necessário selecionar uma avaliação");
    else{window.location.href = "./grades.html";}

});

function clickNote1() {
    const note = document.querySelector("#grades1").value;
    localStorage.setItem('valueGrades1', note);
}

grades2.onclick = (e) => {
    const note = document.querySelector("#grades2").value;
    localStorage.setItem('valueGrades2', note);
}


grades3.onclick = (e) => {
    const note = document.querySelector("#grades3").value;
    localStorage.setItem('valueGrades3', note);

}

grades4.onclick = (e) => {
    const note = document.querySelector("#grades4").value;
    localStorage.setItem('valueGrades4', note);

}

grades5.onclick = (e) => {
    const note = document.querySelector("#grades5").value;
    localStorage.setItem('valueGrades5', note);

}
