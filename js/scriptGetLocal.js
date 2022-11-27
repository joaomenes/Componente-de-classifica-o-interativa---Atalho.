window.onload = () => {
    const grades1 = localStorage.getItem('valueGrades1');
    const alterar = document.querySelector('.informationNote');
    alterar.innerHTML = grades1;
};

