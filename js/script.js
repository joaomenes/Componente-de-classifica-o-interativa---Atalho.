const grades1 = document.querySelector('#grades1');
const grades2 = document.querySelector('#grades2');
const grades3 = document.querySelector('#grades3');
const grades4 = document.querySelector('#grades4');
const grades5 = document.querySelector('#grades5');


/*grades1.onclick = (e) => {
   const grades1 = document.getElementById('#grades1').value;
   localStorage.setItem('grades1', grades1);
   window.location.href = "./grades.html";
}

grades2.onclick = (e) => {
   const grades2 = document.getElementById('#grades2').value;
   window.location.href = "./grades.html";
}

grades3.onclick = (e) => {
   const grades3 = document.getElementById('#grades3').value;
   window.location.href = "./grades.html";
}

grades4.onclick = (e) => {
   const grades4 = document.getElementById('#grades4').value;
   window.location.href = "./grades.html";
}

grades5.onclick = (e) => {
   const grades5 = document.getElementById('#grades5').value;
   window.location.href = "./grades.html";
} */

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
    localStorage.setItem('valueGrades2', note);
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