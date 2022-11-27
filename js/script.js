const grades1 = document.querySelector('#grades1');
const grades2 = document.querySelector('#grades2');
const grades3 = document.querySelector('#grades3');
const grades4 = document.querySelector('#grades4');
const grades5 = document.querySelector('#grades5');

grades1.onclick = (e) => {
    const note = document.querySelector("#grades1").value;
    localStorage.setItem('valueGrades1', note);
    window.location.href = "./grades.html";
}

grades2.onclick = (e) => {
    const note = document.querySelector("#grades2").value;
    localStorage.setItem('valueGrades2', note);
    window.location.href = "./grades.html";
}

grades3.onclick = (e) => {
    const note = document.querySelector("#grades3").value;
    localStorage.setItem('valueGrades3', note);
    window.location.href = "./grades.html";
}

grades4.onclick = (e) => {
    const note = document.querySelector("#grades4").value;
    localStorage.setItem('valueGrades4', note);
    window.location.href = "./grades.html";
}

grades5.onclick = (e) => {
    const note = document.querySelector("#grades5").value;
    localStorage.setItem('valueGrades5', note);
    window.location.href = "./grades.html";
}

