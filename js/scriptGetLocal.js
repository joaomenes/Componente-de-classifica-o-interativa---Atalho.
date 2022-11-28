window.onload = () => {
    const grades1 = localStorage.getItem('valueGrades1');
    const alterar = document.querySelector('.informationNote');
    alterar.innerHTML = "You selected "  +  grades1 + " out of 5";
};

window.onload = () => {
    const grades2 = localStorage.getItem('valueGrades2');
    const alterar = document.querySelector('.informationNote');
    alterar.innerHTML = "You selected "  +  grades2 + " out of 5";
};

window.onload = () => {
    const grades3 = localStorage.getItem('valueGrades3');
    const alterar = document.querySelector('.informationNote');
    alterar.innerHTML = "You selected "  +  grades3 + " out of 5";
};


